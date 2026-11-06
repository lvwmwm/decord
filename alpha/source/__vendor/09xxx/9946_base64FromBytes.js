// Module ID: 9946
// Function ID: 9947
// Name: base64FromBytes
// Dependencies: [200, 17, 9947, 9945]
// Exports: bytesToBlob

// Module 9946 (base64FromBytes)
import react_native from "react-native" /* 17 */;
import _mod200 from "module_200" /* 200 */;
import stringToUTF8 from "stringToUTF8" /* 9945 */;

let c2, c3;

function base64FromBytes(uint8Array) {
  let str = "";
  let num = 0;
  let str2 = "";
  if (0 < uint8Array.length) {
    do {
      let num2 = uint8Array[num];
      if (num2 == null) {
        num2 = 0;
      }
      let sum = num + 1;
      let tmp4 = sum < uint8Array.length;
      let sum1 = num + 2;
      let tmp6 = sum1 < uint8Array.length;
      let num3 = 0;
      if (tmp4) {
        let num4 = uint8Array[sum];
        if (num4 == null) {
          num4 = 0;
        }
        num3 = num4;
      }
      let num5 = 0;
      if (tmp6) {
        let num6 = uint8Array[sum1];
        if (num6 == null) {
          num6 = 0;
        }
        num5 = num6;
      }
      let tmp7 = c4;
      let str3 = "=";
      let sum2 = str + c4[num2 >> 2] + c4[(3 & num2) << 4 | num3 >> 4];
      if (tmp4) {
        str3 = tmp7[(15 & num3) << 2 | num5 >> 6];
      }
      let str4 = "=";
      let sum3 = sum2 + str3;
      if (tmp6) {
        str4 = tmp7[63 & num5];
      }
      str = sum3 + str4;
      num = num + 3;
      str2 = str;
    } while (num < uint8Array.length);
  }
  return str2;
}
let c4 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

export { base64FromBytes };
export function bytesToBlob(_bodyBytes, type) {
  function blobManager() {
    if (undefined !== c2) {
      return c2;
    } else {
      try {
        const tmp3 = _mod200;
        let _default;
        if (tmp3 != null) {
          _default = tmp3.default;
        }
        if (_default == null) {
          _default = tmp3;
        }
        if (_default == null) {
          _default = null;
        }
        c2 = _default;
      } catch (err) {
        c2 = null;
      }
      let tmp10 = c2;
      if (c2 == null) {
        tmp10 = null;
      }
      return tmp10;
    }
  }
  function nitroFetchBlob() {
    if (undefined !== c3) {
      return c3;
    } else {
      try {
        const NativeModules = react_native.NativeModules;
        let NitroFetchBlob;
        const tmp = require;
        const tmp2 = dependencyMap;
        if (NativeModules != null) {
          NitroFetchBlob = NativeModules.NitroFetchBlob;
        }
        if (NitroFetchBlob == null) {
          NitroFetchBlob = tmp(tmp2[2]).default;
        }
        if (NitroFetchBlob == null) {
          NitroFetchBlob = null;
        }
        c3 = NitroFetchBlob;
      } catch (err) {
        c3 = null;
      }
      let tmp8 = c3;
      if (c3 == null) {
        tmp8 = null;
      }
      return tmp8;
    }
  }
  if (0 === _bodyBytes.byteLength) {
    const _Blob2 = Blob;
    const self5 = this;
    const self6 = this;
    const obj2 = { type };
    const blob = new Blob([], obj2);
    return blob;
  } else {
    try {
      let tmp = blobManager();
      let tmp2 = nitroFetchBlob();
      let tmp3 = null;
      let createFromOptions;
      const obj = tmp;
      if (tmp != null) {
        createFromOptions = tmp.createFromOptions;
      }
      if (typeof createFromOptions === "function") {
        let createBlobId1;
        if (tmp2 != null) {
          createBlobId1 = tmp2.createBlobId;
        }
        if (typeof createBlobId1 === "function") {
          const _Uint8Array2 = Uint8Array;
          const self7 = this;
          const self8 = this;
          const createBlobId = tmp2.createBlobId;
          const uint8Array = new Uint8Array(_bodyBytes);
          const blobId = createBlobId(base64FromBytes(uint8Array));
          const tmp30 = blobId;
          if (tmp30) {
            const obj3 = { blobId, offset: 0, size: _bodyBytes.byteLength, type };
            return obj.createFromOptions(obj3);
          }
        }
      }
      const _Blob = Blob;
      let tmp8 = require;
      let tmp10 = stringToUTF8;
      const _Uint8Array = Uint8Array;
      const self = this;
      const self2 = this;
      const utf8ToString = tmp10.utf8ToString;
      const uint8Array1 = new Uint8Array(_bodyBytes);
      const items = [utf8ToString(uint8Array1)];
      const self3 = this;
      const self4 = this;
      const obj4 = { type };
      const blob1 = new Blob(items, obj4);
      return blob1;
    } catch (err) {
    }
  }
}
