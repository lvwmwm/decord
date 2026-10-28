// Module ID: 15865
// Function ID: 15866
// Dependencies: [15866, 15814, 15810, 15811, 15830, 15867, 15868, 15833]

// Module 15865
import _mod15810 from "module_15810" /* 15810 */;
import _mod15811 from "module_15811" /* 15811 */;
import _mod15814 from "module_15814" /* 15814 */;
import _mod15830 from "module_15830" /* 15830 */;
import _mod15833 from "module_15833" /* 15833 */;
import _mod15867 from "module_15867" /* 15867 */;
import _mod15868 from "module_15868" /* 15868 */;
import prop from "module_15866" /* 15866 */;

let closure_5 = _mod15814("".slice);
let closure_6 = _mod15814("".replace);
let closure_7 = _mod15814([].join);
let tmp = _mod15810 && !_mod15811(() => 8 !== defineProperty(() => {

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
  const tmp10 = _mod15830(toString, "name");
  let tmp11 = !tmp10;
  if (tmp10) {
    tmp11 = _mod15867.CONFIGURABLE && toString.name !== text2;
    _mod15867.CONFIGURABLE && toString.name !== text2;
  }
  if (tmp11) {
    if (_mod15810) {
      const obj = { value: text2, configurable: true };
      defineProperty(toString, "name", obj);
    } else {
      toString.name = text2;
    }
  }
  const tmp15 = closure_8 && arg2 && tmp8(15830)(arg2, "arity") && toString.length !== arg2.arity;
  if (tmp15) {
    const obj2 = { value: arg2.arity };
    defineProperty(toString, "length", obj2);
  }
  try {
    if (arg2) {
      if (_mod15830(arg2, "constructor")) {
        if (arg2.constructor) {
          if (_mod15810) {
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
  const tmp8Result = _mod15868;
  const enforceResult = tmp8Result.enforce(toString);
  if (!_mod15830(enforceResult, "source")) {
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
  let source = _mod15833(this);
  if (source) {
    const tmpResult = _mod15868;
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
