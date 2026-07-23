// Module ID: 4792
// Function ID: 41673
// Name: getNameAndValue
// Dependencies: [77, 4748, 4764, 4776, 4745, 4752, 4778]

// Module 4792 (getNameAndValue)
import _defineProperty from "_defineProperty";

const require = arg1;
function getNameAndValue(byteLength, offset, length, type, arg4) {
  const _require = type;
  const items = [];
  const items1 = [];
  const items2 = [];
  let tmp = STATE_KEYWORD;
  const COMPRESSION_METHOD_NONE = _require(items1[4]).COMPRESSION_METHOD_NONE;
  let dataView;
  let tmp3 = COMPRESSION_METHOD_NONE;
  if (0 < length) {
    let tmp4 = COMPRESSION_METHOD_NONE;
    let num2 = 0;
    tmp3 = COMPRESSION_METHOD_NONE;
    if (offset < byteLength.byteLength) {
      while (true) {
        let tmp5 = STATE_COMPRESSION;
        let tmp6 = tmp4;
        let tmp7 = num2;
        if (tmp !== STATE_COMPRESSION) {
          let tmp16 = STATE_TEXT;
          if (tmp === STATE_TEXT) {
            break;
          } else {
            let uint8 = byteLength.getUint8(offset + num2);
            if (0 === uint8) {
              let tmp27 = moveToNextState;
              let tmp15 = moveToNextState(type, tmp);
              let tmp9 = tmp4;
              let sum = num2;
              let tmp28 = uint8;
            } else {
              let tmp17 = STATE_KEYWORD;
              if (tmp === STATE_KEYWORD) {
                let arr = items.push(uint8);
                tmp15 = tmp;
                tmp9 = tmp4;
                sum = num2;
                let tmp26 = uint8;
              } else {
                let tmp18 = STATE_LANG;
                if (tmp === STATE_LANG) {
                  arr = items1.push(uint8);
                  tmp15 = tmp;
                  tmp9 = tmp4;
                  sum = num2;
                  let tmp24 = uint8;
                } else {
                  let tmp19 = STATE_TRANSLATED_KEYWORD;
                  tmp15 = tmp;
                  tmp9 = tmp4;
                  sum = num2;
                  let tmp20 = uint8;
                  if (tmp === STATE_TRANSLATED_KEYWORD) {
                    let arr1 = items2.push(uint8);
                    tmp15 = tmp;
                    tmp9 = tmp4;
                    sum = num2;
                    let tmp22 = uint8;
                  }
                }
              }
            }
          }
        } else {
          let tmp8 = getCompressionMethod;
          let obj = { type, dataView: byteLength, offset: offset + num2 };
          tmp9 = getCompressionMethod(obj);
          let tmp10 = _require;
          let tmp11 = items1;
          sum = num2;
          if (type === _require(items1[5]).TYPE_ITXT) {
            let tmp13 = c9;
            sum = num2 + c9;
          }
          let tmp14 = moveToNextState;
          tmp15 = moveToNextState(type, tmp);
        }
        num2 = sum + 1;
        tmp3 = tmp9;
        if (num2 < length) {
          tmp = tmp15;
          tmp4 = tmp9;
          tmp3 = tmp9;
        }
      }
      const _DataView = DataView;
      const buffer = byteLength.buffer;
      dataView = new DataView(buffer.slice(offset + num2, offset + length));
      tmp3 = tmp4;
    }
  }
  if (tmp3 !== _require(items1[4]).COMPRESSION_METHOD_NONE) {
    if (!arg4) {
      return {};
    }
  }
  if (type === _require(items1[5]).TYPE_TEXT) {
    let str = "latin1";
  } else {
    str = "utf-8";
  }
  const decompressResult = _require(items1[4]).decompress(dataView, tmp3, str);
  if (decompressResult instanceof Promise) {
    let catchPromise = decompressResult.then((arg0) => outer1_15(arg0, closure_0, items1, items)).catch(() => outer1_15("<text using unknown compression>".split(""), closure_0, items1, items));
    const nextPromise = decompressResult.then((arg0) => outer1_15(arg0, closure_0, items1, items));
  } else {
    catchPromise = constructTag(decompressResult, type, items1, items);
  }
  return catchPromise;
}
function getCompressionMethod(arg0) {
  let dataView;
  let offset;
  let type;
  ({ type, dataView, offset } = arg0);
  if (type === require(4752) /* isPngImageHeaderChunk */.TYPE_ITXT) {
    if (dataView.getUint8(offset) === c10) {
      return dataView.getUint8(offset + 1);
    }
  } else if (type === require(4752) /* isPngImageHeaderChunk */.TYPE_ZTXT) {
    return dataView.getUint8(offset);
  }
  return require(4745) /* getStringFromDataView */.COMPRESSION_METHOD_NONE;
}
function moveToNextState(type, arg1) {
  if (arg1 === STATE_KEYWORD) {
    const items = [require(4752) /* isPngImageHeaderChunk */.TYPE_ITXT, require(4752) /* isPngImageHeaderChunk */.TYPE_ZTXT];
    if (items.includes(type)) {
      let tmp4 = STATE_COMPRESSION;
    }
    return tmp4;
  }
  if (arg1 === STATE_COMPRESSION) {
    type === require(4752) /* isPngImageHeaderChunk */.TYPE_ITXT ? STATE_LANG : STATE_TEXT;
  } else {
    tmp4 = arg1 === STATE_LANG ? STATE_TRANSLATED_KEYWORD : STATE_TEXT;
  }
}
function constructTag(decompressResult, type, items1, items) {
  let stringFromDataView = decompressResult;
  if (decompressResult instanceof DataView) {
    let obj = require(4745) /* getStringFromDataView */;
    stringFromDataView = obj.getStringFromDataView(decompressResult, 0, decompressResult.byteLength);
  }
  obj = { name: getName(type, items1, items), value: stringFromDataView };
  if (type === require(4752) /* isPngImageHeaderChunk */.TYPE_ITXT) {
    stringFromDataView = getDescription(decompressResult);
  }
  obj.description = stringFromDataView;
  return obj;
}
function getName(arg0, items, items) {
  const stringValueFromArray = require(4745) /* getStringFromDataView */.getStringValueFromArray(items);
  let combined = stringValueFromArray;
  if (arg0 !== require(4752) /* isPngImageHeaderChunk */.TYPE_TEXT) {
    combined = stringValueFromArray;
    if (0 !== items.length) {
      const _HermesInternal = HermesInternal;
      combined = "" + stringValueFromArray + " (" + require(4745) /* getStringFromDataView */.getStringValueFromArray(items) + ")";
      const obj2 = require(4745) /* getStringFromDataView */;
    }
  }
  return combined;
}
function getDescription(arg0) {
  return importDefault(4778).decode("UTF-8", arg0);
}
function isExifGroupTag(str, str2) {
  let tmp = "raw profile type exif" === str.toLowerCase();
  if (tmp) {
    tmp = "exif" === str2.substring(1, 5);
  }
  return tmp;
}
function isIptcGroupTag(str, str2) {
  let tmp = "raw profile type iptc" === str.toLowerCase();
  if (tmp) {
    tmp = "iptc" === str2.substring(1, 5);
  }
  return tmp;
}
function decodeRawData(arg0) {
  let length;
  let sum;
  const replaced = arg0.match(/\n(exif|iptc)\n\s*\d+\n([\s\S]*)$/)[2].replace(/\n/g, "");
  const arrayBuffer = new ArrayBuffer(replaced.length / 2);
  const dataView = new DataView(arrayBuffer);
  let num = 0;
  if (0 < replaced.length) {
    do {
      let _parseInt = parseInt;
      sum = num + 2;
      let setUint8Result = dataView.setUint8(num / 2, parseInt(replaced.substring(num, sum), 16));
      num = sum;
      length = replaced.length;
    } while (sum < length);
  }
  return dataView;
}
const STATE_KEYWORD = "STATE_KEYWORD";
const STATE_COMPRESSION = "STATE_COMPRESSION";
const STATE_LANG = "STATE_LANG";
const STATE_TRANSLATED_KEYWORD = "STATE_TRANSLATED_KEYWORD";
const STATE_TEXT = "STATE_TEXT";
let c9 = 1;
let c10 = 1;
let c11 = 6;

