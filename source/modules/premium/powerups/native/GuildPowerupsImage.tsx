// Module ID: 11591
// Function ID: 90066
// Name: GuildPowerupsImage
// Dependencies: [4157, 33, 4165, 566, 478, 6188, 5119, 2]
// Exports: default

// Module 11591 (GuildPowerupsImage)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let closure_5 = _createForOfIteratorHelperLoose.createStyles({ image: { width: "75%", height: "100%", alignSelf: "center", resizeMode: "contain" } });
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsImage.tsx");

export default function GuildPowerupsImage(style) {
  let imageUrl;
  let isAnimated;
  ({ imageUrl, isAnimated } = style);
  if (isAnimated === undefined) {
    isAnimated = true;
  }
  style = style.style;
  const tmp = callback();
  let obj = require(566) /* initialize */;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_3.useReducedMotion);
  if (obj2.isAndroid()) {
    if (isAnimated) {
      if (!stateFromStores) {
        obj = {};
        const items1 = [tmp.image, style];
        obj.style = items1;
        obj.url = imageUrl;
        let tmp6 = jsx(importDefault(6188), {});
      }
      return tmp6;
    }
  }
  const items2 = [tmp.image, style];
  tmp6 = jsx(importDefault(5119), { style: items2, source: { uri: imageUrl } });
};
