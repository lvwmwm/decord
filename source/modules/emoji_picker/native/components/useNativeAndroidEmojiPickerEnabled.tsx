// Module ID: 9333
// Function ID: 72932
// Name: useNativeAndroidEmojiPickerEnabled
// Dependencies: [79429632, 95027200, 37093376, 348454912]
// Exports: default

// Module 9333 (useNativeAndroidEmojiPickerEnabled)
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
