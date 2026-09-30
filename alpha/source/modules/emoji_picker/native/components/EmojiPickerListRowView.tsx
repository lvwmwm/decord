// Module ID: 9972
// Function ID: 9973
// Name: EmojiPickerListRowView
// Dependencies: [17, 1364, 9973, 2]

// Module 9972 (EmojiPickerListRowView)
import _mod17 from "module_17" /* 17 */;
import EmojiPickerRowViewNativeComponentDefault from "EmojiPickerRowViewNativeComponent" /* 9973 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import size from "module_2" /* 2 */;

let View = _mod17.View;
if (PlatformUtils.isAndroid()) {
  View = EmojiPickerRowViewNativeComponentDefault;
}
const result = size.fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerListRowView.tsx");

export default View;
