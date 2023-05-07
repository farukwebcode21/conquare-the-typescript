const heroObj: {
  name: string;
  readonly age: number;
  profession: string;
  isMarried?: boolean; //optional parameter
} = {
  name: "Shakib Khan",
  age: 35,
  profession: "Actor",
};

heroObj.name = "Faruk Ahmad";
console.log(heroObj);
