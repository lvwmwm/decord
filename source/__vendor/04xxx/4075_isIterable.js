// Module ID: 4075
// Function ID: 4076
// Name: isIterable
// Dependencies: [4076, 4077]

// Module 4075 (isIterable)
const require = arg1;
const dependencyMap = arg6;
let obj = {
  enumerable: true,
  get() {
    return require(4076) /* isIterable */.shallow;
  }
};
Object.defineProperty(arg5, "shallow", obj);
obj = {
  enumerable: true,
  get() {
    return require(4077) /* useShallow */.useShallow;
  }
};
Object.defineProperty(arg5, "useShallow", obj);
