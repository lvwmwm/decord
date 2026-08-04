// Module ID: 3898
// Function ID: 3899
// Name: isIterable
// Dependencies: [3899, 3900]

// Module 3898 (isIterable)
const require = arg1;
const dependencyMap = arg6;
let obj = {
  enumerable: true,
  get() {
    return require(3899) /* isIterable */.shallow;
  }
};
Object.defineProperty(arg5, "shallow", obj);
obj = {
  enumerable: true,
  get() {
    return require(3900) /* useShallow */.useShallow;
  }
};
Object.defineProperty(arg5, "useShallow", obj);
