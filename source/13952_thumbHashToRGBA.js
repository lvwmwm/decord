// Module ID: 13952
// Function ID: 106085
// Name: thumbHashToRGBA
// Dependencies: []
// Exports: rgbaToThumbHash, thumbHashToAverageRGBA, thumbHashToDataURL

// Module 13952 (thumbHashToRGBA)
function thumbHashToRGBA(arg0) {
  let closure_0 = arg0;
  const result = (63 & tmp) / 63;
  const diff = (tmp >> 6 & 63) / 31.5 - 1;
  const diff1 = (tmp >> 12 & 63) / 31.5 - 1;
  if ((arg0[3] | arg0[4] << 8) >> 15) {
    let num = 7;
    if (tmp6) {
      num = 5;
    }
    let tmp8 = num;
  } else {
    tmp8 = 7 & tmp2;
  }
  const maxResult = max(3, tmp8);
  if ((arg0[3] | arg0[4] << 8) >> 15) {
    let num2 = 7 & tmp2;
  } else {
    num2 = 7;
    if (tmp6) {
      num2 = 5;
    }
  }
  const maxResult1 = max(3, num2);
  let num3 = 1;
  if ((arg0[0] | arg0[1] << 8 | arg0[2] << 16) >> 23) {
    num3 = (15 & arg0[5]) / 15;
  }
  let num5 = 5;
  if ((arg0[0] | arg0[1] << 8 | arg0[2] << 16) >> 23) {
    num5 = 6;
  }
  const thumbHashToRGBA = num5;
  const thumbHashToApproximateAspectRatio = 0;
  function decodeChannel(maxResult, maxResult1, arg2) {
    const items = [];
    for (let num = 0; num < maxResult1; num = num + 1) {
      let num2 = 1;
      if (num) {
        num2 = 0;
      }
      if (num2 * maxResult1 < maxResult * (maxResult1 - num)) {
        do {
          let tmp = closure_0;
          let tmp2 = closure_1;
          let tmp3 = closure_2;
          let tmp4 = closure_2;
          let tmp5 = +closure_2;
          closure_2 = tmp5 + 1;
          let arr = items.push(((closure_0[closure_1 + (closure_2 >> 1)] >> ((1 & tmp5) << 2) & 15) / 7.5 - 1) * arg2);
          num2 = num2 + 1;
          let result = num2 * maxResult1;
          let result1 = maxResult * (maxResult1 - num);
        } while (result < result1);
      }
    }
    return items;
  }
  const decodeChannelResult = decodeChannel(maxResult, maxResult1, ((arg0[0] | arg0[1] << 8 | arg0[2] << 16) >> 18 & 31) / 31);
  const tmp11 = arg0[5] >> 4;
  let decodeChannelResult3 = tmp6;
  const decodeChannelResult1 = decodeChannel(3, 3, 1.25 * (((arg0[3] | arg0[4] << 8) >> 3 & 63) / 63));
  if ((arg0[0] | arg0[1] << 8 | arg0[2] << 16) >> 23) {
    decodeChannelResult3 = decodeChannel(5, 5, tmp11 / 15);
  }
  const tmp16 = thumbHashToApproximateAspectRatio(arg0);
  let num6 = 32;
  if (tmp16 <= 1) {
    num6 = 32 * tmp16;
  }
  const w = round(num6);
  let num7 = 32;
  if (tmp16 > 1) {
    num7 = 32 / tmp16;
  }
  const h = round(num7);
  const rgba = new Uint8Array(w * h * 4);
  const items = [];
  const items1 = [];
  let num8 = 0;
  let num9 = 0;
  if (0 < h) {
    do {
      let sum11 = num9;
      let tmp28 = tmp21;
      let tmp29 = tmp22;
      let tmp30 = tmp23;
      let tmp31 = tmp24;
      let tmp32 = tmp25;
      let tmp33 = tmp26;
      let num10 = 0;
      if (0 < w) {
        do {
          let num11 = 3;
          if (tmp6) {
            num11 = 5;
          }
          let maxResult2 = max(maxResult, num11);
          let num12 = 0;
          let num13 = 0;
          if (0 < maxResult2) {
            do {
              items[num12] = cos(PI / w * (num10 + 0.5) * num12);
              num12 = num12 + 1;
              num13 = num12;
            } while (num12 < maxResult2);
          }
          let num14 = 3;
          if (tmp6) {
            num14 = 5;
          }
          let maxResult3 = max(maxResult1, num14);
          let num15 = 0;
          let num16 = 0;
          if (0 < maxResult3) {
            do {
              items1[num15] = cos(PI / h * (num8 + 0.5) * num15);
              num15 = num15 + 1;
              num16 = num15;
            } while (num15 < maxResult3);
          }
          let tmp36 = result;
          let num17 = 0;
          let num18 = 0;
          let tmp37 = result;
          let num19 = 0;
          let num20 = 0;
          if (0 < maxResult1) {
            do {
              let num21 = 1;
              if (num17) {
                num21 = 0;
              }
              let result1 = 2 * items1[num17];
              let tmp39 = num21;
              let sum = tmp36;
              let sum2 = num18;
              let tmp42 = tmp36;
              let tmp43 = num18;
              let tmp44 = num21;
              if (num21 * maxResult1 < maxResult * (maxResult1 - num17)) {
                do {
                  sum = sum + decodeChannelResult[sum2] * items[tmp39] * result1;
                  let sum1 = tmp39 + 1;
                  sum2 = sum2 + 1;
                  tmp39 = sum1;
                  tmp42 = sum;
                  tmp43 = sum2;
                  tmp44 = sum1;
                  let result2 = sum1 * maxResult1;
                  let result3 = maxResult * (maxResult1 - num17);
                } while (result2 < result3);
              }
              num17 = num17 + 1;
              tmp36 = tmp42;
              num18 = tmp43;
              tmp28 = tmp44;
              tmp37 = tmp42;
              num20 = tmp43;
              tmp29 = result1;
              num19 = num17;
            } while (num17 < maxResult1);
          }
          let tmp48 = tmp28;
          let tmp49 = tmp29;
          let tmp50 = diff;
          let tmp51 = diff1;
          let num22 = 0;
          let num23 = 0;
          do {
            let num24 = 1;
            if (num22) {
              num24 = 0;
            }
            let result4 = 2 * items1[num22];
            let sum5 = num24;
            let sum3 = tmp50;
            let sum4 = tmp51;
            let sum6 = num23;
            let tmp57 = tmp50;
            let tmp58 = tmp51;
            let tmp59 = num23;
            let tmp60 = num24;
            if (num24 < 3 - num22) {
              do {
                let result5 = items[sum5] * result4;
                sum3 = sum3 + decodeChannelResult1[sum6] * result5;
                sum4 = sum4 + decodeChannelResult2[sum6] * result5;
                sum5 = sum5 + 1;
                sum6 = sum6 + 1;
                tmp57 = sum3;
                tmp58 = sum4;
                tmp59 = sum6;
                tmp60 = sum5;
                let diff2 = 3 - num22;
              } while (sum5 < diff2);
            }
            let sum7 = num22 + 1;
            tmp50 = tmp57;
            tmp51 = tmp58;
            num22 = sum7;
            num23 = tmp59;
          } while (sum7 < 3);
          let tmp64 = num3;
          let num25 = 0;
          let num26 = 0;
          let tmp65 = num3;
          if (tmp6) {
            do {
              let num27 = 1;
              if (num25) {
                num27 = 0;
              }
              let result6 = 2 * items1[num25];
              let sum9 = num27;
              let sum8 = tmp64;
              let sum10 = num26;
              let tmp70 = tmp64;
              let tmp71 = num26;
              let tmp72 = num27;
              if (num27 < 5 - num25) {
                do {
                  sum8 = sum8 + decodeChannelResult3[sum10] * items[sum9] * result6;
                  sum9 = sum9 + 1;
                  sum10 = sum10 + 1;
                  tmp70 = sum8;
                  tmp71 = sum10;
                  tmp72 = sum9;
                  let diff3 = 5 - num25;
                } while (sum9 < diff3);
              }
              num25 = num25 + 1;
              tmp64 = tmp70;
              num26 = tmp71;
              tmp32 = tmp72;
              tmp65 = tmp70;
              tmp31 = tmp71;
              tmp33 = result6;
              tmp30 = num25;
            } while (num25 < 5);
          }
          let diff4 = tmp37 - 0.6666666666666666 * tmp57;
          let result7 = (3 * tmp37 - diff4 + tmp58) / 2;
          rgba[sum11] = max(0, 255 * min(1, result7));
          rgba[sum11 + 1] = max(0, 255 * min(1, result7 - tmp58));
          rgba[sum11 + 2] = max(0, 255 * min(1, diff4));
          rgba[sum11 + 3] = max(0, 255 * min(1, tmp65));
          num10 = num10 + 1;
          sum11 = sum11 + 4;
          let tmp76 = tmp65;
          num9 = sum11;
          let tmp77 = tmp37;
          let tmp78 = tmp57;
          let tmp79 = tmp58;
          let tmp80 = num13;
          let tmp81 = maxResult2;
          let tmp82 = num16;
          let tmp83 = maxResult3;
          let tmp84 = num19;
          let tmp85 = num20;
          let tmp21 = tmp28;
          let tmp22 = tmp29;
          let tmp86 = sum7;
          let tmp87 = tmp59;
          let tmp88 = tmp60;
          let tmp89 = result4;
          let tmp23 = tmp30;
          let tmp24 = tmp31;
          let tmp25 = tmp32;
          let tmp26 = tmp33;
        } while (num10 < w);
      }
      num8 = num8 + 1;
    } while (num8 < h);
  }
  return { w, h, rgba };
}
function thumbHashToApproximateAspectRatio(arg0) {
  if (128 & arg0[4]) {
    let num = 7;
    if (tmp2) {
      num = 5;
    }
    let tmp4 = num;
  } else {
    tmp4 = 7 & tmp;
  }
  if (128 & arg0[4]) {
    let num2 = 7 & tmp;
  } else {
    num2 = 7;
    if (tmp2) {
      num2 = 5;
    }
  }
  return tmp4 / num2;
}
function rgbaToDataURL(w, h, rgba) {
  let tmp59;
  let tmp60;
  const sum = 4 * w + 1;
  const sum1 = 6 + h * (5 + sum);
  const items = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, w >> 8, 255 & w, 0, 0, h >> 8, 255 & h, 8, 6, 0, 0, 0, 0, 0, 0, 0, sum1 >>> 24, sum1 >> 16 & 255, sum1 >> 8 & 255, 255 & sum1, 73, 68, 65, 84, 120, 1];
  let arr1 = items;
  const items1 = [-66346743, -1790820086, -1304231934, 872415521, -1157627401, 1124073753, 162662, 153728, -306674912, -267414716, -690576408, -882789492, -1687895376, -2032938284, -1609899400, -1111625188];
  const diff = sum - 1;
  let num = 1;
  let num2 = 0;
  let num3 = 0;
  let num4 = 0;
  let sum3 = diff;
  let num5 = 1;
  let num6 = 0;
  if (0 < h) {
    do {
      let num7 = 1;
      let tmp10 = items;
      if (num3 + 1 < h) {
        num7 = 0;
      }
      let tmp11 = arr1;
      let tmp12 = num7;
      let tmp13 = tmp6;
      let tmp14 = tmp5;
      let tmp15 = tmp7;
      let tmp16 = tmp8;
      let num8 = 0;
      let arr = arr1.push(num7, tmp6, tmp5, tmp7, tmp8, 0);
      let result = (num2 + num) % 65521;
      let tmp19 = num;
      let sum2 = num4;
      let tmp21 = num;
      let tmp22 = result;
      if (num4 < sum3) {
        do {
          let tmp23 = 255 & rgba[sum2];
          let tmp24 = items;
          arr = arr1.push(tmp23);
          let result1 = (tmp19 + tmp23) % 65521;
          result = (result + result1) % 65521;
          sum2 = sum2 + 1;
          tmp19 = result1;
          tmp21 = result1;
          tmp22 = result;
          num4 = sum2;
        } while (sum2 < sum3);
      }
      num3 = num3 + 1;
      sum3 = sum3 + diff;
      num = tmp21;
      num2 = tmp22;
      num5 = tmp21;
      num6 = tmp22;
    } while (num3 < h);
  }
  arr1 = arr1.push(num6 >> 8, 255 & num6, num5 >> 8, 255 & num5, 0, 0, 0, 0, 0, 0, 0, 0, 73, 69, 78, 68, 174, 66, 96, 130);
  const items2 = [["%Function.prototype.call%", "DEFAULT_NAVIGATION_SPAN_NAME"], ];
  const items3 = [null, 41 + sum1];
  items2[1] = items3;
  while (tmp28 !== undefined) {
    let tmp57 = callback;
    let tmp58 = callback(tmp29, 2);
    [tmp59, tmp60] = tmp58;
    let tmp61 = tmp60;
    let num9 = -1;
    let tmp39 = tmp59;
    if (tmp59 < tmp60) {
      do {
        let tmp30 = num9;
        let tmp31 = items;
        let tmp32 = tmp39;
        let tmp33 = num9 ^ arr1[tmp39];
        let tmp34 = tmp33;
        let tmp35 = items1;
        let tmp36 = tmp33 >>> 4 ^ tmp3[15 & tmp33];
        let tmp37 = tmp36;
        num9 = tmp36 >>> 4 ^ tmp3[15 & tmp36];
        let sum4 = tmp39 + 1;
        tmp39 = sum4;
        let tmp40 = tmp60;
      } while (sum4 < tmp61);
    }
    let tmp41 = num9;
    let tmp42 = ~num9;
    let tmp43 = tmp42;
    let tmp44 = items;
    let tmp45 = tmp60;
    let tmp46 = +tmp61;
    let sum5 = tmp46 + 1;
    let tmp48 = sum5;
    arr1[tmp46] = tmp42 >>> 24;
    let tmp49 = +sum5;
    let sum6 = tmp49 + 1;
    let tmp51 = sum6;
    arr1[tmp49] = tmp42 >> 16 & 255;
    let tmp52 = +sum6;
    let sum7 = tmp52 + 1;
    let tmp54 = sum7;
    arr1[tmp52] = tmp42 >> 8 & 255;
    let tmp55 = +sum7;
    let sum8 = tmp55 + 1;
    arr1[tmp55] = 255 & tmp42;
    // continue
  }
  return "data:image/png;base64," + btoa(fromCharCode.apply(String, items));
}
let closure_0 = importDefault(dependencyMap[0]);

