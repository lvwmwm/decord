// Module ID: 8573
// Function ID: 8574
// Name: GifTag
// Dependencies: [17, 21, 5014, 575, 671, 5624, 1113, 2]
// Exports: default

// Module 8573 (GifTag)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1113 */;
import Text_Text from "Text/Text" /* 5624 */;
import createStyles_mod from "createStyles" /* 5014 */;
import module_671 from "module_671" /* 671 */;
import size from "module_2" /* 2 */;

let alphaResult;
let obj2;
const View = react_native.View;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
const obj = { gifTag: obj2, gifTagText: { color: nativeDefault.unsafe_rawColors.PRIMARY_800 } };
obj2 = { paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: 2, borderRadius: nativeDefault.radii.xs, backgroundColor: alphaResult.css() };
createStyles = createStyles.createStyles;
const importDefaultResultResult = module_671(nativeDefault.unsafe_rawColors.WHITE);
alphaResult = importDefaultResultResult.alpha(0.9);
({ color: nativeDefault.unsafe_rawColors.PRIMARY_800 });
let closure_4 = createStyles(obj);
const result = size.fileFinishedImporting("modules/user_profile/native/GifTag.tsx");

export default function GifTag(style) {
  let intl;
  style = style.style;
  const tmp = closure_4();
  const items = [tmp.gifTag, style];
  ({ variant: "text-sm/bold", color: "none", style: tmp.gifTagText, children: intl.string(intl2.t.I5gL2H) });
  const Text = Text_Text.Text;
  intl = intl2.intl;
  return <View style={items} pointerEvents="none">{null}</View>;
};
