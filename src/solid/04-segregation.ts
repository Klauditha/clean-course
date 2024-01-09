interface Bird{
    fly(): void;
    eat(): void;
    run(): void;
    swim(): void;
}

class Tucan implements Bird {
  public fly() {}
  public eat() {}
  public run() {}
  public swim() {} //No aplica para esta ave
}

class Humminbird implements Bird {
  public fly() {}
  public eat() {}
  public run() {}
  public swim() {} //No aplica para esta ave
}

class Ostrich implements Bird {
  public fly() {
    throw new Error("Ostrich can't fly");
  }
  public eat() {}
  public run() {}
  public swim() {}
}


class Penguin implements Bird {
    public fly() {
      throw new Error("Penguin can't fly");
    }
    public eat() {}
    public run() {}
    public swim() {}
  }
  