// Module ID: 4672
// Function ID: 40617
// Name: DefaultHttpClient
// Dependencies: [6, 7, 4665, 507, 4673, 1844, 2]
// Exports: calculateProgress, canUploadNatively, doesImageMatchUpload

// Module 4672 (DefaultHttpClient)
import set from "set";
import _defineProperties from "_defineProperties";

const require = arg1;
const tmp2 = (() => {
  class DefaultHttpClient {
    constructor() {
      tmp = outer1_2(this, DefaultHttpClient);
      return;
    }
  }
  let obj = {
    key: "sliceBody",
    value(arr) {
      let substr = arr;
      if (arr instanceof File) {
        substr = arr.slice(arg1);
      }
      return substr;
    }
  };
  const items = [obj, ];
  obj = {
    key: "doUpload",
    value(body, fileByteRange) {
      const self = this;
      fileByteRange = undefined;
      if (null != fileByteRange) {
        fileByteRange = fileByteRange.fileByteRange;
      }
      if (null != fileByteRange) {
        body.body = self.sliceBody(body.body, fileByteRange.fileByteRange.start);
      }
      const HTTP = DefaultHttpClient(outer1_1[3]).HTTP;
      return HTTP.put(body);
    }
  };
  items[1] = obj;
  return callback(DefaultHttpClient, items);
})();
let tmp3 = (() => {
  class LibdiscoreHttpClient {
    constructor() {
      tmp = outer1_2(this, LibdiscoreHttpClient);
      obj = LibdiscoreHttpClient(outer1_1[5]);
      if (obj.isLibdiscoreInitialized()) {
        return;
      } else {
        tmp2 = globalThis;
        _Error = Error;
        prototype = Error.prototype;
        tmp3 = new.target;
        str = "Libdiscore is not loaded";
        tmp4 = new.target;
        error = new Error("Libdiscore is not loaded");
        tmp6 = error;
        throw error;
      }
    }
  }
  const items = [
    {
      key: "doUpload",
      value(body) {
        let closure_0 = body;
        const httpClientAPI = LibdiscoreHttpClient(outer1_1[5]).getHttpClientAPI();
        if (null == httpClientAPI) {
          let _Error2 = Error;
          let error = new Error("Libdiscore client is not available");
          throw error;
        } else {
          body = body.body;
          let uri;
          if (null != body) {
            uri = body.uri;
          }
          let tmp3 = undefined !== uri;
          if (tmp3) {
            tmp3 = "string" === typeof body.body.uri;
          }
          if (!tmp3) {
            // // eliminated: always false
            let _Error = Error;
            let error1 = new Error("No file path found in request body");
            throw error1;
          } else {
            uri = body.body.uri;
            const uri1 = body.body.uri;
            if (uri.startsWith("file://")) {
              let substr = uri1.slice(7);
            } else {
              substr = uri1;
            }
          }
        }
      }
    }
  ];
  return callback(LibdiscoreHttpClient, items);
})();
const result = require("_isNativeReflectConstruct").fileFinishedImporting("lib/uploader/UploadUtils.tsx");

export const doesImageMatchUpload = function doesImageMatchUpload(image, closure_0) {
  if (closure_0.id !== image.uri) {
    if (closure_0.item.platform === require(4665) /* _isNativeReflectConstruct */.UploadPlatform.REACT_NATIVE) {
      const item = closure_0.item;
      const filename = image.filename;
      if (item.originalUri === image.uri) {
        return true;
      } else {
        if (null != filename) {
          const originalUri = item.originalUri;
          if (null != originalUri) {
            if (originalUri.includes(filename)) {
              return true;
            }
          }
        }
        return false;
      }
    } else {
      return false;
    }
  }
  return true;
};
export const calculateProgress = function calculateProgress(loaded, currentSize) {
  let num = 0;
  if (0 !== currentSize) {
    const _Math = Math;
    const _Math2 = Math;
    num = Math.min(Math.floor(loaded / currentSize * 100), 100);
  }
  return num;
};
export const DefaultHttpClient = tmp2;
export const canUploadNatively = function canUploadNatively(item) {
  let fileIsInAppDirResult = item.platform === require(4665) /* _isNativeReflectConstruct */.UploadPlatform.REACT_NATIVE;
  if (fileIsInAppDirResult) {
    fileIsInAppDirResult = null != item.uri;
  }
  if (fileIsInAppDirResult) {
    fileIsInAppDirResult = require(4673) /* _getAttachmentFile */.fileIsInAppDir(item.uri);
    const obj = require(4673) /* _getAttachmentFile */;
  }
  if (fileIsInAppDirResult) {
    fileIsInAppDirResult = require(1844) /* isBlockedDomain */.isLibdiscoreInitialized();
    const obj2 = require(1844) /* isBlockedDomain */;
  }
  return fileIsInAppDirResult;
};
export const LibdiscoreHttpClient = tmp3;
