// Module ID: 13638
// Function ID: 13639
// Name: CheckpointEmphasis
// Dependencies: [19, 17, 6066, 21, 1376, 6434, 5014, 575, 5642, 11047, 8031, 5624, 2]
// Exports: default

// Module 13638 (CheckpointEmphasis)
import nativeDefault from "native" /* 575 */;
import Text_Text from "Text/Text" /* 5624 */;
import useFontScale from "useFontScale" /* 5642 */;
import CheckpointConstants from "CheckpointConstants" /* 6066 */;
import inlineStyles from "inlineStyles" /* 8031 */;
import useScaledTextLineHeight from "useScaledTextLineHeight" /* 11047 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import PlatformUtils from "utils/PlatformUtils" /* 1376 */;
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils" /* 6434 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

const inlineStylesDefault = inlineStyles;

let c3;
let closure_4;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
({ StyleSheet: c3, View: closure_4 } = react_native);
const CHECKPOINT_PRIMARY = CheckpointConstants.CHECKPOINT_PRIMARY;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let num = 6;
if (PlatformUtils.isIOS()) {
  num = 2;
}
const points = CheckpointCustomizationUtils.getChamferedRectPoints(75, 22, 5.5);
let createStyles = createStyles_mod;
let obj = { container: obj2, emphasis: { flexDirection: "row", alignItems: "center" }, text: obj3 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_6 };
createStyles = createStyles.createStyles;
obj3 = { color: "black", textTransform: "uppercase", paddingVertical: 2, paddingHorizontal: nativeDefault.space.PX_6, fontSize: 14, lineHeight: 19 };
let closure_10 = createStyles(obj);
let size = size_mod;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointEmphasis.tsx");

export default function CheckpointEmphasis(children) {
  let items;
  let items1;
  let items2;
  let obj6;
  let obj7;
  let fill = children.fill;
  children = children.children;
  if (fill === undefined) {
    fill = CHECKPOINT_PRIMARY;
  }
  const tmp = closure_10();
  const obj = useFontScale;
  const fontScale = obj.useFontScale();
  const obj3 = { style: items, children: metroImportDefault(React3, obj6) };
  items = [tmp.container, ];
  const obj4 = { transform: items1 };
  const obj2 = useScaledTextLineHeight;
  items1 = [{ translateY: num * obj2.scaleLineHeight(14, fontScale) / 14 }];
  items[1] = obj4;
  obj6 = { style: tmp.emphasis, children: items2 };
  size = { style: absoluteFill.absoluteFill, width: "100%", height: "100%", viewBox: "0 0 75 22", preserveAspectRatio: "none", children: metroRequire(inlineStyles.Polygon, obj7) };
  ({ translateY: num * obj2.scaleLineHeight(14, fontScale) / 14 });
  obj7 = { points, fill };
  const tmp3 = inlineStylesDefault;
  items2 = [metroRequire(tmp3, size), ];
  const obj8 = { variant: "experimental/mono-md/bold", style: tmp.text, lineClamp: 1, children };
  items2[1] = metroRequire(Text_Text.Text, obj8);
  return metroRequire(React3, obj3);
};
