// Module ID: 14638
// Function ID: 14639
// Dependencies: [14639, 14587, 14583, 14584, 14603, 14640, 14641, 14606]

// Module 14638
import _mod14583 from "module_14583" /* 14583 */;
import _mod14584 from "module_14584" /* 14584 */;
import _mod14587 from "module_14587" /* 14587 */;
import _mod14603 from "module_14603" /* 14603 */;
import _mod14606 from "module_14606" /* 14606 */;
import state from "state" /* 14641 */;
import prop from "module_14639" /* 14639 */;

let closure_5 = _mod14587("".slice);
let closure_6 = _mod14587("".replace);
let closure_7 = _mod14587([].join);
let closure_8 = _mod14583 && !_mod14584(() => 8 !== defineProperty(() => {

}, "length", { value: 8 }).length);
const tmp = _mod14583 && !_mod14584(() => 8 !== defineProperty(() => {

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
  const tmp8 = _mod14603(toString, "name");
  let tmp9 = !tmp8;
  if (tmp8) {
    tmp9 = tmp6(14640).CONFIGURABLE && toString.name !== text2;
    const tmp10 = tmp6(14640).CONFIGURABLE && toString.name !== text2;
  }
  if (tmp9) {
    if (tmp6(14583)) {
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
    tmp13 = tmp6(14603)(arg2, "arity");
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
      if (tmp6(14603)(arg2, "constructor")) {
        if (arg2.constructor) {
          if (tmp6(14583)) {
            defineProperty(toString, "prototype", { writable: false });
          }
        }
        const enforceResult = tmp6(14641).enforce(toString);
        if (!tmp6(14603)(enforceResult, "source")) {
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
  let source = _mod14606(this);
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
