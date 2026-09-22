// Module ID: 12656
// Function ID: 12657
// Name: GuildPowerupsImage
// Dependencies: [4628, 21, 4636, 504, 1364, 8936, 5668, 2]
// Exports: default

// Module 12656 (GuildPowerupsImage)
import initialize from "initialize" /* 504 */;
import FastImageDefault from "FastImage" /* 5668 */;
import APNGDecorationNativeComponentDefault from "APNGDecorationNativeComponent" /* 8936 */;
import AccessibilityStore from "AccessibilityStore" /* 4628 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4636);
let closure_5 = createStyles.createStyles({ image: { width: "75%", height: "100%", alignSelf: "center", resizeMode: "contain" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsImage.tsx");

export default function GuildPowerupsImage(style) {
  ({ imageUrl, isAnimated } = style);
  if (isAnimated === undefined) {
    isAnimated = true;
  }
  style = style.style;
  const tmp = closure_5();
  const items = [AccessibilityStore];
  const stateFromStores = initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  if (obj2.isAndroid()) {
    if (isAnimated) {
      if (!stateFromStores) {
        const obj3 = { style: null, url: null };
        const items1 = [tmp.image, style];
        obj3.style = items1;
        obj3.url = imageUrl;
        let tmp6 = jsx(APNGDecorationNativeComponentDefault, { style: null, url: null });
      }
      return tmp6;
    }
  }
  const obj4 = { style: null, source: { uri: imageUrl } };
  const items2 = [tmp.image, style];
  obj4.style = items2;
  tmp6 = jsx(FastImageDefault, { style: null, source: { uri: imageUrl } });
};
