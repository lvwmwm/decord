// Module ID: 4789
// Function ID: 41655
// Name: getNameAndValue
// Dependencies: []

// Module 4789 (getNameAndValue)
function getNameAndValue(byteLength, arg1, arg2, type) {
  arg1 = type;
  const items = [];
  const importDefault = items;
  const items1 = [];
  const dependencyMap = items1;
  const items2 = [];
  let tmp = closure_4;
  const COMPRESSION_METHOD_NONE = arg1(dependencyMap[4]).COMPRESSION_METHOD_NONE;
  let dataView;
  let tmp3 = COMPRESSION_METHOD_NONE;
  if (0 < arg2) {
    let tmp4 = COMPRESSION_METHOD_NONE;
    let num2 = 0;
    tmp3 = COMPRESSION_METHOD_NONE;
    if (arg1 < byteLength.byteLength) {
      while (true) {
        let tmp5 = closure_5;
        let tmp6 = tmp4;
        let tmp7 = num2;
        if (tmp !== closure_5) {
          let tmp16 = closure_8;
          if (tmp === closure_8) {
            break;
          } else {
            let uint8 = byteLength.getUint8(arg1 + num2);
            if (0 === uint8) {
              let tmp27 = moveToNextState;
              let tmp15 = moveToNextState(type, tmp);
              let tmp9 = tmp4;
              let sum = num2;
              let tmp28 = uint8;
            } else {
              let tmp17 = closure_4;
              if (tmp === closure_4) {
                let arr = items.push(uint8);
                tmp15 = tmp;
                tmp9 = tmp4;
                sum = num2;
                let tmp26 = uint8;
              } else {
                let tmp18 = closure_6;
                if (tmp === closure_6) {
                  arr = items1.push(uint8);
                  tmp15 = tmp;
                  tmp9 = tmp4;
                  sum = num2;
                  let tmp24 = uint8;
                } else {
                  let tmp19 = closure_7;
                  tmp15 = tmp;
                  tmp9 = tmp4;
                  sum = num2;
                  let tmp20 = uint8;
                  if (tmp === closure_7) {
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
          let obj = { type, dataView: byteLength, offset: arg1 + num2 };
          tmp9 = getCompressionMethod(obj);
          let tmp10 = arg1;
          let tmp11 = dependencyMap;
          sum = num2;
          if (type === arg1(dependencyMap[5]).TYPE_ITXT) {
            let tmp13 = closure_9;
            sum = num2 + closure_9;
          }
          let tmp14 = moveToNextState;
          tmp15 = moveToNextState(type, tmp);
        }
        num2 = sum + 1;
        tmp3 = tmp9;
        if (num2 < arg2) {
          tmp = tmp15;
          tmp4 = tmp9;
          tmp3 = tmp9;
        }
      }
      const _DataView = DataView;
      const buffer = byteLength.buffer;
      dataView = new DataView(buffer.slice(arg1 + num2, arg1 + arg2));
      tmp3 = tmp4;
    }
  }
  if (tmp3 !== arg1(dependencyMap[4]).COMPRESSION_METHOD_NONE) {
    if (!arg4) {
      return {};
    }
  }
  if (type === arg1(dependencyMap[5]).TYPE_TEXT) {
    let str = "latin1";
  } else {
    str = "utf-8";
  }
  const decompressResult = arg1(dependencyMap[4]).decompress(dataView, tmp3, str);
  if (decompressResult instanceof Promise) {
    let catchPromise = decompressResult.then((arg0) => callback(arg0, arg3, items1, items)).catch(() => callback("<text using unknown compression>".split(""), arg3, items1, items));
    const nextPromise = decompressResult.then((arg0) => callback(arg0, arg3, items1, items));
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
  if (type === arg1(dependencyMap[5]).TYPE_ITXT) {
    if (dataView.getUint8(offset) === closure_10) {
      return dataView.getUint8(offset + 1);
    }
  } else if (type === arg1(dependencyMap[5]).TYPE_ZTXT) {
    return dataView.getUint8(offset);
  }
  return arg1(dependencyMap[4]).COMPRESSION_METHOD_NONE;
}
function moveToNextState(type, arg1) {
  if (arg1 === closure_4) {
    const items = [arg1(dependencyMap[5]).TYPE_ITXT, arg1(dependencyMap[5]).TYPE_ZTXT];
    if (items.includes(type)) {
      let tmp4 = closure_5;
    }
    return tmp4;
  }
  if (arg1 === closure_5) {
    type === arg1(dependencyMap[5]).TYPE_ITXT ? closure_6 : closure_8;
  } else {
    tmp4 = arg1 === closure_6 ? closure_7 : closure_8;
  }
}
function constructTag(decompressResult, type, items1, items) {
  let stringFromDataView = decompressResult;
  if (decompressResult instanceof DataView) {
    let obj = type(dependencyMap[4]);
    stringFromDataView = obj.getStringFromDataView(decompressResult, 0, decompressResult.byteLength);
  }
  obj = { name: getName(type, items1, items), value: stringFromDataView };
  if (type === type(dependencyMap[5]).TYPE_ITXT) {
    stringFromDataView = getDescription(decompressResult);
  }
  obj.description = stringFromDataView;
  return obj;
}
function getName(arg0, items, items) {
  const stringValueFromArray = items(dependencyMap[4]).getStringValueFromArray(items);
  let combined = stringValueFromArray;
  if (arg0 !== items(dependencyMap[5]).TYPE_TEXT) {
    combined = stringValueFromArray;
    if (0 !== items.length) {
      const _HermesInternal = HermesInternal;
      combined = "" + stringValueFromArray + " (" + items(dependencyMap[4]).getStringValueFromArray(items) + ")";
      const obj2 = items(dependencyMap[4]);
    }
  }
  return combined;
}
function getDescription(arg0) {
  return importDefault(dependencyMap[6]).decode("UTF-8", arg0);
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
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = "STATE_KEYWORD";
let closure_5 = "STATE_COMPRESSION";
let closure_6 = "STATE_LANG";
let closure_7 = "STATE_TRANSLATED_KEYWORD";
let closure_8 = "STATE_TEXT";
let closure_9 = 1;
let closure_10 = 1;
let closure_11 = 6;

export default {
  read(arg0, arg1, arg2, arg3) {
    let description;
    let name;
    let value;
    arg1 = arg3;
    let obj = {};
    const items = [];
    let num = 0;
    if (0 < arg1.length) {
      do {
        let arr2 = arg1[num];
        let tmp4 = closure_12;
        let tmp5 = arg0;
        let tmp6 = arg2;
        let promise = closure_12(arg0, arr2.offset, arr2.length, arr2.type, arg2);
        let _Promise = Promise;
        if (promise instanceof Promise) {
          let arr = items.push(promise.then((description) => {
            let name;
            let value;
            ({ name, value } = description);
            if (callback(closure_2[1]).USE_EXIF) {
              if (callback3(name, value)) {
                let obj = { __exif: callback(closure_2[2]).read(callback5(value), closure_11, arg3).tags };
                return obj;
              }
            }
            if (callback(closure_2[1]).USE_IPTC) {
              if (callback4(name, value)) {
                obj = { __iptc: callback(closure_2[3]).read(callback5(value), 0, arg3) };
                return obj;
              }
            }
            if (name) {
              if (!callback3(name, value)) {
                if (!callback4(name, value)) {
                  obj = { value, description: description.description };
                  return callback2({}, name, obj);
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
        let tmp = tmp7;
        let tmp2 = tmp8;
        let tmp3 = tmp9;
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
