// Module ID: 11288
// Function ID: 11289
// Name: useNativeAndroidEmojiPickerEnabled
// Dependencies: [502, 1378, 4808, 2]
// Exports: default

// Module 11288 (useNativeAndroidEmojiPickerEnabled)
import PlatformUtils from "PlatformUtils" /* 1378 */;
import DatabaseManagerDefault from "DatabaseManager" /* 4808 */;
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
