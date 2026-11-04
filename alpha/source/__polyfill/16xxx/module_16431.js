// Module ID: 16431
// Function ID: 16432
// Dependencies: [16432, 16380, 16376, 16377, 16396, 16433, 16434, 16399]

// Module 16431
import _mod16376 from "module_16376" /* 16376 */;
import _mod16377 from "module_16377" /* 16377 */;
import _mod16380 from "module_16380" /* 16380 */;
import _mod16396 from "module_16396" /* 16396 */;
import _mod16399 from "module_16399" /* 16399 */;
import _mod16433 from "module_16433" /* 16433 */;
import _mod16434 from "module_16434" /* 16434 */;
import prop from "module_16432" /* 16432 */;

let closure_5 = _mod16380("".slice);
let closure_6 = _mod16380("".replace);
let closure_7 = _mod16380([].join);
let tmp = _mod16376 && !_mod16377(() => 8 !== defineProperty(() => {

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
  const tmp10 = _mod16396(toString, "name");
  let tmp11 = !tmp10;
  if (tmp10) {
    tmp11 = _mod16433.CONFIGURABLE && toString.name !== text2;
    _mod16433.CONFIGURABLE && toString.name !== text2;
  }
  if (tmp11) {
    if (_mod16376) {
      const obj = { value: text2, configurable: true };
      defineProperty(toString, "name", obj);
    } else {
      toString.name = text2;
    }
  }
  const tmp15 = closure_8 && arg2 && tmp8(16396)(arg2, "arity") && toString.length !== arg2.arity;
  if (tmp15) {
    const obj2 = { value: arg2.arity };
    defineProperty(toString, "length", obj2);
  }
  try {
    if (arg2) {
      if (_mod16396(arg2, "constructor")) {
        if (arg2.constructor) {
          if (_mod16376) {
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
  const tmp8Result = _mod16434;
  const enforceResult = tmp8Result.enforce(toString);
  if (!_mod16396(enforceResult, "source")) {
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
  let source = _mod16399(this);
  if (source) {
    const tmpResult = _mod16434;
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
