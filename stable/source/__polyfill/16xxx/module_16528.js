// Module ID: 16528
// Function ID: 16529
// Dependencies: [16529, 16477, 16473, 16474, 16493, 16530, 16531, 16496]

// Module 16528
import _mod16473 from "module_16473" /* 16473 */;
import _mod16474 from "module_16474" /* 16474 */;
import _mod16477 from "module_16477" /* 16477 */;
import _mod16493 from "module_16493" /* 16493 */;
import _mod16496 from "module_16496" /* 16496 */;
import _mod16530 from "module_16530" /* 16530 */;
import _mod16531 from "module_16531" /* 16531 */;
import prop from "module_16529" /* 16529 */;

let closure_5 = _mod16477("".slice);
let closure_6 = _mod16477("".replace);
let closure_7 = _mod16477([].join);
let tmp = _mod16473 && !_mod16474(() => 8 !== defineProperty(() => {

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
  const tmp10 = _mod16493(toString, "name");
  let tmp11 = !tmp10;
  if (tmp10) {
    tmp11 = _mod16530.CONFIGURABLE && toString.name !== text2;
    _mod16530.CONFIGURABLE && toString.name !== text2;
  }
  if (tmp11) {
    if (_mod16473) {
      const obj = { value: text2, configurable: true };
      defineProperty(toString, "name", obj);
    } else {
      toString.name = text2;
    }
  }
  const tmp15 = closure_8 && arg2 && tmp8(16493)(arg2, "arity") && toString.length !== arg2.arity;
  if (tmp15) {
    const obj2 = { value: arg2.arity };
    defineProperty(toString, "length", obj2);
  }
  try {
    if (arg2) {
      if (_mod16493(arg2, "constructor")) {
        if (arg2.constructor) {
          if (_mod16473) {
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
  const tmp8Result = _mod16531;
  const enforceResult = tmp8Result.enforce(toString);
  if (!_mod16493(enforceResult, "source")) {
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
  let source = _mod16496(this);
  if (source) {
    const tmpResult = _mod16531;
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
