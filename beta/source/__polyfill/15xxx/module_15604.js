// Module ID: 15604
// Function ID: 15605
// Dependencies: [15605, 15553, 15549, 15550, 15569, 15606, 15607, 15572]

// Module 15604
import _mod15549 from "module_15549" /* 15549 */;
import _mod15550 from "module_15550" /* 15550 */;
import _mod15553 from "module_15553" /* 15553 */;
import _mod15569 from "module_15569" /* 15569 */;
import _mod15572 from "module_15572" /* 15572 */;
import _mod15606 from "module_15606" /* 15606 */;
import _mod15607 from "module_15607" /* 15607 */;
import prop from "module_15605" /* 15605 */;

let closure_5 = _mod15553("".slice);
let closure_6 = _mod15553("".replace);
let closure_7 = _mod15553([].join);
let tmp = _mod15549 && !_mod15550(() => 8 !== defineProperty(() => {

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
  const tmp10 = _mod15569(toString, "name");
  let tmp11 = !tmp10;
  if (tmp10) {
    tmp11 = _mod15606.CONFIGURABLE && toString.name !== text2;
    _mod15606.CONFIGURABLE && toString.name !== text2;
  }
  if (tmp11) {
    if (_mod15549) {
      const obj = { value: text2, configurable: true };
      defineProperty(toString, "name", obj);
    } else {
      toString.name = text2;
    }
  }
  const tmp15 = closure_8 && arg2 && tmp8(15569)(arg2, "arity") && toString.length !== arg2.arity;
  if (tmp15) {
    const obj2 = { value: arg2.arity };
    defineProperty(toString, "length", obj2);
  }
  try {
    if (arg2) {
      if (_mod15569(arg2, "constructor")) {
        if (arg2.constructor) {
          if (_mod15549) {
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
  const tmp8Result = _mod15607;
  const enforceResult = tmp8Result.enforce(toString);
  if (!_mod15569(enforceResult, "source")) {
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
  let source = _mod15572(this);
  if (source) {
    const tmpResult = _mod15607;
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
