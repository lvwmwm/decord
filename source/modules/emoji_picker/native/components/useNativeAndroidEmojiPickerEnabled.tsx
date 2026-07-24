// Module ID: 9381
// Function ID: 73220
// Name: useNativeAndroidEmojiPickerEnabled
// Dependencies: [1194, 477, 1898, 2]
// Exports: default

// Module 9381 (useNativeAndroidEmojiPickerEnabled)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/emoji_picker/native/components/useNativeAndroidEmojiPickerEnabled.tsx");

export default function useNativeAndroidEmojiPickerEnabled() {
  let isAndroidResult = require(477) /* set */.isAndroid();
  if (isAndroidResult) {
    isAndroidResult = null != importDefault(1898).database(id.getId());
    const obj2 = importDefault(1898);
  }
  return isAndroidResult;
};
