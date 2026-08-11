// Module ID: 3933
// Function ID: 3934
// Name: isIterable
// Dependencies: [3934, 3935]

// Module 3933 (isIterable)
const require = arg1;
const dependencyMap = arg6;
let obj = {
  enumerable: true,
  get() {
    return require(3934) /* isIterable */.shallow;
  }
};
Object.defineProperty(arg5, "shallow", obj);
obj = {
  enumerable: true,
  get() {
    return require(3935) /* useShallow */.useShallow;
  }
};
Object.defineProperty(arg5, "useShallow", obj);
