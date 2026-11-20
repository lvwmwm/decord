// Module ID: 12976
// Function ID: 12977
// Name: useUploadDisabled
// Dependencies: [8195, 4726, 8347, 1071, 504, 6724, 2]
// Exports: default

// Module 12976 (useUploadDisabled)
import FakePlaceholderPrivateChannel from "FakePlaceholderPrivateChannel" /* 6724 */;
import DraftStore from "DraftStore" /* 8195 */;
import PermissionStore from "PermissionStore" /* 4726 */;
import UploadAttachmentStore from "UploadAttachmentStore" /* 8347 */;
import Constants from "Constants" /* 1071 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let hasOwnProperty;
let metroRequire;
const DraftType = DraftStore.DraftType;
({ MAX_UPLOAD_COUNT: hasOwnProperty, Permissions: metroRequire } = Constants);
const result = size.fileFinishedImporting("modules/media_keyboard/native/useUploadDisabled.tsx");

export default function useUploadDisabled(arg0) {
  let id;
  _require = arg0;
  const obj = require("get initialized");
  const items = [PermissionStore, UploadAttachmentStore];
  return obj.useStateFromStores(items, () => {
    let tmp = UploadAttachmentStore.getUploads(id.id, DraftType.ChannelMessage).length >= hasOwnProperty;
    if (!tmp) {
      let tmp4 = obj.id === FakePlaceholderPrivateChannel.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
      if (!tmp4) {
        tmp4 = !(obj.isPrivate() || PermissionStore.can(metroRequire.ATTACH_FILES, obj));
        const isPrivateResult = obj.isPrivate() || PermissionStore.can(metroRequire.ATTACH_FILES, obj);
      }
      tmp = tmp4;
    }
    return tmp;
  });
};
