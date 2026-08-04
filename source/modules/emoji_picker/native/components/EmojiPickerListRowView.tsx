// Module ID: 8632
// Function ID: 8633
// Name: View
// Dependencies: [17, 500, 8633, 2]

// Module 8632 (View)
import { View } from "get ActivityIndicator";
import set from "set";
import set from "__INTERNAL_VIEW_CONFIG";

if (set.isAndroid()) {
  View = require("__INTERNAL_VIEW_CONFIG");
}
const result = set.fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerListRowView.tsx");

export default View;
