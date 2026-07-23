// Module ID: 3517
// Function ID: 27058
// Name: parseNumericPattern
// Dependencies: [3388, 3518]

// Module 3517 (parseNumericPattern)
const require = arg1;
const dependencyMap = arg6;
function parseNumericPattern(month, str) {
  const match = str.match(month);
  let tmp2 = null;
  if (match) {
    const obj = {};
    const _parseInt = parseInt;
    obj.value = parseInt(match[0], 10);
    obj.rest = str.slice(match[0].length);
    tmp2 = obj;
  }
  return tmp2;
}
arg5.dayPeriodEnumToHours = function dayPeriodEnumToHours(arg0) {
  if ("morning" === arg0) {
    return 4;
  } else if ("evening" === arg0) {
    return 17;
  } else {
    if ("pm" !== arg0) {
      if ("noon" !== arg0) {
        if ("afternoon" !== arg0) {
          return 0;
        }
      }
    }
    return 12;
  }
};
arg5.isLeapYearIndex = function isLeapYearIndex(arg0) {
  let tmp = arg0 % 400 === 0;
  if (!tmp) {
    let tmp2 = arg0 % 4 === 0;
    if (tmp2) {
      tmp2 = arg0 % 100 !== 0;
    }
    tmp = tmp2;
  }
  return tmp;
};
arg5.mapValue = function mapValue(value, valueCallback) {
  if (value) {
    const obj = { value: valueCallback(value.value), rest: value.rest };
    return obj;
  } else {
    return value;
  }
};
arg5.normalizeTwoDigitYear = function normalizeTwoDigitYear(year, arg1) {
  let num = year;
  let diff = arg1;
  if (arg1 <= 0) {
    diff = 1 - arg1;
  }
  if (diff <= 50) {
    if (!num) {
      num = 100;
    }
    let diff1 = num;
  } else {
    const sum = diff + 50;
    const _Math = Math;
    let num4 = 0;
    const sum1 = num + 100 * Math.floor(sum / 100);
    if (num >= sum % 100) {
      num4 = 100;
    }
    diff1 = sum1 - num4;
  }
  let diff2 = diff1;
  if (arg1 <= 0) {
    diff2 = 1 - diff1;
  }
  return diff2;
};
arg5.parseAnyDigitsSigned = function parseAnyDigitsSigned(arg0) {
  return parseNumericPattern(require(3518).numericPatterns.anyDigitsSigned, arg0);
};
arg5.parseNDigits = function parseNDigits(length, arg1) {
  if (1 === length) {
    return parseNumericPattern(require(3518).numericPatterns.singleDigit, arg1);
  } else if (2 === length) {
    return parseNumericPattern(require(3518).numericPatterns.twoDigits, arg1);
  } else if (3 === length) {
    return parseNumericPattern(require(3518).numericPatterns.threeDigits, arg1);
  } else if (4 === length) {
    return parseNumericPattern(require(3518).numericPatterns.fourDigits, arg1);
  } else {
    const _RegExp = RegExp;
    const regExp = new RegExp("^\\d{1," + length + "}");
    return parseNumericPattern(regExp, arg1);
  }
};
arg5.parseNDigitsSigned = function parseNDigitsSigned(length, arg1) {
  if (1 === length) {
    return parseNumericPattern(require(3518).numericPatterns.singleDigitSigned, arg1);
  } else if (2 === length) {
    return parseNumericPattern(require(3518).numericPatterns.twoDigitsSigned, arg1);
  } else if (3 === length) {
    return parseNumericPattern(require(3518).numericPatterns.threeDigitsSigned, arg1);
  } else if (4 === length) {
    return parseNumericPattern(require(3518).numericPatterns.fourDigitsSigned, arg1);
  } else {
    const _RegExp = RegExp;
    const regExp = new RegExp("^-?\\d{1," + length + "}");
    return parseNumericPattern(regExp, arg1);
  }
};
arg5.parseNumericPattern = parseNumericPattern;
arg5.parseTimezonePattern = function parseTimezonePattern(basic, str) {
  const match = str.match(basic);
  if (match) {
    if ("Z" === match[0]) {
      let obj = { value: 0, rest: str.slice(1) };
      return obj;
    } else {
      let num2 = -1;
      if ("+" === match[1]) {
        num2 = 1;
      }
      let num4 = 0;
      if (match[2]) {
        const _parseInt = parseInt;
        num4 = parseInt(match[2], 10);
      }
      let num7 = 0;
      if (match[3]) {
        const _parseInt2 = parseInt;
        num7 = parseInt(match[3], 10);
      }
      let num10 = 0;
      if (match[5]) {
        const _parseInt3 = parseInt;
        num10 = parseInt(match[5], 10);
      }
      obj = {};
      const result = num4 * require(3388) /* keys */.millisecondsInHour;
      const sum = result + num7 * require(3388) /* keys */.millisecondsInMinute;
      obj.value = num2 * (sum + num10 * require(3388) /* keys */.millisecondsInSecond);
      obj.rest = str.slice(match[0].length);
      return obj;
    }
  } else {
    return null;
  }
};
