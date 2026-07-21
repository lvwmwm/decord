// Module ID: 5616
// Function ID: 47850
// Name: add
// Dependencies: []

// Module 5616 (add)
(arg0) => {
  function add(s, s2) {
    let tmp17;
    let tmp27;
    let constructor = s.constructor;
    const precision = constructor.precision;
    if (s.s) {
      if (s2.s) {
        const d = s.d;
        const d1 = s2.d;
        let e = s.e;
        const e2 = s2.e;
        const substr = d.slice();
        const diff = e - e2;
        let tmp8 = e2;
        if (diff) {
          if (diff < 0) {
            let tmp9 = -diff;
            let length = d1.length;
            let arr4 = substr;
            e = e2;
          } else {
            length = substr.length;
            arr4 = d1;
            tmp9 = diff;
          }
          const _Math = Math;
          const rounded = Math.ceil(precision / 7);
          if (rounded > length) {
            let sum = rounded + 1;
          } else {
            sum = length + 1;
          }
          if (tmp9 > sum) {
            arr4.length = 1;
            tmp9 = sum;
          }
          const reversed = arr4.reverse();
          let diff1 = tmp14 - 1;
          if (+tmp9) {
            do {
              let arr = arr4.push(0);
              tmp17 = +diff1;
              diff1 = tmp17 - 1;
            } while (tmp17);
          }
          const reversed1 = arr4.reverse();
          tmp8 = e;
        }
        let length3 = d1.length;
        let arr5 = substr;
        let tmp19 = d1;
        if (substr.length - length3 < 0) {
          length3 = length2;
          arr5 = d1;
          tmp19 = substr;
        }
        let num7 = 0;
        let num8 = 0;
        while (length3) {
          length3 = length3 - 1;
          let sum1 = arr5[length3] + tmp19[length3] + num7;
          arr5[length3] = sum1;
          let tmp21 = closure_9;
          num7 = sum1 / closure_9 | 0;
          let tmp22 = closure_9;
          arr5[length3] = arr5[length3] % closure_9;
          num8 = num7;
        }
        let sum2 = tmp8;
        if (num8) {
          arr5.unshift(num8);
          sum2 = tmp8 + 1;
        }
        let diff2 = arr5.length - 1;
        if (0 == arr5[diff2]) {
          do {
            let arr1 = arr5.pop();
            diff2 = diff2 - 1;
            tmp27 = arr5[diff2];
          } while (0 == tmp27);
        }
        s2.d = arr5;
        s2.e = sum2;
        if (closure_2) {
          round(s2, precision);
        }
        return s2;
      }
    }
    constructor = s2;
    if (!s2.s) {
      const prototype = constructor.prototype;
      constructor = new constructor(s);
    }
    if (closure_2) {
      round(constructor, precision);
    }
    return constructor;
  }
  function checkInt32(arg0, arg1, arg2) {
    throw Error(closure_4 + arg0);
  }
  function digitsToString(arg0) {
    let result1;
    const diff = arg0.length - 1;
    const first = arg0[0];
    if (diff > 0) {
      let text = `${tmp2}`;
      let num2 = 1;
      let tmp5 = text;
      let num3 = 1;
      if (1 < diff) {
        do {
          let text1 = `${arg0[num2]}`;
          let diff1 = 7 - `${arg0[num2]}`.length;
          let text2 = text;
          if (diff1) {
            let tmp9 = closure_19;
            text2 = `${tmp2}${closure_19(tmp7)}`;
          }
          text = text2 + text1;
          num2 = num2 + 1;
          tmp5 = text;
          num3 = num2;
        } while (num2 < diff);
      }
      const diff2 = 7 - "" + tmp10.length;
      let str = tmp5;
      let tmp3 = tmp10;
      if (diff2) {
        str = tmp5 + getZeroString(diff2);
        tmp3 = tmp10;
      }
    } else {
      str = "";
      tmp3 = first;
      if (0 === first) {
        return "0";
      }
    }
    let tmp13 = tmp3;
    let tmp14 = tmp3;
    if (tmp3 % 10 === 0) {
      do {
        let result = tmp13 / 10;
        tmp13 = result;
        tmp14 = result;
        result1 = result % 10;
      } while (result1 === 0);
    }
    return str + tmp14;
  }
  function exp(s) {
    let gteResult;
    let substr;
    let substr1;
    let tmp31;
    let tmp38;
    let constructor = s.constructor;
    const precision = constructor.precision;
    if (getBase10Exponent(s) > 16) {
      const _Error = Error;
      throw Error(closure_5 + getBase10Exponent(s));
    } else if (s.s) {
      let tmp7;
      if (null == undefined) {
        let closure_2 = false;
        tmp7 = precision;
      }
      const prototype2 = constructor.prototype;
      constructor = new constructor(0.03125);
      let obj2 = s;
      let num5 = 0;
      let tmp12 = s;
      let num6 = 0;
      if (absResult.gte(0.1)) {
        do {
          let timesResult = obj2.times(constructor);
          num5 = num5 + 5;
          let absResult1 = timesResult.abs();
          obj2 = timesResult;
          tmp12 = timesResult;
          num6 = num5;
          gteResult = absResult1.gte(0.1);
        } while (gteResult);
      }
      const _Math = Math;
      const _Math2 = Math;
      const sum = tmp7 + (Math.log(pow(2, num6)) / Math.LN10 * 2 + 5 | 0);
      const prototype3 = constructor.prototype;
      const constructor1 = new constructor(cloneResult);
      let obj5 = constructor1;
      constructor.precision = sum;
      let obj6 = constructor1;
      let obj7 = constructor1;
      let num8 = 0;
      do {
        let tmp21 = closure_22;
        let timesResult1 = obj6.times(tmp12);
        let tmp23 = closure_22(timesResult1, sum);
        let sum1 = num8 + 1;
        let timesResult2 = obj5.times(sum1);
        let tmp26 = closure_15;
        let tmp27 = closure_12;
        let plusResult = obj7.plus(closure_12(timesResult1, timesResult2, sum));
        let arr = closure_15(plusResult.d);
        substr = arr.slice(0, sum);
        let arr2 = closure_15(obj7.d);
        tmp31 = obj7;
        obj5 = timesResult2;
        obj6 = timesResult1;
        obj7 = plusResult;
        num8 = sum1;
        substr1 = arr2.slice(0, sum);
      } while (substr !== substr1);
      let diff = tmp32 - 1;
      let obj8 = tmp31;
      let tmp34 = tmp31;
      if (+num6) {
        do {
          let tmp35 = closure_22;
          let timesResult3 = obj8.times(obj8);
          let tmp37 = closure_22(timesResult3, sum);
          tmp38 = +diff;
          diff = tmp38 - 1;
          obj8 = timesResult3;
          tmp34 = timesResult3;
        } while (tmp38);
      }
      constructor.precision = precision;
      if (null == undefined) {
        closure_2 = true;
        round(tmp34, precision);
      }
      return tmp34;
    } else {
      const prototype = constructor.prototype;
      const constructor2 = new constructor(cloneResult);
      return constructor2;
    }
  }
  function getBase10Exponent(arg0) {
    const result = 7 * arg0.e;
    let first = arg0.d[0];
    let sum = result;
    let tmp4 = result;
    if (first >= 10) {
      do {
        sum = sum + 1;
        first = first / 10;
        tmp4 = sum;
      } while (first >= 10);
    }
    return tmp4;
  }
  function getLn10(LN10, arg1, precision) {
    LN10 = LN10.LN10;
    if (arg1 > LN10.sd()) {
      let closure_2 = true;
      if (precision) {
        LN10.precision = precision;
      }
      const _Error = Error;
      throw Error("[DecimalError] LN10 precision limit exceeded");
    } else {
      const prototype = LN10.prototype;
      const tmp4 = new LN10(LN10.LN10);
      round(tmp4, arg1);
      return tmp4;
    }
  }
  function getZeroString(arg0) {
    let tmp3;
    let diff = tmp - 1;
    let str = "";
    let str2 = "";
    if (+arg0) {
      do {
        str = `0`;
        tmp3 = +diff;
        diff = tmp3 - 1;
        str2 = str;
      } while (tmp3);
    }
    return str2;
  }
  function ln(s) {
    let constructor = s.constructor;
    const precision = constructor.precision;
    if (s.s < 1) {
      let str5 = "-Infinity";
      if (s.s) {
        str5 = "NaN";
      }
      throw Error(closure_3 + str5);
    } else if (s.eq(cloneResult)) {
      const prototype3 = constructor.prototype;
      constructor = new constructor(0);
      return constructor;
    } else {
      let tmp3 = arg1;
      if (null == arg1) {
        let closure_2 = false;
        tmp3 = precision;
      }
      if (s.eq(10)) {
        if (null == arg1) {
          closure_2 = true;
        }
        return getLn10(constructor, tmp3);
      } else {
        const sum = tmp3 + 10;
        constructor.precision = sum;
        const str = digitsToString(tmp);
        const charAtResult = str.charAt(0);
        const tmp8 = getBase10Exponent(s);
        const _Math = Math;
        if (Math.abs(tmp8) < 1500000000000000) {
          if (charAtResult >= 7) {
            let arr = str;
            let tmp12 = charAtResult;
            let tmp13 = s;
            if (1 == charAtResult) {
              let num5 = 1;
              let obj = s;
              arr = str;
              tmp12 = charAtResult;
              tmp13 = s;
            }
            let tmp21 = getBase10Exponent(tmp13);
            if (tmp12 > 1) {
              const prototype2 = constructor.prototype;
              let constructor1 = new constructor("0." + arr);
              const sum1 = tmp21 + 1;
            } else {
              const text = `${tmp12}.`;
              const prototype = constructor.prototype;
              constructor1 = new constructor(`${tmp12}.` + arr.slice(1));
            }
            const obj3 = callback(constructor1.minus(cloneResult), constructor1.plus(cloneResult), sum);
            tmp21 = round(obj3.times(obj3), sum);
            arr = obj3;
            const minusResult = constructor1.minus(cloneResult);
          } else {
            num5 = 1;
            obj = s;
          }
          while (true) {
            let tmp14 = digitsToString;
            let timesResult = obj.times(s);
            let str2 = digitsToString(timesResult.d);
            let charAtResult1 = str2.charAt(0);
            let sum2 = num5 + 1;
            if (charAtResult1 < 7) {
              num5 = sum2;
              obj = timesResult;
            }
            arr = str2;
            tmp12 = charAtResult1;
            let tmp18 = sum2;
            tmp13 = timesResult;
            if (1 != charAtResult1) {
              break;
            } else {
              let num9 = 3;
              num5 = sum2;
              obj = timesResult;
              arr = str2;
              tmp12 = charAtResult1;
              let tmp19 = sum2;
              tmp13 = timesResult;
              if (str2.charAt(1) <= 3) {
                break;
              }
            }
          }
        } else {
          const obj4 = getLn10(constructor, sum + 2, precision);
          const text1 = `${tmp6}.`;
          const prototype4 = constructor.prototype;
          const constructor2 = new constructor(`${tmp6}.` + str.slice(1));
          const timesResult1 = getLn10(constructor, sum + 2, precision).times("" + tmp8);
          const plusResult = ln(constructor2, sum - 10).plus(timesResult1);
          constructor.precision = precision;
          if (null == arg1) {
            closure_2 = true;
            round(plusResult, precision);
          }
          return plusResult;
        }
      }
    }
  }
  function parseDecimal(d, arr) {
    let charCodeAtResult;
    let charCodeAtResult1;
    let sum2;
    let tmp26;
    const index = arr.indexOf(".");
    let replaced = arr;
    if (index > -1) {
      replaced = arr.replace(".", "");
    }
    const searchResult = replaced.search(/e/i);
    if (searchResult > 0) {
      let tmp3 = index;
      if (index < 0) {
        tmp3 = searchResult;
      }
      let length = tmp3 + +replaced.slice(searchResult + 1);
      let substr = replaced.substring(0, searchResult);
    } else {
      substr = replaced;
      length = index;
      if (index < 0) {
        length = replaced.length;
        substr = replaced;
      }
    }
    let num2 = 0;
    let num3 = 0;
    if (48 === substr.charCodeAt(0)) {
      do {
        let sum = num2 + 1;
        num2 = sum;
        num3 = sum;
        charCodeAtResult = substr.charCodeAt(sum);
      } while (48 === charCodeAtResult);
    }
    let tmp6 = length2;
    let tmp7 = length2;
    if (48 === substr.charCodeAt(substr.length - 1)) {
      do {
        let diff = tmp6 - 1;
        tmp6 = diff;
        tmp7 = diff;
        charCodeAtResult1 = substr.charCodeAt(diff - 1);
      } while (48 === charCodeAtResult1);
    }
    const substr1 = substr.slice(num3, tmp7);
    if (substr1) {
      const diff1 = tmp7 - num3;
      const diff2 = length - num3 - 1;
      d.e = floor(diff2 / 7);
      d.d = [];
      const result = (diff2 + 1) % 7;
      let sum1 = result;
      if (diff2 < 0) {
        sum1 = result + 7;
      }
      if (sum1 < diff1) {
        if (sum1) {
          d = d.d;
          d.push(+substr1.slice(0, sum1));
        }
        const diff3 = diff1 - 7;
        let tmp19 = sum1;
        let tmp20 = sum1;
        if (sum1 < diff3) {
          do {
            let d1 = d.d;
            sum2 = tmp19 + 7;
            arr = d1.push(+substr1.slice(tmp19, sum2));
            tmp19 = sum2;
            tmp20 = sum2;
          } while (sum2 < diff3);
        }
        const substr2 = substr1.slice(tmp20);
        let diff4 = 7 - substr2.length;
        let tmp16 = substr2;
      } else {
        diff4 = sum1 - diff1;
        tmp16 = substr1;
      }
      let diff5 = diff4 - 1;
      let text = tmp16;
      let tmp25 = tmp16;
      if (diff4) {
        do {
          text = `${tmp24}0`;
          tmp26 = +diff5;
          diff5 = tmp26 - 1;
          tmp25 = text;
        } while (tmp26);
      }
      const d2 = d.d;
      d2.push(+tmp25);
      if (closure_2) {
        const _Error = Error;
        throw Error(closure_5 + diff2);
      }
    } else {
      d.s = 0;
      d.e = 0;
      d.d = [0.229];
    }
    return d;
  }
  function round(d, exponent) {
    let tmp32;
    d = d.d;
    let first = d[0];
    let num = 1;
    let num2 = 1;
    while (first >= 10) {
      num = num + 1;
      first = first / 10;
      num2 = num;
    }
    const diff = exponent - num2;
    if (diff < 0) {
      let sum = diff + 7;
      let first1 = d[0];
      let sum1 = exponent;
      let num5 = num2;
      let num6 = 0;
    } else {
      const _Math = Math;
      const rounded = Math.ceil((diff + 1) / 7);
      if (rounded >= d.length) {
        return d;
      } else {
        first1 = d[rounded];
        let result = first1;
        let num4 = 1;
        num5 = 1;
        if (first1 >= 10) {
          do {
            num4 = num4 + 1;
            result = result / 10;
            num5 = num4;
          } while (result >= 10);
        }
        sum = diff % 7;
        sum1 = sum - 7 + num5;
        num6 = rounded;
      }
    }
    if (undefined === arg2) {
      if (exponent >= 1) {
        if (d[0]) {
          if (0 === sum) {
            d.length = num6;
            let diff1 = num6 - 1;
            let num15 = 1;
          } else {
            d.length = num6 + 1;
            const tmp20 = pow(10, 7 - sum);
            let num14 = 0;
            if (sum1 > 0) {
              const result1 = first1 / pow(10, num5 - sum1);
              num14 = (result1 % pow(10, sum1) | 0) * tmp20;
            }
            d[num6] = num14;
            num15 = tmp20;
            diff1 = num6;
          }
          if (undefined) {
            while (0 != diff1) {
              d[diff1] = d[diff1] + num15;
              let tmp26 = closure_9;
              if (d[diff1] == closure_9) {
                let tmp27 = +diff1;
                diff1 = tmp27 - 1;
                d[tmp27] = 0;
                num15 = 1;
                // continue
              }
            }
            const sum2 = d[0] + num15;
            d[0] = sum2;
            if (sum2 == closure_9) {
              d[0] = 1;
              d.e = d.e + 1;
            }
          }
          let diff2 = d.length - 1;
          if (0 === d[diff2]) {
            do {
              let arr = d.pop();
              diff2 = diff2 - 1;
              tmp32 = d[diff2];
            } while (0 === tmp32);
          }
          if (closure_2) {
            const _Error = Error;
            throw Error(closure_5 + getBase10Exponent(d));
          }
          return d;
        }
      }
      if (undefined) {
        d.length = 1;
        const diff3 = exponent - getBase10Exponent(d) - 1;
        d[0] = pow(10, (7 - diff3 % 7) % 7);
        d.e = floor(-diff3 / 7) || 0;
        const tmp43 = floor(-diff3 / 7) || 0;
      } else {
        d.length = 1;
        d.s = 0;
        d.e = 0;
        d[0] = 0;
      }
      return d;
    } else {
      const tmp45 = pow(10, num5 - sum1 - 1);
      let tmp17 = first1 / tmp45 % 10 | 0;
      let tmp9 = exponent < 0 || undefined !== d[num6 + 1] || first1 % tmp45;
      if (arg2 < 4) {
        if (!tmp17) {
          tmp17 = tmp9;
        }
        if (tmp17) {
          tmp9 = 0 == arg2;
          if (!tmp9) {
            let num12 = 2;
            if (d.s < 0) {
              num12 = 3;
            }
            tmp9 = arg2 == num12;
          }
          tmp17 = tmp9;
        }
        let tmp16 = tmp17;
      } else {
        tmp16 = tmp17 > 5;
        if (!tmp16) {
          let tmp10 = 5 === tmp17;
          if (tmp10) {
            let tmp11 = 4 == arg2 || tmp9;
            if (!tmp11) {
              if (6 != arg2) {
                tmp11 = tmp12;
              } else if (sum > 0) {
                let num10 = 0;
                if (sum1 > 0) {
                  num10 = first1 / pow(10, num5 - sum1);
                }
                let tmp13 = num10;
              } else {
                tmp13 = d[num6 - 1];
              }
            }
            if (!tmp11) {
              let num11 = 7;
              if (d.s < 0) {
                num11 = 8;
              }
              tmp11 = arg2 == num11;
            }
            tmp10 = tmp11;
          }
          tmp16 = tmp10;
        }
      }
    }
  }
  function subtract(s, s2) {
    let d;
    let diff3;
    let e;
    let first;
    let tmp20;
    let tmp35;
    let constructor = s.constructor;
    const precision = constructor.precision;
    if (s.s) {
      if (s2.s) {
        d = s.d;
        ({ d, e } = s2);
        let e2 = s.e;
        const substr = d.slice();
        const diff = e2 - e;
        if (diff) {
          if (diff < 0) {
            let tmp13 = -diff;
            let length3 = d.length;
            let arr3 = substr;
            e2 = e;
          } else {
            length3 = substr.length;
            arr3 = d;
            tmp13 = diff;
          }
          const _Math = Math;
          const _Math2 = Math;
          const sum = Math.max(Math.ceil(precision / 7), length3) + 2;
          if (tmp13 > sum) {
            arr3.length = 1;
            tmp13 = sum;
          }
          const reversed = arr3.reverse();
          let diff1 = tmp17 - 1;
          if (+tmp13) {
            do {
              let arr = arr3.push(0);
              tmp20 = +diff1;
              diff1 = tmp20 - 1;
            } while (tmp20);
          }
          const reversed1 = arr3.reverse();
          let tmp11 = e2;
          let num3 = tmp13;
          let tmp9 = tmp12;
        } else {
          let length2 = d.length;
          if (substr.length < length2) {
            length2 = length;
          }
          let num2 = 0;
          tmp9 = tmp8;
          if (0 < length2) {
            while (substr[num2] == d[num2]) {
              num2 = num2 + 1;
              tmp9 = tmp8;
            }
            tmp9 = substr[num2] < d[num2];
          }
          tmp11 = e;
          num3 = 0;
        }
        let arr4 = substr;
        let arr5 = d;
        if (tmp9) {
          s2.s = -s2.s;
          arr4 = d;
          arr5 = substr;
        }
        let diff2 = arr5.length - length4;
        let sum1 = length4;
        let tmp24 = length4;
        if (diff2 > 0) {
          do {
            let tmp25 = +sum1;
            sum1 = tmp25 + 1;
            arr4[tmp25] = 0;
            diff2 = diff2 - 1;
            tmp24 = sum1;
          } while (diff2 > 0);
        }
        let length5 = arr5.length;
        if (length5 > num3) {
          do {
            diff3 = length5 - 1;
            if (arr4[diff3] < arr5[diff3]) {
              let tmp27 = diff3;
              if (diff3) {
                let diff4 = diff3 - 1;
                let tmp29 = diff4;
                tmp27 = diff4;
                if (0 === arr4[diff4]) {
                  arr4[tmp29] = 9999999;
                  tmp27 = tmp29;
                  while (tmp29) {
                    let diff5 = tmp29 - 1;
                    tmp29 = diff5;
                    tmp27 = diff5;
                    if (0 !== arr4[diff5]) {
                      break;
                    }
                  }
                }
              }
              arr4[tmp27] = arr4[tmp27] - 1;
              let tmp31 = closure_9;
              arr4[diff3] = arr4[diff3] + closure_9;
              let tmp32 = tmp27;
            }
            arr4[diff3] = arr4[diff3] - arr5[diff3];
            length5 = diff3;
          } while (diff3 > num3);
        }
        let diff6 = tmp24 - 1;
        if (0 === arr4[diff6]) {
          do {
            arr = arr4.pop();
            diff6 = diff6 - 1;
            tmp35 = arr4[diff6];
          } while (0 === tmp35);
        }
        let diff7 = tmp11;
        let tmp37 = tmp11;
        if (0 === arr4[0]) {
          do {
            diff7 = diff7 - 1;
            let arr1 = arr4.shift();
            tmp37 = diff7;
            first = arr4[0];
          } while (0 === first);
        }
        if (arr4[0]) {
          s2.d = arr4;
          s2.e = tmp37;
          constructor = s2;
          if (closure_2) {
            round(s2, precision);
            constructor = s2;
          }
        } else {
          const prototype2 = constructor.prototype;
          constructor = new constructor(0);
        }
        return constructor;
      }
    }
    if (s2.s) {
      s2.s = -s2.s;
      let constructor1 = s2;
    } else {
      const prototype = constructor.prototype;
      constructor1 = new constructor(s);
    }
    if (closure_2) {
      round(constructor1, precision);
    }
    return constructor1;
  }
  function toString(d) {
    const tmp = getBase10Exponent(d);
    const arr = digitsToString(d.d);
    if (arg1) {
      if (arg2) {
        const diff = arg2 - length;
        if (diff > 0) {
          const text = `${arr.charAt(0)}.`;
          const text1 = `${arr.charAt(0)}.${arr.slice(1)}`;
          let text2 = `${arr.charAt(0)}.${arr.slice(1)}${closure_19(tmp23)}`;
        }
        let str7 = "e+";
        if (tmp < 0) {
          str7 = "e";
        }
        let sum = text2 + str7 + tmp;
      }
      text2 = arr;
      if (length > 1) {
        const text3 = `${arr.charAt(0)}.`;
        text2 = `${arr.charAt(0)}.${arr.slice(1)}`;
      }
    } else if (tmp < 0) {
      const text4 = `0.${closure_19(-tmp - 1)}${arr}`;
      let tmp20 = arg2;
      if (arg2) {
        const diff1 = arg2 - length;
        tmp20 = diff1 > 0;
        const tmp19 = diff1;
      }
      sum = text4;
      if (tmp20) {
        sum = text4 + getZeroString(tmp19);
      }
    } else if (tmp >= length) {
      const sum1 = arr + getZeroString(tmp + 1 - length);
      let tmp13 = arg2;
      if (arg2) {
        const diff2 = arg2 - tmp - 1;
        tmp13 = diff2 > 0;
        const tmp14 = diff2;
      }
      sum = sum1;
      if (tmp13) {
        sum = `${tmp12}.${closure_19(tmp14)}`;
      }
    } else {
      const sum2 = tmp + 1;
      let text6 = arr;
      if (sum2 < length) {
        const text5 = `${arr.slice(0, tmp2)}.`;
        text6 = `${arr.slice(0, tmp2)}.${arr.slice(tmp2)}`;
      }
      let tmp5 = arg2;
      let tmp6 = sum2;
      if (arg2) {
        const diff3 = arg2 - length;
        tmp5 = diff3 > 0;
        tmp6 = diff3;
      }
      sum = text6;
      if (tmp5) {
        let text7 = text6;
        if (tmp + 1 === length) {
          text7 = `${tmp3}.`;
        }
        sum = text7 + getZeroString(tmp6);
      }
    }
    let text8 = sum;
    if (d.s < 0) {
      text8 = `-${tmp8}`;
    }
    return text8;
  }
  function truncate(arg0, arg1) {
    if (arg0.length > arg1) {
      arg0.length = arg1;
      return true;
    }
  }
  function config(LN10) {
    let tmp;
    let tmp2;
    const self = this;
    if (LN10) {
      if ("object" === typeof LN10) {
        const items = ["person_gesturing_no", "throttle", 1000000000, "rounding"];
        let num = 0;
        items[4] = 0;
        items[5] = 8;
        items[6] = "toExpNeg";
        items[7] = -Infinity;
        items[8] = 0;
        items[9] = "toExpPos";
        items[10] = 0;
        items[11] = Infinity;
        if (0 < items.length) {
          while (true) {
            tmp = items[num];
            tmp2 = LN10[tmp];
            if (undefined !== tmp2) {
              let tmp3 = floor;
              if (floor(tmp2) !== tmp2) {
                break;
              } else if (tmp2 < items[num + 1]) {
                break;
              } else if (tmp2 > items[num + 2]) {
                break;
              } else {
                self[tmp] = tmp2;
              }
            }
            num = num + 3;
          }
          const _Error = Error;
          throw Error(closure_4 + tmp + ": " + tmp2);
        }
        LN10 = LN10.LN10;
        if (undefined !== LN10) {
          const _Math = Math;
          if (LN10 != Math.LN10) {
            const _Error2 = Error;
            throw Error(closure_4 + "LN10" + ": " + LN10);
          } else {
            const prototype = self.prototype;
            const _self = new self(LN10);
            self.LN10 = _self;
          }
        }
        return self;
      }
    }
    throw Error("[DecimalError] Object expected");
  }
  let closure_2 = true;
  let closure_3 = "[DecimalError] ";
  let closure_4 = "[DecimalError] Invalid argument: ";
  let closure_5 = "[DecimalError] Exponent out of range: ";
  let closure_8 = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
  let closure_9 = 10000000;
  let closure_10 = floor(1286742750677284.5);
  const obj = {};
  const fn = function() {
    const constructor = new this.constructor(this);
    if (constructor.s) {
      constructor.s = 1;
    }
    return constructor;
  };
  obj.abs = fn;
  obj.absoluteValue = fn;
  const fn2 = function(arg0) {
    const self = this;
    const constructor = new this.constructor(arg0);
    if (this.s !== constructor.s) {
      return self.s || -constructor.s;
    } else if (self.e !== constructor.e) {
      let num7 = -1;
      if (self.e > constructor.e ^ self.s < 0) {
        num7 = 1;
      }
      return num7;
    } else {
      let tmp2 = length2;
      if (self.d.length < constructor.d.length) {
        tmp2 = length;
      }
      let num2 = 0;
      if (0 < tmp2) {
        while (self.d[num2] === constructor.d[num2]) {
          num2 = num2 + 1;
        }
        let num5 = -1;
        if (self.d[num2] > constructor.d[num2] ^ self.s < 0) {
          num5 = 1;
        }
        return num5;
      }
      let num3 = 0;
      if (self.d.length !== constructor.d.length) {
        let num4 = -1;
        if (length > length2 ^ self.s < 0) {
          num4 = 1;
        }
        num3 = num4;
      }
      return num3;
    }
  };
  obj.cmp = fn2;
  obj.comparedTo = fn2;
  const fn3 = function() {
    let result2;
    const diff = this.d.length - 1;
    const result = 7 * (diff - this.e);
    let result1 = this.d[diff];
    let tmp4 = result;
    if (result1) {
      let diff1 = result;
      tmp4 = result;
      if (result1 % 10 === 0) {
        do {
          diff1 = diff1 - 1;
          result1 = result1 / 10;
          tmp4 = diff1;
          result2 = result1 % 10;
        } while (result2 === 0);
      }
    }
    let num3 = 0;
    if (tmp4 >= 0) {
      num3 = tmp4;
    }
    return num3;
  };
  obj.dp = fn3;
  obj.decimalPlaces = fn3;
  const fn4 = function(arg0) {
    const constructor = new this.constructor(arg0);
    return callback(this, constructor);
  };
  obj.div = fn4;
  obj.dividedBy = fn4;
  const fn5 = function(arg0) {
    let constructor = this.constructor;
    constructor = new constructor(arg0);
    const tmp2 = callback(this, constructor, 0, 1);
    round(tmp2, constructor.precision);
    return tmp2;
  };
  obj.idiv = fn5;
  obj.dividedToIntegerBy = fn5;
  const fn6 = function(_require1) {
    return !this.cmp(_require1);
  };
  obj.eq = fn6;
  obj.equals = fn6;
  obj.exponent = function() {
    return getBase10Exponent(this);
  };
  const fn7 = function(_require1) {
    return this.cmp(_require1) > 0;
  };
  obj.gt = fn7;
  obj.greaterThan = fn7;
  const fn8 = function(_require1) {
    return this.cmp(_require1) >= 0;
  };
  obj.gte = fn8;
  obj.greaterThanOrEqualTo = fn8;
  const fn9 = function() {
    return this.e > this.d.length - 2;
  };
  obj.isint = fn9;
  obj.isInteger = fn9;
  const fn10 = function() {
    return this.s < 0;
  };
  obj.isneg = fn10;
  obj.isNegative = fn10;
  const fn11 = function() {
    return this.s > 0;
  };
  obj.ispos = fn11;
  obj.isPositive = fn11;
  obj.isZero = function() {
    return 0 === this.s;
  };
  const fn12 = function(_require1) {
    return this.cmp(_require1) < 0;
  };
  obj.lt = fn12;
  obj.lessThan = fn12;
  const fn13 = function(_require1) {
    return this.cmp(_require1) < 1;
  };
  obj.lte = fn13;
  obj.lessThanOrEqualTo = fn13;
  const fn14 = function(arg0) {
    const self = this;
    let constructor = this.constructor;
    const precision = constructor.precision;
    const sum = precision + 5;
    if (undefined === arg0) {
      const prototype2 = constructor.prototype;
      constructor = new constructor(10);
    } else {
      const prototype = constructor.prototype;
      const constructor1 = new constructor(arg0);
      if (constructor1.s >= 1) {
        constructor = constructor1;
      }
      const _Error = Error;
      throw Error("[DecimalError] NaN");
    }
    if (self.s < 1) {
      let str2 = "-Infinity";
      if (self.s) {
        str2 = "NaN";
      }
      throw Error(closure_3 + str2);
    } else {
      if (self.eq(cloneResult)) {
        const prototype3 = constructor.prototype;
        let constructor2 = new constructor(0);
      } else {
        let closure_2 = false;
        constructor2 = callback(ln(self, sum), ln(constructor, sum), sum);
        closure_2 = true;
        round(constructor2, precision);
        const tmp14 = ln(self, sum);
      }
      return constructor2;
    }
  };
  obj.log = fn14;
  obj.logarithm = fn14;
  const fn15 = function(arg0) {
    const self = this;
    const constructor = new this.constructor(arg0);
    if (this.s == constructor.s) {
      let tmp3 = subtract(self, constructor);
    } else {
      constructor.s = -constructor.s;
      tmp3 = add(self, constructor);
    }
    return tmp3;
  };
  obj.sub = fn15;
  obj.minus = fn15;
  const fn16 = function(arg0) {
    const self = this;
    let constructor = this.constructor;
    constructor = new constructor(arg0);
    if (constructor.s) {
      if (self.s) {
        let closure_2 = false;
        closure_2 = true;
        let minusResult = self.minus(callback(self, tmp2, 0, 1).times(constructor));
        const obj = callback(self, tmp2, 0, 1);
      } else {
        const prototype = constructor.prototype;
        const constructor1 = new constructor(self);
        minusResult = constructor1;
        round(constructor1, constructor.precision);
      }
      return minusResult;
    } else {
      const _Error = Error;
      throw Error("[DecimalError] NaN");
    }
  };
  obj.mod = fn16;
  obj.modulo = fn16;
  const fn17 = function() {
    return exp(this);
  };
  obj.exp = fn17;
  obj.naturalExponential = fn17;
  const fn18 = function() {
    return ln(this);
  };
  obj.ln = fn18;
  obj.naturalLogarithm = fn18;
  const fn19 = function() {
    const constructor = new this.constructor(this);
    constructor.s = -constructor.s || 0;
    return constructor;
  };
  obj.neg = fn19;
  obj.negated = fn19;
  const fn20 = function(arg0) {
    const self = this;
    const constructor = new this.constructor(arg0);
    if (this.s == constructor.s) {
      let tmp3 = add(self, constructor);
    } else {
      constructor.s = -constructor.s;
      tmp3 = subtract(self, constructor);
    }
    return tmp3;
  };
  obj.add = fn20;
  obj.plus = fn20;
  const fn21 = function(arg0) {
    let result1;
    const self = this;
    if (undefined !== arg0) {
      if (arg0 !== arg0) {
        if (1 !== arg0) {
          if (0 !== arg0) {
            const _Error = Error;
            throw Error(closure_4 + arg0);
          }
        }
      }
    }
    const sum = getBase10Exponent(self) + 1;
    const diff = self.d.length - 1;
    const sum1 = 7 * diff + 1;
    let result = self.d[diff];
    let tmp5 = sum1;
    if (result) {
      let diff1 = sum1;
      let tmp7 = sum1;
      if (result % 10 === 0) {
        do {
          diff1 = diff1 - 1;
          result = result / 10;
          tmp7 = diff1;
          result1 = result % 10;
        } while (result1 === 0);
      }
      let first = self.d[0];
      let sum2 = tmp7;
      tmp5 = tmp7;
      if (first >= 10) {
        do {
          sum2 = sum2 + 1;
          first = first / 10;
          tmp5 = sum2;
        } while (first >= 10);
      }
    }
    let tmp11 = tmp5;
    if (arg0) {
      tmp11 = tmp5;
      if (sum > tmp5) {
        tmp11 = sum;
      }
    }
    return tmp11;
  };
  obj.sd = fn21;
  obj.precision = fn21;
  const fn22 = function() {
    const self = this;
    let constructor = this.constructor;
    if (this.s < 1) {
      if (self.s) {
        const _Error = Error;
        throw Error("[DecimalError] NaN");
      } else {
        const prototype3 = constructor.prototype;
        constructor = new constructor(0);
        return constructor;
      }
    } else {
      let num6 = getBase10Exponent(self);
      let closure_2 = false;
      const _Math2 = Math;
      const str7 = Math.sqrt(+self);
      if (0 != str7) {
        if (str7 != Infinity) {
          const prototype = constructor.prototype;
          const constructor1 = new constructor(str7.toString());
          num6 = 2;
          const sum = constructor.precision + 3;
        }
      }
      const arr = digitsToString(self.d);
      let text = arr;
      if ((arr.length + num6) % 2 === 0) {
        text = `${arr}0`;
      }
      const _Math = Math;
      const sqrtResult = Math.sqrt(text);
      let result = num6 < 0;
      if (!result) {
        result = num6 % 2;
      }
      const diff = floor((num6 + 1) / 2) - result;
      if (sqrtResult == Infinity) {
        let text1 = `1e${tmp9}`;
      } else {
        const toExponentialResult = sqrtResult.toExponential();
        text1 = toExponentialResult.slice(0, toExponentialResult.indexOf("e") + 1) + diff;
      }
      const prototype2 = constructor.prototype;
      const constructor2 = new constructor(text1);
      const tmp7 = floor((num6 + 1) / 2);
    }
  };
  obj.sqrt = fn22;
  obj.squareRoot = fn22;
  const fn23 = function(arg0) {
    let constructor;
    let d;
    let tmp12;
    let tmp24;
    const self = this;
    ({ constructor, d } = this);
    constructor = new constructor(arg0);
    d = constructor.d;
    if (this.s) {
      if (constructor.s) {
        constructor.s = constructor.s * self.s;
        const sum = self.e + constructor.e;
        let tmp4 = length;
        let tmp5 = d;
        let tmp6 = d;
        let tmp7 = length2;
        if (d.length < d.length) {
          tmp4 = length2;
          tmp7 = length;
          tmp5 = d;
          tmp6 = d;
        }
        const items = [];
        const sum1 = tmp4 + tmp7;
        let diff = tmp9 - 1;
        if (+sum1) {
          do {
            let arr = items.push(0);
            tmp12 = +diff;
            diff = tmp12 - 1;
          } while (tmp12);
        }
        let diff1 = tmp7 - 1;
        let tmp14;
        if (diff1 >= 0) {
          do {
            let sum2 = tmp4 + diff1;
            let num3 = 0;
            let num4 = 0;
            let tmp16 = sum2;
            if (sum2 > diff1) {
              do {
                let sum3 = items[sum2] + tmp6[diff1] * tmp5[sum2 - diff1 - 1] + num3;
                let tmp18 = +sum2;
                sum2 = tmp18 - 1;
                let tmp19 = closure_9;
                items[tmp18] = sum3 % closure_9 | 0;
                let tmp20 = closure_9;
                num3 = sum3 / closure_9 | 0;
                num4 = num3;
                tmp16 = sum2;
              } while (sum2 > diff1);
            }
            let tmp21 = closure_9;
            items[tmp16] = (items[tmp16] + num4) % closure_9 | 0;
            diff1 = diff1 - 1;
            tmp14 = num4;
          } while (diff1 >= 0);
        }
        let diff2 = sum1 - 1;
        if (!items[diff2]) {
          do {
            arr = items.pop();
            diff2 = diff2 - 1;
            tmp24 = items[diff2];
          } while (!tmp24);
        }
        if (tmp14) {
          let sum4 = sum + 1;
        } else {
          items.shift();
          sum4 = sum;
        }
        constructor.d = items;
        constructor.e = sum4;
        if (closure_2) {
          round(constructor, constructor.precision);
        }
        return constructor;
      }
    }
    const constructor1 = new constructor(0);
    return constructor1;
  };
  obj.mul = fn23;
  obj.times = fn23;
  const fn24 = function(arg0, arg1) {
    let sum = arg0;
    let rounding = arg1;
    let constructor = this.constructor;
    constructor = new constructor(this);
    if (undefined === arg0) {
      return constructor;
    } else {
      checkInt32(sum, 0, 1000000000);
      if (undefined === rounding) {
        rounding = constructor.rounding;
      } else {
        checkInt32(rounding, 0, 8);
      }
      constructor = round;
      sum = sum + getBase10Exponent(constructor);
      round(constructor, sum + 1, rounding);
    }
  };
  obj.todp = fn24;
  obj.toDecimalPlaces = fn24;
  obj.toExponential = function(arg0, arg1) {
    const self = this;
    let constructor = this.constructor;
    if (undefined === arg0) {
      let tmp13 = toString(self, true);
    } else {
      checkInt32(arg0, 0, 1000000000);
      if (undefined === arg1) {
        let rounding = constructor.rounding;
      } else {
        checkInt32(arg1, 0, 8);
        rounding = arg1;
      }
      const prototype = constructor.prototype;
      constructor = new constructor(self);
      round(constructor, arg0 + 1, rounding);
      tmp13 = toString(constructor, true, arg0 + 1);
    }
    return tmp13;
  };
  obj.toFixed = function(arg0, arg1) {
    const self = this;
    let constructor = this.constructor;
    if (undefined === arg0) {
      let text = toString(self);
    } else {
      checkInt32(arg0, 0, 1000000000);
      if (undefined === arg1) {
        let rounding = constructor.rounding;
      } else {
        checkInt32(arg1, 0, 8);
        rounding = arg1;
      }
      const prototype = constructor.prototype;
      constructor = new constructor(self);
      round(constructor, arg0 + getBase10Exponent(self) + 1, rounding);
      const tmp12 = toString(constructor.abs(), false, arg0 + getBase10Exponent(constructor) + 1);
      text = tmp12;
      if (self.isneg()) {
        text = tmp12;
        if (!self.isZero()) {
          text = `-${tmp12}`;
        }
      }
      const absResult = constructor.abs();
    }
    return text;
  };
  const fn25 = function() {
    let constructor = this.constructor;
    constructor = new constructor(this);
    round(constructor, getBase10Exponent(this) + 1, constructor.rounding);
    return constructor;
  };
  obj.toint = fn25;
  obj.toInteger = fn25;
  obj.toNumber = function() {
    return +this;
  };
  const fn26 = function(arg0) {
    const self = this;
    let constructor = this.constructor;
    constructor = new constructor(arg0);
    if (constructor.s) {
      const prototype2 = constructor.prototype;
      const constructor1 = new constructor(self);
      if (constructor1.s) {
        if (constructor1.eq(cloneResult)) {
          return constructor1;
        } else {
          const precision = constructor.precision;
          if (constructor.eq(cloneResult)) {
            round(constructor1, precision);
            return constructor1;
          } else {
            const e = constructor.e;
            let diff = constructor.d.length - 1;
            const s = constructor1.s;
            if (e >= diff) {
              let tmp16 = tmp;
              if (tmp < 0) {
                tmp16 = -tmp;
              }
              diff = tmp16;
              if (tmp16 <= 9007199254740991) {
                const prototype3 = constructor.prototype;
                const constructor2 = new constructor(cloneResult);
                const _Math2 = Math;
                const rounded = Math.ceil(precision / 7 + 4);
                let closure_2 = false;
                let tmp27 = constructor2;
                if (tmp16 % 2) {
                  const timesResult = constructor2.times(constructor1);
                  truncate(timesResult.d, rounded);
                  tmp27 = timesResult;
                }
                let tmp32 = floor(tmp16 / 2);
                let obj4 = tmp27;
                let obj5 = constructor1;
                let tmp33 = tmp27;
                if (0 !== tmp32) {
                  do {
                    let tmp34 = closure_25;
                    let timesResult1 = obj5.times(obj5);
                    let tmp36 = closure_25(timesResult1.d, rounded);
                    let tmp37 = obj4;
                    if (tmp32 % 2) {
                      let tmp38 = closure_25;
                      let timesResult2 = obj4.times(timesResult1);
                      let tmp40 = closure_25(timesResult2.d, rounded);
                      tmp37 = timesResult2;
                    }
                    let tmp41 = closure_6;
                    tmp32 = closure_6(tmp32 / 2);
                    obj4 = tmp37;
                    obj5 = timesResult1;
                    tmp33 = tmp37;
                  } while (0 !== tmp32);
                }
                closure_2 = true;
                if (constructor.s < 0) {
                  const prototype4 = constructor.prototype;
                  const constructor3 = new constructor(cloneResult);
                  let divResult = constructor3.div(tmp33);
                } else {
                  round(tmp33, precision);
                  divResult = tmp33;
                }
                return divResult;
              }
            } else if (s < 0) {
              const _Error2 = Error;
              throw Error("[DecimalError] NaN");
            }
            let num5 = 1;
            if (s < 0) {
              const _Math = Math;
              num5 = 1;
              if (1 & constructor.d[Math.max(Math, e, diff)]) {
                num5 = -1;
              }
            }
            constructor1.s = 1;
            closure_2 = false;
            closure_2 = true;
            const tmp20 = exp(constructor.times(ln(constructor1, precision + 12)));
            tmp20.s = num5;
            return tmp20;
          }
        }
      } else if (constructor.s < 1) {
        const _Error = Error;
        throw Error("[DecimalError] Infinity");
      } else {
        return constructor1;
      }
    } else {
      const prototype = constructor.prototype;
      const constructor4 = new constructor(cloneResult);
      return constructor4;
    }
  };
  obj.pow = fn26;
  obj.toPower = fn26;
  obj.toPrecision = function(arg0, arg1) {
    const self = this;
    let constructor = this.constructor;
    if (undefined === arg0) {
      const tmp17 = getBase10Exponent(self);
      let tmp3Result = toString(self, tmp17 <= constructor.toExpNeg || tmp17 >= constructor.toExpPos);
      const tmp15 = toString;
      const tmp18 = tmp17 <= constructor.toExpNeg || tmp17 >= constructor.toExpPos;
    } else {
      checkInt32(arg0, 1, 1000000000);
      if (undefined === arg1) {
        let rounding = constructor.rounding;
      } else {
        checkInt32(arg1, 0, 8);
        rounding = arg1;
      }
      const prototype = constructor.prototype;
      constructor = new constructor(self);
      round(constructor, arg0, rounding);
      const tmp12 = getBase10Exponent(constructor);
      tmp3Result = toString(constructor, arg0 <= tmp12 || tmp12 <= constructor.toExpNeg, arg0);
      const tmp13 = arg0 <= tmp12 || tmp12 <= constructor.toExpNeg;
      const tmp3 = toString;
    }
    return tmp3Result;
  };
  const fn27 = function(arg0, arg1) {
    let precision;
    let rounding;
    const self = this;
    let constructor = this.constructor;
    if (undefined === arg0) {
      ({ precision, rounding } = constructor);
    } else {
      checkInt32(arg0, 1, 1000000000);
      if (undefined === arg1) {
        rounding = constructor.rounding;
        precision = arg0;
      } else {
        checkInt32(arg1, 0, 8);
        precision = arg0;
        rounding = arg1;
      }
    }
    constructor = new constructor(self);
    round(constructor, precision, rounding);
    return constructor;
  };
  obj.tosd = fn27;
  obj.toSignificantDigits = fn27;
  const fn28 = function() {
    const tmp = getBase10Exponent(this);
    const constructor = this.constructor;
    let tmp3 = tmp <= constructor.toExpNeg;
    if (!tmp3) {
      tmp3 = tmp >= constructor.toExpPos;
    }
    return toString(this, tmp3);
  };
  obj.toJSON = fn28;
  obj.val = fn28;
  obj.valueOf = fn28;
  obj.toString = fn28;
  let closure_12 = () => {
    function multiplyInteger(arr) {
      let tmp6;
      const substr = arr.slice();
      let diff = tmp - 1;
      let num = 0;
      let num2 = 0;
      if (+arr.length) {
        do {
          let sum = substr[diff] * arg1 + num;
          let tmp4 = closure_9;
          substr[diff] = sum % closure_9 | 0;
          let tmp5 = closure_9;
          num = sum / closure_9 | 0;
          tmp6 = +diff;
          diff = tmp6 - 1;
          num2 = num;
        } while (tmp6);
      }
      if (num2) {
        substr.unshift(num2);
      }
      return substr;
    }
    function compare(arg0, arg1, arg2, arg3) {
      if (arg2 != arg3) {
        let num5 = -1;
        if (arg2 > arg3) {
          num5 = 1;
        }
        let num3 = num5;
      } else {
        let num2 = 0;
        num3 = 0;
        if (0 < arg2) {
          while (arg0[num2] == arg1[num2]) {
            num2 = num2 + 1;
            num3 = 0;
          }
          let num4 = -1;
          if (arg0[num2] > arg1[num2]) {
            num4 = 1;
          }
          num3 = num4;
        }
      }
      return num3;
    }
    function subtract(arr) {
      let tmp4;
      let diff = tmp - 1;
      let num = 0;
      if (+arg2) {
        do {
          arr[diff] = arr[diff] - num;
          num = 0;
          if (arr[diff] < arg1[diff]) {
            num = 1;
          }
          let tmp3 = closure_9;
          arr[diff] = num * closure_9 + arr[diff] - arg1[diff];
          tmp4 = +diff;
          diff = tmp4 - 1;
        } while (tmp4);
      }
      if (!arr[0]) {
        if (arr.length > 1) {
          arr.shift();
          while (!arr[0]) {
            if (arr.length <= 1) {
              break;
            }
          }
        }
      }
    }
    return (s, s2) => {
      let num6;
      let sum;
      let tmp = arg2;
      let constructor = s.constructor;
      let num = -1;
      if (s.s == s2.s) {
        num = 1;
      }
      const d = s.d;
      const d1 = s2.d;
      if (s.s) {
        if (s2.s) {
          const diff = s.e - s2.e;
          let length = d1.length;
          const prototype2 = constructor.prototype;
          constructor = new constructor(num);
          const items = [];
          constructor.d = items;
          let num3 = d[0];
          if (!num3) {
            num3 = 0;
          }
          let num4 = 0;
          let num5 = 0;
          if (d1[0] == num3) {
            do {
              sum = num4 + 1;
              num6 = d[sum];
              if (!num6) {
                num6 = 0;
              }
              num4 = sum;
              num5 = sum;
            } while (d1[sum] == num6);
          }
          let num7 = d[num5];
          if (!num7) {
            num7 = 0;
          }
          let diff1 = diff;
          if (d1[num5] > num7) {
            diff1 = diff - 1;
          }
          if (null == tmp) {
            let precision = constructor.precision;
          } else {
            precision = tmp;
            if (arg3) {
              precision = tmp + (callback(s) - callback(s2)) + 1;
              const tmp18 = callback(s);
            }
          }
          if (precision < 0) {
            const prototype3 = constructor.prototype;
            const constructor1 = new constructor(0);
            return constructor1;
          } else {
            if (1 == length) {
              const first = d1[0];
              const sum1 = tmp98 + 1;
              if (0 < length2) {
                let diff2 = sum1 - 1;
                let num19 = 0;
                let num20 = 0;
                if (sum1) {
                  while (true) {
                    let tmp85 = closure_9;
                    let num21 = d[num19];
                    let result = num20 * closure_9;
                    if (!num21) {
                      num21 = 0;
                    }
                    let sum2 = result + num21;
                    items[num19] = sum2 / first | 0;
                    num20 = sum2 % first | 0;
                    num19 = num19 + 1;
                    if (num19 < length2) {
                      let tmp88 = +diff2;
                      diff2 = tmp88 - 1;
                      if (!tmp88) {
                        break;
                      }
                    } else if (!num20) {
                      break;
                    }
                    break;
                  }
                }
              }
            } else {
              tmp = closure_9 / (d1[0] + 1) | 0;
              let length3 = length2;
              let arr6 = d;
              let arr7 = d1;
              if (tmp > 1) {
                const arr4 = multiplyInteger(d1, tmp);
                const arr5 = multiplyInteger(d, tmp);
                length = arr4.length;
                length3 = arr5.length;
                arr6 = arr5;
                arr7 = arr4;
              }
              const substr = arr6.slice(0, length);
              let sum3 = length4;
              let tmp23 = length4;
              if (substr.length < length) {
                do {
                  let tmp24 = +sum3;
                  sum3 = tmp24 + 1;
                  substr[tmp24] = 0;
                  tmp23 = sum3;
                } while (sum3 < length);
              }
              const substr1 = arr7.slice();
              substr1.unshift(0);
              const first1 = arr7[0];
              let num11 = 0;
              let items2 = substr;
              let num12 = tmp23;
              let diff4 = tmp98;
              let sum8 = length;
              let sum4 = first1;
              if (arr7[1] >= 5000000) {
                sum4 = first1 + 1;
                num11 = 0;
                items2 = substr;
                num12 = tmp23;
                diff4 = tmp98;
                sum8 = length;
              }
              while (true) {
                let tmp33 = compare;
                let tmp34 = arr7;
                let tmp35 = items2;
                let tmp36 = length;
                let tmp37 = num12;
                let tmp38 = compare(arr7, items2, tmp20, num12);
                let tmp39 = items2;
                let tmp40 = num12;
                if (tmp38 < 0) {
                  let first2 = items2[0];
                  let sum5 = first2;
                  if (length != tmp40) {
                    let tmp47 = closure_9;
                    let num14 = items2[1];
                    let result1 = first2 * closure_9;
                    if (!num14) {
                      num14 = 0;
                    }
                    sum5 = result1 + num14;
                  }
                  let num15 = sum5 / sum4 | 0;
                  if (num15 > 1) {
                    let tmp49 = closure_9;
                    if (num15 >= closure_9) {
                      num15 = 9999999;
                    }
                    let tmp50 = compare;
                    let tmp51 = multiplyInteger;
                    let arr13 = multiplyInteger(arr7, num15);
                    let length6 = arr13.length;
                    let length7 = items2.length;
                    let tmp52 = arr13;
                    let tmp53 = items2;
                    let tmp54 = length6;
                    let tmp55 = length7;
                    let tmp56 = compare(arr13, tmp39, length6, length7);
                    let num16 = tmp56;
                    let num17 = num15;
                    let substr2 = arr13;
                    tmp40 = length7;
                    if (1 === tmp56) {
                      let tmp59 = arr7;
                      let diff3 = num15 - 1;
                      let tmp58 = subtract;
                      if (length < length6) {
                        tmp59 = substr1;
                      }
                      let tmp58Result = tmp58(arr13, tmp59, length6);
                      num16 = tmp56;
                      num17 = diff3;
                      substr2 = arr13;
                      tmp40 = length7;
                    }
                  } else {
                    num16 = tmp38;
                    num17 = num15;
                    if (0 === num15) {
                      num16 = 1;
                      num17 = 1;
                    }
                    substr2 = arr7.slice();
                  }
                  let length8 = substr2.length;
                  if (length8 < tmp40) {
                    let arr = substr2.unshift(0);
                  }
                  let tmp62 = subtract;
                  let tmp63 = subtract(items2, substr2, tmp40);
                  let tmp64 = -1 === num16;
                  let tmp65 = tmp40;
                  if (tmp64) {
                    let tmp66 = compare;
                    let length9 = items2.length;
                    let tmp67 = arr7;
                    let tmp68 = items2;
                    let tmp69 = length;
                    let tmp70 = length9;
                    let tmp71 = compare(arr7, tmp39, tmp20, length9);
                    tmp64 = tmp71 < 1;
                    num16 = tmp71;
                    tmp65 = length9;
                  }
                  let tmp72 = num17;
                  if (tmp64) {
                    let tmp75 = arr7;
                    let sum6 = num17 + 1;
                    let tmp74 = subtract;
                    if (length < tmp65) {
                      tmp75 = substr1;
                    }
                    let tmp74Result = tmp74(items2, tmp75, tmp65);
                    tmp72 = sum6;
                  }
                  let length5 = items2.length;
                  let num13 = tmp72;
                  let tmp41 = num16;
                  let tmp42 = substr2;
                  let tmp43 = length8;
                  let items1 = items2;
                  let tmp44 = sum5;
                } else {
                  tmp41 = tmp38;
                  num13 = 0;
                  tmp42 = tmp27;
                  tmp43 = tmp28;
                  items1 = items2;
                  length5 = tmp40;
                  tmp44 = tmp29;
                  if (0 === tmp38) {
                    items1 = [0.229];
                    tmp41 = tmp38;
                    num13 = 1;
                    tmp42 = tmp27;
                    tmp43 = tmp28;
                    length5 = tmp40;
                    tmp44 = tmp29;
                  }
                }
                let tmp77 = +num11;
                num11 = tmp77 + 1;
                items[tmp77] = num13;
                if (tmp41) {
                  if (items1[0]) {
                    let tmp78 = +length5;
                    let num18 = arr6[sum8];
                    let sum7 = tmp78 + 1;
                    if (!num18) {
                      num18 = 0;
                    }
                    items1[tmp78] = num18;
                    items2 = items1;
                    num12 = sum7;
                    let tmp80 = +sum8;
                    sum8 = tmp80 + 1;
                    if (tmp80 < length3) {
                      let tmp81 = +diff4;
                      diff4 = tmp81 - 1;
                      let tmp27 = tmp42;
                      let tmp28 = tmp43;
                      let tmp29 = tmp44;
                      break;
                    } else if (undefined === items2[0]) {
                      break;
                    }
                    break;
                  }
                }
                items2 = [arr6[sum8]];
                num12 = 1;
              }
            }
            if (!items[0]) {
              items.shift();
            }
            constructor.e = diff1;
            let sum9 = tmp;
            if (arg3) {
              sum9 = tmp + callback(constructor) + 1;
            }
            closure_22(constructor, sum9);
            return constructor;
          }
        } else {
          const _Error = Error;
          throw Error("[DecimalError] Division by zero");
        }
      } else {
        const prototype = constructor.prototype;
        const constructor2 = new constructor(s);
        return constructor2;
      }
    };
  }();
  function clone(arg0) {
    let obj = arg0;
    class Decimal {
      constructor(arg0) {
        self = this;
        tmp = Decimal;
        if (this instanceof Decimal) {
          self.constructor = tmp;
          if (arg0 instanceof tmp) {
            ({ s: self.s, e: self.e, d } = arg0);
            substr = d;
            if (d) {
              substr = d.slice();
            }
            self.d = substr;
            return;
          } else {
            tmp7 = typeof arg0;
            str = "number";
            if ("number" === tmp7) {
              num6 = 0;
              {
                if (arg0 > 0) {
                  num8 = 1;
                  self.s = 1;
                  str2 = arg0;
                } else if (arg0 < 0) {
                  str2 = -arg0;
                  num7 = -1;
                  self.s = -1;
                } else {
                  self.s = 0;
                  self.e = 0;
                  self.d = [0.229];
                  return;
                }
                if (str2 === ~~str2) {
                  num9 = 10000000;
                  if (str2 < 10000000) {
                    self.e = 0;
                    items = [];
                    items[0] = str2;
                    self.d = items;
                  }
                  return tmp18;
                }
                tmp16 = closure_21;
                tmp17 = closure_21(self, str2.toString());
                tmp18 = self;
              }
            } else {
              str3 = "string";
              if ("string" !== tmp7) {
                tmp14 = globalThis;
                _Error2 = Error;
                tmp15 = closure_4;
                throw Error(closure_4 + arg0);
              } else {
                num = 0;
                num2 = 45;
                if (45 === arg0.charCodeAt(0)) {
                  num4 = 1;
                  substr1 = arg0.slice(1);
                  num5 = -1;
                  self.s = -1;
                } else {
                  num3 = 1;
                  self.s = 1;
                  substr1 = arg0;
                }
                tmp9 = closure_8;
                if (closure_8.test(substr1)) {
                  tmp12 = closure_21;
                  tmp13 = closure_21(self, substr1);
                  return;
                } else {
                  tmp10 = globalThis;
                  _Error = Error;
                  tmp11 = closure_4;
                  throw Error(closure_4 + substr1);
                }
              }
            }
          }
        } else {
          prototype = tmp.prototype;
          tmp2 = new.target;
          tmp3 = new.target;
          tmp4 = arg0;
          tmp = new tmp(arg0);
          tmp6 = tmp;
          return tmp;
        }
        return;
      }
    }
    Decimal.prototype = obj;
    Decimal.ROUND_UP = 0;
    Decimal.ROUND_DOWN = 1;
    Decimal.ROUND_CEIL = 2;
    Decimal.ROUND_FLOOR = 3;
    Decimal.ROUND_HALF_UP = 4;
    Decimal.ROUND_HALF_DOWN = 5;
    Decimal.ROUND_HALF_EVEN = 6;
    Decimal.ROUND_HALF_CEIL = 7;
    Decimal.ROUND_HALF_FLOOR = 8;
    Decimal.clone = clone;
    Decimal.set = config;
    Decimal.config = config;
    if (undefined === arg0) {
      obj = {};
    }
    if (obj) {
      const items = ["person_gesturing_no", "throttle", "GUILD_DISCOVERY_TAG", "setScene", "rawExePath"];
      class Decimal {
        constructor(arg0) {
          self = this;
          tmp = Decimal;
          if (this instanceof Decimal) {
            self.constructor = tmp;
            if (arg0 instanceof tmp) {
              ({ s: self.s, e: self.e, d } = arg0);
              substr = d;
              if (d) {
                substr = d.slice();
              }
              self.d = substr;
              return;
            } else {
              tmp7 = typeof arg0;
              str = "number";
              if ("number" === tmp7) {
                num6 = 0;
                {
                  if (arg0 > 0) {
                    num8 = 1;
                    self.s = 1;
                    str2 = arg0;
                  } else if (arg0 < 0) {
                    str2 = -arg0;
                    num7 = -1;
                    self.s = -1;
                  } else {
                    self.s = 0;
                    self.e = 0;
                    self.d = [0.229];
                    return;
                  }
                  if (str2 === ~~str2) {
                    num9 = 10000000;
                    if (str2 < 10000000) {
                      self.e = 0;
                      items = [];
                      items[0] = str2;
                      self.d = items;
                    }
                    return tmp18;
                  }
                  tmp16 = closure_21;
                  tmp17 = closure_21(self, str2.toString());
                  tmp18 = self;
                }
              } else {
                str3 = "string";
                if ("string" !== tmp7) {
                  tmp14 = globalThis;
                  _Error2 = Error;
                  tmp15 = closure_4;
                  throw Error(closure_4 + arg0);
                } else {
                  num = 0;
                  num2 = 45;
                  if (45 === arg0.charCodeAt(0)) {
                    num4 = 1;
                    substr1 = arg0.slice(1);
                    num5 = -1;
                    self.s = -1;
                  } else {
                    num3 = 1;
                    self.s = 1;
                    substr1 = arg0;
                  }
                  tmp9 = closure_8;
                  if (closure_8.test(substr1)) {
                    tmp12 = closure_21;
                    tmp13 = closure_21(self, substr1);
                    return;
                  } else {
                    tmp10 = globalThis;
                    _Error = Error;
                    tmp11 = closure_4;
                    throw Error(closure_4 + substr1);
                  }
                }
              }
            }
          } else {
            prototype = tmp.prototype;
            tmp2 = new.target;
            tmp3 = new.target;
            tmp4 = arg0;
            tmp = new tmp(arg0);
            tmp6 = tmp;
            return tmp;
          }
          return;
        }
      }
      if (0 < items.length) {
        class Decimal {
          constructor(arg0) {
            self = this;
            tmp = Decimal;
            if (this instanceof Decimal) {
              self.constructor = tmp;
              if (arg0 instanceof tmp) {
                ({ s: self.s, e: self.e, d } = arg0);
                substr = d;
                if (d) {
                  substr = d.slice();
                }
                self.d = substr;
                return;
              } else {
                tmp7 = typeof arg0;
                str = "number";
                if ("number" === tmp7) {
                  num6 = 0;
                  {
                    if (arg0 > 0) {
                      num8 = 1;
                      self.s = 1;
                      str2 = arg0;
                    } else if (arg0 < 0) {
                      str2 = -arg0;
                      num7 = -1;
                      self.s = -1;
                    } else {
                      self.s = 0;
                      self.e = 0;
                      self.d = [0.229];
                      return;
                    }
                    if (str2 === ~~str2) {
                      num9 = 10000000;
                      if (str2 < 10000000) {
                        self.e = 0;
                        items = [];
                        items[0] = str2;
                        self.d = items;
                      }
                      return tmp18;
                    }
                    tmp16 = closure_21;
                    tmp17 = closure_21(self, str2.toString());
                    tmp18 = self;
                  }
                } else {
                  str3 = "string";
                  if ("string" !== tmp7) {
                    tmp14 = globalThis;
                    _Error2 = Error;
                    tmp15 = closure_4;
                    throw Error(closure_4 + arg0);
                  } else {
                    num = 0;
                    num2 = 45;
                    if (45 === arg0.charCodeAt(0)) {
                      num4 = 1;
                      substr1 = arg0.slice(1);
                      num5 = -1;
                      self.s = -1;
                    } else {
                      num3 = 1;
                      self.s = 1;
                      substr1 = arg0;
                    }
                    tmp9 = closure_8;
                    if (closure_8.test(substr1)) {
                      tmp12 = closure_21;
                      tmp13 = closure_21(self, substr1);
                      return;
                    } else {
                      tmp10 = globalThis;
                      _Error = Error;
                      tmp11 = closure_4;
                      throw Error(closure_4 + substr1);
                    }
                  }
                }
              }
            } else {
              prototype = tmp.prototype;
              tmp2 = new.target;
              tmp3 = new.target;
              tmp4 = arg0;
              tmp = new tmp(arg0);
              tmp6 = tmp;
              return tmp;
            }
            return;
          }
        }
      }
    }
    Decimal.config(obj);
    return Decimal;
  }
  let cloneResult = clone({ "Bool(false)": true, "Bool(false)": "/assets/images/native/icons", "Bool(false)": 24, "Bool(false)": 24, "Bool(false)": null });
  cloneResult.Decimal = cloneResult;
  cloneResult.default = cloneResult;
  cloneResult = new cloneResult(1);
  const arg4 = cloneResult;
  if ("function" === typeof globalThis.define) {
    if (globalThis.define.amd) {
      globalThis.define(() => cloneResult);
    }
  }
  if (undefined !== arg4) {
    if (arg4.exports) {
      arg4.exports = cloneResult;
    }
  }
  if (arg0) {
    arg0.Decimal = cloneResult;
  } else {
    const _self = self;
    if ("undefined" !== typeof self) {
      const _self2 = self;
      if (self) {
        const _self3 = self;
        const _self4 = self;
        const _self5 = self;
      }
    }
    const _Function = Function;
    Function("return this")();
  }
}(this);
