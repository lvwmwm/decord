// Module ID: 14569
// Function ID: 14570
// Name: VideoQuestPlayerControlButton
// Dependencies: [19, 21, 4836, 576, 672, 5435, 5269, 2]

// Module 14569 (VideoQuestPlayerControlButton)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import VisualEffectViewDefault from "VisualEffectView" /* 5269 */;
import Pressables from "Pressables" /* 5435 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 4836 */;
import module_672 from "module_672" /* 672 */;
import size from "module_2" /* 2 */;

let alphaResult;
let obj2;
let obj3;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
const obj = { disabled: { opacity: 0.5 }, container: obj2, blur: obj3 };
createStyles = createStyles.createStyles;
obj2 = { borderRadius: nativeDefault.radii.round, overflow: "hidden" };
obj3 = { backgroundColor: alphaResult.hex(), padding: nativeDefault.space.PX_12 };
const importDefaultResultResult = module_672(nativeDefault.unsafe_rawColors.BLACK);
alphaResult = importDefaultResultResult.alpha(0.5);
let closure_4 = createStyles(obj);
const memoResult = react.memo((arg0) => {
  let children;
  let style;
  ({ style, children } = arg0);
  const merged = Object.assign(arg0, Object.assign({ style: 0, children: 0 }));
  const tmp2 = closure_4();
  const items = [tmp2.container, , ];
  let disabled = merged.disabled;
  const PressableOpacity = Pressables.PressableOpacity;
  if (disabled) {
    disabled = tmp2.disabled;
  }
  items[1] = disabled;
  items[2] = style;
  const merged1 = Object.assign(merged);
  return <PressableOpacity style={items}>{jsx(VisualEffectViewDefault, { style: tmp2.blur, blurAmount: 0.2, blurStyle: "default", blurTheme: "dark", children })}</PressableOpacity>;
});
const result = size.fileFinishedImporting("modules/quests/native/VideoQuestModal/VideoQuestPlayerControlButton.tsx");

export const VideoQuestPlayerControlButton = memoResult;
