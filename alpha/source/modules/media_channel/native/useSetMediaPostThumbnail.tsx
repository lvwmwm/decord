// Module ID: 12761
// Function ID: 12762
// Name: useSetMediaPostThumbnail
// Dependencies: [19, 7237, 7889, 558, 576, 7740, 573, 9235, 5055, 2]

// Module 12761 (useSetMediaPostThumbnail)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import DraftStore from "DraftStore" /* 7237 */;
import UploadAttachmentActionCreatorsDefault from "UploadAttachmentActionCreators" /* 9235 */;
import react from "react" /* 19 */;
import UploadAttachmentStore from "UploadAttachmentStore" /* 7889 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, item;

const DraftType = DraftStore.DraftType;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useSetMediaPostThumbnail(arg0, id) {
  let closure_0;
  let first;
  let stateFromStores;
  let tmp6;
  _require = arg0;
  let closure_1 = id;
  const tmp = _require;
  let tmp2 = stateFromStores;
  let obj = require("react");
  const cResult = obj.c(8);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UploadAttachmentStore];
    cResult[0] = items;
    first = items;
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
        const tmp2 = platform === closure_1_0(stateFromStores[5]).UploadPlatform.REACT_NATIVE && true === item.isThumbnail;
        return tmp2;
      });
      if (found == null) {
        found = null;
      }
      return found;
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(tmp2[6]);
  stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  if (cResult[3] === arg0) {
    if (cResult[4] === stateFromStores) {
      id = undefined;
      const tmp8 = cResult[5];
      if (id != null) {
        id = id.id;
      }
      if (tmp8 === id) {
        let tmp13;
        let isThumbnail;
        const tmp11 = cResult[6];
        if (id != null) {
          isThumbnail = id.isThumbnail;
        }
        if (tmp11 === isThumbnail) {
          tmp13 = cResult[7];
        }
        return tmp13;
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
  const fn2 = function b() {
    let id1;
    if (closure_1 != null) {
      id1 = tmp.id;
    }
    if (null != id1) {
      let tmp4 = null != stateFromStores;
      if (tmp4) {
        let id2;
        id = tmp25.id;
        if (closure_1 != null) {
          id2 = tmp.id;
        }
        tmp4 = id !== id2;
      }
      if (tmp4) {
        const obj = UploadAttachmentActionCreatorsDefault;
        obj.update(closure_0, stateFromStores.id, DraftType.ChannelMessage, { thumbnail: false });
      }
      let flag;
      if (closure_1 != null) {
        flag = tmp.isThumbnail;
      }
      if (flag == null) {
        flag = false;
      }
      let id3;
      const update = UploadAttachmentActionCreatorsDefault.update;
      if (closure_1 != null) {
        id3 = tmp.id;
      }
      const obj2 = { thumbnail: !flag, spoiler: false };
      update(closure_0, id3, DraftType.ChannelMessage, obj2);
      const obj3 = ActionSheetActionCreatorsDefault;
      obj3.hideActionSheet();
    }
  };
  cResult[6] = isThumbnail1;
  cResult[7] = fn2;
  tmp13 = fn2;
}) : (function useSetMediaPostThumbnail(arg0, arg1) {
  let closure_0;
  let stateFromStores;
  _require = arg0;
  let closure_1 = arg1;
  let obj = require("useStateFromStores");
  const items = [UploadAttachmentStore];
  stateFromStores = obj.useStateFromStores(items, () => {
    const uploads = UploadAttachmentStore.getUploads(closure_0, DraftType.ChannelMessage);
    let found = uploads.find((item) => {
      let platform;
      if (item != null) {
        item = item.item;
        if (item != null) {
          platform = item.platform;
        }
      }
      const tmp2 = platform === closure_1_0(stateFromStores[5]).UploadPlatform.REACT_NATIVE && true === item.isThumbnail;
      return tmp2;
    });
    if (found == null) {
      found = null;
    }
    return found;
  });
  const items1 = [stateFromStores, arg0, arg1];
  return react.useCallback(() => {
    let id1;
    if (closure_1 != null) {
      id1 = tmp.id;
    }
    if (null != id1) {
      let tmp4 = null != stateFromStores;
      if (tmp4) {
        let id2;
        const id = tmp25.id;
        if (closure_1 != null) {
          id2 = tmp.id;
        }
        tmp4 = id !== id2;
      }
      if (tmp4) {
        const obj = UploadAttachmentActionCreatorsDefault;
        obj.update(closure_0, stateFromStores.id, DraftType.ChannelMessage, { thumbnail: false });
      }
      let flag;
      if (closure_1 != null) {
        flag = tmp.isThumbnail;
      }
      if (flag == null) {
        flag = false;
      }
      let id3;
      const update = UploadAttachmentActionCreatorsDefault.update;
      if (closure_1 != null) {
        id3 = tmp.id;
      }
      const obj2 = { thumbnail: !flag, spoiler: false };
      update(closure_0, id3, DraftType.ChannelMessage, obj2);
      const obj3 = ActionSheetActionCreatorsDefault;
      obj3.hideActionSheet();
    }
  }, items1);
});
const result = size.fileFinishedImporting("modules/media_channel/native/useSetMediaPostThumbnail.tsx");

export default tmp2;
