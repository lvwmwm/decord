// Module ID: 11306
// Function ID: 11307
// Name: EmojiPickerListRowView
// Dependencies: [17, 1378, 11307, 2]

// Module 11306 (EmojiPickerListRowView)
import react_native from "react-native" /* 17 */;
import EmojiPickerRowViewNativeComponentDefault from "EmojiPickerRowViewNativeComponent" /* 11307 */;
import PlatformUtils from "PlatformUtils" /* 1378 */;
import size from "module_2" /* 2 */;

let View = react_native.View;
if (PlatformUtils.isAndroid()) {
  View = EmojiPickerRowViewNativeComponentDefault;
}
const result = size.fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerListRowView.tsx");

export default View;
