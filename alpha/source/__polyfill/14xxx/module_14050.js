// Module ID: 14050
// Function ID: 14051
// Dependencies: [14051, 13999, 13995, 13996, 14015, 14052, 14053, 14018]

// Module 14050
import _mod13995 from "module_13995" /* 13995 */;
import _mod13996 from "module_13996" /* 13996 */;
import _mod13999 from "module_13999" /* 13999 */;
import _mod14015 from "module_14015" /* 14015 */;
import _mod14018 from "module_14018" /* 14018 */;
import state from "state" /* 14053 */;
import prop from "module_14051" /* 14051 */;

let closure_5 = _mod13999("".slice);
let closure_6 = _mod13999("".replace);
let closure_7 = _mod13999([].join);
let closure_8 = _mod13995 && !_mod13996(() => 8 !== defineProperty(() => {

}, "length", { value: 8 }).length);
const tmp = _mod13995 && !_mod13996(() => 8 !== defineProperty(() => {

}, "length", { value: 8 }).length);
let closure_9 = String(String).split("String");
const fn = (toString, toString2, arg2) => {
  let text = toString2;
  if ("Symbol(" === closure_5(String(toString2), 0, 7)) {
    text = `${"[" + closure_6(tmp(toString2), /^Symbol\(([^)]*)\).*$/, "$1")}]`;
  }
  let getter = arg2;
  if (arg2) {
    getter = arg2.getter;
  }
  let text1 = text;
  if (getter) {
    text1 = `get ${tmp2}`;
  }
  let setter = arg2;
  if (arg2) {
    setter = arg2.setter;
  }
  let text2 = text1;
  if (setter) {
    text2 = `set ${tmp4}`;
  }
  const tmp8 = _mod14015(toString, "name");
  let tmp9 = !tmp8;
  if (tmp8) {
    tmp9 = tmp6(14052).CONFIGURABLE && toString.name !== text2;
    const tmp10 = tmp6(14052).CONFIGURABLE && toString.name !== text2;
  }
  if (tmp9) {
    if (tmp6(13995)) {
      const obj = { value: text2, configurable: true };
      defineProperty(toString, "name", obj);
    } else {
      toString.name = text2;
    }
  }
  let tmp13 = closure_8;
  if (closure_8) {
    tmp13 = arg2;
  }
  if (tmp13) {
    tmp13 = tmp6(14015)(arg2, "arity");
  }
  if (tmp13) {
    tmp13 = toString.length !== arg2.arity;
  }
  if (tmp13) {
    const obj2 = { value: arg2.arity };
    defineProperty(toString, "length", obj2);
  }
  try {
    if (arg2) {
      if (tmp6(14015)(arg2, "constructor")) {
        if (arg2.constructor) {
          if (tmp6(13995)) {
            defineProperty(toString, "prototype", { writable: false });
          }
        }
        const enforceResult = tmp6(14053).enforce(toString);
        if (!tmp6(14015)(enforceResult, "source")) {
          let str11 = "";
          if (typeof text2 === "string") {
            str11 = text2;
          }
          enforceResult.source = closure_7(closure_9, str11);
        }
        return toString;
      }
    }
    if (toString.prototype) {
      toString.prototype = undefined;
    }
  } catch (err) {
  }
};
function toString() {
  const self = this;
  let source = _mod14018(this);
  if (source) {
    source = state.get(self).source;
    const tmpResult = state;
  }
  if (!source) {
    source = prop(self);
  }
  return source;
}
fn(toString, "toString");
Function.prototype.toString = toString;

export default fn;
