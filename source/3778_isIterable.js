// Module ID: 3778
// Function ID: 28691
// Name: isIterable
// Dependencies: [3779, 3780]

// Module 3778 (isIterable)
const require = arg1;
const dependencyMap = arg6;
let obj = {
  enumerable: true,
  get() {
    return require(3779) /* isIterable */.shallow;
  }
};
Object.defineProperty(arg5, "shallow", obj);
obj = {
  enumerable: true,
  get() {
    return require(3780) /* useShallow */.useShallow;
  }
};
Object.defineProperty(arg5, "useShallow", obj);
