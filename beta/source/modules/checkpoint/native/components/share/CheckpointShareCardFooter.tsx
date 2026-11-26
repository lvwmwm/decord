// Module ID: 12515
// Function ID: 12516
// Name: CheckpointShareCardFooter
// Dependencies: [19, 17, 21, 4913, 575, 12513, 7865, 5504, 2]
// Exports: default

// Module 12515 (CheckpointShareCardFooter)
import nativeDefault from "native" /* 575 */;
import Text_Text from "Text/Text" /* 5504 */;
import inlineStylesDefault from "inlineStyles" /* 7865 */;
import CheckpointShareCardContext from "CheckpointShareCardContext" /* 12513 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4913 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
({ StyleSheet: closure_4, View: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let size = { width: 121, height: 28 };
let createStyles = createStyles_mod;
let obj = { footer: obj2, portraitFooter: obj3, characterAndStatsFooter: { paddingLeft: nativeDefault.space.PX_12, alignItems: "flex-end", paddingBottom: nativeDefault.space.PX_6 }, footerTitle: { fontSize: 12, lineHeight: 14, letterSpacing: -0.48, color: nativeDefault.colors.BLACK } };
obj2 = { position: "absolute", bottom: 0, left: 0, flexDirection: "row", alignItems: "center" };
createStyles = createStyles.createStyles;
const merged = Object.assign(size);
obj3 = { paddingLeft: nativeDefault.space.PX_12 };
({ paddingLeft: nativeDefault.space.PX_12, alignItems: "flex-end", paddingBottom: nativeDefault.space.PX_6 });
({ fontSize: 12, lineHeight: 14, letterSpacing: -0.48, color: nativeDefault.colors.BLACK });
let closure_9 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/share/CheckpointShareCardFooter.tsx");

export default function CheckpointShareCardFooter(isCharacterAndStats) {
  let Path;
  let height;
  let items1;
  let obj2;
  let width;
  isCharacterAndStats = isCharacterAndStats.isCharacterAndStats;
  const tmp = closure_9();
  ({ width, height } = size);
  const items = [tmp.footer, ];
  const obj = { style: items, children: items1 };
  items[1] = isCharacterAndStats ? tmp.characterAndStatsFooter : tmp.portraitFooter;
  const primaryBackgroundColor = react.useContext(CheckpointShareCardContext.CheckpointShareCardColorsContext).primaryBackgroundColor;
  size = { style: absoluteFill.absoluteFill, width, height, children: metroRequire(Path, obj2) };
  obj2 = { d: "M0 0H" + width - 13 + "L" + width + " 12V" + height + "H0Z", fill: primaryBackgroundColor };
  const tmp6 = inlineStylesDefault;
  Path = tmp2(7865).Path;
  items1 = [metroRequire(tmp6, size), ];
  const obj3 = { variant: "display-sm", style: tmp.footerTitle, allowFontScaling: false, children: "CHECKPOINT" };
  items1[1] = metroRequire(Text_Text.Text, obj3);
  return metroImportDefault(hasOwnProperty, obj);
};
