// Module ID: 14930
// Function ID: 14931
// Dependencies: [14931, 14879, 14875, 14876, 14895, 14932, 14933, 14898]

// Module 14930
import _mod14875 from "module_14875" /* 14875 */;
import _mod14876 from "module_14876" /* 14876 */;
import _mod14879 from "module_14879" /* 14879 */;
import _mod14895 from "module_14895" /* 14895 */;
import _mod14898 from "module_14898" /* 14898 */;
import _mod14932 from "module_14932" /* 14932 */;
import _mod14933 from "module_14933" /* 14933 */;
import prop from "module_14931" /* 14931 */;

let closure_5 = _mod14879("".slice);
let closure_6 = _mod14879("".replace);
let closure_7 = _mod14879([].join);
let tmp = _mod14875 && !_mod14876(() => 8 !== defineProperty(() => {

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
  const tmp10 = _mod14895(toString, "name");
  let tmp11 = !tmp10;
  if (tmp10) {
    tmp11 = _mod14932.CONFIGURABLE && toString.name !== text2;
    _mod14932.CONFIGURABLE && toString.name !== text2;
  }
  if (tmp11) {
    if (_mod14875) {
      const obj = { value: text2, configurable: true };
      defineProperty(toString, "name", obj);
    } else {
      toString.name = text2;
    }
  }
  const tmp15 = closure_8 && arg2 && tmp8(14895)(arg2, "arity") && toString.length !== arg2.arity;
  if (tmp15) {
    const obj2 = { value: arg2.arity };
    defineProperty(toString, "length", obj2);
  }
  try {
    if (arg2) {
      if (_mod14895(arg2, "constructor")) {
        if (arg2.constructor) {
          if (_mod14875) {
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
  const tmp8Result = _mod14933;
  const enforceResult = tmp8Result.enforce(toString);
  if (!_mod14895(enforceResult, "source")) {
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
  let source = _mod14898(this);
  if (source) {
    const tmpResult = _mod14933;
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
