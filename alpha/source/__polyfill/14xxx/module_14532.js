// Module ID: 14532
// Function ID: 14533
// Dependencies: [14533, 14481, 14477, 14478, 14497, 14534, 14535, 14500]

// Module 14532
import _mod14477 from "module_14477" /* 14477 */;
import _mod14478 from "module_14478" /* 14478 */;
import _mod14481 from "module_14481" /* 14481 */;
import _mod14497 from "module_14497" /* 14497 */;
import _mod14500 from "module_14500" /* 14500 */;
import _mod14534 from "module_14534" /* 14534 */;
import _mod14535 from "module_14535" /* 14535 */;
import prop from "module_14533" /* 14533 */;

let closure_5 = _mod14481("".slice);
let closure_6 = _mod14481("".replace);
let closure_7 = _mod14481([].join);
let tmp = _mod14477 && !_mod14478(() => 8 !== defineProperty(() => {

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
  const tmp10 = _mod14497(toString, "name");
  let tmp11 = !tmp10;
  if (tmp10) {
    tmp11 = _mod14534.CONFIGURABLE && toString.name !== text2;
    _mod14534.CONFIGURABLE && toString.name !== text2;
  }
  if (tmp11) {
    if (_mod14477) {
      const obj = { value: text2, configurable: true };
      defineProperty(toString, "name", obj);
    } else {
      toString.name = text2;
    }
  }
  const tmp15 = closure_8 && arg2 && tmp8(14497)(arg2, "arity") && toString.length !== arg2.arity;
  if (tmp15) {
    const obj2 = { value: arg2.arity };
    defineProperty(toString, "length", obj2);
  }
  try {
    if (arg2) {
      if (_mod14497(arg2, "constructor")) {
        if (arg2.constructor) {
          if (_mod14477) {
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
  const tmp8Result = _mod14535;
  const enforceResult = tmp8Result.enforce(toString);
  if (!_mod14497(enforceResult, "source")) {
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
  let source = _mod14500(this);
  if (source) {
    const tmpResult = _mod14535;
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
