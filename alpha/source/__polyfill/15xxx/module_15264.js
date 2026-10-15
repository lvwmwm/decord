// Module ID: 15264
// Function ID: 15265
// Dependencies: [15265, 15213, 15209, 15210, 15229, 15266, 15267, 15232]

// Module 15264
import _mod15209 from "module_15209" /* 15209 */;
import _mod15210 from "module_15210" /* 15210 */;
import _mod15213 from "module_15213" /* 15213 */;
import _mod15229 from "module_15229" /* 15229 */;
import _mod15232 from "module_15232" /* 15232 */;
import _mod15266 from "module_15266" /* 15266 */;
import _mod15267 from "module_15267" /* 15267 */;
import prop from "module_15265" /* 15265 */;

let closure_5 = _mod15213("".slice);
let closure_6 = _mod15213("".replace);
let closure_7 = _mod15213([].join);
let tmp = _mod15209 && !_mod15210(() => 8 !== defineProperty(() => {

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
  const tmp10 = _mod15229(toString, "name");
  let tmp11 = !tmp10;
  if (tmp10) {
    tmp11 = _mod15266.CONFIGURABLE && toString.name !== text2;
    _mod15266.CONFIGURABLE && toString.name !== text2;
  }
  if (tmp11) {
    if (_mod15209) {
      const obj = { value: text2, configurable: true };
      defineProperty(toString, "name", obj);
    } else {
      toString.name = text2;
    }
  }
  const tmp15 = closure_8 && arg2 && tmp8(15229)(arg2, "arity") && toString.length !== arg2.arity;
  if (tmp15) {
    const obj2 = { value: arg2.arity };
    defineProperty(toString, "length", obj2);
  }
  try {
    if (arg2) {
      if (_mod15229(arg2, "constructor")) {
        if (arg2.constructor) {
          if (_mod15209) {
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
  const tmp8Result = _mod15267;
  const enforceResult = tmp8Result.enforce(toString);
  if (!_mod15229(enforceResult, "source")) {
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
  let source = _mod15232(this);
  if (source) {
    const tmpResult = _mod15267;
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
