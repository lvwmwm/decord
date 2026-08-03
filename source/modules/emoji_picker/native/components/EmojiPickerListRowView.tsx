// Module ID: 9545
// Function ID: 9546
// Name: View
// Dependencies: [17, 500, 9546, 2]

// Module 9545 (View)
import { View } from "get ActivityIndicator";
import set from "set";
import set from "__INTERNAL_VIEW_CONFIG";

if (set.isAndroid()) {
  View = require("__INTERNAL_VIEW_CONFIG");
}
const result = set.fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerListRowView.tsx");

export default View;
