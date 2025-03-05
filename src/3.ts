class SchoolProject {
  constructor(private name: string) {}

  public greet() {
    console.log(`Hello, ${this.name}!`);
  }

  public goodbye() {
    console.log(`Goodbye, ${this.name}!`);
  }

  public main() {
    this.greet();
    this.goodbye();
  }
}
