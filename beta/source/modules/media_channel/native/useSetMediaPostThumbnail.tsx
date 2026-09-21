// Module ID: 11508
// Function ID: 11509
// Name: useSetMediaPostThumbnail
// Dependencies: [19, 5107, 5106, 558, 568, 5346, 565, 9419, 4725, 2]

// Module 11508 (useSetMediaPostThumbnail)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4725 */;
import UploadAttachmentActionCreatorsDefault from "UploadAttachmentActionCreators" /* 9419 */;
import noop from "module_19" /* 19 */;
import UploadAttachmentStore from "UploadAttachmentStore" /* 5106 */;

const require = globalThis.__r;

const require = fn;
const DraftType = fn(5107).DraftType;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_channel/native/useSetMediaPostThumbnail.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, id) => {
  _require = arg0;
  closure_1 = id;
  const cResult = require("c").c(8);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UploadAttachmentStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
      const uploads = UploadAttachmentStore.getUploads(closure_0, DraftType.ChannelMessage);
      let found = uploads.find((item) => {
        let platform;
        if (item != null) {
          item = item.item;
          if (item != null) {
            platform = item.platform;
          }
        }
        let tmp2 = platform === closure_1_0(stateFromStores[5]).UploadPlatform.REACT_NATIVE;
        if (tmp2) {
          tmp2 = true === item.isThumbnail;
        }
        return tmp2;
      });
      if (found == null) {
        found = null;
      }
      return found;
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  let obj = require("c");
  stateFromStores = require("useStateFromStores").useStateFromStores(first, tmp6);
  if (cResult[3] === arg0) {
    if (cResult[4] === stateFromStores) {
      id = undefined;
      if (id != null) {
        id = id.id;
      }
      if (cResult[5] === id) {
        let isThumbnail;
        if (id != null) {
          isThumbnail = id.isThumbnail;
        }
        if (cResult[6] === isThumbnail) {
          let tmp11 = cResult[7];
        }
        return tmp11;
      }
    }
  }
  cResult[3] = arg0;
  cResult[4] = stateFromStores;
  let id1;
  if (id != null) {
    id1 = id.id;
  }
  cResult[5] = id1;
  let isThumbnail1;
  if (id != null) {
    isThumbnail1 = id.isThumbnail;
  }
  const fn2 = function f() {
    id = undefined;
    if (closure_1 != null) {
      id = tmp.id;
    }
    if (null != id) {
      let tmp4 = null != stateFromStores;
      if (tmp4) {
        let id1;
        if (tmp != null) {
          id1 = tmp.id;
        }
        tmp4 = tmp24.id !== id1;
      }
      if (tmp4) {
        const obj = UploadAttachmentActionCreatorsDefault;
        obj.update(closure_0, tmp24.id, DraftType.ChannelMessage, { thumbnail: false });
      }
      let flag;
      if (tmp != null) {
        flag = tmp.isThumbnail;
      }
      if (flag == null) {
        flag = false;
      }
      const obj2 = UploadAttachmentActionCreatorsDefault;
      let id2;
      if (tmp != null) {
        id2 = tmp.id;
      }
      const obj3 = { thumbnail: !flag, spoiler: false };
      obj2.update(closure_0, id2, DraftType.ChannelMessage, obj3);
      ActionSheetActionCreatorsDefault.hideActionSheet();
    }
  };
  cResult[6] = isThumbnail1;
  cResult[7] = fn2;
  tmp11 = fn2;
}) : ((arg0, arg1) => {
  _require = arg0;
  closure_1 = arg1;
  const items = [UploadAttachmentStore];
  stateFromStores = require("useStateFromStores").useStateFromStores(items, () => {
    const uploads = UploadAttachmentStore.getUploads(closure_0, DraftType.ChannelMessage);
    let found = uploads.find((item) => {
      let platform;
      if (item != null) {
        item = item.item;
        if (item != null) {
          platform = item.platform;
        }
      }
      let tmp2 = platform === closure_1_0(stateFromStores[5]).UploadPlatform.REACT_NATIVE;
      if (tmp2) {
        tmp2 = true === item.isThumbnail;
      }
      return tmp2;
    });
    if (found == null) {
      found = null;
    }
    return found;
  });
  const items1 = [stateFromStores, arg0, arg1];
  return noop.useCallback(() => {
    let id;
    if (closure_1 != null) {
      id = tmp.id;
    }
    if (null != id) {
      let tmp4 = null != stateFromStores;
      if (tmp4) {
        let id1;
        if (tmp != null) {
          id1 = tmp.id;
        }
        tmp4 = tmp24.id !== id1;
      }
      if (tmp4) {
        const obj = UploadAttachmentActionCreatorsDefault;
        obj.update(closure_0, tmp24.id, DraftType.ChannelMessage, { thumbnail: false });
      }
      let flag;
      if (tmp != null) {
        flag = tmp.isThumbnail;
      }
      if (flag == null) {
        flag = false;
      }
      const obj2 = UploadAttachmentActionCreatorsDefault;
      let id2;
      if (tmp != null) {
        id2 = tmp.id;
      }
      const obj3 = { thumbnail: !flag, spoiler: false };
      obj2.update(closure_0, id2, DraftType.ChannelMessage, obj3);
      ActionSheetActionCreatorsDefault.hideActionSheet();
    }
  }, items1);
});
