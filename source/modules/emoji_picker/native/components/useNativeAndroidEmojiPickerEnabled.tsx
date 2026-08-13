// Module ID: 8725
// Function ID: 8726
// Name: useNativeAndroidEmojiPickerEnabled
// Dependencies: [1218, 500, 1971, 2]
// Exports: default

// Module 8725 (useNativeAndroidEmojiPickerEnabled)
import fetchFingerprint from "fetchFingerprint";

const require = arg1;
const result = require("databaseName").fileFinishedImporting("modules/emoji_picker/native/components/useNativeAndroidEmojiPickerEnabled.tsx");

export default function useNativeAndroidEmojiPickerEnabled() {
  let isAndroidResult = require(500) /* set */.isAndroid();
  if (isAndroidResult) {
    isAndroidResult = null != importDefault(1971).database(id.getId());
    const obj2 = importDefault(1971);
  }
  return isAndroidResult;
};
