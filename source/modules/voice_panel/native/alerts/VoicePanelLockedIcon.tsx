// Module ID: 17110
// Function ID: 17111
// Name: VoicePanelLockedIcon
// Dependencies: [19, 21, 4481, 709, 5544, 1296, 17111, 2]
// Exports: default

// Module 17110 (VoicePanelLockedIcon)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 709 */;
import Button from "Button" /* 1296 */;
import setDefault from "set" /* 5544 */;
import registerAssetDefault from "registerAsset" /* 17111 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4481 */;

require = arg1;
noopAll;
createCacheKey = { container: null, icon: null };
createCacheKey = { alignItems: "center", justifyContent: "center", alignSelf: "center", width: 64, height: 64, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: ThemesDefault.radii.round };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = {};
let closure_4 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/voice_panel/native/alerts/VoicePanelLockedIcon.tsx");

export default function VoicePanelLockedIcon() {
  const tmp = callback();
  let obj = { style: tmp.container, children: null };
  obj = { style: tmp.icon, source: registerAssetDefault, size: Button.IconSizes.LARGE };
  obj[1] = jsx(Button.Icon, { style: tmp.icon, source: registerAssetDefault, size: Button.IconSizes.LARGE });
  return jsx(setDefault, { style: tmp.icon, source: registerAssetDefault, size: Button.IconSizes.LARGE });
};
