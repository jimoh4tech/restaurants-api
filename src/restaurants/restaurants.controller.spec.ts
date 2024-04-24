import { Test, TestingModule } from '@nestjs/testing';
import { RestaurantsController } from './restaurants.controller';

describe('RestaurantsController', () => {
  let controller: RestaurantsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RestaurantsController],
    }).compile();

    controller = module.get<RestaurantsController>(RestaurantsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should find restaurants', () => {
    const restaurants = controller.findRestaurants(
      'New York',
      40.7128,
      -74.006,
      1000,
    );
    expect(restaurants).toBeDefined();
    expect(restaurants.restaurants.length).toBeGreaterThan(0);
  });

  it('should get restaurant by id', () => {
    const restaurant = controller.findOneRestaurant('1');
    expect(restaurant).toBeDefined();
  });

  it('should throw error for invalid id', () => {
    expect(() => {
      controller.findOneRestaurant('13');
    }).toThrow('Restaurant not found');
  });

  it('should create new restaurant', () => {
    const restaurant = controller.createRestaurant({
      name: 'Noodles Heavens',
      address: '456 Elm St, New York, NY',
      latitude: 40.7145,
      longitude: -74.0082,
    });
    expect(restaurant).toBeDefined();
  });
  it('should update a restaurant with id', () => {
    const restaurant = controller.updateRestaurant('1', {
      address: '23, Uganda, NG',
      latitude: 20.22,
      longitude: 11.22,
      name: 'Casino Pizza',
    });
    expect(restaurant).toBeDefined();
  });

  it('should delete a restaurant with id', () => {
    const restaurant = controller.deleteRestaurant('1');
    expect(restaurant.response).toContain('restaurant deleted');
  });
});
