// Module ID: 16146
// Function ID: 16147
// Name: View
// Dependencies: [17, 500, 16147, 2]

// Module 16146 (View)
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import __INTERNAL_VIEW_CONFIGDefault from "__INTERNAL_VIEW_CONFIG" /* 16147 */;
import set from "set" /* 500 */;

let View = get_ActivityIndicator.View;
if (set.isAndroid()) {
  View = __INTERNAL_VIEW_CONFIGDefault;
}
const result = set.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewTarget.tsx");

export default View;
