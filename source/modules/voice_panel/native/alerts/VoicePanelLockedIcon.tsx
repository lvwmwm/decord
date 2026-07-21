// Module ID: 15731
// Function ID: 120237
// Name: VoicePanelLockedIcon
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0]
// Exports: default

// Module 15731 (VoicePanelLockedIcon)
import "__exportStarResult1";
import { jsx } from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";

__exportStarResult1 = {};
__exportStarResult1 = { "Null": "4.8.0", "Null": null, "Null": 60, "Null": 2, "Null": 81, backgroundColor: require("__exportStarResult1").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("__exportStarResult1").radii.round };
__exportStarResult1.container = __exportStarResult1;
__exportStarResult1.icon = {};
__exportStarResult1 = __exportStarResult1.createStyles(__exportStarResult1);
const result = __exportStarResult1.fileFinishedImporting("modules/voice_panel/native/alerts/VoicePanelLockedIcon.tsx");

export default function VoicePanelLockedIcon() {
  const tmp = __exportStarResult1();
  let obj = { style: tmp.container };
  obj = { style: tmp.icon, source: importDefault(dependencyMap[6]), size: arg1(dependencyMap[5]).IconSizes.LARGE };
  obj.children = jsx(arg1(dependencyMap[5]).Icon, obj);
  return jsx(importDefault(dependencyMap[4]), obj);
};
