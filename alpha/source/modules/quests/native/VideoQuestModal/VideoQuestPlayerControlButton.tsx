// Module ID: 16942
// Function ID: 16943
// Name: VideoQuestPlayerControlButton
// Dependencies: [19, 21, 5014, 575, 671, 6980, 5600, 2]

// Module 16942 (VideoQuestPlayerControlButton)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import VisualEffectViewDefault from "VisualEffectView" /* 5600 */;
import Pressables from "Pressables" /* 6980 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 5014 */;
import module_671 from "module_671" /* 671 */;
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
const importDefaultResultResult = module_671(nativeDefault.unsafe_rawColors.BLACK);
alphaResult = importDefaultResultResult.alpha(0.5);
let closure_4 = createStyles(obj);
const memoResult = react.memo(function VideoQuestPlayerControlButton(arg0) {
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
