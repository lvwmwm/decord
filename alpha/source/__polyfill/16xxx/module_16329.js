// Module ID: 16329
// Function ID: 16330
// Dependencies: [16330, 16278, 16274, 16275, 16294, 16331, 16332, 16297]

// Module 16329
import _mod16274 from "module_16274" /* 16274 */;
import _mod16275 from "module_16275" /* 16275 */;
import _mod16278 from "module_16278" /* 16278 */;
import _mod16294 from "module_16294" /* 16294 */;
import _mod16297 from "module_16297" /* 16297 */;
import _mod16331 from "module_16331" /* 16331 */;
import _mod16332 from "module_16332" /* 16332 */;
import prop from "module_16330" /* 16330 */;

let closure_5 = _mod16278("".slice);
let closure_6 = _mod16278("".replace);
let closure_7 = _mod16278([].join);
let tmp = _mod16274 && !_mod16275(() => 8 !== defineProperty(() => {

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
  const tmp10 = _mod16294(toString, "name");
  let tmp11 = !tmp10;
  if (tmp10) {
    tmp11 = _mod16331.CONFIGURABLE && toString.name !== text2;
    _mod16331.CONFIGURABLE && toString.name !== text2;
  }
  if (tmp11) {
    if (_mod16274) {
      const obj = { value: text2, configurable: true };
      defineProperty(toString, "name", obj);
    } else {
      toString.name = text2;
    }
  }
  const tmp15 = closure_8 && arg2 && tmp8(16294)(arg2, "arity") && toString.length !== arg2.arity;
  if (tmp15) {
    const obj2 = { value: arg2.arity };
    defineProperty(toString, "length", obj2);
  }
  try {
    if (arg2) {
      if (_mod16294(arg2, "constructor")) {
        if (arg2.constructor) {
          if (_mod16274) {
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
  const tmp8Result = _mod16332;
  const enforceResult = tmp8Result.enforce(toString);
  if (!_mod16294(enforceResult, "source")) {
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
  let source = _mod16297(this);
  if (source) {
    const tmpResult = _mod16332;
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
