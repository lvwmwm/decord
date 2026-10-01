// Module ID: 14842
// Function ID: 14843
// Name: HappeningNowCard
// Dependencies: [19, 17, 14841, 21, 4836, 6364, 4688, 5919, 4832, 2]
// Exports: HappeningNowCardHeader, HappeningNowCardSubtitle, default

// Module 14842 (HappeningNowCard)
import react_native from "react-native" /* 17 */;
import Text_Text from "Text/Text" /* 4832 */;
import Card_Card from "Card/Card" /* 5919 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 6364 */;
import react from "react" /* 19 */;
import HappeningNowConstants from "HappeningNowConstants" /* 14841 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let HAPPENING_NOW_BADGE_SIZE;
let HAPPENING_NOW_PANELS_CONTAINER_PADDING;
let c10;
let c9;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let hasOwnProperty;
let map1;
let metroImportAll;
let metroRequire;
let obj2;
let tmp;
let unpackModuleId;
const useColorThemeBackgroundDefault = tmp(4688);
const View = react_native.View;
const HAPPENING_NOW_CARD_MARGIN_RIGHT = HappeningNowConstants.HAPPENING_NOW_CARD_MARGIN_RIGHT;
({ HAPPENING_NOW_CARD_PADDING: hasOwnProperty, HAPPENING_NOW_CARD_HEIGHT: metroRequire, HAPPENING_NOW_BADGE_SIZE } = HappeningNowConstants);
({ HAPPENING_NOW_CARD_WIDTH_SMALL_MIN: metroImportAll, HAPPENING_NOW_CARD_WIDTH_SMALL_MAX: c9, HAPPENING_NOW_CARD_WIDTH_MEDIUM_MIN: c10, HAPPENING_NOW_CARD_WIDTH_MEDIUM_MAX: unpackModuleId, HAPPENING_NOW_CARD_WIDTH_LARGE_MIN: closure_12, HAPPENING_NOW_CARD_WIDTH_LARGE_MAX: map1, HAPPENING_NOW_CARD_PADDING_RIGHT: closure_14, HAPPENING_NOW_CARD_WIDTH_STRETCHY_MIN: closure_15, HAPPENING_NOW_CARD_WIDTH_STRETCHY_MAX: closure_16, HAPPENING_NOW_CARD_WIDTH_LARGE_PANELS_MAX: closure_17, HAPPENING_NOW_PANELS_CONTAINER_PADDING } = HappeningNowConstants);
({ jsx: closure_18, jsxs: closure_19 } = Fragment);
let closure_20 = HAPPENING_NOW_PANELS_CONTAINER_PADDING + HAPPENING_NOW_CARD_MARGIN_RIGHT;
let createStyles = createStyles_mod;
let closure_21 = createStyles.createStyles((arg0, arg1, arg2) => {
  let obj;
  let obj7;
  let tmp2;
  let tmp6;
  if ("small" === arg0) {
    obj = { minWidth: metroImportAll, maxWidth };
    const obj2 = { minWidth: metroImportAll, maxWidth };
  } else if ("medium" === arg0) {
    obj = { minWidth, maxWidth: unpackModuleId };
    const obj3 = { minWidth, maxWidth: unpackModuleId };
  } else if ("large" === arg0) {
    const obj4 = { minWidth: minWidth2, maxWidth: tmp6 };
    if (arg1) {
      let diff;
      if (arg2) {
        diff = 252 - closure_20;
      } else {
        diff = closure_17;
      }
      tmp6 = diff;
    } else {
      tmp6 = map1;
    }
    obj = obj4;
  } else if ("stretchy" === arg0) {
    const obj5 = { minWidth: minWidth3, maxWidth: tmp2 };
    if (arg1) {
      let diff1;
      if (arg2) {
        diff1 = 252 - closure_20;
      } else {
        diff1 = closure_17;
      }
      tmp2 = diff1;
    } else {
      tmp2 = authStore3;
    }
    obj = obj5;
  } else if ("full" === arg0) {
    obj = { width: "auto", marginLeft: 0, marginRight: 0 };
  }
  const obj6 = { card: obj7, cardBadgeWrapper: { position: "absolute", top: 0, right: 0 }, cardBadge: size };
  obj7 = { padding: hasOwnProperty, paddingRight, marginRight: HAPPENING_NOW_CARD_MARGIN_RIGHT, height: metroRequire, flexDirection: "row", alignItems: "center" };
  const merged = Object.assign(obj);
  size = { display: "flex", alignItems: "center", justifyContent: "center", width: HAPPENING_NOW_BADGE_SIZE, height: HAPPENING_NOW_BADGE_SIZE };
  return obj6;
});
createStyles = createStyles_mod;
let obj = { cardHeaderMargin: obj2 };
obj2 = { marginRight: HAPPENING_NOW_BADGE_SIZE + 4 };
let closure_22 = createStyles.createStyles(obj);
let size = size_mod;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCard.tsx");

export default function HappeningNowCard(onPress) {
  let accessibilityHint;
  let accessibilityLabel;
  let items;
  let items1;
  let obj3;
  let str;
  let flag = onPress.panelVariant;
  const width = onPress.width;
  const tmp3 = useIsWindowLargeDefault();
  const tmp4 = closure_21;
  if (flag == null) {
    flag = false;
  }
  const tmp4Result = tmp4(width, flag, tmp3);
  const IconComponent = onPress.IconComponent;
  ({ accessibilityLabel, accessibilityHint } = onPress);
  const obj = { variant: "secondary", style: items, onPress: onPress.onPress, border: "faint", shadow: str, onLongPress: onPress.onLongPress, disabled: null == onPress.onPress, accessibilityLabel, accessibilityHint, children: items1 };
  items = [tmp4Result.card, onPress.style];
  str = undefined;
  const tmp6 = useColorThemeBackgroundDefault();
  const Card = Card_Card.Card;
  const tmp7 = closure_19;
  if (null == tmp6) {
    str = "low";
  }
  items1 = [onPress.children, ];
  let tmp8 = null;
  if (null != IconComponent) {
    const obj2 = { style: tmp4Result.cardBadgeWrapper, children: authStore4(View, obj3) };
    obj3 = { style: tmp4Result.cardBadge, children: authStore4(IconComponent, { size: "xxs", color: "icon-voice-connected" }) };
    tmp8 = authStore4(View, obj2);
  }
  items1[1] = tmp8;
  return tmp7(Card, obj);
};
export const HappeningNowCardHeader = function HappeningNowCardHeader(displayNameFont) {
  let children;
  let noMargin;
  displayNameFont = displayNameFont.displayNameFont;
  ({ children, noMargin } = displayNameFont);
  const merged = Object.assign(displayNameFont, Object.assign({ children: 0, noMargin: 0, displayNameFont: 0 }));
  let cardHeaderMargin = null;
  const tmp2 = closure_22();
  const Text = Text_Text.Text;
  const tmp3 = authStore4;
  if (!noMargin) {
    cardHeaderMargin = tmp2.cardHeaderMargin;
  }
  const items = [cardHeaderMargin, ];
  let tmp5 = null;
  if (null != displayNameFont) {
    tmp5 = { fontFamily: displayNameFont };
    const obj = { fontFamily: displayNameFont };
  }
  const obj2 = { variant: "text-md/medium", color: "mobile-text-heading-primary", lineClamp: 1, maxFontSizeMultiplier: 2, style: items, children };
  items[1] = tmp5;
  const merged1 = Object.assign(merged);
  return tmp3(Text, obj2);
};
export const HappeningNowCardSubtitle = function HappeningNowCardSubtitle(variant) {
  let str = variant.variant;
  const children = variant.children;
  const merged = Object.assign(variant, Object.assign({ children: 0, variant: 0 }));
  const Text = Text_Text.Text;
  const tmp2 = authStore4;
  if (str == null) {
    str = "text-sm/normal";
  }
  const obj = { variant: str, color: "text-subtle", lineClamp: 1, maxFontSizeMultiplier: 2, children };
  const merged1 = Object.assign(merged);
  return tmp2(Text, obj);
};
