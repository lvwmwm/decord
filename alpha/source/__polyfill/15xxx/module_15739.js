// Module ID: 15739
// Function ID: 15740
// Dependencies: [15740, 15688, 15684, 15685, 15704, 15741, 15742, 15707]

// Module 15739
import _mod15684 from "module_15684" /* 15684 */;
import _mod15685 from "module_15685" /* 15685 */;
import _mod15688 from "module_15688" /* 15688 */;
import _mod15704 from "module_15704" /* 15704 */;
import _mod15707 from "module_15707" /* 15707 */;
import _mod15741 from "module_15741" /* 15741 */;
import _mod15742 from "module_15742" /* 15742 */;
import prop from "module_15740" /* 15740 */;

let closure_5 = _mod15688("".slice);
let closure_6 = _mod15688("".replace);
let closure_7 = _mod15688([].join);
let tmp = _mod15684 && !_mod15685(() => 8 !== defineProperty(() => {

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
  const tmp10 = _mod15704(toString, "name");
  let tmp11 = !tmp10;
  if (tmp10) {
    tmp11 = _mod15741.CONFIGURABLE && toString.name !== text2;
    _mod15741.CONFIGURABLE && toString.name !== text2;
  }
  if (tmp11) {
    if (_mod15684) {
      const obj = { value: text2, configurable: true };
      defineProperty(toString, "name", obj);
    } else {
      toString.name = text2;
    }
  }
  const tmp15 = closure_8 && arg2 && tmp8(15704)(arg2, "arity") && toString.length !== arg2.arity;
  if (tmp15) {
    const obj2 = { value: arg2.arity };
    defineProperty(toString, "length", obj2);
  }
  try {
    if (arg2) {
      if (_mod15704(arg2, "constructor")) {
        if (arg2.constructor) {
          if (_mod15684) {
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
  const tmp8Result = _mod15742;
  const enforceResult = tmp8Result.enforce(toString);
  if (!_mod15704(enforceResult, "source")) {
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
  let source = _mod15707(this);
  if (source) {
    const tmpResult = _mod15742;
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
