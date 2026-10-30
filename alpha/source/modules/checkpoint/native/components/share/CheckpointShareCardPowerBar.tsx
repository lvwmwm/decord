// Module ID: 13393
// Function ID: 13394
// Name: CheckpointShareCardPowerBar
// Dependencies: [19, 17, 6061, 21, 5009, 575, 13391, 5591, 5619, 8023, 2]
// Exports: default

// Module 13393 (CheckpointShareCardPowerBar)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import CheckpointConstants from "CheckpointConstants" /* 6061 */;
import inlineStyles from "inlineStyles" /* 8023 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

const inlineStylesDefault = inlineStyles;
let importDefault;

let hasOwnProperty;
let items2;
let metroRequire;
let obj2;
let rect;
const View = react_native.View;
const CHECKPOINT_2026_POWER_BAR_UNITS = CheckpointConstants.CHECKPOINT_2026_POWER_BAR_UNITS;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let items = ["M0 0H10L4.44 8H0V0Z"];
items[HermesBuiltin.arraySpread(items, Array(CHECKPOINT_2026_POWER_BAR_UNITS - 2).fill("M5.65 0H13L7.35 8H0L5.65 0Z"), 1)] = "M5.56 0H10V8H0L5.56 0Z";
Array(CHECKPOINT_2026_POWER_BAR_UNITS - 2);
let items1 = [10];
items1[HermesBuiltin.arraySpread(items1, Array(CHECKPOINT_2026_POWER_BAR_UNITS - 2).fill(13), 1)] = 10;
Array(CHECKPOINT_2026_POWER_BAR_UNITS - 2);
let obj = { powerBar: rect, powerLevel: { flexDirection: "row", gap: 2 }, powerText: obj2, powerUnits: { flexDirection: "row" } };
rect = { position: "absolute", top: 75, left: 12, flexDirection: "row", alignItems: "center", gap: 6, paddingHorizontal: 6, paddingVertical: 2, transform: items2, transformOrigin: "top left" };
items2 = [{ rotate: "90deg" }];
obj2 = { fontSize: 8, lineHeight: 8, letterSpacing: -0.08, color: nativeDefault.colors.BLACK };
let closure_9 = createStyles.createStyles(obj);
let size = size_mod;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/share/CheckpointShareCardPowerBar.tsx");

export default function CheckpointShareCardPowerBar(stats) {
  let fill;
  let items2;
  stats = stats.stats;
  const tmp = closure_9();
  const tertiaryBackgroundColor = react.useContext(stats(13391).CheckpointShareCardColorsContext).tertiaryBackgroundColor;
  let obj = stats(5591);
  importDefault = obj.useToken(nativeDefault.colors.BLACK);
  let obj2 = { style: items, children: items2 };
  items = [tmp.powerBar, { backgroundColor: tertiaryBackgroundColor }];
  const obj3 = { style: tmp.powerLevel, children: items1 };
  items1 = [, ];
  const obj4 = { variant: "experimental/mono-md/normal", style: tmp.powerText, allowFontScaling: false, children: "LVL" };
  items1[0] = closure_5(stats(5619).Text, obj4);
  const obj5 = { variant: "experimental/mono-md/bold", style: tmp.powerText, allowFontScaling: false, children: stats.powerLevel };
  items1[1] = closure_5(stats(5619).Text, obj5);
  items2 = [closure_6(View, obj3), ];
  const obj6 = {
    style: tmp.powerUnits,
    children: items.map((d, index) => {
      let Path;
      let num;
      let obj;
      let obj2;
      size = { width: 0.75 * tmp, height: 6, viewBox: "0 0 " + items1[index] + " 8", style: obj, children: hasOwnProperty(Path, obj2) };
      obj = undefined;
      const tmp4 = inlineStylesDefault;
      if (index > 0) {
        obj = { marginLeft: -3 };
      }
      obj2 = { d, fill, opacity: num };
      num = 0.3;
      Path = inlineStyles.Path;
      if (index < stats.powerLevelUnits) {
        num = 1;
      }
      return hasOwnProperty(tmp4, size, index);
    })
  };
  items2[1] = closure_5(View, obj6);
  return closure_6(View, obj2);
};
