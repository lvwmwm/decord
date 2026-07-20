// Module ID: 4761
// Function ID: 41286
// Name: readTag
// Dependencies: []

// Module 4761 (readTag)
function readTag(byteLength, arg1, arg2, sum, byteOrder) {
  let obj = arg2(arg6[0]);
  const typeSize = obj.getTypeSize("SHORT");
  sum = typeSize + arg2(arg6[0]).getTypeSize("SHORT");
  const obj2 = arg2(arg6[0]);
  const sum1 = sum + arg2(arg6[0]).getTypeSize("LONG");
  const obj3 = arg2(arg6[0]);
  const shortAt = arg2(arg6[0]).getShortAt(byteLength, sum, byteOrder);
  const obj4 = arg2(arg6[0]);
  const shortAt1 = arg2(arg6[0]).getShortAt(byteLength, sum + typeSize, byteOrder);
  const obj5 = arg2(arg6[0]);
  const longAt = arg2(arg6[0]).getLongAt(byteLength, sum + sum, byteOrder);
  if (undefined !== arg2(arg6[0]).typeSizes[shortAt1]) {
    const result = arg2(arg6[0]).typeSizes[shortAt1] * longAt;
    if (result <= obj7.getTypeSize("LONG")) {
      const sum2 = sum + sum1;
      let str = getTagValue(byteLength, sum2, shortAt1, longAt, byteOrder);
      let tmp15 = sum2;
    } else {
      const longAt1 = arg2(arg6[0]).getLongAt(byteLength, sum + sum1, byteOrder);
      const sum3 = arg2 + longAt1;
      if (sum3 + arg2(arg6[0]).typeSizes[shortAt1] * longAt <= byteLength.byteLength) {
        str = getTagValue(byteLength, arg2 + longAt1, shortAt1, longAt, byteOrder, 33723 === shortAt);
        tmp15 = longAt1;
      } else {
        str = "<faulty value>";
        tmp15 = longAt1;
      }
      const obj10 = arg2(arg6[0]);
    }
    if (shortAt1 === arg2(arg6[0]).tagTypes.ASCII) {
      const items = [];
      let num3 = 0;
      let num4 = 0;
      if (0 < str.length) {
        do {
          if ("\0" !== str[num4]) {
            if (undefined === items[num3]) {
              items[num3] = "";
            }
            items[num3] = items[num3] + str[num4];
            let sum4 = num3;
          } else {
            sum4 = num3 + 1;
          }
          num4 = num4 + 1;
          num3 = sum4;
        } while (num4 < str.length);
      }
      str = function decodeAsciiValue(items) {
        return items.map((arg0) => decodeURIComponent(escape(arg0)));
      }(items);
    }
    const _HermesInternal = HermesInternal;
    let name = "undefined-" + shortAt;
    let descriptionResult = str;
    if (undefined !== arg2(arg6[1])[arg1][shortAt]) {
      if (undefined !== arg2(arg6[1])[arg1][shortAt].name) {
        if (undefined !== arg2(arg6[1])[arg1][shortAt].description) {
          name = arg2(arg6[1])[arg1][shortAt].name;
          descriptionResult = arg2(arg6[1])[arg1][shortAt].description(str);
          const obj8 = arg2(arg6[1])[arg1][shortAt];
        }
      }
      if (shortAt1 !== arg2(arg6[0]).tagTypes.RATIONAL) {
        if (shortAt1 !== arg2(arg6[0]).tagTypes.SRATIONAL) {
          name = arg2(arg6[1])[arg1][shortAt];
          descriptionResult = getDescriptionFromTagValue(str);
        }
      }
      name = arg2(arg6[1])[arg1][shortAt];
      descriptionResult = `${str[0] / str[1]}`;
    }
    obj = { id: shortAt, name, value: str, description: descriptionResult, __offset: tmp15 };
    const obj7 = arg2(arg6[0]);
  }
}
function getTagValue(arg0, arg1, arg2, arg3, arg4) {
  let sum = arg1;
  const items = [];
  let BYTE = arg2;
  let result = arg3;
  if (tmp2) {
    result = arg3 * arg2(arg6[0]).typeSizes[arg2];
    BYTE = arg2(arg6[0]).tagTypes.BYTE;
  }
  for (let num2 = 0; num2 < result; num2 = num2 + 1) {
    let tmp6 = obj;
    let arr = items.push(obj[BYTE](arg0, sum, arg4));
    let tmp8 = arg2;
    let tmp9 = arg6;
    sum = sum + arg2(arg6[0]).typeSizes[BYTE];
  }
  if (BYTE === arg2(arg6[0]).tagTypes.ASCII) {
    const obj = arg2(arg6[0]);
    let asciiValue = obj.getAsciiValue(items);
  } else {
    asciiValue = items;
    if (1 === items.length) {
      asciiValue = items[0];
    }
  }
  return asciiValue;
}
function getDescriptionFromTagValue(join) {
  let joined = join;
  if (join instanceof Array) {
    joined = join.join(", ");
  }
  return joined;
}
const obj = { [1]: arg2(arg6[0]).getByteAt, [2]: arg2(arg6[0]).getAsciiAt, [3]: arg2(arg6[0]).getShortAt, [4]: arg2(arg6[0]).getLongAt, [5]: arg2(arg6[0]).getRationalAt, [7]: arg2(arg6[0]).getUndefinedAt, [9]: arg2(arg6[0]).getSlongAt, [10]: arg2(arg6[0]).getSrationalAt, [13]: arg2(arg6[0]).getIfdPointerAt };
arg5.get0thIfdOffset = function get0thIfdOffset(dataView, sum1, byteOrder) {
  return sum1 + byteOrder(arg6[0]).getLongAt(dataView, sum1 + 4, byteOrder);
};
function readIfd(byteLength, IFD_TYPE_0TH, sum, sum, byteOrder, arg5, arg6) {
  let obj = sum(arg6[0]);
  obj = {};
  const typeSize = obj.getTypeSize("SHORT");
  let num = 0;
  if (sum + obj3.getTypeSize("SHORT") <= byteLength.byteLength) {
    num = sum(arg6[0]).getShortAt(byteLength, sum, byteOrder);
    const obj4 = sum(arg6[0]);
  }
  sum = sum + typeSize;
  let tmp5 = sum;
  if (0 < num) {
    let tmp20 = sum;
    let num2 = 0;
    tmp5 = sum;
    if (sum + 12 <= byteLength.byteLength) {
      while (true) {
        let tmp6 = readTag;
        let tmp7 = byteLength;
        let tmp8 = IFD_TYPE_0TH;
        let tmp9 = sum;
        let tmp10 = tmp20;
        let tmp11 = byteOrder;
        let tmp12 = arg5;
        let tmp13 = readTag(byteLength, IFD_TYPE_0TH, sum, tmp20, byteOrder, arg5);
        let tmp14 = tmp20;
        if (undefined !== tmp13) {
          obj = {};
          ({ id: obj5.id, value: obj5.value, description: obj5.description } = tmp13);
          obj[tmp13.name] = obj;
          let tmp15 = "MakerNote" === tmp13.name;
          if (!tmp15) {
            let tmp16 = IFD_TYPE_0TH;
            let tmp17 = arg6;
            let tmp18 = IFD_TYPE_0TH === IFD_TYPE_0TH(arg6[1]).IFD_TYPE_PENTAX && "LevelInfo" === tmp13.name;
            tmp15 = tmp18;
          }
          if (tmp15) {
            obj[tmp13.name].__offset = tmp13.__offset;
          }
        }
        let sum1 = tmp20 + 12;
        num2 = num2 + 1;
        tmp5 = sum1;
        if (num2 >= num) {
          break;
        } else {
          tmp20 = sum1;
          tmp5 = sum1;
          if (sum1 + 12 > byteLength.byteLength) {
            break;
          }
        }
      }
    }
  }
  if (sum(arg6[2]).USE_THUMBNAIL) {
    if (tmp5 < byteLength.byteLength - obj6.getTypeSize("LONG")) {
      const longAt = sum(arg6[0]).getLongAt(byteLength, tmp5, byteOrder);
      let tmp25 = 0 !== longAt;
      if (tmp25) {
        tmp25 = IFD_TYPE_0TH === IFD_TYPE_0TH(arg6[1]).IFD_TYPE_0TH;
      }
      if (tmp25) {
        obj.Thumbnail = readIfd(byteLength, IFD_TYPE_0TH(arg6[1]).IFD_TYPE_1ST, sum, sum + longAt, byteOrder, arg5);
      }
      const obj7 = sum(arg6[0]);
    }
    const obj6 = sum(arg6[0]);
  }
  return obj;
}
arg5.readIfd = readIfd;
