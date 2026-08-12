// Module ID: 3974
// Function ID: 3975
// Name: isIterable
// Dependencies: [3975, 3976]

// Module 3974 (isIterable)
const require = arg1;
const dependencyMap = arg6;
let obj = {
  enumerable: true,
  get() {
    return require(3975) /* isIterable */.shallow;
  }
};
Object.defineProperty(arg5, "shallow", obj);
obj = {
  enumerable: true,
  get() {
    return require(3976) /* useShallow */.useShallow;
  }
};
Object.defineProperty(arg5, "useShallow", obj);
