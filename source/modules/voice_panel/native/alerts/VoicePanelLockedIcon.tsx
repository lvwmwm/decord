// Module ID: 15740
// Function ID: 120402
// Name: VoicePanelLockedIcon
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0]
// Exports: default

// Module 15740 (VoicePanelLockedIcon)
import "result";
import { jsx } from "result";
import result from "result";
import result from "result";

result = {};
result = { "Null": 2, "Null": "notify_friends_on_go_live", "Null": "message", "Null": "4.8.0", "Null": null, backgroundColor: require("result").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("result").radii.round };
result.container = result;
result.icon = {};
result = result.createStyles(result);
result = result.fileFinishedImporting("modules/voice_panel/native/alerts/VoicePanelLockedIcon.tsx");

export default function VoicePanelLockedIcon() {
  const tmp = result();
  let obj = { style: tmp.container };
  obj = { style: tmp.icon, source: importDefault(dependencyMap[6]), size: arg1(dependencyMap[5]).IconSizes.LARGE };
  obj.children = jsx(arg1(dependencyMap[5]).Icon, obj);
  return jsx(importDefault(dependencyMap[4]), obj);
};
