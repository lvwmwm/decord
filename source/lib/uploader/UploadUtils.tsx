// Module ID: 4669
// Function ID: 40599
// Name: DefaultHttpClient
// Dependencies: []
// Exports: calculateProgress, canUploadNatively, doesImageMatchUpload

// Module 4669 (DefaultHttpClient)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const tmp2 = () => {
  class DefaultHttpClient {
    constructor() {
      tmp = closure_2(this, DefaultHttpClient);
      return;
    }
  }
  const arg1 = DefaultHttpClient;
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
      const HTTP = DefaultHttpClient(closure_1[3]).HTTP;
      return HTTP.put(body);
    }
  };
  items[1] = obj;
  return callback(DefaultHttpClient, items);
}();
const tmp3 = () => {
  class LibdiscoreHttpClient {
    constructor() {
      tmp = closure_2(this, LibdiscoreHttpClient);
      obj = LibdiscoreHttpClient(closure_1[5]);
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
  const arg1 = LibdiscoreHttpClient;
  const items = [
    {
      key: "doUpload",
      value(body) {
        const LibdiscoreHttpClient = body;
        const httpClientAPI = LibdiscoreHttpClient(httpClientAPI[5]).getHttpClientAPI();
        if (null == httpClientAPI) {
          const _Error2 = Error;
          const error = new Error("Libdiscore client is not available");
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
            const _Error = Error;
            const error1 = new Error("No file path found in request body");
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
}();
const result = arg1(dependencyMap[6]).fileFinishedImporting("lib/uploader/UploadUtils.tsx");

export const doesImageMatchUpload = function doesImageMatchUpload(image, id) {
  if (id.id !== image.uri) {
    if (id.item.platform === id(dependencyMap[2]).UploadPlatform.REACT_NATIVE) {
      const item = id.item;
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
  let fileIsInAppDirResult = item.platform === arg1(dependencyMap[2]).UploadPlatform.REACT_NATIVE;
  if (fileIsInAppDirResult) {
    fileIsInAppDirResult = null != item.uri;
  }
  if (fileIsInAppDirResult) {
    fileIsInAppDirResult = arg1(dependencyMap[4]).fileIsInAppDir(item.uri);
    const obj = arg1(dependencyMap[4]);
  }
  if (fileIsInAppDirResult) {
    fileIsInAppDirResult = arg1(dependencyMap[5]).isLibdiscoreInitialized();
    const obj2 = arg1(dependencyMap[5]);
  }
  return fileIsInAppDirResult;
};
export const LibdiscoreHttpClient = tmp3;
