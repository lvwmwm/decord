// Module ID: 9744
// Function ID: 9745
// Name: useNativeAndroidEmojiPickerEnabled
// Dependencies: [502, 1364, 2090, 2]
// Exports: default

// Module 9744 (useNativeAndroidEmojiPickerEnabled)
import PlatformUtils from "PlatformUtils" /* 1364 */;
import DatabaseManagerDefault from "DatabaseManager" /* 2090 */;
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