export default {
  read(byteLength) {
    let description;
    let name;
    let value;
    let closure_0 = arg3;
    let obj = {};
    const items = [];
    let num = 0;
    if (0 < arg1.length) {
      do {
        let arr2 = arg1[num];
        let tmp4 = getNameAndValue;
        let tmp5 = byteLength;
        let tmp6 = arg2;
        let promise = getNameAndValue(byteLength, arr2.offset, arr2.length, arr2.type, arg2);
        let _Promise = Promise;
        if (promise instanceof Promise) {
          let arr = items.push(promise.then((description) => {
            let name;
            let value;
            ({ name, value } = description);
            if (outer1_1(outer1_2[1]).USE_EXIF) {
              if (outer1_18(name, value)) {
                let obj = { __exif: outer1_1(outer1_2[2]).read(outer1_20(value), outer1_11, closure_0).tags };
                return obj;
              }
            }
            if (outer1_1(outer1_2[1]).USE_IPTC) {
              if (outer1_19(name, value)) {
                obj = { __iptc: outer1_1(outer1_2[3]).read(outer1_20(value), 0, closure_0) };
                return obj;
              }
            }
            if (name) {
              if (!outer1_18(name, value)) {
                if (!outer1_19(name, value)) {
                  obj = { value, description: description.description };
                  return outer1_3({}, name, obj);
                }
              }
            }
          }));
          let tmp7 = tmp;
          let tmp8 = tmp2;
          let tmp9 = tmp3;
        } else {
          ({ name, value, description } = promise);
          tmp7 = name;
          tmp8 = value;
          tmp9 = description;
          if (name) {
            obj = { value, description };
            obj[name] = obj;
            tmp7 = name;
            tmp8 = value;
            tmp9 = description;
          }
        }
        num = num + 1;
        tmp = tmp7;
        tmp2 = tmp8;
        tmp3 = tmp9;
      } while (num < arg1.length);
    }
    obj = { readTags: obj };
    let allPromises;
    if (items.length > 0) {
      allPromises = Promise.all(items);
    }
    obj.readTagsPromise = allPromises;
    return obj;
  }
};
