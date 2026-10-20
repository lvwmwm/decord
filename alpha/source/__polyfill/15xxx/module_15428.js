// Module ID: 15428
// Function ID: 15429
// Dependencies: [15429, 15377, 15373, 15374, 15393, 15430, 15431, 15396]

// Module 15428
import _mod15373 from "module_15373" /* 15373 */;
import _mod15374 from "module_15374" /* 15374 */;
import _mod15377 from "module_15377" /* 15377 */;
import _mod15393 from "module_15393" /* 15393 */;
import _mod15396 from "module_15396" /* 15396 */;
import _mod15430 from "module_15430" /* 15430 */;
import _mod15431 from "module_15431" /* 15431 */;
import prop from "module_15429" /* 15429 */;

let closure_5 = _mod15377("".slice);
let closure_6 = _mod15377("".replace);
let closure_7 = _mod15377([].join);
let tmp = _mod15373 && !_mod15374(() => 8 !== defineProperty(() => {

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
  const tmp10 = _mod15393(toString, "name");
  let tmp11 = !tmp10;
  if (tmp10) {
    tmp11 = _mod15430.CONFIGURABLE && toString.name !== text2;
    _mod15430.CONFIGURABLE && toString.name !== text2;
  }
  if (tmp11) {
    if (_mod15373) {
      const obj = { value: text2, configurable: true };
      defineProperty(toString, "name", obj);
    } else {
      toString.name = text2;
    }
  }
  const tmp15 = closure_8 && arg2 && tmp8(15393)(arg2, "arity") && toString.length !== arg2.arity;
  if (tmp15) {
    const obj2 = { value: arg2.arity };
    defineProperty(toString, "length", obj2);
  }
  try {
    if (arg2) {
      if (_mod15393(arg2, "constructor")) {
        if (arg2.constructor) {
          if (_mod15373) {
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
  const tmp8Result = _mod15431;
  const enforceResult = tmp8Result.enforce(toString);
  if (!_mod15393(enforceResult, "source")) {
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
  let source = _mod15396(this);
  if (source) {
    const tmpResult = _mod15431;
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
