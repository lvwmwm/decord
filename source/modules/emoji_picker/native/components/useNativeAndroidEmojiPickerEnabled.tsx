// Module ID: 9337
// Function ID: 72957
// Name: useNativeAndroidEmojiPickerEnabled
// Dependencies: []
// Exports: default

// Module 9337 (useNativeAndroidEmojiPickerEnabled)
let closure_3 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/emoji_picker/native/components/useNativeAndroidEmojiPickerEnabled.tsx");

export default function useNativeAndroidEmojiPickerEnabled() {
  let isAndroidResult = arg1(dependencyMap[1]).isAndroid();
  if (isAndroidResult) {
    isAndroidResult = null != importDefault(dependencyMap[2]).database(id.getId());
    const obj2 = importDefault(dependencyMap[2]);
  }
  return isAndroidResult;
};
