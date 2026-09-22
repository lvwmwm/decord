// Module ID: 10421
// Function ID: 10422
// Name: useNativeAndroidEmojiPickerEnabled
// Dependencies: [502, 1363, 2003, 2]
// Exports: default

// Module 10421 (useNativeAndroidEmojiPickerEnabled)
import PlatformUtils from "PlatformUtils" /* 1363 */;
import DatabaseManagerDefault from "DatabaseManager" /* 2003 */;
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
