// Module ID: 13341
// Function ID: 102099
// Dependencies: [13342, 13290, 13286, 13287, 13306, 13343, 13344, 13309]

// Module 13341
import __core_js_shared__ from "__core-js_shared__";
import getOwnPropertyDescriptor from "getOwnPropertyDescriptor";

let closure_5 = require("call")("".slice);
let closure_6 = require("call")("".replace);
let closure_7 = require("call")([].join);
if (getOwnPropertyDescriptor) {
  getOwnPropertyDescriptor = !require("module_13287")(() => 8 !== defineProperty(() => {

  }, "length", { value: 8 }).length);
}
let closure_9 = String(String).split("String");
const fn = (name, toString) => {
  let text = toString;
  if ("Symbol(" === callback(String(toString), 0, 7)) {
    text = `${"[" + closure_6(String(tmp), /^Symbol\(([^)]*)\).*$/, "$1")}]`;
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
  let tmp9 = !require(13306) /* call */(name, "name");
  if (!tmp9) {
    let CONFIGURABLE = require(13343).CONFIGURABLE;
    if (CONFIGURABLE) {
      CONFIGURABLE = name.name !== text;
    }
    tmp9 = CONFIGURABLE;
  }
  if (tmp9) {
    if (require(13286) /* getOwnPropertyDescriptor */) {
      let obj = { value: text, configurable: true };
      defineProperty(name, "name", obj);
    } else {
      name.name = text;
    }
  }
  let tmp22 = getOwnPropertyDescriptor;
  if (getOwnPropertyDescriptor) {
    tmp22 = arg2;
  }
  if (tmp22) {
    tmp22 = require(13306) /* call */(arg2, "arity");
  }
  if (tmp22) {
    tmp22 = name.length !== arg2.arity;
  }
  if (tmp22) {
    obj = { value: arg2.arity };
    defineProperty(name, "length", obj);
  }
  if (arg2) {
    if (require(13306) /* call */(arg2, "constructor")) {
      if (arg2.constructor) {
        if (require(13286) /* getOwnPropertyDescriptor */) {
          obj = { writable: false };
          defineProperty(name, "prototype", obj);
        }
      }
      while (true) {
        let tmp41 = require;
        let tmp42 = dependencyMap;
        let num4 = 6;
        let obj4 = require(13344) /* state */;
        let tmp43 = name;
        let enforceResult = obj4.enforce(name);
        let tmp45 = enforceResult;
        let str10 = "source";
        if (require(13306) /* call */(enforceResult, "source")) {
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
          break;
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
  let source = require(13309) /* all */(this);
  if (source) {
    source = require(13344) /* state */.get(self).source;
    const obj = require(13344) /* state */;
  }
  if (!source) {
    source = __core_js_shared__(self);
  }
  return source;
}, "toString");

export default fn;
