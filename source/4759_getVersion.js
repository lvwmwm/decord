// Module ID: 4759
// Function ID: 41274
// Name: getVersion
// Dependencies: []

// Module 4759 (getVersion)
function getVersion(getUint8) {
  if (9 <= arg2) {
    let obj = arg2(arg6[0]);
    const byteAt = obj.getByteAt(getUint8, arg1 + 7);
    const byteAt1 = arg2(arg6[0]).getByteAt(getUint8, arg1 + 7 + 1);
    obj = { value: 256 * byteAt + byteAt1, description: `${tmp3}.${tmp4}` };
    return obj;
  }
}
function getResolutionUnit(getUint8, sum, shortAt) {
  if (10 <= shortAt) {
    let obj = shortAt(arg6[0]);
    const byteAt = obj.getByteAt(getUint8, sum + 9);
    obj = { value: byteAt, description: getResolutionUnitDescription(byteAt) };
    return obj;
  }
}
function getResolutionUnitDescription(byteAt) {
  let str = "None";
  if (0 !== byteAt) {
    let str2 = "inches";
    if (1 !== byteAt) {
      let str3 = "Unknown";
      if (2 === byteAt) {
        str3 = "cm";
      }
      str2 = str3;
    }
    str = str2;
  }
  return str;
}
function getXResolution(dataView, sum, shortAt) {
  if (12 <= shortAt) {
    let obj = shortAt(arg6[0]);
    shortAt = obj.getShortAt(dataView, sum + 10);
    obj = { value: shortAt, description: "" + shortAt };
    return obj;
  }
}
function getYResolution(dataView, sum, shortAt) {
  if (14 <= shortAt) {
    let obj = shortAt(arg6[0]);
    shortAt = obj.getShortAt(dataView, sum + 12);
    obj = { value: shortAt, description: "" + shortAt };
    return obj;
  }
}
arg5.default = {
  read(getUint8, sum) {
    let str = getUint8;
    let obj = arg2(arg6[0]);
    const shortAt = obj.getShortAt(getUint8, sum);
    let tmp2;
    if (15 <= shortAt) {
      let obj1 = arg2(arg6[0]);
      const byteAt = obj1.getByteAt(str, sum + 14);
      obj = { value: byteAt };
      const _HermesInternal = HermesInternal;
      obj.description = "" + byteAt + "px";
      tmp2 = obj;
    }
    let tmp7;
    if (16 <= shortAt) {
      const byteAt1 = arg2(arg6[0]).getByteAt(str, sum + 15);
      obj = { value: byteAt1 };
      const _HermesInternal2 = HermesInternal;
      obj.description = "" + byteAt1 + "px";
      tmp7 = obj;
      const obj4 = arg2(arg6[0]);
    }
    obj1 = { JFIF Version: getVersion(str, sum, shortAt), Resolution Unit: getResolutionUnit(str, sum, shortAt), XResolution: getXResolution(str, sum, shortAt), YResolution: getYResolution(str, sum, shortAt), JFIF Thumbnail Width: tmp2, JFIF Thumbnail Height: tmp7 };
    if (undefined !== tmp2) {
      if (undefined !== tmp7) {
        const result = 3 * tmp2.value * tmp7.value;
        let tmp13;
        if (0 !== result) {
          if (16 + result <= shortAt) {
            const buffer = str.buffer;
            const obj2 = { value: buffer.slice(sum + 16, sum + 16 + result) };
            str = "<24-bit RGB pixel data>";
            obj2.description = "<24-bit RGB pixel data>";
            tmp13 = obj2;
          }
        }
        if (tmp13) {
          obj1.JFIF Thumbnail = tmp13;
        }
      }
    }
    for (const key10071 in obj1) {
      let tmp14 = key10071;
      if (undefined !== obj1[key10071]) {
        continue;
      } else {
        delete r0[r7];
        // continue
      }
      continue;
    }
    return obj1;
  }
};
