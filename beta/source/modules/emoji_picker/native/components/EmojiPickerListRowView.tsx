// Module ID: 10605
// Function ID: 10606
// Name: EmojiPickerListRowView
// Dependencies: [17, 1364, 10606, 2]

// Module 10605 (EmojiPickerListRowView)
import _mod17 from "module_17" /* 17 */;
import EmojiPickerRowViewNativeComponentDefault from "EmojiPickerRowViewNativeComponent" /* 10606 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import size from "module_2" /* 2 */;

let View = _mod17.View;
if (PlatformUtils.isAndroid()) {
  View = EmojiPickerRowViewNativeComponentDefault;
}
const result = size.fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerListRowView.tsx");

export default View;
