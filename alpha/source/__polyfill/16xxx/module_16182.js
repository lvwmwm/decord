// Module ID: 16182
// Function ID: 16183
// Dependencies: [16183, 16131, 16127, 16128, 16147, 16184, 16185, 16150]

// Module 16182
import _mod16127 from "module_16127" /* 16127 */;
import _mod16128 from "module_16128" /* 16128 */;
import _mod16131 from "module_16131" /* 16131 */;
import _mod16147 from "module_16147" /* 16147 */;
import _mod16150 from "module_16150" /* 16150 */;
import _mod16184 from "module_16184" /* 16184 */;
import _mod16185 from "module_16185" /* 16185 */;
import prop from "module_16183" /* 16183 */;

let closure_5 = _mod16131("".slice);
let closure_6 = _mod16131("".replace);
let closure_7 = _mod16131([].join);
let tmp = _mod16127 && !_mod16128(() => 8 !== defineProperty(() => {

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
  const tmp10 = _mod16147(toString, "name");
  let tmp11 = !tmp10;
  if (tmp10) {
    tmp11 = _mod16184.CONFIGURABLE && toString.name !== text2;
    _mod16184.CONFIGURABLE && toString.name !== text2;
  }
  if (tmp11) {
    if (_mod16127) {
      const obj = { value: text2, configurable: true };
      defineProperty(toString, "name", obj);
    } else {
      toString.name = text2;
    }
  }
  const tmp15 = closure_8 && arg2 && tmp8(16147)(arg2, "arity") && toString.length !== arg2.arity;
  if (tmp15) {
    const obj2 = { value: arg2.arity };
    defineProperty(toString, "length", obj2);
  }
  try {
    if (arg2) {
      if (_mod16147(arg2, "constructor")) {
        if (arg2.constructor) {
          if (_mod16127) {
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
  const tmp8Result = _mod16185;
  const enforceResult = tmp8Result.enforce(toString);
  if (!_mod16147(enforceResult, "source")) {
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
  let source = _mod16150(this);
  if (source) {
    const tmpResult = _mod16185;
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
