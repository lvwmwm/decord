// Module ID: 9914
// Function ID: 9915
// Name: EmojiPickerListRowView
// Dependencies: [17, 1369, 9915, 2]

// Module 9914 (EmojiPickerListRowView)
import react_native from "react-native" /* 17 */;
import EmojiPickerRowViewNativeComponentDefault from "EmojiPickerRowViewNativeComponent" /* 9915 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import size from "module_2" /* 2 */;

let View = react_native.View;
if (PlatformUtils.isAndroid()) {
  View = EmojiPickerRowViewNativeComponentDefault;
}
const result = size.fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerListRowView.tsx");

export default View;
