// Module ID: 43
// Function ID: 1303
// Name: map
// Dependencies: [44]

// Module 43 (map)
const module = arg2;
const dependencyMap = arg6;
let obj = {};
obj = {};
const map = new Map();
const map1 = new Map();
arg5.customBubblingEventTypes = obj;
arg5.customDirectEventTypes = obj;
arg5.register = function register(arg0, arg1) {
  module(44)(!map.has(arg0), "Tried to register two views with the same name %s", arg0);
  let str = "null";
  const tmp = module(44);
  if (null !== arg1) {
    str = tmp4;
  }
  module(44)("function" === typeof arg1, "View config getter callback for component `%s` must be a function (received `%s`)", arg0, str);
  const result = map.set(arg0, arg1);
  return arg0;
};
arg5.get = function get(arg0) {
  let bubblingEventTypes;
  let directEventTypes;
  let value = map1.get(arg0);
  if (null == value) {
    value = map.get(arg0);
    if ("function" !== typeof value) {
      let str = "null";
      if (null !== value) {
        str = tmp23;
      }
      let str4 = "";
      if ("string" === typeof arg0[0]) {
        const obj = /[a-z]/;
        str4 = "";
        if (obj.test(arg0[0])) {
          str4 = " Make sure to start component names with a capital letter.";
        }
      }
      module(44)(false, "View config getter callback for component `%s` must be a function (received `%s`).%s", arg0, str, str4);
      const tmp4 = module(44);
    }
    const value1Result = value();
    module(44)(value1Result, "View config not found for component `%s`", arg0);
    ({ bubblingEventTypes, directEventTypes } = value1Result);
    if (null != bubblingEventTypes) {
      for (const key10041 in bubblingEventTypes) {
        let tmp24 = key10041;
        let tmp25 = obj;
        if (null != obj[key10041]) {
          continue;
        } else {
          let tmp14 = obj;
          obj[key10041] = bubblingEventTypes[key10041];
          continue;
        }
        continue;
      }
    }
    if (null != directEventTypes) {
      for (const key10046 in directEventTypes) {
        let tmp26 = key10046;
        let tmp27 = obj;
        if (null != obj[key10046]) {
          continue;
        } else {
          let tmp16 = obj;
          obj[key10046] = directEventTypes[key10046];
          continue;
        }
        continue;
      }
    }
    const result = map1.set(arg0, value1Result);
    const result1 = map.set(arg0, null);
    value = value1Result;
  }
  return value;
};
