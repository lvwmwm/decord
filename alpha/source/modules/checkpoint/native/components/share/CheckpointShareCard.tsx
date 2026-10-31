// Module ID: 13423
// Function ID: 13424
// Name: CheckpointShareCard
// Dependencies: [19, 17, 21, 13424, 13426, 5014, 575, 6090, 6091, 13428, 13430, 13431, 13432, 13429, 2]
// Exports: default, getCheckpointShareCardSize

// Module 13423 (CheckpointShareCard)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import CheckpointCardTypes from "CheckpointCardTypes" /* 6090 */;
import CheckpointCardColors from "CheckpointCardColors" /* 6091 */;
import CheckpointCardFrame from "CheckpointCardFrame" /* 13424 */;
import EmojiSlightlySmilingFaceIcon from "EmojiSlightlySmilingFaceIcon" /* 13426 */;
import CheckpointShareCardYear from "CheckpointShareCardYear" /* 13428 */;
import CheckpointShareCardStatsDefault from "CheckpointShareCardStats" /* 13430 */;
import CheckpointShareCardPowerBarDefault from "CheckpointShareCardPowerBar" /* 13431 */;
import CheckpointShareCardFooterDefault from "CheckpointShareCardFooter" /* 13432 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

const CheckpointCardFrameDefault = CheckpointCardFrame;
const CheckpointShareCardYearDefault = CheckpointShareCardYear;

let closure_4;
let hasOwnProperty;
let items;
let metroRequire;
let obj4;
let rect;
let size;
let size1;
let size2;
const View = react_native.View;
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = Fragment);
let c7 = 200;
const result = CheckpointCardFrame.CHECKPOINT_CARD_HEIGHT * 0.6944444444444444;
const metroImportAll = result;
const characterLayout = { size: 224, top: 24, left: -12 };
const characterLayout2 = { size: 224, top: 24, left: -4 };
let layout = { iconSize: 16, textVariant: "text-sm/medium" };
let obj2 = { reactionsIcon: EmojiSlightlySmilingFaceIcon.EmojiSlightlySmilingFaceIcon };
const merged = Object.assign(layout);
let createStyles = createStyles_mod;
const obj3 = { card: { overflow: "hidden" }, portraitCard: size, characterAndStatsCard: { width: 300, height: result }, characterAndStatsCanvas: size1, portraitStats: rect, characterAndStatsStats: size2, statRow: obj4 };
size = { width: 200, height: CheckpointCardFrame.CHECKPOINT_CARD_HEIGHT };
createStyles = createStyles.createStyles;
size1 = { width: 432, height: CheckpointCardFrame.CHECKPOINT_CARD_HEIGHT, transform: items, transformOrigin: "top left" };
items = [{ scale: 0.6944444444444444 }];
rect = { position: "absolute", top: 56, left: nativeDefault.space.PX_12, right: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_8 };
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
  let items2;
  let obj10;
  let obj13;
  let obj17;
  let obj4;
  let stats;
  let tmp17;
  let tmp18Result2;
  let tmp24;
  let tmp36;
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
    obj2 = { character: tmp4, cardColorPalette: characterCardColorPalette, canvasWidth: 432, isCharacterAndStats: true, clydeSize: 24, characterLayout: characterLayout2, children: React3(tmp24, obj4) };
    obj4 = { path: CheckpointShareCardYear.YEAR_PATH, x: 156.25 };
    const tmp22 = CheckpointCardFrameDefault;
    tmp24 = CheckpointShareCardYearDefault;
    items = [React3(tmp22, obj2), , ];
    let tmp18Result = null != stats;
    const tmp19 = View;
    if (tmp18Result) {
      const obj5 = { children: items1 };
      const obj6 = { stats, layout: obj2, style: null, rowStyle: null };
      ({ characterAndStatsStats: obj12.style, statRow: obj12.rowStyle } = tmp);
      items1 = [React3(CheckpointShareCardStatsDefault, obj6), ];
      const obj7 = { stats };
      items1[1] = React3(CheckpointShareCardPowerBarDefault, obj7);
      tmp18Result = tmp18(hasOwnProperty, obj5);
    }
    items[1] = tmp18Result;
    items[2] = React3(CheckpointShareCardFooterDefault, { isCharacterAndStats: true });
    tmp18Result2 = tmp18(tmp19, layout);
  } else if (CheckpointCardTypes.CheckpointCardTypes.CHARACTER_ONLY === cardType) {
    const obj8 = { children: items2 };
    const obj9 = { character: tmp4, cardColorPalette: characterCardColorPalette, canvasWidth: v200, clydeSize: 24, characterLayout, children: React3(tmp17, obj10) };
    obj10 = { path: CheckpointShareCardYear.YEAR_PATH, x: v200 - CheckpointShareCardYear.YEAR_WIDTH };
    const tmp14 = CheckpointCardFrameDefault;
    tmp17 = CheckpointShareCardYearDefault;
    items2 = [React3(tmp14, obj9), React3(CheckpointShareCardFooterDefault, { isCharacterAndStats: false })];
    tmp18Result2 = metroRequire(hasOwnProperty, obj8);
  } else if (CheckpointCardTypes.CheckpointCardTypes.STATS_ONLY === cardType) {
    const obj11 = { character: null, cardColorPalette: characterCardColorPalette, canvasWidth: v200, clydeSize: 24, children: React3(tmp36, obj13) };
    obj13 = { path: CheckpointShareCardYear.SHORT_YEAR_PATH, x: v200 - CheckpointShareCardYear.YEAR_WIDTH };
    const tmp34 = CheckpointCardFrameDefault;
    tmp36 = CheckpointShareCardYearDefault;
    const items3 = [React3(tmp34, obj11), , ];
    let tmp32Result = null != stats;
    const tmp30 = metroRequire;
    const tmp31 = hasOwnProperty;
    if (tmp32Result) {
      const obj14 = { stats, layout, style: null, rowStyle: null };
      ({ portraitStats: obj3.style, statRow: obj3.rowStyle } = tmp);
      tmp32Result = tmp32(tmp33(13430), obj14);
    }
    const obj15 = { children: items3 };
    items3[1] = tmp32Result;
    items3[2] = React3(CheckpointShareCardFooterDefault, { isCharacterAndStats: false });
    tmp18Result2 = tmp30(tmp31, obj15);
  }
  const items4 = [tmp.card, ];
  const obj16 = { value: cardColors, children: React3(View, obj17) };
  const Provider = tmp2(13429).CheckpointShareCardColorsContext.Provider;
  obj17 = { style: items4, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: tmp18Result2 };
  items4[1] = cardType === CheckpointCardTypes.CheckpointCardTypes.DEFAULT ? tmp.characterAndStatsCard : tmp.portraitCard;
  return React3(Provider, obj16);
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
