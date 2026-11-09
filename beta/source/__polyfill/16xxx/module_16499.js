// Module ID: 16499
// Function ID: 16500
// Dependencies: [16500, 16448, 16444, 16445, 16464, 16501, 16502, 16467]

// Module 16499
import _mod16444 from "module_16444" /* 16444 */;
import _mod16445 from "module_16445" /* 16445 */;
import _mod16448 from "module_16448" /* 16448 */;
import _mod16464 from "module_16464" /* 16464 */;
import _mod16467 from "module_16467" /* 16467 */;
import _mod16501 from "module_16501" /* 16501 */;
import _mod16502 from "module_16502" /* 16502 */;
import prop from "module_16500" /* 16500 */;

let closure_5 = _mod16448("".slice);
let closure_6 = _mod16448("".replace);
let closure_7 = _mod16448([].join);
let tmp = _mod16444 && !_mod16445(() => 8 !== defineProperty(() => {

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
  const tmp10 = _mod16464(toString, "name");
  let tmp11 = !tmp10;
  if (tmp10) {
    tmp11 = _mod16501.CONFIGURABLE && toString.name !== text2;
    _mod16501.CONFIGURABLE && toString.name !== text2;
  }
  if (tmp11) {
    if (_mod16444) {
      const obj = { value: text2, configurable: true };
      defineProperty(toString, "name", obj);
    } else {
      toString.name = text2;
    }
  }
  const tmp15 = closure_8 && arg2 && tmp8(16464)(arg2, "arity") && toString.length !== arg2.arity;
  if (tmp15) {
    const obj2 = { value: arg2.arity };
    defineProperty(toString, "length", obj2);
  }
  try {
    if (arg2) {
      if (_mod16464(arg2, "constructor")) {
        if (arg2.constructor) {
          if (_mod16444) {
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
  const tmp8Result = _mod16502;
  const enforceResult = tmp8Result.enforce(toString);
  if (!_mod16464(enforceResult, "source")) {
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
  let source = _mod16467(this);
  if (source) {
    const tmpResult = _mod16502;
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
