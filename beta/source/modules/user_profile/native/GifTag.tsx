// Module ID: 7701
// Function ID: 7702
// Name: GifTag
// Dependencies: [17, 21, 4836, 576, 672, 4832, 1115, 2]
// Exports: default

// Module 7701 (GifTag)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import intl2 from "intl" /* 1115 */;
import Text_Text from "Text/Text" /* 4832 */;
import createStyles_mod from "createStyles" /* 4836 */;
import module_672 from "module_672" /* 672 */;
import size from "module_2" /* 2 */;

let alphaResult;
let obj2;
const View = react_native.View;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
const obj = { gifTag: obj2, gifTagText: { color: nativeDefault.unsafe_rawColors.PRIMARY_800 } };
obj2 = { paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: 2, borderRadius: nativeDefault.radii.xs, backgroundColor: alphaResult.css() };
createStyles = createStyles.createStyles;
const importDefaultResultResult = module_672(nativeDefault.unsafe_rawColors.WHITE);
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
