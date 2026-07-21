// Module ID: 1463
// Function ID: 16996
// Name: goBack
// Dependencies: []

// Module 1463 (goBack)
arg5.goBack = function goBack() {
  return { type: "GO_BACK" };
};
arg5.navigate = function navigate() {
  let first;
  if (arguments.length > 0) {
    first = arguments[0];
  }
  if ("string" === typeof first) {
    let obj = { type: "NAVIGATE" };
    obj = {};
    let first1;
    if (arguments.length > 0) {
      first1 = arguments[0];
    }
    obj.name = first1;
    let tmp8;
    if (arguments.length > 1) {
      tmp8 = arguments[1];
    }
    obj.params = tmp8;
    obj.payload = obj;
    return obj;
  } else {
    let first2;
    if (arguments.length > 0) {
      first2 = arguments[0];
    }
    if (!first2) {
      first2 = {};
    }
    if (!first2.hasOwnProperty("key")) {
      if (!first2.hasOwnProperty("name")) {
        const _Error = Error;
        const error = new Error("You need to specify name or key when calling navigate with an object as the argument. See https://reactnavigation.org/docs/navigation-actions#navigate for usage.");
        throw error;
      }
    }
    const obj1 = { type: "NAVIGATE", payload: first2 };
    return obj1;
  }
};
arg5.reset = function reset(payload) {
  return { type: "RESET", payload };
};
arg5.setParams = function setParams(params) {
  const payload = { params };
  return { type: "SET_PARAMS", payload };
};
