// Module ID: 15595
// Function ID: 119864
// Name: View
// Dependencies: [27, 477, 15596, 2]

// Module 15595 (View)
import { View } from "get ActivityIndicator";
import set from "set";
import set from "__INTERNAL_VIEW_CONFIG";

if (set.isAndroid()) {
  View = require("__INTERNAL_VIEW_CONFIG");
}
const result = set.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewTarget.tsx");

export default View;
