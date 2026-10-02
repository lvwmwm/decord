// Module ID: 5200
// Function ID: 5201
// Name: UploadAttachmentStore
// Dependencies: [5201, 1086, 5204, 1127, 12, 5440, 5449, 504, 585, 2]

// Module 5200 (UploadAttachmentStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 585 */;
import Constants from "Constants" /* 1086 */;
import DraftStore from "DraftStore" /* 5201 */;
import CloudUpload from "CloudUpload" /* 5440 */;
import uploader_UploadUtils from "uploader/UploadUtils" /* 5449 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const DraftType = DraftStore.DraftType;
const MAX_UPLOAD_COUNT = Constants.MAX_UPLOAD_COUNT;
let map = new Map();
let closure_6 = [];
const Store = get_initializedDefault.Store;
class UploadAttachmentStore extends Store {
  getFirstUpload(arg0, arg1) {
    map = map.get(arg0);
    if (map == null) {
      const _Map = Map;
      const self = this;
      const self2 = this;
      map = new Map();
    }
    let value2;
    if (map != null) {
      value2 = map.get(arg1);
    }
    if (value2 == null) {
      value2 = closure_6;
    }
    let first = null;
    if (value2.length > 0) {
      first = value2[0];
    }
    return first;
  }
  hasAdditionalUploads(arg0, arg1) {
    map = map.get(arg0);
    if (map == null) {
      const _Map = Map;
      const self = this;
      const self2 = this;
      map = new Map();
    }
    let value2;
    if (map != null) {
      value2 = map.get(arg1);
    }
    if (value2 == null) {
      value2 = closure_6;
    }
    let num = value2.length;
    if (num == null) {
      num = 0;
    }
    return num > 1;
  }
  getUploads(id, ChannelMessage) {
    map = map.get(id);
    if (map == null) {
      const _Map = Map;
      const self = this;
      const self2 = this;
      map = new Map();
    }
    let value2;
    if (map != null) {
      value2 = map.get(ChannelMessage);
    }
    if (value2 == null) {
      value2 = closure_6;
    }
    return value2;
  }
  getUploadCount(channelId, draftType) {
    map = map.get(channelId);
    if (map == null) {
      const _Map = Map;
      const self = this;
      const self2 = this;
      map = new Map();
    }
    let value2;
    if (map != null) {
      value2 = map.get(draftType);
    }
    if (value2 == null) {
      value2 = closure_6;
    }
    let num = value2.length;
    if (num == null) {
      num = 0;
    }
    return num;
  }
  getUpload(channelId, id, ChannelMessage) {
    let closure_0 = id;
    map = map.get(channelId);
    if (map == null) {
      const _Map = Map;
      const self = this;
      const self2 = this;
      map = new Map();
    }
    let value2;
    if (map != null) {
      value2 = map.get(ChannelMessage);
    }
    if (value2 == null) {
      value2 = closure_6;
    }
    return value2.find((id) => id.id === closure_0);
  }
  findUpload(channelId, ChannelMessage, cResult) {
    map = map.get(channelId);
    if (map == null) {
      const _Map = Map;
      const self = this;
      const self2 = this;
      map = new Map();
    }
    let value2;
    if (map != null) {
      value2 = map.get(ChannelMessage);
    }
    if (value2 == null) {
      value2 = closure_6;
    }
    return value2.find(cResult);
  }
}
const prototype = UploadAttachmentStore.prototype;
UploadAttachmentStore.displayName = "UploadAttachmentStore";
let obj = {
  UPLOAD_ATTACHMENT_POP_FILE: function handlePopFile(channelId) {
    channelId = channelId.channelId;
    const ChannelMessage = DraftType.ChannelMessage;
    map = map.get(channelId);
    const tmp = DraftType;
    if (map == null) {
      const _Map = Map;
      const self2 = this;
      const self = this;
      map = new Map();
    }
    let value3;
    if (map != null) {
      value3 = map.get(ChannelMessage);
    }
    if (value3 == null) {
      value3 = closure_6;
    }
    const items = [...value3];
    items.shift();
    const ChannelMessage2 = tmp.ChannelMessage;
    let value4 = obj.get(channelId);
    if (value4 == null) {
      const _Map2 = Map;
      const self3 = this;
      const self4 = this;
      value4 = new Map();
    }
    const result = value4.set(ChannelMessage2, items);
    const result1 = obj.set(channelId, value4);
  },
  UPLOAD_ATTACHMENT_ADD_FILES: function handleAddFiles(arg0) {
    let channelId;
    let draftType;
    let files;
    let intl;
    let intl2;
    let obj3;
    ({ files, channelId } = arg0);
    ({ draftType, allowOptimization: importDefault } = arg0);
    let items;
    map = map.get(channelId);
    if (map == null) {
      const _Map = Map;
      const self2 = this;
      const self = this;
      map = new Map();
    }
    let value3;
    if (map != null) {
      value3 = map.get(draftType);
    }
    if (value3 == null) {
      value3 = closure_6;
    }
    items = [...value3];
    if (items.length + files.length > MAX_UPLOAD_COUNT) {
      if (draftType !== DraftType.SlashCommand) {
        if (draftType !== DraftType.ApplicationLauncherCommand) {
          const obj2 = { title: intl.string(channelId(items[3]).t.wOr6hB), body: intl2.formatToPlainString(channelId(items[3]).t["qqyp/e"], obj3) };
          const show = require("AlertActionCreators").show;
          require("AlertActionCreators");
          intl = channelId(items[3]).intl;
          intl2 = channelId(items[3]).intl;
          obj3 = { limit: tmp3 };
          show(obj2);
        }
      }
    }
    const arr2 = require("module_12");
    const item = arr2.forEach(files, (file) => {
      const cloudUpload = new CloudUpload.CloudUpload(file, channelId, items.length, importDefault);
      items.push(cloudUpload);
    });
    let value4 = obj.get(channelId);
    if (value4 == null) {
      const _Map2 = Map;
      const self3 = this;
      const self4 = this;
      value4 = new Map();
    }
    const result = value4.set(draftType, items);
    const result1 = obj.set(channelId, value4);
  },
  UPLOAD_ATTACHMENT_UPDATE_FILE: function handleUpdateFile(arg0) {
    let channelId;
    let closure_129_0;
    let closure_129_1;
    let closure_129_2;
    let closure_129_3;
    let closure_129_4;
    let draftType;
    ({ channelId, id: closure_129_0, filename: closure_129_1, description: closure_129_2, spoiler: closure_129_3, thumbnail: closure_129_4, draftType } = arg0);
    map = map.get(channelId);
    if (map == null) {
      const _Map = Map;
      const self2 = this;
      const self = this;
      map = new Map();
    }
    let value3;
    if (map != null) {
      value3 = map.get(draftType);
    }
    if (value3 == null) {
      value3 = closure_6;
    }
    const items = [...value3];
    const mapped = items.map((id) => {
      if (id.id === closure_1_0) {
        if (undefined !== filename) {
          id.filename = filename;
        }
        if (undefined !== spoiler) {
          id.spoiler = spoiler;
        }
        if (undefined !== description) {
          id.description = description;
        }
        if (undefined !== isThumbnail) {
          id.isThumbnail = isThumbnail;
        }
      }
      return id;
    });
    let value4 = obj.get(channelId);
    if (value4 == null) {
      const _Map2 = Map;
      const self3 = this;
      const self4 = this;
      value4 = new Map();
    }
    const result = value4.set(draftType, mapped);
    const result1 = obj.set(channelId, value4);
  },
  UPLOAD_ATTACHMENT_REMOVE_FILE: function handleRemoveFile(id) {
    let channelId;
    let draftType;
    ({ channelId, id: require, draftType } = id);
    let obj = map;
    map = map.get(channelId);
    if (map == null) {
      const _Map = Map;
      const self2 = this;
      const self = this;
      map = new Map();
    }
    let value3;
    if (map != null) {
      value3 = map.get(draftType);
    }
    if (value3 == null) {
      value3 = closure_6;
    }
    const items = [...value3];
    const findIndexResult = items.findIndex((item) => {
      const obj = uploader_UploadUtils;
      const obj2 = { uri: filename, filename };
      return obj.doesImageMatchUpload(obj2, item);
    });
    if (findIndexResult > -1) {
      const first = items.splice(findIndexResult, 1)[0];
      first.removeFromMsgDraft();
      let value4 = obj.get(channelId);
      if (value4 == null) {
        const _Map2 = Map;
        const self3 = this;
        const self4 = this;
        value4 = new Map();
      }
      const result = value4.set(draftType, items);
      const result1 = obj.set(channelId, value4);
    }
  },
  UPLOAD_ATTACHMENT_REMOVE_FILES: function handleRemoveFiles(arg0) {
    let attachmentIds;
    let channelId;
    let draftType;
    ({ channelId, attachmentIds, draftType } = arg0);
    let items;
    map = map.get(channelId);
    if (map == null) {
      const _Map = Map;
      const self2 = this;
      const self = this;
      map = new Map();
    }
    let value3;
    if (map != null) {
      value3 = map.get(draftType);
    }
    if (value3 == null) {
      value3 = closure_6;
    }
    items = [...value3];
    const item = attachmentIds.forEach((item) => {
      let closure_0 = item;
      const findIndexResult = items.findIndex((id) => closure_0 === id.id);
      const arr = items;
      if (findIndexResult > -1) {
        const first = arr.splice(findIndexResult, 1)[0];
        first.removeFromMsgDraft();
      }
    });
    let value4 = obj.get(channelId);
    if (value4 == null) {
      const _Map2 = Map;
      const self3 = this;
      const self4 = this;
      value4 = new Map();
    }
    const result = value4.set(draftType, items);
    const result1 = obj.set(channelId, value4);
  },
  UPLOAD_ATTACHMENT_CLEAR_ALL_FILES: function handleClearAllFiles(channelId) {
    channelId = channelId.channelId;
    const draftType = channelId.draftType;
    const obj = map;
    map = map.get(channelId);
    if (map == null) {
      const _Map = Map;
      const self = this;
      const self2 = this;
      map = new Map();
    }
    const result = map.set(draftType, []);
    const result1 = obj.set(channelId, map);
  },
  UPLOAD_ATTACHMENT_SET_UPLOADS: function handleSetUploads(channelId) {
    let draftType;
    let uploads;
    channelId = channelId.channelId;
    ({ uploads, draftType } = channelId);
    const obj = map;
    map = map.get(channelId);
    if (map == null) {
      const _Map = Map;
      const self = this;
      const self2 = this;
      map = new Map();
    }
    const result = map.set(draftType, uploads);
    const result1 = obj.set(channelId, map);
  },
  UPLOAD_ATTACHMENT_SET_FILE: function handleSetFile(arg0) {
    let allowOptimization;
    let channelId;
    let closure_129_0;
    let draftType;
    let file;
    ({ channelId, id: closure_129_0, file, draftType, allowOptimization } = arg0);
    map = map.get(channelId);
    if (map == null) {
      const _Map = Map;
      const self2 = this;
      const self = this;
      map = new Map();
    }
    let value3;
    if (map != null) {
      value3 = map.get(draftType);
    }
    if (value3 == null) {
      value3 = closure_6;
    }
    const items = [...value3];
    const found = items.filter((id) => id.id !== closure_1_0);
    const cloudUpload = new CloudUpload.CloudUpload(file, channelId, undefined, allowOptimization);
    found.push(cloudUpload);
    let value4 = obj.get(channelId);
    if (value4 == null) {
      const _Map2 = Map;
      const self3 = this;
      const self4 = this;
      value4 = new Map();
    }
    const result = value4.set(draftType, found);
    const result1 = obj.set(channelId, value4);
  }
};
const uploadAttachmentStore = new UploadAttachmentStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("stores/UploadAttachmentStore.tsx");

export default uploadAttachmentStore;
