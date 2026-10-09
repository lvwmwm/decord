// Module ID: 9486
// Function ID: 9487
// Name: EmojiPickerListRowView
// Dependencies: [17, 1382, 9487, 2]

// Module 9486 (EmojiPickerListRowView)
import react_native from "react-native" /* 17 */;
import EmojiPickerRowViewNativeComponentDefault from "EmojiPickerRowViewNativeComponent" /* 9487 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import size from "module_2" /* 2 */;

let View = react_native.View;
if (PlatformUtils.isAndroid()) {
  View = EmojiPickerRowViewNativeComponentDefault;
}
const result = size.fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerListRowView.tsx");

export default View;
