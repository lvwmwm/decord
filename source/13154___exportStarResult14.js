// Module ID: 13154
// Function ID: 101457
// Name: __exportStarResult14
// Dependencies: [1257, 13138, 13139]
// Exports: ComputeExponentForMagnitude

// Module 13154 (__exportStarResult14)
import createExporter from "createExporter";
import digitsToString from "digitsToString";

const result = digitsToString.default.set({ toExpPos: 100 });

export const ComputeExponentForMagnitude = function ComputeExponentForMagnitude(style, floorResult) {
  let dataLocaleData;
  let notation;
  let numberingSystem;
  ({ notation, dataLocaleData, numberingSystem } = style);
  if ("standard" === notation) {
    return 0;
  } else if ("scientific" === notation) {
    return floorResult.toNumber();
  } else if ("engineering" === notation) {
    const divResult = floorResult.div(3);
    floorResult = floorResult.div(3).floor();
    return floorResult.div(3).floor().times(3).toNumber();
  } else {
    require(13139) /* setInternalSlot */.invariant("compact" === notation, "Invalid notation");
    if ("currency" === style.style) {
      let str = "name";
      if ("name" !== tmp10) {
        let tmp2 = dataLocaleData.numbers.currency[numberingSystem];
        if (!tmp2) {
          tmp2 = dataLocaleData.numbers.currency[dataLocaleData.numbers.nu[0]];
        }
        let short = tmp2.short;
      }
      if (short) {
        str = digitsToString.default.pow(10, floorResult).toString();
        const _Object = Object;
        const keys = Object.keys(short);
        if (str < keys[0]) {
          return 0;
        } else if (str > keys[keys.length - 1]) {
          return keys[keys.length - 1].length - 1;
        } else {
          const index = keys.indexOf(str);
          if (-1 === index) {
            return 0;
          } else {
            let num7 = 0;
            if ("0" !== short[keys[index]].other) {
              num7 = arr2.length - short[arr2].other.match(/0+/)[0].length;
              const str5 = short[arr2].other;
            }
            return num7;
          }
        }
        const _default = digitsToString.default;
        const str3 = digitsToString.default.pow(10, floorResult);
      } else {
        return 0;
      }
    }
    let tmp = dataLocaleData.numbers.decimal[numberingSystem];
    if (!tmp) {
      tmp = dataLocaleData.numbers.decimal[dataLocaleData.numbers.nu[0]];
    }
    short = "long" === style.compactDisplay ? tmp.long : tmp.short;
  }
};
