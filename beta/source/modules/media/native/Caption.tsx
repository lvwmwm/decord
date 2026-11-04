// Module ID: 10548
// Function ID: 10549
// Name: Caption
// Dependencies: [17, 1072, 21, 5014, 575, 5011, 1187, 2]
// Exports: Caption

// Module 10548 (Caption)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import createStyles_mod from "createStyles" /* 5014 */;
import ColorUtils_mod from "ColorUtils" /* 5011 */;
import size from "module_2" /* 2 */;

let ColorUtils;
let obj2;
let rect;
const View = react_native.View;
const Fonts = Constants.Fonts;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
const obj = { captionText: obj2, labelContainer: rect };
obj2 = { fontFamily: Fonts.PRIMARY_BOLD, color: nativeDefault.colors.WHITE, fontSize: 12 };
createStyles = createStyles.createStyles;
rect = { backgroundColor: ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.PRIMARY_700, 0.5), borderRadius: nativeDefault.radii.xs, paddingHorizontal: 8, paddingVertical: 2, position: "absolute", right: 6, bottom: 6 };
ColorUtils = ColorUtils_mod;
let closure_4 = createStyles(obj);
const result = size.fileFinishedImporting("modules/media/native/Caption.tsx");

export function Caption(arg0) {
  let label;
  let style;
  let textStyle;
  ({ label, style, textStyle } = arg0);
  const tmp = closure_4();
  const items = [tmp.labelContainer, style];
  const items1 = [tmp.captionText, textStyle];
  return <View style={items}>{null}</View>;
}
