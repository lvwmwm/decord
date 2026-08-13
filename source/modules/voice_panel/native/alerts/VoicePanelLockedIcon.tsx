// Module ID: 16342
// Function ID: 16343
// Name: VoicePanelLockedIcon
// Dependencies: [19, 21, 4342, 712, 5821, 1297, 16343, 2]
// Exports: default

// Module 16342 (VoicePanelLockedIcon)
import "noop";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
createCacheKey = { container: null, icon: null };
createCacheKey = { alignItems: "center", justifyContent: "center", alignSelf: "center", width: 64, height: 64, backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("Themes").radii.round };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = {};
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("createCacheKey").fileFinishedImporting("modules/voice_panel/native/alerts/VoicePanelLockedIcon.tsx");

export default function VoicePanelLockedIcon() {
  const tmp = createCacheKey();
  let obj = { style: tmp.container, children: null };
  obj = { style: tmp.icon, source: null, size: null };
  obj[1] = importDefault(16343);
  obj[2] = require(1297) /* Button */.IconSizes.LARGE;
  obj[1] = jsx(require(1297) /* Button */.Icon, { style: tmp.icon, source: null, size: null });
  return jsx(importDefault(5821), { style: tmp.icon, source: null, size: null });
};
