// Module ID: 11276
// Function ID: 11277
// Name: EmojiPickerListRowView
// Dependencies: [17, 1380, 11277, 2]

// Module 11276 (EmojiPickerListRowView)
import react_native from "react-native" /* 17 */;
import EmojiPickerRowViewNativeComponentDefault from "EmojiPickerRowViewNativeComponent" /* 11277 */;
import PlatformUtils from "PlatformUtils" /* 1380 */;
import size from "module_2" /* 2 */;

let View = react_native.View;
if (PlatformUtils.isAndroid()) {
  View = EmojiPickerRowViewNativeComponentDefault;
}
const result = size.fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerListRowView.tsx");

export default View;
