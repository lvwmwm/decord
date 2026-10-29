// Module ID: 16101
// Function ID: 16102
// Dependencies: [16102, 16050, 16046, 16047, 16066, 16103, 16104, 16069]

// Module 16101
import _mod16046 from "module_16046" /* 16046 */;
import _mod16047 from "module_16047" /* 16047 */;
import _mod16050 from "module_16050" /* 16050 */;
import _mod16066 from "module_16066" /* 16066 */;
import _mod16069 from "module_16069" /* 16069 */;
import _mod16103 from "module_16103" /* 16103 */;
import _mod16104 from "module_16104" /* 16104 */;
import prop from "module_16102" /* 16102 */;

let closure_5 = _mod16050("".slice);
let closure_6 = _mod16050("".replace);
let closure_7 = _mod16050([].join);
let tmp = _mod16046 && !_mod16047(() => 8 !== defineProperty(() => {

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
  const tmp10 = _mod16066(toString, "name");
  let tmp11 = !tmp10;
  if (tmp10) {
    tmp11 = _mod16103.CONFIGURABLE && toString.name !== text2;
    _mod16103.CONFIGURABLE && toString.name !== text2;
  }
  if (tmp11) {
    if (_mod16046) {
      const obj = { value: text2, configurable: true };
      defineProperty(toString, "name", obj);
    } else {
      toString.name = text2;
    }
  }
  const tmp15 = closure_8 && arg2 && tmp8(16066)(arg2, "arity") && toString.length !== arg2.arity;
  if (tmp15) {
    const obj2 = { value: arg2.arity };
    defineProperty(toString, "length", obj2);
  }
  try {
    if (arg2) {
      if (_mod16066(arg2, "constructor")) {
        if (arg2.constructor) {
          if (_mod16046) {
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
  const tmp8Result = _mod16104;
  const enforceResult = tmp8Result.enforce(toString);
  if (!_mod16066(enforceResult, "source")) {
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
  let source = _mod16069(this);
  if (source) {
    const tmpResult = _mod16104;
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
