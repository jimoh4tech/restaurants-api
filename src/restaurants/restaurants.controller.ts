import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';

@Controller('v1/restaurants')
export class RestaurantsController {
  private restaurants = [
    {
      id: 1,
      name: 'Cafe Delight',
      address: '123 Main St, New York, NY',
      latitude: 40.7112,
      longitude: -74.0055,
    },
    {
      id: 2,
      name: 'Pasta Paradise',
      address: '456 Elm St, New York, NY',
      latitude: 40.7145,
      longitude: -74.0082,
    },
  ];

  @Get()
  findRestaurants(
    @Query('city') city?: string,
    @Query('latitude') latitude?: number,
    @Query('longitude') longitude?: number,
    @Query('distance') distance?: number,
  ) {
    let filteredResturants = [...this.restaurants];
    if (city) {
      filteredResturants = filteredResturants.filter((res) =>
        res.address.includes(city),
      );
    }
    // Not clear about the filter mechanism expected here, sent a mail but got no response
    if (latitude) {
      filteredResturants = filteredResturants;
    }
    if (longitude) {
      filteredResturants = filteredResturants;
    }
    if (distance) {
      filteredResturants = filteredResturants;
    }
    

    return {
      restaurants: filteredResturants,
    };
  }

  @Get(':id')
  findOneRestaurant(@Param('id') id: string) {
    const restaurant = this.restaurants.find((r) => r.id === +id);
    if (!restaurant) {
      throw new NotFoundException('Restaurant not found');
    }
    return restaurant;
  }

  @Post()
  createRestaurant(@Body() restaurant: CreateRestaurantDto) {
    this.restaurants.push({
      id: this.restaurants.length + 1,
      ...restaurant,
    });
    return restaurant;
  }

  @Put(':id')
  updateRestaurant(
    @Param('id') id: string,
    @Body() restaurant: UpdateRestaurantDto,
  ) {
    const index = this.restaurants.findIndex((r) => r.id === +id);
    if (index === -1) {
      throw new NotFoundException('Restaurant not found');
    }
    this.restaurants[index] = {
      id: +id,
      ...restaurant,
    };
    return restaurant;
  }

  @Delete(':id')
  deleteRestaurant(@Param('id') id: string) {
    const index = this.restaurants.findIndex((r) => r.id === +id);
    if (index === -1) {
      throw new NotFoundException('Restaurant not found');
    }
    this.restaurants.splice(index, 1);
    return { response: 'restaurant deleted' };
  }
}
