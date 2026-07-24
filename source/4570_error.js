// Module ID: 4570
// Function ID: 40073
// Name: error
// Dependencies: [65]

// Module 4570 (error)
import _toConsumableArray from "_toConsumableArray";

function error(arg0) {
  const rangeError = new RangeError(table[arg0]);
  throw rangeError;
}
function mapDomain(str) {
  let tmp3;
  const parts = str.split("@");
  let str2 = "";
  if (parts.length > 1) {
    str2 = `${arr[0]}@`;
    str = parts[1];
  }
  const parts1 = str.replace(closure_3, ".").split(".");
  const items = [];
  let diff = tmp - 1;
  if (+parts1.length) {
    do {
      items[diff] = arg1(parts1[diff]);
      tmp3 = +diff;
      diff = tmp3 - 1;
    } while (tmp3);
  }
  return str2 + items.join(".");
}
function ucs2decode(str) {
  const items = [];
  let num = 0;
  if (0 < str.length) {
    while (true) {
      let tmp = +num;
      let sum = tmp + 1;
      let charCodeAtResult = str.charCodeAt(tmp);
      if (charCodeAtResult >= 55296) {
        if (charCodeAtResult <= 56319) {
          if (sum < length) {
            let tmp5 = +sum;
            let sum1 = tmp5 + 1;
            let charCodeAtResult1 = str.charCodeAt(tmp5);
            if (56320 === (64512 & charCodeAtResult1)) {
              let arr = items.push(((1023 & charCodeAtResult) << 10) + (1023 & charCodeAtResult1) + 65536);
              num = sum1;
              let tmp11 = charCodeAtResult1;
            } else {
              arr = items.push(charCodeAtResult);
              num = sum1 - 1;
              let tmp9 = charCodeAtResult1;
            }
            if (num >= length) {
              break;
            }
          }
        }
      }
      let arr1 = items.push(charCodeAtResult);
      num = sum;
    }
  }
  return items;
}
const re1 = /^xn--/;
const re2 = /[^\0-\x7E]/;
const re3 = /[\x2E\u3002\uFF0E\uFF61]/g;
let closure_4 = { overflow: "Overflow: input needs wider integers to process", "not-basic": "Illegal input >= 0x80 (not a basic code point)", "invalid-input": "Invalid input" };
function basicToDigit(arg0) {
  if (arg0 - 48 < 10) {
    let num4 = arg0 - 22;
  } else if (arg0 - 65 < 26) {
    num4 = arg0 - 65;
  } else {
    num4 = 36;
    if (arg0 - 97 < 26) {
      num4 = arg0 - 97;
    }
  }
  return num4;
}
function digitToBasic(arg0, arg1) {
  return arg0 + 22 + 75 * (arg0 < 26) - ((0 != 0) << 5);
}
function adapt(arg0, arg1, arg2) {
  if (arg2) {
    let tmp = floor(arg0 / 700);
  } else {
    tmp = arg0 >> 1;
  }
  let sum = tmp + floor(tmp / arg1);
  let num3 = 0;
  let num4 = 0;
  let tmp4 = sum;
  if (sum > 455) {
    do {
      let tmp5 = floor;
      sum = floor(sum / 35);
      num3 = num3 + 36;
      num4 = num3;
      tmp4 = sum;
    } while (sum > 455);
  }
  return floor(num4 + 36 * tmp4 / (tmp4 + 38));
}
function decode(arr) {
  let sum;
  const items = [];
  let num = arr.lastIndexOf("-");
  if (num < 0) {
    num = 0;
  }
  let num2 = 128;
  for (let num3 = 0; num3 < num; num3 = num3 + 1) {
    let tmp = num3;
    if (arr.charCodeAt(num3) >= num2) {
      let tmp2 = error;
      let tmp3 = error("not-basic");
    }
    arr = items.push(arr.charCodeAt(num3));
  }
  let num4 = 0;
  if (num > 0) {
    num4 = num + 1;
  }
  let num6 = 72;
  let num7 = 0;
  if (num4 < arr.length) {
    let tmp6 = num7;
    let num8 = 1;
    let num9 = 36;
    do {
      while (true) {
        let tmp7 = diff;
        if (num4 >= length) {
          let tmp8 = error;
          let tmp9 = error("invalid-input");
        }
        let tmp10 = basicToDigit;
        let tmp11 = +num4;
        sum = tmp11 + 1;
        let tmp13 = basicToDigit(arr.charCodeAt(tmp11));
        let tmp14 = tmp13 >= 36;
        if (!tmp14) {
          let tmp15 = floor;
          tmp14 = tmp13 > floor((2147483647 - tmp6) / num8);
        }
        if (tmp14) {
          let tmp16 = error;
          let tmp17 = error("overflow");
        }
        let sum1 = tmp6 + tmp13 * num8;
        let num10 = 1;
        if (num9 > num6) {
          let num11 = 26;
          if (num9 < num6 + 26) {
            num11 = num9 - num6;
          }
          num10 = num11;
        }
        if (tmp13 < num10) {
          break;
        } else {
          diff = 36 - num10;
          let tmp19 = floor;
          if (num8 > floor(2147483647 / diff)) {
            let tmp20 = error;
            let tmp21 = error("overflow");
          }
          num8 = num8 * diff;
          num9 = num9 + 36;
          tmp6 = sum1;
          num4 = sum;
          continue;
        }
      }
      let sum2 = items.length + 1;
      let tmp23 = adapt;
      let tmp25 = floor;
      let result = sum1 / sum2;
      let tmp24 = adapt(sum1 - num7, sum2, 0 === num7);
      if (floor(result) > 2147483647 - num2) {
        let tmp27 = error;
        let tmp28 = error("overflow");
      }
      let tmp29 = floor;
      let sum3 = num2 + floor(result);
      let result1 = sum1 % sum2;
      num7 = result1 + 1;
      let spliceResult = items.splice(result1, 0, sum3);
      num2 = sum3;
      num6 = tmp24;
      num4 = sum;
    } while (sum < length);
  }
  return fromCodePoint.apply(String, items);
}
function encode(arg0) {
  const items = [];
  let arr1 = ucs2decode(arg0);
  let num = 128;
  let num2 = 0;
  let num3 = 72;
  for (const item10026 of arr1) {
    if (item10026 < 128) {
      let tmp2 = items;
      let tmp3 = fromCharCode;
      let tmp4 = item10026;
      let arr = items.push(fromCharCode(tmp));
    }
    continue;
  }
  let sum2 = length2;
  if (items.length) {
    items.push("-");
  }
  if (sum2 < arr1.length) {
    let num4 = 2147483647;
    const iter = arr1[Symbol.iterator]();
    do {
      let nextResult = iter.next();
      let tmp11 = iter;
      while (iter !== undefined) {
        let tmp13 = num;
        let tmp14 = nextResult >= num;
        let tmp15 = tmp14;
        if (tmp14) {
          let tmp16 = nextResult;
          let tmp17 = num4;
          tmp15 = tmp12 < num4;
        }
        if (tmp15) {
          num4 = nextResult;
        }
        continue;
      }
      let tmp18 = sum2;
      let sum = sum2 + 1;
      let tmp20 = sum;
      let tmp21 = num4;
      let tmp22 = num;
      let tmp24 = floor;
      let tmp25 = num2;
      let diff = num4 - num;
      if (diff > floor((2147483647 - num2) / sum)) {
        let tmp26 = error;
        let tmp27 = error("overflow");
      }
      let tmp28 = num2;
      let tmp29 = num4;
      let tmp30 = num;
      let tmp31 = sum;
      let num5 = num2 + (num4 - num) * tmp20;
      let tmp32 = num4;
      let tmp33 = arr1;
      for (const item10085 of arr1) {
        let tmp74 = tmp29;
        let tmp75 = item10085 < tmp32;
        let tmp36 = tmp75;
        let tmp73 = item10085;
        if (tmp75) {
          let tmp34 = num5;
          let sum1 = num5 + 1;
          num5 = sum1;
          tmp36 = sum1 > 2147483647;
        }
        if (tmp36) {
          let tmp37 = error;
          let tmp38 = error("overflow");
        }
        let tmp39 = item10085;
        let tmp40 = tmp29;
        if (tmp73 == tmp32) {
          let tmp58 = num5;
          let num8 = 36;
          while (true) {
            let tmp41 = num8;
            let tmp42 = num3;
            let num6 = 1;
            if (num8 > num3) {
              let tmp43 = num8;
              let tmp44 = num3;
              let num7 = 26;
              if (num8 < num3 + 26) {
                let tmp45 = num8;
                let tmp46 = num3;
                num7 = num8 - num3;
              }
              num6 = num7;
            }
            let tmp47 = num6;
            let tmp48 = tmp58;
            if (tmp58 < num6) {
              break;
            } else {
              let tmp49 = tmp58;
              let tmp50 = num6;
              let diff1 = tmp58 - tmp47;
              let diff2 = 36 - tmp47;
              let tmp53 = items;
              let tmp54 = fromCharCode;
              let tmp55 = digitToBasic;
              arr1 = items.push(fromCharCode(digitToBasic(tmp47 + diff1 % diff2, 0)));
              let tmp57 = floor;
              tmp58 = floor(diff1 / diff2);
              let tmp59 = num8;
              num8 = num8 + 36;
              continue;
            }
          }
          let tmp60 = items;
          let tmp61 = fromCharCode;
          let tmp62 = digitToBasic;
          let tmp63 = tmp58;
          let arr2 = items.push(fromCharCode(digitToBasic(tmp58, 0)));
          let tmp65 = adapt;
          let tmp66 = num5;
          let tmp67 = sum;
          let tmp68 = sum2;
          let tmp69 = length2;
          num3 = adapt(num5, tmp20, sum2 == length2);
          num5 = 0;
          sum2 = sum2 + 1;
        }
        continue;
      }
      let tmp70 = num5;
      num2 = num5 + 1;
      let tmp71 = tmp29;
      num = tmp32 + 1;
      let tmp72 = sum2;
    } while (sum2 < length);
  }
  return items.join("");
}
obj = {
  version: "2.1.0",
  ucs2: obj,
  decode,
  encode,
  toASCII(arg0) {
    return mapDomain(arg0, (arg0) => {
      let text = arg0;
      if (outer1_2.test(arg0)) {
        text = `xn--${outer1_11(arg0)}`;
      }
      return text;
    });
  },
  toUnicode(arg0) {
    return mapDomain(arg0, (arr) => {
      let tmp = arr;
      if (outer1_1.test(arr)) {
        tmp = outer1_10(arr.slice(4).toLowerCase());
        const str = arr.slice(4);
      }
      return tmp;
    });
  }
};
obj = {
  decode: ucs2decode,
  encode: function ucs2encode(arg0) {
    return fromCodePoint.apply(String, _toConsumableArray(arg0));
  }
};

export default obj;
