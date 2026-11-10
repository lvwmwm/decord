// Module ID: 16526
// Function ID: 16527
// Dependencies: [16527, 16475, 16471, 16472, 16491, 16528, 16529, 16494]

// Module 16526
import _mod16471 from "module_16471" /* 16471 */;
import _mod16472 from "module_16472" /* 16472 */;
import _mod16475 from "module_16475" /* 16475 */;
import _mod16491 from "module_16491" /* 16491 */;
import _mod16494 from "module_16494" /* 16494 */;
import _mod16528 from "module_16528" /* 16528 */;
import _mod16529 from "module_16529" /* 16529 */;
import prop from "module_16527" /* 16527 */;

let closure_5 = _mod16475("".slice);
let closure_6 = _mod16475("".replace);
let closure_7 = _mod16475([].join);
let tmp = _mod16471 && !_mod16472(() => 8 !== defineProperty(() => {

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
  const tmp10 = _mod16491(toString, "name");
  let tmp11 = !tmp10;
  if (tmp10) {
    tmp11 = _mod16528.CONFIGURABLE && toString.name !== text2;
    _mod16528.CONFIGURABLE && toString.name !== text2;
  }
  if (tmp11) {
    if (_mod16471) {
      const obj = { value: text2, configurable: true };
      defineProperty(toString, "name", obj);
    } else {
      toString.name = text2;
    }
  }
  const tmp15 = closure_8 && arg2 && tmp8(16491)(arg2, "arity") && toString.length !== arg2.arity;
  if (tmp15) {
    const obj2 = { value: arg2.arity };
    defineProperty(toString, "length", obj2);
  }
  try {
    if (arg2) {
      if (_mod16491(arg2, "constructor")) {
        if (arg2.constructor) {
          if (_mod16471) {
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
  const tmp8Result = _mod16529;
  const enforceResult = tmp8Result.enforce(toString);
  if (!_mod16491(enforceResult, "source")) {
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
  let source = _mod16494(this);
  if (source) {
    const tmpResult = _mod16529;
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
