// Module ID: 13167
// Function ID: 99583
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 4294967295]

// Module 13167
import result from "result";
import result from "result";

let closure_5 = require("result")("".slice);
let closure_6 = require("result")("".replace);
let closure_7 = require("result")([].join);
if (result) {
  result = !require("result")(() => 8 !== defineProperty(() => {

  }, "length", { value: 8 }).length);
}
let closure_9 = String(String).split("String");
const fn = (name, toString) => {
  let text = toString;
  if ("Symbol(" === callback(String(toString), 0, 7)) {
    text = `${"[" + closure_6(closure_3(tmp), /^Symbol\(([^)]*)\).*$/, "$1")}]`;
  }
  let getter = arg2;
  if (arg2) {
    getter = arg2.getter;
  }
  if (getter) {
    text = `get ${tmp}`;
  }
  let setter = arg2;
  if (arg2) {
    setter = arg2.setter;
  }
  if (setter) {
    text = `set ${tmp}`;
  }
  let tmp9 = !require(dependencyMap[4])(name, "name");
  if (!tmp9) {
    let CONFIGURABLE = require(dependencyMap[5]).CONFIGURABLE;
    if (CONFIGURABLE) {
      CONFIGURABLE = name.name !== text;
    }
    tmp9 = CONFIGURABLE;
  }
  if (tmp9) {
    if (require(dependencyMap[2])) {
      let obj = { value: text, configurable: true };
      defineProperty(name, "name", obj);
    } else {
      name.name = text;
    }
  }
  let tmp22 = result;
  if (result) {
    tmp22 = arg2;
  }
  if (tmp22) {
    tmp22 = require(dependencyMap[4])(arg2, "arity");
  }
  if (tmp22) {
    tmp22 = name.length !== arg2.arity;
  }
  if (tmp22) {
    obj = { value: arg2.arity };
    defineProperty(name, "length", obj);
  }
  if (arg2) {
    if (require(dependencyMap[4])(arg2, "constructor")) {
      if (arg2.constructor) {
        if (require(dependencyMap[2])) {
          obj = { writable: false };
          defineProperty(name, "prototype", obj);
        }
      }
      while (true) {
        let tmp41 = require;
        let tmp42 = dependencyMap;
        let num4 = 6;
        let obj4 = require(dependencyMap[6]);
        let tmp43 = name;
        let enforceResult = obj4.enforce(name);
        let tmp45 = enforceResult;
        let str10 = "source";
        if (require(dependencyMap[4])(enforceResult, "source")) {
          break;
        } else {
          let tmp48 = text;
          let str11 = "";
          let str12 = "string";
          let tmp46 = closure_7;
          let tmp47 = closure_9;
          if ("string" === typeof text) {
            str11 = text;
          }
          enforceResult.source = tmp46(tmp47, str11);
          // break
        }
        return name;
      }
    }
  }
  if (name.prototype) {
    name.prototype = undefined;
  }
};
Function.prototype.toString = fn(function toString() {
  const self = this;
  let source = require(dependencyMap[7])(this);
  if (source) {
    source = require(dependencyMap[6]).get(self).source;
    const obj = require(dependencyMap[6]);
  }
  if (!source) {
    source = result(self);
  }
  return source;
}, "toString");

export default fn;
