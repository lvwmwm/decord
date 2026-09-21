// Module ID: 5025
// Function ID: 5026
// Name: StringToNumber
// Dependencies: [1285, 1319, 1451, 1286, 5026]

// Module 5025 (StringToNumber)
import _mod1285 from "module_1285" /* 1285 */;
import _mod1286 from "module_1286" /* 1286 */;
import callBoundIntrinsic from "callBoundIntrinsic" /* 1319 */;
import regexTester from "regexTester" /* 1451 */;
import trim from "trim" /* 5026 */;

const React2 = _mod1285("%parseInt%");
const React3 = callBoundIntrinsic("String.prototype.slice");
const React4 = regexTester(/^0b[01]+$/i);
const hasOwnProperty = regexTester(/^0o[0-7]+$/i);
const timestampProducer = regexTester(/^[-+]0x[0-9a-f]+$/i);
const items = ["\u0085", "\u200B", "\uFFFE"];
const tmp = _mod1285("%RegExp%");
const React5 = regexTester(new _mod1285("%RegExp%")("[" + items.join("") + "]", "g"));
class StringToNumber {
  constructor(arg0) {
    if (typeof global !== "string") {
      tmp13 = closure_0;
      tmp14 = closure_1;
      tmp15 = new.target;
      str = "Assertion failed: `argument` is not a String";
      tmp16 = new.target;
      tmp17 = new closure_0(closure_1[3])("Assertion failed: `argument` is not a String");
      tmp18 = tmp17;
      throw tmp17;
    } else {
      tmp19 = closure_4;
      if (closure_4(global)) {
        tmp11 = closure_2;
        tmp12 = closure_3;
        num4 = 2;
        return +closure_2(closure_3(global, 2), 2);
      } else {
        tmp = closure_5;
        if (closure_5(global)) {
          tmp9 = closure_2;
          tmp10 = closure_3;
          num2 = 2;
          num3 = 8;
          return +closure_2(closure_3(global, 2), 8);
        } else {
          tmp2 = closure_7;
          if (!closure_7(global)) {
            tmp3 = closure_6;
            if (!closure_6(global)) {
              tmp4 = closure_0;
              tmp5 = closure_1;
              tmp6 = closure_0(closure_1[4])(global);
              if (tmp6 !== global) {
                tmp8 = StringToNumber;
                tmp7 = StringToNumber(tmp6);
              } else {
                tmp7 = +global;
              }
              return tmp7;
            }
          }
          num = NaN;
          return NaN;
        }
      }
    }
  }
}

export default StringToNumber;
