// Module ID: 7845
// Function ID: 62543
// Name: InlineUploader
// Dependencies: []

// Module 7845 (InlineUploader)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = /^[a-f0-9]{32}$/;
const tmp2 = () => {
  class InlineUploader {
    constructor(arg0, arg1) {
      tmp = closure_4(this, InlineUploader);
      this.surface = arg0;
      this.originalMd5Promise = arg1;
      return;
    }
  }
  const importDefault = InlineUploader;
  let obj = {
    key: "getOriginalMd5",
    value() {
      return this.originalMd5Promise;
    }
  };
  const items = [obj, ];
  obj = { key: "buildHeaders" };
  let closure_0 = callback(async function(arg0) {
    return closure_1.buildHeadersForMd5(yield this.originalMd5Promise, arg0);
  });
  obj.value = function buildHeaders() {
    return callback(...arguments);
  };
  items[1] = obj;
  obj = {
    key: "fromBlob",
    value(surface) {
      const obj = InlineUploader(closure_2[3]);
      const fromBlobResult = InlineUploader(closure_2[3]).fromBlob(arg1);
      return new InlineUploader(surface, InlineUploader(closure_2[3]).fromBlob(arg1).catch(() => null));
    }
  };
  const items1 = [
    obj,
    {
      key: "buildHeadersForMd5",
      value(arg0, arg1) {
        const tmp = function serializeOriginalMd5Header(arg0) {
          if (null == arg0) {
            return null;
          } else if ("string" === typeof arg0) {
            let tmp9 = null;
            if (regex.test(arg0)) {
              tmp9 = arg0;
            }
            return tmp9;
          } else {
            const items = [];
            const _Object = Object;
            const keys = Object.keys(arg0);
            for (let num = 0; num < keys.length; num = num + 1) {
              let tmp = keys[num];
              let tmp2 = arg0[tmp];
              let isMatch = null != tmp2;
              if (isMatch) {
                let tmp4 = regex;
                isMatch = regex.test(tmp2);
              }
              if (isMatch) {
                let items1 = [tmp, tmp2];
                let arr = items.push(items1);
              }
            }
            let joined = null;
            if (0 !== items.length) {
              const sorted = items.sort((arg0, arg1) => {
                let tmp;
                let tmp2;
                [tmp] = arg0;
                [tmp2] = arg1;
                let num = -1;
                if (tmp >= tmp2) {
                  let num2 = 0;
                  if (tmp > tmp2) {
                    num2 = 1;
                  }
                  num = num2;
                }
                return num;
              });
              const mapped = items.map((arg0) => {
                let str;
                let tmp;
                [str, tmp] = arg0;
                return "" + str.toLowerCase() + "=\"" + tmp + "\"";
              });
              joined = mapped.join(", ");
            }
            return joined;
          }
        }(arg0);
        let tmp2 = arg1;
        if (null != tmp) {
          const obj = {};
          const merged = Object.assign(arg1);
          obj[callback(closure_2[4]).ORIGINAL_MD5_HEADER] = tmp;
          tmp2 = obj;
        }
        return tmp2;
      }
    }
  ];
  return callback2(InlineUploader, items, items1);
}();
const result = arg1(dependencyMap[5]).fileFinishedImporting("lib/uploader_inline/InlineUploader.tsx");

export default tmp2;
