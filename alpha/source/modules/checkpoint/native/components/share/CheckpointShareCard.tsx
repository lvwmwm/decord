// Module ID: 12425
// Function ID: 12426
// Name: CheckpointShareCard
// Dependencies: [19, 17, 21, 12426, 575, 12428, 4792, 5871, 5872, 12430, 12432, 12433, 12431, 2]
// Exports: default, getCheckpointShareCardSize

// Module 12425 (CheckpointShareCard)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import CheckpointCardTypes from "CheckpointCardTypes" /* 5871 */;
import CheckpointCardColors from "CheckpointCardColors" /* 5872 */;
import CheckpointCardFrame from "CheckpointCardFrame" /* 12426 */;
import EmojiSlightlySmilingFaceIcon from "EmojiSlightlySmilingFaceIcon" /* 12428 */;
import CheckpointShareCardYear from "CheckpointShareCardYear" /* 12430 */;
import CheckpointShareCardFooterDefault from "CheckpointShareCardFooter" /* 12433 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4792 */;
import size_mod from "module_2" /* 2 */;

const CheckpointCardFrameDefault = CheckpointCardFrame;
const CheckpointShareCardYearDefault = CheckpointShareCardYear;

let closure_4;
let hasOwnProperty;
let items;
let metroRequire;
let obj4;
let rect1;
let size;
let size1;
let size2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty, Fragment: metroRequire } = Fragment);
let c7 = 200;
const result = CheckpointCardFrame.CHECKPOINT_CARD_HEIGHT * 0.6944444444444444;
const metroImportAll = result;
const characterLayout = { size: 224, top: 16, left: -12 };
const rect = { size: 224, top: nativeDefault.space.PX_16, left: -4 };
let layout = { iconSize: 16, textVariant: "body-sm/medium" };
let obj2 = { reactionsIcon: EmojiSlightlySmilingFaceIcon.EmojiSlightlySmilingFaceIcon };
const merged = Object.assign(layout);
let createStyles = createStyles_mod;
const obj3 = { card: { overflow: "hidden" }, portraitCard: size, characterAndStatsCard: { width: 300, height: result }, characterAndStatsCanvas: size1, portraitStats: rect1, characterAndStatsStats: size2, statRow: obj4 };
size = { width: 200, height: CheckpointCardFrame.CHECKPOINT_CARD_HEIGHT };
createStyles = createStyles.createStyles;
size1 = { width: 432, height: CheckpointCardFrame.CHECKPOINT_CARD_HEIGHT, transform: items, transformOrigin: "top left" };
items = [{ scale: 0.6944444444444444 }];
rect1 = { position: "absolute", top: 56, left: nativeDefault.space.PX_12, right: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_8 };
size2 = { position: "absolute", top: 29, height: 226, right: nativeDefault.space.PX_24, width: 176, justifyContent: "center", gap: nativeDefault.space.PX_12 + 2 };
obj4 = { height: 16, gap: nativeDefault.space.PX_8 };
let closure_13 = createStyles(obj3);
size = size_mod;
const result1 = size.fileFinishedImporting("modules/checkpoint/native/components/share/CheckpointShareCard.tsx");

