// Module ID: 14436
// Function ID: 14437
// Dependencies: [14437, 14385, 14381, 14382, 14401, 14438, 14439, 14404]

// Module 14436
import _mod14381 from "module_14381" /* 14381 */;
import _mod14382 from "module_14382" /* 14382 */;
import _mod14385 from "module_14385" /* 14385 */;
import _mod14401 from "module_14401" /* 14401 */;
import _mod14404 from "module_14404" /* 14404 */;
import _mod14438 from "module_14438" /* 14438 */;
import _mod14439 from "module_14439" /* 14439 */;
import prop from "module_14437" /* 14437 */;

let closure_5 = _mod14385("".slice);
let closure_6 = _mod14385("".replace);
let closure_7 = _mod14385([].join);
let tmp = _mod14381 && !_mod14382(() => 8 !== defineProperty(() => {

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
  const tmp10 = _mod14401(toString, "name");
  let tmp11 = !tmp10;
  if (tmp10) {
    tmp11 = _mod14438.CONFIGURABLE && toString.name !== text2;
    _mod14438.CONFIGURABLE && toString.name !== text2;
  }
  if (tmp11) {
    if (_mod14381) {
      const obj = { value: text2, configurable: true };
      defineProperty(toString, "name", obj);
    } else {
      toString.name = text2;
    }
  }
  const tmp15 = closure_8 && arg2 && tmp8(14401)(arg2, "arity") && toString.length !== arg2.arity;
  if (tmp15) {
    const obj2 = { value: arg2.arity };
    defineProperty(toString, "length", obj2);
  }
  try {
    if (arg2) {
      if (_mod14401(arg2, "constructor")) {
        if (arg2.constructor) {
          if (_mod14381) {
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
  const tmp8Result = _mod14439;
  const enforceResult = tmp8Result.enforce(toString);
  if (!_mod14401(enforceResult, "source")) {
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
  let source = _mod14404(this);
  if (source) {
    const tmpResult = _mod14439;
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
