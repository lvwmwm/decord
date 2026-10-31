// Module ID: 13432
// Function ID: 13433
// Name: CheckpointShareCardFooter
// Dependencies: [19, 17, 21, 5014, 575, 13429, 5596, 8031, 5624, 13433, 2]
// Exports: default

// Module 13432 (CheckpointShareCardFooter)
import nativeDefault from "native" /* 575 */;
import useToken from "useToken" /* 5596 */;
import Text_Text from "Text/Text" /* 5624 */;
import inlineStylesDefault from "inlineStyles" /* 8031 */;
import CheckpointShareCardContext from "CheckpointShareCardContext" /* 13429 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
({ StyleSheet: closure_4, View: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let size = { width: 145, height: 28 };
let createStyles = createStyles_mod;
let obj = { footer: obj2, portraitFooter: obj3, characterAndStatsFooter: obj4, footerTitle: obj5, footerButton: obj6, portraitFooterButton: { width: 16, height: 16 }, characterAndStatsFooterButton: { width: 16, height: 16, borderWidth: 0.8 } };
obj2 = { position: "absolute", bottom: 0, left: 0, flexDirection: "row", alignItems: "center" };
createStyles = createStyles.createStyles;
const merged = Object.assign(size);
obj3 = { paddingLeft: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_8 };
obj4 = { paddingLeft: nativeDefault.space.PX_12, alignItems: "flex-end", paddingBottom: nativeDefault.space.PX_6, gap: nativeDefault.space.PX_8 };
obj5 = { fontSize: 12, lineHeight: 14, letterSpacing: -0.48, color: nativeDefault.colors.BLACK };
obj6 = { alignItems: "center", justifyContent: "center", borderWidth: 1, borderColor: nativeDefault.colors.BLACK };
let closure_9 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/share/CheckpointShareCardFooter.tsx");

export default function CheckpointShareCardFooter(isCharacterAndStats) {
  let ArrowLargeRightIcon;
  let Path;
  let height;
  let items1;
  let items3;
  let obj3;
  let obj8;
  let primaryBackgroundColor;
  let tertiaryBackgroundColor;
  let width;
  isCharacterAndStats = isCharacterAndStats.isCharacterAndStats;
  const tmp = closure_9();
  const context = react.useContext(CheckpointShareCardContext.CheckpointShareCardColorsContext);
  ({ primaryBackgroundColor, tertiaryBackgroundColor } = context);
  ({ width, height } = size);
  const items = [tmp.footer, ];
  const obj2 = { style: items, children: items1 };
  items[1] = isCharacterAndStats ? tmp.characterAndStatsFooter : tmp.portraitFooter;
  const obj = useToken;
  const token = obj.useToken(nativeDefault.colors.BLACK);
  size = { style: absoluteFill.absoluteFill, width, height, children: metroRequire(Path, obj3) };
  obj3 = { d: "M0 0H" + width - 13 + "L" + width + " 12V" + height + "H0Z", fill: primaryBackgroundColor };
  const tmp5Result = inlineStylesDefault;
  Path = tmp2(8031).Path;
  items1 = [metroRequire(tmp5Result, size), , ];
  const obj4 = { variant: "display-sm", style: tmp.footerTitle, allowFontScaling: false, children: "CHECKPOINT" };
  items1[1] = metroRequire(Text_Text.Text, obj4);
  const items2 = [tmp.footerButton, isCharacterAndStats ? tmp.characterAndStatsFooterButton : tmp.portraitFooterButton, ];
  let num = 1.5;
  let num2 = 1.5;
  const obj5 = { backgroundColor: tertiaryBackgroundColor, boxShadow: items3 };
  const tmp7 = metroImportDefault;
  if (isCharacterAndStats) {
    num2 = 1.6;
  }
  const obj6 = { offsetX: num2, offsetY: num, blurRadius: 0, color: token };
  if (isCharacterAndStats) {
    num = 1.6;
  }
  items3 = [obj6];
  items2[2] = obj5;
  const obj7 = { style: items2, children: metroRequire(ArrowLargeRightIcon, obj8) };
  obj8 = { size: "xxs", color: nativeDefault.colors.BLACK };
  ArrowLargeRightIcon = tmp2(13433).ArrowLargeRightIcon;
  items1[2] = metroRequire(hasOwnProperty, obj7);
  return tmp7(hasOwnProperty, obj2);
};
