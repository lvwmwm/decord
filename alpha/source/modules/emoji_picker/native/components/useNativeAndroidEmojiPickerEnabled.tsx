// Module ID: 9948
// Function ID: 9949
// Name: useNativeAndroidEmojiPickerEnabled
// Dependencies: [502, 1376, 4904, 2]
// Exports: default

// Module 9948 (useNativeAndroidEmojiPickerEnabled)
import PlatformUtils from "PlatformUtils" /* 1376 */;
import DatabaseManagerDefault from "DatabaseManager" /* 4904 */;
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
