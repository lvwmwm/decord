// Module ID: 4750
// Function ID: 41210
// Name: parseBox
// Dependencies: []

// Module 4750 (parseBox)
function parseBox(getUint32, sum) {
  let contentOffset;
  let length;
  ({ length, contentOffset } = function getBoxLength(getUint32, sum) {
    const uint32 = getUint32.getUint32(sum);
    if (0 === uint32) {
      let obj = { length: getUint32.byteLength - sum, contentOffset: sum + 4 + 4 };
      return obj;
    } else {
      if (1 === uint32) {
        if (0 === getUint32.getUint32(sum + 8)) {
          obj = { length: getUint32.getUint32(sum + 12), contentOffset: sum + 4 + 4 + 8 };
          return obj;
        }
      }
      obj = { length: uint32, contentOffset: sum + 4 + 4 };
      return obj;
    }
  }(getUint32, sum));
  if (length >= 8) {
    const uint32 = getUint32.getUint32(sum + 4);
    if (1718909296 === uint32) {
      let obj = { type: "ftyp", majorBrand: sum(arg6[2]).getStringFromDataView(getUint32, contentOffset, 4), length };
      return obj;
    } else if (1768977008 === uint32) {
      obj = { type: "iprp", subBoxes: parseSubBoxes(getUint32, contentOffset, length - (contentOffset - sum)), length };
      return obj;
    } else if (1768973167 === uint32) {
      const obj1 = { type: "ipco", properties: parseSubBoxes(getUint32, contentOffset, length - (contentOffset - sum)), length };
      return obj1;
    } else if (1668246642 === uint32) {
      let obj2 = { type: "colr", icc: parseIcc(getUint32, contentOffset), length };
      return obj2;
    } else {
      const uint8 = getUint32.getUint8(contentOffset);
      if (1835365473 === uint32) {
        let obj3 = { type: "meta" };
        sum = contentOffset + 1 + 3;
        obj3.subBoxes = parseSubBoxes(getUint32, sum, length - (sum - sum));
        obj3.length = length;
        let parseItemLocationBoxResult = obj3;
      } else if (1768714083 === uint32) {
        const obj7 = sum(arg6[0]);
        parseItemLocationBoxResult = obj7.parseItemLocationBox(getUint32, uint8, contentOffset + 1, length);
      } else if (1768517222 === uint32) {
        parseItemLocationBoxResult = function parseItemInformationBox(getUint32, sum, uint8, arg3, length) {
          let obj = { entryCount: arg3 + 3 };
          obj = {};
          let num = 4;
          if (0 === uint8) {
            num = 2;
          }
          obj.entryCount = num;
          obj.itemInfos = obj.entryCount + obj.entryCount;
          const offsets = { offsets: obj }.offsets;
          obj = { type: "iinf", itemInfos: callback(getUint32, offsets.itemInfos, length - (offsets.itemInfos - sum)), length };
          return obj;
        }(getUint32, sum, uint8, contentOffset + 1, length);
      } else if (1768842853 === uint32) {
        const sum1 = contentOffset + 1 + 3;
        let obj4 = { type: "infe", length };
        let sum4 = sum1;
        if (!tmp3) {
          obj4.itemId = getUint32.getUint16(sum1);
          const sum2 = sum1 + 2;
          obj4.itemProtectionIndex = getUint32.getUint16(sum2);
          const sum3 = sum2 + 2;
          obj2 = sum(arg6[2]);
          obj4.itemName = obj2.getNullTerminatedStringFromDataView(getUint32, sum3);
          sum4 = sum3 + (obj4.itemName.length + 1);
        }
        parseItemLocationBoxResult = obj4;
        if (uint8 >= 2) {
          if (2 === uint8) {
            obj4.itemId = getUint32.getUint16(sum4);
            let sum5 = sum4 + 2;
          } else {
            sum5 = sum4;
            if (3 === uint8) {
              obj4.itemId = getUint32.getUint32(sum4);
              sum5 = sum4 + 4;
            }
          }
          obj4.itemProtectionIndex = getUint32.getUint16(sum5);
          const sum6 = sum5 + 2;
          obj4.itemType = getUint32.getUint32(sum6);
          const sum7 = sum6 + 4;
          obj3 = sum(arg6[2]);
          obj4.itemName = obj3.getNullTerminatedStringFromDataView(getUint32, sum7);
          const sum8 = sum7 + (obj4.itemName.length + 1);
          if (obj4.itemType === closure_4) {
            obj4 = sum(arg6[2]);
            obj4.contentType = obj4.getNullTerminatedStringFromDataView(getUint32, sum8);
            const sum9 = sum8 + (obj4.contentType.length + 1);
            parseItemLocationBoxResult = obj4;
            if (sum + length > sum9) {
              obj4.contentEncoding = sum(arg6[2]).getNullTerminatedStringFromDataView(getUint32, sum9);
              const sum10 = obj4.contentEncoding.length + 1;
              parseItemLocationBoxResult = obj4;
              const obj6 = sum(arg6[2]);
            }
          } else {
            parseItemLocationBoxResult = obj4;
            if (obj4.itemType === closure_5) {
              obj4.itemUri = sum(arg6[2]).getNullTerminatedStringFromDataView(getUint32, sum8);
              const sum11 = obj4.itemUri.length + 1;
              parseItemLocationBoxResult = obj4;
              const obj14 = sum(arg6[2]);
            }
          }
        }
        const tmp3 = 0 !== uint8 && 1 !== uint8;
      } else {
        parseItemLocationBoxResult = { type: undefined, length };
      }
      return parseItemLocationBoxResult;
    }
  }
  const tmp = function getBoxLength(getUint32, sum) {
    const uint32 = getUint32.getUint32(sum);
    if (0 === uint32) {
      let obj = { length: getUint32.byteLength - sum, contentOffset: sum + 4 + 4 };
      return obj;
    } else {
      if (1 === uint32) {
        if (0 === getUint32.getUint32(sum + 8)) {
          obj = { length: getUint32.getUint32(sum + 12), contentOffset: sum + 4 + 4 + 8 };
          return obj;
        }
      }
      obj = { length: uint32, contentOffset: sum + 4 + 4 };
      return obj;
    }
  }(getUint32, sum);
}
function findIlocItem(subBoxes) {
  subBoxes = subBoxes.subBoxes;
  const items = subBoxes.find((type) => "iloc" === type.type).items;
  return items.find((itemId) => itemId.itemId === arg1);
}
function parseIcc(getUint32, contentOffset) {
  let obj = contentOffset(arg6[2]);
  const stringFromDataView = obj.getStringFromDataView(getUint32, contentOffset, 4);
  obj = { offset: contentOffset + 4, length: getUint32.getUint32(contentOffset + 4), chunkNumber: 1, chunksTotal: 1 };
  return obj;
}
function parseSubBoxes(getUint32, contentOffset, arg2) {
  const items = [closure_3, closure_4];
  const items1 = [];
  let sum = contentOffset;
  if (contentOffset < contentOffset + arg2) {
    const arr3 = parseBox(getUint32, sum);
    while (undefined !== arr3) {
      let tmp4 = undefined === arr3.type;
      if (!tmp4) {
        let tmp5 = undefined !== arr3.itemType && -1 === items.indexOf(arr3.itemType);
        tmp4 = tmp5;
      }
      if (!tmp4) {
        let arr = items1.push(arr3);
      }
      sum = sum + arr3.length;
      if (sum >= contentOffset + arg2) {
        break;
      }
    }
  }
  return items1;
}
let closure_3 = 1165519206;
let closure_4 = 1835625829;
let closure_5 = 1970432288;
arg5.ITEM_INFO_TYPE_EXIF = 1165519206;
arg5.ITEM_INFO_TYPE_MIME = 1835625829;
arg5.parseBox = parseBox;
arg5.findOffsets = function findOffsets(byteLength) {
  if (!arg2(arg6[1]).USE_EXIF) {
    if (!arg2(arg6[1]).USE_XMP) {
      if (!arg2(arg6[1]).USE_ICC) {
        return {};
      }
    }
  }
  let obj = {};
  let num = 0;
  let tmp5;
  if (8 <= byteLength.byteLength) {
    const arr = parseBox(byteLength, num);
    while (undefined !== arr) {
      tmp5 = arr;
      if ("meta" === arr.type) {
        break;
      } else {
        num = num + arr.length;
        if (num + 4 + 4 > byteLength.byteLength) {
          break;
        }
      }
    }
  }
  if (tmp5) {
    if (arg2(arg6[1]).USE_EXIF) {
      obj.tiffHeaderOffset = function findExifOffset(getUint32, subBoxes) {
        const tmp = callback(subBoxes, function findIinfExifItemId(subBoxes) {
          subBoxes = subBoxes.subBoxes;
          const itemInfos = subBoxes.find((type) => "iinf" === type.type).itemInfos;
          return itemInfos.find((itemType) => itemType.itemType === closure_3);
        }(subBoxes).itemId);
        const sum = tmp.baseOffset + tmp.extents[0].extentOffset;
        const sum1 = sum + 4;
        return sum1 + getUint32.getUint32(sum);
      }(byteLength, tmp5);
    }
    if (arg2(arg6[1]).USE_XMP) {
      obj.xmpChunks = function findXmpChunks(subBoxes) {
        const itemId = function findIinfXmpItemId(subBoxes) {
          subBoxes = subBoxes.subBoxes;
          const itemInfos = subBoxes.find((type) => "iinf" === type.type).itemInfos;
          return itemInfos.find((itemType) => {
            let tmp = itemType.itemType === closure_4;
            if (tmp) {
              tmp = "application/rdf+xml" === itemType.contentType;
            }
            return tmp;
          });
        }(subBoxes).itemId;
        const first = callback(subBoxes, itemId).extents[0];
        const tmp = callback(subBoxes, itemId);
        const items = [{ dataOffset: callback(subBoxes, itemId).baseOffset + first.extentOffset, length: first.extentLength }];
        return items;
      }(tmp5);
    }
    if (arg2(arg6[1]).USE_ICC) {
      obj.iccChunks = function findIccChunks(subBoxes) {
        subBoxes = subBoxes.subBoxes;
        const subBoxes1 = subBoxes.find((type) => "iprp" === type.type).subBoxes;
        const properties = subBoxes1.find((type) => "ipco" === type.type).properties;
        const icc = properties.find((type) => "colr" === type.type).icc;
        if (icc) {
          const items = [tmp];
          return items;
        }
      }(tmp5);
    }
    obj.hasAppMarkers = undefined !== obj.tiffHeaderOffset || undefined !== obj.xmpChunks || undefined !== obj.iccChunks;
  } else {
    obj = { hasAppMarkers: false };
  }
  return obj;
};
