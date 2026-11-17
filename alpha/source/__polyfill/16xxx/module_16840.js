// Module ID: 16840
// Function ID: 16841
// Dependencies: [16841, 16789, 16785, 16786, 16805, 16842, 16843, 16808]

// Module 16840
import _mod16785 from "module_16785" /* 16785 */;
import _mod16786 from "module_16786" /* 16786 */;
import _mod16789 from "module_16789" /* 16789 */;
import _mod16805 from "module_16805" /* 16805 */;
import _mod16808 from "module_16808" /* 16808 */;
import _mod16842 from "module_16842" /* 16842 */;
import _mod16843 from "module_16843" /* 16843 */;
import prop from "module_16841" /* 16841 */;

let closure_5 = _mod16789("".slice);
let closure_6 = _mod16789("".replace);
let closure_7 = _mod16789([].join);
let tmp = _mod16785 && !_mod16786(() => 8 !== defineProperty(() => {

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
  const tmp10 = _mod16805(toString, "name");
  let tmp11 = !tmp10;
  if (tmp10) {
    tmp11 = _mod16842.CONFIGURABLE && toString.name !== text2;
    _mod16842.CONFIGURABLE && toString.name !== text2;
  }
  if (tmp11) {
    if (_mod16785) {
      const obj = { value: text2, configurable: true };
      defineProperty(toString, "name", obj);
    } else {
      toString.name = text2;
    }
  }
  const tmp15 = closure_8 && arg2 && tmp8(16805)(arg2, "arity") && toString.length !== arg2.arity;
  if (tmp15) {
    const obj2 = { value: arg2.arity };
    defineProperty(toString, "length", obj2);
  }
  try {
    if (arg2) {
      if (_mod16805(arg2, "constructor")) {
        if (arg2.constructor) {
          if (_mod16785) {
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
  const tmp8Result = _mod16843;
  const enforceResult = tmp8Result.enforce(toString);
  if (!_mod16805(enforceResult, "source")) {
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
  let source = _mod16808(this);
  if (source) {
    const tmpResult = _mod16843;
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
