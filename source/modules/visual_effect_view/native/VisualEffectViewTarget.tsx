// Module ID: 15369
// Function ID: 117035
// Name: View
// Dependencies: []

// Module 15369 (View)
let View = require(dependencyMap[0]).View;
const _module = require(dependencyMap[1]);
if (_module.isAndroid()) {
  View = importDefault(dependencyMap[2]);
}
const _module1 = require(dependencyMap[3]);
const result = _module1.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewTarget.tsx");

export default View;
