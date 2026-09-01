// Module ID: 4106
// Function ID: 4107
// Name: isIterable
// Dependencies: [4107, 4108]

// Module 4106 (isIterable)
const require = arg1;
const dependencyMap = arg6;
let obj = {
  enumerable: true,
  get() {
    return require(4107) /* isIterable */.shallow;
  }
};
Object.defineProperty(arg5, "shallow", obj);
obj = {
  enumerable: true,
  get() {
    return require(4108) /* useShallow */.useShallow;
  }
};
Object.defineProperty(arg5, "useShallow", obj);
