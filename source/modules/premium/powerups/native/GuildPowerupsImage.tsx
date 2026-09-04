// Module ID: 12455
// Function ID: 12456
// Name: GuildPowerupsImage
// Dependencies: [4473, 21, 4481, 586, 1235, 8739, 5542, 2]
// Exports: default

// Module 12455 (GuildPowerupsImage)
import initialize from "initialize" /* 586 */;
import preloadDefault from "preload" /* 5542 */;
import __INTERNAL_VIEW_CONFIGDefault from "__INTERNAL_VIEW_CONFIG" /* 8739 */;
import closure_3 from "maybeApplyNoTextColorForLightCustomTheme" /* 4473 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4481 */;

require = arg1;
let closure_5 = createCacheKey.createStyles({ image: { width: "75%", height: "100%", alignSelf: "center", resizeMode: "contain" } });
const result = require("set").fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsImage.tsx");

export default function GuildPowerupsImage(style) {
  ({ imageUrl, isAnimated } = style);
  if (isAnimated === undefined) {
    isAnimated = true;
  }
  style = style.style;
  const tmp = callback();
  let obj = initialize;
  const items = [closure_3];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  if (obj2.isAndroid()) {
    if (isAnimated) {
      if (!stateFromStores) {
        obj = { style: null, url: null };
        const items1 = [tmp.image, style];
        obj[0] = items1;
        obj[1] = imageUrl;
        let tmp6 = jsx(__INTERNAL_VIEW_CONFIGDefault, { style: null, url: null });
      }
      return tmp6;
    }
  }
  const items2 = [tmp.image, style];
  tmp6 = jsx(preloadDefault, { style: items2, source: { uri: imageUrl } });
};
