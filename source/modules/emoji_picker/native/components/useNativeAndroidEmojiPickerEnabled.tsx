// Module ID: 9066
// Function ID: 9067
// Name: useNativeAndroidEmojiPickerEnabled
// Dependencies: [1218, 500, 1974, 2]
// Exports: default

// Module 9066 (useNativeAndroidEmojiPickerEnabled)
import set from "set" /* 500 */;
import databaseNameDefault from "databaseName" /* 1974 */;
import closure_3 from "fetchFingerprint" /* 1218 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/emoji_picker/native/components/useNativeAndroidEmojiPickerEnabled.tsx");

export default function useNativeAndroidEmojiPickerEnabled() {
  let isAndroidResult = set.isAndroid();
  if (isAndroidResult) {
    isAndroidResult = null != databaseNameDefault.database(id.getId());
    const obj2 = databaseNameDefault;
  }
  return isAndroidResult;
};
