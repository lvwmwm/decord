// Module ID: 16531
// Function ID: 16532
// Dependencies: [16532, 16480, 16476, 16477, 16496, 16533, 16534, 16499]

// Module 16531
import _mod16476 from "module_16476" /* 16476 */;
import _mod16477 from "module_16477" /* 16477 */;
import _mod16480 from "module_16480" /* 16480 */;
import _mod16496 from "module_16496" /* 16496 */;
import _mod16499 from "module_16499" /* 16499 */;
import _mod16533 from "module_16533" /* 16533 */;
import _mod16534 from "module_16534" /* 16534 */;
import prop from "module_16532" /* 16532 */;

let closure_5 = _mod16480("".slice);
let closure_6 = _mod16480("".replace);
let closure_7 = _mod16480([].join);
let tmp = _mod16476 && !_mod16477(() => 8 !== defineProperty(() => {

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
  const tmp10 = _mod16496(toString, "name");
  let tmp11 = !tmp10;
  if (tmp10) {
    tmp11 = _mod16533.CONFIGURABLE && toString.name !== text2;
    _mod16533.CONFIGURABLE && toString.name !== text2;
  }
  if (tmp11) {
    if (_mod16476) {
      const obj = { value: text2, configurable: true };
      defineProperty(toString, "name", obj);
    } else {
      toString.name = text2;
    }
  }
  const tmp15 = closure_8 && arg2 && tmp8(16496)(arg2, "arity") && toString.length !== arg2.arity;
  if (tmp15) {
    const obj2 = { value: arg2.arity };
    defineProperty(toString, "length", obj2);
  }
  try {
    if (arg2) {
      if (_mod16496(arg2, "constructor")) {
        if (arg2.constructor) {
          if (_mod16476) {
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
  const tmp8Result = _mod16534;
  const enforceResult = tmp8Result.enforce(toString);
  if (!_mod16496(enforceResult, "source")) {
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
  let source = _mod16499(this);
  if (source) {
    const tmpResult = _mod16534;
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
