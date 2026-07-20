// Module ID: 190
// Function ID: 2657
// Name: isNativeFunction
// Dependencies: []

// Module 190 (isNativeFunction)
function isNativeFunction(arg0) {
  let tmp = "function" === typeof arg0;
  if (tmp) {
    let str = arg0.toString();
    str = "[native code]";
    tmp = str.indexOf("[native code]") > -1;
  }
  return tmp;
}
arg5.isNativeFunction = isNativeFunction;
arg5.hasNativeConstructor = function hasNativeConstructor(arg0, GeneratorFunction) {
  const constructor = Object.getPrototypeOf(arg0).constructor;
  let tmp = constructor.name === GeneratorFunction;
  if (tmp) {
    tmp = isNativeFunction(constructor);
  }
  return tmp;
};
