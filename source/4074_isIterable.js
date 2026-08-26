// Module ID: 4074
// Function ID: 4075
// Name: isIterable
// Dependencies: [4075, 4076]

// Module 4074 (isIterable)
const require = arg1;
const dependencyMap = arg6;
let obj = {
  enumerable: true,
  get() {
    return require(4075) /* isIterable */.shallow;
  }
};
Object.defineProperty(arg5, "shallow", obj);
obj = {
  enumerable: true,
  get() {
    return require(4076) /* useShallow */.useShallow;
  }
};
Object.defineProperty(arg5, "useShallow", obj);
