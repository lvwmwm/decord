// Module ID: 9670
// Function ID: 9671
// Name: useNativeAndroidEmojiPickerEnabled
// Dependencies: [502, 1370, 2094, 2]
// Exports: default

// Module 9670 (useNativeAndroidEmojiPickerEnabled)
import PlatformUtils from "PlatformUtils" /* 1370 */;
import DatabaseManagerDefault from "DatabaseManager" /* 2094 */;
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
