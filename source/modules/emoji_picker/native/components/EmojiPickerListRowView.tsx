// Module ID: 9162
// Function ID: 9163
// Name: View
// Dependencies: [17, 1234, 9163, 2]

// Module 9162 (View)
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import __INTERNAL_VIEW_CONFIGDefault from "__INTERNAL_VIEW_CONFIG" /* 9163 */;
import set from "set" /* 1234 */;

let View = get_ActivityIndicator.View;
if (set.isAndroid()) {
  View = __INTERNAL_VIEW_CONFIGDefault;
}
const result = set.fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerListRowView.tsx");

export default View;
