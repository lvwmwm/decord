// Module ID: 15594
// Function ID: 15595
// Dependencies: [15595, 15543, 15539, 15540, 15559, 15596, 15597, 15562]

// Module 15594
import _mod15539 from "module_15539" /* 15539 */;
import _mod15540 from "module_15540" /* 15540 */;
import _mod15543 from "module_15543" /* 15543 */;
import _mod15559 from "module_15559" /* 15559 */;
import _mod15562 from "module_15562" /* 15562 */;
import _mod15596 from "module_15596" /* 15596 */;
import _mod15597 from "module_15597" /* 15597 */;
import prop from "module_15595" /* 15595 */;

let closure_5 = _mod15543("".slice);
let closure_6 = _mod15543("".replace);
let closure_7 = _mod15543([].join);
let tmp = _mod15539 && !_mod15540(() => 8 !== defineProperty(() => {

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
  const tmp10 = _mod15559(toString, "name");
  let tmp11 = !tmp10;
  if (tmp10) {
    tmp11 = _mod15596.CONFIGURABLE && toString.name !== text2;
    _mod15596.CONFIGURABLE && toString.name !== text2;
  }
  if (tmp11) {
    if (_mod15539) {
      const obj = { value: text2, configurable: true };
      defineProperty(toString, "name", obj);
    } else {
      toString.name = text2;
    }
  }
  const tmp15 = closure_8 && arg2 && tmp8(15559)(arg2, "arity") && toString.length !== arg2.arity;
  if (tmp15) {
    const obj2 = { value: arg2.arity };
    defineProperty(toString, "length", obj2);
  }
  try {
    if (arg2) {
      if (_mod15559(arg2, "constructor")) {
        if (arg2.constructor) {
          if (_mod15539) {
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
  const tmp8Result = _mod15597;
  const enforceResult = tmp8Result.enforce(toString);
  if (!_mod15559(enforceResult, "source")) {
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
  let source = _mod15562(this);
  if (source) {
    const tmpResult = _mod15597;
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
