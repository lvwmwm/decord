// Module ID: 15299
// Function ID: 15300
// Dependencies: [15300, 15248, 15244, 15245, 15264, 15301, 15302, 15267]

// Module 15299
import _mod15244 from "module_15244" /* 15244 */;
import _mod15245 from "module_15245" /* 15245 */;
import _mod15248 from "module_15248" /* 15248 */;
import _mod15264 from "module_15264" /* 15264 */;
import _mod15267 from "module_15267" /* 15267 */;
import _mod15301 from "module_15301" /* 15301 */;
import _mod15302 from "module_15302" /* 15302 */;
import prop from "module_15300" /* 15300 */;

let closure_5 = _mod15248("".slice);
let closure_6 = _mod15248("".replace);
let closure_7 = _mod15248([].join);
let tmp = _mod15244 && !_mod15245(() => 8 !== defineProperty(() => {

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
  const tmp10 = _mod15264(toString, "name");
  let tmp11 = !tmp10;
  if (tmp10) {
    tmp11 = _mod15301.CONFIGURABLE && toString.name !== text2;
    _mod15301.CONFIGURABLE && toString.name !== text2;
  }
  if (tmp11) {
    if (_mod15244) {
      const obj = { value: text2, configurable: true };
      defineProperty(toString, "name", obj);
    } else {
      toString.name = text2;
    }
  }
  const tmp15 = closure_8 && arg2 && tmp8(15264)(arg2, "arity") && toString.length !== arg2.arity;
  if (tmp15) {
    const obj2 = { value: arg2.arity };
    defineProperty(toString, "length", obj2);
  }
  try {
    if (arg2) {
      if (_mod15264(arg2, "constructor")) {
        if (arg2.constructor) {
          if (_mod15244) {
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
  const tmp8Result = _mod15302;
  const enforceResult = tmp8Result.enforce(toString);
  if (!_mod15264(enforceResult, "source")) {
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
  let source = _mod15267(this);
  if (source) {
    const tmpResult = _mod15302;
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
