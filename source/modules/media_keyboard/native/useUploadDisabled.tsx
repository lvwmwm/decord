// Module ID: 11342
// Function ID: 88208
// Name: useUploadDisabled
// Dependencies: [4468, 3758, 4467, 653, 566, 5606, 2]
// Exports: default

// Module 11342 (useUploadDisabled)
import { DraftType } from "_isNativeReflectConstruct";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import ME from "ME";

let closure_5;
let closure_6;
({ MAX_UPLOAD_COUNT: closure_5, Permissions: closure_6 } = ME);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/media_keyboard/native/useUploadDisabled.tsx");

export default function useUploadDisabled(arg0) {
  const _require = arg0;
  const items = [_isNativeReflectConstruct, closure_4];
  return _require(566).useStateFromStores(items, () => {
    let tmp = outer1_4.getUploads(_private.id, outer1_2.ChannelMessage).length >= outer1_5;
    if (!tmp) {
      let tmp5 = _private.id === _private(outer1_1[5]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
      if (!tmp5) {
        let isPrivateResult = _private.isPrivate();
        if (!isPrivateResult) {
          isPrivateResult = outer1_3.can(outer1_6.ATTACH_FILES, _private);
        }
        tmp5 = !isPrivateResult;
      }
      tmp = tmp5;
    }
    return tmp;
  });
};
