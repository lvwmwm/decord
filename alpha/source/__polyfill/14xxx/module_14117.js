// Module ID: 14117
// Function ID: 14118
// Dependencies: [14118, 14066, 14062, 14063, 14082, 14119, 14120, 14085]

// Module 14117
import _mod14062 from "module_14062" /* 14062 */;
import _mod14063 from "module_14063" /* 14063 */;
import _mod14066 from "module_14066" /* 14066 */;
import _mod14082 from "module_14082" /* 14082 */;
import _mod14085 from "module_14085" /* 14085 */;
import _mod14119 from "module_14119" /* 14119 */;
import _mod14120 from "module_14120" /* 14120 */;
import prop from "module_14118" /* 14118 */;

let closure_5 = _mod14066("".slice);
let closure_6 = _mod14066("".replace);
let closure_7 = _mod14066([].join);
let tmp = _mod14062 && !_mod14063(() => 8 !== defineProperty(() => {

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
  const tmp10 = _mod14082(toString, "name");
  let tmp11 = !tmp10;
  if (tmp10) {
    tmp11 = _mod14119.CONFIGURABLE && toString.name !== text2;
    _mod14119.CONFIGURABLE && toString.name !== text2;
  }
  if (tmp11) {
    if (_mod14062) {
      const obj = { value: text2, configurable: true };
      defineProperty(toString, "name", obj);
    } else {
      toString.name = text2;
    }
  }
  const tmp15 = closure_8 && arg2 && tmp8(14082)(arg2, "arity") && toString.length !== arg2.arity;
  if (tmp15) {
    const obj2 = { value: arg2.arity };
    defineProperty(toString, "length", obj2);
  }
  try {
    if (arg2) {
      if (_mod14082(arg2, "constructor")) {
        if (arg2.constructor) {
          if (_mod14062) {
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
  const tmp8Result = _mod14120;
  const enforceResult = tmp8Result.enforce(toString);
  if (!_mod14082(enforceResult, "source")) {
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
  let source = _mod14085(this);
  if (source) {
    const tmpResult = _mod14120;
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
