// Module ID: 4765
// Function ID: 41365
// Name: readTag
// Dependencies: [4762, 4766, 4748]

// Module 4765 (readTag)
const require = arg1;
const module = arg2;
const dependencyMap = arg6;
function readTag(byteLength, arg1, arg2, sum, byteOrder) {
  let obj = module(4762);
  const typeSize = obj.getTypeSize("SHORT");
  sum = typeSize + module(4762).getTypeSize("SHORT");
  const obj2 = module(4762);
  const sum1 = sum + module(4762).getTypeSize("LONG");
  const obj3 = module(4762);
  const shortAt = module(4762).getShortAt(byteLength, sum, byteOrder);
  const obj4 = module(4762);
  const shortAt1 = module(4762).getShortAt(byteLength, sum + typeSize, byteOrder);
  const obj5 = module(4762);
  const longAt = module(4762).getLongAt(byteLength, sum + sum, byteOrder);
  if (undefined !== module(4762).typeSizes[shortAt1]) {
    const result = module(4762).typeSizes[shortAt1] * longAt;
    if (result <= obj7.getTypeSize("LONG")) {
      const sum2 = sum + sum1;
      let str = getTagValue(byteLength, sum2, shortAt1, longAt, byteOrder);
      let tmp15 = sum2;
    } else {
      const longAt1 = module(4762).getLongAt(byteLength, sum + sum1, byteOrder);
      const sum3 = arg2 + longAt1;
      if (sum3 + module(4762).typeSizes[shortAt1] * longAt <= byteLength.byteLength) {
        str = getTagValue(byteLength, arg2 + longAt1, shortAt1, longAt, byteOrder, 33723 === shortAt);
        tmp15 = longAt1;
      } else {
        str = "<faulty value>";
        tmp15 = longAt1;
      }
      const obj10 = module(4762);
    }
    if (shortAt1 === module(4762).tagTypes.ASCII) {
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
      str = (function decodeAsciiValue(items) {
        return items.map((arg0) => decodeURIComponent(escape(arg0)));
      })(items);
    }
    const _HermesInternal = HermesInternal;
    let name = "undefined-" + shortAt;
    let descriptionResult = str;
    if (undefined !== module(4766)[arg1][shortAt]) {
      if (undefined !== module(4766)[arg1][shortAt].name) {
        if (undefined !== module(4766)[arg1][shortAt].description) {
          name = module(4766)[arg1][shortAt].name;
          descriptionResult = module(4766)[arg1][shortAt].description(str);
          const obj8 = module(4766)[arg1][shortAt];
        }
      }
      if (shortAt1 !== module(4762).tagTypes.RATIONAL) {
        if (shortAt1 !== module(4762).tagTypes.SRATIONAL) {
          name = module(4766)[arg1][shortAt];
          descriptionResult = getDescriptionFromTagValue(str);
        }
      }
      name = module(4766)[arg1][shortAt];
      descriptionResult = `${str[0] / str[1]}`;
    }
    obj = { id: shortAt, name, value: str, description: descriptionResult, __offset: tmp15 };
    obj7 = module(4762);
  }
}
function getTagValue(arg0, arg1, arg2, arg3, arg4) {
  let sum = arg1;
  const items = [];
  let BYTE = arg2;
  let result = arg3;
  if (tmp2) {
    result = arg3 * module(4762).typeSizes[arg2];
    BYTE = module(4762).tagTypes.BYTE;
  }
  for (let num2 = 0; num2 < result; num2 = num2 + 1) {
    let tmp6 = obj;
    let arr = items.push(obj[BYTE](arg0, sum, arg4));
    let tmp8 = module;
    let tmp9 = dependencyMap;
    sum = sum + module(4762).typeSizes[BYTE];
  }
  if (BYTE === module(4762).tagTypes.ASCII) {
    obj = module(4762);
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
let obj = { [1]: require("getByteAt").getByteAt, [2]: require("getByteAt").getAsciiAt, [3]: require("getByteAt").getShortAt, [4]: require("getByteAt").getLongAt, [5]: require("getByteAt").getRationalAt, [7]: require("getByteAt").getUndefinedAt, [9]: require("getByteAt").getSlongAt, [10]: require("getByteAt").getSrationalAt, [13]: require("getByteAt").getIfdPointerAt };
arg5.get0thIfdOffset = function get0thIfdOffset(dataView, sum1, byteOrder) {
  return sum1 + module(4762).getLongAt(dataView, sum1 + 4, byteOrder);
};
function readIfd(byteLength, IFD_TYPE_0TH, sum, sum, byteOrder, arg5, arg6) {
  let obj = module(4762);
  obj = {};
  const typeSize = obj.getTypeSize("SHORT");
  let num = 0;
  if (sum + obj3.getTypeSize("SHORT") <= byteLength.byteLength) {
    num = module(4762).getShortAt(byteLength, sum, byteOrder);
    const obj4 = module(4762);
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
            let tmp16 = require;
            let tmp17 = dependencyMap;
            let tmp18 = IFD_TYPE_0TH === require(4766) /* IFD_TYPE_0TH */.IFD_TYPE_PENTAX && "LevelInfo" === tmp13.name;
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
  if (module(4748).USE_THUMBNAIL) {
    if (tmp5 < byteLength.byteLength - obj6.getTypeSize("LONG")) {
      const longAt = module(4762).getLongAt(byteLength, tmp5, byteOrder);
      let tmp25 = 0 !== longAt;
      if (tmp25) {
        tmp25 = IFD_TYPE_0TH === require(4766) /* IFD_TYPE_0TH */.IFD_TYPE_0TH;
      }
      if (tmp25) {
        obj.Thumbnail = readIfd(byteLength, require(4766) /* IFD_TYPE_0TH */.IFD_TYPE_1ST, sum, sum + longAt, byteOrder, arg5);
      }
      const obj7 = module(4762);
    }
    obj6 = module(4762);
  }
  return obj;
}
arg5.readIfd = readIfd;
