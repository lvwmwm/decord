// Module ID: 9197
// Function ID: 72025
// Name: encode
// Dependencies: []

// Module 9197 (encode)
let closure_0 = [];
arg5.encode = (arg0) => {
  let length;
  let sum1;
  let buffer = arg0;
  if (!Buffer.isBuffer(arg0)) {
    const _Buffer = Buffer;
    buffer = new Buffer(arg0);
  }
  const rounded = Math.floor(buffer.length / 5);
  let sum = rounded;
  if (buffer.length % 5 !== 0) {
    sum = rounded + 1;
  }
  const buffer1 = new Buffer(8 * sum);
  let num2 = 0;
  let num3 = 0;
  let num4 = 0;
  let num5 = 0;
  if (0 < buffer.length) {
    do {
      let tmp6 = buffer[num2];
      if (num4 > 3) {
        let result = (num4 + 5) % 8;
        let num6 = 0;
        let tmp13 = tmp6 & 255 >> num4;
        if (num2 + 1 < buffer.length) {
          num6 = buffer[num2 + 1];
        }
        let tmp12 = tmp13 << result | num6 >> 8 - result;
        sum1 = num2 + 1;
        let tmp11 = result;
      } else {
        let sum2 = num4 + 5;
        let tmp8 = tmp6 >> 8 - sum2 & 31;
        let result1 = sum2 % 8;
        sum1 = num2;
        tmp11 = result1;
        tmp12 = tmp8;
        if (0 === result1) {
          sum1 = num2 + 1;
          tmp11 = result1;
          tmp12 = tmp8;
        }
      }
      let charCodeAt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567".charCodeAt;
      buffer1[num3] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567".charCodeAt(tmp12);
      num3 = num3 + 1;
      num2 = sum1;
      num4 = tmp11;
      num5 = num3;
    } while (sum1 < buffer.length);
  }
  if (num5 < buffer1.length) {
    do {
      buffer1[num5] = 61;
      num5 = num5 + 1;
      length = buffer1.length;
    } while (num5 < length);
  }
  return buffer1;
};
arg5.decode = (arg0) => {
  let buffer = arg0;
  if (!Buffer.isBuffer(arg0)) {
    const _Buffer = Buffer;
    buffer = new Buffer(arg0);
  }
  const buffer1 = new Buffer(Math.ceil(5 * buffer.length / 8));
  let num = 0;
  if (0 < buffer.length) {
    let num6 = 0;
    let num7 = 0;
    let num8 = 0;
    num = 0;
    if (61 != buffer[0]) {
      const diff = buffer[num8] - 48;
      while (diff < length.length) {
        let tmp11 = length;
        let tmp12 = length[diff];
        if (num6 <= 3) {
          let result = (num6 + 5) % 8;
          if (0 === result) {
            buffer1[num7] = tmp4 | tmp12;
            let sum = num7 + 1;
            let num9 = 0;
            let result1 = result;
          } else {
            num9 = tmp4 | 255 & tmp12 << 8 - result;
            result1 = result;
            sum = num7;
          }
        } else {
          result1 = (num6 + 5) % 8;
          buffer1[num7] = tmp4 | 255 & tmp12 >>> result1;
          sum = num7 + 1;
          num9 = 255 & tmp12 << 8 - result1;
        }
        num8 = num8 + 1;
        num = sum;
        if (num8 < buffer.length) {
          let tmp4 = num9;
          num6 = result1;
          num7 = sum;
          num = sum;
        }
      }
      const _Error = Error;
      const error = new Error("Invalid input - it is not base32 encoded string");
      throw error;
    }
  }
  return buffer1.slice(0, num);
};
