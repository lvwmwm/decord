// Module ID: 15598
// Function ID: 15599
// Dependencies: [15599, 15547, 15543, 15544, 15563, 15600, 15601, 15566]

// Module 15598
import _mod15543 from "module_15543" /* 15543 */;
import _mod15544 from "module_15544" /* 15544 */;
import _mod15547 from "module_15547" /* 15547 */;
import _mod15563 from "module_15563" /* 15563 */;
import _mod15566 from "module_15566" /* 15566 */;
import _mod15600 from "module_15600" /* 15600 */;
import _mod15601 from "module_15601" /* 15601 */;
import prop from "module_15599" /* 15599 */;

let closure_5 = _mod15547("".slice);
let closure_6 = _mod15547("".replace);
let closure_7 = _mod15547([].join);
let tmp = _mod15543 && !_mod15544(() => 8 !== defineProperty(() => {

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
  const tmp10 = _mod15563(toString, "name");
  let tmp11 = !tmp10;
  if (tmp10) {
    tmp11 = _mod15600.CONFIGURABLE && toString.name !== text2;
    _mod15600.CONFIGURABLE && toString.name !== text2;
  }
  if (tmp11) {
    if (_mod15543) {
      const obj = { value: text2, configurable: true };
      defineProperty(toString, "name", obj);
    } else {
      toString.name = text2;
    }
  }
  const tmp15 = closure_8 && arg2 && tmp8(15563)(arg2, "arity") && toString.length !== arg2.arity;
  if (tmp15) {
    const obj2 = { value: arg2.arity };
    defineProperty(toString, "length", obj2);
  }
  try {
    if (arg2) {
      if (_mod15563(arg2, "constructor")) {
        if (arg2.constructor) {
          if (_mod15543) {
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
  const tmp8Result = _mod15601;
  const enforceResult = tmp8Result.enforce(toString);
  if (!_mod15563(enforceResult, "source")) {
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
  let source = _mod15566(this);
  if (source) {
    const tmpResult = _mod15601;
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
