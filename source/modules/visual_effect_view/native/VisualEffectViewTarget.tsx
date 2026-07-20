// Module ID: 15351
// Function ID: 116929
// Name: View
// Dependencies: []

// Module 15351 (View)
let View = require(dependencyMap[0]).View;
const _module = require(dependencyMap[1]);
if (_module.isAndroid()) {
  View = importDefault(dependencyMap[2]);
}
const _module1 = require(dependencyMap[3]);
const result = _module1.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewTarget.tsx");

export default View;
