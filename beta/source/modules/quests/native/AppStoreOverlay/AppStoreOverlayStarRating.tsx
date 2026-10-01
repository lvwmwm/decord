// Module ID: 10728
// Function ID: 10729
// Name: AppStoreOverlayStarRating
// Dependencies: [19, 17, 21, 4836, 576, 9704, 9698, 2]
// Exports: default

// Module 10728 (AppStoreOverlayStarRating)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import StarOutlineIcon2 from "StarOutlineIcon" /* 9704 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let rect;
let size;
let size1;
let tmp5;
const StarIcon2 = tmp5(9698);
function FractionalStar(fillAmount) {
  let StarIcon;
  let items;
  let items1;
  let obj5;
  fillAmount = fillAmount.fillAmount;
  const tmp = closure_6();
  const obj = { style: tmp.star, importantForAccessibility: "no", accessibilityElementsHidden: true, children: items };
  const obj2 = { size: "custom", color: nativeDefault.colors.TEXT_MUTED, style: tmp.starIcon };
  const StarOutlineIcon = StarOutlineIcon2.StarOutlineIcon;
  items = [React3(StarOutlineIcon, obj2), ];
  let tmp4Result = fillAmount > 0;
  const tmp2 = hasOwnProperty;
  if (tmp4Result) {
    const obj3 = { style: items1, children: React3(StarIcon, obj5) };
    items1 = [tmp.starFillMask, ];
    items1[1] = { width: nativeDefault.space.PX_10 * fillAmount };
    const obj4 = { width: nativeDefault.space.PX_10 * fillAmount };
    obj5 = { size: "custom", color: nativeDefault.colors.TEXT_MUTED, style: tmp.starIcon };
    StarIcon = StarIcon2.StarIcon;
    tmp4Result = tmp4(tmp3, obj3);
  }
  items[1] = tmp4Result;
  return tmp2(View, obj);
}
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { row: { flexDirection: "row", alignItems: "center", gap: 2 }, star: size, starIcon: size1, starFillMask: rect };
size = { width: nativeDefault.space.PX_10, height: nativeDefault.space.PX_10, position: "relative" };
createStyles = createStyles.createStyles;
size1 = { width: nativeDefault.space.PX_10, height: nativeDefault.space.PX_10, position: "absolute", left: 0, top: 0 };
rect = { position: "absolute", left: 0, top: 0, height: nativeDefault.space.PX_10, overflow: "hidden" };
let closure_6 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/quests/native/AppStoreOverlay/AppStoreOverlayStarRating.tsx");

export default function AppStoreOverlayStarRating(fillAmounts) {
  fillAmounts = fillAmounts.fillAmounts;
  let obj = {
    style: closure_6().row,
    children: fillAmounts.map((fillAmount, index) => {
      const obj = { fillAmount };
      return closure_1_4(FractionalStar, obj, index);
    })
  };
  return React3(View, obj);
};
