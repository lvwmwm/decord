// Module ID: 4467
// Function ID: 39421
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 4468, 653, 4470, 1212, 22, 4664, 4672, 566, 686, 2]

// Module 4467 (_isNativeReflectConstruct)
import ME from "ME";
import set from "set";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import { DraftType } from "_isNativeReflectConstruct";
import { MAX_UPLOAD_COUNT } from "ME";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _getUploads(channelId, draftType) {
  let value;
  const obj = getChannelUploads(channelId);
  if (null != obj) {
    value = obj.get(draftType);
  }
  if (null == value) {
    value = closure_11;
  }
  return value;
}
function getChannelUploads(channelId) {
  map = map.get(channelId);
  if (null == map) {
    const _Map = Map;
    map = new Map();
  }
  return map;
}
function setUploads(channelId) {
  const obj = getChannelUploads(channelId);
  const result = obj.set(arg1, arg2);
  const result1 = map.set(channelId, obj);
}
let map = new Map();
let closure_11 = [];
let tmp3 = ((Store) => {
  class UploadAttachmentStore {
    constructor() {
      self = this;
      tmp = outer1_3(this, UploadAttachmentStore);
      obj = outer1_6(UploadAttachmentStore);
      tmp2 = outer1_5;
      if (outer1_12()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(UploadAttachmentStore, Store);
  let obj = {
    key: "getFirstUpload",
    value(arg0, arg1) {
      const arr = outer1_13(arg0, arg1);
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
      const length = outer1_13(arg0, arg1).length;
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
      return outer1_13(arg0, arg1);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getUploadCount",
    value(arg0, arg1) {
      const length = outer1_13(arg0, arg1).length;
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
      let closure_0 = arg1;
      return outer1_13(arg0, arg2).find((id) => id.id === closure_0);
    }
  };
  items[5] = {
    key: "findUpload",
    value(arg0, arg1, arg2) {
      return outer1_13(arg0, arg1).find(arg2);
    }
  };
  return callback(UploadAttachmentStore, items);
})(require("initialize").Store);
tmp3.displayName = "UploadAttachmentStore";
tmp3 = new tmp3(require("dispatcher"), {
  UPLOAD_ATTACHMENT_POP_FILE: function handlePopFile(channelId) {
    channelId = channelId.channelId;
    const items = [..._getUploads(channelId, DraftType.ChannelMessage)];
    items.shift();
    setUploads(channelId, DraftType.ChannelMessage, items);
  },
  UPLOAD_ATTACHMENT_ADD_FILES: function handleAddFiles(arg0) {
    let channelId;
    let draftType;
    let files;
    let importDefault;
    ({ files, channelId } = arg0);
    ({ draftType, allowOptimization: importDefault } = arg0);
    const items = [..._getUploads(channelId, draftType)];
    if (items.length + files.length > MAX_UPLOAD_COUNT) {
      if (draftType !== DraftType.SlashCommand) {
        if (draftType !== DraftType.ApplicationLauncherCommand) {
          let obj = importDefault(items[7]);
          obj = {};
          const intl = channelId(items[8]).intl;
          obj.title = intl.string(channelId(items[8]).t.wOr6hB);
          const intl2 = channelId(items[8]).intl;
          obj = { limit: MAX_UPLOAD_COUNT };
          obj.body = intl2.formatToPlainString(channelId(items[8]).t["qqyp/e"], obj);
          obj.show(obj);
        }
      }
    }
    const item = importDefault(items[9]).forEach(files, (file) => {
      const cloudUpload = new channelId(items[10]).CloudUpload(file, channelId, items.length, closure_1);
      items.push(cloudUpload);
    });
    setUploads(channelId, draftType, items);
  },
  UPLOAD_ATTACHMENT_UPDATE_FILE: function handleUpdateFile(arg0) {
    let channelId;
    let ME;
    let set;
    let dependencyMap;
    let draftType;
    let importDefault;
    let require;
    ({ channelId, id: require, filename: importDefault, description: dependencyMap, spoiler: ME, thumbnail: set, draftType } = arg0);
    const items = [..._getUploads(channelId, draftType)];
    setUploads(channelId, draftType, items.map((id) => {
      if (id.id === closure_0) {
        if (undefined !== closure_1) {
          id.filename = closure_1;
        }
        if (undefined !== ME) {
          id.spoiler = ME;
        }
        if (undefined !== closure_2) {
          id.description = closure_2;
        }
        if (undefined !== set) {
          id.isThumbnail = set;
        }
      }
      return id;
    }));
  },
  UPLOAD_ATTACHMENT_REMOVE_FILE: function handleRemoveFile(id) {
    let channelId;
    let draftType;
    let require;
    ({ channelId, id: require, draftType } = id);
    const items = [..._getUploads(channelId, draftType)];
    const findIndexResult = items.findIndex((closure_0) => {
      let obj = outer1_0(outer1_2[11]);
      obj = { uri: closure_0, filename: closure_0 };
      return obj.doesImageMatchUpload(obj, closure_0);
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
    let items = [..._getUploads(channelId, draftType)];
    const item = attachmentIds.forEach((arg0) => {
      const items = arg0;
      const findIndexResult = items.findIndex((id) => closure_0 === id.id);
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
    let require;
    ({ channelId, id: require, file, draftType } = allowOptimization);
    const items = [..._getUploads(channelId, draftType)];
    const found = items.filter((id) => id.id !== closure_0);
    const cloudUpload = new require(4664) /* _callSuper */.CloudUpload(file, channelId, undefined, allowOptimization.allowOptimization);
    found.push(cloudUpload);
    setUploads(channelId, draftType, found);
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("stores/UploadAttachmentStore.tsx");

export default tmp3;
