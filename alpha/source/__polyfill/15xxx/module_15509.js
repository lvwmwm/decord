// Module ID: 15509
// Function ID: 15510
// Dependencies: [15510, 15458, 15454, 15455, 15474, 15511, 15512, 15477]

// Module 15509
import _mod15454 from "module_15454" /* 15454 */;
import _mod15455 from "module_15455" /* 15455 */;
import _mod15458 from "module_15458" /* 15458 */;
import _mod15474 from "module_15474" /* 15474 */;
import _mod15477 from "module_15477" /* 15477 */;
import _mod15511 from "module_15511" /* 15511 */;
import _mod15512 from "module_15512" /* 15512 */;
import prop from "module_15510" /* 15510 */;

let closure_5 = _mod15458("".slice);
let closure_6 = _mod15458("".replace);
let closure_7 = _mod15458([].join);
let tmp = _mod15454 && !_mod15455(() => 8 !== defineProperty(() => {

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
  const tmp10 = _mod15474(toString, "name");
  let tmp11 = !tmp10;
  if (tmp10) {
    tmp11 = _mod15511.CONFIGURABLE && toString.name !== text2;
    _mod15511.CONFIGURABLE && toString.name !== text2;
  }
  if (tmp11) {
    if (_mod15454) {
      const obj = { value: text2, configurable: true };
      defineProperty(toString, "name", obj);
    } else {
      toString.name = text2;
    }
  }
  const tmp15 = closure_8 && arg2 && tmp8(15474)(arg2, "arity") && toString.length !== arg2.arity;
  if (tmp15) {
    const obj2 = { value: arg2.arity };
    defineProperty(toString, "length", obj2);
  }
  try {
    if (arg2) {
      if (_mod15474(arg2, "constructor")) {
        if (arg2.constructor) {
          if (_mod15454) {
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
  const tmp8Result = _mod15512;
  const enforceResult = tmp8Result.enforce(toString);
  if (!_mod15474(enforceResult, "source")) {
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
  let source = _mod15477(this);
  if (source) {
    const tmpResult = _mod15512;
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
