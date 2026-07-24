// Module ID: 14234
// Function ID: 109328
// Name: HAPPENING_NOW_CARD_MARGIN_RIGHT
// Dependencies: [31, 27, 14233, 33, 4130, 689, 7423, 1324, 3977, 5167, 4126, 2]
// Exports: HappeningNowCardHeader, HappeningNowCardSubtitle, default

// Module 14234 (HAPPENING_NOW_CARD_MARGIN_RIGHT)
import "result";
import { View } from "get ActivityIndicator";
import HAPPENING_NOW_PANELS_CONTAINER_PADDING from "HAPPENING_NOW_PANELS_CONTAINER_PADDING";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let HAPPENING_NOW_BADGE_SIZE;
let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_5;
let closure_6;
let closure_8;
let closure_9;
const require = arg1;
const HAPPENING_NOW_CARD_MARGIN_RIGHT = HAPPENING_NOW_PANELS_CONTAINER_PADDING.HAPPENING_NOW_CARD_MARGIN_RIGHT;
({ HAPPENING_NOW_CARD_PADDING: closure_5, HAPPENING_NOW_CARD_HEIGHT: closure_6, HAPPENING_NOW_BADGE_SIZE } = HAPPENING_NOW_PANELS_CONTAINER_PADDING);
({ HAPPENING_NOW_CARD_WIDTH_SMALL_MIN: closure_8, HAPPENING_NOW_CARD_WIDTH_SMALL_MAX: closure_9, HAPPENING_NOW_CARD_WIDTH_MEDIUM_MIN: closure_10, HAPPENING_NOW_CARD_WIDTH_MEDIUM_MAX: closure_11, HAPPENING_NOW_CARD_WIDTH_LARGE_MIN: closure_12, HAPPENING_NOW_CARD_WIDTH_LARGE_MAX: closure_13, HAPPENING_NOW_CARD_PADDING_RIGHT: closure_14, HAPPENING_NOW_CARD_WIDTH_STRETCHY_MIN: closure_15, HAPPENING_NOW_CARD_WIDTH_STRETCHY_MAX: closure_16, HAPPENING_NOW_CARD_WIDTH_LARGE_PANELS_MAX: closure_17 } = HAPPENING_NOW_PANELS_CONTAINER_PADDING);
({ jsx: closure_18, jsxs: closure_19 } = jsxProd);
let closure_20 = HAPPENING_NOW_PANELS_CONTAINER_PADDING.HAPPENING_NOW_PANELS_CONTAINER_PADDING + HAPPENING_NOW_CARD_MARGIN_RIGHT;
let closure_21 = _createForOfIteratorHelperLoose.createStyles((arg0, arg1, arg2, arg3) => {
  if ("small" === arg0) {
    let obj = { minWidth: closure_8, maxWidth: closure_9 };
  } else if ("medium" === arg0) {
    obj = { minWidth: closure_10, maxWidth: closure_11 };
  } else if ("large" === arg0) {
    const obj1 = { minWidth: closure_12 };
    if (arg1) {
      if (arg2) {
        let diff = 252 - closure_20;
      } else {
        diff = closure_17;
      }
    } else {
      obj1.maxWidth = closure_13;
      obj = obj1;
    }
  } else if ("stretchy" === arg0) {
    const obj2 = { minWidth: closure_15 };
    if (arg1) {
      if (arg2) {
        let diff1 = 252 - closure_20;
      } else {
        diff1 = closure_17;
      }
    } else {
      obj2.maxWidth = closure_16;
      obj = obj2;
    }
  } else if ("full" === arg0) {
    obj = { width: "auto", marginLeft: 0, marginRight: 0 };
  }
  const obj3 = {};
  const merged = Object.assign(obj);
  obj3.card = { padding: closure_5, paddingRight: closure_14, marginRight: HAPPENING_NOW_CARD_MARGIN_RIGHT, height: closure_6, flexDirection: "row", alignItems: "center" };
  obj3.cardBadgeWrapper = { position: "absolute", top: 0, right: 0 };
  const obj5 = { display: "flex", alignItems: "center", justifyContent: "center", width: HAPPENING_NOW_BADGE_SIZE, height: HAPPENING_NOW_BADGE_SIZE };
  let prop;
  if (!arg3) {
    prop = importDefault(689).colors.BACKGROUND_MOD_SUBTLE;
  }
  obj5.backgroundColor = prop;
  let diff2;
  if (!arg3) {
    diff2 = importDefault(689).radii.lg - 1;
  }
  obj5.borderTopRightRadius = diff2;
  let md;
  if (!arg3) {
    md = importDefault(689).radii.md;
  }
  obj5.borderBottomLeftRadius = md;
  obj3.cardBadge = obj5;
  return obj3;
});
_createForOfIteratorHelperLoose = { marginRight: HAPPENING_NOW_BADGE_SIZE + 4 };
let closure_22 = _createForOfIteratorHelperLoose.createStyles({ cardHeaderMargin: _createForOfIteratorHelperLoose });
const result = require("HAPPENING_NOW_PANELS_CONTAINER_PADDING").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCard.tsx");

