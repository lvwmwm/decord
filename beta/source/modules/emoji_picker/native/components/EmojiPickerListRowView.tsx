// Module ID: 10522
// Function ID: 10523
// Name: EmojiPickerListRowView
// Dependencies: [17, 1368, 10523, 2]

// Module 10522 (EmojiPickerListRowView)
import _mod17 from "module_17" /* 17 */;
import EmojiPickerRowViewNativeComponentDefault from "EmojiPickerRowViewNativeComponent" /* 10523 */;
import PlatformUtils from "PlatformUtils" /* 1368 */;
import size from "module_2" /* 2 */;

let View = _mod17.View;
if (PlatformUtils.isAndroid()) {
  View = EmojiPickerRowViewNativeComponentDefault;
}
const result = size.fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerListRowView.tsx");

export default View;
