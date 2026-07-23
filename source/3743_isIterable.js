// Module ID: 3743
// Function ID: 28576
// Name: isIterable
// Dependencies: [3744, 3745]

// Module 3743 (isIterable)
const require = arg1;
const dependencyMap = arg6;
let obj = {
  enumerable: true,
  get() {
    return require(3744) /* isIterable */.shallow;
  }
};
Object.defineProperty(arg5, "shallow", obj);
obj = {
  enumerable: true,
  get() {
    return require(3745) /* useShallow */.useShallow;
  }
};
Object.defineProperty(arg5, "useShallow", obj);
