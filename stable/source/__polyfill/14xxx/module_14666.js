// Module ID: 14666
// Function ID: 14667
// Dependencies: [14667, 14615, 14611, 14612, 14631, 14668, 14669, 14634]

// Module 14666
import _mod14611 from "module_14611" /* 14611 */;
import _mod14612 from "module_14612" /* 14612 */;
import _mod14615 from "module_14615" /* 14615 */;
import _mod14631 from "module_14631" /* 14631 */;
import _mod14634 from "module_14634" /* 14634 */;
import state from "state" /* 14669 */;
import prop from "module_14667" /* 14667 */;

let closure_5 = _mod14615("".slice);
let closure_6 = _mod14615("".replace);
let closure_7 = _mod14615([].join);
let closure_8 = _mod14611 && !_mod14612(() => 8 !== defineProperty(() => {

}, "length", { value: 8 }).length);
const tmp = _mod14611 && !_mod14612(() => 8 !== defineProperty(() => {

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
  const tmp8 = _mod14631(toString, "name");
  let tmp9 = !tmp8;
  if (tmp8) {
    tmp9 = tmp6(14668).CONFIGURABLE && toString.name !== text2;
    const tmp10 = tmp6(14668).CONFIGURABLE && toString.name !== text2;
  }
  if (tmp9) {
    if (tmp6(14611)) {
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
    tmp13 = tmp6(14631)(arg2, "arity");
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
      if (tmp6(14631)(arg2, "constructor")) {
        if (arg2.constructor) {
          if (tmp6(14611)) {
            defineProperty(toString, "prototype", { writable: false });
          }
        }
        const enforceResult = tmp6(14669).enforce(toString);
        if (!tmp6(14631)(enforceResult, "source")) {
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
  let source = _mod14634(this);
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
