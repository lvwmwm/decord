// Module ID: 8194
// Function ID: 8195
// Name: GameProfileSection
// Dependencies: [19, 17, 21, 4836, 576, 8195, 4832, 5281, 1115, 6630, 2]
// Exports: GameProfileSectionSkeleton, default

// Module 8194 (GameProfileSection)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl2 from "intl" /* 1115 */;
import Text_Text from "Text/Text" /* 4832 */;
import ChevronSmallRightIcon from "ChevronSmallRightIcon" /* 6630 */;
import GameProfileSkeleton from "GameProfileSkeleton" /* 8195 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const GameProfileSkeletonDefault = GameProfileSkeleton;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, header: obj3, skeletonTitle: { minWidth: 0, maxWidth: "100%", flexShrink: 1, height: nativeDefault.space.PX_20, borderRadius: nativeDefault.radii.xs } };
obj2 = { gap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_8, minHeight: nativeDefault.space.PX_32, paddingHorizontal: nativeDefault.space.PX_8 };
({ minWidth: 0, maxWidth: "100%", flexShrink: 1, height: nativeDefault.space.PX_20, borderRadius: nativeDefault.radii.xs });
let closure_6 = createStyles(obj);
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileSection.tsx");

export default function GameProfileSection(onPressViewAll) {
  let children;
  let headerStyle;
  let intl;
  let items;
  let items1;
  let items2;
  let items3;
  let style;
  let title;
  onPressViewAll = onPressViewAll.onPressViewAll;
  ({ children, headerStyle, style, title } = onPressViewAll);
  const tmp = closure_6();
  const obj = { style: items, children: items3 };
  items = [tmp.container, style];
  const obj2 = { style: items1, children: items2 };
  items1 = [tmp.header, headerStyle];
  items2 = [React3(Text_Text.Heading, { variant: "heading-sm/semibold", color: "mobile-text-heading-primary", children: title }), ];
  let tmp4Result = null != onPressViewAll;
  if (tmp4Result) {
    const obj3 = { text: intl.string(intl2.t.budhsM), variant: "tertiary", size: "sm", icon: React3(ChevronSmallRightIcon.ChevronSmallRightIcon, { size: "sm" }), iconPosition: "end", onPress: onPressViewAll };
    const Button = tmp5(5281).Button;
    intl = tmp5(1115).intl;
    tmp4Result = tmp4(Button, obj3);
  }
  items2[1] = tmp4Result;
  items3 = [hasOwnProperty(View, obj2), children];
  return hasOwnProperty(View, obj);
};
export const GameProfileSectionSkeleton = function GameProfileSectionSkeleton(showViewAllSkeleton) {
  let animationDelayMs;
  let children;
  let headerStyle;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let skeletonTitleWidth;
  let style;
  showViewAllSkeleton = showViewAllSkeleton.showViewAllSkeleton;
  ({ animationDelayMs, children, headerStyle, skeletonTitleWidth, style } = showViewAllSkeleton);
  const tmp = closure_6();
  const obj = { style: items, accessible: false, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: items4 };
  items = [tmp.container, style];
  const obj2 = { animationDelayMs, style: items1, children: items3 };
  items1 = [tmp.header, headerStyle];
  const GameProfileSkeletonContainer = GameProfileSkeleton.GameProfileSkeletonContainer;
  const obj3 = { style: items2 };
  items2 = [tmp.skeletonTitle, { width: skeletonTitleWidth }];
  items3 = [React3(GameProfileSkeletonDefault, obj3), ];
  const tmp3 = View;
  const tmp6 = React3;
  if (showViewAllSkeleton) {
    showViewAllSkeleton = tmp6(GameProfileSkeleton.GameProfileSkeletonButton, { size: "sm" });
  }
  items3[1] = showViewAllSkeleton;
  items4 = [hasOwnProperty(GameProfileSkeletonContainer, obj2), children];
  return hasOwnProperty(tmp3, obj);
};
