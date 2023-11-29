type Size = "" | "S" | "M" | "L" | "XL";
class Product {
  constructor(
    public name: string = "",
    public price: number = 0,
    public size: Size = ""
  ) {}

  toString() {

    // No dry
    if (this.name.length <= 0) {
      throw new Error("Name is empty");
    }
    if (this.price <= 0) {
      throw new Error("Price is zero");
    }
    if(this.size.length <= 0) {
      throw new Error("Size is empty");
    }
    return `${this.name} (${this.price}) , ${this.size}`;
  }
}

() => {
  const bluePants = new Product("Blue Large Pants", 10, "L");
  //console.log({ bluePants });
  console.log(bluePants.toString());
};
