// Module ID: 8616
// Function ID: 8617
// Name: useNativeAndroidEmojiPickerEnabled
// Dependencies: [1218, 500, 1952, 2]
// Exports: default

// Module 8616 (useNativeAndroidEmojiPickerEnabled)
import fetchFingerprint from "fetchFingerprint";

const require = arg1;
const result = require("databaseName").fileFinishedImporting("modules/emoji_picker/native/components/useNativeAndroidEmojiPickerEnabled.tsx");

export default function useNativeAndroidEmojiPickerEnabled() {
  let isAndroidResult = require(500) /* set */.isAndroid();
  if (isAndroidResult) {
    isAndroidResult = null != importDefault(1952).database(id.getId());
    const obj2 = importDefault(1952);
  }
  return isAndroidResult;
};