export default function HappeningNowCard(IconComponent) {
  let accessibilityHint;
  let accessibilityLabel;
  let panelVariant;
  let width;
  const tmp2 = importDefault(1324)("HappeningNowCard");
  ({ width, panelVariant } = IconComponent);
  let tmp4 = null != panelVariant;
  if (tmp4) {
    tmp4 = panelVariant;
  }
  const tmp3Result = closure_21(width, tmp4, importDefault(7423)(), tmp2);
  IconComponent = IconComponent.IconComponent;
  const tmp = importDefault(7423)();
  const tmp3 = closure_21;
  ({ accessibilityLabel, accessibilityHint } = IconComponent);
  let obj = { variant: "secondary", style: items, onPress: IconComponent.onPress, border: "faint" };
  items = [tmp3Result.card, IconComponent.style];
  let str;
  if (null == tmp6) {
    str = "low";
  }
  obj.shadow = str;
  obj.onLongPress = IconComponent.onLongPress;
  obj.disabled = null == IconComponent.onPress;
  obj.accessibilityLabel = accessibilityLabel;
  obj.accessibilityHint = accessibilityHint;
  const items1 = [IconComponent.children, ];
  let tmp9Result = null;
  if (null != IconComponent) {
    obj = { style: tmp3Result.cardBadgeWrapper };
    obj = { style: tmp3Result.cardBadge };
    const obj1 = {};
    let str2 = "xs";
    if (tmp2) {
      str2 = "xxs";
    }
    obj1.size = str2;
    let str3;
    if (tmp2) {
      str3 = "icon-voice-connected";
    }
    obj1.color = str3;
    obj.children = closure_18(IconComponent, obj1);
    obj.children = closure_18(View, obj);
    tmp9Result = tmp9(tmp10, obj);
  }
  items1[1] = tmp9Result;
  obj.children = items1;
  return closure_19(require(5167) /* getCardBackgroundToken */.Card, obj);
};
export const HappeningNowCardHeader = function HappeningNowCardHeader(displayNameFont) {
  let children;
  let noMargin;
  displayNameFont = displayNameFont.displayNameFont;
  let obj = { children: 0, noMargin: 0, displayNameFont: 0 };
  ({ children, noMargin } = displayNameFont);
  Object.setPrototypeOf(null);
  const merged = Object.assign(displayNameFont, obj);
  const tmp3 = callback();
  obj = { variant: null, color: "mobile-text-heading-primary", lineClamp: 1, maxFontSizeMultiplier: 2 };
  let str = "text-sm/semibold";
  if (tmp4) {
    str = "text-md/medium";
  }
  obj.variant = str;
  let cardHeaderMargin = null;
  if (!noMargin) {
    cardHeaderMargin = tmp3.cardHeaderMargin;
  }
  const items = [cardHeaderMargin, ];
  let tmp7 = null;
  if (null != displayNameFont) {
    obj = { fontFamily: displayNameFont };
    tmp7 = obj;
  }
  items[1] = tmp7;
  obj.style = items;
  const merged1 = Object.assign(merged);
  obj["children"] = children;
  return closure_18(require(4126) /* Text */.Text, obj);
};
export const HappeningNowCardSubtitle = function HappeningNowCardSubtitle(variant) {
  variant = variant.variant;
  let obj = Object.create(null);
  obj.children = 0;
  obj.variant = 0;
  const merged = Object.assign(variant, obj);
  const tmp3 = importDefault(1324)("HappeningNowCardSubtitle");
  obj = {};
  if (null == variant) {
    let str = "text-xs/medium";
    if (tmp3) {
      str = "text-sm/normal";
    }
    variant = str;
  }
  obj.variant = variant;
  let str2 = "text-default";
  if (tmp3) {
    str2 = "text-subtle";
  }
  obj.color = str2;
  obj.lineClamp = 1;
  obj.maxFontSizeMultiplier = 2;
  const merged1 = Object.assign(merged);
  obj["children"] = variant.children;
  return closure_18(require(4126) /* Text */.Text, obj);
};