export const rgbaToThumbHash = function rgbaToThumbHash(arg0, arg1, arg2) {
  let result10;
  let result2;
  let tmp24;
  let tmp25;
  let tmp26;
  let tmp29;
  let tmp30;
  let tmp31;
  let tmp34;
  let tmp35;
  let tmp36;
  const callback = arg0;
  const thumbHashToRGBA = arg1;
  if (arg0 <= 100) {
    if (arg1 <= 100) {
      const _Math = Math;
      const thumbHashToApproximateAspectRatio = Math.PI;
      const _Math2 = Math;
      const _Math3 = Math;
      const rgbaToDataURL = max;
      const _Math4 = Math;
      const _Math5 = Math;
      let num = 0;
      let num2 = 0;
      let num3 = 0;
      let num4 = 0;
      let num5 = 0;
      let num6 = 0;
      let num7 = 0;
      let num8 = 0;
      let num9 = 0;
      let num10 = 0;
      if (0 < arg0 * arg1) {
        do {
          let result = arg2[num6 + 3] / 255;
          let result1 = result / 255;
          num = num + result1 * arg2[num6];
          num2 = num2 + result1 * arg2[num6 + 1];
          num3 = num3 + result1 * arg2[num6 + 2];
          num4 = num4 + result;
          num5 = num5 + 1;
          num6 = num6 + 4;
          num7 = num;
          num8 = num2;
          num9 = num3;
          num10 = num4;
          result2 = arg0 * arg1;
        } while (num5 < result2);
      }
      let result3 = num7;
      let result4 = num8;
      let result5 = num9;
      if (num10) {
        result3 = num7 / num10;
        result4 = num8 / num10;
        result5 = num9 / num10;
      }
      let num11 = 7;
      if (num10 < arg0 * arg1) {
        num11 = 5;
      }
      const result6 = num11 * arg0;
      let maxResult = max(1, round(result6 / max(arg0, arg1)));
      const result7 = num11 * arg1;
      const maxResult1 = max(1, round(result7 / max(arg0, arg1)));
      const items = [];
      const items1 = [];
      const items2 = [];
      const items3 = [];
      let num12 = 0;
      let num13 = 0;
      if (0 < arg0 * arg1) {
        do {
          let result8 = arg2[num13 + 3] / 255;
          let diff = 1 - result8;
          let result9 = result8 / 255;
          let sum = result3 * diff + result9 * arg2[num13];
          let sum1 = result4 * diff + result9 * arg2[num13 + 1];
          let sum2 = result5 * diff + result9 * arg2[num13 + 2];
          let sum3 = sum + sum1;
          items[num12] = (sum3 + sum2) / 3;
          items1[num12] = sum3 / 2 - sum2;
          items2[num12] = sum - sum1;
          items3[num12] = result8;
          num12 = num12 + 1;
          num13 = num13 + 4;
          result10 = arg0 * arg1;
        } while (num12 < result10);
      }
      function encodeChannel(items, maxResult2, arg2) {
        let length;
        items = [];
        const items1 = [];
        let num = 0;
        let num2 = 0;
        let num3 = 0;
        let num4 = 0;
        let num5 = 0;
        if (0 < arg2) {
          do {
            let tmp3 = num;
            let tmp4 = num2;
            let tmp5 = tmp;
            let tmp6 = tmp2;
            let num6 = 0;
            let tmp7 = num;
            let tmp8 = num2;
            if (0 < maxResult2 * (arg2 - num3)) {
              do {
                let tmp9 = closure_0;
                let num7 = 0;
                let num8 = 0;
                if (0 < closure_0) {
                  do {
                    let tmp10 = closure_4;
                    let tmp11 = closure_2;
                    let tmp12 = closure_0;
                    items1[num7] = closure_4(closure_2 / closure_0 * num6 * (num7 + 0.5));
                    num7 = num7 + 1;
                    num8 = num7;
                  } while (num7 < closure_0);
                }
                let tmp13 = closure_1;
                let num9 = 0;
                let num10 = 0;
                let num11 = 0;
                let num12 = 0;
                if (0 < closure_1) {
                  do {
                    let tmp14 = closure_4;
                    let tmp15 = closure_2;
                    let tmp16 = closure_1;
                    let tmp17 = closure_4(closure_2 / closure_1 * num3 * (num10 + 0.5));
                    let tmp18 = closure_0;
                    let sum = num9;
                    let num13 = 0;
                    let tmp20 = num9;
                    let num14 = 0;
                    if (0 < closure_0) {
                      do {
                        let tmp21 = closure_0;
                        sum = sum + items[num13 + num10 * closure_0] * items1[num13] * tmp17;
                        num13 = num13 + 1;
                        tmp20 = sum;
                        num14 = num13;
                      } while (num13 < closure_0);
                    }
                    num10 = num10 + 1;
                    let tmp22 = closure_1;
                    num9 = tmp20;
                    tmp5 = num14;
                    num11 = tmp20;
                    tmp6 = tmp17;
                    num12 = num10;
                  } while (num10 < closure_1);
                }
                let tmp23 = closure_0;
                let tmp24 = closure_1;
                let result = num11 / (closure_0 * closure_1);
                let tmp26 = tmp5;
                let tmp27 = tmp6;
                if (num6) {
                  let arr = items.push(result);
                  let tmp31 = closure_3;
                  let tmp32 = closure_5;
                  let tmp29 = closure_3(tmp4, closure_5(result));
                  let tmp28 = tmp3;
                } else {
                  tmp28 = result;
                  tmp29 = tmp4;
                }
                num6 = num6 + 1;
                tmp3 = tmp28;
                tmp4 = tmp29;
                tmp7 = tmp28;
                tmp8 = tmp29;
                let tmp33 = result;
                let tmp34 = num8;
                let tmp35 = num12;
                let tmp = tmp5;
                let tmp2 = tmp6;
              } while (num6 * arg2 < maxResult2 * (arg2 - num3));
            }
            num3 = num3 + 1;
            num = tmp7;
            num2 = tmp8;
            num4 = tmp7;
            num5 = tmp8;
          } while (num3 < arg2);
        }
        if (num5) {
          let num15 = 0;
          if (0 < items.length) {
            do {
              items[num15] = 0.5 + 0.5 / num5 * items[num15];
              num15 = num15 + 1;
              length = items.length;
            } while (num15 < length);
          }
        }
        const items2 = [num4, items, num5];
        return items2;
      }
      const maxResult2 = max(3, maxResult);
      [tmp24, tmp25, tmp26] = callback(encodeChannel(items, max(3, maxResult), max(3, maxResult1)), 3);
      const tmp23 = callback(encodeChannel(items, max(3, maxResult), max(3, maxResult1)), 3);
      [tmp29, tmp30, tmp31] = callback(encodeChannel(items1, 3, 3), 3);
      const tmp28 = callback(encodeChannel(items1, 3, 3), 3);
      [tmp34, tmp35, tmp36] = callback(encodeChannel(items2, 3, 3), 3);
      if (num10 < arg0 * arg1) {
        let encodeChannelResult = encodeChannel(items3, 5, 5);
      } else {
        encodeChannelResult = [];
      }
      const tmp38 = callback(encodeChannelResult, 3);
      let tmp39 = tmp38[1];
      const tmp33 = callback(encodeChannel(items2, 3, 3), 3);
      const roundResult = round(63 * tmp24);
      const tmp43 = round(63 * tmp24) | round(31.5 + 31.5 * tmp29) << 6;
      const tmp45 = tmp43 | round(31.5 + 31.5 * tmp34) << 12 | round(31 * tmp26) << 18 | (num10 < arg0 * arg1) << 23;
      if (arg0 > arg1) {
        maxResult = maxResult1;
      }
      const tmp44 = round(31.5 + 31.5 * tmp34) << 12;
      const tmp48 = maxResult | round(63 * tmp31) << 3 | round(63 * tmp36) << 9 | (arg0 > arg1) << 15;
      const items4 = [255 & tmp45, tmp45 >> 8 & 255, tmp45 >> 16, 255 & tmp48, tmp48 >> 8];
      let num26 = 5;
      if (num10 < arg0 * arg1) {
        num26 = 6;
      }
      if (num10 < arg0 * arg1) {
        arr7.push(round(15 * tmp38[0]) | round(15 * tmp38[2]) << 4);
        const roundResult1 = round(15 * tmp38[0]);
      }
      if (num10 < arg0 * arg1) {
        const items5 = [tmp25, tmp30, tmp35, tmp39];
        let items6 = items5;
      } else {
        items6 = [tmp25, tmp30, tmp35];
      }
      tmp39 = items6[Symbol.iterator]();
      const arr7 = items4;
      const tmp47 = maxResult | round(63 * tmp31) << 3;
    }
  }
  const error = new Error("" + arg0 + "x" + arg1 + " doesn't fit in 100x100");
  throw error;
};
export { thumbHashToRGBA };
export const thumbHashToAverageRGBA = function thumbHashToAverageRGBA(arg0) {
  const result = (63 & tmp) / 63;
  const diff = (tmp >> 12 & 63) / 31.5 - 1;
  let num = 1;
  if ((arg0[0] | arg0[1] << 8 | arg0[2] << 16) >> 23) {
    num = (15 & arg0[5]) / 15;
  }
  const diff1 = result - 0.6666666666666666 * ((tmp >> 6 & 63) / 31.5 - 1);
  const result1 = (3 * result - diff1 + diff) / 2;
  const obj = { r: max(0, min(1, result1)), g: max(0, min(1, result1 - diff)), b: max(0, min(1, diff1)), a: num };
  return obj;
};
export { thumbHashToApproximateAspectRatio };
export { rgbaToDataURL };
export const thumbHashToDataURL = function thumbHashToDataURL(arg0) {
  const tmp = thumbHashToRGBA(arg0);
  return rgbaToDataURL(tmp.w, tmp.h, tmp.rgba);
};