export default function CheckpointShareCard(arg0) {
  let cardType;
  let character;
  let items;
  let items1;
  let obj10;
  let obj15;
  let obj4;
  let obj8;
  let stats;
  let tmp17;
  let tmp24;
  let tmp29Result;
  let tmp35;
  ({ cardType, character, stats } = arg0);
  const tmp = closure_13();
  let tmp4 = null;
  if (cardType !== CheckpointCardTypes.CheckpointCardTypes.STATS_ONLY) {
    tmp4 = character;
  }
  const tmp2Result = CheckpointCardColors;
  const characterCardColorPalette = tmp2Result.getCharacterCardColorPalette(character);
  const tmp2Result2 = CheckpointCardColors;
  const cardColors = tmp2Result2.getCardColors(characterCardColorPalette);
  if (CheckpointCardTypes.CheckpointCardTypes.DEFAULT === cardType) {
    layout = { style: tmp.characterAndStatsCanvas, children: items };
    obj2 = { character: tmp4, cardColorPalette: characterCardColorPalette, canvasWidth: 432, isCharacterAndStats: true, clydeSize: 24, characterLayout: rect, children: React3(tmp24, obj4) };
    obj4 = { path: CheckpointShareCardYear.YEAR_PATH, x: 156.25 };
    const tmp22 = CheckpointCardFrameDefault;
    tmp24 = CheckpointShareCardYearDefault;
    items = [React3(tmp22, obj2), , ];
    let tmp20Result = null != stats;
    const tmp18 = hasOwnProperty;
    const tmp19 = View;
    if (tmp20Result) {
      const obj5 = { stats, layout: obj2, style: null, rowStyle: null };
      ({ characterAndStatsStats: obj11.style, statRow: obj11.rowStyle } = tmp);
      tmp20Result = tmp20(tmp21(12432), obj5);
    }
    items[1] = tmp20Result;
    items[2] = React3(CheckpointShareCardFooterDefault, { isCharacterAndStats: true });
    tmp29Result = tmp18(tmp19, layout);
  } else if (CheckpointCardTypes.CheckpointCardTypes.CHARACTER_ONLY === cardType) {
    const obj6 = { children: items1 };
    const obj7 = { character: tmp4, cardColorPalette: characterCardColorPalette, canvasWidth: v200, clydeSize: 24, characterLayout, children: React3(tmp17, obj8) };
    obj8 = { path: CheckpointShareCardYear.YEAR_PATH, x: v200 - CheckpointShareCardYear.YEAR_WIDTH };
    const tmp14 = CheckpointCardFrameDefault;
    tmp17 = CheckpointShareCardYearDefault;
    items1 = [React3(tmp14, obj7), React3(CheckpointShareCardFooterDefault, { isCharacterAndStats: false })];
    tmp29Result = hasOwnProperty(metroRequire, obj6);
  } else if (CheckpointCardTypes.CheckpointCardTypes.STATS_ONLY === cardType) {
    const obj9 = { character: null, cardColorPalette: characterCardColorPalette, canvasWidth: v200, clydeSize: 24, children: React3(tmp35, obj10) };
    obj10 = { path: CheckpointShareCardYear.SHORT_YEAR_PATH, x: v200 - CheckpointShareCardYear.YEAR_WIDTH };
    const tmp33 = CheckpointCardFrameDefault;
    tmp35 = CheckpointShareCardYearDefault;
    const items2 = [React3(tmp33, obj9), , ];
    let tmp31Result = null != stats;
    const tmp29 = hasOwnProperty;
    const tmp30 = metroRequire;
    if (tmp31Result) {
      const obj12 = { stats, layout, style: null, rowStyle: null };
      ({ portraitStats: obj3.style, statRow: obj3.rowStyle } = tmp);
      tmp31Result = tmp31(tmp32(12432), obj12);
    }
    const obj13 = { children: items2 };
    items2[1] = tmp31Result;
    items2[2] = React3(CheckpointShareCardFooterDefault, { isCharacterAndStats: false });
    tmp29Result = tmp29(tmp30, obj13);
  }
  const items3 = [tmp.card, ];
  const obj14 = { value: cardColors, children: React3(View, obj15) };
  const Provider = tmp2(12431).CheckpointShareCardColorsContext.Provider;
  obj15 = { style: items3, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: tmp29Result };
  items3[1] = cardType === CheckpointCardTypes.CheckpointCardTypes.DEFAULT ? tmp.characterAndStatsCard : tmp.portraitCard;
  return React3(Provider, obj14);
};
export function getCheckpointShareCardSize(item) {
  if (CheckpointCardTypes.CheckpointCardTypes.DEFAULT === item) {
    size = { width: 300, height: metroImportAll };
    return size;
  } else {
    const size1 = { width: v200, height: CheckpointCardFrame.CHECKPOINT_CARD_HEIGHT };
    return size1;
  }
}
