// Module ID: 194
// Function ID: 2804
// Name: BlobManager
// Dependencies: []

// Module 194 (BlobManager)
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
const tmp2 = () => {
  class BlobManager {
    constructor() {
      tmp = closure_4(this, BlobManager);
      return;
    }
  }
  const global = BlobManager;
  let obj = {
    key: "createFromParts",
    value: function createFromParts(arr, type) {
      callback2(closure_3[2])(callback2(closure_3[3]), "NativeBlobModule is available.");
      const tmp3 = function uuidv4() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (arg0) => {
          const tmp = 16 * Math.random() | 0;
          let str = tmp;
          if ("x" != arg0) {
            str = 3 & tmp | 8;
          }
          return str.toString(16);
        });
      }();
      const mapped = arr.map((data) => {
        if (!(data instanceof ArrayBuffer)) {
          const _ArrayBuffer = ArrayBuffer;
          if (!ArrayBuffer.isView(data)) {
            const obj = {};
            if (data instanceof callback(closure_3[4]).default) {
              obj.data = data.data;
              obj.type = "blob";
              let tmp3 = obj;
            } else {
              const _String = String;
              obj.data = String(data);
              obj.type = "string";
              tmp3 = obj;
            }
            return tmp3;
          }
        }
        const error = new Error("Creating blobs from 'ArrayBuffer' and 'ArrayBufferView' are not supported");
        throw error;
      });
      const reduced = mapped.reduce((arg0, type) => {
        if ("string" === type.type) {
          const _encodeURI = encodeURI;
          let sum = arg0 + closure_0.unescape(encodeURI(type.data)).length;
        } else {
          sum = arg0 + type.data.size;
        }
        return sum;
      }, 0);
      let obj = callback2(closure_3[3]);
      const fromParts = obj.createFromParts(mapped, tmp3);
      obj = { blobId: tmp3, offset: 0, size: reduced };
      let str = "";
      if (type) {
        str = type.type;
      }
      obj.type = str;
      if (type) {
        let lastModified = type.lastModified;
      } else {
        const _Date = Date;
        lastModified = Date.now();
      }
      obj.lastModified = lastModified;
      return BlobManager.createFromOptions(obj);
    }
  };
  const items = [obj, , , , , , ];
  obj = {
    key: "createFromOptions",
    value: function createFromOptions(_response) {
      let obj = callback(closure_3[5]);
      obj.register(_response.blobId);
      obj = {};
      let merged = _response;
      obj = Object.create(callback(closure_3[4]).default.prototype);
      if (null == _response.__collector) {
        const obj1 = {};
        let result = null;
        if (null != BlobManager.__blobCollectorProvider) {
          result = BlobManager.__blobCollectorProvider(tmp4);
        }
        obj1.__collector = result;
        merged = Object.assign({}, _response, obj1);
      }
      obj.data = merged;
      return Object.assign(obj, obj);
    }
  };
  items[1] = obj;
  obj = {
    key: "release",
    value: function release(arg0) {
      callback2(closure_3[2])(callback2(closure_3[3]), "NativeBlobModule is available.");
      const tmp = callback2(closure_3[2]);
      callback(closure_3[5]).unregister(arg0);
      const obj = callback(closure_3[5]);
      if (!obj2.has(arg0)) {
        callback2(closure_3[3]).release(arg0);
        const obj3 = callback2(closure_3[3]);
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "addNetworkingHandler",
    value: function addNetworkingHandler() {
      callback2(closure_3[2])(callback2(closure_3[3]), "NativeBlobModule is available.");
      const tmp = callback2(closure_3[2]);
      callback2(closure_3[3]).addNetworkingHandler();
    }
  };
  items[4] = {
    key: "addWebSocketHandler",
    value: function addWebSocketHandler(arg0) {
      callback2(closure_3[2])(callback2(closure_3[3]), "NativeBlobModule is available.");
      const tmp = callback2(closure_3[2]);
      callback2(closure_3[3]).addWebSocketHandler(arg0);
    }
  };
  items[5] = {
    key: "removeWebSocketHandler",
    value: function removeWebSocketHandler(arg0) {
      callback2(closure_3[2])(callback2(closure_3[3]), "NativeBlobModule is available.");
      const tmp = callback2(closure_3[2]);
      const result = callback2(closure_3[3]).removeWebSocketHandler(arg0);
    }
  };
  items[6] = {
    key: "sendOverSocket",
    value: function sendOverSocket(data) {
      callback2(closure_3[2])(callback2(closure_3[3]), "NativeBlobModule is available.");
      const tmp = callback2(closure_3[2]);
      callback2(closure_3[3]).sendOverSocket(data.data, arg1);
    }
  };
  return callback(BlobManager, null, items);
}();
tmp2.isAvailable = importDefault(dependencyMap[3]);

export default tmp2;
