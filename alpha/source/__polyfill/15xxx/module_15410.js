// Module ID: 15410
// Function ID: 15411
// Dependencies: [15411, 15359, 15355, 15356, 15375, 15412, 15413, 15378]

// Module 15410
import _mod15355 from "module_15355" /* 15355 */;
import _mod15356 from "module_15356" /* 15356 */;
import _mod15359 from "module_15359" /* 15359 */;
import _mod15375 from "module_15375" /* 15375 */;
import _mod15378 from "module_15378" /* 15378 */;
import _mod15412 from "module_15412" /* 15412 */;
import _mod15413 from "module_15413" /* 15413 */;
import prop from "module_15411" /* 15411 */;

let closure_5 = _mod15359("".slice);
let closure_6 = _mod15359("".replace);
let closure_7 = _mod15359([].join);
let tmp = _mod15355 && !_mod15356(() => 8 !== defineProperty(() => {

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
  const tmp10 = _mod15375(toString, "name");
  let tmp11 = !tmp10;
  if (tmp10) {
    tmp11 = _mod15412.CONFIGURABLE && toString.name !== text2;
    _mod15412.CONFIGURABLE && toString.name !== text2;
  }
  if (tmp11) {
    if (_mod15355) {
      const obj = { value: text2, configurable: true };
      defineProperty(toString, "name", obj);
    } else {
      toString.name = text2;
    }
  }
  const tmp15 = closure_8 && arg2 && tmp8(15375)(arg2, "arity") && toString.length !== arg2.arity;
  if (tmp15) {
    const obj2 = { value: arg2.arity };
    defineProperty(toString, "length", obj2);
  }
  try {
    if (arg2) {
      if (_mod15375(arg2, "constructor")) {
        if (arg2.constructor) {
          if (_mod15355) {
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
  const tmp8Result = _mod15413;
  const enforceResult = tmp8Result.enforce(toString);
  if (!_mod15375(enforceResult, "source")) {
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
  let source = _mod15378(this);
  if (source) {
    const tmpResult = _mod15413;
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
