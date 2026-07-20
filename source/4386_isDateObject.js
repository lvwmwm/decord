// Module ID: 4386
// Function ID: 38744
// Name: isDateObject
// Dependencies: []

// Module 4386 (isDateObject)
let closure_0 = require(dependencyMap[0])("Date.prototype.getDay");
let closure_1 = require(dependencyMap[0])("Object.prototype.toString");
let closure_2 = require(dependencyMap[1])();

export default function isDateObject(arg0) {
  let tmp = "object" === typeof arg0;
  if (tmp) {
    tmp = null !== arg0;
  }
  if (!tmp) {
    return tmp;
  } else {
    if (!closure_2) {
      "[object Date]" === callback2(arg0);
    }
    callback(arg0);
    let flag = true;
    while (true) {
      let tmp9 = __exception;
      flag = false;
      // continue
    }
  }
};
