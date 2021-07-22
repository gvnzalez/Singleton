class Car {
  constructor() {
    if (typeof Car.instance === 'object') {
      return Car.instance;
    }
    Car.instance = this;
      return this;
  }
}
  export default Car;