// Module ID: 13244
// Function ID: 13245
// Name: CheckpointShareCardFooter
// Dependencies: [19, 17, 21, 5005, 587, 558, 576, 13241, 5289, 8017, 5271, 13245, 2]

// Module 13244 (CheckpointShareCardFooter)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 5271 */;
import useToken from "useToken" /* 5289 */;
import inlineStyles from "inlineStyles" /* 8017 */;
import CheckpointShareCardContext from "CheckpointShareCardContext" /* 13241 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5005 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const inlineStylesDefault = inlineStyles;

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
const tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointShareCardFooter(isCharacterAndStats) {
  let height;
  let items1;
  let primaryBackgroundColor;
  let tertiaryBackgroundColor;
  let width;
  const obj = react2;
  const cResult = obj.c(32);
  isCharacterAndStats = isCharacterAndStats.isCharacterAndStats;
  const tmp4 = closure_10();
  const context = react.useContext(CheckpointShareCardContext.CheckpointShareCardColorsContext);
  ({ primaryBackgroundColor, tertiaryBackgroundColor } = context);
  const obj2 = useToken;
  const token = obj2.useToken(nativeDefault.colors.BLACK);
  ({ width, height } = isCharacterAndStats ? size1 : size);
  const tmp8 = isCharacterAndStats ? tmp4.characterAndStatsFooter : tmp4.portraitFooter;
  if (cResult[0] === tmp4.footer) {
    let tmp9;
    if (cResult[1] === tmp8) {
      tmp9 = cResult[2];
    }
    if (cResult[3] === height) {
      let tmp10;
      if (cResult[4] === width) {
        tmp10 = cResult[5];
      }
      if (cResult[6] === primaryBackgroundColor) {
        let tmp15;
        if (cResult[7] === tmp10) {
          tmp15 = cResult[8];
        }
        if (cResult[9] === height) {
          if (cResult[10] === tmp15) {
            let tmp18;
            let tmp22;
            let tmp26;
            if (cResult[11] === width) {
              tmp18 = cResult[12];
            }
            if (cResult[13] !== tmp4.footerTitle) {
              const obj3 = { variant: "display-sm", style: tmp4.footerTitle, allowFontScaling: false, children: "CHECKPOINT" };
              const tmp24 = metroRequire(Text_Text.Text, obj3);
              cResult[13] = tmp4.footerTitle;
              cResult[14] = tmp24;
              tmp22 = tmp24;
            } else {
              tmp22 = cResult[14];
            }
            const tmp25 = isCharacterAndStats ? tmp4.characterAndStatsFooterButton : tmp4.portraitFooterButton;
            if (cResult[15] !== token) {
              const items = [{ offsetX: 1.5, offsetY: 1.5, blurRadius: 0, color: token }];
              const obj4 = { offsetX: 1.5, offsetY: 1.5, blurRadius: 0, color: token };
              cResult[15] = token;
              cResult[16] = items;
              tmp26 = items;
            } else {
              tmp26 = cResult[16];
            }
            if (cResult[17] === tmp26) {
              let tmp27;
              if (cResult[18] === tertiaryBackgroundColor) {
                tmp27 = cResult[19];
              }
              if (cResult[20] === tmp4.footerButton) {
                if (cResult[21] === tmp25) {
                  let tmp28;
                  let tmp30;
                  let tmp33;
                  if (cResult[22] === tmp27) {
                    tmp28 = cResult[23];
                  }
                  const _Symbol = Symbol;
                  if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
                    const obj5 = { size: "xxs", color: nativeDefault.colors.BLACK };
                    const ArrowLargeRightIcon = tmp(13245).ArrowLargeRightIcon;
                    const tmp32 = metroRequire(ArrowLargeRightIcon, obj5);
                    cResult[24] = tmp32;
                    tmp30 = tmp32;
                  } else {
                    tmp30 = cResult[24];
                  }
                  if (cResult[25] !== tmp28) {
                    const obj6 = { style: tmp28, children: tmp30 };
                    const tmp36 = metroRequire(hasOwnProperty, obj6);
                    cResult[25] = tmp28;
                    cResult[26] = tmp36;
                    tmp33 = tmp36;
                  } else {
                    tmp33 = cResult[26];
                  }
                  if (cResult[27] === tmp33) {
                    if (cResult[28] === tmp9) {
                      if (cResult[29] === tmp18) {
                        let tmp37;
                        if (cResult[30] === tmp22) {
                          tmp37 = cResult[31];
                        }
                        return tmp37;
                      }
                    }
                  }
                  const obj7 = { style: tmp9, children: items1 };
                  items1 = [tmp18, tmp22, tmp33];
                  const tmp40 = metroImportDefault(hasOwnProperty, obj7);
                  cResult[27] = tmp33;
                  cResult[28] = tmp9;
                  cResult[29] = tmp18;
                  cResult[30] = tmp22;
                  cResult[31] = tmp40;
                  tmp37 = tmp40;
                }
              }
              const items2 = [tmp4.footerButton, tmp25, tmp27];
              cResult[20] = tmp4.footerButton;
              cResult[21] = tmp25;
              cResult[22] = tmp27;
              cResult[23] = items2;
              tmp28 = items2;
            }
            const obj8 = { backgroundColor: tertiaryBackgroundColor, boxShadow: tmp26 };
            cResult[17] = tmp26;
            cResult[18] = tertiaryBackgroundColor;
            cResult[19] = obj8;
            tmp27 = obj8;
          }
        }
        size = { style: React3.absoluteFill, width, height, children: tmp15 };
        const tmp21 = metroRequire(inlineStylesDefault, size);
        cResult[9] = height;
        cResult[10] = tmp15;
        cResult[11] = width;
        cResult[12] = tmp21;
        tmp18 = tmp21;
      }
      const obj9 = { d: tmp10, fill: primaryBackgroundColor };
      const tmp17 = metroRequire(inlineStyles.Path, obj9);
      cResult[6] = primaryBackgroundColor;
      cResult[7] = tmp10;
      cResult[8] = tmp17;
      tmp15 = tmp17;
    }
    const _HermesInternal = HermesInternal;
    const combined = "M0 0H" + width - 13 + "L" + width + " 12V" + height + "H0Z";
    cResult[3] = height;
    cResult[4] = width;
    cResult[5] = combined;
    tmp10 = combined;
  }
  const items3 = [tmp4.footer, tmp8];
  cResult[0] = tmp4.footer;
  cResult[1] = tmp8;
  cResult[2] = items3;
  tmp9 = items3;
}) : (function CheckpointShareCardFooter(isCharacterAndStats) {
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
  size = { style: React3.absoluteFill, width, height, children: metroRequire(Path, obj3) };
  obj3 = { d: "M0 0H" + width - 13 + "L" + width + " 12V" + height + "H0Z", fill: primaryBackgroundColor };
  const tmp5Result = inlineStylesDefault;
  Path = tmp2(8017).Path;
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
  ArrowLargeRightIcon = tmp2(13245).ArrowLargeRightIcon;
  items1[2] = metroRequire(hasOwnProperty, obj5);
  return metroImportDefault(hasOwnProperty, obj2);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/share/CheckpointShareCardFooter.tsx");

export default tmp7;
