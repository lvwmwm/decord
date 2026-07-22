// Module ID: 13046
// Function ID: 99314
// Name: partitionNumberIntoParts
// Dependencies: [0, 0, 0, 0, 0, 0]
// Exports: default

// Module 13046 (partitionNumberIntoParts)
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";

function partitionNumberIntoParts(currencyGroup, arg1, arg2, arg3, arg4, arg5, arg6, arg7, roundingIncrement, result) {
  let formattedString;
  let roundedNumber;
  const items = [];
  ({ formattedString, roundedNumber } = arg1);
  if (roundedNumber.isNaN()) {
    let obj = { type: "nan", value: formattedString };
    const items1 = [obj];
    return items1;
  } else if (roundedNumber.isFinite()) {
    const tmp4 = require(dependencyMap[4]).digitMapping[arg4];
    const require = tmp4;
    let replaced = formattedString;
    if (tmp4) {
      replaced = formattedString.replace(/\d/g, (arg0) => tmp4[+arg0] || arg0);
    }
    const index = replaced.indexOf(".");
    let substr = replaced;
    let substr1;
    if (index > 0) {
      substr = replaced.slice(0, index);
      substr1 = replaced.slice(index + 1);
    }
    let flag = true;
    if ("always" !== arg5) {
      if ("min2" === arg5) {
        flag = roundedNumber.greaterThanOrEqualTo(10000);
      } else {
        flag = false;
        if (tmp8) {
          let greaterThanOrEqualToResult = "compact" !== arg2;
          if (!greaterThanOrEqualToResult) {
            greaterThanOrEqualToResult = roundedNumber.greaterThanOrEqualTo(10000);
          }
          flag = greaterThanOrEqualToResult;
        }
        const tmp8 = "auto" === arg5 || arg5;
      }
    }
    if (flag) {
      if ("currency" === arg7) {
        if (null != currencyGroup.currencyGroup) {
          let group = currencyGroup.currencyGroup;
        }
        const items2 = [];
        const parts = arg6.split(".")[0].split(",");
        let num7 = 3;
        let num8 = 3;
        if (parts.length > 1) {
          num8 = parts[parts.length - 1].length;
        }
        if (parts.length > 2) {
          num7 = parts[parts.length - 2].length;
        }
        const diff = substr.length - num8;
        if (diff > 0) {
          items2.push(substr.slice(diff, diff + num8));
          let diff1 = diff - num7;
          let tmp16 = diff1;
          if (diff1 > 0) {
            do {
              let arr = items2.push(substr.slice(diff1, diff1 + num7));
              diff1 = diff1 - num7;
              tmp16 = diff1;
            } while (diff1 > 0);
          }
          items2.push(substr.slice(0, tmp16 + num7));
        } else {
          items2.push(substr);
        }
        if (items2.length > 0) {
          do {
            obj = { type: "integer", value: items2.pop() };
            let arr3 = items.push(obj);
            if (items2.length > 0) {
              let obj1 = { type: "group", value: group };
              let arr4 = items.push(obj1);
            }
          } while (items2.length > 0);
        }
        const str9 = arg6.split(".")[0];
      }
      group = currencyGroup.group;
    } else {
      const obj2 = { type: "integer", value: substr };
      items.push(obj2);
    }
    if (undefined === substr1) {
      if ("scientific" === arg2) {
        if (roundedNumber.isFinite()) {
          const obj3 = { type: "exponentSeparator", value: currencyGroup.exponential };
          items.push(obj3);
          let tmp24 = arg3;
          if (arg3 < 0) {
            const obj4 = { type: "exponentMinusSign", value: currencyGroup.minusSign };
            items.push(obj4);
            tmp24 = -arg3;
          }
          let _default = __exportStarResult1.default;
          const prototype = _default.prototype;
          _default = new _default(tmp24);
          const obj5 = { type: "exponentInteger", value: require(dependencyMap[5]).ToRawFixed(_default, 0, 0, roundingIncrement, result).formattedString };
          items.push(obj5);
        }
      }
      return items;
    } else {
      if ("currency" !== arg7) {
        const obj6 = { type: "decimal", value: currencyGroup.decimal };
        const obj7 = { type: "fraction", value: substr1 };
        items.push(obj6, obj7);
      }
      const currencyDecimal = currencyGroup.currencyDecimal;
    }
  } else {
    obj = { type: "infinity", value: formattedString };
    const items3 = [obj];
    return items3;
  }
}
function getPatternForSign(arr, sign) {
  let str = arr;
  if (arr.indexOf(";") < 0) {
    const concat = "".concat;
    const combined = "".concat(arr, ";-");
    str = combined.concat(arr);
  }
  const parts = str.split(";");
  const first = parts[0];
  if (0 === sign) {
    return first;
  } else if (-1 === sign) {
    return arr;
  } else {
    if (arr.indexOf("-") >= 0) {
      let replaced = arr.replace(/-/g, "+");
    } else {
      const concat2 = "+".concat;
      replaced = "+".concat(first);
    }
    return replaced;
  }
}
function selectPlural(arg0, roundedNumber, displayName) {
  return displayName[arg0.select(arg0, roundedNumber)] || displayName.other;
}
const regExp = new RegExp("^".concat(require("__exportStarResult1").S_UNICODE_REGEX.source));
const regExp1 = new RegExp("".concat(require("__exportStarResult1").S_UNICODE_REGEX.source, "$"));
let closure_5 = /[#0](?:[\.,][#0]+)*/g;

export default function formatToParts(magnitude, numbers, arg2, currencyDisplay) {
  let compactDisplay;
  let exponent;
  let notation;
  let numberingSystem;
  let sign;
  let style;
  let tmp54;
  let tmp55;
  let unit;
  let unitDisplay;
  ({ sign, exponent } = magnitude);
  ({ notation, style, numberingSystem } = currencyDisplay);
  const first = numbers.numbers.nu[0];
  let tmp3 = null;
  if (tmp2) {
    const roundedNumber = magnitude.roundedNumber;
    const _String = String;
    const _Math = Math;
    ({ compactDisplay, currencyDisplay } = currencyDisplay);
    const StringResult = String(Math.pow(10, magnitude.magnitude));
    const first1 = numbers.numbers.nu[0];
    if ("currency" === style) {
      if ("name" !== currencyDisplay) {
        const currency = numbers.numbers.currency;
        const short = currency[numberingSystem] || currency[first1].short;
        let tmp13;
        if (null !== short) {
          if (undefined !== short) {
            tmp13 = short[StringResult];
          }
        }
        let replaced = null;
        if (tmp13) {
          let tmp11 = selectPlural(arg2, roundedNumber.toNumber(), tmp13);
          replaced = null;
          if ("0" !== tmp11) {
            const str4 = getPatternForSign(tmp11, magnitude.sign);
            replaced = getPatternForSign(tmp11, magnitude.sign).replace(/([^\s;\-\+\d¤]+)/g, "{c:$1}").replace(/0+/, "0");
            const str6 = getPatternForSign(tmp11, magnitude.sign).replace(/([^\s;\-\+\d¤]+)/g, "{c:$1}");
          }
        }
        const tmp12 = currency[numberingSystem] || currency[first1];
      }
      tmp3 = replaced;
    }
    const decimal = numbers.numbers.decimal;
    replaced = null;
    if (decimal[numberingSystem] || decimal[first1][compactDisplay][StringResult]) {
      tmp11 = selectPlural(arg2, roundedNumber.toNumber(), tmp8);
    }
    const tmp7 = decimal[numberingSystem] || decimal[first1];
  }
  if ("currency" === style) {
    if ("name" !== currencyDisplay.currencyDisplay) {
      if (numbers.currencies[currencyDisplay.currency]) {
        const currencyDisplay2 = currencyDisplay.currencyDisplay;
        if ("code" === currencyDisplay2) {
          let currency2 = currencyDisplay.currency;
        } else {
          currency2 = "symbol" === currencyDisplay2 ? tmp17.symbol : tmp17.narrow;
        }
      } else {
        currency2 = currencyDisplay.currency;
      }
    }
  }
  let str10 = tmp3;
  if (!tmp3) {
    if ("decimal" !== style) {
      if ("unit" !== style) {
        numbers = numbers.numbers;
        if (tmp16) {
          str10 = tmp18(numbers.currency[numberingSystem] || numbers.numbers.currency[first][currencyDisplay.currencySign], sign);
          const tmp20 = numbers.currency[numberingSystem] || numbers.numbers.currency[first];
        } else {
          str10 = tmp18(numbers.percent[numberingSystem] || numbers.numbers.percent[first], sign);
          const tmp19 = numbers.percent[numberingSystem] || numbers.numbers.percent[first];
        }
      }
    }
    let tmp22 = numbers.numbers.decimal[numberingSystem];
    if (!tmp22) {
      tmp22 = numbers.numbers.decimal[first];
    }
    str10 = getPatternForSign(tmp22.standard, sign);
    const tmp21 = getPatternForSign;
  }
  const first2 = regex.exec(str10)[0];
  const str14 = str10.replace(regex, "{0}").replace(/'(.)'/g, "$1");
  let str15 = str14;
  if ("currency" === style) {
    str15 = str14;
    if ("name" !== currencyDisplay.currencyDisplay) {
      const afterInsertBetween = tmp24.currencySpacing.afterInsertBetween;
      let tmp25 = afterInsertBetween;
      if (afterInsertBetween) {
        tmp25 = !regExp1.test(currency2);
      }
      let str17 = str14;
      if (tmp25) {
        const concat = "\u00A4".concat;
        str17 = str14.replace("\u00A4{0}", "\u00A4".concat(afterInsertBetween, "{0}"));
      }
      const beforeInsertBetween = tmp24.currencySpacing.beforeInsertBetween;
      let tmp27 = beforeInsertBetween;
      if (beforeInsertBetween) {
        tmp27 = !regExp.test(currency2);
      }
      str15 = str17;
      if (tmp27) {
        const concat2 = "{0}".concat;
        str15 = str17.replace("{0}\u00A4", "{0}".concat(beforeInsertBetween, "\u00A4"));
      }
    }
  }
  const parts = str15.split(/({c:[^}]+}|\{0\}|[¤%\-\+])/g);
  const items = [];
  let num2 = 0;
  if (0 < parts.length) {
    do {
      let str22 = parts[num2];
      let tmp32 = tmp31;
      if (str22) {
        if ("{0}" === str22) {
          let push2 = items.push;
          let tmp40 = !tmp3;
          let tmp39 = closure_6;
          if (tmp40) {
            let useGrouping = currencyDisplay.useGrouping;
            let tmp41 = null === useGrouping || undefined === useGrouping || useGrouping;
            tmp40 = tmp41;
            let tmp31 = useGrouping;
          }
          let tmp42 = closure_0;
          let tmp43 = closure_1;
          let tmp44 = tmp29;
          let tmp45 = magnitude;
          let tmp46 = notation;
          let tmp47 = exponent;
          let tmp48 = numberingSystem;
          let tmp49 = tmp40;
          let tmp50 = first2;
          let tmp51 = style;
          let applyResult = push2.apply(items, tmp39(tmp29, magnitude, notation, exponent, numberingSystem, tmp40, first2, style, currencyDisplay.roundingIncrement, closure_0(closure_1[3]).GetUnsignedRoundingMode(currencyDisplay.roundingMode, tmp30)));
          tmp32 = tmp31;
        } else if ("-" === str22) {
          let obj = { type: "minusSign", value: tmp29.minusSign };
          let arr = items.push(obj);
          tmp32 = tmp31;
        } else if ("+" === str22) {
          obj = { type: "plusSign", value: tmp29.plusSign };
          arr = items.push(obj);
          tmp32 = tmp31;
        } else if ("%" === str22) {
          let obj1 = { type: "percentSign", value: tmp29.percentSign };
          let arr1 = items.push(obj1);
          tmp32 = tmp31;
        } else if ("\u00A4" === str22) {
          let obj2 = { type: "currency", value: currency2 };
          let arr2 = items.push(obj2);
          tmp32 = tmp31;
        } else {
          obj = /^\{c:/;
          let push = items.push;
          let obj3 = {};
          if (obj.test(str22)) {
            obj3.type = "compact";
            obj3.value = str22.substring(3, str22.length - 1);
            let arr3 = push(obj3);
            tmp32 = tmp31;
          } else {
            obj3.type = "literal";
            obj3.value = str22;
            let arr4 = push(obj3);
            tmp32 = tmp31;
          }
        }
      }
      num2 = num2 + 1;
      tmp31 = tmp32;
    } while (num2 < parts.length);
  }
  if ("currency" === style) {
    if ("name" === currencyDisplay.currencyDisplay) {
      if (numbers.currencies[currencyDisplay.currency]) {
        const roundedNumber4 = magnitude.roundedNumber;
        let currency3 = selectPlural(arg2, roundedNumber4.times(__exportStarResult1.default.pow(10, exponent)).toNumber(), tmp70.displayName);
        const _default3 = __exportStarResult1.default;
        const timesResult = roundedNumber4.times(__exportStarResult1.default.pow(10, exponent));
      } else {
        currency3 = currencyDisplay.currency;
      }
      const items1 = [];
      const parts1 = numbers.numbers.currency[numberingSystem] || numbers.numbers.currency[first].unitPattern.split(/(\{[01]\})/g);
      for (let num8 = 0; num8 < parts1.length; num8 = num8 + 1) {
        let tmp73 = parts1[num8];
        if ("{0}" === tmp73) {
          let push4 = items1.push;
          let applyResult1 = push4.apply(items1, items);
        } else if ("{1}" === tmp73) {
          let obj4 = { type: "currency", value: currency3 };
          let arr5 = items1.push(obj4);
        } else if (tmp73) {
          let obj5 = { type: "literal", value: tmp73 };
          let arr6 = items1.push(obj5);
        }
      }
      return items1;
    } else {
      return items;
    }
  } else if ("unit" === style) {
    ({ unit, unitDisplay } = currencyDisplay);
    if (numbers.units.simple[unit]) {
      const roundedNumber3 = magnitude.roundedNumber;
      let str30 = selectPlural(arg2, roundedNumber3.times(__exportStarResult1.default.pow(10, exponent)).toNumber(), numbers.units.simple[unit][unitDisplay]);
      const _default2 = __exportStarResult1.default;
      const timesResult1 = roundedNumber3.times(__exportStarResult1.default.pow(10, exponent));
    } else {
      const parts2 = unit.split("-per-");
      [tmp54, tmp55] = parts2;
      const roundedNumber2 = magnitude.roundedNumber;
      const tmp59 = selectPlural(arg2, roundedNumber2.times(__exportStarResult1.default.pow(10, exponent)).toNumber(), numbers.units.simple[tmp54][unitDisplay]);
      if (numbers.units.simple[tmp55].perUnit[unitDisplay]) {
        str30 = str24.replace("{0}", tmp59);
      } else {
        const str25 = numbers.units.compound.per[unitDisplay];
        const str26 = selectPlural(arg2, 1, numbers.units.simple[tmp55][unitDisplay]);
        str30 = numbers.units.compound.per[unitDisplay].replace("{0}", tmp59).replace("{1}", str26.replace("{0}", ""));
        const str27 = numbers.units.compound.per[unitDisplay].replace("{0}", tmp59);
      }
      const _default = __exportStarResult1.default;
      const timesResult2 = roundedNumber2.times(__exportStarResult1.default.pow(10, exponent));
    }
    const items2 = [];
    const parts3 = str30.split(/(\s*\{0\}\s*)/);
    for (let num6 = 0; num6 < parts3.length; num6 = num6 + 1) {
      let tmp63 = parts3[num6];
      let obj8 = /^(\s*)\{0\}(\s*)$/;
      let match = obj8.exec(tmp63);
      if (match) {
        if (match[1]) {
          let obj6 = { type: "literal", value: match[1] };
          let arr7 = items2.push(obj6);
        }
        let push3 = items2.push;
        let applyResult2 = push3.apply(items2, items);
        if (match[2]) {
          let obj7 = { type: "literal", value: match[2] };
          let arr8 = items2.push(obj7);
        }
      } else if (tmp63) {
        obj8 = { type: "unit", value: tmp63 };
        let arr9 = items2.push(obj8);
      }
    }
    return items2;
  } else {
    return items;
  }
  const str13 = str10.replace(regex, "{0}");
  const tmp2 = "compact" === notation && magnitude.magnitude;
};
