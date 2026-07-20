// Module ID: 43
// Function ID: 1303
// Name: map
// Dependencies: []

// Module 43 (map)
let obj = {};
obj = {};
const map = new Map();
const map1 = new Map();
arg5.customBubblingEventTypes = obj;
arg5.customDirectEventTypes = obj;
arg5.register = function register(arg0, arg1) {
  arg2(arg6[0])(!map.has(arg0), "Tried to register two views with the same name %s", arg0);
  let str = "null";
  const tmp = arg2(arg6[0]);
  if (null !== arg1) {
    str = tmp4;
  }
  arg2(arg6[0])("function" === typeof arg1, "View config getter callback for component `%s` must be a function (received `%s`)", arg0, str);
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
        str4 = "";
        if (obj.test(arg0[0])) {
          str4 = " Make sure to start component names with a capital letter.";
        }
        const obj = /[a-z]/;
      }
      arg2(arg6[0])(false, "View config getter callback for component `%s` must be a function (received `%s`).%s", arg0, str, str4);
      const tmp4 = arg2(arg6[0]);
    }
    const value1Result = value();
    arg2(arg6[0])(value1Result, "View config not found for component `%s`", arg0);
    ({ bubblingEventTypes, directEventTypes } = value1Result);
    if (null != bubblingEventTypes) {
      for (const key10041 in bubblingEventTypes) {
        let tmp24 = key10041;
        let tmp25 = closure_2;
        if (null != closure_2[key10041]) {
          continue;
        } else {
          let tmp14 = closure_2;
          closure_2[key10041] = bubblingEventTypes[key10041];
          // continue
        }
        continue;
      }
    }
    if (null != directEventTypes) {
      for (const key10046 in directEventTypes) {
        let tmp26 = key10046;
        let tmp27 = closure_3;
        if (null != closure_3[key10046]) {
          continue;
        } else {
          let tmp16 = closure_3;
          closure_3[key10046] = directEventTypes[key10046];
          // continue
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
