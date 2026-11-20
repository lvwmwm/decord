// Module ID: 16807
// Function ID: 16808
// Dependencies: [16808, 16756, 16752, 16753, 16772, 16809, 16810, 16775]

// Module 16807
import _mod16752 from "module_16752" /* 16752 */;
import _mod16753 from "module_16753" /* 16753 */;
import _mod16756 from "module_16756" /* 16756 */;
import _mod16772 from "module_16772" /* 16772 */;
import _mod16775 from "module_16775" /* 16775 */;
import _mod16809 from "module_16809" /* 16809 */;
import _mod16810 from "module_16810" /* 16810 */;
import prop from "module_16808" /* 16808 */;

let closure_5 = _mod16756("".slice);
let closure_6 = _mod16756("".replace);
let closure_7 = _mod16756([].join);
let tmp = _mod16752 && !_mod16753(() => 8 !== defineProperty(() => {

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
  const tmp10 = _mod16772(toString, "name");
  let tmp11 = !tmp10;
  if (tmp10) {
    tmp11 = _mod16809.CONFIGURABLE && toString.name !== text2;
    _mod16809.CONFIGURABLE && toString.name !== text2;
  }
  if (tmp11) {
    if (_mod16752) {
      const obj = { value: text2, configurable: true };
      defineProperty(toString, "name", obj);
    } else {
      toString.name = text2;
    }
  }
  const tmp15 = closure_8 && arg2 && tmp8(16772)(arg2, "arity") && toString.length !== arg2.arity;
  if (tmp15) {
    const obj2 = { value: arg2.arity };
    defineProperty(toString, "length", obj2);
  }
  try {
    if (arg2) {
      if (_mod16772(arg2, "constructor")) {
        if (arg2.constructor) {
          if (_mod16752) {
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
  const tmp8Result = _mod16810;
  const enforceResult = tmp8Result.enforce(toString);
  if (!_mod16772(enforceResult, "source")) {
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
  let source = _mod16775(this);
  if (source) {
    const tmpResult = _mod16810;
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
