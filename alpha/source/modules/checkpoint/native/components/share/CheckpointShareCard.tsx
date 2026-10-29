// Module ID: 13238
// Function ID: 13239
// Name: CheckpointShareCard
// Dependencies: [19, 17, 21, 5005, 13239, 587, 6078, 558, 576, 6079, 13240, 13242, 13243, 13244, 13241, 2]
// Exports: getCheckpointShareCardSize

// Module 13238 (CheckpointShareCard)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import CheckpointCardTypes from "CheckpointCardTypes" /* 6078 */;
import CheckpointCardColors from "CheckpointCardColors" /* 6079 */;
import CheckpointCardFrame from "CheckpointCardFrame" /* 13239 */;
import CheckpointShareCardYear from "CheckpointShareCardYear" /* 13240 */;
import CheckpointShareCardContext from "CheckpointShareCardContext" /* 13241 */;
import CheckpointShareCardStatsDefault from "CheckpointShareCardStats" /* 13242 */;
import CheckpointShareCardPowerBarDefault from "CheckpointShareCardPowerBar" /* 13243 */;
import CheckpointShareCardFooterDefault from "CheckpointShareCardFooter" /* 13244 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5005 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const CheckpointCardFrameDefault = CheckpointCardFrame;
const CheckpointShareCardYearDefault = CheckpointShareCardYear;

let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let rect;
let rect1;
let size;
const View = react_native.View;
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = Fragment);
let c7 = 200;
let c8 = 0.6944444444444444;
let c9 = 24;
const characterLayout = { size: 224, top: 24, left: -12 };
const characterLayout2 = { size: 230.4, top: 17.28, left: -5.76 };
const layout = { iconSize: 16, textVariant: "text-sm/medium" };
const layout2 = { iconSize: 12, textVariant: "text-xs/medium" };
let createStyles = createStyles_mod;
let obj = { card: { overflow: "hidden" }, portraitCard: size, characterAndStatsCard: { width: 300, height: 198 }, portraitStats: rect, characterAndStatsStats: rect1, portraitStatRow: obj2, characterAndStatsStatRow: obj3 };
size = { width: 200, height: CheckpointCardFrame.CHECKPOINT_CARD_HEIGHT };
createStyles = createStyles.createStyles;
rect = { position: "absolute", top: 56, left: nativeDefault.space.PX_12, right: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_8 };
rect1 = { position: "absolute", top: 0, bottom: 0, right: nativeDefault.space.PX_16, width: 122, justifyContent: "center", gap: 10 };
obj2 = { height: 16, gap: nativeDefault.space.PX_8 };
obj3 = { height: 12, gap: nativeDefault.space.PX_4 };
let closure_14 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointShareCard(arg0) {
  let cardType;
  let character;
  let items;
  let items1;
  let items2;
  let items3;
  let stats;
  let tmp35;
  let tmp6;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(42);
  ({ cardType, character, stats } = arg0);
  const tmp4 = closure_14();
  let tmp5 = null;
  if (cardType !== CheckpointCardTypes.CheckpointCardTypes.STATS_ONLY) {
    tmp5 = character;
  }
  if (cResult[0] !== character) {
    const tmpResult = CheckpointCardColors;
    const characterCardColorPalette = tmpResult.getCharacterCardColorPalette(character);
    const tmpResult2 = CheckpointCardColors;
    const cardColors = tmpResult2.getCardColors(characterCardColorPalette);
    cResult[0] = character;
    cResult[1] = characterCardColorPalette;
    cResult[2] = cardColors;
    tmp7 = cardColors;
    tmp6 = characterCardColorPalette;
  } else {
    tmp6 = cResult[1];
    tmp7 = cResult[2];
  }
  if (CheckpointCardTypes.CheckpointCardTypes.DEFAULT === cardType) {
    let tmp59;
    const _Symbol4 = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { path: CheckpointShareCardYear.YEAR_PATH, x: 154 };
      const tmp62 = CheckpointShareCardYearDefault;
      const tmp63 = React3(tmp62, obj2);
      cResult[3] = tmp63;
      tmp59 = tmp63;
    } else {
      tmp59 = cResult[3];
    }
    if (cResult[4] === tmp5) {
      let tmp64;
      if (cResult[5] === tmp6) {
        tmp64 = cResult[6];
      }
      if (cResult[7] === stats) {
        if (cResult[8] === tmp4.characterAndStatsStatRow) {
          let tmp71;
          let tmp78;
          if (cResult[9] === tmp4.characterAndStatsStats) {
            tmp71 = cResult[10];
          }
          const _Symbol5 = Symbol;
          if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp81 = React3(CheckpointShareCardFooterDefault, { isCharacterAndStats: true });
            cResult[11] = tmp81;
            tmp78 = tmp81;
          } else {
            tmp78 = cResult[11];
          }
          if (cResult[12] === tmp64) {
            let tmp82;
            if (cResult[13] === tmp71) {
              tmp82 = cResult[14];
            }
            tmp35 = tmp82;
          }
          const obj3 = { children: items };
          items = [tmp64, tmp71, tmp78];
          const tmp85 = metroRequire(hasOwnProperty, obj3);
          cResult[12] = tmp64;
          cResult[13] = tmp71;
          cResult[14] = tmp85;
          tmp82 = tmp85;
        }
      }
      let tmp72 = null != stats;
      if (tmp72) {
        const obj4 = { children: items1 };
        const obj5 = { stats, layout: layout2, style: null, rowStyle: null };
        ({ characterAndStatsStats: obj14.style, characterAndStatsStatRow: obj14.rowStyle } = tmp4);
        items1 = [React3(CheckpointShareCardStatsDefault, obj5), ];
        const obj7 = { stats };
        items1[1] = React3(CheckpointShareCardPowerBarDefault, obj7);
        tmp72 = metroRequire(hasOwnProperty, obj4);
      }
      cResult[7] = stats;
      cResult[8] = tmp4.characterAndStatsStatRow;
      cResult[9] = tmp4.characterAndStatsStats;
      cResult[10] = tmp72;
      tmp71 = tmp72;
    }
    const obj8 = { character: tmp5, cardColorPalette: tmp6, canvasWidth: 432, scale, clydeSize, characterLayout: characterLayout2, children: tmp59 };
    const tmp70 = React3(CheckpointCardFrameDefault, obj8);
    cResult[4] = tmp5;
    cResult[5] = tmp6;
    cResult[6] = tmp70;
    tmp64 = tmp70;
  } else if (CheckpointCardTypes.CheckpointCardTypes.CHARACTER_ONLY === cardType) {
    let tmp37;
    const _Symbol2 = Symbol;
    if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
      const obj9 = { path: CheckpointShareCardYear.YEAR_PATH, x: v200 - CheckpointShareCardYear.YEAR_WIDTH };
      const tmp40 = CheckpointShareCardYearDefault;
      const tmp42 = React3(tmp40, obj9);
      cResult[15] = tmp42;
      tmp37 = tmp42;
    } else {
      tmp37 = cResult[15];
    }
    if (cResult[16] === tmp5) {
      let tmp43;
      let tmp50;
      let tmp54;
      if (cResult[17] === tmp6) {
        tmp43 = cResult[18];
      }
      const _Symbol3 = Symbol;
      if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp53 = React3(CheckpointShareCardFooterDefault, { isCharacterAndStats: false });
        cResult[19] = tmp53;
        tmp50 = tmp53;
      } else {
        tmp50 = cResult[19];
      }
      if (cResult[20] !== tmp43) {
        const obj10 = { children: items2 };
        items2 = [tmp43, tmp50];
        const tmp57 = metroRequire(hasOwnProperty, obj10);
        cResult[20] = tmp43;
        cResult[21] = tmp57;
        tmp54 = tmp57;
      } else {
        tmp54 = cResult[21];
      }
      tmp35 = tmp54;
    }
    const obj11 = { character: tmp5, cardColorPalette: tmp6, canvasWidth: v200, clydeSize, characterLayout, children: tmp37 };
    const tmp49 = React3(CheckpointCardFrameDefault, obj11);
    cResult[16] = tmp5;
    cResult[17] = tmp6;
    cResult[18] = tmp49;
    tmp43 = tmp49;
  } else if (CheckpointCardTypes.CheckpointCardTypes.STATS_ONLY === cardType) {
    let tmp10;
    let tmp16;
    const _Symbol6 = Symbol;
    if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
      const obj12 = { path: CheckpointShareCardYear.SHORT_YEAR_PATH, x: v200 - CheckpointShareCardYear.YEAR_WIDTH };
      const tmp13 = CheckpointShareCardYearDefault;
      const tmp15 = React3(tmp13, obj12);
      cResult[22] = tmp15;
      tmp10 = tmp15;
    } else {
      tmp10 = cResult[22];
    }
    if (cResult[23] !== tmp6) {
      const obj13 = { character: null, cardColorPalette: tmp6, canvasWidth: v200, clydeSize, children: tmp10 };
      const tmp21 = React3(CheckpointCardFrameDefault, obj13);
      cResult[23] = tmp6;
      cResult[24] = tmp21;
      tmp16 = tmp21;
    } else {
      tmp16 = cResult[24];
    }
    if (cResult[25] === stats) {
      if (cResult[26] === tmp4.portraitStatRow) {
        let tmp22;
        let tmp27;
        if (cResult[27] === tmp4.portraitStats) {
          tmp22 = cResult[28];
        }
        const _Symbol = Symbol;
        if (cResult[29] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp30 = React3(CheckpointShareCardFooterDefault, { isCharacterAndStats: false });
          cResult[29] = tmp30;
          tmp27 = tmp30;
        } else {
          tmp27 = cResult[29];
        }
        if (cResult[30] === tmp16) {
          let tmp31;
          if (cResult[31] === tmp22) {
            tmp31 = cResult[32];
          }
          tmp35 = tmp31;
        }
        const obj15 = { children: items3 };
        items3 = [tmp16, tmp22, tmp27];
        const tmp34 = metroRequire(hasOwnProperty, obj15);
        cResult[30] = tmp16;
        cResult[31] = tmp22;
        cResult[32] = tmp34;
        tmp31 = tmp34;
      }
    }
    let tmp23 = null != stats;
    if (tmp23) {
      const obj16 = { stats, layout, style: null, rowStyle: null };
      ({ portraitStats: obj6.style, portraitStatRow: obj6.rowStyle } = tmp4);
      tmp23 = React3(CheckpointShareCardStatsDefault, obj16);
    }
    cResult[25] = stats;
    cResult[26] = tmp4.portraitStatRow;
    cResult[27] = tmp4.portraitStats;
    cResult[28] = tmp23;
    tmp22 = tmp23;
  }
  const tmp86 = cardType === CheckpointCardTypes.CheckpointCardTypes.DEFAULT ? tmp4.characterAndStatsCard : tmp4.portraitCard;
  if (cResult[33] === tmp4.card) {
    let tmp87;
    if (cResult[34] === tmp86) {
      tmp87 = cResult[35];
    }
    if (cResult[36] === tmp35) {
      let tmp88;
      if (cResult[37] === tmp87) {
        tmp88 = cResult[38];
      }
      if (cResult[39] === tmp7) {
        let tmp92;
        if (cResult[40] === tmp88) {
          tmp92 = cResult[41];
        }
        return tmp92;
      }
      const obj17 = { value: tmp7, children: tmp88 };
      const tmp94 = React3(CheckpointShareCardContext.CheckpointShareCardColorsContext.Provider, obj17);
      cResult[39] = tmp7;
      cResult[40] = tmp88;
      cResult[41] = tmp94;
      tmp92 = tmp94;
    }
    const obj18 = { style: tmp87, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: tmp35 };
    const tmp91 = React3(View, obj18);
    cResult[36] = tmp35;
    cResult[37] = tmp87;
    cResult[38] = tmp91;
    tmp88 = tmp91;
  }
  const items4 = [tmp4.card, tmp86];
  cResult[33] = tmp4.card;
  cResult[34] = tmp86;
  cResult[35] = items4;
  tmp87 = items4;
}) : (function CheckpointShareCard(arg0) {
  let cardType;
  let character;
  let items1;
  let items2;
  let obj10;
  let obj13;
  let obj17;
  let obj2;
  let stats;
  let tmp18;
  let tmp19Result2;
  let tmp27;
  let tmp39;
  ({ cardType, character, stats } = arg0);
  const tmp = closure_14();
  let tmp4 = null;
  if (cardType !== CheckpointCardTypes.CheckpointCardTypes.STATS_ONLY) {
    tmp4 = character;
  }
  const tmp2Result = CheckpointCardColors;
  const characterCardColorPalette = tmp2Result.getCharacterCardColorPalette(character);
  const tmp2Result2 = CheckpointCardColors;
  const cardColors = tmp2Result2.getCardColors(characterCardColorPalette);
  if (CheckpointCardTypes.CheckpointCardTypes.DEFAULT === cardType) {
    const obj = { character: tmp4, cardColorPalette: characterCardColorPalette, canvasWidth: 432, scale, clydeSize, characterLayout: characterLayout2, children: React3(tmp27, obj2) };
    obj2 = { path: CheckpointShareCardYear.YEAR_PATH, x: 154 };
    const tmp23 = CheckpointCardFrameDefault;
    tmp27 = CheckpointShareCardYearDefault;
    const items = [React3(tmp23, obj), , ];
    let tmp19Result = null != stats;
    if (tmp19Result) {
      const obj4 = { children: items1 };
      const obj5 = { stats, layout: layout2, style: null, rowStyle: null };
      ({ characterAndStatsStats: obj11.style, characterAndStatsStatRow: obj11.rowStyle } = tmp);
      items1 = [React3(CheckpointShareCardStatsDefault, obj5), ];
      const obj6 = { stats };
      items1[1] = React3(CheckpointShareCardPowerBarDefault, obj6);
      tmp19Result = tmp19(tmp20, obj4);
    }
    const obj7 = { children: items };
    items[1] = tmp19Result;
    items[2] = React3(CheckpointShareCardFooterDefault, { isCharacterAndStats: true });
    tmp19Result2 = tmp19(tmp20, obj7);
  } else if (CheckpointCardTypes.CheckpointCardTypes.CHARACTER_ONLY === cardType) {
    const obj8 = { children: items2 };
    const obj9 = { character: tmp4, cardColorPalette: characterCardColorPalette, canvasWidth: v200, clydeSize, characterLayout, children: React3(tmp18, obj10) };
    obj10 = { path: CheckpointShareCardYear.YEAR_PATH, x: v200 - CheckpointShareCardYear.YEAR_WIDTH };
    const tmp14 = CheckpointCardFrameDefault;
    tmp18 = CheckpointShareCardYearDefault;
    items2 = [React3(tmp14, obj9), React3(CheckpointShareCardFooterDefault, { isCharacterAndStats: false })];
    tmp19Result2 = metroRequire(hasOwnProperty, obj8);
  } else if (CheckpointCardTypes.CheckpointCardTypes.STATS_ONLY === cardType) {
    const obj12 = { character: null, cardColorPalette: characterCardColorPalette, canvasWidth: v200, clydeSize, children: React3(tmp39, obj13) };
    obj13 = { path: CheckpointShareCardYear.SHORT_YEAR_PATH, x: v200 - CheckpointShareCardYear.YEAR_WIDTH };
    const tmp36 = CheckpointCardFrameDefault;
    tmp39 = CheckpointShareCardYearDefault;
    const items3 = [React3(tmp36, obj12), , ];
    let tmp34Result = null != stats;
    const tmp32 = metroRequire;
    const tmp33 = hasOwnProperty;
    if (tmp34Result) {
      const obj14 = { stats, layout, style: null, rowStyle: null };
      ({ portraitStats: obj3.style, portraitStatRow: obj3.rowStyle } = tmp);
      tmp34Result = tmp34(tmp35(13242), obj14);
    }
    const obj15 = { children: items3 };
    items3[1] = tmp34Result;
    items3[2] = React3(CheckpointShareCardFooterDefault, { isCharacterAndStats: false });
    tmp19Result2 = tmp32(tmp33, obj15);
  }
  const items4 = [tmp.card, ];
  const obj16 = { value: cardColors, children: React3(View, obj17) };
  const Provider = tmp2(13241).CheckpointShareCardColorsContext.Provider;
  obj17 = { style: items4, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: tmp19Result2 };
  items4[1] = cardType === CheckpointCardTypes.CheckpointCardTypes.DEFAULT ? tmp.characterAndStatsCard : tmp.portraitCard;
  return React3(Provider, obj16);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/share/CheckpointShareCard.tsx");

export default tmp5;
export function getCheckpointShareCardSize(item) {
  if (CheckpointCardTypes.CheckpointCardTypes.DEFAULT === item) {
    return { width: 300, height: 198 };
  } else {
    size = { width: v200, height: CheckpointCardFrame.CHECKPOINT_CARD_HEIGHT };
    return size;
  }
}
