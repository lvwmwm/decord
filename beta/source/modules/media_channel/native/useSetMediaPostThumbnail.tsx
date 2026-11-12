// Module ID: 14789
// Function ID: 14790
// Name: useSetMediaPostThumbnail
// Dependencies: [19, 7810, 8310, 563, 8313, 9901, 5406, 2]
// Exports: default

// Module 14789 (useSetMediaPostThumbnail)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5406 */;
import DraftStore from "DraftStore" /* 7810 */;
import UploadAttachmentActionCreatorsDefault from "UploadAttachmentActionCreators" /* 9901 */;
import react from "react" /* 19 */;
import UploadAttachmentStore from "UploadAttachmentStore" /* 8310 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, item;

const DraftType = DraftStore.DraftType;
const result = size.fileFinishedImporting("modules/media_channel/native/useSetMediaPostThumbnail.tsx");

export default function useSetMediaPostThumbnail(arg0, arg1) {
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
      const tmp2 = platform === closure_1_0(stateFromStores[4]).UploadPlatform.REACT_NATIVE && true === item.isThumbnail;
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
};
