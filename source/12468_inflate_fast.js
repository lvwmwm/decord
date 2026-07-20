// Module ID: 12468
// Function ID: 95310
// Name: inflate_fast
// Dependencies: []

// Module 12468 (inflate_fast)

export default function inflate_fast(avail_in) {
  let _window;
  let bits;
  let distcode;
  let hold;
  let input;
  let lencode;
  let next_in;
  let next_out;
  let output;
  let state;
  let wnext;
  let wsize;
  ({ state, next_in, input } = avail_in);
  let sum = next_in + (avail_in.avail_in - 5);
  ({ next_out, output } = avail_in);
  const sum1 = next_out + (avail_in.avail_out - 257);
  ({ wsize, wnext, window: _window, hold, bits, lencode, distcode } = state);
  while (true) {
    let sum3 = next_in;
    let sum4 = hold;
    let sum5 = bits;
    if (bits < 15) {
      let tmp15 = +next_in;
      let sum2 = bits + 8;
      let tmp17 = +tmp15 + 1;
      sum3 = tmp17 + 1;
      sum4 = hold + (input[tmp15] << bits) + (input[tmp17] << sum2);
      sum5 = sum2 + 8;
    }
    let tmp18 = lencode[sum4 & tmp6];
    let tmp19 = tmp18 >>> 24;
    let tmp20 = sum4 >>> tmp19;
    let diff = sum5 - tmp19;
    let tmp22 = tmp18 >>> 16 & 255;
    let tmp23 = tmp18;
    while (0 !== tmp22) {
      if (16 & tmp22) {
        let tmp28 = 65535 & tmp18;
        let tmp29 = tmp22 & 15;
        let tmp30 = sum3;
        let tmp31 = tmp20;
        let diff1 = diff;
        let sum9 = tmp28;
        if (tmp29) {
          let sum6 = sum3;
          let sum7 = tmp20;
          let sum8 = diff;
          if (diff < tmp29) {
            let tmp37 = +sum3;
            sum6 = tmp37 + 1;
            sum7 = tmp20 + (input[tmp37] << diff);
            sum8 = diff + 8;
          }
          sum9 = tmp28 + (sum7 & (1 << tmp29) - 1);
          tmp31 = sum7 >>> tmp29;
          diff1 = sum8 - tmp29;
          tmp30 = sum6;
        }
        let sum11 = tmp30;
        let sum12 = tmp31;
        let sum13 = diff1;
        if (diff1 < 15) {
          let tmp41 = +tmp30;
          let sum10 = diff1 + 8;
          let tmp43 = +tmp41 + 1;
          sum11 = tmp43 + 1;
          sum12 = tmp31 + (input[tmp41] << diff1) + (input[tmp43] << sum10);
          sum13 = sum10 + 8;
        }
        let tmp44 = distcode[sum12 & tmp7];
        let tmp45 = tmp44 >>> 24;
        let tmp46 = sum12 >>> tmp45;
        let diff2 = sum13 - tmp45;
        let tmp48 = tmp44 >>> 16 & 255;
        let tmp49 = tmp44;
        while (!(16 & tmp48)) {
          if (64 & tmp48) {
            let str2 = "invalid distance code";
            avail_in.msg = "invalid distance code";
            let num4 = 30;
            state.mode = 30;
            let tmp24 = sum11;
            let tmp25 = next_out;
            let tmp26 = tmp46;
            let tmp27 = diff2;
          } else {
            sum12 = tmp46;
            sum13 = diff2;
            // continue
          }
          sum = tmp27 >> 3;
          sum = tmp24 - sum;
          sum = tmp27 - (sum << 3);
          avail_in.next_in = sum;
          avail_in.next_out = tmp25;
          if (sum < sum) {
            sum = sum - sum + 5;
          } else {
            sum = 5 - (sum - sum);
          }
          avail_in.avail_in = sum;
          if (tmp25 < sum1) {
            sum = sum1 - tmp25 + 257;
          } else {
            sum = 257 - (tmp25 - sum1);
          }
          avail_in.avail_out = sum;
          state.hold = tmp26 & (1 << sum) - 1;
          state.bits = sum;
        }
        let tmp51 = tmp48 & 15;
        let tmp52 = sum11;
        let tmp53 = tmp46;
        let tmp54 = diff2;
        let tmp50 = 65535 & tmp44;
        if (diff2 < tmp51) {
          let tmp55 = +sum11;
          let sum14 = tmp55 + 1;
          let sum15 = tmp46 + (input[tmp55] << diff2);
          let sum16 = diff2 + 8;
          let sum17 = sum14;
          let sum18 = sum15;
          let sum19 = sum16;
          if (sum16 < tmp51) {
            let tmp62 = +sum14;
            sum17 = tmp62 + 1;
            sum18 = sum15 + (input[tmp62] << sum16);
            sum19 = sum16 + 8;
          }
          tmp52 = sum17;
          tmp53 = sum18;
          tmp54 = sum19;
        }
        let sum20 = tmp50 + (tmp53 & (1 << tmp51) - 1);
        if (sum20 > tmp4) {
          let str4 = "invalid distance too far back";
          avail_in.msg = "invalid distance too far back";
          let num8 = 30;
          state.mode = 30;
          tmp24 = tmp52;
          tmp25 = next_out;
          tmp26 = tmp53;
          tmp27 = tmp54;
        } else {
          sum = tmp53 >>> tmp51;
          sum = tmp54 - tmp51;
          sum = next_out - tmp2;
          if (sum20 > sum) {
            let diff3 = sum20 - sum;
            if (diff3 > tmp5) {
              if (state.sane) {
                let str3 = "invalid distance too far back";
                avail_in.msg = "invalid distance too far back";
                let num7 = 30;
                state.mode = 30;
                tmp24 = tmp52;
                tmp25 = next_out;
                tmp26 = sum;
                tmp27 = sum;
              }
            }
            if (0 === wnext) {
              sum = wsize - diff3;
              let tmp94 = next_out;
              let tmp95 = sum9;
              let num5 = sum;
              let tmp96 = _window;
              if (diff3 < sum9) {
                sum = next_out;
                sum = sum9 - diff3;
                do {
                  sum = +sum;
                  sum = sum + 1;
                  sum = +sum;
                  sum = sum + 1;
                  output[sum] = _window[sum];
                  diff3 = diff3 - 1;
                } while (diff3);
                num5 = sum - sum20;
                tmp94 = sum;
                tmp95 = sum;
                tmp96 = output;
              }
            } else if (wnext < diff3) {
              sum = wsize + wnext - diff3;
              sum = diff3 - wnext;
              tmp94 = next_out;
              num5 = sum;
              tmp96 = _window;
              tmp95 = sum9;
              if (sum < sum9) {
                sum = sum9 - sum;
                sum = next_out;
                do {
                  sum = +sum;
                  sum = sum + 1;
                  sum = +sum;
                  sum = sum + 1;
                  output[sum] = _window[sum];
                  sum = sum - 1;
                } while (sum);
                tmp94 = sum;
                tmp95 = sum;
                num5 = 0;
                tmp96 = _window;
                if (wnext < sum) {
                  sum = wnext;
                  let num6 = 0;
                  sum = sum - wnext;
                  do {
                    sum = +sum;
                    sum = sum + 1;
                    sum = +num6;
                    num6 = sum + 1;
                    output[sum] = _window[sum];
                    sum = sum - 1;
                  } while (sum);
                  num5 = sum - sum20;
                  tmp94 = sum;
                  tmp95 = sum;
                  tmp96 = output;
                }
              }
            } else {
              let diff4 = wnext - diff3;
              tmp94 = next_out;
              tmp95 = sum9;
              num5 = diff4;
              tmp96 = _window;
              if (diff3 < sum9) {
                sum = next_out;
                sum = diff3;
                sum = sum9 - diff3;
                do {
                  let tmp97 = +sum;
                  let sum21 = tmp97 + 1;
                  let tmp99 = +diff4;
                  diff4 = tmp99 + 1;
                  output[tmp97] = _window[tmp99];
                  sum = sum - 1;
                  sum = sum21;
                } while (sum);
                num5 = sum21 - sum20;
                tmp94 = sum21;
                tmp95 = sum;
                tmp96 = output;
              }
            }
            sum = tmp94;
            sum = tmp95;
            sum = num5;
            sum = tmp94;
            sum = num5;
            sum = tmp95;
            if (tmp95 > 2) {
              do {
                sum = +sum;
                sum = +sum;
                output[sum] = tmp96[sum];
                sum = +sum + 1;
                sum = +sum + 1;
                output[sum] = tmp96[sum];
                sum = +sum + 1;
                sum = sum + 1;
                sum = +sum + 1;
                sum = sum + 1;
                output[sum] = tmp96[sum];
                sum = sum - 3;
              } while (sum > 2);
            }
            let tmp76 = tmp52;
            let sum28 = sum;
            let tmp78 = sum;
            let tmp79 = sum;
            let tmp80 = sum;
            let tmp81 = sum20;
            let tmp82 = sum;
            let tmp83 = tmp96;
            if (sum) {
              sum = +sum;
              sum = sum + 1;
              sum = +sum;
              sum = sum + 1;
              output[sum] = tmp96[sum];
              if (sum > 1) {
                sum = +sum;
                sum = sum + 1;
                sum = +sum;
                sum = sum + 1;
                output[sum] = tmp96[sum];
              }
              sum28 = sum;
              tmp82 = sum;
              tmp76 = tmp52;
              tmp78 = sum;
              tmp79 = sum;
              tmp80 = sum;
              tmp81 = sum20;
              tmp83 = tmp96;
            }
          } else {
            let diff5 = next_out - sum20;
            let tmp73 = next_out;
            let tmp74 = sum9;
            do {
              let tmp64 = +tmp73;
              let tmp65 = +diff5;
              output[tmp64] = output[tmp65];
              let tmp66 = +tmp64 + 1;
              let tmp67 = +tmp65 + 1;
              output[tmp66] = output[tmp67];
              let tmp68 = +tmp66 + 1;
              let sum22 = tmp68 + 1;
              let tmp70 = +tmp67 + 1;
              let sum23 = tmp70 + 1;
              output[tmp68] = output[tmp70];
              let diff6 = tmp74 - 3;
              tmp73 = sum22;
              tmp74 = diff6;
              diff5 = sum23;
            } while (diff6 > 2);
            tmp76 = tmp52;
            sum28 = sum22;
            tmp78 = sum;
            tmp79 = sum;
            tmp80 = diff6;
            tmp81 = sum20;
            tmp82 = sum23;
            tmp83 = tmp11;
            if (diff6) {
              let tmp84 = +sum22;
              let sum24 = tmp84 + 1;
              let tmp86 = +sum23;
              let sum25 = tmp86 + 1;
              output[tmp84] = output[tmp86];
              let sum26 = sum24;
              let sum27 = sum25;
              if (diff6 > 1) {
                let tmp90 = +sum24;
                sum26 = tmp90 + 1;
                let tmp91 = +sum25;
                sum27 = tmp91 + 1;
                output[tmp90] = output[tmp91];
              }
              sum28 = sum26;
              tmp82 = sum27;
              tmp76 = tmp52;
              tmp78 = sum;
              tmp79 = sum;
              tmp80 = diff6;
              tmp81 = sum20;
              tmp83 = tmp11;
            }
          }
          tmp24 = tmp76;
          tmp25 = sum28;
          tmp26 = tmp78;
          tmp27 = tmp79;
          if (tmp76 < sum) {
            next_in = tmp76;
            next_out = sum28;
            hold = tmp78;
            bits = tmp79;
            let tmp8 = tmp80;
            let tmp9 = tmp81;
            let tmp10 = tmp82;
            let tmp11 = tmp83;
            tmp24 = tmp76;
            tmp26 = tmp78;
            tmp27 = tmp79;
            tmp25 = sum28;
          }
        }
      } else if (64 & tmp22) {
        let num = 32;
        if (32 & tmp22) {
          let num3 = 12;
          state.mode = 12;
          tmp24 = sum3;
          tmp25 = next_out;
          tmp26 = tmp20;
          tmp27 = diff;
        } else {
          let str = "invalid literal/length code";
          avail_in.msg = "invalid literal/length code";
          let num2 = 30;
          state.mode = 30;
          tmp24 = sum3;
          tmp25 = next_out;
          tmp26 = tmp20;
          tmp27 = diff;
        }
      } else {
        sum4 = tmp20;
        sum5 = diff;
        // continue
      }
      continue;
    }
    sum = +next_out;
    sum28 = sum + 1;
    output[sum] = 65535 & tmp18;
    tmp76 = sum3;
    tmp78 = tmp20;
    tmp79 = diff;
    tmp80 = tmp8;
    tmp81 = tmp9;
    tmp82 = tmp10;
    tmp83 = tmp11;
  }
};
