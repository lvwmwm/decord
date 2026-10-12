// Module ID: 14609
// Function ID: 14610
// Dependencies: [14610, 14558, 14554, 14555, 14574, 14611, 14612, 14577]

// Module 14609
import _mod14554 from "module_14554" /* 14554 */;
import _mod14555 from "module_14555" /* 14555 */;
import _mod14558 from "module_14558" /* 14558 */;
import _mod14574 from "module_14574" /* 14574 */;
import _mod14577 from "module_14577" /* 14577 */;
import _mod14611 from "module_14611" /* 14611 */;
import _mod14612 from "module_14612" /* 14612 */;
import prop from "module_14610" /* 14610 */;

let closure_5 = _mod14558("".slice);
let closure_6 = _mod14558("".replace);
let closure_7 = _mod14558([].join);
let tmp = _mod14554 && !_mod14555(() => 8 !== defineProperty(() => {

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
  const tmp10 = _mod14574(toString, "name");
  let tmp11 = !tmp10;
  if (tmp10) {
    tmp11 = _mod14611.CONFIGURABLE && toString.name !== text2;
    _mod14611.CONFIGURABLE && toString.name !== text2;
  }
  if (tmp11) {
    if (_mod14554) {
      const obj = { value: text2, configurable: true };
      defineProperty(toString, "name", obj);
    } else {
      toString.name = text2;
    }
  }
  const tmp15 = closure_8 && arg2 && tmp8(14574)(arg2, "arity") && toString.length !== arg2.arity;
  if (tmp15) {
    const obj2 = { value: arg2.arity };
    defineProperty(toString, "length", obj2);
  }
  try {
    if (arg2) {
      if (_mod14574(arg2, "constructor")) {
        if (arg2.constructor) {
          if (_mod14554) {
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
  const tmp8Result = _mod14612;
  const enforceResult = tmp8Result.enforce(toString);
  if (!_mod14574(enforceResult, "source")) {
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
  let source = _mod14577(this);
  if (source) {
    const tmpResult = _mod14612;
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
