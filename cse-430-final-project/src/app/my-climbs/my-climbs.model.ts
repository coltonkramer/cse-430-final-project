export class MyClimbs {
    constructor(
      public id: string,
      public name: string,
      public location: string,
      public grade: string,
      public group: MyClimbs[],
    ) {}
  }