// Module ID: 11519
// Function ID: 11520
// Name: useUploadDisabled
// Dependencies: [4621, 3913, 4620, 676, 589, 5752, 2]
// Exports: default

// Module 11519 (useUploadDisabled)
import { DraftType } from "handleChanged";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import map from "map";
import ME from "ME";

let c5;
let closure_6;
({ MAX_UPLOAD_COUNT: c5, Permissions: closure_6 } = ME);
const result = require("map").fileFinishedImporting("modules/media_keyboard/native/useUploadDisabled.tsx");

export default function useUploadDisabled(arg0) {
  const _require = arg0;
  const items = [getUncachedChannelPermissions, map];
  return _require(589).useStateFromStores(items, () => {
    let tmp = outer1_4.getUploads(lib.id, outer1_2.ChannelMessage).length >= outer1_5;
    if (!tmp) {
      let tmp4 = obj.id === lib(outer1_1[5]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
      if (!tmp4) {
        let isPrivateResult = obj.isPrivate();
        if (!isPrivateResult) {
          isPrivateResult = outer1_3.can(outer1_6.ATTACH_FILES, obj);
        }
        tmp4 = !isPrivateResult;
      }
      tmp = tmp4;
    }
    return tmp;
  });
};
