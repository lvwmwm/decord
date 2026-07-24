// Module ID: 12646
// Function ID: 97858
// Name: inflate_table
// Dependencies: [12635]

// Module 12646 (inflate_table)
let closure_2 = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0];
let closure_3 = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78];
let closure_4 = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0];
let closure_5 = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];

export default function inflate_table(arg0, arg1, arg2, arg3, arg4, arg5, arg6, bits) {
  bits = bits.bits;
  const buf16 = new require(12635) /* _has */.Buf16(16);
  const buf161 = new require(12635) /* _has */.Buf16(16);
  let num = 0;
  do {
    buf16[num] = 0;
    num = num + 1;
  } while (num <= 15);
  for (let num2 = 0; num2 < arg3; num2 = num2 + 1) {
    let tmp3 = arg1[arg2 + num2];
    buf16[tmp3] = buf16[tmp3] + 1;
  }
  let num3 = 15;
  let num4 = 15;
  if (0 === buf16[15]) {
    const diff = num3 - 1;
    num4 = diff;
    while (diff >= 1) {
      num3 = diff;
      num4 = diff;
      if (0 !== buf16[diff]) {
        break;
      }
    }
  }
  if (bits > num4) {
    bits = num4;
  }
  if (0 === num4) {
    arg4[+arg5] = 20971520;
    arg4[++arg5 + 1] = 20971520;
    bits.bits = 1;
    return 0;
  } else {
    let num6 = 1;
    if (1 < num4) {
      let num5 = 1;
      num6 = 1;
      if (0 === buf16[1]) {
        const sum = num5 + 1;
        num6 = sum;
        while (sum < num4) {
          num5 = sum;
          num6 = sum;
          if (0 !== buf16[sum]) {
            break;
          }
        }
      }
    }
    if (bits < num6) {
      bits = num6;
    }
    let num7 = 1;
    let num8 = 1;
    const diff1 = (num8 << 1) - buf16[num7];
    while (diff1 >= 0) {
      num7 = num7 + 1;
      num8 = diff1;
      if (num7 <= 15) {
        continue;
      } else {
        if (diff1 > 0) {
          let num29 = -1;
          return -1;
        }
        buf161[1] = 0;
        let num9 = 1;
        do {
          buf161[num9 + 1] = buf161[num9] + buf16[num9];
          num9 = num9 + 1;
        } while (num9 < 15);
        for (let num10 = 0; num10 < arg3; num10 = num10 + 1) {
          if (0 !== arg1[arg2 + num10]) {
            let tmp7 = arg1[arg2 + num10];
            let tmp8 = +buf161[tmp7];
            buf161[tmp7] = tmp8 + 1;
            arg6[tmp8] = num10;
          }
        }
        let num11 = 19;
        let tmp9 = arg6;
        let num12 = 0;
        let tmp10 = arg6;
        let num13 = 0;
        if (0 !== arg0) {
          if (1 === arg0) {
            tmp9 = closure_2;
            tmp10 = closure_3;
            num11 = 256;
            num12 = -257;
            num13 = -257;
          } else {
            tmp9 = closure_4;
            tmp10 = closure_5;
            num11 = -1;
            num12 = 0;
            num13 = 0;
          }
        }
        let tmp11 = 1 << bits;
        let diff2 = tmp11 - 1;
        if (1 !== arg0) {
          let num15 = 2;
          let num16 = -1;
          let num17 = 24;
          let num18 = 592;
          let num19 = 852;
          let num20 = 96;
          let num21 = -1;
          let tmp13 = arg5;
          let tmp14 = num6;
          let num22 = 0;
          let tmp15 = bits;
          let num23 = 0;
          let tmp16 = diff1;
          let tmp17 = tmp11;
          let num24 = 0;
          if (2 === arg0) {
            num21 = -1;
            tmp13 = arg5;
            tmp14 = num6;
            num22 = 0;
            tmp15 = bits;
            num23 = 0;
            let tmp18 = diff1;
            let num25 = 0;
            tmp17 = tmp11;
          }
          while (true) {
            let diff3 = tmp14 - num23;
            let tmp20 = num21;
            let tmp21 = tmp13;
            let tmp22 = tmp14;
            let tmp23 = tmp15;
            let tmp24 = num23;
            let tmp25 = tmp17;
            if (arg6[num22] < num11) {
              let tmp28 = arg6[num22];
              let num28 = 0;
            } else {
              let num26 = 96;
              let num27 = 0;
              if (arg6[num22] > num11) {
                let tmp26 = tmp10[num13 + arg6[num22]];
                let tmp27 = tmp9[num12 + arg6[num22]];
              }
            }
            let tmp29 = 1 << tmp14 - num23;
            let tmp30 = 1 << tmp15;
            break;
          }
        } else {
          let num14 = 852;
        }
        return 1;
      }
    }
    return -1;
  }
};
