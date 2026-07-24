// Module ID: 13191
// Function ID: 101584
// Name: digitsToString
// Dependencies: []

// Module 13191 (digitsToString)
const dependencyMap = arg4;
((Decimal) => {
  let _window = Decimal;
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
            let tmp9 = getZeroString;
            text2 = `${tmp2}${getZeroString(tmp7)}`;
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
  function checkInt32(arg0, arg1, arg2) {
    throw Error(c9 + arg0);
  }
  function checkRoundingDigits(d, precision, rounding, arg3) {
    let diff = precision;
    let first = d[0];
    let tmp3 = precision;
    if (first >= 10) {
      do {
        diff = diff - 1;
        first = first / 10;
        tmp3 = diff;
      } while (first >= 10);
    }
    const diff1 = tmp3 - 1;
    if (diff1 < 0) {
      let sum = diff1 + 7;
      let num3 = 0;
    } else {
      const _Math = Math;
      num3 = Math.ceil((diff1 + 1) / 7);
      sum = diff1 % 7;
    }
    const tmp7 = pow(10, 7 - sum);
    if (null == arg3) {
      if (sum < 3) {
        if (0 === sum) {
          let tmp21 = tmp8 / 100 | 0;
        } else {
          tmp21 = tmp8;
          if (1 === sum) {
            tmp21 = tmp8 / 10 | 0;
          }
        }
        let tmp22 = rounding < 4;
        if (tmp22) {
          tmp22 = 99999 === tmp21;
        }
        if (!tmp22) {
          let tmp23 = rounding > 3;
          if (tmp23) {
            tmp23 = 49999 === tmp21;
          }
          tmp22 = tmp23;
        }
        if (!tmp22) {
          tmp22 = 50000 === tmp21;
        }
        if (!tmp22) {
          tmp22 = 0 === tmp21;
        }
        let tmp9 = tmp22;
      } else {
        let tmp16 = rounding < 4;
        if (tmp16) {
          tmp16 = tmp8 + 1 == tmp7;
        }
        if (!tmp16) {
          let tmp17 = rounding > 3;
          if (tmp17) {
            tmp17 = tmp8 + 1 === tmp7 / 2;
          }
          tmp16 = tmp17;
        }
        if (tmp16) {
          tmp16 = (d[num3 + 1] / tmp7 / 100 | 0) === pow(10, sum - 2) - 1;
          const tmp18 = d[num3 + 1] / tmp7 / 100 | 0;
        }
        if (!tmp16) {
          let tmp20 = tmp8 === tmp7 / 2 || 0 === tmp8;
          if (tmp20) {
            tmp20 = !(d[num3 + 1] / tmp7 / 100 | 0);
          }
          tmp16 = tmp20;
        }
        tmp9 = tmp16;
      }
    } else if (sum < 4) {
      if (0 === sum) {
        let tmp13 = tmp8 / 1000 | 0;
      } else if (1 === sum) {
        tmp13 = tmp8 / 100 | 0;
      } else {
        tmp13 = tmp8;
        if (2 === sum) {
          tmp13 = tmp8 / 10 | 0;
        }
      }
      let tmp14 = arg3;
      if (!arg3) {
        tmp14 = rounding < 4;
      }
      if (tmp14) {
        tmp14 = 9999 === tmp13;
      }
      if (!tmp14) {
        let tmp15 = !arg3;
        if (tmp15) {
          tmp15 = rounding > 3;
        }
        if (tmp15) {
          tmp15 = 4999 === tmp13;
        }
        tmp14 = tmp15;
      }
      tmp9 = tmp14;
    } else {
      tmp9 = arg3;
      if (!arg3) {
        tmp9 = rounding < 4;
      }
      if (tmp9) {
        tmp9 = tmp8 + 1 == tmp7;
      }
      if (!tmp9) {
        let tmp10 = !arg3;
        if (tmp10) {
          tmp10 = rounding > 3;
        }
        if (tmp10) {
          tmp10 = tmp8 + 1 === tmp7 / 2;
        }
        tmp9 = tmp10;
      }
      if (tmp9) {
        tmp9 = (d[num3 + 1] / tmp7 / 1000 | 0) === pow(10, sum - 3) - 1;
        const tmp11 = d[num3 + 1] / tmp7 / 1000 | 0;
      }
    }
    return tmp9;
  }
  function convertBase(str, c19, c19) {
    const items = [0];
    let num = 0;
    if (0 < str.length) {
      do {
        let tmp = +items.length;
        let diff = tmp - 1;
        if (tmp) {
          do {
            items[diff] = items[diff] * c19;
            tmp3 = +diff;
            diff = tmp3 - 1;
          } while (tmp3);
        }
        let indexOf = "0123456789abcdef".indexOf;
        let tmp4 = +num;
        num = tmp4 + 1;
        items[0] = items[0] + "0123456789abcdef".indexOf(str.charAt(tmp4));
        for (let num2 = 0; num2 < items.length; num2 = num2 + 1) {
          if (items[num2] > c19 - 1) {
            if (undefined === items[num2 + 1]) {
              items[num2 + 1] = 0;
            }
            let sum = num2 + 1;
            items[sum] = items[sum] + (items[num2] / c19 | 0);
            items[num2] = items[num2] % c19;
          }
        }
      } while (num < length);
    }
    return items.reverse();
  }
  function finalise(constructor, precision, rounding, arg3) {
    let tmp11;
    let tmp39;
    let tmp = arg3;
    constructor = constructor.constructor;
    if (null != precision) {
      const d = constructor.d;
      if (d) {
        let first = d[0];
        let num4 = 1;
        let num5 = 1;
        while (first >= 10) {
          num4 = num4 + 1;
          first = first / 10;
          num5 = num4;
        }
        const diff = precision - num5;
        if (diff < 0) {
          let sum = diff + 7;
          const first1 = d[0];
          let num9 = first1 / pow(10, num5 - precision - 1) % 10 | 0;
          let num8 = num5;
          let sum3 = precision;
          let num6 = first1;
          let num10 = 0;
          if (!tmp) {
            tmp = precision < 0;
          }
          if (!tmp) {
            tmp = undefined !== d[num10 + 1];
          }
          if (!tmp) {
            let result = num6;
            if (sum3 >= 0) {
              result = num6 % pow(10, num8 - sum3 - 1);
            }
            tmp = result;
          }
          if (rounding < 4) {
            if (!num9) {
              num9 = tmp;
            }
            if (num9) {
              let tmp24 = 0 == rounding;
              if (!tmp24) {
                let num16 = 2;
                if (constructor.s < 0) {
                  num16 = 3;
                }
                tmp24 = rounding == num16;
              }
              num9 = tmp24;
            }
            let tmp23 = num9;
          } else {
            tmp23 = num9 > 5;
            if (!tmp23) {
              let tmp17 = 5 === num9;
              if (tmp17) {
                let tmp18 = 4 == rounding || tmp;
                if (!tmp18) {
                  if (6 != rounding) {
                    tmp18 = tmp19;
                  } else if (sum > 0) {
                    let num14 = 0;
                    if (sum3 > 0) {
                      num14 = num6 / pow(10, num8 - sum3);
                    }
                    let tmp20 = num14;
                  } else {
                    tmp20 = d[num10 - 1];
                  }
                }
                if (!tmp18) {
                  let num15 = 7;
                  if (constructor.s < 0) {
                    num15 = 8;
                  }
                  tmp18 = rounding == num15;
                }
                tmp17 = tmp18;
              }
              tmp23 = tmp17;
            }
          }
          if (precision >= 1) {
            if (d[0]) {
              if (0 === sum) {
                d.length = num10;
                let diff1 = num10 - 1;
                let num19 = 1;
              } else {
                d.length = num10 + 1;
                const tmp26 = pow(10, 7 - sum);
                let num18 = 0;
                if (sum3 > 0) {
                  const result1 = num6 / pow(10, num8 - sum3);
                  num18 = (result1 % pow(10, sum3) | 0) * tmp26;
                }
                d[num10] = num18;
                num19 = tmp26;
                diff1 = num10;
              }
              if (tmp23) {
                while (0 != diff1) {
                  d[diff1] = d[diff1] + num19;
                  let tmp32 = c19;
                  if (d[diff1] == c19) {
                    let tmp33 = +diff1;
                    diff1 = tmp33 - 1;
                    d[tmp33] = 0;
                    num19 = 1;
                    continue;
                  }
                }
                let first2 = d[0];
                let num20 = 1;
                let num21 = 1;
                while (first2 >= 10) {
                  num20 = num20 + 1;
                  first2 = first2 / 10;
                  num21 = num20;
                }
                let sum1 = d[0] + num19;
                d[0] = sum1;
                let num22 = 1;
                let num23 = 1;
                if (sum1 >= 10) {
                  do {
                    num22 = num22 + 1;
                    sum1 = sum1 / 10;
                    num23 = num22;
                  } while (sum1 >= 10);
                }
                if (num21 != num23) {
                  constructor.e = constructor.e + 1;
                  if (d[0] == c19) {
                    d[0] = 1;
                  }
                }
              }
              let diff2 = d.length - 1;
              if (0 === d[diff2]) {
                do {
                  let arr = d.pop();
                  diff2 = diff2 - 1;
                  tmp39 = d[diff2];
                } while (0 === tmp39);
              }
            }
          }
          d.length = 0;
          if (tmp23) {
            const diff3 = precision - (constructor.e + 1);
            d[0] = pow(10, (7 - diff3 % 7) % 7);
            constructor.e = -diff3 || 0;
          } else {
            constructor.e = 0;
            d[0] = 0;
          }
          return constructor;
        } else {
          const _Math = Math;
          const rounded = Math.ceil((diff + 1) / 7);
          if (rounded >= d.length) {
            if (tmp) {
              let sum2 = tmp8 + 1;
              if (+length <= rounded) {
                do {
                  arr = d.push(0);
                  tmp11 = +sum2;
                  sum2 = tmp11 + 1;
                } while (tmp11 <= rounded);
              }
              const result2 = diff % 7;
              sum3 = result2 - 7 + 1;
              num8 = 1;
              sum = result2;
              num9 = 0;
              num6 = 0;
              num10 = rounded;
            }
          } else {
            num6 = d[rounded];
            let num7 = 1;
            let result3 = num6;
            num8 = 1;
            if (num6 >= 10) {
              do {
                num7 = num7 + 1;
                result3 = result3 / 10;
                num8 = num7;
              } while (result3 >= 10);
            }
            sum = diff % 7;
            sum3 = sum - 7 + num8;
            num9 = 0;
            if (sum3 >= 0) {
              num9 = num6 / pow(10, num8 - sum3 - 1) % 10 | 0;
            }
            num10 = rounded;
          }
        }
      } else {
        return constructor;
      }
    }
    if (c8) {
      if (constructor.e > constructor.maxE) {
        constructor.d = null;
        const _NaN = NaN;
        constructor.e = NaN;
      } else if (constructor.e < constructor.minE) {
        constructor.e = 0;
        constructor.d = [0];
      }
    }
    return constructor;
  }
  function finiteToString(constructor, arg1, arg2) {
    if (constructor.isFinite()) {
      const e = constructor.e;
      const arr = digitsToString(constructor.d);
      if (arg1) {
        if (arg2) {
          const diff = arg2 - length;
          if (diff > 0) {
            const text = `${arr.charAt(0)}.`;
            const text1 = `${arr.charAt(0)}.${arr.slice(1)}`;
            let text2 = `${arr.charAt(0)}.${arr.slice(1)}${getZeroString(tmp25)}`;
          }
          let str7 = "e+";
          if (constructor.e < 0) {
            str7 = "e";
          }
          let sum = text2 + str7 + constructor.e;
        }
        text2 = arr;
        if (length > 1) {
          const text3 = `${arr.charAt(0)}.`;
          text2 = `${arr.charAt(0)}.${arr.slice(1)}`;
        }
      } else if (e < 0) {
        const text4 = `0.${getZeroString(-e - 1)}${arr}`;
        let tmp22 = arg2;
        if (arg2) {
          const diff1 = arg2 - length;
          tmp22 = diff1 > 0;
          const tmp21 = diff1;
        }
        sum = text4;
        if (tmp22) {
          sum = text4 + getZeroString(tmp21);
        }
      } else if (e >= length) {
        const sum1 = arr + getZeroString(e + 1 - length);
        let tmp15 = arg2;
        if (arg2) {
          const diff2 = arg2 - e - 1;
          tmp15 = diff2 > 0;
          const tmp16 = diff2;
        }
        sum = sum1;
        if (tmp15) {
          sum = `${tmp14}.${getZeroString(tmp16)}`;
        }
      } else {
        const sum2 = e + 1;
        let text6 = arr;
        if (sum2 < length) {
          const text5 = `${arr.slice(0, tmp4)}.`;
          text6 = `${arr.slice(0, tmp4)}.${arr.slice(tmp4)}`;
        }
        let tmp7 = arg2;
        let tmp8 = sum2;
        if (arg2) {
          const diff3 = arg2 - length;
          tmp7 = diff3 > 0;
          tmp8 = diff3;
        }
        sum = text6;
        if (tmp7) {
          let text7 = text6;
          if (e + 1 === length) {
            text7 = `${tmp5}.`;
          }
          sum = text7 + getZeroString(tmp8);
        }
      }
      return sum;
    } else {
      return nonFiniteToString(constructor);
    }
  }
  function getBase10Exponent(arg0, arg1) {
    let first = arg0[0];
    let result = arg1 * 7;
    let tmp3 = result;
    if (first >= 10) {
      do {
        result = result + 1;
        first = first / 10;
        tmp3 = result;
      } while (first >= 10);
    }
    return tmp3;
  }
  function getLn10(arg0, precision, precision) {
    if (precision > closure_20) {
      let c8 = true;
      if (precision) {
        arg0.precision = precision;
      }
      const _Error = Error;
      throw Error(c10);
    } else {
      const prototype = arg0.prototype;
      const tmp5 = new arg0(c5);
      finalise(tmp5, precision, 1, true);
      return tmp5;
    }
  }
  function getPi(constructor, precision, rounding) {
    if (precision > closure_21) {
      const _Error = Error;
      throw Error(c10);
    } else {
      const prototype = constructor.prototype;
      const tmp5 = new constructor(cloneResult1);
      finalise(tmp5, precision, rounding, true);
      return tmp5;
    }
  }
  function getPrecision(d) {
    let result1;
    const diff = d.length - 1;
    const sum = 7 * diff + 1;
    let result = d[diff];
    let tmp4 = sum;
    if (result) {
      let diff1 = sum;
      let tmp6 = sum;
      if (result % 10 === 0) {
        do {
          diff1 = diff1 - 1;
          result = result / 10;
          tmp6 = diff1;
          result1 = result % 10;
        } while (result1 === 0);
      }
      let first = d[0];
      let sum1 = tmp6;
      tmp4 = tmp6;
      if (first >= 10) {
        do {
          sum1 = sum1 + 1;
          first = first / 10;
          tmp4 = sum1;
        } while (first >= 10);
      }
    }
    return tmp4;
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
  function intPow(constructor, constructor2, diff, precision) {
    let tmp4;
    let obj = constructor2;
    let tmp = diff;
    let obj2 = new constructor(1);
    const rounded = Math.ceil(precision / 7 + 4);
    let c8 = false;
    while (true) {
      let result = tmp % 2;
      tmp4 = obj2;
      if (result) {
        let tmp5 = truncate;
        let timesResult = obj2.times(obj);
        result = truncate(timesResult.d, rounded);
        tmp4 = timesResult;
      }
      if (result) {
        let flag = true;
      }
      let tmp7 = floor;
      let tmp8 = floor(tmp / 2);
      let tmp9 = flag;
      if (0 === tmp8) {
        break;
      } else {
        let tmp10 = truncate;
        let timesResult1 = obj.times(obj);
        let tmp12 = truncate(timesResult1.d, rounded);
        obj = timesResult1;
        tmp = tmp8;
        flag = tmp9;
        obj2 = tmp4;
        continue;
      }
    }
    diff = tmp4.d.length - 1;
    if (tmp9) {
      tmp9 = 0 === tmp4.d[diff];
    }
    if (tmp9) {
      const d = tmp4.d;
      d[diff] = d[diff] + 1;
    }
    c8 = true;
    return tmp4;
  }
  function isOdd(divToIntResult) {
    return 1 & divToIntResult.d[divToIntResult.d.length - 1];
  }
  function maxOrMin(arg0, arg1, arg2) {
    const _require = new require(arg1[0]);
    let obj = _require;
    let num = 1;
    let tmp2 = _require;
    if (1 < arg1.length) {
      const prototype = require.prototype;
      const _require1 = new require(arg1[num]);
      tmp2 = _require1;
      while (_require1.s) {
        let cmpResult = obj.cmp(_require1);
        let tmp8 = cmpResult === module;
        if (!tmp8) {
          let tmp9 = 0 === cmpResult && obj.s === module;
          tmp8 = tmp9;
        }
        let tmp10 = obj;
        if (tmp8) {
          tmp10 = _require1;
        }
        num = num + 1;
        obj = tmp10;
        tmp2 = tmp10;
        if (num >= arg1.length) {
          break;
        }
      }
    }
    return tmp2;
  }
  function naturalExponential(constructor, precision) {
    let e;
    let rounding;
    let tmp38;
    constructor = constructor.constructor;
    ({ rounding, precision } = constructor);
    if (constructor.d) {
      if (constructor.d[0]) {
        if (constructor.e <= 17) {
          let tmp = precision;
          if (null == precision) {
            let c8 = false;
            tmp = precision;
          }
          const prototype = constructor.prototype;
          constructor = new constructor(0.03125);
          let obj = constructor;
          let num6 = 0;
          let tmp6 = constructor;
          let num7 = 0;
          if (constructor.e > -2) {
            do {
              let timesResult = obj.times(constructor);
              num6 = num6 + 5;
              obj = timesResult;
              tmp6 = timesResult;
              num7 = num6;
              e = timesResult.e;
            } while (e > -2);
          }
          const _Math = Math;
          const _Math2 = Math;
          const tmp10 = Math.log(pow(2, num7)) / Math.LN10 * 2 + 5 | 0;
          let sum = tmp + tmp10;
          const prototype2 = constructor.prototype;
          const constructor1 = new constructor(1);
          let obj2 = constructor1;
          constructor.precision = sum;
          let obj3 = constructor1;
          let obj4 = constructor1;
          let num13 = 0;
          let num14 = 0;
          while (true) {
            let tmp16 = finalise;
            let timesResult1 = obj3.times(tmp6);
            let tmp18 = finalise(timesResult1, sum, 1);
            let sum1 = num14 + 1;
            let timesResult2 = obj2.times(sum1);
            let tmp21 = digitsToString;
            let tmp22 = callback;
            let tmp23 = timesResult1;
            let tmp24 = timesResult2;
            let tmp25 = sum;
            let num15 = 1;
            let plusResult = obj4.plus(callback(timesResult1, timesResult2, sum, 1));
            let arr = digitsToString(plusResult.d);
            let substr = arr.slice(0, sum);
            let arr2 = digitsToString(obj4.d);
            let tmp29 = obj4;
            let tmp30 = sum;
            obj2 = timesResult2;
            obj3 = timesResult1;
            obj4 = plusResult;
            let substr1 = arr2.slice(0, sum);
            let sum3 = num13;
            num14 = sum1;
            if (substr === substr1) {
              let tmp55 = +num7;
              let diff = tmp55 - 1;
              let obj5 = tmp29;
              let tmp37 = diff;
              tmp38 = tmp29;
              if (tmp55) {
                do {
                  let tmp32 = finalise;
                  let timesResult3 = obj5.times(obj5);
                  let tmp34 = finalise(timesResult3, tmp30, 1);
                  tmp35 = +diff;
                  diff = tmp35 - 1;
                  obj5 = timesResult3;
                  tmp37 = diff;
                  tmp38 = timesResult3;
                } while (tmp35);
              }
              if (null != precision) {
                break;
              } else {
                if (num13 < 3) {
                  let tmp39 = checkRoundingDigits;
                  let tmp40 = rounding;
                  let tmp41 = num13;
                  if (checkRoundingDigits(tmp38.d, tmp30 - tmp10, rounding, num13)) {
                    let sum2 = tmp30 + 10;
                    constructor.precision = sum2;
                    let prototype3 = constructor.prototype;
                    let tmp48 = new.target;
                    let tmp49 = new.target;
                    let num16 = 1;
                    let constructor2 = new constructor(1);
                    obj2 = constructor2;
                    sum3 = num13 + 1;
                    let tmp51 = tmp37;
                    obj3 = constructor2;
                    obj4 = constructor2;
                    sum = sum2;
                    num14 = 0;
                  }
                }
                let tmp42 = finalise;
                constructor.precision = precision;
                let flag2 = true;
                c8 = true;
                let tmp43 = tmp38;
                let tmp44 = precision;
                let tmp45 = rounding;
                let flag3 = true;
                let tmp46 = finalise(tmp38, precision, rounding, true);
                return tmp38;
              }
            }
            num13 = sum3;
            continue;
          }
          constructor.precision = precision;
          return tmp38;
        }
      }
    }
    if (constructor.d) {
      let num19 = 1;
      if (constructor.d[0]) {
        let num20 = Infinity;
        if (constructor.s < 0) {
          num20 = 0;
        }
        num19 = num20;
      }
      let _NaN = num19;
    } else if (constructor.s) {
      let num17 = 0;
      if (constructor.s >= 0) {
        num17 = constructor;
      }
      _NaN = num17;
    } else {
      _NaN = NaN;
    }
    const constructor3 = new constructor(_NaN);
    return constructor3;
  }
  function naturalLogarithm(constructor1, sum) {
    let constructor;
    let d;
    let precision;
    let rounding;
    ({ d, constructor } = constructor1);
    ({ rounding, precision } = constructor);
    if (constructor1.s >= 0) {
      if (d) {
        if (d[0]) {
          let tmp2 = sum;
          if (null == sum) {
            let c8 = false;
            tmp2 = precision;
          }
          sum = tmp2 + 10;
          constructor.precision = sum;
          const str = digitsToString(d);
          const charAtResult = str.charAt(0);
          const _Math = Math;
          const e = constructor1.e;
          if (Math.abs(e) < 1500000000000000) {
            if (charAtResult >= 7) {
              let arr = str;
              let tmp12 = charAtResult;
              let tmp13 = constructor1;
              if (1 == charAtResult) {
                let num5 = 1;
                let obj = constructor1;
                arr = str;
                tmp12 = charAtResult;
                tmp13 = constructor1;
              }
              let e2 = tmp13.e;
              if (tmp12 > 1) {
                const prototype2 = constructor.prototype;
                constructor = new constructor("0." + arr);
                const sum1 = e2 + 1;
              } else {
                const text = `${tmp12}.`;
                const prototype = constructor.prototype;
                constructor = new constructor(`${tmp12}.` + arr.slice(1));
              }
              const minusResult = constructor.minus(1);
              const obj3 = callback(minusResult, constructor.plus(1), sum, 1);
              const timesResult = obj3.times(obj3);
              finalise(timesResult, sum, 1);
              sum = timesResult;
              e2 = obj3;
            } else {
              num5 = 1;
              obj = constructor1;
            }
            while (true) {
              let tmp14 = digitsToString;
              let timesResult1 = obj.times(constructor1);
              let str2 = digitsToString(timesResult1.d);
              let charAtResult1 = str2.charAt(0);
              let sum2 = num5 + 1;
              if (charAtResult1 < 7) {
                let num10 = 1;
                num5 = sum2;
                obj = timesResult1;
              }
              let num11 = 1;
              arr = str2;
              tmp12 = charAtResult1;
              let tmp18 = sum2;
              tmp13 = timesResult1;
              if (1 != charAtResult1) {
                break;
              } else {
                let num12 = 3;
                num5 = sum2;
                obj = timesResult1;
                arr = str2;
                tmp12 = charAtResult1;
                let tmp19 = sum2;
                tmp13 = timesResult1;
                if (str2.charAt(1) <= 3) {
                  break;
                }
              }
            }
          } else {
            const obj4 = getLn10(constructor, sum + 2, precision);
            const text1 = `${tmp5}.`;
            const prototype4 = constructor.prototype;
            constructor1 = new constructor(`${tmp5}.` + str.slice(1));
            const timesResult2 = getLn10(constructor, sum + 2, precision).times("" + e);
            const plusResult = naturalLogarithm(constructor1, sum - 10).plus(timesResult2);
            constructor.precision = precision;
            if (null == sum) {
              c8 = true;
              finalise(plusResult, precision, rounding, true);
            }
            return plusResult;
          }
        }
      }
    }
    if (d) {
      if (!d[0]) {
        const prototype3 = constructor.prototype;
        const constructor2 = new constructor(-Infinity);
        return constructor2;
      }
    }
  }
  function nonFiniteToString(s) {
    return String(s.s * s.s / 0);
  }
  function parseDecimal(d, arr) {
    let charCodeAtResult;
    let charCodeAtResult1;
    let sum2;
    let tmp25;
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
      d.e = diff2;
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
        let tmp18 = sum1;
        let tmp19 = sum1;
        if (sum1 < diff3) {
          do {
            let d1 = d.d;
            sum2 = tmp18 + 7;
            arr = d1.push(+substr1.slice(tmp18, sum2));
            tmp18 = sum2;
            tmp19 = sum2;
          } while (sum2 < diff3);
        }
        const substr2 = substr1.slice(tmp19);
        let diff4 = 7 - substr2.length;
        let tmp15 = substr2;
      } else {
        diff4 = sum1 - diff1;
        tmp15 = substr1;
      }
      let diff5 = diff4 - 1;
      let text = tmp15;
      let tmp24 = tmp15;
      if (diff4) {
        do {
          text = `${tmp23}0`;
          tmp25 = +diff5;
          diff5 = tmp25 - 1;
          tmp24 = text;
        } while (tmp25);
      }
      const d2 = d.d;
      d2.push(+tmp24);
      if (c8) {
        if (d.e > d.constructor.maxE) {
          d.d = null;
          const _NaN = NaN;
          d.e = NaN;
        } else if (d.e < d.constructor.minE) {
          d.e = 0;
          d.d = [0];
        }
      }
    } else {
      d.e = 0;
      d.d = [0];
    }
    return d;
  }
  function parseOther(s, arr) {
    let tmp31;
    if (arr.indexOf("_") > -1) {
      const replaced = arr.replace(/(\d)_(?=\d)/g, "$1");
      let str3 = replaced;
      if (regex4.test(replaced)) {
        parseDecimal(s, replaced);
        return s;
      }
    } else {
      if ("Infinity" !== arr) {
        str3 = arr;
      }
      if (!+arr) {
        const _NaN = NaN;
        s.s = NaN;
      }
      const _NaN2 = NaN;
      s.e = NaN;
      s.d = null;
      return s;
    }
    if (regex2.test(str3)) {
      let formatted = str3.toLowerCase();
      let num = 16;
    } else {
      num = 2;
      formatted = str3;
      if (!regex.test(str3)) {
        num = 8;
        formatted = str3;
        if (!regex3.test(str3)) {
          const _Error = Error;
          throw Error(c9 + str3);
        }
      }
    }
    const searchResult = formatted.search(/p/i);
    if (searchResult > 0) {
      const tmp11 = +formatted.slice(searchResult + 1);
      let substr = formatted.substring(2, searchResult);
    } else {
      substr = formatted.slice(2);
    }
    const index = substr.indexOf(".");
    let constructor = s.constructor;
    let tmp14 = substr;
    if (index >= 0) {
      const replaced1 = substr.replace(".", "");
      const diff = length - index;
      const prototype = constructor.prototype;
      constructor = new constructor(num);
      tmp14 = replaced1;
      const tmp15 = intPow(constructor, constructor, diff, 2 * diff);
      const tmp16 = replaced1.length;
    }
    const arr4 = convertBase(tmp14, num, c19);
    const diff1 = arr4.length - 1;
    let tmp27 = diff1;
    let tmp28 = diff1;
    if (0 === arr4[diff1]) {
      do {
        arr = arr4.pop();
        let diff2 = tmp27 - 1;
        tmp27 = diff2;
        tmp28 = diff2;
        tmp31 = arr4[diff2];
      } while (0 === tmp31);
    }
    if (tmp28 < 0) {
      s = s.s;
      const prototype2 = constructor.prototype;
      let constructor1 = new constructor(0);
    } else {
      s.e = getBase10Exponent(arr4, diff1);
      s.d = arr4;
      let c8 = false;
      let obj = s;
      if (tmp13) {
        obj = callback(s, tmp15, 4 * tmp16);
      }
      constructor1 = obj;
      if (!tmp11) {
        c8 = true;
      } else {
        const _Math = Math;
        if (Math.abs(tmp11) < 54) {
          let powResult = pow(2, tmp11);
        } else {
          powResult = cloneResult.pow(2, tmp11);
        }
        obj.times(powResult);
      }
    }
    return constructor1;
  }
  function taylorSeries(constructor, arg1, timesResult, timesResult2, arg4) {
    let plusResult1;
    let tmp = arg1;
    const precision = constructor.precision;
    const rounded = Math.ceil(precision / 7);
    let c8 = false;
    timesResult = timesResult.times(timesResult);
    let obj = new constructor(timesResult2);
    let obj2 = timesResult2;
    while (true) {
      let tmp4 = callback;
      let timesResult1 = obj.times(timesResult);
      let tmp6 = +tmp;
      let tmp7 = +tmp6 + 1;
      let prototype = constructor.prototype;
      let tmp8 = new.target;
      let tmp9 = new.target;
      let tmp10 = new constructor(tmp6 * tmp7);
      let tmp11 = tmp10;
      let tmp12 = timesResult1;
      let tmp13 = precision;
      let num = 1;
      let obj3 = callback(timesResult1, tmp10, precision, 1);
      if (arg4) {
        let plusResult = obj2.plus(obj3);
      } else {
        plusResult = obj2.minus(obj3);
      }
      let tmp14 = callback;
      timesResult2 = obj3.times(timesResult);
      let tmp16 = +tmp7 + 1;
      let tmp17 = +tmp16 + 1;
      let sum = tmp17 + 1;
      let prototype2 = constructor.prototype;
      let tmp19 = new.target;
      let tmp20 = new.target;
      let tmp21 = new constructor(tmp16 * tmp17);
      let tmp22 = tmp21;
      let tmp23 = timesResult2;
      let tmp24 = precision;
      let num2 = 1;
      let tmp25 = callback(timesResult2, tmp21, precision, 1);
      plusResult1 = plusResult.plus(tmp25);
      let tmp27 = plusResult;
      tmp = sum;
      obj2 = plusResult1;
      obj = tmp25;
      if (undefined === plusResult1.d[rounded]) {
        continue;
      } else {
        let tmp30 = rounded;
        if (plusResult1.d[rounded] === plusResult.d[rounded]) {
          let tmp28 = +rounded;
          let diff = tmp28 - 1;
          tmp30 = diff;
          if (tmp28) {
            tmp30 = diff;
            while (plusResult1.d[diff] === plusResult.d[diff]) {
              let tmp31 = +diff;
              diff = tmp31 - 1;
              tmp30 = diff;
              if (!tmp31) {
                break;
              }
            }
          }
        }
        tmp = sum;
        obj2 = plusResult1;
        obj = tmp25;
        if (-1 == tmp30) {
          break;
        }
      }
      continue;
    }
    c8 = true;
    plusResult1.d.length = rounded + 1;
    return plusResult1;
  }
  function tinyPow(arg0, rounded) {
    let diff = rounded - 1;
    let result = arg0;
    let tmp3 = arg0;
    while (diff) {
      result = result * arg0;
      diff = diff - 1;
      tmp3 = result;
    }
    return tmp3;
  }
  function toLessThanHalfPi(constructor, self) {
    let num = 1;
    const obj = getPi(constructor, constructor.precision, 1);
    const timesResult = obj.times(0.5);
    const absResult = self.abs();
    if (absResult.lte(timesResult)) {
      if (tmp) {
        num = 4;
      }
      let num2 = num;
      return absResult;
    } else {
      const divToIntResult = absResult.divToInt(obj);
      if (divToIntResult.isZero()) {
        let num6 = 2;
        if (tmp) {
          num6 = 3;
        }
        num2 = num6;
        let obj5 = absResult;
      } else {
        const minusResult = absResult.minus(divToIntResult.times(obj));
        const tmp5 = isOdd(divToIntResult);
        if (lteResult) {
          if (tmp5) {
            let num5 = 3;
            if (tmp) {
              num5 = 2;
            }
            let num4 = num5;
          } else {
            num4 = num;
            if (tmp) {
              num4 = 4;
            }
          }
          num2 = num4;
          return minusResult;
        } else {
          if (tmp5) {
            let num3 = 4;
            if (tmp) {
              num3 = num;
            }
            num2 = num3;
          } else {
            num2 = 2;
            if (tmp) {
              num2 = 3;
            }
          }
          obj5 = minusResult;
        }
        lteResult = minusResult.lte(timesResult);
      }
      return obj5.minus(obj).abs();
    }
  }
  function toStringBinary(isFinite, c19, arg2, arg3) {
    let d;
    let e;
    let precision;
    let result1;
    let rounding;
    let sum2;
    let tmp23;
    let tmp56;
    let tmp61;
    let tmp74;
    let constructor = isFinite.constructor;
    if (undefined !== arg2) {
      checkInt32(arg2, 1, 1000000000);
      if (undefined === arg3) {
        rounding = constructor.rounding;
        precision = arg2;
      } else {
        checkInt32(arg3, 0, 8);
        precision = arg2;
        rounding = arg3;
      }
    } else {
      ({ precision, rounding } = constructor);
    }
    if (isFinite.isFinite()) {
      let diff = precision;
      let num5 = c19;
      if (tmp) {
        if (16 == c19) {
          diff = 4 * precision - 3;
          num5 = 2;
        } else {
          diff = precision;
          num5 = 2;
          if (8 == c19) {
            diff = 3 * precision - 2;
            num5 = 2;
          }
        }
      }
      let arr = finiteToString(isFinite);
      const index = arr.indexOf(".");
      let tmp12 = arr;
      if (index >= 0) {
        const replaced = arr.replace(".", "");
        const prototype = constructor.prototype;
        constructor = new constructor(1);
        constructor.e = replaced.length - index;
        constructor.d = convertBase(finiteToString(constructor), 10, num5);
        constructor.e = constructor.d.length;
        tmp12 = replaced;
      }
      const arr3 = convertBase(tmp12, 10, num5);
      let diff1 = length - 1;
      if (0 == arr3[diff1]) {
        do {
          arr = arr3.pop();
          diff1 = diff1 - 1;
          tmp23 = arr3[diff1];
        } while (0 == tmp23);
      }
      if (arr3[0]) {
        if (index < 0) {
          e = length - 1;
          let tmp36 = isFinite;
          d = arr3;
        } else {
          const prototype2 = constructor.prototype;
          const constructor1 = new constructor(isFinite);
          constructor1.d = arr3;
          constructor1.e = length;
          tmp36 = callback(constructor1, tmp13, diff, rounding, 0, num5);
          ({ d, e } = tmp36);
          let tmp37 = closure_2;
        }
        let num17 = 2;
        const result = num5 / 2;
        if (!tmp37) {
          tmp37 = undefined !== d[diff + 1];
        }
        if (rounding < 4) {
          let tmp44 = undefined !== tmp38 || tmp37;
          if (tmp44) {
            let tmp45 = 0 === rounding;
            if (!tmp45) {
              if (tmp36.s < 0) {
                num17 = 3;
              }
              tmp45 = rounding === num17;
            }
            tmp44 = tmp45;
          }
          let tmp40 = tmp44;
        } else {
          tmp40 = tmp38 > result;
          if (!tmp40) {
            let tmp41 = tmp38 === result;
            if (tmp41) {
              let tmp42 = 4 === rounding || tmp37;
              if (!tmp42) {
                let tmp43 = 6 === rounding;
                if (tmp43) {
                  tmp43 = 1 & d[diff - 1];
                }
                tmp42 = tmp43;
              }
              if (!tmp42) {
                let num22 = 7;
                if (tmp36.s < 0) {
                  num22 = 8;
                }
                tmp42 = rounding === num22;
              }
              tmp41 = tmp42;
            }
            tmp40 = tmp41;
          }
        }
        d.length = diff;
        let tmp46 = e;
        if (tmp40) {
          let diff2 = diff - 1;
          const sum = d[diff2] + 1;
          d[diff2] = sum;
          let tmp49 = e;
          tmp46 = e;
          if (sum > num5 - 1) {
            do {
              d[diff2] = 0;
              let sum1 = tmp49;
              if (!diff2) {
                sum1 = tmp49 + 1;
                arr = d.unshift(1);
              }
              diff2 = diff2 - 1;
              sum2 = d[diff2] + 1;
              d[diff2] = sum2;
              tmp49 = sum1;
              tmp46 = sum1;
            } while (sum2 > num5 - 1);
          }
        }
        let tmp53 = length2;
        let tmp54 = length2;
        if (!d[d.length - 1]) {
          do {
            let diff3 = tmp53 - 1;
            tmp53 = diff3;
            tmp54 = diff3;
            tmp56 = d[diff3 - 1];
          } while (!tmp56);
        }
        let str4 = "";
        let num25 = 0;
        let str6 = "";
        if (0 < tmp54) {
          do {
            let charAt = "0123456789abcdef".charAt;
            str4 = `${"0123456789abcdef".charAt(d[num25])}`;
            num25 = num25 + 1;
            str6 = str4;
          } while (num25 < tmp54);
        }
        if (tmp) {
          let str10 = str6;
          if (tmp54 > 1) {
            if (16 != c19) {
              if (8 != c19) {
                const text = `${str6.charAt(0)}.`;
                str10 = `${str6.charAt(0)}.${str6.slice(1)}`;
              }
            }
            let num27 = 3;
            if (16 == c19) {
              num27 = 4;
            }
            let diff4 = tmp54 - 1;
            let text1 = str6;
            let tmp68 = str6;
            if (diff4 % num27) {
              do {
                text1 = `${tmp67}0`;
                diff4 = diff4 + 1;
                tmp68 = text1;
                result1 = diff4 % num27;
              } while (result1);
            }
            const arr4 = convertBase(tmp68, num5, c19);
            let tmp71 = length3;
            let tmp72 = length3;
            if (!arr4[arr4.length - 1]) {
              do {
                let diff5 = tmp71 - 1;
                tmp71 = diff5;
                tmp72 = diff5;
                tmp74 = arr4[diff5 - 1];
              } while (!tmp74);
            }
            let num28 = 1;
            let str13 = "1.";
            str10 = "1.";
            if (1 < tmp72) {
              do {
                let charAt2 = "0123456789abcdef".charAt;
                str13 = `1.${"0123456789abcdef".charAt(arr4[num28])}`;
                num28 = num28 + 1;
                str10 = str13;
              } while (num28 < tmp72);
            }
          }
          let str14 = "p+";
          if (tmp46 < 0) {
            str14 = "p";
          }
          let str3 = str10 + str14 + tmp46;
          let tmp24 = tmp36;
        } else if (tmp46 < 0) {
          let sum3 = tmp46 + 1;
          let text2 = str6;
          let tmp64 = str6;
          while (sum3) {
            text2 = `0${tmp63}`;
            sum3 = sum3 + 1;
            tmp64 = text2;
          }
          str3 = `0.${tmp64}`;
          tmp24 = tmp36;
        } else {
          const sum4 = tmp46 + 1;
          if (sum4 > tmp54) {
            let diff6 = tmp58 - 1;
            let text3 = str6;
            tmp24 = tmp36;
            str3 = str6;
            if (+sum4 - tmp54) {
              do {
                text3 = `${tmp60}0`;
                tmp61 = +diff6;
                diff6 = tmp61 - 1;
                tmp24 = tmp36;
                str3 = text3;
              } while (tmp61);
            }
          } else {
            tmp24 = tmp36;
            str3 = str6;
            if (sum4 < tmp54) {
              const text4 = `${str6.slice(0, tmp57)}.`;
              str3 = `${str6.slice(0, tmp57)}.${str6.slice(tmp57)}`;
              tmp24 = tmp36;
            }
          }
        }
      } else {
        str3 = "0";
        if (tmp) {
          str3 = "0p+0";
        }
        tmp24 = isFinite;
      }
      let str15 = "0x";
      if (16 != c19) {
        let str16 = "0b";
        if (2 != c19) {
          let str17 = "";
          if (8 == c19) {
            str17 = "0o";
          }
          str16 = str17;
        }
        str15 = str16;
      }
      let sum5 = str15 + str3;
      let tmp8 = tmp24;
    } else {
      sum5 = nonFiniteToString(isFinite);
      tmp8 = isFinite;
    }
    let text5 = sum5;
    if (tmp8.s < 0) {
      text5 = `-${tmp7}`;
    }
    return text5;
  }
  function truncate(arg0, arg1) {
    if (arg0.length > arg1) {
      arg0.length = arg1;
      return true;
    }
  }
  function abs(arg0) {
    return new this(arg0).abs();
  }
  function acos(arg0) {
    return new this(arg0).acos();
  }
  function acosh(arg0) {
    return new this(arg0).acosh();
  }
  function add(arg0, arg1) {
    return new this(arg0).plus(arg1);
  }
  function asin(arg0) {
    return new this(arg0).asin();
  }
  function asinh(arg0) {
    return new this(arg0).asinh();
  }
  function atan(arg0) {
    return new this(arg0).atan();
  }
  function atanh(arg0) {
    return new this(arg0).atanh();
  }
  function atan2(result2, result2) {
    let precision;
    let rounding;
    const self = this;
    const tmp = new this(result2);
    let s = tmp;
    const obj = new this(result2);
    ({ precision, rounding } = this);
    const sum = precision + 4;
    if (tmp.s) {
      if (obj.s) {
        if (!s.d) {
          if (!obj.d) {
            let num3 = 0.75;
            if (obj.s > 0) {
              num3 = 0.25;
            }
            const timesResult = getPi(self, sum, 1).times(num3);
            timesResult.s = s.s;
            let atanResult1 = timesResult;
            const obj2 = getPi(self, sum, 1);
          }
        }
        if (obj.d) {
          if (!s.isZero()) {
            if (s.d) {
              if (!obj.isZero()) {
                if (obj.s < 0) {
                  self.precision = sum;
                  self.rounding = 1;
                  const atanResult = self.atan(callback(s, tmp2, sum, 1));
                  const tmp16 = getPi(self, sum, 1);
                  self.precision = precision;
                  self.rounding = rounding;
                  if (s.s < 0) {
                    let minusResult = atanResult.minus(tmp16);
                  } else {
                    minusResult = atanResult.plus(tmp16);
                  }
                  atanResult1 = minusResult;
                } else {
                  atanResult1 = self.atan(callback(s, tmp2, sum, 1));
                }
              }
            }
            const timesResult1 = getPi(self, sum, 1).times(0.5);
            timesResult1.s = s.s;
            atanResult1 = timesResult1;
            const obj4 = getPi(self, sum, 1);
          }
        }
        if (obj.s < 0) {
          let _self = getPi(self, precision, rounding);
        } else {
          const prototype = self.prototype;
          _self = new self(0);
        }
        s = s.s;
        _self.s = s;
      }
      return atanResult1;
    }
    atanResult1 = new self(NaN);
  }
  function cbrt(arg0) {
    return new this(arg0).cbrt();
  }
  function ceil(endImportTime) {
    const tmp = new this(endImportTime);
    finalise(tmp, tmp.e + 1, 2);
    return tmp;
  }
  function clamp(arg0, arg1, arg2) {
    return new this(arg0).clamp(arg1, arg2);
  }
  function config(defaults) {
    let tmp;
    let tmp3;
    const self = this;
    if (defaults) {
      if ("object" === typeof defaults) {
        const items = ["precision", 1, 1000000000, "rounding", 0, 8, "toExpNeg", -9000000000000000, 0, "toExpPos", 0, 9000000000000000, "maxE", 0, 9000000000000000, "minE", -9000000000000000, 0, "modulo", 0, 9];
        let num = 0;
        if (0 < items.length) {
          while (true) {
            tmp = items[num];
            if (tmp12) {
              let tmp2 = obj;
              self[tmp] = obj[tmp];
            }
            tmp3 = defaults[tmp];
            if (undefined !== tmp3) {
              let tmp4 = floor;
              if (floor(tmp3) !== tmp3) {
                break;
              } else if (tmp3 < items[num + 1]) {
                break;
              } else if (tmp3 > items[num + 2]) {
                break;
              } else {
                self[tmp] = tmp3;
              }
            }
            num = num + 3;
          }
          const _Error = Error;
          throw Error(c9 + tmp + ": " + tmp3);
        }
        if (true === defaults.defaults) {
          self.crypto = obj.crypto;
        }
        const _crypto = defaults.crypto;
        if (undefined !== _crypto) {
          if (true !== _crypto) {
            if (false !== _crypto) {
              if (0 !== _crypto) {
                if (1 !== _crypto) {
                  const _Error3 = Error;
                  throw Error(c9 + "crypto" + ": " + _crypto);
                }
              }
            }
          }
          if (_crypto) {
            const _crypto2 = crypto;
            if ("undefined" !== typeof crypto) {
              const _crypto3 = crypto;
              if (crypto) {
                const _crypto4 = crypto;
                if (!crypto.getRandomValues) {
                  const _crypto5 = crypto;
                }
                self.crypto = true;
              }
            }
            const _Error2 = Error;
            throw Error(c11);
          } else {
            self.crypto = false;
          }
        }
        return self;
      }
    }
    throw Error("[DecimalError] Object expected");
  }
  function cos(result) {
    return new this(result).cos();
  }
  function cosh(arg0) {
    return new this(arg0).cosh();
  }
  function div(sqrtResult, sqrtResult) {
    return new this(sqrtResult).div(sqrtResult);
  }
  function exp(arg0) {
    return new this(arg0).exp();
  }
  function floor(arg0) {
    const tmp = new this(arg0);
    finalise(tmp, tmp.e + 1, 3);
    return tmp;
  }
  function hypot(arg0, arg1) {
    const self = this;
    const tmp = new this(0);
    let c8 = false;
    let num = 0;
    let obj = tmp;
    let obj2 = tmp;
    if (0 < arguments.length) {
      while (true) {
        let tmp2 = +num;
        num = tmp2 + 1;
        let prototype = self.prototype;
        let tmp3 = new.target;
        let tmp4 = new.target;
        let _self = new self(arguments[tmp2]);
        let tmp5 = _self;
        if (_self.d) {
          let plusResult = obj;
          if (obj.d) {
            plusResult = obj.plus(_self.times(_self));
          }
        } else {
          plusResult = _self;
          if (_self.s) {
            break;
          }
        }
        obj = plusResult;
        obj2 = plusResult;
      }
      c8 = true;
      const prototype2 = self.prototype;
      const _self1 = new self(Infinity);
      return _self1;
    }
    c8 = true;
    return obj2.sqrt();
  }
  function isDecimalInstance(toStringTag) {
    let flag = toStringTag instanceof closure_1;
    if (!flag) {
      let tmp = toStringTag;
      if (toStringTag) {
        tmp = toStringTag.toStringTag === c12;
      }
      flag = tmp;
    }
    if (!flag) {
      flag = false;
    }
    return flag;
  }
  function ln(arg0) {
    return new this(arg0).ln();
  }
  function log(arg0, arg1) {
    return new this(arg0).log(arg1);
  }
  function log2(arg0) {
    return new this(arg0).log(2);
  }
  function log10(absolute) {
    return new this(absolute).log(10);
  }
  function max() {
    return maxOrMin(this, arguments, -1);
  }
  function min() {
    return maxOrMin(this, arguments, 1);
  }
  function mod(arg0, arg1) {
    return new this(arg0).mod(arg1);
  }
  function mul(arg0) {
    return new this(arg0).mul(arg1);
  }
  function pow(result, closure_0) {
    return new this(result).pow(closure_0);
  }
  function random(arg0) {
    let first;
    let sum;
    let sum2;
    let tmp36;
    let precision = arg0;
    const self = this;
    const tmp = new this(1);
    const items = [];
    if (undefined === arg0) {
      precision = self.precision;
    } else {
      checkInt32(precision, 1, 1000000000);
    }
    const rounded = Math.ceil(precision / 7);
    if (self.crypto) {
      const _crypto = crypto;
      const _crypto2 = crypto;
      if (crypto.getRandomValues) {
        const _Uint32Array = Uint32Array;
        const uint32Array = new Uint32Array(rounded);
        const randomValues = _crypto2.getRandomValues(uint32Array);
        let num18 = 0;
        let num2 = 0;
        if (0 < rounded) {
          do {
            let tmp19 = randomValues[num18];
            if (tmp19 >= 4290000000) {
              let _crypto5 = crypto;
              let _Uint32Array2 = Uint32Array;
              let tmp22 = new.target;
              let tmp23 = new.target;
              let num19 = 1;
              let uint32Array1 = new Uint32Array(1);
              let tmp25 = uint32Array1;
              randomValues[num18] = crypto.getRandomValues(uint32Array1)[0];
              sum = num18;
            } else {
              let tmp20 = +num18;
              sum = tmp20 + 1;
              items[tmp20] = tmp19 % 10000000;
            }
            num18 = sum;
            num2 = sum;
          } while (sum < rounded);
        }
      } else if (_crypto2.randomBytes) {
        const _crypto3 = crypto;
        const result = rounded * 4;
        const randomBytesResult = crypto.randomBytes(result);
        let num14 = 0;
        if (0 < result) {
          do {
            let sum1 = randomBytesResult[num14] + (randomBytesResult[num14 + 1] << 8) + (randomBytesResult[num14 + 2] << 16) + ((127 & randomBytesResult[num14 + 3]) << 24);
            if (sum1 >= 2140000000) {
              let _crypto4 = crypto;
              let randomBytesResult1 = crypto.randomBytes(4);
              let copyResult = randomBytesResult1.copy(randomBytesResult, num14);
              sum2 = num14;
            } else {
              let arr = items.push(sum1 % 10000000);
              sum2 = num14 + 4;
            }
            num14 = sum2;
          } while (sum2 < result);
        }
        num2 = result / 4;
      } else {
        const _Error = Error;
        throw Error(c11);
      }
    } else {
      num2 = 0;
      let num4 = 0;
      if (0 < rounded) {
        do {
          let tmp5 = +num4;
          num4 = tmp5 + 1;
          let _Math = Math;
          items[tmp5] = 10000000 * Math.random() | 0;
          num2 = num4;
        } while (num4 < rounded);
      }
    }
    const result1 = precision % 7;
    const diff = num2 - 1;
    let tmp29 = tmp28;
    if (items[diff]) {
      tmp29 = result1;
    }
    if (tmp29) {
      const tmp31 = pow(10, 7 - result1);
      items[diff] = (tmp28 / tmp31 | 0) * tmp31;
    }
    let tmp32 = diff;
    let tmp33 = diff;
    if (0 === items[diff]) {
      do {
        arr = items.pop();
        let diff1 = tmp32 - 1;
        tmp32 = diff1;
        tmp33 = diff1;
        tmp36 = items[diff1];
      } while (0 === tmp36);
    }
    if (tmp33 < 0) {
      let items1 = [0];
      let num26 = 0;
    } else {
      let num21 = -1;
      let num22 = -1;
      if (0 === items[0]) {
        do {
          let arr1 = items.shift();
          num21 = num21 - 7;
          num22 = num21;
          first = items[0];
        } while (0 === first);
      }
      let first1 = items[0];
      let num24 = 1;
      let num25 = 1;
      while (first1 >= 10) {
        num24 = num24 + 1;
        first1 = first1 / 10;
        num25 = num24;
      }
      num26 = num22;
      items1 = items;
      if (num25 < 7) {
        num26 = num22 - (7 - num25);
        items1 = items;
      }
    }
    tmp.e = num26;
    tmp.d = items1;
    return tmp;
  }
  function round(arg0) {
    const tmp = new this(arg0);
    finalise(tmp, tmp.e + 1, this.rounding);
    return tmp;
  }
  function sign(arg0) {
    const tmp = new this(arg0);
    if (!tmp.d) {
      let _NaN = tmp.s;
      if (!_NaN) {
        _NaN = NaN;
      }
      return _NaN;
    }
  }
  function sin(arg0) {
    return new this(arg0).sin();
  }
  function sinh(arg0) {
    return new this(arg0).sinh();
  }
  function sqrt(length) {
    return new this(length).sqrt();
  }
  function sub(arg0, arg1) {
    return new this(arg0).sub(arg1);
  }
  function sum() {
    const self = this;
    const tmp = new this(arguments[0]);
    let c8 = false;
    let tmp2 = tmp;
    if (tmp.s) {
      let num = 1;
      let obj = tmp;
      tmp2 = tmp;
      if (1 < arguments.length) {
        const plusResult = obj.plus(arguments[num]);
        tmp2 = plusResult;
        while (plusResult.s) {
          num = num + 1;
          obj = plusResult;
          tmp2 = plusResult;
          if (num >= arguments.length) {
            break;
          }
        }
      }
    }
    c8 = true;
    finalise(tmp2, self.precision, self.rounding);
    return tmp2;
  }
  function tan(arg0) {
    return new this(arg0).tan();
  }
  function tanh(arg0) {
    return new this(arg0).tanh();
  }
  function trunc(arg0) {
    const tmp = new this(arg0);
    finalise(tmp, tmp.e + 1, 1);
    return tmp;
  }
  let c5 = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058";
  let cloneResult1 = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789";
  let obj = { precision: 20, rounding: 4, modulo: 1, toExpNeg: -7, toExpPos: 21, minE: -9000000000000000, maxE: 9000000000000000, crypto: false };
  let c8 = true;
  let c9 = "[DecimalError] Invalid argument: ";
  let c10 = "[DecimalError] Precision limit exceeded";
  let c11 = "[DecimalError] crypto unavailable";
  let c12 = "[object Decimal]";
  floor = Math.floor;
  pow = Math.pow;
  const re15 = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i;
  const re16 = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i;
  const re17 = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i;
  const re18 = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
  let c19 = 10000000;
  let closure_20 = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058".length - 1;
  let closure_21 = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789".length - 1;
  obj = { toStringTag: "[object Decimal]" };
  const fn = function() {
    const constructor = new this.constructor(this);
    if (constructor.s < 0) {
      constructor.s = 1;
    }
    finalise(constructor);
    return constructor;
  };
  obj.abs = fn;
  obj.absoluteValue = fn;
  obj.ceil = function() {
    const constructor = new this.constructor(this);
    finalise(constructor, this.e + 1, 2);
    return constructor;
  };
  const fn2 = function(arg0, arg1) {
    const self = this;
    let constructor = this.constructor;
    constructor = new constructor(arg0);
    let obj = constructor;
    const constructor1 = new constructor(arg1);
    if (constructor.s) {
      if (constructor1.s) {
        if (obj.gt(constructor1)) {
          const _Error = Error;
          throw Error(c9 + constructor1);
        } else {
          if (self.cmp(obj) >= 0) {
            let constructor2 = constructor1;
            if (self.cmp(constructor1) <= 0) {
              const prototype = constructor.prototype;
              constructor2 = new constructor(self);
            }
            obj = constructor2;
          }
          return obj;
        }
      }
    }
    const constructor3 = new constructor(NaN);
    return constructor3;
  };
  obj.clamp = fn2;
  obj.clampedTo = fn2;
  const fn3 = function(arg0) {
    let constructor;
    let d;
    const self = this;
    ({ d, constructor } = this);
    constructor = new constructor(arg0);
    d = constructor.d;
    const s = this.s;
    const s2 = constructor.s;
    if (d) {
      if (d) {
        if (d[0]) {
          if (d[0]) {
            if (s !== s2) {
              return s;
            } else if (self.e !== constructor.e) {
              let num10 = -1;
              if (self.e > constructor.e ^ s < 0) {
                num10 = 1;
              }
              return num10;
            } else {
              let tmp4 = length2;
              if (d.length < d.length) {
                tmp4 = length;
              }
              let num6 = 0;
              if (0 < tmp4) {
                while (d[num6] === d[num6]) {
                  num6 = num6 + 1;
                }
                let num9 = -1;
                if (d[num6] > d[num6] ^ s < 0) {
                  num9 = 1;
                }
                return num9;
              }
              let num7 = 0;
              if (d.length !== d.length) {
                let num8 = -1;
                if (length > length2 ^ s < 0) {
                  num8 = 1;
                }
                num7 = num8;
              }
              return num7;
            }
          }
        }
        let tmp3 = s;
        if (!d[0]) {
          let num5 = 0;
          if (d[0]) {
            num5 = -s2;
          }
          tmp3 = num5;
        }
        return tmp3;
      }
    }
    if (s) {
      if (s2) {
        let tmp2 = s;
        if (s === s2) {
          let num2 = 0;
          if (d !== d) {
            let num3 = -1;
            if (!d ^ s < 0) {
              num3 = 1;
            }
            num2 = num3;
          }
          tmp2 = num2;
        }
        let _NaN = tmp2;
      }
      return _NaN;
    }
    _NaN = NaN;
  };
  obj.cmp = fn3;
  obj.comparedTo = fn3;
  const fn4 = function() {
    let precision;
    let rounding;
    let tmp23;
    let self = this;
    let constructor = this.constructor;
    if (this.d) {
      if (self.d[0]) {
        ({ precision, rounding } = constructor);
        const _Math = Math;
        constructor.precision = precision + Math.max(self.e, self.sd()) + 7;
        constructor.rounding = 1;
        const obj = toLessThanHalfPi(constructor, self);
        let obj2 = obj;
        if (!obj.isZero()) {
          let num6 = 16;
          let str = "2.3283064365386962890625e-10";
          if (obj.d.length < 32) {
            const _Math2 = Math;
            const rounded = Math.ceil(length / 3);
            str = 1 / tinyPow(4, rounded).toString();
            num6 = rounded;
            const str2 = 1 / tinyPow(4, rounded);
          }
          constructor.precision = constructor.precision + num6;
          const prototype3 = constructor.prototype;
          constructor = new constructor(1);
          let plusResult = taylorSeries(constructor, 1, obj.times(str), constructor);
          let diff = tmp20 - 1;
          let tmp22 = plusResult;
          if (+num6) {
            do {
              let timesResult1 = plusResult.times(plusResult);
              let timesResult2 = timesResult1.times(timesResult1);
              let minusResult = timesResult2.minus(timesResult1);
              let timesResult3 = minusResult.times(8);
              plusResult = timesResult3.plus(1);
              tmp23 = +diff;
              diff = tmp23 - 1;
              tmp22 = plusResult;
            } while (tmp23);
          }
          constructor.precision = constructor.precision - num6;
          obj2 = tmp22;
          const timesResult = obj.times(str);
        }
        constructor.precision = precision;
        constructor.rounding = rounding;
        self = closure_4;
        if (2 == closure_4) {
          let negResult = obj2.neg();
        } else {
          self = closure_4;
          negResult = obj2;
        }
        constructor = finalise(negResult, precision, rounding, true);
        let constructor1 = negResult;
        const tmp24 = finalise;
      } else {
        const prototype2 = constructor.prototype;
        constructor1 = new constructor(1);
      }
    } else {
      const _NaN = NaN;
      const prototype = constructor.prototype;
      const constructor2 = new constructor(NaN);
      return constructor2;
    }
  };
  obj.cos = fn4;
  obj.cosine = fn4;
  const fn5 = function() {
    const self = this;
    let constructor = this.constructor;
    if (this.isFinite()) {
      if (!self.isZero()) {
        let c8 = false;
        let str = self.s * pow(self.s * self, 0.3333333333333333);
        if (!str) {
          const arr = digitsToString(self.d);
          const e = self.e;
          const result = (e - arr.length + 1) % 3;
          let sum = arr;
          if (result) {
            if (1 === result) {
              let str2 = "0";
            } else {
              str2 = "00";
            }
            sum = arr + str2;
          }
          const obj = pow(sum, 0.3333333333333333);
          let num7 = 2;
          const result1 = e % 3;
          if (e < 0) {
            num7 = -1;
          }
          const diff = floor((e + 1) / 3) - (result1 === num7);
          if (obj == Infinity) {
            let text = `5e${tmp10}`;
          } else {
            const toExponentialResult = obj.toExponential();
            text = toExponentialResult.slice(0, toExponentialResult.indexOf("e") + 1) + diff;
          }
          const prototype = constructor.prototype;
          constructor = new constructor(text);
          constructor.s = self.s;
          const sum1 = constructor.precision + 3;
          const tmp8 = floor((e + 1) / 3);
        } else {
          const _Math = Math;
        }
        const prototype2 = constructor.prototype;
        str = str.toString();
        str = new.target;
        const constructor1 = new constructor(str);
      }
    }
    const constructor2 = new constructor(self);
    return constructor2;
  };
  obj.cbrt = fn5;
  obj.cubeRoot = fn5;
  const fn6 = function() {
    let result2;
    const d = this.d;
    let num = NaN;
    if (d) {
      const diff = d.length - 1;
      const result = 7 * (diff - floor(tmp.e / 7));
      let result1 = d[diff];
      let tmp6 = result;
      if (result1) {
        let diff1 = result;
        tmp6 = result;
        if (result1 % 10 === 0) {
          do {
            diff1 = diff1 - 1;
            result1 = result1 / 10;
            tmp6 = diff1;
            result2 = result1 % 10;
          } while (result2 === 0);
        }
      }
      num = tmp6;
      if (tmp6 < 0) {
        num = 0;
      }
    }
    return num;
  };
  obj.dp = fn6;
  obj.decimalPlaces = fn6;
  const fn7 = function(arg0) {
    const constructor = new this.constructor(arg0);
    return callback(this, constructor);
  };
  obj.div = fn7;
  obj.dividedBy = fn7;
  const fn8 = function(arg0) {
    let constructor = this.constructor;
    constructor = new constructor(arg0);
    const tmp2 = callback(this, constructor, 0, 1, 1);
    finalise(tmp2, constructor.precision, constructor.rounding);
    return tmp2;
  };
  obj.divToInt = fn8;
  obj.dividedToIntegerBy = fn8;
  const fn9 = function(_require1) {
    return 0 === this.cmp(_require1);
  };
  obj.eq = fn9;
  obj.equals = fn9;
  obj.floor = function() {
    const constructor = new this.constructor(this);
    finalise(constructor, this.e + 1, 3);
    return constructor;
  };
  const fn10 = function(_require1) {
    return this.cmp(_require1) > 0;
  };
  obj.gt = fn10;
  obj.greaterThan = fn10;
  const fn11 = function(_require1) {
    const cmpResult = this.cmp(_require1);
    let tmp2 = 1 == cmpResult;
    if (!tmp2) {
      tmp2 = 0 === cmpResult;
    }
    return tmp2;
  };
  obj.gte = fn11;
  obj.greaterThanOrEqualTo = fn11;
  const fn12 = function() {
    let precision;
    let rounding;
    let tmp24;
    const self = this;
    let constructor = this.constructor;
    constructor = new constructor(1);
    if (this.isFinite()) {
      if (self.isZero()) {
        return constructor;
      } else {
        ({ precision, rounding } = constructor);
        const _Math = Math;
        constructor.precision = precision + Math.max(self.e, self.sd()) + 4;
        constructor.rounding = 1;
        let num4 = 16;
        let str = "2.3283064365386962890625e-10";
        if (self.d.length < 32) {
          const _Math2 = Math;
          const rounded = Math.ceil(length / 3);
          str = 1 / tinyPow(4, rounded).toString();
          num4 = rounded;
          const str2 = 1 / tinyPow(4, rounded);
        }
        const prototype2 = constructor.prototype;
        const constructor1 = new constructor(1);
        const tmp17 = taylorSeries(constructor, 1, self.times(str), constructor1, true);
        const prototype3 = constructor.prototype;
        const constructor2 = new constructor(8);
        let diff = tmp21 - 1;
        let minusResult = tmp17;
        let tmp23 = tmp17;
        if (+num4) {
          do {
            let timesResult1 = minusResult.times(minusResult);
            minusResult = constructor.minus(timesResult1.times(constructor2.minus(timesResult1.times(constructor2))));
            tmp24 = +diff;
            diff = tmp24 - 1;
            tmp23 = minusResult;
          } while (tmp24);
        }
        constructor.precision = precision;
        constructor.rounding = rounding;
        finalise(tmp23, precision, rounding, true);
        return tmp23;
      }
    } else {
      let num = Infinity;
      if (!self.s) {
        num = NaN;
      }
      const prototype = constructor.prototype;
      const constructor3 = new constructor(num);
      return constructor3;
    }
  };
  obj.cosh = fn12;
  obj.hyperbolicCosine = fn12;
  const fn13 = function() {
    let precision;
    let rounding;
    let tmp21;
    const self = this;
    let constructor = this.constructor;
    if (this.isFinite()) {
      if (!self.isZero()) {
        ({ precision, rounding } = constructor);
        const _Math = Math;
        constructor.precision = precision + Math.max(self.e, self.sd()) + 4;
        constructor.rounding = 1;
        if (self.d.length < 3) {
          let tmp20 = taylorSeries(constructor, 2, self, self, true);
        } else {
          const _Math2 = Math;
          const result = 1.4 * Math.sqrt(length);
          let num4 = 16;
          if (result <= 16) {
            num4 = result | 0;
          }
          const timesResult = self.times(1 / tinyPow(5, num4));
          const tmp8 = taylorSeries(constructor, 2, timesResult, timesResult, true);
          const prototype = constructor.prototype;
          constructor = new constructor(5);
          const prototype2 = constructor.prototype;
          const constructor1 = new constructor(16);
          const prototype3 = constructor.prototype;
          const constructor2 = new constructor(20);
          let diff = num4 - 1;
          let timesResult3 = tmp8;
          tmp20 = tmp8;
          if (num4) {
            do {
              let timesResult1 = timesResult3.times(timesResult3);
              let timesResult2 = constructor1.times(timesResult1);
              timesResult3 = timesResult3.times(constructor.plus(timesResult1.times(timesResult2.plus(constructor2))));
              tmp21 = +diff;
              diff = tmp21 - 1;
              tmp20 = timesResult3;
            } while (tmp21);
          }
        }
        constructor.precision = precision;
        constructor.rounding = rounding;
        finalise(tmp20, precision, rounding, true);
        return tmp20;
      }
    }
    const constructor3 = new constructor(self);
    return constructor3;
  };
  obj.sinh = fn13;
  obj.hyperbolicSine = fn13;
  const fn14 = function() {
    let precision;
    let rounding;
    const self = this;
    let constructor = this.constructor;
    if (this.isFinite()) {
      if (self.isZero()) {
        const prototype2 = constructor.prototype;
        constructor = new constructor(self);
        let tmp9 = constructor;
      } else {
        ({ precision, rounding } = constructor);
        constructor.precision = precision + 7;
        constructor.rounding = 1;
        constructor.precision = precision;
        constructor.rounding = rounding;
        tmp9 = callback(self.sinh(), self.cosh(), precision, rounding);
        const sinhResult = self.sinh();
      }
    } else {
      const prototype = constructor.prototype;
      constructor = new constructor(self.s);
      return constructor;
    }
  };
  obj.tanh = fn14;
  obj.hyperbolicTangent = fn14;
  const fn15 = function() {
    let precision;
    let rounding;
    const self = this;
    let constructor = this.constructor;
    const cmpResult = this.abs().cmp(1);
    ({ precision, rounding } = constructor);
    if (-1 !== cmpResult) {
      if (0 !== cmpResult) {
        const _NaN = NaN;
        const prototype2 = constructor.prototype;
        constructor = new constructor(NaN);
      }
      if (self.isNeg()) {
        let constructor1 = getPi(constructor, precision, rounding);
      } else {
        const prototype3 = constructor.prototype;
        constructor1 = new constructor(0);
      }
    } else {
      if (self.isZero()) {
        let timesResult = getPi(constructor, precision + 4, rounding).times(0.5);
        const obj7 = getPi(constructor, precision + 4, rounding);
      } else {
        constructor.precision = precision + 6;
        constructor.rounding = 1;
        const prototype = constructor.prototype;
        const constructor2 = new constructor(1);
        const minusResult = constructor2.minus(self);
        const divResult = constructor2.minus(self).div(self.plus(1));
        const sqrtResult = constructor2.minus(self).div(self.plus(1)).sqrt();
        constructor.precision = precision;
        constructor.rounding = rounding;
        timesResult = constructor2.minus(self).div(self.plus(1)).sqrt().atan().times(2);
        const atanResult = constructor2.minus(self).div(self.plus(1)).sqrt().atan();
      }
      return timesResult;
    }
  };
  obj.acos = fn15;
  obj.inverseCosine = fn15;
  const fn16 = function() {
    const self = this;
    let constructor = this.constructor;
    if (this.lte(1)) {
      let num2 = 0;
      if (!self.eq(1)) {
        num2 = NaN;
      }
      const prototype2 = constructor.prototype;
      constructor = new constructor(num2);
    } else if (self.isFinite()) {
      const precision = constructor.precision;
      const _Math = Math;
      const _Math2 = Math;
      const absolute = Math.abs(self.e);
      constructor.precision = precision + Math.max(absolute, self.sd()) + 4;
      constructor.rounding = 1;
      let c8 = false;
      const timesResult = self.times(self);
      const minusResult = self.times(self).minus(1);
      const sqrtResult = self.times(self).minus(1).sqrt();
      c8 = true;
      constructor.precision = precision;
      constructor.rounding = constructor.rounding;
      constructor = self.times(self).minus(1).sqrt().plus(self).ln();
      const plusResult = self.times(self).minus(1).sqrt().plus(self);
    } else {
      const prototype = constructor.prototype;
      constructor = new constructor(self);
    }
    return constructor;
  };
  obj.acosh = fn16;
  obj.inverseHyperbolicCosine = fn16;
  const fn17 = function() {
    const self = this;
    const constructor = this.constructor;
    if (this.isFinite()) {
      if (!self.isZero()) {
        const precision = constructor.precision;
        const _Math = Math;
        const _Math2 = Math;
        const absolute = Math.abs(self.e);
        constructor.precision = precision + 2 * Math.max(absolute, self.sd()) + 6;
        constructor.rounding = 1;
        let c8 = false;
        const timesResult = self.times(self);
        const plusResult = self.times(self).plus(1);
        const sqrtResult = self.times(self).plus(1).sqrt();
        c8 = true;
        constructor.precision = precision;
        constructor.rounding = constructor.rounding;
        let lnResult = self.times(self).plus(1).sqrt().plus(self).ln();
        const plusResult1 = self.times(self).plus(1).sqrt().plus(self);
      }
      return lnResult;
    }
    lnResult = new constructor(self);
  };
  obj.asinh = fn17;
  obj.inverseHyperbolicSine = fn17;
  const fn18 = function() {
    let precision;
    let rounding;
    let self = this;
    let constructor = this.constructor;
    if (this.isFinite()) {
      if (self.e < 0) {
        ({ precision, rounding } = constructor);
        const sdResult = self.sd();
        const _Math = Math;
        if (Math.max(sdResult, precision) < 2 * -self.e - 1) {
          const prototype2 = constructor.prototype;
          constructor = new constructor(self);
          finalise(constructor, precision, rounding, true);
          let timesResult = constructor;
        } else {
          const diff = sdResult - self.e;
          constructor.precision = diff;
          const plusResult = self.plus(1);
          const prototype4 = constructor.prototype;
          const constructor1 = new constructor(1);
          constructor.precision = precision + 4;
          constructor.rounding = 1;
          const obj3 = callback(plusResult, constructor1.minus(self), diff + precision, 1);
          constructor.precision = precision;
          constructor.rounding = rounding;
          timesResult = callback(plusResult, constructor1.minus(self), diff + precision, 1).ln().times(0.5);
          const lnResult = callback(plusResult, constructor1.minus(self), diff + precision, 1).ln();
        }
      }
      if (absResult.eq(1)) {
        let _NaN2 = self.s / 0;
      } else {
        _NaN2 = self;
        if (!self.isZero()) {
          _NaN2 = NaN;
        }
      }
      const prototype3 = constructor.prototype;
      self = new.target;
      const constructor2 = new constructor(_NaN2);
      absResult = self.abs();
    } else {
      const _NaN = NaN;
      const prototype = constructor.prototype;
      const constructor3 = new constructor(NaN);
      return constructor3;
    }
  };
  obj.atanh = fn18;
  obj.inverseHyperbolicTangent = fn18;
  const fn19 = function() {
    let precision;
    let rounding;
    const self = this;
    let constructor = this.constructor;
    if (this.isZero()) {
      const prototype2 = constructor.prototype;
      constructor = new constructor(self);
    } else {
      const cmpResult = self.abs().cmp(1);
      ({ precision, rounding } = constructor);
      if (-1 !== cmpResult) {
        if (0 === cmpResult) {
          const timesResult = getPi(constructor, precision + 4, rounding).times(0.5);
          precision = self.s;
          timesResult.s = precision;
          let constructor1 = timesResult;
          const obj2 = getPi(constructor, precision + 4, rounding);
        } else {
          const _NaN = NaN;
          const prototype = constructor.prototype;
          constructor1 = new constructor(NaN);
        }
      } else {
        constructor.precision = precision + 6;
        constructor.rounding = 1;
        const prototype3 = constructor.prototype;
        const constructor2 = new constructor(1);
        const minusResult = constructor2.minus(self.times(self));
        const sqrtResult = constructor2.minus(self.times(self)).sqrt();
        const divResult = self.div(constructor2.minus(self.times(self)).sqrt().plus(1));
        constructor.precision = precision;
        constructor.rounding = rounding;
        constructor = self.div(constructor2.minus(self.times(self)).sqrt().plus(1)).atan().times(2);
        const atanResult = self.div(constructor2.minus(self.times(self)).sqrt().plus(1)).atan();
      }
      const absResult = self.abs();
    }
    return constructor;
  };
  obj.asin = fn19;
  obj.inverseSine = fn19;
  const fn20 = function() {
    let precision;
    let rounding;
    const self = this;
    let constructor = this.constructor;
    ({ precision, rounding } = constructor);
    if (this.isFinite()) {
      if (self.isZero()) {
        const prototype2 = constructor.prototype;
        constructor = new constructor(self);
        return constructor;
      } else {
        if (absResult.eq(1)) {
          if (precision + 4 <= closure_21) {
            const timesResult = getPi(constructor, precision + 4, rounding).times(0.25);
            timesResult.s = self.s;
            return timesResult;
          }
        }
        absResult = self.abs();
      }
    } else if (self.s) {
      if (precision + 4 <= closure_21) {
        const timesResult1 = getPi(constructor, precision + 4, rounding).times(0.5);
        timesResult1.s = self.s;
        return timesResult1;
      }
    } else {
      const _NaN = NaN;
      const prototype = constructor.prototype;
      const constructor1 = new constructor(NaN);
      return constructor1;
    }
    const sum = precision + 10;
    constructor.precision = sum;
    constructor.rounding = 1;
    const result = sum / 7;
    const bound = Math.min(28, result + 2 | 0);
    let diff = bound;
    let divResult = self;
    let obj4 = self;
    let tmp14 = bound;
    if (bound) {
      do {
        let timesResult2 = divResult.times(divResult);
        let plusResult = timesResult2.plus(1);
        let sqrtResult = plusResult.sqrt();
        divResult = divResult.div(sqrtResult.plus(1));
        diff = diff - 1;
        obj4 = divResult;
        tmp14 = diff;
      } while (diff);
    }
    let c8 = false;
    const rounded = Math.ceil(result);
    const timesResult3 = obj4.times(obj4);
    const constructor2 = new constructor(obj4);
    let obj8 = obj4;
    let num5 = 1;
    let obj9 = constructor2;
    let obj10 = constructor2;
    if (-1 !== tmp14) {
      do {
        let timesResult4 = obj8.times(timesResult3);
        let sum1 = num5 + 2;
        let minusResult = obj9.minus(timesResult4.div(sum1));
        let timesResult5 = timesResult4.times(timesResult3);
        let sum2 = sum1 + 2;
        let plusResult1 = minusResult.plus(timesResult5.div(sum2));
        if (undefined !== plusResult1.d[rounded]) {
          tmp14 = rounded;
          if (plusResult1.d[rounded] === minusResult.d[rounded]) {
            let tmp21 = +rounded;
            let diff1 = tmp21 - 1;
            tmp14 = diff1;
            if (tmp21) {
              tmp14 = diff1;
              while (plusResult1.d[diff1] === minusResult.d[diff1]) {
                let tmp23 = +diff1;
                diff1 = tmp23 - 1;
                tmp14 = diff1;
                if (!tmp23) {
                  break;
                }
              }
            }
          }
        }
        num5 = sum2;
        obj8 = timesResult5;
        obj9 = plusResult1;
        obj10 = plusResult1;
      } while (-1 !== tmp14);
    }
    let timesResult6 = obj10;
    if (bound) {
      timesResult6 = obj10.times(2 << bound - 1);
    }
    c8 = true;
    constructor.precision = precision;
    constructor.rounding = rounding;
    finalise(timesResult6, precision, rounding, true);
    return timesResult6;
  };
  obj.atan = fn20;
  obj.inverseTangent = fn20;
  obj.isFinite = function() {
    return this.d;
  };
  const fn21 = function() {
    const self = this;
    let tmp2 = !tmp;
    if (!!this.d) {
      tmp2 = floor(self.e / 7) > self.d.length - 2;
    }
    return tmp2;
  };
  obj.isInt = fn21;
  obj.isInteger = fn21;
  obj.isNaN = function() {
    return !this.s;
  };
  const fn22 = function() {
    return this.s < 0;
  };
  obj.isNeg = fn22;
  obj.isNegative = fn22;
  const fn23 = function() {
    return this.s > 0;
  };
  obj.isPos = fn23;
  obj.isPositive = fn23;
  obj.isZero = function() {
    let tmp2 = !tmp;
    if (!!this.d) {
      tmp2 = 0 === this.d[0];
    }
    return tmp2;
  };
  const fn24 = function(_require1) {
    return this.cmp(_require1) < 0;
  };
  obj.lt = fn24;
  obj.lessThan = fn24;
  const fn25 = function(_require1) {
    return this.cmp(_require1) < 1;
  };
  obj.lte = fn25;
  obj.lessThanOrEqualTo = fn25;
  const fn26 = function(arg0) {
    let precision;
    let result1;
    let rounding;
    let tmp41;
    const self = this;
    let constructor = this.constructor;
    ({ precision, rounding } = constructor);
    if (null == arg0) {
      const prototype3 = constructor.prototype;
      constructor = new constructor(10);
      let flag = true;
    } else {
      const prototype = constructor.prototype;
      const constructor1 = new constructor(arg0);
      let d = constructor1.d;
      if (constructor1.s >= 0) {
        if (d) {
          if (d[0]) {
            if (!constructor1.eq(1)) {
              flag = constructor1.eq(10);
              constructor = constructor1;
            }
          }
        }
      }
      const _NaN = NaN;
      const prototype2 = constructor.prototype;
      const constructor2 = new constructor(NaN);
      return constructor2;
    }
    d = self.d;
    if (self.s >= 0) {
      if (d) {
        if (d[0]) {
          if (!self.eq(1)) {
            if (flag) {
              let flag2 = true;
              if (d.length <= 1) {
                const first = d[0];
                let tmp14 = first;
                let tmp15 = first;
                if (first % 10 === 0) {
                  do {
                    let result = tmp14 / 10;
                    tmp14 = result;
                    tmp15 = result;
                    result1 = result % 10;
                  } while (result1 === 0);
                }
                flag2 = 1 !== tmp15;
              }
            }
            let c8 = false;
            let sum = precision + 5;
            const tmp20 = naturalLogarithm(self, sum);
            if (flag) {
              let tmp22 = getLn10(constructor, sum + 10);
            } else {
              tmp22 = naturalLogarithm(constructor, sum);
            }
            let tmp29 = callback(tmp20, tmp22, sum, 1);
            let tmp30 = precision;
            if (checkRoundingDigits(tmp29.d, precision, rounding)) {
              while (true) {
                let tmp31 = naturalLogarithm;
                let sum1 = sum + 10;
                let tmp33 = naturalLogarithm(self, sum1);
                if (flag) {
                  let tmp36 = getLn10;
                  let tmp35 = getLn10(constructor, sum1 + 10);
                } else {
                  let tmp34 = naturalLogarithm;
                  tmp35 = naturalLogarithm(constructor, sum1);
                }
                let tmp37 = callback;
                let tmp38 = tmp33;
                let tmp39 = tmp35;
                let tmp40 = sum1;
                let num11 = 1;
                tmp41 = callback(tmp33, tmp35, sum1, 1);
                if (!flag2) {
                  break;
                } else {
                  let tmp45 = checkRoundingDigits;
                  let sum2 = tmp30 + 10;
                  tmp30 = sum2;
                  sum = sum1;
                  tmp29 = tmp41;
                }
              }
              tmp29 = tmp41;
              if (+arr2.slice(tmp30 + 1, tmp30 + 15) + 1 === 100000000000000) {
                finalise(tmp41, precision + 1, 0);
                tmp29 = tmp41;
              }
              arr2 = digitsToString(tmp41.d);
            }
            c8 = true;
            finalise(tmp29, precision, rounding);
            return tmp29;
          }
        }
      }
    }
    if (d) {
      if (!d[0]) {
        const prototype4 = constructor.prototype;
        const constructor3 = new constructor(-Infinity);
        return constructor3;
      }
    }
  };
  obj.log = fn26;
  obj.logarithm = fn26;
  const fn27 = function(arg0) {
    let diff3;
    let first;
    let precision;
    let rounding;
    let tmp37;
    let tmp52;
    const self = this;
    let constructor = this.constructor;
    constructor = new constructor(arg0);
    if (this.d) {
      if (constructor.d) {
        if (self.s != constructor.s) {
          constructor.s = -constructor.s;
          return self.plus(constructor);
        } else {
          const d = self.d;
          const d1 = constructor.d;
          ({ precision, rounding } = constructor);
          if (d[0]) {
            if (d1[0]) {
              const tmp20 = floor(constructor.e / 7);
              const tmp22 = floor(self.e / 7);
              const substr = d.slice();
              const diff = tmp22 - tmp20;
              if (diff) {
                if (diff < 0) {
                  let tmp30 = -diff;
                  let length3 = d1.length;
                  let arr1 = substr;
                  let tmp29 = tmp20;
                } else {
                  length3 = substr.length;
                  arr1 = d1;
                  tmp29 = tmp22;
                  tmp30 = diff;
                }
                const _Math = Math;
                const _Math2 = Math;
                const sum = Math.max(Math.ceil(precision / 7), length3) + 2;
                if (tmp30 > sum) {
                  arr1.length = 1;
                  tmp30 = sum;
                }
                const reversed = arr1.reverse();
                let diff1 = tmp34 - 1;
                if (+tmp30) {
                  do {
                    let arr = arr1.push(0);
                    tmp37 = +diff1;
                    diff1 = tmp37 - 1;
                  } while (tmp37);
                }
                const reversed1 = arr1.reverse();
                let tmp27 = tmp29;
                let num5 = tmp30;
                let tmp25 = tmp28;
              } else {
                let length2 = d1.length;
                if (substr.length < length2) {
                  length2 = length;
                }
                let num4 = 0;
                tmp25 = tmp24;
                if (0 < length2) {
                  while (substr[num4] == d1[num4]) {
                    num4 = num4 + 1;
                    tmp25 = tmp24;
                  }
                  tmp25 = substr[num4] < d1[num4];
                }
                tmp27 = tmp20;
                num5 = 0;
              }
              let arr3 = substr;
              let arr4 = d1;
              if (tmp25) {
                constructor.s = -constructor.s;
                arr3 = d1;
                arr4 = substr;
              }
              let diff2 = arr4.length - length4;
              let sum1 = length4;
              let tmp41 = length4;
              if (diff2 > 0) {
                do {
                  let tmp42 = +sum1;
                  sum1 = tmp42 + 1;
                  arr3[tmp42] = 0;
                  diff2 = diff2 - 1;
                  tmp41 = sum1;
                } while (diff2 > 0);
              }
              let length5 = arr4.length;
              if (length5 > num5) {
                do {
                  diff3 = length5 - 1;
                  if (arr3[diff3] < arr4[diff3]) {
                    let tmp44 = diff3;
                    if (diff3) {
                      let diff4 = diff3 - 1;
                      let tmp46 = diff4;
                      tmp44 = diff4;
                      if (0 === arr3[diff4]) {
                        arr3[tmp46] = 9999999;
                        tmp44 = tmp46;
                        while (tmp46) {
                          let diff5 = tmp46 - 1;
                          tmp46 = diff5;
                          tmp44 = diff5;
                          if (0 !== arr3[diff5]) {
                            break;
                          }
                        }
                      }
                    }
                    arr3[tmp44] = arr3[tmp44] - 1;
                    let tmp48 = c19;
                    arr3[diff3] = arr3[diff3] + c19;
                    let tmp49 = tmp44;
                  }
                  arr3[diff3] = arr3[diff3] - arr4[diff3];
                  length5 = diff3;
                } while (diff3 > num5);
              }
              let diff6 = tmp41 - 1;
              if (0 === arr3[diff6]) {
                do {
                  arr = arr3.pop();
                  diff6 = diff6 - 1;
                  tmp52 = arr3[diff6];
                } while (0 === tmp52);
              }
              let diff7 = tmp27;
              let tmp54 = tmp27;
              if (0 === arr3[0]) {
                do {
                  diff7 = diff7 - 1;
                  arr1 = arr3.shift();
                  tmp54 = diff7;
                  first = arr3[0];
                } while (0 === first);
              }
              if (arr3[0]) {
                constructor.d = arr3;
                constructor.e = getBase10Exponent(arr3, tmp54);
                let constructor1 = constructor;
                if (c8) {
                  finalise(constructor, precision, rounding);
                  constructor1 = constructor;
                }
              } else {
                let num10 = 0;
                if (3 === rounding) {
                  num10 = -0;
                }
                const prototype4 = constructor.prototype;
                constructor1 = new constructor(num10);
              }
              return constructor1;
            }
          }
          if (d1[0]) {
            constructor.s = -constructor.s;
            let constructor2 = constructor;
          } else if (d[0]) {
            const prototype3 = constructor.prototype;
            constructor2 = new constructor(self);
          } else {
            let num2 = 0;
            if (3 === rounding) {
              num2 = -0;
            }
            const prototype2 = constructor.prototype;
            const constructor3 = new constructor(num2);
            return constructor3;
          }
          if (c8) {
            finalise(constructor2, precision, rounding);
          }
          return constructor2;
        }
      }
    }
    if (self.s) {
      if (constructor.s) {
        if (self.d) {
          constructor.s = -constructor.s;
          let constructor4 = constructor;
        } else {
          let _NaN = self;
          if (!constructor.d) {
            _NaN = self;
            if (self.s === constructor.s) {
              _NaN = NaN;
            }
          }
          const prototype = constructor.prototype;
          constructor4 = new constructor(_NaN);
        }
      }
      return constructor4;
    }
    constructor4 = new constructor(NaN);
  };
  obj.sub = fn27;
  obj.minus = fn27;
  const fn28 = function(arg0) {
    const self = this;
    let constructor = this.constructor;
    constructor = new constructor(arg0);
    if (this.d) {
      if (constructor.s) {
        if (!constructor.d) {
          const prototype = constructor.prototype;
          const constructor1 = new constructor(self);
          finalise(constructor1, constructor.precision, constructor.rounding);
        }
        let c8 = false;
        if (9 == constructor.modulo) {
          const tmp15 = callback(self, constructor.abs(), 0, 3, 1);
          tmp15.s = tmp15.s * constructor.s;
          let obj2 = tmp15;
        } else {
          obj2 = callback(self, tmp, 0, constructor.modulo, 1);
        }
        c8 = true;
        self.minus(obj2.times(constructor));
      }
    }
    const constructor2 = new constructor(NaN);
    return constructor2;
  };
  obj.mod = fn28;
  obj.modulo = fn28;
  const fn29 = function() {
    return naturalExponential(this);
  };
  obj.exp = fn29;
  obj.naturalExponential = fn29;
  const fn30 = function() {
    return naturalLogarithm(this);
  };
  obj.ln = fn30;
  obj.naturalLogarithm = fn30;
  const fn31 = function() {
    const constructor = new this.constructor(this);
    constructor.s = -constructor.s;
    finalise(constructor);
    return constructor;
  };
  obj.neg = fn31;
  obj.negated = fn31;
  const fn32 = function(arg0) {
    let precision;
    let rounding;
    let tmp28;
    let tmp38;
    const self = this;
    let constructor = this.constructor;
    constructor = new constructor(arg0);
    if (this.d) {
      if (constructor.d) {
        if (self.s != constructor.s) {
          constructor.s = -constructor.s;
          return self.minus(constructor);
        } else {
          const d = self.d;
          const d1 = constructor.d;
          ({ precision, rounding } = constructor);
          if (d[0]) {
            if (d1[0]) {
              let tmp15 = floor(self.e / 7);
              const tmp17 = floor(constructor.e / 7);
              const substr = d.slice();
              const diff = tmp15 - tmp17;
              let tmp19 = tmp17;
              if (diff) {
                if (diff < 0) {
                  let tmp20 = -diff;
                  let length = d1.length;
                  let arr1 = substr;
                  tmp15 = tmp17;
                } else {
                  length = substr.length;
                  arr1 = d1;
                  tmp20 = diff;
                }
                const _Math = Math;
                const rounded = Math.ceil(precision / 7);
                if (rounded > length) {
                  let sum = rounded + 1;
                } else {
                  sum = length + 1;
                }
                if (tmp20 > sum) {
                  arr1.length = 1;
                  tmp20 = sum;
                }
                const reversed = arr1.reverse();
                let diff1 = tmp25 - 1;
                if (+tmp20) {
                  do {
                    let arr = arr1.push(0);
                    tmp28 = +diff1;
                    diff1 = tmp28 - 1;
                  } while (tmp28);
                }
                const reversed1 = arr1.reverse();
                tmp19 = tmp15;
              }
              let length3 = d1.length;
              let arr3 = substr;
              let tmp30 = d1;
              if (substr.length - length3 < 0) {
                length3 = length2;
                arr3 = d1;
                tmp30 = substr;
              }
              let num5 = 0;
              let num6 = 0;
              while (length3) {
                length3 = length3 - 1;
                let sum1 = arr3[length3] + tmp30[length3] + num5;
                arr3[length3] = sum1;
                let tmp32 = c19;
                num5 = sum1 / c19 | 0;
                let tmp33 = c19;
                arr3[length3] = arr3[length3] % c19;
                num6 = num5;
              }
              let sum2 = tmp19;
              if (num6) {
                arr3.unshift(num6);
                sum2 = tmp19 + 1;
              }
              let diff2 = arr3.length - 1;
              if (0 == arr3[diff2]) {
                do {
                  arr1 = arr3.pop();
                  diff2 = diff2 - 1;
                  tmp38 = arr3[diff2];
                } while (0 == tmp38);
              }
              constructor.d = arr3;
              constructor.e = getBase10Exponent(arr3, sum2);
              if (c8) {
                finalise(constructor, precision, rounding);
              }
              return constructor;
            }
          }
          let constructor1 = constructor;
          if (!d1[0]) {
            const prototype2 = constructor.prototype;
            constructor1 = new constructor(self);
          }
          if (c8) {
            finalise(constructor1, precision, rounding);
          }
          return constructor1;
        }
      }
    }
    if (self.s) {
      if (constructor.s) {
        let constructor2 = constructor;
        if (!self.d) {
          let _NaN = self;
          if (!constructor.d) {
            _NaN = self;
            if (self.s !== constructor.s) {
              _NaN = NaN;
            }
          }
          const prototype = constructor.prototype;
          constructor2 = new constructor(_NaN);
        }
      }
      return constructor2;
    }
    constructor2 = new constructor(NaN);
  };
  obj.add = fn32;
  obj.plus = fn32;
  const fn33 = function(arg0) {
    const self = this;
    if (undefined !== arg0) {
      if (arg0 !== arg0) {
        if (1 !== arg0) {
          if (0 !== arg0) {
            const _Error = Error;
            throw Error(c9 + arg0);
          }
        }
      }
    }
    if (self.d) {
      const tmp3 = getPrecision(self.d);
      let tmp4 = arg0;
      if (arg0) {
        tmp4 = self.e + 1 > tmp3;
      }
      let _NaN = tmp3;
      if (tmp4) {
        _NaN = self.e + 1;
      }
    } else {
      _NaN = NaN;
    }
    return _NaN;
  };
  obj.sd = fn33;
  obj.precision = fn33;
  obj.round = function() {
    let constructor = this.constructor;
    constructor = new constructor(this);
    finalise(constructor, this.e + 1, constructor.rounding);
    return constructor;
  };
  const fn34 = function() {
    let precision;
    let rounding;
    let tmp26;
    const self = this;
    let constructor = this.constructor;
    if (this.isFinite()) {
      if (self.isZero()) {
        const prototype5 = constructor.prototype;
        constructor = new constructor(self);
        let negResult = constructor;
      } else {
        ({ precision, rounding } = constructor);
        const _Math = Math;
        constructor.precision = precision + Math.max(self.e, self.sd()) + 7;
        constructor.rounding = 1;
        const obj = toLessThanHalfPi(constructor, self);
        if (obj.d.length < 3) {
          let tmp27 = obj;
          if (!obj.isZero()) {
            tmp27 = taylorSeries(constructor, 2, obj, obj);
          }
          let obj5 = tmp27;
        } else {
          const _Math2 = Math;
          const result = 1.4 * Math.sqrt(length);
          let num4 = 16;
          if (result <= 16) {
            num4 = result | 0;
          }
          const timesResult = obj.times(1 / tinyPow(5, num4));
          const tmp14 = taylorSeries(constructor, 2, timesResult, timesResult);
          const prototype2 = constructor.prototype;
          constructor = new constructor(5);
          const prototype3 = constructor.prototype;
          const constructor1 = new constructor(16);
          const prototype4 = constructor.prototype;
          const constructor2 = new constructor(20);
          let diff = num4 - 1;
          let timesResult3 = tmp14;
          obj5 = tmp14;
          if (num4) {
            do {
              let timesResult1 = timesResult3.times(timesResult3);
              let timesResult2 = constructor1.times(timesResult1);
              timesResult3 = timesResult3.times(constructor.plus(timesResult1.times(timesResult2.minus(constructor2))));
              tmp26 = +diff;
              diff = tmp26 - 1;
              obj5 = timesResult3;
            } while (tmp26);
          }
        }
        constructor.precision = precision;
        constructor.rounding = rounding;
        negResult = obj5;
        if (closure_4 > 2) {
          negResult = obj5.neg();
        }
        finalise(negResult, precision, rounding, true);
        const tmp32 = finalise;
      }
    } else {
      const _NaN = NaN;
      const prototype = constructor.prototype;
      const constructor3 = new constructor(NaN);
      return constructor3;
    }
  };
  obj.sin = fn34;
  obj.sine = fn34;
  const fn35 = function() {
    let constructor;
    let d;
    let e;
    let s;
    const self = this;
    ({ d, e, s, constructor } = this);
    if (1 === s) {
      if (d) {
        if (d[0]) {
          let c8 = false;
          const _Math = Math;
          const str = Math.sqrt(+self);
          if (0 != str) {
            if (str != Infinity) {
              const prototype = constructor.prototype;
              constructor = new constructor(str.toString());
              const sum = constructor.precision + 3;
            }
          }
          const arr = digitsToString(d);
          let text = arr;
          if ((arr.length + e) % 2 === 0) {
            text = `${arr}0`;
          }
          const _Math2 = Math;
          const sqrtResult = Math.sqrt(text);
          let result = e < 0;
          if (!result) {
            result = e % 2;
          }
          const diff = floor((e + 1) / 2) - result;
          if (sqrtResult == Infinity) {
            let text1 = `5e${tmp10}`;
          } else {
            const toExponentialResult = sqrtResult.toExponential();
            text1 = toExponentialResult.slice(0, toExponentialResult.indexOf("e") + 1) + diff;
          }
          const prototype2 = constructor.prototype;
          const constructor1 = new constructor(text1);
          const tmp8 = floor((e + 1) / 2);
        }
      }
    }
    if (s) {
      if (s >= 0) {
        let num10 = Infinity;
        if (d) {
          num10 = self;
        }
      }
      const prototype3 = constructor.prototype;
      const constructor2 = new constructor(num10);
      return constructor2;
    }
    num10 = NaN;
  };
  obj.sqrt = fn35;
  obj.squareRoot = fn35;
  const fn36 = function() {
    let precision;
    let rounding;
    const self = this;
    let constructor = this.constructor;
    if (this.isFinite()) {
      if (self.isZero()) {
        const prototype3 = constructor.prototype;
        constructor = new constructor(self);
        let negResult = constructor;
      } else {
        ({ precision, rounding } = constructor);
        constructor.precision = precision + 10;
        constructor.rounding = 1;
        const sinResult = self.sin();
        sinResult.s = 1;
        const prototype2 = constructor.prototype;
        constructor = new constructor(1);
        const obj4 = callback(sinResult, constructor.minus(sinResult.times(sinResult)).sqrt(), precision + 10, 0);
        constructor.precision = precision;
        constructor.rounding = rounding;
        if (2 == closure_4) {
          negResult = obj4.neg();
        } else {
          negResult = obj4;
        }
        finalise(negResult, precision, rounding, true);
        const minusResult = constructor.minus(sinResult.times(sinResult));
        const tmp11 = finalise;
      }
    } else {
      const _NaN = NaN;
      const prototype = constructor.prototype;
      const constructor1 = new constructor(NaN);
      return constructor1;
    }
  };
  obj.tan = fn36;
  obj.tangent = fn36;
  const fn37 = function(arg0) {
    let constructor;
    let d;
    let tmp16;
    let tmp28;
    ({ constructor, d } = this);
    constructor = new constructor(arg0);
    d = constructor.d;
    constructor.s = constructor.s * this.s;
    if (d) {
      if (d[0]) {
        if (d) {
          if (d[0]) {
            const sum = floor(this.e / 7) + floor(constructor.e / 7);
            let tmp8 = length;
            let tmp9 = d;
            let tmp10 = d;
            let tmp11 = length2;
            if (d.length < d.length) {
              tmp8 = length2;
              tmp11 = length;
              tmp9 = d;
              tmp10 = d;
            }
            const items = [];
            const sum1 = tmp8 + tmp11;
            let diff = tmp13 - 1;
            if (+sum1) {
              do {
                let arr = items.push(0);
                tmp16 = +diff;
                diff = tmp16 - 1;
              } while (tmp16);
            }
            let diff1 = tmp11 - 1;
            let tmp18;
            if (diff1 >= 0) {
              do {
                let sum2 = tmp8 + diff1;
                let num9 = 0;
                let num10 = 0;
                let tmp20 = sum2;
                if (sum2 > diff1) {
                  do {
                    let sum3 = items[sum2] + tmp10[diff1] * tmp9[sum2 - diff1 - 1] + num9;
                    let tmp22 = +sum2;
                    sum2 = tmp22 - 1;
                    let tmp23 = c19;
                    items[tmp22] = sum3 % c19 | 0;
                    let tmp24 = c19;
                    num9 = sum3 / c19 | 0;
                    num10 = num9;
                    tmp20 = sum2;
                  } while (sum2 > diff1);
                }
                let tmp25 = c19;
                items[tmp20] = (items[tmp20] + num10) % c19 | 0;
                diff1 = diff1 - 1;
                tmp18 = num10;
              } while (diff1 >= 0);
            }
            let diff2 = sum1 - 1;
            if (!items[diff2]) {
              do {
                arr = items.pop();
                diff2 = diff2 - 1;
                tmp28 = items[diff2];
              } while (!tmp28);
            }
            if (tmp18) {
              let sum4 = sum + 1;
            } else {
              items.shift();
              sum4 = sum;
            }
            constructor.d = items;
            constructor.e = getBase10Exponent(items, sum4);
            if (c8) {
              finalise(constructor, constructor.precision, constructor.rounding);
            }
            return constructor;
          }
        }
      }
    }
    if (constructor.s) {
      if (!d) {
        let num5 = constructor.s / 0;
      }
      const s = constructor.s;
      num5 = 0;
    }
    const constructor1 = new constructor(NaN);
    return constructor1;
  };
  obj.mul = fn37;
  obj.times = fn37;
  obj.toBinary = function(arg0, arg1) {
    return toStringBinary(this, 2, arg0, arg1);
  };
  const fn38 = function(arg0, rounding) {
    let sum = arg0;
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
      constructor = finalise;
      sum = sum + constructor.e;
      finalise(constructor, sum + 1, rounding);
    }
  };
  obj.toDP = fn38;
  obj.toDecimalPlaces = fn38;
  obj.toExponential = function(arg0, rounding) {
    const self = this;
    let constructor = this.constructor;
    if (undefined === arg0) {
      let tmp12 = finiteToString(self, true);
      let obj = self;
    } else {
      checkInt32(arg0, 0, 1000000000);
      if (undefined === rounding) {
        rounding = constructor.rounding;
      } else {
        checkInt32(rounding, 0, 8);
      }
      const prototype = constructor.prototype;
      constructor = new constructor(self);
      obj = constructor;
      finalise(constructor, arg0 + 1, rounding);
      tmp12 = finiteToString(constructor, true, arg0 + 1);
    }
    let text = tmp12;
    if (obj.isNeg()) {
      text = tmp12;
      if (!obj.isZero()) {
        text = `-${tmp12}`;
      }
    }
    return text;
  };
  obj.toFixed = function(arg0, rounding) {
    const self = this;
    let constructor = this.constructor;
    if (undefined === arg0) {
      let tmp11 = finiteToString(self);
    } else {
      checkInt32(arg0, 0, 1000000000);
      if (undefined === rounding) {
        rounding = constructor.rounding;
      } else {
        checkInt32(rounding, 0, 8);
      }
      const prototype = constructor.prototype;
      constructor = new constructor(self);
      finalise(constructor, arg0 + self.e + 1, rounding);
      tmp11 = finiteToString(constructor, false, arg0 + constructor.e + 1);
    }
    let text = tmp11;
    if (self.isNeg()) {
      text = tmp11;
      if (!self.isZero()) {
        text = `-${tmp11}`;
      }
    }
    return text;
  };
  obj.toFraction = function(arg0) {
    let cmpResult;
    let constructor;
    let d;
    const self = this;
    ({ d, constructor } = this);
    if (d) {
      constructor = new constructor(1);
      const prototype = constructor.prototype;
      const constructor1 = new constructor(0);
      const prototype2 = constructor.prototype;
      const constructor2 = new constructor(constructor1);
      const diff = getPrecision(d) - self.e - 1;
      constructor2.e = diff;
      const result = diff % 7;
      let sum = result;
      if (result < 0) {
        sum = 7 + result;
      }
      constructor2.d[0] = pow(10, sum);
      if (null == arg0) {
        let tmp30 = constructor;
        if (diff > 0) {
          tmp30 = constructor2;
        }
        let obj3 = tmp30;
      } else {
        const prototype3 = constructor.prototype;
        const constructor3 = new constructor(arg0);
        if (constructor3.isInt()) {
          if (!constructor3.lt(constructor)) {
            obj3 = constructor3;
            if (constructor3.gt(constructor2)) {
              let tmp27 = constructor;
              if (diff > 0) {
                tmp27 = constructor2;
              }
              obj3 = tmp27;
            }
          }
        }
        const _Error = Error;
        throw Error(c9 + constructor3);
      }
      let c8 = false;
      const prototype4 = constructor.prototype;
      const constructor4 = new constructor(digitsToString(d));
      const result1 = 7 * d.length * 2;
      constructor.precision = result1;
      let obj4 = callback(constructor4, constructor2, 0, 1, 1);
      const plusResult = constructor.plus(obj4.times(constructor1));
      let tmp40 = constructor2;
      let obj6 = constructor1;
      let tmp41 = plusResult;
      let obj7 = constructor4;
      let obj8 = constructor1;
      let tmp42 = constructor;
      let obj9 = constructor;
      let tmp43 = constructor1;
      let obj10 = constructor1;
      let tmp44 = constructor;
      if (1 != plusResult.cmp(obj3)) {
        do {
          let plusResult1 = obj8.plus(obj4.times(tmp42));
          let minusResult = obj7.minus(obj4.times(tmp40));
          let tmp47 = callback;
          let tmp48 = tmp40;
          let tmp49 = minusResult;
          let num11 = 0;
          let num12 = 1;
          let num13 = 1;
          let obj11 = callback(tmp40, minusResult, 0, 1, 1);
          let plusResult2 = obj6.plus(obj11.times(tmp41));
          obj7 = tmp40;
          obj9 = obj6;
          obj6 = tmp41;
          obj8 = tmp42;
          tmp40 = minusResult;
          tmp41 = plusResult2;
          tmp42 = plusResult1;
          obj4 = obj11;
          tmp43 = obj6;
          obj10 = obj8;
          tmp44 = plusResult1;
          cmpResult = plusResult2.cmp(obj3);
        } while (1 != cmpResult);
      }
      const obj13 = callback(obj3.minus(obj9), tmp43, 0, 1, 1);
      const plusResult3 = obj10.plus(obj13.times(tmp44));
      const plusResult4 = obj9.plus(obj13.times(tmp43));
      const s = self.s;
      tmp44.s = s;
      plusResult3.s = s;
      const obj14 = callback(tmp44, tmp43, result1, 1);
      const tmp16 = constructor2;
      const tmp20 = pow;
      const minusResult1 = callback(tmp44, tmp43, result1, 1).minus(self);
      const absResult = callback(tmp44, tmp43, result1, 1).minus(self).abs();
      const obj17 = callback(plusResult3, plusResult4, result1, 1);
      if (absResult.cmp(minusResult2.abs()) < 1) {
        const items = [tmp44, tmp43];
        let items1 = items;
      } else {
        items1 = [plusResult3, plusResult4];
      }
      constructor.precision = constructor.precision;
      c8 = true;
      return items1;
    } else {
      const constructor5 = new constructor(self);
      return constructor5;
    }
  };
  const fn39 = function(arg0, arg1) {
    return toStringBinary(this, 16, arg0, arg1);
  };
  obj.toHex = fn39;
  obj.toHexadecimal = fn39;
  obj.toNearest = function(arg0, arg1) {
    let constructor = this.constructor;
    constructor = new constructor(this);
    if (null == arg0) {
      if (constructor.d) {
        const prototype2 = constructor.prototype;
        let constructor1 = new constructor(1);
        let rounding = constructor.rounding;
      } else {
        return constructor;
      }
    } else {
      const prototype = constructor.prototype;
      const constructor2 = new constructor(arg0);
      if (undefined === arg1) {
        rounding = constructor.rounding;
      } else {
        checkInt32(arg1, 0, 8);
        rounding = arg1;
      }
      if (constructor.d) {
        constructor1 = constructor2;
        if (!constructor2.d) {
          if (constructor2.s) {
            constructor2.s = constructor.s;
          }
          return constructor2;
        }
      } else {
        let tmp9 = constructor2;
        if (constructor2.s) {
          tmp9 = constructor;
        }
        return tmp9;
      }
    }
    if (constructor1.d[0]) {
      let c8 = false;
      const timesResult = callback(constructor, constructor1, 0, rounding, 1).times(constructor1);
      c8 = true;
      finalise(timesResult);
      let tmp13 = timesResult;
      const obj = callback(constructor, constructor1, 0, rounding, 1);
    } else {
      constructor1.s = constructor.s;
      tmp13 = constructor1;
    }
    return tmp13;
  };
  obj.toNumber = function() {
    return +this;
  };
  obj.toOctal = function(arg0, arg1) {
    return toStringBinary(this, 8, arg0, arg1);
  };
  const fn40 = function(arg0) {
    let precision;
    let rounding;
    const self = this;
    let constructor = this.constructor;
    constructor = new constructor(arg0);
    if (this.d) {
      if (constructor.d) {
        if (self.d[0]) {
          if (constructor.d[0]) {
            const prototype = constructor.prototype;
            const constructor1 = new constructor(self);
            if (constructor1.eq(1)) {
              return constructor1;
            } else {
              ({ precision, rounding } = constructor);
              if (constructor.eq(1)) {
                finalise(constructor1, precision, rounding);
                return constructor1;
              } else {
                const tmp8 = floor(constructor.e / 7);
                if (tmp8 >= constructor.d.length - 1) {
                  let tmp9 = tmp;
                  if (tmp < 0) {
                    tmp9 = -tmp;
                  }
                  if (tmp9 <= 9007199254740991) {
                    const tmp49 = intPow(constructor, tmp6, tmp9, precision);
                    if (constructor.s < 0) {
                      const prototype5 = constructor.prototype;
                      const constructor2 = new constructor(1);
                      let divResult = constructor2.div(tmp49);
                    } else {
                      finalise(tmp49, precision, rounding);
                      divResult = tmp49;
                    }
                    return divResult;
                  }
                }
                let num5 = constructor1.s;
                let tmp10 = num5;
                if (num5 < 0) {
                  if (tmp8 < constructor.d.length - 1) {
                    const _NaN = NaN;
                    const prototype4 = constructor.prototype;
                    const constructor3 = new constructor(NaN);
                    return constructor3;
                  } else {
                    if (!(1 & constructor.d[tmp8])) {
                      num5 = 1;
                    }
                    tmp10 = num5;
                    if (0 == constructor1.e) {
                      tmp10 = num5;
                      if (1 == constructor1.d[0]) {
                        tmp10 = num5;
                        if (1 == constructor1.d.length) {
                          constructor1.s = num5;
                          return constructor1;
                        }
                      }
                    }
                  }
                }
                const tmp12 = pow(+constructor1, tmp);
                if (0 != tmp12) {
                  const _isFinite = isFinite;
                  if (isFinite(tmp12)) {
                    const prototype2 = constructor.prototype;
                    const constructor4 = new constructor("" + tmp12);
                    let e = constructor4.e;
                  }
                  if (e <= constructor.maxE + 1) {
                    if (e >= constructor.minE - 1) {
                      let c8 = false;
                      constructor1.s = 1;
                      constructor.rounding = 1;
                      const _Math3 = Math;
                      const bound = Math.min(12, "" + e.length);
                      let constructor5 = naturalExponential(constructor.times(naturalLogarithm(constructor1, precision + bound)), precision);
                      let d = constructor5.d;
                      if (d) {
                        finalise(constructor5, precision + 5, 1);
                        d = checkRoundingDigits(constructor5.d, precision, rounding);
                      }
                      if (d) {
                        const sum = precision + 10;
                        const tmp29 = naturalExponential(constructor.times(naturalLogarithm(constructor1, sum + bound)), sum);
                        finalise(tmp29, sum + 5, 1);
                        constructor5 = tmp29;
                        if (+arr.slice(precision + 1, precision + 15) + 1 === 100000000000000) {
                          finalise(tmp29, precision + 1, 0);
                          constructor5 = tmp29;
                        }
                        arr = digitsToString(tmp29.d);
                      }
                      constructor5.s = tmp10;
                      c8 = true;
                      constructor.rounding = rounding;
                      finalise(constructor5, precision, rounding);
                    }
                    return constructor5;
                  }
                  let num11 = 0;
                  if (e > 0) {
                    num11 = tmp10 / 0;
                  }
                  const prototype3 = constructor.prototype;
                  constructor5 = new constructor(num11);
                }
                const _Math = Math;
                const _Math2 = Math;
                e = floor(tmp * (Math.log(`0.${digitsToString(obj2.d)}`) / Math.LN10 + constructor1.e + 1));
              }
            }
            tmp6 = constructor1;
          }
        }
      }
    }
    const constructor6 = new constructor(pow(+self, tmp));
    return constructor6;
  };
  obj.pow = fn40;
  obj.toPower = fn40;
  obj.toPrecision = function(precision, rounding) {
    const self = this;
    let constructor = this.constructor;
    if (undefined === precision) {
      let tmp13 = self.e <= constructor.toExpNeg;
      if (!tmp13) {
        tmp13 = self.e >= constructor.toExpPos;
      }
      let tmp3Result = finiteToString(self, tmp13);
      let obj = self;
      const tmp12 = finiteToString;
    } else {
      checkInt32(precision, 1, 1000000000);
      if (undefined === rounding) {
        rounding = constructor.rounding;
      } else {
        checkInt32(rounding, 0, 8);
      }
      const prototype = constructor.prototype;
      constructor = new constructor(self);
      obj = constructor;
      finalise(constructor, precision, rounding);
      tmp3Result = finiteToString(obj, precision <= constructor.e || obj.e <= constructor.toExpNeg, precision);
      const tmp10 = precision <= constructor.e || obj.e <= constructor.toExpNeg;
      const tmp3 = finiteToString;
    }
    let text = tmp3Result;
    if (obj.isNeg()) {
      text = tmp3Result;
      if (!obj.isZero()) {
        text = `-${tmp11}`;
      }
    }
    return text;
  };
  const fn41 = function(precision, rounding) {
    const self = this;
    let constructor = this.constructor;
    if (undefined === precision) {
      ({ precision, rounding } = constructor);
    } else {
      checkInt32(precision, 1, 1000000000);
      if (undefined === rounding) {
        rounding = constructor.rounding;
      } else {
        checkInt32(rounding, 0, 8);
      }
    }
    constructor = new constructor(self);
    finalise(constructor, precision, rounding);
    return constructor;
  };
  obj.toSD = fn41;
  obj.toSignificantDigits = fn41;
  obj.toString = function() {
    const self = this;
    const constructor = this.constructor;
    let tmp2 = this.e <= constructor.toExpNeg;
    if (!tmp2) {
      tmp2 = self.e >= constructor.toExpPos;
    }
    const tmpResult = finiteToString(self, tmp2);
    let text = tmpResult;
    if (self.isNeg()) {
      text = tmpResult;
      if (!self.isZero()) {
        text = `-${tmp3}`;
      }
    }
    return text;
  };
  const fn42 = function() {
    const constructor = new this.constructor(this);
    finalise(constructor, this.e + 1, 1);
    return constructor;
  };
  obj.trunc = fn42;
  obj.truncated = fn42;
  const fn43 = function() {
    const self = this;
    const constructor = this.constructor;
    let tmp2 = this.e <= constructor.toExpNeg;
    if (!tmp2) {
      tmp2 = self.e >= constructor.toExpPos;
    }
    let text = finiteToString(self, tmp2);
    if (self.isNeg()) {
      text = `-${tmp3}`;
    }
    return text;
  };
  obj.toJSON = fn43;
  obj.valueOf = fn43;
  let closure_23 = (() => {
    function multiplyInteger(arr) {
      let tmp4;
      const substr = arr.slice();
      let diff = tmp - 1;
      let num = 0;
      let num2 = 0;
      if (+arr.length) {
        do {
          let sum = substr[diff] * arg1 + num;
          substr[diff] = sum % arg2 | 0;
          num = sum / arg2 | 0;
          tmp4 = +diff;
          diff = tmp4 - 1;
          num2 = num;
        } while (tmp4);
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
      let tmp3;
      let diff = tmp - 1;
      let num = 0;
      if (+arg2) {
        do {
          arr[diff] = arr[diff] - num;
          num = 0;
          if (arr[diff] < arg1[diff]) {
            num = 1;
          }
          arr[diff] = num * arg3 + arr[diff] - arg1[diff];
          tmp3 = +diff;
          diff = tmp3 - 1;
        } while (tmp3);
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
      let num12;
      let precision;
      let rounding;
      precision = arg2;
      rounding = arg3;
      let constructor = s.constructor;
      let num = -1;
      if (s.s == s2.s) {
        num = 1;
      }
      const d = s.d;
      const d1 = s2.d;
      if (d) {
        if (d[0]) {
          if (d1) {
            if (d1[0]) {
              if (arg5) {
                let diff = s.e - s2.e;
                let num8 = 1;
                let tmp5 = arg5;
              } else {
                tmp5 = outer1_19;
                num8 = 7;
                diff = outer1_13(s.e / 7) - outer1_13(s2.e / 7);
                const tmp7 = outer1_13(s.e / 7);
              }
              let length = d1.length;
              const prototype = constructor.prototype;
              constructor = new constructor(num);
              const items = [];
              constructor.d = items;
              let num9 = d[0];
              if (!num9) {
                num9 = 0;
              }
              let num10 = 0;
              let num11 = 0;
              if (d1[0] == num9) {
                do {
                  sum = num10 + 1;
                  num12 = d[sum];
                  if (!num12) {
                    num12 = 0;
                  }
                  num10 = sum;
                  num11 = sum;
                } while (d1[sum] == num12);
              }
              let num13 = d[num11];
              if (!num13) {
                num13 = 0;
              }
              let diff1 = diff;
              if (d1[num11] > num13) {
                diff1 = diff - 1;
              }
              if (null == precision) {
                ({ precision, rounding } = constructor);
                let sum1 = precision;
              } else {
                sum1 = precision;
                if (arg4) {
                  sum1 = precision + (s.e - s2.e) + 1;
                }
              }
              if (sum1 < 0) {
                sum = items.push(1);
                let flag = true;
              } else {
                sum = sum1 / num8 + 2 | 0;
                if (1 == length) {
                  const first = d1[0];
                  const sum2 = sum + 1;
                  let num22 = 0;
                  let num23 = 0;
                  if (0 < length2) {
                    let diff2 = sum2 - 1;
                    let num24 = 0;
                    let num25 = 0;
                    num22 = 0;
                    num23 = 0;
                    if (sum2) {
                      while (true) {
                        let num26 = d[num24];
                        let result = num25 * tmp5;
                        if (!num26) {
                          num26 = 0;
                        }
                        let sum3 = result + num26;
                        items[num24] = sum3 / first | 0;
                        let tmp99 = sum3 % first | 0;
                        sum = num24 + 1;
                        if (sum < length2) {
                          sum = +diff2;
                          diff2 = sum - 1;
                          num24 = sum;
                          num25 = tmp99;
                          num22 = sum;
                          num23 = tmp99;
                          if (!sum) {
                            break;
                          }
                        } else {
                          num22 = sum;
                          num23 = tmp99;
                          if (!tmp99) {
                            break;
                          }
                        }
                        break;
                      }
                    }
                  }
                  if (!num23) {
                    num23 = num22 < length2;
                  }
                  let tmp93 = num23;
                } else {
                  sum = tmp5 / (d1[0] + 1) | 0;
                  let length3 = length2;
                  let arr6 = d;
                  let arr7 = d1;
                  if (sum > 1) {
                    const arr4 = multiplyInteger(d1, sum, tmp5);
                    const arr5 = multiplyInteger(d, sum, tmp5);
                    length = arr4.length;
                    length3 = arr5.length;
                    arr6 = arr5;
                    arr7 = arr4;
                  }
                  const substr = arr6.slice(0, length);
                  let sum4 = length4;
                  let tmp23 = length4;
                  if (substr.length < length) {
                    do {
                      let tmp24 = +sum4;
                      sum4 = tmp24 + 1;
                      substr[tmp24] = 0;
                      tmp23 = sum4;
                    } while (sum4 < length);
                  }
                  const substr1 = arr7.slice();
                  substr1.unshift(0);
                  const first1 = arr7[0];
                  let num15 = 0;
                  let arr10 = substr;
                  let num16 = tmp23;
                  let diff5 = sum;
                  let sum9 = length;
                  let sum5 = first1;
                  if (arr7[1] >= tmp5 / 2) {
                    sum5 = first1 + 1;
                    num15 = 0;
                    arr10 = substr;
                    num16 = tmp23;
                    diff5 = sum;
                    sum9 = length;
                  }
                  while (true) {
                    let tmp33 = compare;
                    let tmp34 = arr7;
                    let tmp35 = arr10;
                    let tmp36 = length;
                    let tmp37 = num16;
                    let tmp38 = compare(arr7, arr10, tmp20, num16);
                    let tmp39 = arr10;
                    let tmp40 = num16;
                    if (tmp38 < 0) {
                      let first2 = arr10[0];
                      let sum6 = first2;
                      if (length != tmp40) {
                        let num18 = arr10[1];
                        let result1 = first2 * tmp5;
                        if (!num18) {
                          num18 = 0;
                        }
                        sum6 = result1 + num18;
                      }
                      let diff3 = sum6 / sum5 | 0;
                      if (diff3 > 1) {
                        if (diff3 >= tmp5) {
                          diff3 = tmp5 - 1;
                        }
                        let tmp49 = compare;
                        let tmp50 = multiplyInteger;
                        let arr13 = multiplyInteger(arr7, diff3, tmp5);
                        let length6 = arr13.length;
                        let length7 = arr10.length;
                        let tmp51 = arr13;
                        let tmp52 = arr10;
                        let tmp53 = length6;
                        let tmp54 = length7;
                        let tmp55 = compare(arr13, tmp39, length6, length7);
                        let num19 = tmp55;
                        let num20 = diff3;
                        let substr2 = arr13;
                        tmp40 = length7;
                        if (1 === tmp55) {
                          let tmp58 = arr7;
                          let diff4 = diff3 - 1;
                          let tmp57 = subtract;
                          if (length < length6) {
                            tmp58 = substr1;
                          }
                          let tmp59 = arr13;
                          let tmp60 = tmp58;
                          let tmp61 = length6;
                          let tmp62 = tmp5;
                          let tmp57Result = tmp57(arr13, tmp58, length6, tmp5);
                          num19 = tmp55;
                          num20 = diff4;
                          substr2 = arr13;
                          tmp40 = length7;
                        }
                      } else {
                        num19 = tmp38;
                        num20 = diff3;
                        if (0 === diff3) {
                          num19 = 1;
                          num20 = 1;
                        }
                        substr2 = arr7.slice();
                      }
                      let length8 = substr2.length;
                      if (length8 < tmp40) {
                        let arr1 = substr2.unshift(0);
                      }
                      let tmp65 = subtract;
                      let tmp66 = arr10;
                      let tmp67 = substr2;
                      let tmp68 = tmp40;
                      let tmp69 = tmp5;
                      let tmp70 = subtract(tmp39, substr2, tmp40, tmp5);
                      let tmp71 = -1 === num19;
                      let tmp72 = tmp40;
                      if (tmp71) {
                        let tmp73 = compare;
                        let length9 = arr10.length;
                        let tmp74 = arr7;
                        let tmp75 = arr10;
                        let tmp76 = length;
                        let tmp77 = length9;
                        let tmp78 = compare(arr7, tmp39, tmp20, length9);
                        tmp71 = tmp78 < 1;
                        num19 = tmp78;
                        tmp72 = length9;
                      }
                      let tmp79 = num20;
                      if (tmp71) {
                        let tmp82 = arr7;
                        let sum7 = num20 + 1;
                        let tmp81 = subtract;
                        if (length < tmp72) {
                          tmp82 = substr1;
                        }
                        let tmp83 = arr10;
                        let tmp84 = tmp82;
                        let tmp85 = tmp72;
                        let tmp86 = tmp5;
                        let tmp81Result = tmp81(tmp39, tmp82, tmp72, tmp5);
                        tmp79 = sum7;
                      }
                      let length5 = arr10.length;
                      let num17 = tmp79;
                      let tmp41 = num19;
                      let tmp42 = substr2;
                      let tmp43 = length8;
                      let items1 = arr10;
                      let tmp44 = sum6;
                    } else {
                      tmp41 = tmp38;
                      num17 = 0;
                      tmp42 = tmp27;
                      tmp43 = tmp28;
                      items1 = arr10;
                      length5 = tmp40;
                      tmp44 = tmp29;
                      if (0 === tmp38) {
                        items1 = [0];
                        tmp41 = tmp38;
                        num17 = 1;
                        tmp42 = tmp27;
                        tmp43 = tmp28;
                        length5 = tmp40;
                        tmp44 = tmp29;
                      }
                    }
                    let tmp88 = +num15;
                    num15 = tmp88 + 1;
                    items[tmp88] = num17;
                    if (tmp41) {
                      if (items1[0]) {
                        let tmp89 = +length5;
                        let num21 = arr6[sum9];
                        let sum8 = tmp89 + 1;
                        if (!num21) {
                          num21 = 0;
                        }
                        items1[tmp89] = num21;
                        let items2 = items1;
                        num16 = sum8;
                        let tmp91 = +sum9;
                        sum9 = tmp91 + 1;
                        if (tmp91 < length3) {
                          let tmp92 = +diff5;
                          diff5 = tmp92 - 1;
                          tmp27 = tmp42;
                          tmp28 = tmp43;
                          arr10 = items2;
                          tmp29 = tmp44;
                          if (!tmp92) {
                            break;
                          }
                        } else if (undefined === items2[0]) {
                          break;
                        }
                        tmp93 = undefined !== items2[0];
                      }
                    }
                    items2 = [arr6[sum9]];
                    num16 = 1;
                  }
                }
                flag = tmp93;
                if (!items[0]) {
                  sum = items.shift();
                  flag = tmp93;
                }
              }
              if (1 === num8) {
                constructor.e = diff1;
                subtract = flag;
              } else {
                sum = items[0];
                let num30 = 1;
                let num31 = 1;
                while (sum >= 10) {
                  num30 = num30 + 1;
                  sum = sum / 10;
                  num31 = num30;
                }
                constructor.e = num31 + diff1 * num8 - 1;
                sum = precision;
                sum = outer1_28;
                if (arg4) {
                  sum = precision + constructor.e + 1;
                }
                sum = constructor;
                sum = rounding;
                sum = flag;
                sum = sum(constructor, sum, rounding, flag);
              }
              return constructor;
            }
          }
        }
      }
      if (s.s) {
        if (s2.s) {
          sum = d1;
          if (d) {
            let tmp2 = !d1;
            if (!tmp2) {
              tmp2 = d[0] != d1[0];
            }
            sum = tmp2;
          }
          if (sum) {
            if (!d) {
              if (d1) {
                let num6 = num / 0;
              }
            }
            num6 = 0;
          }
        }
      }
      const constructor1 = new constructor(NaN);
      return constructor1;
    };
  })();
  function clone(arg0) {
    let obj = arg0;
    class Decimal {
      constructor(arg0) {
        self = this;
        tmp = Decimal;
        if (this instanceof Decimal) {
          self.constructor = tmp;
          tmp7 = outer1_67;
          if (outer1_67(arg0)) {
            self.s = arg0.s;
            tmp31 = outer1_8;
            if (outer1_8) {
              if (arg0.d) {
                tmp33 = Decimal;
                if (arg0.e <= Decimal.maxE) {
                  tmp34 = Decimal;
                  if (arg0.e < Decimal.minE) {
                    num19 = 0;
                    self.e = 0;
                    items = [0];
                    self.d = items;
                    substr = items;
                  } else {
                    ({ e: self.e, d: d2 } = arg0);
                    substr = d2.slice();
                    self.d = substr;
                  }
                }
                tmp38 = substr;
              }
              tmp36 = globalThis;
              _NaN2 = NaN;
              self.e = NaN;
              tmp37 = null;
              self.d = null;
              substr = null;
            } else {
              ({ e: self.e, d } = arg0);
              if (arg0.d) {
                substr1 = d.slice();
              } else {
                substr1 = d;
              }
              self.d = substr1;
              return;
            }
          } else {
            tmp8 = typeof arg0;
            str = "number";
            if ("number" === tmp8) {
              num11 = 0;
              if (0 === arg0) {
                num18 = 1;
                if (1 / arg0 < 0) {
                  num18 = -1;
                }
                self.s = num18;
                self.e = 0;
                self.d = [0];
                return;
              } else {
                if (arg0 < 0) {
                  str4 = -arg0;
                  num13 = -1;
                  self.s = -1;
                } else {
                  num12 = 1;
                  self.s = 1;
                  str4 = arg0;
                }
                if (str4 === ~~str4) {
                  num14 = 10000000;
                  if (str4 < 10000000) {
                    num15 = 10;
                    num16 = 0;
                    result = str4;
                    num17 = 0;
                    if (str4 >= 10) {
                      do {
                        num16 = num16 + 1;
                        result = result / 10;
                        num17 = num16;
                      } while (result >= 10);
                    }
                    tmp25 = outer1_8;
                    if (outer1_8) {
                      tmp26 = Decimal;
                      if (num17 > Decimal.maxE) {
                        tmp28 = globalThis;
                        _NaN = NaN;
                        self.e = NaN;
                        tmp29 = null;
                        self.d = null;
                        items2 = null;
                      } else {
                        tmp27 = Decimal;
                        if (num17 < Decimal.minE) {
                          self.e = 0;
                          items1 = [0];
                          self.d = items1;
                          items2 = items1;
                        } else {
                          self.e = num17;
                          items2 = [];
                          items2[0] = str4;
                          self.d = items2;
                        }
                      }
                      tmp30 = items2;
                    } else {
                      self.e = num17;
                      items3 = [];
                      items3[0] = str4;
                      self.d = items3;
                      return;
                    }
                  }
                }
                {
                  tmp21 = outer1_41;
                  tmp22 = outer1_41(self, str4.toString());
                  tmp23 = self;
                }
                return tmp23;
              }
            } else {
              str5 = "string";
              if ("string" === tmp8) {
                num4 = 0;
                charCodeAtResult = arg0.charCodeAt(0);
                num5 = 45;
                if (45 === charCodeAtResult) {
                  num9 = 1;
                  substr2 = arg0.slice(1);
                  num10 = -1;
                  self.s = -1;
                } else {
                  num6 = 43;
                  substr2 = arg0;
                  if (43 === charCodeAtResult) {
                    num7 = 1;
                    substr2 = arg0.slice(1);
                  }
                  num8 = 1;
                  self.s = 1;
                }
                tmp15 = outer1_18;
                tmp16 = substr2;
                if (outer1_18.test(substr2)) {
                  tmp19 = outer1_41;
                  tmp20 = outer1_41(self, substr2);
                  tmp18 = self;
                } else {
                  tmp17 = outer1_42;
                  tmp18 = outer1_42(self, substr2);
                }
                return tmp18;
              } else {
                str2 = "bigint";
                if ("bigint" === tmp8) {
                  num = 0;
                  if (arg0 < 0) {
                    str3 = -arg0;
                    num3 = -1;
                    self.s = -1;
                  } else {
                    num2 = 1;
                    self.s = 1;
                    str3 = arg0;
                  }
                  tmp11 = outer1_41;
                  tmp12 = outer1_41(self, str3.toString());
                  return self;
                } else {
                  tmp9 = globalThis;
                  _Error = Error;
                  tmp10 = outer1_9;
                  throw Error(outer1_9 + arg0);
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
    Decimal.EUCLID = 9;
    Decimal.set = config;
    Decimal.config = config;
    Decimal.clone = clone;
    Decimal.isDecimal = isDecimalInstance;
    Decimal.abs = abs;
    Decimal.acos = acos;
    Decimal.acosh = acosh;
    Decimal.add = add;
    Decimal.asin = asin;
    Decimal.asinh = asinh;
    Decimal.atan = atan;
    Decimal.atanh = atanh;
    Decimal.atan2 = atan2;
    Decimal.cbrt = cbrt;
    Decimal.ceil = ceil;
    Decimal.clamp = clamp;
    Decimal.cos = cos;
    Decimal.cosh = cosh;
    Decimal.div = div;
    Decimal.exp = exp;
    Decimal.floor = floor;
    Decimal.hypot = hypot;
    Decimal.ln = ln;
    Decimal.log = log;
    Decimal.log10 = log10;
    Decimal.log2 = log2;
    Decimal.max = max;
    Decimal.min = min;
    Decimal.mod = mod;
    Decimal.mul = mul;
    Decimal.pow = pow;
    Decimal.random = random;
    Decimal.round = round;
    Decimal.sign = sign;
    Decimal.sin = sin;
    Decimal.sinh = sinh;
    Decimal.sqrt = sqrt;
    Decimal.sub = sub;
    Decimal.sum = sum;
    Decimal.tan = tan;
    Decimal.tanh = tanh;
    Decimal.trunc = trunc;
    if (undefined === arg0) {
      obj = {};
    }
    if (obj) {
      class Decimal {
        constructor(arg0) {
          self = this;
          tmp = Decimal;
          if (this instanceof Decimal) {
            self.constructor = tmp;
            tmp7 = outer1_67;
            if (outer1_67(arg0)) {
              self.s = arg0.s;
              tmp31 = outer1_8;
              if (outer1_8) {
                if (arg0.d) {
                  tmp33 = Decimal;
                  if (arg0.e <= Decimal.maxE) {
                    tmp34 = Decimal;
                    if (arg0.e < Decimal.minE) {
                      num19 = 0;
                      self.e = 0;
                      items = [0];
                      self.d = items;
                      substr = items;
                    } else {
                      ({ e: self.e, d: d2 } = arg0);
                      substr = d2.slice();
                      self.d = substr;
                    }
                  }
                  tmp38 = substr;
                }
                tmp36 = globalThis;
                _NaN2 = NaN;
                self.e = NaN;
                tmp37 = null;
                self.d = null;
                substr = null;
              } else {
                ({ e: self.e, d } = arg0);
                if (arg0.d) {
                  substr1 = d.slice();
                } else {
                  substr1 = d;
                }
                self.d = substr1;
                return;
              }
            } else {
              tmp8 = typeof arg0;
              str = "number";
              if ("number" === tmp8) {
                num11 = 0;
                if (0 === arg0) {
                  num18 = 1;
                  if (1 / arg0 < 0) {
                    num18 = -1;
                  }
                  self.s = num18;
                  self.e = 0;
                  self.d = [0];
                  return;
                } else {
                  if (arg0 < 0) {
                    str4 = -arg0;
                    num13 = -1;
                    self.s = -1;
                  } else {
                    num12 = 1;
                    self.s = 1;
                    str4 = arg0;
                  }
                  if (str4 === ~~str4) {
                    num14 = 10000000;
                    if (str4 < 10000000) {
                      num15 = 10;
                      num16 = 0;
                      result = str4;
                      num17 = 0;
                      if (str4 >= 10) {
                        do {
                          num16 = num16 + 1;
                          result = result / 10;
                          num17 = num16;
                        } while (result >= 10);
                      }
                      tmp25 = outer1_8;
                      if (outer1_8) {
                        tmp26 = Decimal;
                        if (num17 > Decimal.maxE) {
                          tmp28 = globalThis;
                          _NaN = NaN;
                          self.e = NaN;
                          tmp29 = null;
                          self.d = null;
                          items2 = null;
                        } else {
                          tmp27 = Decimal;
                          if (num17 < Decimal.minE) {
                            self.e = 0;
                            items1 = [0];
                            self.d = items1;
                            items2 = items1;
                          } else {
                            self.e = num17;
                            items2 = [];
                            items2[0] = str4;
                            self.d = items2;
                          }
                        }
                        tmp30 = items2;
                      } else {
                        self.e = num17;
                        items3 = [];
                        items3[0] = str4;
                        self.d = items3;
                        return;
                      }
                    }
                  }
                  {
                    tmp21 = outer1_41;
                    tmp22 = outer1_41(self, str4.toString());
                    tmp23 = self;
                  }
                  return tmp23;
                }
              } else {
                str5 = "string";
                if ("string" === tmp8) {
                  num4 = 0;
                  charCodeAtResult = arg0.charCodeAt(0);
                  num5 = 45;
                  if (45 === charCodeAtResult) {
                    num9 = 1;
                    substr2 = arg0.slice(1);
                    num10 = -1;
                    self.s = -1;
                  } else {
                    num6 = 43;
                    substr2 = arg0;
                    if (43 === charCodeAtResult) {
                      num7 = 1;
                      substr2 = arg0.slice(1);
                    }
                    num8 = 1;
                    self.s = 1;
                  }
                  tmp15 = outer1_18;
                  tmp16 = substr2;
                  if (outer1_18.test(substr2)) {
                    tmp19 = outer1_41;
                    tmp20 = outer1_41(self, substr2);
                    tmp18 = self;
                  } else {
                    tmp17 = outer1_42;
                    tmp18 = outer1_42(self, substr2);
                  }
                  return tmp18;
                } else {
                  str2 = "bigint";
                  if ("bigint" === tmp8) {
                    num = 0;
                    if (arg0 < 0) {
                      str3 = -arg0;
                      num3 = -1;
                      self.s = -1;
                    } else {
                      num2 = 1;
                      self.s = 1;
                      str3 = arg0;
                    }
                    tmp11 = outer1_41;
                    tmp12 = outer1_41(self, str3.toString());
                    return self;
                  } else {
                    tmp9 = globalThis;
                    _Error = Error;
                    tmp10 = outer1_9;
                    throw Error(outer1_9 + arg0);
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
    Decimal.config(obj);
    return Decimal;
  }
  let cloneResult = clone(obj);
  cloneResult.prototype.constructor = cloneResult;
  cloneResult.Decimal = cloneResult;
  cloneResult.default = cloneResult;
  cloneResult = new cloneResult("2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058");
  c5 = cloneResult;
  cloneResult1 = new cloneResult("3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789");
  if ("function" === typeof globalThis.define) {
    if (globalThis.define.amd) {
      globalThis.define(() => closure_1);
    }
  }
  if (undefined !== _window) {
    if (_window.exports) {
      const _Symbol = Symbol;
      let tmp6 = "function" === typeof Symbol;
      if (tmp6) {
        const _Symbol2 = Symbol;
        tmp6 = "symbol" === typeof Symbol.iterator;
      }
      if (tmp6) {
        const _Symbol3 = Symbol;
        obj[Symbol.for("nodejs.util.inspect.custom")] = obj.toString;
        const _Symbol4 = Symbol;
        obj[Symbol.toStringTag] = "Decimal";
      }
      _window.exports = cloneResult;
    }
  }
  if (Decimal) {
    Decimal = Decimal.Decimal;
    cloneResult.noConflict = () => {
      _window.Decimal = Decimal;
      return closure_1;
    };
    Decimal.Decimal = cloneResult;
  } else {
    let _self = self;
    if ("undefined" !== typeof self) {
      const _self2 = self;
      if (self) {
        const _self3 = self;
        const _self4 = self;
      }
      _window = self;
    }
    _window = window;
  }
})(this);
