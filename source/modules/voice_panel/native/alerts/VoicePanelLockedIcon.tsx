// Module ID: 15865
// Function ID: 122618
// Name: VoicePanelLockedIcon
// Dependencies: [31, 33, 4130, 689, 5517, 1273, 15866, 2]
// Exports: default

// Module 15865 (VoicePanelLockedIcon)
import "result";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { alignItems: "center", justifyContent: "center", alignSelf: "center", width: 64, height: 64, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("_createForOfIteratorHelperLoose").radii.round };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.icon = {};
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/voice_panel/native/alerts/VoicePanelLockedIcon.tsx");

export default function VoicePanelLockedIcon() {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: tmp.container };
  obj = { style: tmp.icon, source: importDefault(15866), size: require(1273) /* Button */.IconSizes.LARGE };
  obj.children = jsx(require(1273) /* Button */.Icon, { style: tmp.icon, source: importDefault(15866), size: require(1273) /* Button */.IconSizes.LARGE });
  return jsx(importDefault(5517), { style: tmp.icon, source: importDefault(15866), size: require(1273) /* Button */.IconSizes.LARGE });
};
