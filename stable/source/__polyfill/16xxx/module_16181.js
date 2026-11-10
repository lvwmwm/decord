// Module ID: 16181
// Function ID: 16182
// Dependencies: [16182, 16130, 16126, 16127, 16146, 16183, 16184, 16149]

// Module 16181
import _mod16126 from "module_16126" /* 16126 */;
import _mod16127 from "module_16127" /* 16127 */;
import _mod16130 from "module_16130" /* 16130 */;
import _mod16146 from "module_16146" /* 16146 */;
import _mod16149 from "module_16149" /* 16149 */;
import _mod16183 from "module_16183" /* 16183 */;
import _mod16184 from "module_16184" /* 16184 */;
import prop from "module_16182" /* 16182 */;

let closure_5 = _mod16130("".slice);
let closure_6 = _mod16130("".replace);
let closure_7 = _mod16130([].join);
let tmp = _mod16126 && !_mod16127(() => 8 !== defineProperty(() => {

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
  const tmp10 = _mod16146(toString, "name");
  let tmp11 = !tmp10;
  if (tmp10) {
    tmp11 = _mod16183.CONFIGURABLE && toString.name !== text2;
    _mod16183.CONFIGURABLE && toString.name !== text2;
  }
  if (tmp11) {
    if (_mod16126) {
      const obj = { value: text2, configurable: true };
      defineProperty(toString, "name", obj);
    } else {
      toString.name = text2;
    }
  }
  const tmp15 = closure_8 && arg2 && tmp8(16146)(arg2, "arity") && toString.length !== arg2.arity;
  if (tmp15) {
    const obj2 = { value: arg2.arity };
    defineProperty(toString, "length", obj2);
  }
  try {
    if (arg2) {
      if (_mod16146(arg2, "constructor")) {
        if (arg2.constructor) {
          if (_mod16126) {
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
  const tmp8Result = _mod16184;
  const enforceResult = tmp8Result.enforce(toString);
  if (!_mod16146(enforceResult, "source")) {
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
  let source = _mod16149(this);
  if (source) {
    const tmpResult = _mod16184;
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
