// Module ID: 13243
// Function ID: 13244
// Name: CheckpointShareCardPowerBar
// Dependencies: [19, 17, 6054, 21, 5005, 587, 558, 576, 13241, 5289, 5271, 8017, 2]

// Module 13243 (CheckpointShareCardPowerBar)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import CheckpointConstants from "CheckpointConstants" /* 6054 */;
import inlineStyles from "inlineStyles" /* 8017 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5005 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
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
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointShareCardPowerBar(stats) {
  let tmp6;
  let token;
  const tmp = stats;
  let obj = stats(576);
  const cResult = obj.c(24);
  stats = stats.stats;
  let tmp4 = closure_9();
  const tertiaryBackgroundColor = react.useContext(stats(13241).CheckpointShareCardColorsContext).tertiaryBackgroundColor;
  let obj2 = stats(5289);
  token = obj2.useToken(token(587).colors.BLACK);
  if (cResult[0] !== tertiaryBackgroundColor) {
    const obj3 = { backgroundColor: tertiaryBackgroundColor };
    let num = 0;
    cResult[0] = tertiaryBackgroundColor;
    cResult[1] = obj3;
    tmp6 = obj3;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === tmp4.powerBar) {
    let tmp7;
    let tmp8;
    if (cResult[3] === tmp6) {
      tmp7 = cResult[4];
    }
    if (cResult[5] !== tmp4.powerText) {
      const obj4 = { variant: "experimental/mono-md/normal", style: tmp4.powerText, allowFontScaling: false, children: "LVL" };
      const tmp10 = closure_5(tmp(5271).Text, obj4);
      cResult[5] = tmp4.powerText;
      cResult[6] = tmp10;
      tmp8 = tmp10;
    } else {
      tmp8 = cResult[6];
    }
    if (cResult[7] === stats.powerLevel) {
      let tmp11;
      if (cResult[8] === tmp4.powerText) {
        tmp11 = cResult[9];
      }
      if (cResult[10] === tmp4.powerLevel) {
        if (cResult[11] === tmp8) {
          let tmp14;
          if (cResult[12] === tmp11) {
            tmp14 = cResult[13];
          }
          if (cResult[14] === stats.powerLevelUnits) {
            let tmp19;
            if (cResult[15] === token) {
              tmp19 = cResult[16];
            }
            if (cResult[17] === tmp4.powerUnits) {
              let tmp22;
              if (cResult[18] === tmp19) {
                tmp22 = cResult[19];
              }
              if (cResult[20] === tmp7) {
                if (cResult[21] === tmp14) {
                  let tmp26;
                  if (cResult[22] === tmp22) {
                    tmp26 = cResult[23];
                  }
                  return tmp26;
                }
              }
              const obj5 = { style: tmp7, children: items };
              items = [tmp14, tmp22];
              const tmp29 = closure_6(View, obj5);
              cResult[20] = tmp7;
              cResult[21] = tmp14;
              cResult[22] = tmp22;
              cResult[23] = tmp29;
              tmp26 = tmp29;
            }
            const obj6 = { style: tmp18, children: tmp19 };
            const tmp25 = closure_5(View, obj6);
            cResult[17] = tmp4.powerUnits;
            cResult[18] = tmp19;
            cResult[19] = tmp25;
            tmp22 = tmp25;
          }
          const mapped = items.map((d, index) => {
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
            obj2 = { d, fill: token, opacity: num };
            num = 0.3;
            Path = inlineStyles.Path;
            if (index < stats.powerLevelUnits) {
              num = 1;
            }
            return hasOwnProperty(tmp4, size, index);
          });
          cResult[14] = stats.powerLevelUnits;
          cResult[15] = token;
          cResult[16] = mapped;
          tmp19 = mapped;
        }
      }
      const obj7 = { style: tmp4.powerLevel, children: items1 };
      items1 = [tmp8, tmp11];
      const tmp17 = closure_6(View, obj7);
      cResult[10] = tmp4.powerLevel;
      cResult[11] = tmp8;
      cResult[12] = tmp11;
      cResult[13] = tmp17;
      tmp14 = tmp17;
    }
    const obj8 = { variant: "experimental/mono-md/bold", style: tmp4.powerText, allowFontScaling: false, children: stats.powerLevel };
    const tmp13 = closure_5(tmp(5271).Text, obj8);
    cResult[7] = stats.powerLevel;
    cResult[8] = tmp4.powerText;
    cResult[9] = tmp13;
    tmp11 = tmp13;
  }
  const items2 = [tmp4.powerBar, tmp6];
  cResult[2] = tmp4.powerBar;
  cResult[3] = tmp6;
  cResult[4] = items2;
  tmp7 = items2;
}) : (function CheckpointShareCardPowerBar(stats) {
  let fill;
  let items2;
  stats = stats.stats;
  const tmp = closure_9();
  const tertiaryBackgroundColor = react.useContext(stats(13241).CheckpointShareCardColorsContext).tertiaryBackgroundColor;
  let obj = stats(5289);
  importDefault = obj.useToken(nativeDefault.colors.BLACK);
  let obj2 = { style: items, children: items2 };
  items = [tmp.powerBar, { backgroundColor: tertiaryBackgroundColor }];
  const obj3 = { style: tmp.powerLevel, children: items1 };
  items1 = [, ];
  const obj4 = { variant: "experimental/mono-md/normal", style: tmp.powerText, allowFontScaling: false, children: "LVL" };
  items1[0] = closure_5(stats(5271).Text, obj4);
  const obj5 = { variant: "experimental/mono-md/bold", style: tmp.powerText, allowFontScaling: false, children: stats.powerLevel };
  items1[1] = closure_5(stats(5271).Text, obj5);
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
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/share/CheckpointShareCardPowerBar.tsx");

export default tmp4;
