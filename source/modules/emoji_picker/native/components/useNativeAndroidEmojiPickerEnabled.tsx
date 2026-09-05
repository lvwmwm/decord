// Module ID: 10292
// Function ID: 10293
// Name: useNativeAndroidEmojiPickerEnabled
// Dependencies: [502, 1115, 2003, 2]
// Exports: default

// Module 10292 (useNativeAndroidEmojiPickerEnabled)
import set from "set" /* 1115 */;
import databaseNameDefault from "databaseName" /* 2003 */;
import closure_3 from "fetchFingerprint" /* 502 */;

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
