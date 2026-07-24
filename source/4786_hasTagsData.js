// Module ID: 4786
// Function ID: 41620
// Name: hasTagsData
// Dependencies: [4745, 4787]

// Module 4786 (hasTagsData)
const require = arg1;
const dependencyMap = arg6;
function hasTagsData(buffer, arg1) {
  return buffer.length < arg1 + c8;
}
function parseTags(buffer) {
  buffer = buffer.buffer;
  if (buffer.byteLength !== buffer.getUint32()) {
    const _Error3 = Error;
    const error = new Error("ICC profile length not matching");
    throw error;
  } else if (buffer.byteLength < c2) {
    const _Error2 = Error;
    const error1 = new Error("ICC profile too short");
    throw error1;
  } else {
    let obj = {};
    const _Object = Object;
    const keys = Object.keys(require(4787) /* toCompany */.iccProfile);
    for (let num = 0; num < keys.length; num = num + 1) {
      let tmp = keys[num];
      let tmp2 = require;
      let tmp3 = dependencyMap;
      let iter = require(4787) /* toCompany */.iccProfile[tmp];
      let _parseInt = parseInt;
      let valueResult = iter.value(buffer, parseInt(tmp, 10));
      let descriptionResult = valueResult;
      if (iter.description) {
        descriptionResult = iter.description(valueResult);
      }
      obj = { value: valueResult, description: descriptionResult };
      obj[iter.name] = obj;
    }
    if (sliceToString(buffer.slice(36, 40)) !== acsp) {
      const _Error = Error;
      const error2 = new Error("ICC profile: missing signature");
      throw error2;
    } else {
      let num8 = 132;
      if (buffer.length < 132) {
        return obj;
      } else {
        const uint32 = buffer.getUint32(128);
        let num9 = 0;
        if (0 < uint32) {
          while (!hasTagsData(buffer, num8)) {
            let tmp10 = require;
            let tmp11 = dependencyMap;
            let obj1 = require(4745) /* getStringFromDataView */;
            let stringFromDataView = obj1.getStringFromDataView(buffer, num8, 4);
            let uint321 = buffer.getUint32(num8 + 4);
            let uint322 = buffer.getUint32(num8 + 8);
            if (uint321 > buffer.length) {
              return obj;
            } else {
              let tmp73 = require;
              let tmp74 = dependencyMap;
              let obj8 = require(4745) /* getStringFromDataView */;
              let stringFromDataView1 = obj8.getStringFromDataView(buffer, uint321, 4);
              let tmp76 = desc;
              if (stringFromDataView1 === desc) {
                let uint323 = buffer.getUint32(uint321 + 8);
                if (uint323 > uint322) {
                  return obj;
                } else {
                  let tmp43 = addTag;
                  let tmp44 = sliceToString;
                  let tmp45 = addTag(obj, stringFromDataView, sliceToString(buffer.slice(uint321 + 12, uint321 + uint323 + 11)));
                  let tmp16 = uint323;
                  let tmp17 = tmp47;
                  let tmp18 = tmp48;
                  let tmp19 = tmp49;
                  let tmp20 = tmp50;
                  let tmp21 = tmp51;
                  let tmp22 = tmp52;
                  let tmp23 = tmp53;
                }
              } else {
                let tmp77 = mluc;
                if (stringFromDataView1 === mluc) {
                  let uint324 = buffer.getUint32(uint321 + 8);
                  let uint325 = buffer.getUint32(uint321 + 12);
                  let sum = uint321 + 16;
                  let items = [];
                  let num4 = 0;
                  let tmp30 = sum;
                  let num5 = 0;
                  if (0 < uint324) {
                    do {
                      let tmp31 = require;
                      let tmp32 = dependencyMap;
                      let obj3 = require(4745) /* getStringFromDataView */;
                      let stringFromDataView2 = obj3.getStringFromDataView(buffer, sum, 2);
                      let obj4 = require(4745) /* getStringFromDataView */;
                      let stringFromDataView3 = obj4.getStringFromDataView(buffer, sum + 2, 2);
                      let uint326 = buffer.getUint32(sum + 4);
                      let uint327 = buffer.getUint32(sum + 8);
                      let obj5 = require(4745) /* getStringFromDataView */;
                      obj = { languageCode: stringFromDataView2, countryCode: stringFromDataView3, text: obj5.getUnicodeStringFromDataView(buffer, uint321 + uint327, uint326) };
                      let arr = items.push(obj);
                      sum = sum + uint325;
                      num4 = num4 + 1;
                      tmp30 = sum;
                      num5 = num4;
                    } while (num4 < uint324);
                  }
                  if (1 === uint324) {
                    let tmp40 = addTag;
                    let tmp41 = addTag(obj, stringFromDataView, items[0].text);
                    tmp16 = tmp46;
                    tmp17 = uint324;
                    tmp18 = uint325;
                    tmp19 = tmp30;
                    tmp20 = items;
                    tmp21 = num5;
                    tmp22 = tmp52;
                    tmp23 = tmp53;
                  } else {
                    obj1 = {};
                    let num6 = 0;
                    let num7 = 0;
                    if (0 < items.length) {
                      do {
                        let _HermesInternal = HermesInternal;
                        obj1["" + items[num6].languageCode + "-" + items[num6].countryCode] = items[num6].text;
                        num6 = num6 + 1;
                        num7 = num6;
                        length = items.length;
                      } while (num6 < length);
                    }
                    let tmp38 = addTag;
                    let tmp39 = addTag(obj, stringFromDataView, obj1);
                    tmp23 = num7;
                    tmp16 = tmp46;
                    tmp17 = uint324;
                    tmp18 = uint325;
                    tmp19 = tmp30;
                    tmp20 = items;
                    tmp21 = num5;
                    tmp22 = obj1;
                  }
                } else {
                  let tmp78 = text;
                  if (stringFromDataView1 === text) {
                    let tmp24 = addTag;
                    let tmp25 = sliceToString;
                    let tmp26 = addTag(obj, stringFromDataView, sliceToString(buffer.slice(uint321 + 8, uint321 + uint322 - 7)));
                    tmp16 = tmp46;
                    tmp17 = tmp47;
                    tmp18 = tmp48;
                    tmp19 = tmp49;
                    tmp20 = tmp50;
                    tmp21 = tmp51;
                    tmp22 = tmp52;
                    tmp23 = tmp53;
                  } else {
                    let tmp15 = c7;
                    tmp16 = tmp46;
                    tmp17 = tmp47;
                    tmp18 = tmp48;
                    tmp19 = tmp49;
                    tmp20 = tmp50;
                    tmp21 = tmp51;
                    tmp22 = tmp52;
                    tmp23 = tmp53;
                    if (stringFromDataView1 === c7) {
                      let tmp79 = addTag;
                      let tmp80 = sliceToString;
                      let tmp81 = addTag(obj, stringFromDataView, sliceToString(buffer.slice(uint321 + 8, uint321 + 12)));
                      tmp16 = tmp46;
                      tmp17 = tmp47;
                      tmp18 = tmp48;
                      tmp19 = tmp49;
                      tmp20 = tmp50;
                      tmp21 = tmp51;
                      tmp22 = tmp52;
                      tmp23 = tmp53;
                    }
                  }
                }
              }
              num8 = num8 + 12;
              num9 = num9 + 1;
              tmp46 = tmp16;
              tmp47 = tmp17;
              tmp48 = tmp18;
              tmp49 = tmp19;
              tmp50 = tmp20;
              tmp51 = tmp21;
              tmp52 = tmp22;
              tmp53 = tmp23;
            }
          }
          return obj;
        }
        return obj;
      }
    }
  }
}
function sliceToString(buffer) {
  const uint8Array = new Uint8Array(buffer);
  return fromCharCode.apply(null, uint8Array);
}
function addTag(arg0, stringFromDataView, text) {
  if (require(4787) /* toCompany */.iccTags[stringFromDataView]) {
    let obj = { value: text, description: text };
    arg0[require(4787) /* toCompany */.iccTags[stringFromDataView].name] = obj;
  } else {
    obj = { value: text, description: text };
    arg0[stringFromDataView] = obj;
  }
}
let c2 = 84;
const acsp = "acsp";
const desc = "desc";
const mluc = "mluc";
const text = "text";
let c7 = "sig ";
let c8 = 12;
arg5.default = {
  read(buffer, arr) {
    if (arg2) {
      if (arr[0].compressionMethod !== require(4745) /* getStringFromDataView */.COMPRESSION_METHOD_NONE) {
        return (function readCompressedIcc(buffer, arr) {
          if (arr[0].compressionMethod === outer1_0(outer1_1[0]).COMPRESSION_METHOD_DEFLATE) {
            const _DataView = DataView;
            buffer = buffer.buffer;
            const dataView = new DataView(buffer.slice(arr[0].offset, arr[0].offset + arr[0].length));
            const obj = outer1_0(outer1_1[0]);
            const decompressResult = obj.decompress(dataView, arr[0].compressionMethod, "utf-8", "dataview");
            return obj.decompress(dataView, arr[0].compressionMethod, "utf-8", "dataview").then(outer1_10).catch(() => ({}));
          } else {
            return {};
          }
        })(buffer, arr);
      }
    }
    return (function readIcc(buffer, arr) {
      let length;
      let sum;
      let closure_0 = arr;
      let uint8Array = new Uint8Array(arr.reduce((arg0, arg1) => arg0 + arg1.length, 0));
      let c2 = 0;
      if (Array.isArray(buffer)) {
        const _DataView = DataView;
        let _Uint8Array = Uint8Array;
        const dataView = new DataView(Uint8Array.from(buffer).buffer);
        buffer = dataView.buffer;
      } else {
        buffer = buffer.buffer;
      }
      function _loop(arg0) {
        const found = arg0.find((chunkNumber) => chunkNumber.chunkNumber === closure_0);
        if (found) {
          const _Uint8Array = Uint8Array;
          const uint8Array = new Uint8Array(buffer.slice(found.offset, found.offset + found.length));
          const result = uint8Array.set(uint8Array, closure_2);
          closure_2 = closure_2 + uint8Array.length;
        } else {
          const _Error = Error;
          const _HermesInternal = HermesInternal;
          const error = new Error("ICC chunk " + arg0 + " not found");
          throw error;
        }
        const arr = arg0;
      }
      let num = 1;
      if (1 <= arr.length) {
        do {
          let tmp6 = _loop;
          let tmp7 = num;
          let _loopResult = _loop(num);
          sum = num + 1;
          num = sum;
          let tmp10 = arr;
          length = arr.length;
        } while (sum <= length);
      }
      const dataView1 = new DataView(uint8Array.buffer);
      return outer1_10(dataView1);
    })(buffer, arr);
  }
};
arg5.parseTags = parseTags;
