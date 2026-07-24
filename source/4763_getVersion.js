// Module ID: 4763
// Function ID: 41353
// Name: getVersion
// Dependencies: [4762]

// Module 4763 (getVersion)
const module = arg2;
const dependencyMap = arg6;
function getVersion(getUint8) {
  if (9 <= arg2) {
    let obj = module(4762);
    const byteAt = obj.getByteAt(getUint8, arg1 + 7);
    const byteAt1 = module(4762).getByteAt(getUint8, arg1 + 7 + 1);
    obj = { value: 256 * byteAt + byteAt1, description: `${tmp3}.${tmp4}` };
    return obj;
  }
}
function getResolutionUnit(getUint8, sum, shortAt) {
  if (10 <= shortAt) {
    let obj = module(4762);
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
    let obj = module(4762);
    shortAt = obj.getShortAt(dataView, sum + 10);
    obj = { value: shortAt, description: "" + shortAt };
    return obj;
  }
}
function getYResolution(dataView, sum, shortAt) {
  if (14 <= shortAt) {
    let obj = module(4762);
    shortAt = obj.getShortAt(dataView, sum + 12);
    obj = { value: shortAt, description: "" + shortAt };
    return obj;
  }
}
arg5.default = {
  read(getUint8, sum) {
    let str = getUint8;
    let obj = module(4762);
    const shortAt = obj.getShortAt(getUint8, sum);
    let tmp4;
    if (15 <= shortAt) {
      let obj1 = module(4762);
      const byteAt = obj1.getByteAt(str, sum + 14);
      obj = { value: byteAt };
      const _HermesInternal = HermesInternal;
      obj.description = "" + byteAt + "px";
      tmp4 = obj;
    }
    let tmp9;
    if (16 <= shortAt) {
      const byteAt1 = module(4762).getByteAt(str, sum + 15);
      obj = { value: byteAt1 };
      const _HermesInternal2 = HermesInternal;
      obj.description = "" + byteAt1 + "px";
      tmp9 = obj;
      const obj4 = module(4762);
    }
    obj1 = { "JFIF Version": getVersion(str, sum, shortAt), "Resolution Unit": getResolutionUnit(str, sum, shortAt), XResolution: getXResolution(str, sum, shortAt), YResolution: getYResolution(str, sum, shortAt), "JFIF Thumbnail Width": tmp4, "JFIF Thumbnail Height": tmp9 };
    if (undefined !== tmp4) {
      if (undefined !== tmp9) {
        const result = 3 * tmp4.value * tmp9.value;
        let tmp15;
        if (0 !== result) {
          if (16 + result <= shortAt) {
            const buffer = str.buffer;
            const obj2 = { value: buffer.slice(sum + 16, sum + 16 + result) };
            str = "<24-bit RGB pixel data>";
            obj2.description = "<24-bit RGB pixel data>";
            tmp15 = obj2;
          }
        }
        if (tmp15) {
          obj1["JFIF Thumbnail"] = tmp15;
        }
      }
    }
    for (const key10071 in obj1) {
      let tmp16 = key10071;
      if (undefined !== obj1[key10071]) {
        continue;
      } else {
        delete tmp[tmp2];
        continue;
      }
      continue;
    }
    return obj1;
  }
};
