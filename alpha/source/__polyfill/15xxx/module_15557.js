// Module ID: 15557
// Function ID: 15558
// Dependencies: [15558, 15506, 15502, 15503, 15522, 15559, 15560, 15525]

// Module 15557
import _mod15502 from "module_15502" /* 15502 */;
import _mod15503 from "module_15503" /* 15503 */;
import _mod15506 from "module_15506" /* 15506 */;
import _mod15522 from "module_15522" /* 15522 */;
import _mod15525 from "module_15525" /* 15525 */;
import _mod15559 from "module_15559" /* 15559 */;
import _mod15560 from "module_15560" /* 15560 */;
import prop from "module_15558" /* 15558 */;

let closure_5 = _mod15506("".slice);
let closure_6 = _mod15506("".replace);
let closure_7 = _mod15506([].join);
let tmp = _mod15502 && !_mod15503(() => 8 !== defineProperty(() => {

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
  const tmp10 = _mod15522(toString, "name");
  let tmp11 = !tmp10;
  if (tmp10) {
    tmp11 = _mod15559.CONFIGURABLE && toString.name !== text2;
    _mod15559.CONFIGURABLE && toString.name !== text2;
  }
  if (tmp11) {
    if (_mod15502) {
      const obj = { value: text2, configurable: true };
      defineProperty(toString, "name", obj);
    } else {
      toString.name = text2;
    }
  }
  const tmp15 = closure_8 && arg2 && tmp8(15522)(arg2, "arity") && toString.length !== arg2.arity;
  if (tmp15) {
    const obj2 = { value: arg2.arity };
    defineProperty(toString, "length", obj2);
  }
  try {
    if (arg2) {
      if (_mod15522(arg2, "constructor")) {
        if (arg2.constructor) {
          if (_mod15502) {
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
  const tmp8Result = _mod15560;
  const enforceResult = tmp8Result.enforce(toString);
  if (!_mod15522(enforceResult, "source")) {
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
  let source = _mod15525(this);
  if (source) {
    const tmpResult = _mod15560;
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
