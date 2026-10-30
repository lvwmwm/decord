// Module ID: 13394
// Function ID: 13395
// Name: CheckpointShareCardFooter
// Dependencies: [19, 17, 21, 5009, 575, 13391, 5591, 8023, 5619, 13395, 2]
// Exports: default

// Module 13394 (CheckpointShareCardFooter)
import nativeDefault from "native" /* 575 */;
import useToken from "useToken" /* 5591 */;
import Text_Text from "Text/Text" /* 5619 */;
import inlineStylesDefault from "inlineStyles" /* 8023 */;
import CheckpointShareCardContext from "CheckpointShareCardContext" /* 13391 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
({ StyleSheet: closure_4, View: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let size = { width: 145, height: 28 };
const size1 = { width: 140, height: 24 };
let createStyles = createStyles_mod;
let obj = { footer: { position: "absolute", bottom: 0, left: 0, flexDirection: "row", alignItems: "center" }, portraitFooter: obj2, characterAndStatsFooter: obj3, footerTitle: obj4, footerButton: obj5, portraitFooterButton: { width: 16, height: 16 }, characterAndStatsFooterButton: { width: 12, height: 12 } };
obj2 = { paddingLeft: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
const merged = Object.assign(size);
obj3 = { paddingLeft: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_4 };
const merged1 = Object.assign(size1);
obj4 = { fontSize: 12, lineHeight: 14, letterSpacing: -0.48, color: nativeDefault.colors.BLACK };
obj5 = { alignItems: "center", justifyContent: "center", borderWidth: 1, borderColor: nativeDefault.colors.BLACK };
let closure_10 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/share/CheckpointShareCardFooter.tsx");

export default function CheckpointShareCardFooter(isCharacterAndStats) {
  let ArrowLargeRightIcon;
  let Path;
  let height;
  let items1;
  let items3;
  let obj3;
  let obj7;
  let primaryBackgroundColor;
  let tertiaryBackgroundColor;
  let width;
  isCharacterAndStats = isCharacterAndStats.isCharacterAndStats;
  const tmp = closure_10();
  const context = react.useContext(CheckpointShareCardContext.CheckpointShareCardColorsContext);
  ({ primaryBackgroundColor, tertiaryBackgroundColor } = context);
  ({ width, height } = isCharacterAndStats ? size1 : size);
  const items = [tmp.footer, ];
  const obj2 = { style: items, children: items1 };
  items[1] = isCharacterAndStats ? tmp.characterAndStatsFooter : tmp.portraitFooter;
  const obj = useToken;
  const token = obj.useToken(nativeDefault.colors.BLACK);
  size = { style: absoluteFill.absoluteFill, width, height, children: metroRequire(Path, obj3) };
  obj3 = { d: "M0 0H" + width - 13 + "L" + width + " 12V" + height + "H0Z", fill: primaryBackgroundColor };
  const tmp5Result = inlineStylesDefault;
  Path = tmp2(8023).Path;
  items1 = [metroRequire(tmp5Result, size), , ];
  const obj4 = { variant: "display-sm", style: tmp.footerTitle, allowFontScaling: false, children: "CHECKPOINT" };
  items1[1] = metroRequire(Text_Text.Text, obj4);
  const items2 = [tmp.footerButton, , ];
  items2[1] = isCharacterAndStats ? tmp.characterAndStatsFooterButton : tmp.portraitFooterButton;
  const obj6 = { backgroundColor: tertiaryBackgroundColor, boxShadow: items3 };
  items3 = [{ offsetX: 1.5, offsetY: 1.5, blurRadius: 0, color: token }];
  items2[2] = obj6;
  const obj5 = { style: items2, children: metroRequire(ArrowLargeRightIcon, obj7) };
  obj7 = { size: "xxs", color: nativeDefault.colors.BLACK };
  ArrowLargeRightIcon = tmp2(13395).ArrowLargeRightIcon;
  items1[2] = metroRequire(hasOwnProperty, obj5);
  return metroImportDefault(hasOwnProperty, obj2);
};
