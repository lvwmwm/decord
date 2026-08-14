// Module ID: 10571
// Function ID: 10572
// Name: FractionalStar
// Dependencies: [19, 17, 21, 4342, 712, 8809, 8807, 2]
// Exports: default

// Module 10571 (FractionalStar)
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
const require = arg1;
function FractionalStar(fillAmount) {
  fillAmount = fillAmount.fillAmount;
  const tmp = createCacheKey();
  let obj = { style: tmp.star, importantForAccessibility: "no", accessibilityElementsHidden: true, children: null };
  obj = { size: "custom", color: null, style: null };
  obj[1] = importDefault(712).colors.TEXT_MUTED;
  obj[2] = tmp.starIcon;
  const items = [callback(require(8809) /* StarOutlineIcon */.StarOutlineIcon, obj), ];
  let tmp4Result = fillAmount > 0;
  if (tmp4Result) {
    obj = { style: null, children: null };
    const items1 = [tmp.starFillMask, ];
    const obj1 = { width: null };
    obj1[0] = tmp7(712).space.PX_10 * fillAmount;
    items1[1] = obj1;
    obj[0] = items1;
    const obj2 = { size: "custom", color: null, style: null };
    obj2[1] = tmp7(712).colors.TEXT_MUTED;
    obj2[2] = tmp.starIcon;
    obj[1] = tmp4(require(8807) /* StarIcon */.StarIcon, obj2);
    tmp4Result = tmp4(tmp3, obj);
  }
  items[1] = tmp4Result;
  obj[3] = items;
  return closure_5(View, obj);
}
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { row: { flexDirection: "row", alignItems: "center", gap: 2 }, star: null, starIcon: null, starFillMask: null };
createCacheKey = { width: require("Themes").space.PX_10, height: require("Themes").space.PX_10, position: "relative" };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { width: require("Themes").space.PX_10, height: require("Themes").space.PX_10, position: "absolute", left: 0, top: 0 };
let obj1 = { width: require("Themes").space.PX_10, height: require("Themes").space.PX_10, position: "absolute", left: 0, top: 0 };
createCacheKey[3] = { position: "absolute", left: 0, top: 0, height: require("Themes").space.PX_10, overflow: "hidden" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj2 = { position: "absolute", left: 0, top: 0, height: require("Themes").space.PX_10, overflow: "hidden" };
const result = require("jsxProd").fileFinishedImporting("modules/quests/native/AppStoreOverlay/AppStoreOverlayStarRating.tsx");

export default function AppStoreOverlayStarRating(fillAmounts) {
  fillAmounts = fillAmounts.fillAmounts;
  return callback(View, { style: createCacheKey().row, children: fillAmounts.map((fillAmount) => callback(closure_7, { fillAmount }, arg1)) });
};
