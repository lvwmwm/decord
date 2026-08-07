// Module ID: 3914
// Function ID: 3915
// Name: isIterable
// Dependencies: [3915, 3916]

// Module 3914 (isIterable)
const require = arg1;
const dependencyMap = arg6;
let obj = {
  enumerable: true,
  get() {
    return require(3915) /* isIterable */.shallow;
  }
};
Object.defineProperty(arg5, "shallow", obj);
obj = {
  enumerable: true,
  get() {
    return require(3916) /* useShallow */.useShallow;
  }
};
Object.defineProperty(arg5, "useShallow", obj);
