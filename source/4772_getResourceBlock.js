// Module ID: 4772
// Function ID: 41412
// Name: getResourceBlock
// Dependencies: []

// Module 4772 (getResourceBlock)
function getResourceBlock(getUint32, sum1) {
  if (943868237 !== getUint32.getUint32(sum1, false)) {
    const _Error = Error;
    const error = new Error("Not an IPTC resource block.");
    throw error;
  } else {
    const uint8 = getUint32.getUint8(sum1 + 4 + 2);
    let sum = uint8;
    if (uint8 % 2 === 0) {
      sum = uint8 + 1;
    }
    sum1 = sum + 1;
    const obj = { headerSize: 6 + sum1 + 4, type: getUint32.getUint16(sum1 + 4), size: getUint32.getUint32(sum1 + 4 + 2 + sum1) };
    return obj;
  }
}
function isNaaResourceBlock(type) {
  return 1028 === type.type;
}
function getBlockPadding(size) {
  let num = 0;
  if (size.size % 2 !== 0) {
    num = 1;
  }
  return num;
}
function parseTags(byteLength, size) {
  let tmp13;
  let sum1 = arg2;
  let obj = {};
  const sum = arg2 + size.size;
  if (arg2 < sum) {
    if (sum1 < byteLength.byteLength) {
      const tag = readTag(byteLength, sum1, obj, tmp13, arg3).tag;
      let encoding = tmp13;
      while (null !== tag) {
        tmp13 = encoding;
        if (tag) {
          if ("encoding" in tag) {
            encoding = tag.encoding;
          }
          if (undefined !== obj[tag.name]) {
            if (undefined !== tag.repeatable) {
              let _Array = Array;
              if (!(obj[tag.name] instanceof Array)) {
                obj = {};
                obj.id = obj[tag.name].id;
                obj.value = obj[tag.name].value;
                obj.description = obj[tag.name].description;
                let items = [obj];
                obj[tag.name] = items;
              }
              let arr2 = obj[tag.name];
              obj = {};
              ({ id: obj3.id, value: obj3.value, description: obj3.description } = tag);
              let arr = arr2.push(obj);
              tmp13 = encoding;
            }
          }
          let obj1 = {};
          ({ id: obj4.id, value: obj4.value, description: obj4.description } = tag);
          obj[tag.name] = obj1;
          tmp13 = encoding;
        }
        sum1 = sum1 + (5 + tmp10);
        if (sum1 >= sum) {
          break;
        } else if (sum1 >= byteLength.byteLength) {
          break;
        }
      }
      const tmp9 = readTag(byteLength, sum1, obj, tmp13, arg3);
    }
  }
  return obj;
}
function readTag(getUint8, offset) {
  if (getUint8.getUint8(offset) !== 28) {
    return {};
  } else {
    const uint16 = getUint8.getUint16(offset + 1);
    const uint161 = getUint8.getUint16(offset + 3);
    if (!arg4) {
      if (!arg2(arg6[0]).iptc[uint16]) {
        let obj = { tag: undefined, tagSize: uint161 };
        return obj;
      }
    }
    const items = [];
    for (let num4 = 0; num4 < uint161; num4 = num4 + 1) {
      let arr = items.push(getUint8.getUint8(tmp3 + num4));
    }
    obj = { id: uint16, name: getTagName(arg2(arg6[0]).iptc[uint16], uint16, items), value: items, description: getTagDescription(arg2(arg6[0]).iptc[uint16], items, arg2, arg3) };
    let repeatable = arg2(arg6[0]).iptc[uint16];
    if (repeatable) {
      repeatable = arg2(arg6[0]).iptc[uint16].repeatable;
    }
    if (repeatable) {
      obj.repeatable = true;
    }
    let tmp16 = arg2(arg6[0]).iptc[uint16];
    if (tmp16) {
      tmp16 = undefined !== arg2(arg6[0]).iptc[uint16].encoding_name;
    }
    if (tmp16) {
      obj.encoding = arg2(arg6[0]).iptc[uint16].encoding_name(items);
      const obj3 = arg2(arg6[0]).iptc[uint16];
    }
    obj = {};
    obj.tag = obj;
    obj.tagSize = uint161;
    return obj;
  }
}
function getTagName(name) {
  if (name) {
    if ("string" === typeof name) {
      let combined = name;
    } else if ("function" === typeof name.name) {
      name = name.name(arg2);
    } else {
      name = name.name;
    }
  } else {
    const _HermesInternal = HermesInternal;
    combined = "undefined-" + arg1;
  }
  return combined;
}
function getTagDescription(description, items, arg2, arg3) {
  let obj = description;
  let tmp = description;
  if (description) {
    tmp = undefined !== description.description;
  }
  if (!tmp) {
    while (true) {
      let tmp4 = items;
      if (!obj) {
        break;
      } else {
        let tmp5 = globalThis;
        let _Array = Array;
        obj = items instanceof Array;
        // break
      }
      if (obj) {
        let tmp7 = arg2;
        let tmp8 = arg6;
        let num = 1;
        let obj2 = arg2(arg6[1]);
        let tmp9 = items;
        let tmp10 = arg3;
        let decodeResult = obj2.decode(arg3, items);
      } else {
        decodeResult = items;
      }
      return decodeResult;
    }
  } else {
    return obj.description(items, arg2);
  }
}
arg5.default = {
  read(byteLength, sum1) {
    if (Array.isArray(byteLength)) {
      const _DataView = DataView;
      const _Uint8Array = Uint8Array;
      const dataView = new DataView(Uint8Array.from(byteLength).buffer);
      let obj = { size: byteLength.length };
      return parseTags(dataView, obj, 0, arg2);
    } else {
      if (sum1 + 12 <= byteLength.byteLength) {
        const tmp4 = getResourceBlock(byteLength, sum1);
        while (!isNaaResourceBlock(tmp4)) {
          let tmp8 = getBlockPadding;
          let sum = tmp4.headerSize + tmp4.size;
          sum1 = sum1 + (sum + getBlockPadding(tmp4));
        }
        obj = { naaBlock: tmp4, dataOffset: sum1 + tmp4.headerSize };
        return parseTags(tmp, obj.naaBlock, obj.dataOffset, arg2);
      }
      const _Error = Error;
      const error = new Error("No IPTC NAA resource block.");
      throw error;
    }
  }
};
