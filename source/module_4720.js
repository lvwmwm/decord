// Module ID: 4720
// Function ID: 41066
// Dependencies: [65, 4721, 4722, 4723, 4724, 4725, 4718, 4717]

// Module 4720
import _toConsumableArray from "_toConsumableArray";

const self = this;
let self2 = this;
if (this) {
  self2 = self.__createBinding;
}
if (self2) {
  let fn = self;
  if (self) {
    fn = self.__exportStar;
  }
  if (!fn) {
    fn = (obj, exports) => {
      for (const key10007 in arg0) {
        let tmp4 = key10007;
        let callResult = "default" === key10007;
        if (!callResult) {
          let _Object = Object;
          callResult = hasOwnProperty.call(arg1, key10007);
        }
        if (callResult) {
          continue;
        } else {
          let tmp2 = self2;
          let tmp3 = self2(arg1, arg0, key10007);
          continue;
        }
        continue;
      }
    };
  }
  let _Object2 = Object;
  let obj = { value: true };
  exports.validateFileType = undefined;
  fn(require("isM4A"), exports);
  fn(require("is7Z"), exports);
  fn(require("isAVIF"), exports);
  fn(require("isBLEND"), exports);
  fn(require("isM4V"), exports);
  exports.validateFileType = function validateFileType(fileChunk, arr, chunkSize) {
    let items = [];
    const set = new Set(arr.map((str) => {
      const parts = str.split(".");
      const formatted = parts.join("").toUpperCase();
      let combined = formatted;
      if ("7Z" === formatted) {
        const _HermesInternal = HermesInternal;
        combined = "_" + formatted;
      }
      return combined;
    }));
    const iter = _toConsumableArray(new Set(arr.map((str) => {
      const parts = str.split(".");
      const formatted = parts.join("").toUpperCase();
      let combined = formatted;
      if ("7Z" === formatted) {
        const _HermesInternal = HermesInternal;
        combined = "_" + formatted;
      }
      return combined;
    })))[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let str5 = nextResult;
      let _Object2 = Object;
      let tmp37 = require;
      let tmp38 = dependencyMap;
      if (hasOwnProperty2.call(require(4718).FileTypes, nextResult)) {
        let tmp9 = items;
        let tmp10 = nextResult;
        arr = items.push(str5);
        continue;
      } else {
        let _TypeError = TypeError;
        let tmp4 = nextResult;
        let _HermesInternal = HermesInternal;
        let str = "Type `";
        let str2 = "` is not supported. Please make sure that `types` list conatins only supported files";
        let tmp5 = new.target;
        let tmp6 = new.target;
        let typeError = new TypeError("Type `" + str5.toLowerCase() + "` is not supported. Please make sure that `types` list conatins only supported files");
        let tmp8 = typeError;
        throw typeError;
      }
    }
    if (chunkSize) {
      const _Object = Object;
      if (hasOwnProperty.call(chunkSize, "chunkSize")) {
        chunkSize = undefined;
        if (null != chunkSize) {
          chunkSize = chunkSize.chunkSize;
        }
        let num2 = 0;
        if (null !== chunkSize) {
          num2 = 0;
          if (undefined !== chunkSize) {
            num2 = chunkSize;
          }
        }
        if (num2 <= 0) {
          const _RangeError = RangeError;
          const rangeError = new RangeError("chunkSize must be bigger than zero");
          throw rangeError;
        }
      }
    }
    if (!chunkSize) {
      const arr2 = (function addSimilarTypes(items) {
        if (items.some((arg0) => "MP4" === arg0)) {
          items = ["M4V"];
        } else {
          items = items.some((arg0) => "AAC" === arg0) ? ["M4A"] : [];
        }
        return items;
      })(items);
      if (arr2.length > 0) {
        items = items.concat(arr2);
      }
    } else {
      let excludeSimilarTypes;
      if (null != chunkSize) {
        excludeSimilarTypes = chunkSize.excludeSimilarTypes;
      }
    }
    let items1 = [];
    const items2 = [];
    for (const item10070 of items) {
      let tmp40 = require;
      let tmp41 = dependencyMap;
      let tmp39 = item10070;
      let FileTypes4 = require(4718).FileTypes;
      let tmp42 = items1;
      items1 = items1.concat(FileTypes4.getSignaturesByName(item10070));
      let FILE_TYPES_REQUIRED_ADDITIONAL_CHECK = require(4718).FILE_TYPES_REQUIRED_ADDITIONAL_CHECK;
      if (FILE_TYPES_REQUIRED_ADDITIONAL_CHECK.includes(item10070.toLowerCase())) {
        let tmp18 = items2;
        let tmp19 = require;
        let tmp20 = dependencyMap;
        let FileTypes = require(4718).FileTypes;
        let tmp21 = item10070;
        arr = items2.push(FileTypes.getInfoByName(tmp39));
      }
      continue;
    }
    let num4;
    if (null != chunkSize) {
      num4 = chunkSize.chunkSize;
    }
    if (!num4) {
      num4 = 64;
    }
    fileChunk = require(4717) /* getFileChunk */.getFileChunk(fileChunk, num4);
    const FileTypes2 = require(4718).FileTypes;
    const detectSignatureResult = FileTypes2.detectSignature(fileChunk, items1);
    require = detectSignatureResult;
    if (detectSignatureResult) {
      if (items2.length > 0) {
        const found = items2.filter((signatures) => {
          signatures = signatures.signatures;
          return signatures.includes(closure_0);
        });
        if (found.length > 0) {
          const FileTypes3 = require(4718).FileTypes;
          const result = FileTypes3.detectTypeByAdditionalCheck(fileChunk, found);
          dependencyMap = result;
          let someResult = !tmp30;
          if (!!result) {
            someResult = items.some((str) => str.toLowerCase() === closure_1);
          }
          return someResult;
        }
      }
      return true;
    } else {
      return false;
    }
    const tmp2 = _toConsumableArray(new Set(arr.map((str) => {
      const parts = str.split(".");
      const formatted = parts.join("").toUpperCase();
      let combined = formatted;
      if ("7Z" === formatted) {
        const _HermesInternal = HermesInternal;
        combined = "_" + formatted;
      }
      return combined;
    })));
  };
} else {
  let _Object = Object;
}
