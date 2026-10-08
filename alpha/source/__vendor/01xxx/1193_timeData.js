// Module ID: 1193
// Function ID: 1194
// Name: timeData
// Dependencies: [1194]
// Exports: getBestPattern

// Module 1193 (timeData)
import _mod1194 from "module_1194" /* 1194 */;


export const getBestPattern = function getBestPattern(arr3, locale) {
  let tmp22;
  let tmp26;
  let num = 0;
  let str = "";
  let str2 = "";
  if (0 < arr3.length) {
    while (true) {
      let tmp5;
      let sum6;
      let charAtResult = arr3.charAt(num);
      if ("j" === charAtResult) {
        let str6;
        let sum = num + 1;
        let num2 = 0;
        let tmp7 = num;
        if (sum < arr3.length) {
          let num3 = 0;
          let tmp8 = num;
          num2 = 0;
          tmp7 = num;
          if (arr3.charAt(sum) === charAtResult) {
            let sum1 = num3 + 1;
            let sum2 = tmp8 + 1;
            let sum3 = sum2 + 1;
            num2 = sum1;
            tmp7 = sum2;
            while (sum3 < arr3.length) {
              num3 = sum1;
              tmp8 = sum2;
              num2 = sum1;
              tmp7 = sum2;
              if (arr3.charAt(sum3) !== charAtResult) {
                break;
              }
            }
          }
        }
        let num4 = 1;
        if (num2 >= 2) {
          num4 = 3 + (num2 >> 1);
        }
        let hourCycle = locale.hourCycle;
        let tmp12 = undefined === hourCycle && locale.hourCycles && locale.hourCycles.length;
        if (tmp12) {
          hourCycle = locale.hourCycles[0];
        }
        if (hourCycle) {
          if ("h24" === hourCycle) {
            str6 = "k";
          } else if ("h23" === hourCycle) {
            str6 = "H";
          } else if ("h12" === hourCycle) {
            str6 = "h";
          } else {
            str6 = "K";
            if ("h11" !== hourCycle) {
              break;
            }
          }
        } else {
          let language = locale.language;
          let str4;
          if ("root" !== language) {
            str4 = locale.maximize().region;
          }
          let tmp13 = require;
          let timeData = _mod1194.timeData;
          if (!str4) {
            str4 = "";
          }
          let v001 = timeData[str4];
          if (!v001) {
            let str5 = language;
            let timeData2 = tmp13(1194).timeData;
            if (!language) {
              str5 = "";
            }
            v001 = timeData2[str5];
          }
          if (!v001) {
            let concat = "".concat;
            v001 = tmp13(1194).timeData["".concat("", language, "-001")];
          }
          if (!v001) {
            v001 = tmp13(1194).timeData["001"];
          }
          str6 = v001[0];
        }
        let tmp18 = "H" != str6 && "k" != str6;
        if (!tmp18) {
          num4 = 0;
        }
        let diff = num4 - 1;
        let text = str;
        let tmp21 = str;
        if (0 < num4) {
          do {
            text = `${tmp20}a`;
            tmp22 = diff;
            diff = diff - 1;
            tmp21 = text;
          } while (0 < tmp22);
        }
        let sum4 = 1 + (1 & num2);
        let diff1 = sum4 - 1;
        let sum5 = tmp21;
        tmp5 = tmp7;
        sum6 = tmp21;
        if (0 < sum4) {
          do {
            sum5 = str6 + sum5;
            tmp26 = diff1;
            diff1 = diff1 - 1;
            tmp5 = tmp7;
            sum6 = sum5;
          } while (0 < tmp26);
        }
      } else {
        let str3 = "H";
        if ("J" !== charAtResult) {
          str3 = charAtResult;
        }
        sum6 = str + str3;
        tmp5 = num;
      }
      num = tmp5 + 1;
      str = sum6;
      str2 = sum6;
    }
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("Invalid hourCycle");
    throw error;
  }
  return str2;
};
