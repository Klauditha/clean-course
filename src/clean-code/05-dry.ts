type Size = '' | 'S' | 'M' | 'L' | 'XL';
class Product {
  constructor(
    public name: string = '',
    public price: number = 0,
    public size: Size = ''
  ) {}

  isProductReady(): boolean {
    //Dry
    for (const key in this) {
      //console.log(key)
      console.log(key, typeof this[key]);
      switch (typeof this[key]) {
        case 'string':
          if ((<string>(<unknown>this[key])).length <= 0) {
            throw new Error(`${key} is empty`);
          }
          break;
        case 'number':
          if ((<string>(<unknown>this[key])).length <= 0) {
            throw new Error(`${key} is zero`);
          }
          break;
        default:
          throw new Error(`${typeof this[key]} is not supported`);
      }
    }
    return true;
  }
  toString() {
    // No dry
    /*
    if (this.name.length <= 0) {
      throw new Error("Name is empty");
    }
    if (this.price <= 0) {
      throw new Error("Price is zero");
    }
    if(this.size.length <= 0) {
      throw new Error("Size is empty");
    }*/

    if (!this.isProductReady()) return;
    return `${this.name} (${this.price}) , ${this.size}`;
  }
}

() => {
  const bluePants = new Product('Blue Large Pants');
  //console.log({ bluePants });
  console.log(bluePants.toString());
};
