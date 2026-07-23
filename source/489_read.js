// Module ID: 489
// Function ID: 6413
// Name: read
// Dependencies: []

// Module 489 (read)
arg5.read = (arg0, arg1, arg2, closure_0) => {
  let num = 1;
  const diff = 8 * arg4 - closure_0 - 1;
  const diff1 = (1 << diff) - 1;
  let num2 = 0;
  if (arg2) {
    num2 = arg4 - num;
  }
  let num3 = num;
  if (arg2) {
    num3 = -1;
  }
  const sum = num2 + num3;
  let sum2 = tmp4 & 127;
  let sum1 = -7 + diff;
  let sum3 = sum;
  let tmp10 = sum2;
  let sum6 = sum;
  let tmp12 = sum1;
  if (sum1 > 0) {
    do {
      sum2 = 256 * sum2 + arg0[arg1 + sum3];
      sum3 = sum3 + num3;
      sum1 = sum1 - 8;
      tmp10 = sum2;
      sum6 = sum3;
      tmp12 = sum1;
    } while (sum1 > 0);
  }
  let sum4 = tmp12 + closure_0;
  let sum5 = tmp14;
  let tmp18 = tmp14;
  if (sum4 > 0) {
    do {
      sum5 = 256 * sum5 + arg0[arg1 + sum6];
      sum6 = sum6 + num3;
      sum4 = sum4 - 8;
      tmp18 = sum5;
    } while (sum4 > 0);
  }
  if (0 === tmp10 >> -tmp12) {
    let diff2 = num - tmp3;
    let sum7 = tmp18;
  } else if (tmp15 === diff1) {
    if (tmp18) {
      let _NaN = NaN;
    } else {
      let num5 = num;
      if (tmp7) {
        num5 = -1;
      }
      _NaN = Infinity * num5;
    }
    return _NaN;
  } else {
    const _Math = Math;
    sum7 = tmp18 + Math.pow(2, closure_0);
    diff2 = tmp15 - tmp3;
  }
  if (arg0[arg1 + num2] >> 7) {
    num = -1;
  }
  return num * sum7 * Math.pow(2, diff2 - closure_0);
};
arg5.write = (arg0, arg1, arg2, arg3, closure_0) => {
  const diff = 8 * arg5 - closure_0 - 1;
  const diff1 = (1 << diff) - 1;
  let num = 0;
  if (23 === closure_0) {
    const _Math = Math;
    const _Math2 = Math;
    num = Math.pow(2, -24) - Math.pow(2, -77);
    const powResult = Math.pow(2, -24);
  }
  let num5 = 0;
  if (!arg3) {
    num5 = arg5 - 1;
  }
  let num6 = -1;
  if (arg3) {
    num6 = 1;
  }
  if (arg1 < 0) {
    let num7 = 1;
  } else {
    num7 = 0;
    if (0 === arg1) {
      num7 = 0;
    }
  }
  const absolute = Math.abs(arg1);
  if (!isNaN(absolute)) {
    if (absolute !== Infinity) {
      const _Math7 = Math;
      const _Math8 = Math;
      const _Math9 = Math;
      const rounded = Math.floor(Math.log(absolute) / Math.LN2);
      const _Math10 = Math;
      const powResult1 = Math.pow(2, -rounded);
      let diff2 = rounded;
      let result = powResult1;
      if (absolute * powResult1 < 1) {
        diff2 = rounded - 1;
        result = powResult1 * 2;
      }
      if (diff2 + tmp3 >= 1) {
        let result1 = num / result;
      } else {
        const _Math3 = Math;
        result1 = num * Math.pow(2, 1 - tmp3);
      }
      const sum = absolute + result1;
      let sum1 = diff2;
      let result2 = result;
      if (sum * result >= 2) {
        sum1 = diff2 + 1;
        result2 = result / 2;
      }
      let num9 = 0;
      let num10 = diff1;
      if (sum1 + tmp3 < diff1) {
        if (sum1 + tmp3 >= 1) {
          const _Math6 = Math;
          const diff3 = sum * result2 - 1;
          num9 = diff3 * Math.pow(2, closure_0);
          num10 = sum1 + tmp3;
        } else {
          const _Math4 = Math;
          const _Math5 = Math;
          const result3 = sum * Math.pow(2, tmp3 - 1);
          num9 = result3 * Math.pow(2, closure_0);
          num10 = 0;
        }
      }
    }
    let result4 = num9;
    let diff4 = closure_0;
    let sum2 = num5;
    let tmp18 = num9;
    let tmp19 = num5;
    let tmp20 = closure_0;
    if (closure_0 >= 8) {
      do {
        arg0[arg2 + sum2] = 255 & result4;
        sum2 = sum2 + num6;
        result4 = result4 / 256;
        diff4 = diff4 - 8;
        tmp18 = result4;
        tmp19 = sum2;
        tmp20 = diff4;
      } while (diff4 >= 8);
    }
    let result5 = num10 << tmp20 | tmp18;
    let sum3 = diff + tmp20;
    let sum4 = tmp19;
    let tmp24 = tmp19;
    if (sum3 > 0) {
      do {
        arg0[arg2 + sum4] = 255 & result5;
        sum4 = sum4 + num6;
        result5 = result5 / 256;
        sum3 = sum3 - 8;
        tmp24 = sum4;
      } while (sum3 > 0);
    }
    const diff5 = arg2 + tmp24 - num6;
    arg0[diff5] = arg0[diff5] | 128 * num7;
  }
  let num11 = 0;
  if (isNaN(absolute)) {
    num11 = 1;
  }
  num9 = num11;
  num10 = diff1;
};
