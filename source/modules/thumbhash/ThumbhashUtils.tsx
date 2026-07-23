// Module ID: 15225
// Function ID: 116118
// Name: thumbHashToRGBA
// Dependencies: [14083, 2]
// Exports: createThumbhashImageFromPlaceholder

// Module 15225 (thumbHashToRGBA)
function thumbHashToRGBA(arg0) {
  let obj = arg1;
  const _require = arg0;
  if (arg1 === undefined) {
    obj = {};
  }
  let num = obj.detail;
  if (num === undefined) {
    num = 1;
  }
  let num2 = obj.pop;
  if (num2 === undefined) {
    num2 = 1;
  }
  let num7;
  let c2;
  function decodeChannel(maxResult, maxResult1, arg2) {
    const items = [];
    for (let num = 0; num < maxResult1; num = num + 1) {
      let num2 = 1;
      if (num) {
        num2 = 0;
      }
      if (num2 * maxResult1 < maxResult * (maxResult1 - num)) {
        do {
          let tmp = table;
          let tmp2 = num7;
          let tmp3 = c2;
          let tmp4 = c2;
          let tmp5 = +c2;
          c2 = tmp5 + 1;
          let arr = items.push(((table[num7 + (c2 >> 1)] >> ((1 & tmp5) << 2) & 15) / 7.5 - 1) * arg2);
          num2 = num2 + 1;
          result = num2 * maxResult1;
          result1 = maxResult * (maxResult1 - num);
        } while (result < result1);
      }
    }
    return items;
  }
  let tmp3 = (arg0[0] | arg0[1] << 8 | arg0[2] << 16) >> 23;
  if ((arg0[3] | arg0[4] << 8) >> 15) {
    let num3 = 7;
    if (tmp3) {
      num3 = 5;
    }
    let tmp5 = num3;
  } else {
    tmp5 = 7 & tmp2;
  }
  const maxResult = max(3, tmp5);
  if ((arg0[3] | arg0[4] << 8) >> 15) {
    let num4 = 7 & tmp2;
  } else {
    num4 = 7;
    if (tmp3) {
      num4 = 5;
    }
  }
  const maxResult1 = max(3, num4);
  let num5 = 1;
  if (tmp3) {
    num5 = (15 & arg0[5]) / 15;
  }
  num7 = 5;
  if (tmp3) {
    num7 = 6;
  }
  c2 = 0;
  const decodeChannelResult = decodeChannel(maxResult, maxResult1, ((arg0[0] | arg0[1] << 8 | arg0[2] << 16) >> 18 & 31) / 31 / 2);
  const tmp8 = arg0[5] >> 4;
  const decodeChannelResult1 = decodeChannel(3, 3, ((arg0[3] | arg0[4] << 8) >> 3 & 63) / 63 * num2);
  if (tmp3) {
    let decodeChannelResult3 = decodeChannel(5, 5, tmp8 / 15);
  } else {
    decodeChannelResult3 = [];
  }
  const decodeChannelResult2 = decodeChannel(3, 3, ((arg0[3] | arg0[4] << 8) >> 9 & 63) / 63 * num2);
  let result = _require(num7[0]).thumbHashToApproximateAspectRatio(arg0);
  let num8 = 32;
  if (result <= 1) {
    num8 = 32 * result;
  }
  const w = round(num8);
  let num9 = 32;
  if (result > 1) {
    num9 = 32 / result;
  }
  const h = round(num9);
  const rgba = new Uint8Array(w * h * 4);
  let items = [];
  const items1 = [];
  let result1 = (63 & tmp) / 63;
  let num10 = 0;
  let num11 = 0;
  if (0 < h) {
    do {
      let sum11 = num11;
      let tmp26 = tmp19;
      let tmp27 = tmp20;
      let tmp28 = tmp21;
      let tmp29 = tmp22;
      let tmp30 = tmp23;
      let tmp31 = tmp24;
      let num12 = 0;
      if (0 < w) {
        do {
          let num13 = 3;
          if (tmp3) {
            num13 = 5;
          }
          let maxResult2 = max(maxResult, num13);
          let num14 = 0;
          let num15 = 0;
          if (0 < maxResult2) {
            do {
              items[num14] = cos(PI / w * (num12 + 0.5) * num14);
              num14 = num14 + 1;
              num15 = num14;
            } while (num14 < maxResult2);
          }
          let num16 = 3;
          if (tmp3) {
            num16 = 5;
          }
          let maxResult3 = max(maxResult1, num16);
          let num17 = 0;
          let num18 = 0;
          if (0 < maxResult3) {
            do {
              items1[num17] = cos(PI / h * (num10 + 0.5) * num17);
              num17 = num17 + 1;
              num18 = num17;
            } while (num17 < maxResult3);
          }
          let tmp34 = result1;
          let num19 = 0;
          let num20 = 0;
          let tmp35 = result1;
          let num21 = 0;
          let num22 = 0;
          if (0 < maxResult1) {
            do {
              let num23 = 1;
              if (num19) {
                num23 = 0;
              }
              let result2 = 2 * items1[num19];
              let tmp37 = num23;
              let tmp38 = tmp34;
              let sum2 = num20;
              let tmp40 = tmp34;
              let tmp41 = num20;
              let tmp42 = num23;
              if (num23 * maxResult1 < maxResult * (maxResult1 - num19)) {
                do {
                  let tmp43 = tmp37 > num || num19 > num;
                  let sum = tmp38;
                  if (!tmp43) {
                    sum = tmp38 + decodeChannelResult[sum2] * items[tmp37] * result2;
                  }
                  sum1 = tmp37 + 1;
                  sum2 = sum2 + 1;
                  tmp38 = sum;
                  tmp37 = sum1;
                  tmp40 = sum;
                  tmp41 = sum2;
                  tmp42 = sum1;
                } while (sum1 * maxResult1 < maxResult * (maxResult1 - num19));
              }
              num19 = num19 + 1;
              tmp34 = tmp40;
              num20 = tmp41;
              tmp26 = tmp42;
              tmp35 = tmp40;
              num22 = tmp41;
              tmp27 = result2;
              num21 = num19;
            } while (num19 < maxResult1);
          }
          let tmp46 = tmp26;
          let tmp47 = tmp27;
          let tmp48 = tmp17;
          let tmp49 = tmp18;
          let num24 = 0;
          let num25 = 0;
          do {
            let num26 = 1;
            if (num24) {
              num26 = 0;
            }
            let result3 = 2 * items1[num24];
            let sum5 = num26;
            let sum3 = tmp48;
            let sum4 = tmp49;
            let sum6 = num25;
            let tmp55 = tmp48;
            let tmp56 = tmp49;
            let tmp57 = num25;
            let tmp58 = num26;
            if (num26 < 3 - num24) {
              do {
                let result4 = items[sum5] * result3;
                sum3 = sum3 + decodeChannelResult1[sum6] * result4;
                sum4 = sum4 + decodeChannelResult2[sum6] * result4;
                sum5 = sum5 + 1;
                sum6 = sum6 + 1;
                tmp55 = sum3;
                tmp56 = sum4;
                tmp57 = sum6;
                tmp58 = sum5;
                diff = 3 - num24;
              } while (sum5 < diff);
            }
            sum7 = num24 + 1;
            tmp48 = tmp55;
            tmp49 = tmp56;
            num24 = sum7;
            num25 = tmp57;
          } while (sum7 < 3);
          let tmp62 = num5;
          let num27 = 0;
          let num28 = 0;
          let tmp63 = num5;
          if (tmp3) {
            do {
              let num29 = 1;
              if (num27) {
                num29 = 0;
              }
              let result5 = 2 * items1[num27];
              let sum9 = num29;
              let sum8 = tmp62;
              let sum10 = num28;
              let tmp68 = tmp62;
              let tmp69 = num28;
              let tmp70 = num29;
              if (num29 < 5 - num27) {
                do {
                  sum8 = sum8 + decodeChannelResult3[sum10] * items[sum9] * result5;
                  sum9 = sum9 + 1;
                  sum10 = sum10 + 1;
                  tmp68 = sum8;
                  tmp69 = sum10;
                  tmp70 = sum9;
                  diff1 = 5 - num27;
                } while (sum9 < diff1);
              }
              num27 = num27 + 1;
              tmp62 = tmp68;
              num28 = tmp69;
              tmp30 = tmp70;
              tmp63 = tmp68;
              tmp29 = tmp69;
              tmp31 = result5;
              tmp28 = num27;
            } while (num27 < 5);
          }
          let diff2 = tmp35 - 0.6666666666666666 * tmp55;
          let result6 = (3 * tmp35 - diff2 + tmp56) / 2;
          rgba[sum11] = max(0, 255 * min(1, result6));
          rgba[sum11 + 1] = max(0, 255 * min(1, result6 - tmp56));
          rgba[sum11 + 2] = max(0, 255 * min(1, diff2));
          rgba[sum11 + 3] = max(0, 255 * min(1, tmp63));
          num12 = num12 + 1;
          sum11 = sum11 + 4;
          let tmp74 = tmp63;
          num11 = sum11;
          let tmp75 = tmp35;
          let tmp76 = tmp55;
          let tmp77 = tmp56;
          let tmp78 = num15;
          let tmp79 = maxResult2;
          let tmp80 = num18;
          let tmp81 = maxResult3;
          let tmp82 = num21;
          let tmp83 = num22;
          tmp19 = tmp26;
          tmp20 = tmp27;
          let tmp84 = sum7;
          let tmp85 = tmp57;
          let tmp86 = tmp58;
          let tmp87 = result3;
          tmp21 = tmp28;
          tmp22 = tmp29;
          tmp23 = tmp30;
          tmp24 = tmp31;
        } while (num12 < w);
      }
      num10 = num10 + 1;
    } while (num10 < h);
  }
  return { w, h, rgba };
}
let result = require("set").fileFinishedImporting("modules/thumbhash/ThumbhashUtils.tsx");

export const createThumbhashImageFromPlaceholder = function createThumbhashImageFromPlaceholder(placeholder) {
  const tmp = thumbHashToRGBA(Uint8Array.from(atob(placeholder), (str) => str.charCodeAt(0)), { detail: 1, pop: 1.1 });
  return require(14083) /* thumbHashToRGBA */.rgbaToDataURL(tmp.w, tmp.h, tmp.rgba);
};
export { thumbHashToRGBA };
