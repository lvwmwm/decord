// Module ID: 14968
// Function ID: 14969
// Dependencies: [14969, 14917, 14913, 14914, 14933, 14970, 14971, 14936]

// Module 14968
import _mod14913 from "module_14913" /* 14913 */;
import _mod14914 from "module_14914" /* 14914 */;
import _mod14917 from "module_14917" /* 14917 */;
import _mod14933 from "module_14933" /* 14933 */;
import _mod14936 from "module_14936" /* 14936 */;
import _mod14970 from "module_14970" /* 14970 */;
import _mod14971 from "module_14971" /* 14971 */;
import prop from "module_14969" /* 14969 */;

let closure_5 = _mod14917("".slice);
let closure_6 = _mod14917("".replace);
let closure_7 = _mod14917([].join);
let tmp = _mod14913 && !_mod14914(() => 8 !== defineProperty(() => {

}, "length", { value: 8 }).length);
let closure_8 = tmp;
const str = String(String);
let closure_9 = str.split("String");
const fn = (toString, toString2, arg2) => {
  let text = toString2;
  const tmp = String;
  if ("Symbol(" === closure_5(String(toString2), 0, 7)) {
    text = `${"[" + closure_6(tmp(toString2), /^Symbol\(([^)]*)\).*$/, "$1")}]`;
  }
  let text1 = text;
  const tmp4 = arg2 && arg2.getter;
  if (tmp4) {
    text1 = `get ${tmp2}`;
  }
  let text2 = text1;
  const tmp6 = arg2 && arg2.setter;
  if (tmp6) {
    text2 = `set ${tmp5}`;
  }
  const tmp10 = _mod14933(toString, "name");
  let tmp11 = !tmp10;
  if (tmp10) {
    tmp11 = _mod14970.CONFIGURABLE && toString.name !== text2;
    _mod14970.CONFIGURABLE && toString.name !== text2;
  }
  if (tmp11) {
    if (_mod14913) {
      const obj = { value: text2, configurable: true };
      defineProperty(toString, "name", obj);
    } else {
      toString.name = text2;
    }
  }
  const tmp15 = closure_8 && arg2 && tmp8(14933)(arg2, "arity") && toString.length !== arg2.arity;
  if (tmp15) {
    const obj2 = { value: arg2.arity };
    defineProperty(toString, "length", obj2);
  }
  try {
    if (arg2) {
      if (_mod14933(arg2, "constructor")) {
        if (arg2.constructor) {
          if (_mod14913) {
            defineProperty(toString, "prototype", { writable: false });
          }
        }
      }
    }
    if (toString.prototype) {
      toString.prototype = undefined;
    }
  } catch (err) {
  }
  const tmp8Result = _mod14971;
  const enforceResult = tmp8Result.enforce(toString);
  if (!_mod14933(enforceResult, "source")) {
    let str10 = "";
    const tmp21 = closure_7;
    const tmp22 = closure_9;
    if (typeof text2 === "string") {
      str10 = text2;
    }
    enforceResult.source = tmp21(tmp22, str10);
  }
  return toString;
};
function toString() {
  const self = this;
  let source = _mod14936(this);
  if (source) {
    const tmpResult = _mod14971;
    source = tmpResult.get(self).source;
  }
  if (!source) {
    source = prop(self);
  }
  return source;
}
fn(toString, "toString");
prototype.toString = toString;

export default fn;
