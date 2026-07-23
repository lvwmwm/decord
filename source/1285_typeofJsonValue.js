// Module ID: 1285
// Function ID: 15045
// Name: typeofJsonValue
// Dependencies: []

// Module 1285 (typeofJsonValue)
arg5.typeofJsonValue = undefined;
arg5.isJsonObject = undefined;
arg5.typeofJsonValue = function typeofJsonValue(prepareResult) {
  if ("object" === typeof prepareResult) {
    const _Array = Array;
    if (Array.isArray(prepareResult)) {
      return "array";
    } else if (null === prepareResult) {
      return "null";
    }
  }
  return typeof prepareResult;
};
arg5.isJsonObject = function isJsonObject(arg0) {
  let tmp = null !== arg0;
  if (tmp) {
    tmp = "object" === typeof arg0;
  }
  if (tmp) {
    const _Array = Array;
    tmp = !Array.isArray(arg0);
  }
  return tmp;
};
