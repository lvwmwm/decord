// Module ID: 8598
// Function ID: 8599
// Name: useNativeAndroidEmojiPickerEnabled
// Dependencies: [1218, 500, 1923, 2]
// Exports: default

// Module 8598 (useNativeAndroidEmojiPickerEnabled)
import fetchFingerprint from "fetchFingerprint";

const require = arg1;
const result = require("databaseName").fileFinishedImporting("modules/emoji_picker/native/components/useNativeAndroidEmojiPickerEnabled.tsx");

export default function useNativeAndroidEmojiPickerEnabled() {
  let isAndroidResult = require(500) /* set */.isAndroid();
  if (isAndroidResult) {
    isAndroidResult = null != importDefault(1923).database(id.getId());
    const obj2 = importDefault(1923);
  }
  return isAndroidResult;
};
