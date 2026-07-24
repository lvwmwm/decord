// Module ID: 13058
// Function ID: 100907
// Name: NewTag
// Dependencies: [31, 27, 653, 33, 4130, 689, 4554, 4126, 1212, 2]
// Exports: default

// Module 13058 (NewTag)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { HorizontalGradient } from "ME";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let Platform;
let closure_3;
const require = arg1;
({ View: closure_3, Platform } = get_ActivityIndicator);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { height: "auto", backgroundColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.RED_400, justifyContent: "center", alignItems: "center", paddingHorizontal: 4, marginBottom: 2, borderRadius: require("_createForOfIteratorHelperLoose").radii.round };
_createForOfIteratorHelperLoose.tagContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.tagText = { textTransform: "uppercase" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("ME").fileFinishedImporting("design/void/NewTag/native/NewTag.tsx");

export default function NewTag(color) {
  let containerStyle;
  let textStyle;
  let variant;
  ({ containerStyle, textStyle, variant } = color);
  if (variant === undefined) {
    variant = "heading-sm/semibold";
  }
  let str = color.color;
  if (str === undefined) {
    str = "text-overlay-light";
  }
  let flag = color.gradient;
  if (flag === undefined) {
    flag = false;
  }
  let sm = color.borderRadius;
  if (sm === undefined) {
    sm = importDefault(689).radii.sm;
  }
  let colors = color.colors;
  if (colors === undefined) {
    const items = [importDefault(689).unsafe_rawColors.PREMIUM_TIER_2_PURPLE, importDefault(689).unsafe_rawColors.PREMIUM_TIER_2_PINK];
    colors = items;
  }
  let obj = { containerStyle: 0, textStyle: 0, variant: 0, color: 0, gradient: 0, borderRadius: 0, colors: 0 };
  Object.setPrototypeOf(null);
  const merged = Object.assign(color, obj);
  const tmp7 = _createForOfIteratorHelperLoose();
  if (flag) {
    obj = {};
    obj = { borderRadius: sm, marginLeft: importDefault(689).space.PX_4 };
    obj.style = obj;
    ({ START: obj4.start, END: obj4.end } = HorizontalGradient);
    obj.colors = colors;
    const obj1 = {};
    const items1 = [tmp7.tagContainer, containerStyle];
    obj1.style = items1;
    const obj2 = { variant, color: str };
    const merged1 = Object.assign(merged);
    const items2 = [tmp7.tagText, textStyle];
    obj2["style"] = items2;
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj2["children"] = intl2.string(require(1212) /* getSystemLocale */.t.y2b7CA);
    obj1.children = tmp8(require(4126) /* Text */.Text, obj2);
    obj.children = tmp8(closure_3, obj1);
    let tmp8Result = tmp8(importDefault(4554), obj);
    const tmp18 = importDefault(4554);
  } else {
    const obj3 = {};
    const items3 = [tmp7.tagContainer, containerStyle];
    obj3.style = items3;
    const obj4 = { variant, color: str };
    const merged2 = Object.assign(merged);
    const items4 = [tmp7.tagText, textStyle];
    obj4["style"] = items4;
    const intl = require(1212) /* getSystemLocale */.intl;
    obj4["children"] = intl.string(require(1212) /* getSystemLocale */.t.y2b7CA);
    obj3.children = tmp8(require(4126) /* Text */.Text, obj4);
    tmp8Result = tmp8(closure_3, obj3);
  }
  return tmp8Result;
};
