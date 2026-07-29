// Module ID: 3802
// Function ID: 3803
// Name: isIterable
// Dependencies: [3803, 3804]

// Module 3802 (isIterable)
const require = arg1;
const dependencyMap = arg6;
let obj = {
  enumerable: true,
  get() {
    return require(3803) /* isIterable */.shallow;
  }
};
Object.defineProperty(arg5, "shallow", obj);
obj = {
  enumerable: true,
  get() {
    return require(3804) /* useShallow */.useShallow;
  }
};
Object.defineProperty(arg5, "useShallow", obj);
