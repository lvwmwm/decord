// Module ID: 10793
// Function ID: 10794
// Name: useSetMediaPostThumbnail
// Dependencies: [19, 5193, 5192, 563, 5433, 8600, 4796, 2]
// Exports: default

// Module 10793 (useSetMediaPostThumbnail)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4796 */;
import UploadAttachmentActionCreatorsDefault from "UploadAttachmentActionCreators" /* 8600 */;
import noop from "module_19" /* 19 */;
import UploadAttachmentStore from "UploadAttachmentStore" /* 5192 */;

const require = globalThis.__r;

const require = fn;
const DraftType = fn(5193).DraftType;
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_channel/native/useSetMediaPostThumbnail.tsx");

export default function useSetMediaPostThumbnail(arg0, arg1) {
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
      let tmp2 = platform === closure_1_0(stateFromStores[4]).UploadPlatform.REACT_NATIVE;
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
};
