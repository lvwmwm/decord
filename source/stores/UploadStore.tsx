// Module ID: 7079
// Function ID: 56639
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 4349, 566, 686, 2]

// Module 7079 (_isNativeReflectConstruct)
import initialize from "initialize";
import dispatcher from "dispatcher";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

function _isNativeReflectConstruct() {
  let initialize = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return initialize;
  }
  const result = _isNativeReflectConstruct();
}
function storeLocalUriForUpload(arg0, items) {
  let initialize = items;
  items = items.items;
  let mapped;
  if (null != items) {
    mapped = items.map((item) => {
      item = item.item;
      const obj = {};
      const width = item.width;
      let num = 0;
      if (null != width) {
        num = width;
      }
      obj.width = num;
      const height = item.height;
      let num2 = 0;
      if (null != height) {
        num2 = height;
      }
      obj.height = num2;
      const originalUri = item.originalUri;
      let str = "";
      let str2 = "";
      if (null != originalUri) {
        str2 = originalUri;
      }
      obj.localUri = str2;
      obj.uploaderId = items.id;
      const id = item.id;
      if (null != id) {
        str = id;
      }
      obj.uploaderItemId = str;
      return obj;
    });
  }
  if (null == mapped) {
    mapped = [];
  }
  closure_13[arg0] = mapped;
}
function clearLocalUriForUpload() {
  let closure_13 = {};
}
function clearFile(channelId, id) {
  let initialize = id;
  let tmp3 = null != arr;
  if (tmp3) {
    dependencyMap[channelId] = arr.filter((id) => id.id !== initialize);
    delete tmp[tmp2];
    delete tmp[tmp2];
    tmp3 = arr.length !== dependencyMap[channelId].length;
  }
  return tmp3;
}
function updateFile(channelId, file) {
  let initialize = file;
  if (null == dependencyMap[channelId]) {
    return false;
  } else {
    dependencyMap[channelId] = arr.map((id) => {
      let tmp = id;
      if (id.id === id.id) {
        const obj = {};
        const merged = Object.assign(id);
        const merged1 = Object.assign(id);
        tmp = obj;
      }
      return tmp;
    });
    let tmp4 = null != tmp3;
    if (tmp4) {
      tmp4 = null != dependencyMap4[tmp3.id];
    }
    if (tmp4) {
      let obj = {};
      let merged = Object.assign(dependencyMap4[tmp3.id]);
      let merged1 = Object.assign(file);
      dependencyMap4[tmp3.id] = obj;
    }
  }
}
const re6 = /^(assets-library|ph|file):\/\//;
const re7 = /^content:\/\//;
let closure_8 = Object.freeze([]);
let closure_9 = {};
let closure_10 = {};
let closure_11 = {};
let closure_12 = {};
let closure_13 = {};
let tmp2 = ((Store) => {
  class UploadStore {
    constructor() {
      self = this;
      tmp = UploadStore(this, UploadStore);
      obj = outer1_3(UploadStore);
      tmp2 = outer1_2;
      if (outer1_14()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(UploadStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_5);
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "getFiles",
    value(arg0) {
      let tmp = outer1_9[arg0];
      if (null == tmp) {
        tmp = outer1_8;
      }
      return tmp;
    }
  };
  items[1] = obj;
  obj = {
    key: "getMessageForFile",
    value(arg0) {
      return outer1_11[arg0];
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getUploaderFileForMessageId",
    value(arg0) {
      return outer1_12[arg0];
    }
  };
  items[4] = {
    key: "getUploadAttachments",
    value(arg0) {
      if (null != arg0) {
        return outer1_13[arg0];
      }
    }
  };
  return callback(UploadStore, items);
})(require("initialize").Store);
tmp2.displayName = "UploadStore";
tmp2 = new tmp2(require("dispatcher"), {
  CONNECTION_OPEN: function handleConnectionOpen() {
    clearLocalUriForUpload();
  },
  LOGOUT: function handleLogout() {
    clearLocalUriForUpload();
  },
  UPLOAD_START: function handleUploadStart(arg0) {
    let channelId;
    let file;
    let message;
    let uploader;
    ({ channelId, file, uploader, message } = arg0);
    if (!uploader._aborted) {
      if (!uploader._errored) {
        let tmp2 = dependencyMap[channelId];
        if (null == tmp2) {
          tmp2 = closure_8;
        }
        closure_10[file.id] = uploader;
        let items = [];
        const arraySpreadResult = HermesBuiltin.arraySpread(tmp2, 0);
        items[arraySpreadResult] = file;
        const sum = arraySpreadResult + 1;
        dependencyMap[channelId] = items;
        if (null != message) {
          closure_11[file.id] = message;
          items = file.items;
          if (null != items) {
            const obj = {};
            const merged = Object.assign(file);
            obj["items"] = items;
            closure_12[message.id] = obj;
          }
          let id = message.nonce;
          if (null == id) {
            id = message.id;
          }
          storeLocalUriForUpload(id, file);
          const tmp15 = storeLocalUriForUpload;
        }
      }
    }
  },
  UPLOAD_COMPRESSION_PROGRESS: function handleUploadCompressionProgress(channelId) {
    updateFile(channelId.channelId, channelId.file);
  },
  UPLOAD_PROGRESS: function handleUploadProgress(channelId) {
    updateFile(channelId.channelId, channelId.file);
  },
  UPLOAD_COMPLETE: function handleUploadComplete(channelId) {
    return clearFile(channelId.channelId, channelId.file.id);
  },
  UPLOAD_FAIL: function handleUploadFail(channelId) {
    return clearFile(channelId.channelId, channelId.file.id);
  },
  UPLOAD_CANCEL_REQUEST: function handleUploadCancel(arg0) {
    let initialize = tmp;
    if (null == dependencyMap2[arg0.file.id]) {
      return false;
    } else {
      const _setImmediate = setImmediate;
      setImmediate(() => {
        let cancelResult;
        if (null != tmp.cancel) {
          cancelResult = tmp.cancel();
        }
        return cancelResult;
      });
    }
  },
  UPLOAD_ITEM_CANCEL_REQUEST: function handleUploadItemCancel(itemId) {
    itemId = itemId.itemId;
    let dispatcher = tmp;
    if (null == dependencyMap2[itemId.file.id]) {
      return false;
    } else {
      const _setImmediate = setImmediate;
      setImmediate(() => tmp.cancelItem(itemId));
    }
  },
  UPLOAD_FILE_UPDATE: function handleUploadFileUpdate(file) {
    file = file.file;
    if (null != dependencyMap3[file.id]) {
      let id = tmp.nonce;
      if (null == id) {
        id = tmp.id;
      }
      storeLocalUriForUpload(id, file);
      const tmp2 = storeLocalUriForUpload;
    }
    updateFile(file.channelId, file);
  },
  UPLOAD_RESTORE_FAILED_UPLOAD: function restoreFailedUpload(messageId) {
    closure_12[messageId.messageId] = messageId.file;
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("stores/UploadStore.tsx");

export default tmp2;
