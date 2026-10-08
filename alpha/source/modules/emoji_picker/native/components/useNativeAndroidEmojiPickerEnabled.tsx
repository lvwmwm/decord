// Module ID: 9390
// Function ID: 9391
// Name: useNativeAndroidEmojiPickerEnabled
// Dependencies: [502, 1381, 2107, 2]
// Exports: default

// Module 9390 (useNativeAndroidEmojiPickerEnabled)
import PlatformUtils from "PlatformUtils" /* 1381 */;
import DatabaseManagerDefault from "DatabaseManager" /* 2107 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/emoji_picker/native/components/useNativeAndroidEmojiPickerEnabled.tsx");

export default function useNativeAndroidEmojiPickerEnabled() {
  const obj = PlatformUtils;
  let isAndroidResult = obj.isAndroid();
  if (isAndroidResult) {
    const obj2 = DatabaseManagerDefault;
    isAndroidResult = null != obj2.database(AuthenticationStore.getId());
  }
  return isAndroidResult;
};
