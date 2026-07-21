// Module ID: 1193
// Function ID: 13651
// Name: createBuffer
// Dependencies: []

// Module 1193 (createBuffer)
function() {
  const self = this;
  class MurmurHashV3 {
    constructor(arg0, arg1) {
      arr = arg0;
      if ("string" === typeof arg0) {
        tmp = createBuffer;
        arr = createBuffer(arg0);
      }
      tmp2 = 3 & arr.length;
      diff = arr.length - tmp2;
      sum3 = arg1;
      num = 0;
      tmp5 = arg1;
      num2 = 0;
      if (0 < diff) {
        do {
          sum = num + 1;
          sum1 = sum + 1;
          sum2 = sum1 + 1;
          tmp9 = 255 & arr[num] | (255 & arr[sum]) << 8 | (255 & arr[sum1]) << 16 | (255 & arr[sum2]) << 24;
          num = sum2 + 1;
          tmp10 = (65535 & tmp9) * 3432918353 + (((tmp9 >>> 16) * 3432918353 & 65535) << 16) & 4294967295;
          tmp11 = tmp10 << 15 | tmp10 >>> 17;
          tmp12 = sum3 ^ (65535 & tmp11) * 461845907 + (((tmp11 >>> 16) * 461845907 & 65535) << 16) & 4294967295;
          tmp13 = tmp12 << 13 | tmp12 >>> 19;
          tmp14 = 5 * (65535 & tmp13) + ((5 * (tmp13 >>> 16) & 65535) << 16) & 4294967295;
          sum3 = 27492 + (65535 & tmp14) + ((58964 + (tmp14 >>> 16) & 65535) << 16);
          tmp5 = sum3;
          num2 = num;
        } while (num < diff);
      }
      if (3 === tmp2) {
        num7 = 2;
        num4 = 0 ^ (255 & arr[num2 + 2]) << 16;
      } else {
        num3 = 2;
        num4 = 0;
        if (2 !== tmp2) {
          num5 = 1;
          num6 = 0;
          tmp15 = tmp5;
          tmp19 = tmp15 ^ arr.length;
          tmp20 = tmp19 ^ tmp19 >>> 16;
          num8 = 2246822507;
          tmp21 = 2246822507 * (65535 & tmp20) + ((2246822507 * (tmp20 >>> 16) & 65535) << 16) & 4294967295;
          tmp22 = tmp21 ^ tmp21 >>> 13;
          num9 = 3266489909;
          tmp23 = 3266489909 * (65535 & tmp22) + ((3266489909 * (tmp22 >>> 16) & 65535) << 16) & 4294967295;
          return (tmp23 ^ tmp23 >>> 16) >>> 0;
        }
        tmp16 = num6 ^ 255 & arr[num2];
        tmp17 = (65535 & tmp16) * 3432918353 + (((tmp16 >>> 16) * 3432918353 & 65535) << 16) & 4294967295;
        tmp18 = tmp17 << 15 | tmp17 >>> 17;
        tmp15 = tmp5 ^ (65535 & tmp18) * 461845907 + (((tmp18 >>> 16) * 461845907 & 65535) << 16) & 4294967295;
      }
      num6 = num4 ^ (255 & arr[num2 + 1]) << 8;
      return;
    }
  }
  const arg4 = this;
  function createBuffer(arg0) {
    const textEncoder = new TextEncoder();
    return textEncoder.encode(arg0);
  }
  MurmurHashV3.v2 = function MurmurHashV2(arg0, arg1) {
    let arr = arg0;
    if ("string" === typeof arg0) {
      arr = createBuffer(arg0);
    }
    let tmp2 = arg1 ^ length;
    let diff = length;
    let num = 0;
    let tmp4 = length;
    let tmp5 = tmp2;
    let num2 = 0;
    if (arr.length >= 4) {
      do {
        let sum = num + 1;
        let sum1 = sum + 1;
        let sum2 = sum1 + 1;
        let tmp9 = 255 & arr[num] | (255 & arr[sum]) << 8 | (255 & arr[sum1]) << 16 | (255 & arr[sum2]) << 24;
        let sum3 = 1540483477 * (65535 & tmp9) + ((1540483477 * (tmp9 >>> 16) & 65535) << 16);
        let tmp11 = sum3 ^ sum3 >>> 24;
        tmp2 = 1540483477 * (65535 & tmp2) + ((1540483477 * (tmp2 >>> 16) & 65535) << 16) ^ 1540483477 * (65535 & tmp11) + ((1540483477 * (tmp11 >>> 16) & 65535) << 16);
        diff = diff - 4;
        num = sum2 + 1;
        tmp5 = tmp2;
        num2 = num;
        tmp4 = diff;
      } while (diff >= 4);
    }
    if (3 === tmp4) {
      let tmp12 = tmp5 ^ (255 & arr[num2 + 2]) << 16;
    } else {
      tmp12 = tmp5;
      if (2 !== tmp4) {
        let tmp13 = tmp5;
        let sum5 = tmp5;
        const sum4 = 1540483477 * (65535 & tmp16) + ((1540483477 * (tmp16 >>> 16) & 65535) << 16);
        return (sum4 ^ sum4 >>> 15) >>> 0;
      }
      sum5 = 1540483477 * (65535 & tmp15) + ((1540483477 * (tmp15 >>> 16) & 65535) << 16);
    }
    tmp13 = tmp12 ^ (255 & arr[num2 + 1]) << 8;
  };
  MurmurHashV3.v3 = MurmurHashV3;
  if (undefined !== arg4) {
    class MurmurHashV3 {
      constructor(arg0, arg1) {
        arr = arg0;
        if ("string" === typeof arg0) {
          tmp = createBuffer;
          arr = createBuffer(arg0);
        }
        tmp2 = 3 & arr.length;
        diff = arr.length - tmp2;
        sum3 = arg1;
        num = 0;
        tmp5 = arg1;
        num2 = 0;
        if (0 < diff) {
          do {
            sum = num + 1;
            sum1 = sum + 1;
            sum2 = sum1 + 1;
            tmp9 = 255 & arr[num] | (255 & arr[sum]) << 8 | (255 & arr[sum1]) << 16 | (255 & arr[sum2]) << 24;
            num = sum2 + 1;
            tmp10 = (65535 & tmp9) * 3432918353 + (((tmp9 >>> 16) * 3432918353 & 65535) << 16) & 4294967295;
            tmp11 = tmp10 << 15 | tmp10 >>> 17;
            tmp12 = sum3 ^ (65535 & tmp11) * 461845907 + (((tmp11 >>> 16) * 461845907 & 65535) << 16) & 4294967295;
            tmp13 = tmp12 << 13 | tmp12 >>> 19;
            tmp14 = 5 * (65535 & tmp13) + ((5 * (tmp13 >>> 16) & 65535) << 16) & 4294967295;
            sum3 = 27492 + (65535 & tmp14) + ((58964 + (tmp14 >>> 16) & 65535) << 16);
            tmp5 = sum3;
            num2 = num;
          } while (num < diff);
        }
        if (3 === tmp2) {
          num7 = 2;
          num4 = 0 ^ (255 & arr[num2 + 2]) << 16;
        } else {
          num3 = 2;
          num4 = 0;
          if (2 !== tmp2) {
            num5 = 1;
            num6 = 0;
            tmp15 = tmp5;
            tmp19 = tmp15 ^ arr.length;
            tmp20 = tmp19 ^ tmp19 >>> 16;
            num8 = 2246822507;
            tmp21 = 2246822507 * (65535 & tmp20) + ((2246822507 * (tmp20 >>> 16) & 65535) << 16) & 4294967295;
            tmp22 = tmp21 ^ tmp21 >>> 13;
            num9 = 3266489909;
            tmp23 = 3266489909 * (65535 & tmp22) + ((3266489909 * (tmp22 >>> 16) & 65535) << 16) & 4294967295;
            return (tmp23 ^ tmp23 >>> 16) >>> 0;
          }
          tmp16 = num6 ^ 255 & arr[num2];
          tmp17 = (65535 & tmp16) * 3432918353 + (((tmp16 >>> 16) * 3432918353 & 65535) << 16) & 4294967295;
          tmp18 = tmp17 << 15 | tmp17 >>> 17;
          tmp15 = tmp5 ^ (65535 & tmp18) * 461845907 + (((tmp18 >>> 16) * 461845907 & 65535) << 16) & 4294967295;
        }
        num6 = num4 ^ (255 & arr[num2 + 1]) << 8;
        return;
      }
    }
  } else {
    const murmur = self.murmur;
    class MurmurHashV3 {
      constructor(arg0, arg1) {
        arr = arg0;
        if ("string" === typeof arg0) {
          tmp = createBuffer;
          arr = createBuffer(arg0);
        }
        tmp2 = 3 & arr.length;
        diff = arr.length - tmp2;
        sum3 = arg1;
        num = 0;
        tmp5 = arg1;
        num2 = 0;
        if (0 < diff) {
          do {
            sum = num + 1;
            sum1 = sum + 1;
            sum2 = sum1 + 1;
            tmp9 = 255 & arr[num] | (255 & arr[sum]) << 8 | (255 & arr[sum1]) << 16 | (255 & arr[sum2]) << 24;
            num = sum2 + 1;
            tmp10 = (65535 & tmp9) * 3432918353 + (((tmp9 >>> 16) * 3432918353 & 65535) << 16) & 4294967295;
            tmp11 = tmp10 << 15 | tmp10 >>> 17;
            tmp12 = sum3 ^ (65535 & tmp11) * 461845907 + (((tmp11 >>> 16) * 461845907 & 65535) << 16) & 4294967295;
            tmp13 = tmp12 << 13 | tmp12 >>> 19;
            tmp14 = 5 * (65535 & tmp13) + ((5 * (tmp13 >>> 16) & 65535) << 16) & 4294967295;
            sum3 = 27492 + (65535 & tmp14) + ((58964 + (tmp14 >>> 16) & 65535) << 16);
            tmp5 = sum3;
            num2 = num;
          } while (num < diff);
        }
        if (3 === tmp2) {
          num7 = 2;
          num4 = 0 ^ (255 & arr[num2 + 2]) << 16;
        } else {
          num3 = 2;
          num4 = 0;
          if (2 !== tmp2) {
            num5 = 1;
            num6 = 0;
            tmp15 = tmp5;
            tmp19 = tmp15 ^ arr.length;
            tmp20 = tmp19 ^ tmp19 >>> 16;
            num8 = 2246822507;
            tmp21 = 2246822507 * (65535 & tmp20) + ((2246822507 * (tmp20 >>> 16) & 65535) << 16) & 4294967295;
            tmp22 = tmp21 ^ tmp21 >>> 13;
            num9 = 3266489909;
            tmp23 = 3266489909 * (65535 & tmp22) + ((3266489909 * (tmp22 >>> 16) & 65535) << 16) & 4294967295;
            return (tmp23 ^ tmp23 >>> 16) >>> 0;
          }
          tmp16 = num6 ^ 255 & arr[num2];
          tmp17 = (65535 & tmp16) * 3432918353 + (((tmp16 >>> 16) * 3432918353 & 65535) << 16) & 4294967295;
          tmp18 = tmp17 << 15 | tmp17 >>> 17;
          tmp15 = tmp5 ^ (65535 & tmp18) * 461845907 + (((tmp18 >>> 16) * 461845907 & 65535) << 16) & 4294967295;
        }
        num6 = num4 ^ (255 & arr[num2 + 1]) << 8;
        return;
      }
    }
    self.murmur = MurmurHashV3;
  }
}();
