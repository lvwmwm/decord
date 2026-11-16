// Module ID: 16805
// Function ID: 16806
// Dependencies: [16806, 16754, 16750, 16751, 16770, 16807, 16808, 16773]

// Module 16805
import _mod16750 from "module_16750" /* 16750 */;
import _mod16751 from "module_16751" /* 16751 */;
import _mod16754 from "module_16754" /* 16754 */;
import _mod16770 from "module_16770" /* 16770 */;
import _mod16773 from "module_16773" /* 16773 */;
import _mod16807 from "module_16807" /* 16807 */;
import _mod16808 from "module_16808" /* 16808 */;
import prop from "module_16806" /* 16806 */;

let closure_5 = _mod16754("".slice);
let closure_6 = _mod16754("".replace);
let closure_7 = _mod16754([].join);
let tmp = _mod16750 && !_mod16751(() => 8 !== defineProperty(() => {

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
  const tmp10 = _mod16770(toString, "name");
  let tmp11 = !tmp10;
  if (tmp10) {
    tmp11 = _mod16807.CONFIGURABLE && toString.name !== text2;
    _mod16807.CONFIGURABLE && toString.name !== text2;
  }
  if (tmp11) {
    if (_mod16750) {
      const obj = { value: text2, configurable: true };
      defineProperty(toString, "name", obj);
    } else {
      toString.name = text2;
    }
  }
  const tmp15 = closure_8 && arg2 && tmp8(16770)(arg2, "arity") && toString.length !== arg2.arity;
  if (tmp15) {
    const obj2 = { value: arg2.arity };
    defineProperty(toString, "length", obj2);
  }
  try {
    if (arg2) {
      if (_mod16770(arg2, "constructor")) {
        if (arg2.constructor) {
          if (_mod16750) {
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
  const tmp8Result = _mod16808;
  const enforceResult = tmp8Result.enforce(toString);
  if (!_mod16770(enforceResult, "source")) {
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
  let source = _mod16773(this);
  if (source) {
    const tmpResult = _mod16808;
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
