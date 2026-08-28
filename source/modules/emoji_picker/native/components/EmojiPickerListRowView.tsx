// Module ID: 9087
// Function ID: 9088
// Name: View
// Dependencies: [17, 500, 9088, 2]

// Module 9087 (View)
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import __INTERNAL_VIEW_CONFIGDefault from "__INTERNAL_VIEW_CONFIG" /* 9088 */;
import set from "set" /* 500 */;

let View = get_ActivityIndicator.View;
if (set.isAndroid()) {
  View = __INTERNAL_VIEW_CONFIGDefault;
}
const result = set.fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerListRowView.tsx");

export default View;
