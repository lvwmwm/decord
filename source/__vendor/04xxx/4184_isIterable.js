// Module ID: 4184
// Function ID: 4185
// Name: isIterable
// Dependencies: [4185, 4186]

// Module 4184 (isIterable)
const require = arg1;
const dependencyMap = arg6;
let obj = {
  enumerable: true,
  get() {
    return require(4185) /* isIterable */.shallow;
  }
};
Object.defineProperty(arg5, "shallow", obj);
obj = {
  enumerable: true,
  get() {
    return require(4186) /* useShallow */.useShallow;
  }
};
Object.defineProperty(arg5, "useShallow", obj);
