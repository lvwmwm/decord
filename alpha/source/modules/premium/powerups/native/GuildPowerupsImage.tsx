// Module ID: 14305
// Function ID: 14306
// Name: GuildPowerupsImage
// Dependencies: [5171, 21, 5170, 504, 1357, 9607, 5872, 2]
// Exports: default

// Module 14305 (GuildPowerupsImage)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1357 */;
import FastImageDefault from "FastImage" /* 5872 */;
import APNGDecorationNativeComponentDefault from "APNGDecorationNativeComponent" /* 9607 */;
import AccessibilityStore from "AccessibilityStore" /* 5171 */;
import createStyles from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let closure_5 = createStyles.createStyles({ image: { width: "75%", height: "100%", alignSelf: "center", resizeMode: "contain" } });
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsImage.tsx");

export default function GuildPowerupsImage(style) {
  let imageUrl;
  let isAnimated;
  let useReducedMotion;
  ({ imageUrl, isAnimated } = style);
  if (isAnimated === undefined) {
    isAnimated = true;
  }
  style = style.style;
  const tmp = closure_5();
  const items = [AccessibilityStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const obj2 = utils_PlatformUtils;
  if (obj2.isAndroid()) {
    if (isAnimated) {
      let tmp6;
      if (!stateFromStores) {
        const items1 = [tmp.image, style];
        tmp6 = jsx(APNGDecorationNativeComponentDefault, { style: items1, url: imageUrl });
      }
      return tmp6;
    }
  }
  const items2 = [tmp.image, style];
  tmp6 = jsx(FastImageDefault, { style: items2, source: { uri: imageUrl } });
};
