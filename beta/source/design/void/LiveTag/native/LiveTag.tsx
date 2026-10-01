// Module ID: 13664
// Function ID: 13665
// Name: LiveTag
// Dependencies: [19, 17, 21, 4836, 576, 1364, 4832, 1115, 2]
// Exports: default

// Module 13664 (LiveTag)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import intl2 from "intl" /* 1115 */;
import Text_Text from "Text/Text" /* 4832 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 4836 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import size from "module_2" /* 2 */;

let num;
let obj2;
let obj3;
const View = react_native.View;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
const obj = { tag: obj2, tagText: obj3 };
obj2 = { paddingHorizontal: 6, paddingVertical: 2, borderRadius: nativeDefault.radii.round, overflow: "hidden", justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.BADGE_NOTIFICATION_BACKGROUND };
createStyles = createStyles.createStyles;
obj3 = { textAlign: "center", color: nativeDefault.unsafe_rawColors.WHITE, marginTop: num };
num = 0;
if (PlatformUtils.isAndroid()) {
  num = -2;
}
let closure_4 = createStyles(obj);
const result = size.fileFinishedImporting("design/void/LiveTag/native/LiveTag.tsx");

export default function LiveTag(arg0) {
  let allowFontScaling;
  let items1;
  let str;
  let style;
  let textStyle;
  ({ style, textStyle, allowFontScaling } = arg0);
  const tmp = closure_4();
  const items = [tmp.tag, style];
  ({ variant: "text-xs/bold", style: items1, lineClamp: 1, allowFontScaling, children: str.toUpperCase() });
  items1 = [tmp.tagText, textStyle];
  const Text = Text_Text.Text;
  const intl = intl2.intl;
  str = intl.string(intl2.t.dI3q4h);
  return <View style={items}>{null}</View>;
};
