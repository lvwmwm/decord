// Module ID: 4395
// Function ID: 38842
// Name: StringToNumber
// Dependencies: [517, 551, 1371, 518, 4396]

// Module 4395 (StringToNumber)
let tmp = require("getEvalledConstructor")("%RegExp%");
let closure_2 = require("getEvalledConstructor")("%parseInt%");
let closure_3 = require("callBoundIntrinsic")("String.prototype.slice");
let closure_4 = require("regexTester")(/^0b[01]+$/i);
let closure_5 = require("regexTester")(/^0o[0-7]+$/i);
let closure_6 = require("regexTester")(/^[-+]0x[0-9a-f]+$/i);
const items = ["\u0085", "\u200B", "\uFFFE"];
tmp = new tmp("[" + items.join("") + "]", "g");
let closure_7 = require("regexTester")(tmp);
class StringToNumber {
  constructor(arg0) {
    if ("string" !== typeof global) {
      tmp14 = closure_0;
      tmp15 = closure_1;
      num5 = 3;
      tmp16 = require("module_518");
      prototype = tmp16.prototype;
      tmp17 = new.target;
      str = "Assertion failed: `argument` is not a String";
      tmp18 = new.target;
      tmp16 = new tmp16("Assertion failed: `argument` is not a String");
      tmp20 = tmp16;
      throw tmp16;
    } else {
      tmp21 = closure_4;
      if (closure_4(global)) {
        tmp12 = c2;
        tmp13 = c3;
        num4 = 2;
        return +c2(c3(global, 2), 2);
      } else {
        tmp = closure_5;
        if (closure_5(global)) {
          tmp10 = c2;
          tmp11 = c3;
          num2 = 2;
          num3 = 8;
          return +c2(c3(global, 2), 8);
        } else {
          tmp2 = c7;
          if (!c7(global)) {
            tmp3 = closure_6;
            if (!closure_6(global)) {
              tmp4 = closure_0;
              tmp5 = closure_1;
              num = 4;
              tmp6 = require("trim")(global);
              if (tmp6 !== global) {
                tmp8 = StringToNumber;
                tmp7 = StringToNumber(tmp6);
              } else {
                tmp7 = +global;
              }
              return tmp7;
            }
          }
          tmp9 = globalThis;
          _NaN = NaN;
          return NaN;
        }
      }
    }
  }
}

export default StringToNumber;
