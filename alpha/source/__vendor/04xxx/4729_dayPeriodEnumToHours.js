// Module ID: 4729
// Function ID: 4730
// Name: dayPeriodEnumToHours
// Dependencies: [4600, 4730]
// Exports: dayPeriodEnumToHours, isLeapYearIndex, mapValue, normalizeTwoDigitYear, parseAnyDigitsSigned, parseNDigits, parseNDigitsSigned, parseNumericPattern, parseTimezonePattern

// Module 4729 (dayPeriodEnumToHours)
import daysInWeek from "daysInWeek" /* 4600 */;
import numericPatterns from "numericPatterns" /* 4730 */;


export function dayPeriodEnumToHours(arg0) {
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
}
export function isLeapYearIndex(uTCFullYear) {
  const result = uTCFullYear % 400;
  let tmp2 = result === 0;
  if (!tmp2) {
    const result1 = uTCFullYear % 4;
    let tmp4 = result1 === 0;
    if (result1 === 0) {
      tmp4 = uTCFullYear % 100 !== 0;
    }
    tmp2 = tmp4;
  }
  return tmp2;
}
export function mapValue(value, valueCallback) {
  const tmp = value;
  if (tmp) {
    const obj = { value: valueCallback(value.value), rest: value.rest };
    return obj;
  } else {
    return value;
  }
}
export function normalizeTwoDigitYear(year, arg1) {
  let diff1;
  let diff = arg1;
  if (arg1 <= 0) {
    diff = 1 - arg1;
  }
  let num2 = year;
  if (diff <= 50) {
    if (!num2) {
      num2 = 100;
    }
    diff1 = num2;
  } else {
    const sum = diff + 50;
    const _Math = Math;
    let num4 = 0;
    const sum1 = num2 + 100 * Math.floor(sum / 100);
    if (num2 >= sum % 100) {
      num4 = 100;
    }
    diff1 = sum1 - num4;
  }
  let diff2 = diff1;
  if (arg1 <= 0) {
    diff2 = 1 - diff1;
  }
  return diff2;
}
export function parseAnyDigitsSigned(str) {
  const match = str.match(numericPatterns.numericPatterns.anyDigitsSigned);
  let tmp2 = null;
  if (match) {
    const _parseInt = parseInt;
    tmp2 = { value: parseInt(match[0], 10), rest: str.slice(match[0].length) };
    const obj = { value: parseInt(match[0], 10), rest: str.slice(match[0].length) };
  }
  return tmp2;
}
export function parseNDigits(length, str) {
  if (1 === length) {
    const match = str.match(numericPatterns.numericPatterns.singleDigit);
    let tmp24 = null;
    if (match) {
      const _parseInt5 = parseInt;
      tmp24 = { value: parseInt(match[0], 10), rest: str.slice(match[0].length) };
      const obj2 = { value: parseInt(match[0], 10), rest: str.slice(match[0].length) };
    }
    return tmp24;
  } else if (2 === length) {
    const match1 = str.match(numericPatterns.numericPatterns.twoDigits);
    let tmp19 = null;
    if (match1) {
      const _parseInt4 = parseInt;
      tmp19 = { value: parseInt(match1[0], 10), rest: str.slice(match1[0].length) };
      const obj3 = { value: parseInt(match1[0], 10), rest: str.slice(match1[0].length) };
    }
    return tmp19;
  } else if (3 === length) {
    const match2 = str.match(numericPatterns.numericPatterns.threeDigits);
    let tmp14 = null;
    if (match2) {
      const _parseInt3 = parseInt;
      tmp14 = { value: parseInt(match2[0], 10), rest: str.slice(match2[0].length) };
      const obj4 = { value: parseInt(match2[0], 10), rest: str.slice(match2[0].length) };
    }
    return tmp14;
  } else if (4 === length) {
    const match3 = str.match(numericPatterns.numericPatterns.fourDigits);
    let tmp9 = null;
    if (match3) {
      const _parseInt2 = parseInt;
      tmp9 = { value: parseInt(match3[0], 10), rest: str.slice(match3[0].length) };
      const obj5 = { value: parseInt(match3[0], 10), rest: str.slice(match3[0].length) };
    }
    return tmp9;
  } else {
    const _RegExp = RegExp;
    const self = this;
    const self2 = this;
    const regExp = new RegExp("^\\d{1," + length + "}");
    const match4 = str.match(regExp);
    let tmp5 = null;
    if (match4) {
      const _parseInt = parseInt;
      tmp5 = { value: parseInt(match4[0], 10), rest: str.slice(match4[0].length) };
      const obj = { value: parseInt(match4[0], 10), rest: str.slice(match4[0].length) };
    }
    return tmp5;
  }
}
export function parseNDigitsSigned(length, str) {
  if (1 === length) {
    const match = str.match(numericPatterns.numericPatterns.singleDigitSigned);
    let tmp24 = null;
    if (match) {
      const _parseInt5 = parseInt;
      tmp24 = { value: parseInt(match[0], 10), rest: str.slice(match[0].length) };
      const obj2 = { value: parseInt(match[0], 10), rest: str.slice(match[0].length) };
    }
    return tmp24;
  } else if (2 === length) {
    const match1 = str.match(numericPatterns.numericPatterns.twoDigitsSigned);
    let tmp19 = null;
    if (match1) {
      const _parseInt4 = parseInt;
      tmp19 = { value: parseInt(match1[0], 10), rest: str.slice(match1[0].length) };
      const obj3 = { value: parseInt(match1[0], 10), rest: str.slice(match1[0].length) };
    }
    return tmp19;
  } else if (3 === length) {
    const match2 = str.match(numericPatterns.numericPatterns.threeDigitsSigned);
    let tmp14 = null;
    if (match2) {
      const _parseInt3 = parseInt;
      tmp14 = { value: parseInt(match2[0], 10), rest: str.slice(match2[0].length) };
      const obj4 = { value: parseInt(match2[0], 10), rest: str.slice(match2[0].length) };
    }
    return tmp14;
  } else if (4 === length) {
    const match3 = str.match(numericPatterns.numericPatterns.fourDigitsSigned);
    let tmp9 = null;
    if (match3) {
      const _parseInt2 = parseInt;
      tmp9 = { value: parseInt(match3[0], 10), rest: str.slice(match3[0].length) };
      const obj5 = { value: parseInt(match3[0], 10), rest: str.slice(match3[0].length) };
    }
    return tmp9;
  } else {
    const _RegExp = RegExp;
    const self = this;
    const self2 = this;
    const regExp = new RegExp("^-?\\d{1," + length + "}");
    const match4 = str.match(regExp);
    let tmp5 = null;
    if (match4) {
      const _parseInt = parseInt;
      tmp5 = { value: parseInt(match4[0], 10), rest: str.slice(match4[0].length) };
      const obj = { value: parseInt(match4[0], 10), rest: str.slice(match4[0].length) };
    }
    return tmp5;
  }
}
export function parseNumericPattern(month, str) {
  const match = str.match(month);
  let tmp2 = null;
  if (match) {
    const _parseInt = parseInt;
    tmp2 = { value: parseInt(match[0], 10), rest: str.slice(match[0].length) };
    const obj = { value: parseInt(match[0], 10), rest: str.slice(match[0].length) };
  }
  return tmp2;
}
export function parseTimezonePattern(basic, str) {
  let sum;
  const match = str.match(basic);
  if (match) {
    if ("Z" === match[0]) {
      const obj2 = { value: 0, rest: str.slice(1) };
      return obj2;
    } else {
      let num = -1;
      if ("+" === match[1]) {
        num = 1;
      }
      let num2 = 0;
      if (match[2]) {
        const _parseInt = parseInt;
        num2 = parseInt(match[2], 10);
      }
      let num4 = 0;
      if (match[3]) {
        const _parseInt2 = parseInt;
        num4 = parseInt(match[3], 10);
      }
      let num6 = 0;
      if (match[5]) {
        const _parseInt3 = parseInt;
        num6 = parseInt(match[5], 10);
      }
      const obj = { value: num * (sum + num6 * daysInWeek.millisecondsInSecond), rest: str.slice(match[0].length) };
      const result = num2 * daysInWeek.millisecondsInHour;
      sum = result + num4 * daysInWeek.millisecondsInMinute;
      return obj;
    }
  } else {
    return null;
  }
}
