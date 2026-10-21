// Module ID: 15500
// Function ID: 15501
// Dependencies: [15501, 15449, 15445, 15446, 15465, 15502, 15503, 15468]

// Module 15500
import _mod15445 from "module_15445" /* 15445 */;
import _mod15446 from "module_15446" /* 15446 */;
import _mod15449 from "module_15449" /* 15449 */;
import _mod15465 from "module_15465" /* 15465 */;
import _mod15468 from "module_15468" /* 15468 */;
import _mod15502 from "module_15502" /* 15502 */;
import _mod15503 from "module_15503" /* 15503 */;
import prop from "module_15501" /* 15501 */;

let closure_5 = _mod15449("".slice);
let closure_6 = _mod15449("".replace);
let closure_7 = _mod15449([].join);
let tmp = _mod15445 && !_mod15446(() => 8 !== defineProperty(() => {

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
  const tmp10 = _mod15465(toString, "name");
  let tmp11 = !tmp10;
  if (tmp10) {
    tmp11 = _mod15502.CONFIGURABLE && toString.name !== text2;
    _mod15502.CONFIGURABLE && toString.name !== text2;
  }
  if (tmp11) {
    if (_mod15445) {
      const obj = { value: text2, configurable: true };
      defineProperty(toString, "name", obj);
    } else {
      toString.name = text2;
    }
  }
  const tmp15 = closure_8 && arg2 && tmp8(15465)(arg2, "arity") && toString.length !== arg2.arity;
  if (tmp15) {
    const obj2 = { value: arg2.arity };
    defineProperty(toString, "length", obj2);
  }
  try {
    if (arg2) {
      if (_mod15465(arg2, "constructor")) {
        if (arg2.constructor) {
          if (_mod15445) {
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
  const tmp8Result = _mod15503;
  const enforceResult = tmp8Result.enforce(toString);
  if (!_mod15465(enforceResult, "source")) {
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
  let source = _mod15468(this);
  if (source) {
    const tmpResult = _mod15503;
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
