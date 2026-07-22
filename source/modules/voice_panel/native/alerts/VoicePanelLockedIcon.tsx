// Module ID: 15748
// Function ID: 120445
// Name: VoicePanelLockedIcon
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0]
// Exports: default

// Module 15748 (VoicePanelLockedIcon)
import "__exportStarResult1";
import { jsx } from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";

__exportStarResult1 = {};
__exportStarResult1 = { "Bool(false)": 2, "Bool(false)": "notify_friends_on_go_live", "Bool(false)": "message", "Bool(false)": "4.8.0", "Bool(false)": null, backgroundColor: require("__exportStarResult1").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("__exportStarResult1").radii.round };
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
