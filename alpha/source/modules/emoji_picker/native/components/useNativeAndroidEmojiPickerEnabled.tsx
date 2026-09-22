// Module ID: 10556
// Function ID: 10557
// Name: useNativeAndroidEmojiPickerEnabled
// Dependencies: [502, 1364, 2088, 2]
// Exports: default

// Module 10556 (useNativeAndroidEmojiPickerEnabled)
import PlatformUtils from "PlatformUtils" /* 1364 */;
import DatabaseManagerDefault from "DatabaseManager" /* 2088 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/emoji_picker/native/components/useNativeAndroidEmojiPickerEnabled.tsx");

export default function useNativeAndroidEmojiPickerEnabled() {
  let isAndroidResult = PlatformUtils.isAndroid();
  if (isAndroidResult) {
    isAndroidResult = null != DatabaseManagerDefault.database(AuthenticationStore.getId());
  }
  return isAndroidResult;
};
