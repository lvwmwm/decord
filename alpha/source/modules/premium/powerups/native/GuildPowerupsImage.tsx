// Module ID: 14047
// Function ID: 14048
// Name: GuildPowerupsImage
// Dependencies: [5010, 21, 5009, 504, 1377, 9483, 5712, 2]
// Exports: default

// Module 14047 (GuildPowerupsImage)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1377 */;
import FastImageDefault from "FastImage" /* 5712 */;
import APNGDecorationNativeComponentDefault from "APNGDecorationNativeComponent" /* 9483 */;
import AccessibilityStore from "AccessibilityStore" /* 5010 */;
import createStyles from "createStyles" /* 5009 */;
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
