// Module ID: 9687
// Function ID: 9688
// Name: EmojiPickerListRowView
// Dependencies: [17, 1370, 9688, 2]

// Module 9687 (EmojiPickerListRowView)
import react_native from "react-native" /* 17 */;
import EmojiPickerRowViewNativeComponentDefault from "EmojiPickerRowViewNativeComponent" /* 9688 */;
import PlatformUtils from "PlatformUtils" /* 1370 */;
import size from "module_2" /* 2 */;

let View = react_native.View;
if (PlatformUtils.isAndroid()) {
  View = EmojiPickerRowViewNativeComponentDefault;
}
const result = size.fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerListRowView.tsx");

export default View;
