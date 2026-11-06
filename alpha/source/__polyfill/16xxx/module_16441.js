// Module ID: 16441
// Function ID: 16442
// Dependencies: [16442, 16390, 16386, 16387, 16406, 16443, 16444, 16409]

// Module 16441
import _mod16386 from "module_16386" /* 16386 */;
import _mod16387 from "module_16387" /* 16387 */;
import _mod16390 from "module_16390" /* 16390 */;
import _mod16406 from "module_16406" /* 16406 */;
import _mod16409 from "module_16409" /* 16409 */;
import _mod16443 from "module_16443" /* 16443 */;
import _mod16444 from "module_16444" /* 16444 */;
import prop from "module_16442" /* 16442 */;

let closure_5 = _mod16390("".slice);
let closure_6 = _mod16390("".replace);
let closure_7 = _mod16390([].join);
let tmp = _mod16386 && !_mod16387(() => 8 !== defineProperty(() => {

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
  const tmp10 = _mod16406(toString, "name");
  let tmp11 = !tmp10;
  if (tmp10) {
    tmp11 = _mod16443.CONFIGURABLE && toString.name !== text2;
    _mod16443.CONFIGURABLE && toString.name !== text2;
  }
  if (tmp11) {
    if (_mod16386) {
      const obj = { value: text2, configurable: true };
      defineProperty(toString, "name", obj);
    } else {
      toString.name = text2;
    }
  }
  const tmp15 = closure_8 && arg2 && tmp8(16406)(arg2, "arity") && toString.length !== arg2.arity;
  if (tmp15) {
    const obj2 = { value: arg2.arity };
    defineProperty(toString, "length", obj2);
  }
  try {
    if (arg2) {
      if (_mod16406(arg2, "constructor")) {
        if (arg2.constructor) {
          if (_mod16386) {
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
  const tmp8Result = _mod16444;
  const enforceResult = tmp8Result.enforce(toString);
  if (!_mod16406(enforceResult, "source")) {
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
  let source = _mod16409(this);
  if (source) {
    const tmpResult = _mod16444;
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
