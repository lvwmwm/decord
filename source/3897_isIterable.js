// Module ID: 3897
// Function ID: 3898
// Name: isIterable
// Dependencies: [3898, 3899]

// Module 3897 (isIterable)
const require = arg1;
const dependencyMap = arg6;
let obj = {
  enumerable: true,
  get() {
    return require(3898) /* isIterable */.shallow;
  }
};
Object.defineProperty(arg5, "shallow", obj);
obj = {
  enumerable: true,
  get() {
    return require(3899) /* useShallow */.useShallow;
  }
};
Object.defineProperty(arg5, "useShallow", obj);
