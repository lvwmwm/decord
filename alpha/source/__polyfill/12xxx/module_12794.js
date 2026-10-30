// Module ID: 12794
// Function ID: 12795
// Dependencies: [12795]

// Module 12794
import _mod12795 from "module_12795" /* 12795 */;

function consumeEscaped(arr, sum) {
  sum = sum + 2;
  const diff = sum - 1;
  let num = 0;
  const isHexDigit = _mod12795.isHexDigit;
  _mod12795;
  if (diff < arr.length) {
    num = arr.charCodeAt(diff);
  }
  let sum3 = sum;
  if (isHexDigit(num)) {
    const _Math = Math;
    const bound = Math.min(arr.length, sum + 5);
    let tmp9 = sum;
    if (sum < bound) {
      let num3 = 0;
      const isHexDigit3 = tmp2(12795).isHexDigit;
      _mod12795;
      if (sum < arr.length) {
        num3 = arr.charCodeAt(sum);
      }
      let tmp10 = sum;
      tmp9 = sum;
      if (isHexDigit3(num3)) {
        const sum1 = tmp10 + 1;
        tmp9 = sum1;
        while (sum1 < bound) {
          let tmp14 = _mod12795;
          let num4 = 0;
          let isHexDigit2 = tmp14.isHexDigit;
          if (sum1 < arr.length) {
            num4 = arr.charCodeAt(sum1);
          }
          tmp10 = sum1;
          tmp9 = sum1;
          if (!isHexDigit2(num4)) {
            break;
          }
        }
      }
    }
    let num5 = 0;
    if (tmp9 < arr.length) {
      num5 = arr.charCodeAt(tmp9);
    }
    sum3 = tmp9;
    const obj = _mod12795;
    if (obj.isWhiteSpace(num5)) {
      let num7 = 1;
      if (13 === num5) {
        const sum2 = tmp9 + 1;
        let num8 = 0;
        if (sum2 < arr.length) {
          num8 = arr.charCodeAt(sum2);
        }
        num7 = 1;
        if (10 === num8) {
          num7 = 2;
        }
      }
      sum3 = tmp9 + num7;
    }
  }
  return sum3;
}
let obj = {
  consumeEscaped,
  consumeName(_StringResult, sum) {
    let tmp2 = sum;
    if (sum < _StringResult.length) {
      while (true) {
        let charCodeAtResult = _StringResult.charCodeAt(sum);
        let tmp4 = require;
        let obj = _mod12795;
        let diff = sum;
        if (obj.isName(charCodeAtResult)) {
          sum = diff + 1;
          tmp2 = sum;
          if (sum >= _StringResult.length) {
            break;
          }
        } else {
          let tmp4Result = tmp4(12795);
          let sum1 = sum + 1;
          let num = 0;
          let isValidEscape = tmp4Result.isValidEscape;
          if (sum1 < _StringResult.length) {
            num = _StringResult.charCodeAt(sum1);
          }
          tmp2 = sum;
          if (!isValidEscape(charCodeAtResult, num)) {
            break;
          } else {
            diff = consumeEscaped(_StringResult, sum) - 1;
          }
        }
        break;
      }
    }
    return tmp2;
  },
  consumeNumber(str, sum) {
    let charCodeAtResult = str.charCodeAt(sum);
    let tmp3 = sum;
    const tmp2 = 43 !== charCodeAtResult && 45 !== charCodeAtResult;
    if (!tmp2) {
      sum = sum + 1;
      charCodeAtResult = str.charCodeAt(sum);
      tmp3 = sum;
    }
    let tmp7 = tmp3;
    const obj = _mod12795;
    if (obj.isDigit(charCodeAtResult)) {
      const sum1 = tmp3 + 1;
      let tmp9 = sum1;
      if (sum1 < str.length) {
        let tmp10 = sum1;
        tmp9 = sum1;
        const tmp5Result = _mod12795;
        if (tmp5Result.isDigit(str.charCodeAt(sum1))) {
          const sum2 = tmp10 + 1;
          tmp9 = sum2;
          while (sum2 < str.length) {
            let obj3 = _mod12795;
            tmp10 = sum2;
            tmp9 = sum2;
            if (!obj3.isDigit(str.charCodeAt(sum2))) {
              break;
            }
          }
        }
      }
      charCodeAtResult = str.charCodeAt(tmp9);
      tmp7 = tmp9;
    }
    let isDigitResult = 46 === charCodeAtResult;
    if (isDigitResult) {
      const tmp5Result3 = _mod12795;
      isDigitResult = tmp5Result3.isDigit(str.charCodeAt(tmp7 + 1));
    }
    let tmp15 = tmp7;
    if (isDigitResult) {
      const sum3 = tmp7 + 2;
      str.charCodeAt(sum3);
      let tmp18 = sum3;
      if (sum3 < str.length) {
        let tmp21 = sum3;
        tmp18 = sum3;
        const obj5 = _mod12795;
        if (obj5.isDigit(str.charCodeAt(sum3))) {
          const sum4 = tmp21 + 1;
          tmp18 = sum4;
          while (sum4 < str.length) {
            let obj6 = _mod12795;
            tmp21 = sum4;
            tmp18 = sum4;
            if (!obj6.isDigit(str.charCodeAt(sum4))) {
              break;
            }
          }
        }
      }
      tmp15 = tmp18;
    }
    const charCodeAtResult2 = str.charCodeAt(tmp15);
    let tmp28 = charCodeAtResult2;
    const obj7 = _mod12795;
    if (obj7.isUppercaseLetter(charCodeAtResult2)) {
      tmp28 = charCodeAtResult2 | 32;
    }
    let tmp29 = tmp15;
    if (tmp28 === 101) {
      let charCodeAtResult3 = str.charCodeAt(tmp15 + 1);
      let num7 = 0;
      const tmp30 = 45 !== charCodeAtResult3 && 43 !== charCodeAtResult3;
      if (!tmp30) {
        charCodeAtResult3 = str.charCodeAt(tmp15 + 2);
        num7 = 1;
      }
      tmp29 = tmp15;
      const tmp5Result4 = _mod12795;
      if (tmp5Result4.isDigit(charCodeAtResult3)) {
        const sum5 = tmp15 + 1 + num7 + 1;
        let tmp33 = sum5;
        if (sum5 < str.length) {
          let tmp34 = sum5;
          tmp33 = sum5;
          const tmp26Result = _mod12795;
          if (tmp26Result.isDigit(str.charCodeAt(sum5))) {
            const sum6 = tmp34 + 1;
            tmp33 = sum6;
            while (sum6 < str.length) {
              let obj10 = _mod12795;
              tmp34 = sum6;
              tmp33 = sum6;
              if (!obj10.isDigit(str.charCodeAt(sum6))) {
                break;
              }
            }
          }
        }
        tmp29 = tmp33;
      }
    }
    return tmp29;
  },
  consumeBadUrlRemnants(arr2, sum) {
    let sum1 = sum;
    let sum2 = sum;
    if (sum < arr2.length) {
      const charCodeAtResult = arr2.charCodeAt(sum1);
      while (41 !== charCodeAtResult) {
        let tmp7 = _mod12795;
        sum = sum1 + 1;
        let num = 0;
        let isValidEscape = tmp7.isValidEscape;
        if (sum < arr2.length) {
          num = arr2.charCodeAt(sum);
        }
        let tmp9 = sum1;
        if (isValidEscape(charCodeAtResult, num)) {
          tmp9 = consumeEscaped(arr2, sum1);
        }
        sum1 = tmp9 + 1;
        sum2 = sum1;
      }
      sum2 = sum1 + 1;
    }
    return sum2;
  },
  cmpChar(source, tokenStart, c8) {
    const charCodeAtResult = source.charCodeAt(tokenStart);
    let tmp2 = charCodeAtResult;
    const obj = _mod12795;
    if (obj.isUppercaseLetter(charCodeAtResult)) {
      tmp2 = charCodeAtResult | 32;
    }
    return tmp2 === c8;
  },
  cmpStr(source, tokenStart, length, arr2) {
    if (length - tokenStart !== arr2.length) {
      return false;
    } else {
      if (tokenStart >= 0) {
        if (length <= source.length) {
          let sum = tokenStart;
          if (tokenStart < length) {
            while (true) {
              let charCodeAtResult = source.charCodeAt(sum);
              let charCodeAtResult1 = arr2.charCodeAt(sum - tokenStart);
              let obj = _mod12795;
              let tmp8 = charCodeAtResult;
              if (obj.isUppercaseLetter(charCodeAtResult)) {
                tmp8 = charCodeAtResult | 32;
              }
              if (tmp8 !== charCodeAtResult1) {
                break;
              } else {
                sum = sum + 1;
              }
            }
            return false;
          }
          return true;
        }
      }
      return false;
    }
  },
  getNewlineLength(arr, arg1, charCodeAtResult) {
    let num = 1;
    if (13 === charCodeAtResult) {
      const sum = arg1 + 1;
      let num2 = 0;
      if (sum < arr.length) {
        num2 = arr.charCodeAt(sum);
      }
      num = 1;
      if (10 === num2) {
        num = 2;
      }
    }
    return num;
  },
  findWhiteSpaceStart(source, sum) {
    let tmp = sum;
    if (sum >= 0) {
      let tmp5 = sum;
      tmp = sum;
      const obj = _mod12795;
      if (obj.isWhiteSpace(source.charCodeAt(sum))) {
        const diff = tmp5 - 1;
        tmp = diff;
        while (diff >= 0) {
          let obj2 = _mod12795;
          tmp5 = diff;
          tmp = diff;
          if (!obj2.isWhiteSpace(source.charCodeAt(diff))) {
            break;
          }
        }
      }
    }
    return tmp + 1;
  },
  findWhiteSpaceEnd(arr, sum) {
    let tmp = sum;
    if (sum < arr.length) {
      let tmp4 = sum;
      tmp = sum;
      const obj = _mod12795;
      if (obj.isWhiteSpace(arr.charCodeAt(sum))) {
        sum = tmp4 + 1;
        tmp = sum;
        while (sum < arr.length) {
          let obj2 = _mod12795;
          tmp4 = sum;
          tmp = sum;
          if (!obj2.isWhiteSpace(arr.charCodeAt(sum))) {
            break;
          }
        }
      }
    }
    return tmp;
  }
};

export default obj;
