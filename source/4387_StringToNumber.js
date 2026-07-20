// Module ID: 4387
// Function ID: 38746
// Name: StringToNumber
// Dependencies: []

// Module 4387 (StringToNumber)
let tmp = require(dependencyMap[0])("%RegExp%");
let closure_2 = require(dependencyMap[0])("%parseInt%");
let closure_3 = require(dependencyMap[1])("String.prototype.slice");
let closure_4 = require(dependencyMap[2])(/^0b[01]+$/i);
let closure_5 = require(dependencyMap[2])(/^0o[0-7]+$/i);
let closure_6 = require(dependencyMap[2])(/^[-+]0x[0-9a-f]+$/i);
const items = [-1020335267, -1489307889, 1593450591411218700000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000];
tmp = new tmp("[" + items.join("") + "]", "g");
let closure_7 = require(dependencyMap[2])(tmp);
class StringToNumber {
  constructor(arg0) {
    if ("string" !== typeof global) {
      tmp14 = require;
      tmp15 = dependencyMap;
      num5 = 3;
      tmp16 = require(dependencyMap[3]);
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
        tmp12 = closure_2;
        tmp13 = closure_3;
        num4 = 2;
        return +closure_2(closure_3(global, 2), 2);
      } else {
        tmp = closure_5;
        if (closure_5(global)) {
          tmp10 = closure_2;
          tmp11 = closure_3;
          num2 = 2;
          num3 = 8;
          return +closure_2(closure_3(global, 2), 8);
        } else {
          tmp2 = closure_7;
          if (!closure_7(global)) {
            tmp3 = closure_6;
            if (!closure_6(global)) {
              tmp4 = require;
              tmp5 = dependencyMap;
              num = 4;
              tmp6 = require(dependencyMap[4])(global);
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
