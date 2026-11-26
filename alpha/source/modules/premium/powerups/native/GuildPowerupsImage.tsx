// Module ID: 13510
// Function ID: 13511
// Name: GuildPowerupsImage
// Dependencies: [5044, 21, 5043, 504, 5730, 2]
// Exports: default

// Module 13510 (GuildPowerupsImage)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import FastImageDefault from "FastImage" /* 5730 */;
import AccessibilityStore from "AccessibilityStore" /* 5044 */;
import createStyles from "createStyles" /* 5043 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let closure_5 = createStyles.createStyles({ image: { width: "75%", height: "100%", alignSelf: "center", resizeMode: "contain" } });
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsImage.tsx");

export default function GuildPowerupsImage(isAnimated) {
  let items1;
  let useReducedMotion;
  let flag = isAnimated.isAnimated;
  const imageUrl = isAnimated.imageUrl;
  if (flag === undefined) {
    flag = true;
  }
  const style = isAnimated.style;
  const items = [AccessibilityStore];
  const tmp = closure_5();
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const obj2 = { style: items1, source: { uri: imageUrl }, enableAnimation: flag };
  items1 = [tmp.image, style];
  const tmp3 = jsx;
  const tmp4 = FastImageDefault;
  if (flag) {
    flag = !stateFromStores;
  }
  return tmp3(tmp4, obj2);
};
