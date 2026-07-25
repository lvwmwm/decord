// Module ID: 3744
// Function ID: 28588
// Name: isIterable
// Dependencies: [3745, 3746]

// Module 3744 (isIterable)
const require = arg1;
const dependencyMap = arg6;
let obj = {
  enumerable: true,
  get() {
    return require(3745) /* isIterable */.shallow;
  }
};
Object.defineProperty(arg5, "shallow", obj);
obj = {
  enumerable: true,
  get() {
    return require(3746) /* useShallow */.useShallow;
  }
};
Object.defineProperty(arg5, "useShallow", obj);
