// Module ID: 11932
// Function ID: 11933
// Name: useUploadDisabled
// Dependencies: [7243, 4750, 7907, 1085, 558, 576, 6923, 504, 2]

// Module 11932 (useUploadDisabled)
import FakePlaceholderPrivateChannel from "FakePlaceholderPrivateChannel" /* 6923 */;
import DraftStore from "DraftStore" /* 7243 */;
import PermissionStore from "PermissionStore" /* 4750 */;
import UploadAttachmentStore from "UploadAttachmentStore" /* 7907 */;
import Constants from "Constants" /* 1085 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, tmp2, tmp6;

let hasOwnProperty;
let metroRequire;
const DraftType = DraftStore.DraftType;
({ MAX_UPLOAD_COUNT: hasOwnProperty, Permissions: metroRequire } = Constants);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useUploadDisabled(arg0) {
  let first;
  let id;
  let tmp7;
  _require = arg0;
  let tmp = _require;
  const obj = require("react");
  const cResult = obj.c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PermissionStore, ];
    items[1] = UploadAttachmentStore;
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    class A {
      constructor() {
        obj = closure_0;
        tmp = closure_4.getUploads(closure_0.id, DraftType.ChannelMessage).length >= MAX_UPLOAD_COUNT;
        if (!tmp) {
          tmp2 = closure_0;
          tmp3 = closure_1;
          tmp4 = obj.id === closure_0(closure_1[6]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
          if (!tmp4) {
            isPrivateResult = obj.isPrivate();
            if (!isPrivateResult) {
              tmp6 = closure_3;
              tmp7 = Permissions;
              isPrivateResult = closure_3.can(Permissions.ATTACH_FILES, obj);
            }
            tmp4 = !isPrivateResult;
          }
          tmp = tmp4;
        }
        return tmp;
      }
    }
    cResult[1] = arg0;
    cResult[2] = A;
    tmp7 = A;
  } else {
    class A {
      constructor() {
        obj = closure_0;
        tmp = closure_4.getUploads(closure_0.id, DraftType.ChannelMessage).length >= MAX_UPLOAD_COUNT;
        if (!tmp) {
          tmp2 = closure_0;
          tmp3 = closure_1;
          tmp4 = obj.id === closure_0(closure_1[6]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
          if (!tmp4) {
            isPrivateResult = obj.isPrivate();
            if (!isPrivateResult) {
              tmp6 = closure_3;
              tmp7 = Permissions;
              isPrivateResult = closure_3.can(Permissions.ATTACH_FILES, obj);
            }
            tmp4 = !isPrivateResult;
          }
          tmp = tmp4;
        }
        return tmp;
      }
    }
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp7);
}) : (function useUploadDisabled(arg0) {
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
});
const result = size.fileFinishedImporting("modules/media_keyboard/native/useUploadDisabled.tsx");

export default tmp3;
