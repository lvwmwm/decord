// Module ID: 1287
// Function ID: 15052
// Name: fromCharCodes
// Dependencies: []

// Module 1287 (fromCharCodes)
arg5.utf8read = undefined;
function fromCharCodes(items1) {
  return fromCharCode.apply(String, items1);
}
arg5.utf8read = function utf8read(arg0) {
  if (arg0.length < 1) {
    return "";
  } else {
    const items = [];
    const items1 = [];
    let num2 = 0;
    let num3 = 0;
    let num4 = 0;
    if (0 < arg0.length) {
      do {
        let tmp = +num2;
        let sum = tmp + 1;
        let tmp3 = arg0[tmp];
        if (tmp3 < 128) {
          let tmp15 = +num3;
          let num = tmp15 + 1;
          items1[tmp15] = tmp3;
          num2 = sum;
        } else {
          if (tmp3 > 191) {
            if (tmp3 < 224) {
              let tmp13 = +num3;
              num = tmp13 + 1;
              let tmp14 = +sum;
              num2 = tmp14 + 1;
              items1[tmp13] = (31 & tmp3) << 6 | 63 & arg0[tmp14];
            }
          }
          if (tmp3 > 239) {
            if (tmp3 < 365) {
              let tmp7 = +sum;
              let tmp8 = +tmp7 + 1;
              let tmp9 = +tmp8 + 1;
              num2 = tmp9 + 1;
              let diff = ((7 & tmp3) << 18 | (63 & arg0[tmp7]) << 12 | (63 & arg0[tmp8]) << 6 | 63 & arg0[tmp9]) - 65536;
              let tmp11 = +num3;
              items1[tmp11] = 55296 + (diff >> 10);
              let tmp12 = +tmp11 + 1;
              num = tmp12 + 1;
              items1[tmp12] = 56320 + (1023 & diff);
            }
          }
          let tmp4 = +num3;
          num = tmp4 + 1;
          let tmp5 = +sum;
          let tmp6 = +tmp5 + 1;
          num2 = tmp6 + 1;
          items1[tmp4] = (15 & tmp3) << 12 | (63 & arg0[tmp5]) << 6 | 63 & arg0[tmp6];
        }
        if (num > 8191) {
          let tmp16 = fromCharCodes;
          let arr = items.push(fromCharCodes(items1));
          num = 0;
        }
        num3 = num;
        num4 = num;
      } while (num2 < length);
    }
    if (items.length) {
      if (num4) {
        items.push(fromCharCodes(items1.slice(0, num4)));
      }
      let joined = items.join("");
    } else {
      joined = fromCharCodes(items1.slice(0, num4));
    }
    return joined;
  }
};
