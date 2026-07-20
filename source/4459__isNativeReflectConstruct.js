// Module ID: 4459
// Function ID: 39325
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 4459 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _getUploads(arg0, arg1) {
  let value;
  const obj = getChannelUploads(arg0);
  if (null != obj) {
    value = obj.get(arg1);
  }
  if (null == value) {
    value = closure_11;
  }
  return value;
}
function getChannelUploads(arg0) {
  let map = map.get(arg0);
  if (null == map) {
    const _Map = Map;
    map = new Map();
  }
  return map;
}
function setUploads(arg0, arg1, arg2) {
  const obj = getChannelUploads(arg0);
  const result = obj.set(arg1, arg2);
  const result1 = map.set(arg0, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const DraftType = arg1(dependencyMap[5]).DraftType;
const MAX_UPLOAD_COUNT = arg1(dependencyMap[6]).MAX_UPLOAD_COUNT;
const map = new Map();
let closure_11 = [];
let tmp3 = (Store) => {
  class UploadAttachmentStore {
    constructor() {
      self = this;
      tmp = closure_3(this, UploadAttachmentStore);
      obj = closure_6(UploadAttachmentStore);
      tmp2 = closure_5;
      if (closure_12()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = UploadAttachmentStore;
  callback2(UploadAttachmentStore, Store);
  let obj = {
    key: "getFirstUpload",
    value(arg0, arg1) {
      const arr = callback4(arg0, arg1);
      let first = null;
      if (arr.length > 0) {
        first = arr[0];
      }
      return first;
    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "hasAdditionalUploads",
    value(arg0, arg1) {
      const length = callback4(arg0, arg1).length;
      let num = 0;
      if (null != length) {
        num = length;
      }
      return num > 1;
    }
  };
  items[1] = obj;
  obj = {
    key: "getUploads",
    value(arg0, arg1) {
      return callback4(arg0, arg1);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getUploadCount",
    value(arg0, arg1) {
      const length = callback4(arg0, arg1).length;
      let num = 0;
      if (null != length) {
        num = length;
      }
      return num;
    }
  };
  items[4] = {
    key: "getUpload",
    value(arg0, arg1, arg2) {
      const UploadAttachmentStore = arg1;
      return callback4(arg0, arg2).find((id) => id.id === arg1);
    }
  };
  items[5] = {
    key: "findUpload",
    value(arg0, arg1, arg2) {
      return callback4(arg0, arg1).find(arg2);
    }
  };
  return callback(UploadAttachmentStore, items);
}(importDefault(dependencyMap[12]).Store);
tmp3.displayName = "UploadAttachmentStore";
tmp3 = new tmp3(importDefault(dependencyMap[13]), {
  UPLOAD_ATTACHMENT_POP_FILE: function handlePopFile(channelId) {
    channelId = channelId.channelId;
    const items = [...closure_13(channelId, closure_8.ChannelMessage)];
    items.shift();
    setUploads(channelId, DraftType.ChannelMessage, items);
  },
  UPLOAD_ATTACHMENT_ADD_FILES: function handleAddFiles(arg0) {
    let channelId;
    let draftType;
    let files;
    ({ files, channelId } = arg0);
    const arg1 = channelId;
    ({ draftType, allowOptimization: closure_1 } = arg0);
    const items = [...closure_13(channelId, draftType)];
    const dependencyMap = items;
    if (items.length + files.length > MAX_UPLOAD_COUNT) {
      if (draftType !== DraftType.SlashCommand) {
        if (draftType !== DraftType.ApplicationLauncherCommand) {
          let obj = importDefault(dependencyMap[7]);
          obj = {};
          const intl = arg1(dependencyMap[8]).intl;
          obj.title = intl.string(arg1(dependencyMap[8]).t.wOr6hB);
          const intl2 = arg1(dependencyMap[8]).intl;
          obj = { limit: MAX_UPLOAD_COUNT };
          obj.body = intl2.formatToPlainString(arg1(dependencyMap[8]).t.qqyp/e, obj);
          obj.show(obj);
        }
      }
    }
    const item = importDefault(dependencyMap[9]).forEach(files, (file) => {
      const cloudUpload = new channelId(items[10]).CloudUpload(file, channelId, items.length, closure_1);
      items.push(cloudUpload);
    });
    setUploads(channelId, draftType, items);
  },
  UPLOAD_ATTACHMENT_UPDATE_FILE: function handleUpdateFile(arg0) {
    let channelId;
    let draftType;
    ({ channelId, id: closure_0, filename: closure_1, description: closure_2, spoiler: closure_3, thumbnail: closure_4, draftType } = arg0);
    const items = [...closure_13(channelId, draftType)];
    setUploads(channelId, draftType, items.map((id) => {
      if (id.id === closure_0) {
        if (undefined !== closure_1) {
          id.filename = closure_1;
        }
        if (undefined !== closure_3) {
          id.spoiler = closure_3;
        }
        if (undefined !== closure_2) {
          id.description = closure_2;
        }
        if (undefined !== closure_4) {
          id.isThumbnail = closure_4;
        }
      }
      return id;
    }));
  },
  UPLOAD_ATTACHMENT_REMOVE_FILE: function handleRemoveFile(id) {
    let channelId;
    let draftType;
    ({ channelId, id: closure_0, draftType } = id);
    const items = [...closure_13(channelId, draftType)];
    const findIndexResult = items.findIndex((id) => {
      let obj = callback(closure_2[11]);
      obj = { uri: callback, filename: callback };
      return obj.doesImageMatchUpload(obj, id);
    });
    if (findIndexResult > -1) {
      const first = items.splice(findIndexResult, 1)[0];
      first.removeFromMsgDraft();
      setUploads(channelId, draftType, items);
    }
  },
  UPLOAD_ATTACHMENT_REMOVE_FILES: function handleRemoveFiles(arg0) {
    let attachmentIds;
    let channelId;
    let draftType;
    ({ channelId, attachmentIds, draftType } = arg0);
    const items = [...closure_13(channelId, draftType)];
    const arg1 = items;
    const item = attachmentIds.forEach((arg0) => {
      const items = arg0;
      const findIndexResult = items.findIndex((id) => id === id.id);
      if (findIndexResult > -1) {
        const first = items.splice(findIndexResult, 1)[0];
        first.removeFromMsgDraft();
      }
    });
    setUploads(channelId, draftType, items);
  },
  UPLOAD_ATTACHMENT_CLEAR_ALL_FILES: function handleClearAllFiles(channelId) {
    setUploads(channelId.channelId, channelId.draftType, []);
  },
  UPLOAD_ATTACHMENT_SET_UPLOADS: function handleSetUploads(channelId) {
    setUploads(channelId.channelId, channelId.draftType, channelId.uploads);
  },
  UPLOAD_ATTACHMENT_SET_FILE: function handleSetFile(allowOptimization) {
    let channelId;
    let draftType;
    let file;
    ({ channelId, id: closure_0, file, draftType } = allowOptimization);
    const items = [...closure_13(channelId, draftType)];
    const found = items.filter((id) => id.id !== closure_0);
    const cloudUpload = new arg1(dependencyMap[10]).CloudUpload(file, channelId, undefined, allowOptimization.allowOptimization);
    found.push(cloudUpload);
    setUploads(channelId, draftType, found);
  }
});
const result = arg1(dependencyMap[14]).fileFinishedImporting("stores/UploadAttachmentStore.tsx");

export default tmp3;
