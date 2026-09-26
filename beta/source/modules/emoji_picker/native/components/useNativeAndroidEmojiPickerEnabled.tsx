// Module ID: 10589
// Function ID: 10590
// Name: useNativeAndroidEmojiPickerEnabled
// Dependencies: [502, 1364, 2087, 2]
// Exports: default

// Module 10589 (useNativeAndroidEmojiPickerEnabled)
import PlatformUtils from "PlatformUtils" /* 1364 */;
import DatabaseManagerDefault from "DatabaseManager" /* 2087 */;
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
