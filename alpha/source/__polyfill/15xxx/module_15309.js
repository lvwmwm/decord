// Module ID: 15309
// Function ID: 15310
// Dependencies: [15310, 15258, 15254, 15255, 15274, 15311, 15312, 15277]

// Module 15309
import _mod15254 from "module_15254" /* 15254 */;
import _mod15255 from "module_15255" /* 15255 */;
import _mod15258 from "module_15258" /* 15258 */;
import _mod15274 from "module_15274" /* 15274 */;
import _mod15277 from "module_15277" /* 15277 */;
import _mod15311 from "module_15311" /* 15311 */;
import _mod15312 from "module_15312" /* 15312 */;
import prop from "module_15310" /* 15310 */;

let closure_5 = _mod15258("".slice);
let closure_6 = _mod15258("".replace);
let closure_7 = _mod15258([].join);
let tmp = _mod15254 && !_mod15255(() => 8 !== defineProperty(() => {

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
  const tmp10 = _mod15274(toString, "name");
  let tmp11 = !tmp10;
  if (tmp10) {
    tmp11 = _mod15311.CONFIGURABLE && toString.name !== text2;
    _mod15311.CONFIGURABLE && toString.name !== text2;
  }
  if (tmp11) {
    if (_mod15254) {
      const obj = { value: text2, configurable: true };
      defineProperty(toString, "name", obj);
    } else {
      toString.name = text2;
    }
  }
  const tmp15 = closure_8 && arg2 && tmp8(15274)(arg2, "arity") && toString.length !== arg2.arity;
  if (tmp15) {
    const obj2 = { value: arg2.arity };
    defineProperty(toString, "length", obj2);
  }
  try {
    if (arg2) {
      if (_mod15274(arg2, "constructor")) {
        if (arg2.constructor) {
          if (_mod15254) {
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
  const tmp8Result = _mod15312;
  const enforceResult = tmp8Result.enforce(toString);
  if (!_mod15274(enforceResult, "source")) {
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
  let source = _mod15277(this);
  if (source) {
    const tmpResult = _mod15312;
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
