// Module ID: 1446
// Function ID: 16829
// Name: error
// Dependencies: []

// Module 1446 (error)
(arg0) => {
  let tmp = arg0;
  function error(arg0) {
    const rangeError = new RangeError(closure_6[arg0]);
    throw rangeError;
  }
  function map(arg0, arg1) {
    let tmp3;
    const items = [];
    let diff = tmp - 1;
    if (+arg0.length) {
      do {
        items[diff] = arg1(arg0[diff]);
        tmp3 = +diff;
        diff = tmp3 - 1;
      } while (tmp3);
    }
    return items;
  }
  function mapDomain(str) {
    const parts = str.split("@");
    let str2 = "";
    if (parts.length > 1) {
      str2 = `${arr[0]}@`;
      str = parts[1];
    }
    const str3 = str.replace(closure_5, ".");
    return str2 + map(str.replace(closure_5, ".").split("."), arg1).join(".");
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
                let tmp11 = charCodeAtResult1;
                num = sum1;
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
  function ucs2encode(arg0) {
    return map(arg0, (arg0) => {
      let str = "";
      let tmp = arg0;
      if (arg0 > 65535) {
        const diff = arg0 - 65536;
        str = `${closure_8(tmp3 >>> 10 & 1023 | 55296)}`;
        tmp = 56320 | 1023 & diff;
      }
      return str + callback(tmp);
    }).join("");
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
        let tmp5 = closure_7;
        sum = closure_7(sum / 35);
        let tmp6 = closure_2;
        num3 = num3 + closure_2;
        num4 = num3;
        tmp4 = sum;
      } while (sum > 455);
    }
    return floor(num4 + 36 * tmp4 / (tmp4 + 38));
  }
  function decode(arr) {
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
    while (num4 < arr.length) {
      let sum2 = closure_2;
      if (num4 >= length) {
        let tmp6 = error;
        let tmp7 = error("invalid-input");
      }
      let tmp8 = +num4;
      let sum = tmp8 + 1;
      let charCodeAtResult = arr.charCodeAt(tmp8);
      if (charCodeAtResult - 48 < 10) {
        let diff = charCodeAtResult - 22;
      } else if (charCodeAtResult - 65 < 26) {
        diff = charCodeAtResult - 65;
      } else {
        diff = charCodeAtResult - 97 < 26 ? charCodeAtResult - 97 : closure_2;
      }
      let tmp12 = closure_2;
      let tmp13 = diff >= closure_2;
      if (!tmp13) {
        let tmp14 = floor;
        let tmp15 = closure_1;
        tmp13 = diff > floor(closure_1 - num7);
      }
      if (tmp13) {
        let tmp16 = error;
        let tmp17 = error("overflow");
      }
      let sum1 = num7 + diff;
      let num8 = 1;
      if (sum2 > num6) {
        let num9 = 26;
        if (sum2 < num6 + 26) {
          num9 = sum2 - num6;
        }
        num8 = num9;
      }
      let tmp19 = sum;
      let num10 = 1;
      let tmp20 = sum1;
      num4 = sum;
      let tmp21 = sum1;
      if (diff >= num8) {
        do {
          let tmp22 = closure_7;
          let tmp23 = closure_1;
          let tmp24 = closure_2;
          let diff1 = closure_2 - num8;
          if (num10 > closure_7(closure_1 / diff1)) {
            let tmp26 = closure_9;
            let tmp27 = closure_9("overflow");
          }
          num10 = num10 * diff1;
          let tmp28 = closure_2;
          sum2 = sum2 + closure_2;
          if (tmp19 >= length) {
            let tmp29 = closure_9;
            let tmp30 = closure_9("invalid-input");
          }
          let tmp31 = +tmp19;
          let sum3 = tmp31 + 1;
          let charCodeAtResult1 = arr.charCodeAt(tmp31);
          if (charCodeAtResult1 - 48 < 10) {
            let diff2 = charCodeAtResult1 - 22;
          } else if (charCodeAtResult1 - 65 < 26) {
            diff2 = charCodeAtResult1 - 65;
          } else {
            diff2 = charCodeAtResult1 - 97 < 26 ? charCodeAtResult1 - 97 : closure_2;
          }
          let tmp35 = closure_2;
          let tmp36 = diff2 >= closure_2;
          if (!tmp36) {
            let tmp37 = closure_7;
            let tmp38 = closure_1;
            tmp36 = diff2 > closure_7((closure_1 - tmp20) / num10);
          }
          if (tmp36) {
            let tmp39 = closure_9;
            let tmp40 = closure_9("overflow");
          }
          let sum4 = tmp20 + diff2 * num10;
          num8 = 1;
          if (sum2 > num6) {
            let num11 = 26;
            if (sum2 < num6 + 26) {
              num11 = sum2 - num6;
            }
            num8 = num11;
          }
          tmp19 = sum3;
          tmp20 = sum4;
          num4 = sum3;
          let tmp42 = diff1;
          tmp21 = sum4;
        } while (diff2 >= num8);
      }
      let tmp43 = adapt;
      let sum5 = items.length + 1;
      let tmp46 = floor;
      let result = tmp21 / sum5;
      let tmp45 = adapt(tmp21 - num7, sum5, 0 === num7);
      let tmp48 = closure_1;
      if (floor(result) > closure_1 - num2) {
        let tmp49 = error;
        let tmp50 = error("overflow");
      }
      let tmp51 = floor;
      let sum6 = num2 + floor(result);
      let result1 = tmp21 % sum5;
      num7 = result1 + 1;
      let spliceResult = items.splice(result1, 0, sum6);
      num2 = sum6;
      num6 = tmp45;
    }
    return ucs2encode(items);
  }
  function encode(arg0) {
    const items = [];
    let arr1 = ucs2decode(arg0);
    let num = 128;
    let num2 = 0;
    if (0 < arr1.length) {
      do {
        let tmp = arr1[num2];
        if (tmp < num) {
          let tmp2 = closure_8;
          let arr = items.push(closure_8(tmp));
        }
        num2 = num2 + 1;
        let tmp4 = tmp;
      } while (num2 < length);
    }
    if (items.length) {
      items.push("-");
    }
    let num3 = 72;
    let num4 = 0;
    let tmp6 = length2;
    if (items.length < arr1.length) {
      do {
        let tmp10 = closure_1;
        let num5 = 0;
        let tmp11 = closure_1;
        if (0 < length) {
          do {
            let tmp12 = arr1[num5];
            let tmp13 = tmp12 >= num && tmp12 < tmp10;
            if (tmp13) {
              tmp10 = tmp12;
            }
            num5 = num5 + 1;
            tmp11 = tmp10;
            let tmp14 = tmp12;
          } while (num5 < length);
        }
        let tmp16 = closure_7;
        let tmp17 = closure_1;
        let sum = tmp6 + 1;
        let diff = tmp11 - num;
        if (diff > closure_7((closure_1 - num4) / sum)) {
          let tmp19 = closure_9;
          let tmp20 = closure_9("overflow");
        }
        let sum1 = num4 + (tmp11 - num) * sum;
        let tmp22 = tmp6;
        let tmp23 = num3;
        let num6 = 0;
        let tmp24 = tmp7;
        let tmp25 = tmp8;
        let tmp26 = tmp9;
        let tmp27 = sum1;
        if (0 < length) {
          do {
            let tmp28 = arr1[num6];
            let tmp29 = tmp28 < tmp11;
            let tmp30 = sum1;
            if (tmp29) {
              let sum2 = sum1 + 1;
              let tmp32 = closure_1;
              tmp29 = sum2 > closure_1;
              tmp30 = sum2;
            }
            if (tmp29) {
              let tmp33 = closure_9;
              let tmp34 = closure_9("overflow");
            }
            let num7 = tmp30;
            let sum4 = tmp22;
            let tmp36 = tmp23;
            if (tmp28 == tmp11) {
              let tmp58 = closure_2;
              let num9 = 1;
              if (closure_2 > tmp23) {
                let num8 = 26;
                if (tmp58 < tmp23 + 26) {
                  num8 = tmp58 - tmp23;
                }
                num9 = num8;
              }
              let tmp37 = num9;
              let tmp38 = tmp30;
              let tmp39 = tmp58;
              let tmp40 = tmp30;
              let tmp41 = tmp58;
              let tmp42 = num9;
              if (tmp30 >= num9) {
                do {
                  let diff1 = tmp38 - tmp37;
                  let tmp44 = closure_2;
                  let diff2 = closure_2 - tmp37;
                  let tmp46 = closure_8;
                  let tmp47 = closure_14;
                  arr1 = items.push(closure_8(closure_14(tmp37 + diff1 % diff2, 0)));
                  let tmp49 = closure_7;
                  let tmp50 = closure_7(diff1 / diff2);
                  let tmp51 = closure_2;
                  let sum3 = tmp39 + closure_2;
                  let num10 = 1;
                  if (sum3 > tmp23) {
                    let num11 = 26;
                    if (sum3 < tmp23 + 26) {
                      num11 = sum3 - tmp23;
                    }
                    num10 = num11;
                  }
                  tmp37 = num10;
                  tmp38 = tmp50;
                  tmp39 = sum3;
                  tmp41 = sum3;
                  tmp40 = tmp50;
                  tmp42 = num10;
                } while (tmp50 >= num10);
              }
              let tmp53 = closure_8;
              let tmp54 = closure_14;
              let arr2 = items.push(closure_8(closure_14(tmp40, 0)));
              let tmp56 = closure_15;
              tmp36 = closure_15(tmp30, sum, tmp22 == length2);
              sum4 = tmp22 + 1;
              tmp24 = tmp40;
              tmp25 = tmp41;
              tmp26 = tmp42;
              num7 = 0;
            }
            num6 = num6 + 1;
            sum1 = num7;
            tmp22 = sum4;
            tmp23 = tmp36;
            tmp27 = num7;
            tmp6 = sum4;
            num3 = tmp36;
            let tmp7 = tmp24;
            let tmp8 = tmp25;
            let tmp9 = tmp26;
            let tmp57 = tmp28;
          } while (num6 < length);
        }
        num4 = tmp27 + 1;
        num = tmp11 + 1;
      } while (tmp6 < length);
    }
    return items.join("");
  }
  let tmp2 = "object" === typeof nodeType && nodeType;
  if (tmp2) {
    tmp2 = !nodeType.nodeType;
  }
  if (tmp2) {
    tmp2 = nodeType;
  }
  let tmp4 = "object" === typeof closure_1 && closure_1;
  if (tmp4) {
    tmp4 = !closure_1.nodeType;
  }
  if (tmp4) {
    tmp4 = closure_1;
  }
  if (!tmp7) {
    tmp = tmp6;
  }
  closure_1 = 2147483647;
  const nodeType = 36;
  let closure_3 = /^xn--/;
  let closure_4 = /[^\x20-\x7E]/;
  let closure_5 = /[\x2E\u3002\uFF0E\uFF61]/g;
  let closure_6 = {};
  const obj = {
    version: "1.4.1",
    ucs2: { decode: ucs2decode, encode: ucs2encode },
    decode,
    encode,
    toASCII(arg0) {
      return mapDomain(arg0, (arg0) => {
        let text = arg0;
        if (regex.test(arg0)) {
          text = `xn--${closure_17(arg0)}`;
        }
        return text;
      });
    },
    toUnicode(arg0) {
      return mapDomain(arg0, (arr) => {
        let tmp = arr;
        if (regex.test(arr)) {
          tmp = callback(arr.slice(4).toLowerCase());
          const str = arr.slice(4);
        }
        return tmp;
      });
    }
  };
  arg0 = obj;
  let tmp8 = typeof globalThis.define;
  if ("function" === tmp8) {
    tmp8 = typeof globalThis.define.amd;
    if ("object" === tmp8) {
      if (globalThis.define.amd) {
        globalThis.define("punycode", () => obj);
      }
    }
  }
  if (tmp2) {
    if (tmp4) {
      if (closure_1.exports == tmp2) {
        tmp4.exports = obj;
      } else {
        for (const key10054 in obj) {
          let tmp12 = key10054;
          if (!obj.hasOwnProperty(key10054)) {
            continue;
          } else {
            tmp2[key10054] = obj[key10054];
            // continue
          }
          continue;
        }
      }
    }
  }
  tmp.punycode = obj;
}(this);
