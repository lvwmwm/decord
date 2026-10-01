// Module ID: 8195
// Function ID: 8196
// Name: GameProfileSkeleton
// Dependencies: [19, 17, 21, 4836, 576, 8196, 4566, 2]
// Exports: GameProfileSkeletonButton, GameProfileSkeletonContainer

// Module 8195 (GameProfileSkeleton)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4566 */;
import GameProfileSkeletonPulse from "GameProfileSkeletonPulse" /* 8196 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let obj2;
let size;
let size1;
class GameProfileSkeletonPlaceholder {
  constructor(style) {
    style = style.style;
    const items = [closure_5().placeholder, style];
    return <View style={items} />;
  }
}
const View = react_native.View;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { placeholder: obj2, button: { borderRadius: nativeDefault.radii.sm }, buttonSm: size, buttonMd: size1 };
createStyles = createStyles.createStyles;
obj2 = { backgroundColor: nativeDefault.colors.ICON_MUTED };
({ borderRadius: nativeDefault.radii.sm });
size = { width: 92, height: nativeDefault.space.PX_32, flexShrink: 0 };
size1 = { width: "100%", height: nativeDefault.space.PX_40 };
const hasOwnProperty = createStyles(obj);
let closure_6 = { sm: "buttonSm", md: "buttonMd" };
size = size_mod;
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileSkeleton.tsx");

export default GameProfileSkeletonPlaceholder;
export const SKELETON_CARD_ANIMATION_DELAY_MS = 150;
export const GameProfileSkeletonContainer = function GameProfileSkeletonContainer(animationDelayMs) {
  let children;
  let style;
  let num = animationDelayMs.animationDelayMs;
  if (num === undefined) {
    num = 0;
  }
  ({ children, style } = animationDelayMs);
  const obj = GameProfileSkeletonPulse;
  const skeletonPulseStyle = obj.useSkeletonPulseStyle(num);
  const items = [style, skeletonPulseStyle];
  return jsx(ReanimatedRexportDefault.View, { style: items, accessible: false, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children });
};
export const GameProfileSkeletonButton = function GameProfileSkeletonButton(size) {
  let str = size.size;
  if (str === undefined) {
    str = "md";
  }
  const style = size.style;
  const tmp = closure_5();
  const items = [tmp.button, tmp[closure_6[str]], style];
  return <GameProfileSkeletonPlaceholder style={items} />;
};
