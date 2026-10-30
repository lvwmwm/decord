// Module ID: 13388
// Function ID: 13389
// Name: CheckpointShareCard
// Dependencies: [19, 17, 21, 5009, 13389, 575, 6085, 6086, 13390, 13392, 13393, 13394, 13391, 2]
// Exports: default, getCheckpointShareCardSize

// Module 13388 (CheckpointShareCard)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import CheckpointCardTypes from "CheckpointCardTypes" /* 6085 */;
import CheckpointCardColors from "CheckpointCardColors" /* 6086 */;
import CheckpointCardFrame from "CheckpointCardFrame" /* 13389 */;
import CheckpointShareCardYear from "CheckpointShareCardYear" /* 13390 */;
import CheckpointShareCardStatsDefault from "CheckpointShareCardStats" /* 13392 */;
import CheckpointShareCardPowerBarDefault from "CheckpointShareCardPowerBar" /* 13393 */;
import CheckpointShareCardFooterDefault from "CheckpointShareCardFooter" /* 13394 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
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
let closure_12 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/share/CheckpointShareCard.tsx");

export default function CheckpointShareCard(arg0) {
  let cardType;
  let character;
  let items1;
  let items2;
  let obj10;
  let obj13;
  let obj17;
  let obj2;
  let stats;
  let tmp17;
  let tmp18Result2;
  let tmp24;
  let tmp35;
  ({ cardType, character, stats } = arg0);
  const tmp = closure_12();
  let tmp4 = null;
  if (cardType !== CheckpointCardTypes.CheckpointCardTypes.STATS_ONLY) {
    tmp4 = character;
  }
  const tmp2Result = CheckpointCardColors;
  const characterCardColorPalette = tmp2Result.getCharacterCardColorPalette(character);
  const tmp2Result2 = CheckpointCardColors;
  const cardColors = tmp2Result2.getCardColors(characterCardColorPalette);
  if (CheckpointCardTypes.CheckpointCardTypes.DEFAULT === cardType) {
    const obj = { character: tmp4, cardColorPalette: characterCardColorPalette, canvasWidth: 432, scale: 0.6944444444444444, clydeSize: 24, characterLayout: characterLayout2, children: React3(tmp24, obj2) };
    obj2 = { path: CheckpointShareCardYear.YEAR_PATH, x: 154 };
    const tmp22 = CheckpointCardFrameDefault;
    tmp24 = CheckpointShareCardYearDefault;
    const items = [React3(tmp22, obj), , ];
    let tmp18Result = null != stats;
    if (tmp18Result) {
      const obj4 = { children: items1 };
      const obj5 = { stats, layout: layout2, style: null, rowStyle: null };
      ({ characterAndStatsStats: obj11.style, characterAndStatsStatRow: obj11.rowStyle } = tmp);
      items1 = [React3(CheckpointShareCardStatsDefault, obj5), ];
      const obj6 = { stats };
      items1[1] = React3(CheckpointShareCardPowerBarDefault, obj6);
      tmp18Result = tmp18(tmp19, obj4);
    }
    const obj7 = { children: items };
    items[1] = tmp18Result;
    items[2] = React3(CheckpointShareCardFooterDefault, { isCharacterAndStats: true });
    tmp18Result2 = tmp18(tmp19, obj7);
  } else if (CheckpointCardTypes.CheckpointCardTypes.CHARACTER_ONLY === cardType) {
    const obj8 = { children: items2 };
    const obj9 = { character: tmp4, cardColorPalette: characterCardColorPalette, canvasWidth: v200, clydeSize: 24, characterLayout, children: React3(tmp17, obj10) };
    obj10 = { path: CheckpointShareCardYear.YEAR_PATH, x: v200 - CheckpointShareCardYear.YEAR_WIDTH };
    const tmp14 = CheckpointCardFrameDefault;
    tmp17 = CheckpointShareCardYearDefault;
    items2 = [React3(tmp14, obj9), React3(CheckpointShareCardFooterDefault, { isCharacterAndStats: false })];
    tmp18Result2 = metroRequire(hasOwnProperty, obj8);
  } else if (CheckpointCardTypes.CheckpointCardTypes.STATS_ONLY === cardType) {
    const obj12 = { character: null, cardColorPalette: characterCardColorPalette, canvasWidth: v200, clydeSize: 24, children: React3(tmp35, obj13) };
    obj13 = { path: CheckpointShareCardYear.SHORT_YEAR_PATH, x: v200 - CheckpointShareCardYear.YEAR_WIDTH };
    const tmp33 = CheckpointCardFrameDefault;
    tmp35 = CheckpointShareCardYearDefault;
    const items3 = [React3(tmp33, obj12), , ];
    let tmp31Result = null != stats;
    const tmp29 = metroRequire;
    const tmp30 = hasOwnProperty;
    if (tmp31Result) {
      const obj14 = { stats, layout, style: null, rowStyle: null };
      ({ portraitStats: obj3.style, portraitStatRow: obj3.rowStyle } = tmp);
      tmp31Result = tmp31(tmp32(13392), obj14);
    }
    const obj15 = { children: items3 };
    items3[1] = tmp31Result;
    items3[2] = React3(CheckpointShareCardFooterDefault, { isCharacterAndStats: false });
    tmp18Result2 = tmp29(tmp30, obj15);
  }
  const items4 = [tmp.card, ];
  const obj16 = { value: cardColors, children: React3(View, obj17) };
  const Provider = tmp2(13391).CheckpointShareCardColorsContext.Provider;
  obj17 = { style: items4, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: tmp18Result2 };
  items4[1] = cardType === CheckpointCardTypes.CheckpointCardTypes.DEFAULT ? tmp.characterAndStatsCard : tmp.portraitCard;
  return React3(Provider, obj16);
};
export function getCheckpointShareCardSize(item) {
  if (CheckpointCardTypes.CheckpointCardTypes.DEFAULT === item) {
    return { width: 300, height: 198 };
  } else {
    size = { width: v200, height: CheckpointCardFrame.CHECKPOINT_CARD_HEIGHT };
    return size;
  }
}
