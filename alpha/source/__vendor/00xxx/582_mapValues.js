// Module ID: 582
// Function ID: 583
// Name: mapValues
// Dependencies: [583, 528, 667]

// Module 582 (mapValues)
import baseAssignValue from "baseAssignValue" /* 667 */;

const require = globalThis.__r;
let _require;


export default function mapValues(arg0, arg1) {
  let closure_0;
  _require = arg1;
  const obj = {};
  _require = require("baseIteratee")(arg1, 3);
  let tmp = require("baseForOwn")(arg0, (arg0, arg1, arg2) => {
    const tmp = baseAssignValue;
    tmp(obj, arg1, closure_0(arg0, arg1, arg2));
  });
  return obj;
};
