// Module ID: 14614
// Function ID: 14615
// Dependencies: [14615, 14563, 14559, 14560, 14579, 14616, 14617, 14582]

// Module 14614
import _mod14559 from "module_14559" /* 14559 */;
import _mod14560 from "module_14560" /* 14560 */;
import _mod14563 from "module_14563" /* 14563 */;
import _mod14579 from "module_14579" /* 14579 */;
import _mod14582 from "module_14582" /* 14582 */;
import _mod14616 from "module_14616" /* 14616 */;
import _mod14617 from "module_14617" /* 14617 */;
import prop from "module_14615" /* 14615 */;

let closure_5 = _mod14563("".slice);
let closure_6 = _mod14563("".replace);
let closure_7 = _mod14563([].join);
let tmp = _mod14559 && !_mod14560(() => 8 !== defineProperty(() => {

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
  const tmp10 = _mod14579(toString, "name");
  let tmp11 = !tmp10;
  if (tmp10) {
    tmp11 = _mod14616.CONFIGURABLE && toString.name !== text2;
    _mod14616.CONFIGURABLE && toString.name !== text2;
  }
  if (tmp11) {
    if (_mod14559) {
      const obj = { value: text2, configurable: true };
      defineProperty(toString, "name", obj);
    } else {
      toString.name = text2;
    }
  }
  const tmp15 = closure_8 && arg2 && tmp8(14579)(arg2, "arity") && toString.length !== arg2.arity;
  if (tmp15) {
    const obj2 = { value: arg2.arity };
    defineProperty(toString, "length", obj2);
  }
  try {
    if (arg2) {
      if (_mod14579(arg2, "constructor")) {
        if (arg2.constructor) {
          if (_mod14559) {
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
  const tmp8Result = _mod14617;
  const enforceResult = tmp8Result.enforce(toString);
  if (!_mod14579(enforceResult, "source")) {
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
  let source = _mod14582(this);
  if (source) {
    const tmpResult = _mod14617;
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
