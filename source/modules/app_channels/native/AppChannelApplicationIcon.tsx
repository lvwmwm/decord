// Module ID: 9674
// Function ID: 9675
// Name: AppChannelApplicationIcon
// Dependencies: [19, 21, 4481, 709, 5542, 1431, 2]
// Exports: default

// Module 9674 (AppChannelApplicationIcon)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 709 */;
import getAvatarURLDefault from "getAvatarURL" /* 1431 */;
import preloadDefault from "preload" /* 5542 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4481 */;

noopAll;
createCacheKey = { icon: null };
createCacheKey = { width: 32, height: 32, borderRadius: ThemesDefault.radii.md };
createCacheKey[0] = createCacheKey;
let closure_3 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/app_channels/native/AppChannelApplicationIcon.tsx");

export default function AppChannelApplicationIcon(application) {
  application = application.application;
  let obj = { source: null, style: null };
  const tmp = callback();
  const tmp2 = preloadDefault;
  obj = { id: application.id, icon: application.icon, size: 32 };
  obj[0] = getAvatarURLDefault.getApplicationIconSource(obj);
  obj[1] = tmp.icon;
  return <tmp2 id={application.id} icon={application.icon} size={32} />;
};
