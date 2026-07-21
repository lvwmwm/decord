// Module ID: 7075
// Function ID: 56585
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 7075 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function storeLocalUriForUpload(arg0, items) {
  let closure_0 = items;
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
      obj.uploaderId = arg1.id;
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
  let closure_0 = id;
  let tmp = null != arr;
  if (tmp) {
    closure_9[channelId] = arr.filter((id) => id.id !== arg1);
    delete r4[r5];
    delete r4[r5];
    tmp = arr.length !== closure_9[channelId].length;
  }
  return tmp;
}
function updateFile(channelId, file) {
  let closure_0 = file;
  if (null == closure_9[channelId]) {
    return false;
  } else {
    closure_9[channelId] = arr.map((id) => {
      let tmp = id;
      if (id.id === arg1.id) {
        const obj = {};
        const merged = Object.assign(id);
        const merged1 = Object.assign(arg1);
        tmp = obj;
      }
      return tmp;
    });
    let tmp4 = null != tmp3;
    if (tmp4) {
      tmp4 = null != closure_12[tmp3.id];
    }
    if (tmp4) {
      const obj = {};
      const merged = Object.assign(closure_12[tmp3.id]);
      const merged1 = Object.assign(file);
      closure_12[tmp3.id] = obj;
    }
  }
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
let closure_5 = importDefault(dependencyMap[5]);
let closure_6 = /^(assets-library|ph|file):\/\//;
let closure_7 = /^content:\/\//;
let closure_8 = Object.freeze([]);
let closure_9 = {};
let closure_10 = {};
let closure_11 = {};
let closure_12 = {};
let closure_13 = {};
let tmp2 = (Store) => {
  class UploadStore {
    constructor() {
      self = this;
      tmp = UploadStore(this, UploadStore);
      obj = closure_3(UploadStore);
      tmp2 = closure_2;
      if (closure_14()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  let closure_0 = UploadStore;
  callback2(UploadStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_5);
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "getFiles",
    value(arg0) {
      let tmp = closure_9[arg0];
      if (null == tmp) {
        tmp = closure_8;
      }
      return tmp;
    }
  };
  items[1] = obj;
  obj = {
    key: "getMessageForFile",
    value(arg0) {
      return closure_11[arg0];
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getUploaderFileForMessageId",
    value(arg0) {
      return closure_12[arg0];
    }
  };
  items[4] = {
    key: "getUploadAttachments",
    value(arg0) {
      if (null != arg0) {
        return closure_13[arg0];
      }
    }
  };
  return callback(UploadStore, items);
}(importDefault(dependencyMap[6]).Store);
tmp2.displayName = "UploadStore";
tmp2 = new tmp2(importDefault(dependencyMap[7]), {
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
        let tmp2 = closure_9[channelId];
        if (null == tmp2) {
          tmp2 = closure_8;
        }
        closure_10[file.id] = uploader;
        let items = [];
        const arraySpreadResult = HermesBuiltin.arraySpread(tmp2, 0);
        items[arraySpreadResult] = file;
        const sum = arraySpreadResult + 1;
        closure_9[channelId] = items;
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
    let closure_0 = tmp;
    if (null == closure_10[arg0.file.id]) {
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
    let closure_1 = tmp;
    if (null == closure_10[itemId.file.id]) {
      return false;
    } else {
      const _setImmediate = setImmediate;
      setImmediate(() => tmp.cancelItem(itemId));
    }
  },
  UPLOAD_FILE_UPDATE: function handleUploadFileUpdate(file) {
    file = file.file;
    if (null != closure_11[file.id]) {
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
const result = arg1(dependencyMap[8]).fileFinishedImporting("stores/UploadStore.tsx");

export default tmp2;
