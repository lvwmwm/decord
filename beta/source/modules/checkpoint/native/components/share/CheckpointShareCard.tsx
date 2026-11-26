// Module ID: 12507
// Function ID: 12508
// Name: CheckpointShareCard
// Dependencies: [19, 17, 21, 12508, 575, 12510, 4913, 5992, 10116, 10119, 5993, 12512, 12514, 12515, 12513, 1653, 2]
// Exports: default, getCheckpointShareCardSize

// Module 12507 (CheckpointShareCard)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import CheckpointCardTypes from "CheckpointCardTypes" /* 5992 */;
import CheckpointCardColors from "CheckpointCardColors" /* 5993 */;
import useCheckpointCharacterImagesDefault from "useCheckpointCharacterImages" /* 10116 */;
import useCheckpointCompositeRevealStyleDefault from "useCheckpointCompositeRevealStyle" /* 10119 */;
import CheckpointCardFrame from "CheckpointCardFrame" /* 12508 */;
import EmojiSlightlySmilingFaceIcon from "EmojiSlightlySmilingFaceIcon" /* 12510 */;
import CheckpointShareCardYear from "CheckpointShareCardYear" /* 12512 */;
import CheckpointShareCardFooterDefault from "CheckpointShareCardFooter" /* 12515 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4913 */;
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
let View = react_native.View;
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
  let tmp29Result;
  let tmp5Result10;
  let tmp5Result6;
  let tmp5Result8;
  ({ cardType, character, stats } = arg0);
  const tmp = closure_13();
  let tmp4 = null;
  if (cardType !== CheckpointCardTypes.CheckpointCardTypes.STATS_ONLY) {
    tmp4 = character;
  }
  const tmp6 = useCheckpointCharacterImagesDefault(tmp4, 224);
  const tmp7 = useCheckpointCompositeRevealStyleDefault(tmp6);
  const tmp2Result = CheckpointCardColors;
  const characterCardColorPalette = tmp2Result.getCharacterCardColorPalette(character);
  const tmp2Result2 = CheckpointCardColors;
  const cardColors = tmp2Result2.getCardColors(characterCardColorPalette);
  if (CheckpointCardTypes.CheckpointCardTypes.DEFAULT === cardType) {
    layout = { style: tmp.characterAndStatsCanvas, children: items };
    obj2 = { images: tmp6, cardColorPalette: characterCardColorPalette, canvasWidth: 432, isCharacterAndStats: true, clydeSize: 24, characterLayout: rect, children: React3(tmp5Result6, obj4) };
    obj4 = { path: CheckpointShareCardYear.YEAR_PATH, x: 156.25 };
    const tmp5Result = CheckpointCardFrameDefault;
    tmp5Result6 = CheckpointShareCardYearDefault;
    items = [React3(tmp5Result, obj2), , ];
    let tmp22Result = null != stats;
    const tmp20 = hasOwnProperty;
    const tmp21 = View;
    if (tmp22Result) {
      const obj5 = { stats, layout: obj2, style: null, rowStyle: null };
      ({ characterAndStatsStats: obj11.style, statRow: obj11.rowStyle } = tmp);
      tmp22Result = tmp22(tmp5(12514), obj5);
    }
    items[1] = tmp22Result;
    items[2] = React3(CheckpointShareCardFooterDefault, { isCharacterAndStats: true });
    tmp29Result = tmp20(tmp21, layout);
  } else if (CheckpointCardTypes.CheckpointCardTypes.CHARACTER_ONLY === cardType) {
    const obj6 = { children: items1 };
    const obj7 = { images: tmp6, cardColorPalette: characterCardColorPalette, canvasWidth: v200, clydeSize: 24, characterLayout, children: React3(tmp5Result8, obj8) };
    obj8 = { path: CheckpointShareCardYear.YEAR_PATH, x: v200 - CheckpointShareCardYear.YEAR_WIDTH };
    const tmp5Result7 = CheckpointCardFrameDefault;
    tmp5Result8 = CheckpointShareCardYearDefault;
    items1 = [React3(tmp5Result7, obj7), React3(CheckpointShareCardFooterDefault, { isCharacterAndStats: false })];
    tmp29Result = hasOwnProperty(metroRequire, obj6);
  } else if (CheckpointCardTypes.CheckpointCardTypes.STATS_ONLY === cardType) {
    const obj9 = { images: tmp6, cardColorPalette: characterCardColorPalette, canvasWidth: v200, clydeSize: 24, children: React3(tmp5Result10, obj10) };
    obj10 = { path: CheckpointShareCardYear.SHORT_YEAR_PATH, x: v200 - CheckpointShareCardYear.YEAR_WIDTH };
    const tmp5Result9 = CheckpointCardFrameDefault;
    tmp5Result10 = CheckpointShareCardYearDefault;
    const items2 = [React3(tmp5Result9, obj9), , ];
    let tmp31Result = null != stats;
    const tmp29 = hasOwnProperty;
    const tmp30 = metroRequire;
    if (tmp31Result) {
      const obj12 = { stats, layout, style: null, rowStyle: null };
      ({ portraitStats: obj3.style, statRow: obj3.rowStyle } = tmp);
      tmp31Result = tmp31(tmp5(12514), obj12);
    }
    const obj13 = { children: items2 };
    items2[1] = tmp31Result;
    items2[2] = React3(CheckpointShareCardFooterDefault, { isCharacterAndStats: false });
    tmp29Result = tmp29(tmp30, obj13);
  }
  const obj14 = { value: cardColors, children: React3(View, obj15) };
  const Provider = tmp2(12513).CheckpointShareCardColorsContext.Provider;
  const items3 = [tmp.card, tmp7, ];
  View = tmp5(1653).View;
  obj15 = { style: items3, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: tmp29Result };
  items3[2] = cardType === CheckpointCardTypes.CheckpointCardTypes.DEFAULT ? tmp.characterAndStatsCard : tmp.portraitCard;
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
