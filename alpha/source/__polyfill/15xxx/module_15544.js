// Module ID: 15544
// Function ID: 15545
// Dependencies: [15545, 15493, 15489, 15490, 15509, 15546, 15547, 15512]

// Module 15544
import _mod15489 from "module_15489" /* 15489 */;
import _mod15490 from "module_15490" /* 15490 */;
import _mod15493 from "module_15493" /* 15493 */;
import _mod15509 from "module_15509" /* 15509 */;
import _mod15512 from "module_15512" /* 15512 */;
import _mod15546 from "module_15546" /* 15546 */;
import _mod15547 from "module_15547" /* 15547 */;
import prop from "module_15545" /* 15545 */;

let closure_5 = _mod15493("".slice);
let closure_6 = _mod15493("".replace);
let closure_7 = _mod15493([].join);
let tmp = _mod15489 && !_mod15490(() => 8 !== defineProperty(() => {

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
  const tmp10 = _mod15509(toString, "name");
  let tmp11 = !tmp10;
  if (tmp10) {
    tmp11 = _mod15546.CONFIGURABLE && toString.name !== text2;
    _mod15546.CONFIGURABLE && toString.name !== text2;
  }
  if (tmp11) {
    if (_mod15489) {
      const obj = { value: text2, configurable: true };
      defineProperty(toString, "name", obj);
    } else {
      toString.name = text2;
    }
  }
  const tmp15 = closure_8 && arg2 && tmp8(15509)(arg2, "arity") && toString.length !== arg2.arity;
  if (tmp15) {
    const obj2 = { value: arg2.arity };
    defineProperty(toString, "length", obj2);
  }
  try {
    if (arg2) {
      if (_mod15509(arg2, "constructor")) {
        if (arg2.constructor) {
          if (_mod15489) {
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
  const tmp8Result = _mod15547;
  const enforceResult = tmp8Result.enforce(toString);
  if (!_mod15509(enforceResult, "source")) {
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
  let source = _mod15512(this);
  if (source) {
    const tmpResult = _mod15547;
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
