// Module ID: 11611
// Function ID: 11612
// Name: GuildPowerupsImage
// Dependencies: [4181, 21, 4189, 589, 501, 6205, 5141, 2]
// Exports: default

// Module 11611 (GuildPowerupsImage)
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
let closure_5 = createCacheKey.createStyles({ image: { width: "75%", height: "100%", alignSelf: "center", resizeMode: "contain" } });
const result = require("createCacheKey").fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsImage.tsx");

export default function GuildPowerupsImage(style) {
  let imageUrl;
  let isAnimated;
  ({ imageUrl, isAnimated } = style);
  if (isAnimated === undefined) {
    isAnimated = true;
  }
  style = style.style;
  const tmp = callback();
  let obj = require(589) /* initialize */;
  const items = [maybeApplyNoTextColorForLightCustomTheme];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  if (obj2.isAndroid()) {
    if (isAnimated) {
      if (!stateFromStores) {
        obj = { style: null, url: null };
        const items1 = [tmp.image, style];
        obj[0] = items1;
        obj[1] = imageUrl;
        let tmp6 = jsx(importDefault(6205), { style: null, url: null });
      }
      return tmp6;
    }
  }
  const items2 = [tmp.image, style];
  tmp6 = jsx(importDefault(5141), { style: items2, source: { uri: imageUrl } });
};
