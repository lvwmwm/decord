// Module ID: 11588
// Function ID: 11589
// Name: useSetMediaPostThumbnail
// Dependencies: [19, 5192, 5191, 563, 5432, 9502, 4796, 2]
// Exports: default

// Module 11588 (useSetMediaPostThumbnail)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4796 */;
import UploadAttachmentActionCreatorsDefault from "UploadAttachmentActionCreators" /* 9502 */;
import noop from "module_19" /* 19 */;
import UploadAttachmentStore from "UploadAttachmentStore" /* 5191 */;

const require = globalThis.__r;

const require = fn;
const DraftType = fn(5192).DraftType;
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
