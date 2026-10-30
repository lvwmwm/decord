// Module ID: 10006
// Function ID: 10007
// Name: EmojiPickerListRowView
// Dependencies: [17, 1376, 10007, 2]

// Module 10006 (EmojiPickerListRowView)
import react_native from "react-native" /* 17 */;
import EmojiPickerRowViewNativeComponentDefault from "EmojiPickerRowViewNativeComponent" /* 10007 */;
import PlatformUtils from "PlatformUtils" /* 1376 */;
import size from "module_2" /* 2 */;

let View = react_native.View;
if (PlatformUtils.isAndroid()) {
  View = EmojiPickerRowViewNativeComponentDefault;
}
const result = size.fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerListRowView.tsx");

export default View;
