// Module ID: 15473
// Function ID: 15474
// Dependencies: [15474, 15422, 15418, 15419, 15438, 15475, 15476, 15441]

// Module 15473
import _mod15418 from "module_15418" /* 15418 */;
import _mod15419 from "module_15419" /* 15419 */;
import _mod15422 from "module_15422" /* 15422 */;
import _mod15438 from "module_15438" /* 15438 */;
import _mod15441 from "module_15441" /* 15441 */;
import _mod15475 from "module_15475" /* 15475 */;
import _mod15476 from "module_15476" /* 15476 */;
import prop from "module_15474" /* 15474 */;

let closure_5 = _mod15422("".slice);
let closure_6 = _mod15422("".replace);
let closure_7 = _mod15422([].join);
let tmp = _mod15418 && !_mod15419(() => 8 !== defineProperty(() => {

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
  const tmp10 = _mod15438(toString, "name");
  let tmp11 = !tmp10;
  if (tmp10) {
    tmp11 = _mod15475.CONFIGURABLE && toString.name !== text2;
    _mod15475.CONFIGURABLE && toString.name !== text2;
  }
  if (tmp11) {
    if (_mod15418) {
      const obj = { value: text2, configurable: true };
      defineProperty(toString, "name", obj);
    } else {
      toString.name = text2;
    }
  }
  const tmp15 = closure_8 && arg2 && tmp8(15438)(arg2, "arity") && toString.length !== arg2.arity;
  if (tmp15) {
    const obj2 = { value: arg2.arity };
    defineProperty(toString, "length", obj2);
  }
  try {
    if (arg2) {
      if (_mod15438(arg2, "constructor")) {
        if (arg2.constructor) {
          if (_mod15418) {
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
  const tmp8Result = _mod15476;
  const enforceResult = tmp8Result.enforce(toString);
  if (!_mod15438(enforceResult, "source")) {
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
  let source = _mod15441(this);
  if (source) {
    const tmpResult = _mod15476;
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
