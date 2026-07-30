// Module ID: 15623
// Function ID: 15624
// Name: View
// Dependencies: [17, 500, 15624, 2]

// Module 15623 (View)
import { View } from "get ActivityIndicator";
import set from "set";
import set from "__INTERNAL_VIEW_CONFIG";

if (set.isAndroid()) {
  View = require("__INTERNAL_VIEW_CONFIG");
}
const result = set.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewTarget.tsx");

export default View;
