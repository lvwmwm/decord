// Module ID: 66
// Function ID: 67
// Name: customBubblingEventTypes
// Dependencies: [38]
// Exports: get, register

// Module 66 (customBubblingEventTypes)
import _modDef38 from "module_38" /* 38 */;

const customBubblingEventTypes = {};
const obj2 = {};
const map = new Map();
const map1 = new Map();

export { customBubblingEventTypes };
export const customDirectEventTypes = obj2;
export const register = function register(arg0, fn) {
  const tmp = _modDef38;
  tmp(!map.has(arg0), "Tried to register two views with the same name %s", arg0);
  let str = "null";
  const obj = map;
  const tmp3 = _modDef38;
  if (null !== fn) {
    str = typeof fn;
  }
  tmp3(typeof fn === "function", "View config getter callback for component `%s` must be a function (received `%s`)", arg0, str);
  const result = obj.set(arg0, fn);
  return arg0;
};
export const get = function get(arg0) {
  let bubblingEventTypes;
  let directEventTypes;
  let value = map1.get(arg0);
  if (null == value) {
    const value2 = map.get(arg0);
    if (typeof value2 !== "function") {
      let str = "null";
      const tmp17 = _modDef38;
      if (null !== value2) {
        str = typeof value2;
      }
      let str3 = "";
      if (typeof arg0[0] === "string") {
        str3 = "";
        const obj3 = /[a-z]/;
        if (obj3.test(arg0[0])) {
          str3 = " Make sure to start component names with a capital letter.";
        }
      }
      tmp17(false, "View config getter callback for component `%s` must be a function (received `%s`).%s", arg0, str, str3);
    }
    const value1Result = value2();
    _modDef38(value1Result, "View config not found for component `%s`", arg0);
    ({ bubblingEventTypes, directEventTypes } = value1Result);
    if (null != bubblingEventTypes) {
      for (const key10028 in bubblingEventTypes) {
        if (null != obj[key10028]) {
          continue;
        } else {
          tmp19[key10028] = bubblingEventTypes[key10028];
          continue;
        }
        continue;
      }
    }
    if (null != directEventTypes) {
      for (const key10032 in directEventTypes) {
        if (null != obj2[key10032]) {
          continue;
        } else {
          tmp21[key10032] = directEventTypes[key10032];
          continue;
        }
        continue;
      }
    }
    const result = obj.set(arg0, value1Result);
    const result1 = obj2.set(arg0, null);
    value = value1Result;
  }
  return value;
};
