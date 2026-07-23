// Module ID: 15111
// Function ID: 115093
// Name: YouBarMaskedBackground
// Dependencies: [31, 27, 13997, 33, 4130, 689, 5109, 4554, 666, 3834, 14078, 3991, 4542, 2]

// Module 15111 (YouBarMaskedBackground)
import { View } from "get ActivityIndicator";
import CONNECTION_BANNER_HEIGHT from "CONNECTION_BANNER_HEIGHT";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

let closure_6;
let closure_7;
let require = arg1;
function YouBarMaskedBackground(barWidth) {
  let avatarSize;
  let backgroundColor;
  barWidth = barWidth.barWidth;
  ({ avatarSize, backgroundColor } = barWidth);
  const diff = avatarSize - 4;
  let obj = { style: { position: "absolute" } };
  obj = { style: obj };
  obj = { width: barWidth, height: YOU_BAR_HEIGHT, backgroundColor: "transparent" };
  const obj1 = { position: "absolute", top: 0, left: 0, right: 0, bottom: YOU_BAR_HEIGHT / 2 - 1, backgroundColor: "black" };
  const tmp = callback3();
  const items = [callback(View, { style: obj1 }), , ];
  const obj2 = { position: "absolute", top: YOU_BAR_HEIGHT / 2, left: diff - 1, right: 0, bottom: 0, backgroundColor: "black" };
  items[1] = callback(View, { style: obj2 });
  const obj3 = { style: obj4 };
  obj4 = { position: "absolute", top: YOU_BAR_HEIGHT / 2, width: 8, left: diff - 8, height: YOU_BAR_HEIGHT / 2 };
  const tmp3 = importDefault(5109);
  const tmp4 = importDefault(4554);
  const obj8 = importDefault(666)("#000000");
  const items1 = [importDefault(666)("#000000").alpha(0).hex(), "#000000"];
  obj3.colors = items1;
  obj3.start = { x: 0, y: 0 };
  obj3.end = { x: 1, y: 0 };
  obj3.locations = [0, 1];
  obj3.pointerEvents = "none";
  items[2] = callback(tmp4, obj3);
  obj.children = items;
  obj.maskElement = callback2(View, obj);
  const items2 = [tmp.youRowFloating, { width: barWidth, height: YOU_BAR_HEIGHT, backgroundColor }];
  obj.children = callback(View, { style: items2 });
  return callback(tmp3, obj);
}
function YouBarAnimatedBackground(arg0) {
  let backgroundColor;
  let barWidth;
  ({ barWidth, backgroundColor } = arg0);
  let obj = require(3834) /* map */;
  const token = obj.useToken(importDefault(689).modules.mobile.YOU_BAR_BORDER_RADIUS);
  const tmp3 = importDefault(14078)(token);
  require = tmp3;
  const tmp4 = importDefault(14078)(token, YOU_BAR_HEIGHT / 2);
  importDefault = tmp4;
  const tmp = callback3();
  const fn = function u() {
    const obj = { borderTopRightRadius: tmp3(outer1_2[12]).withSpring(tmp3.get(), outer1_5) };
    const obj2 = tmp3(outer1_2[12]);
    obj.borderTopLeftRadius = tmp3(outer1_2[12]).withSpring(tmp3.get(), outer1_5);
    const obj3 = tmp3(outer1_2[12]);
    obj.borderBottomLeftRadius = tmp3(outer1_2[12]).withSpring(tmp4.get(), outer1_5);
    return obj;
  };
  obj = { withSpring: require(4542) /* withSpring */.withSpring, questDockAnimatedBorderRadius: tmp3, YOU_BAR_SPRING_CONFIG, questDockAnimatedBottomLeftRadius: tmp4 };
  fn.__closure = obj;
  fn.__workletHash = 14606701040012;
  fn.__initData = closure_9;
  const animatedStyle = require(3991).useAnimatedStyle(fn);
  const style = [{ position: "absolute" }, tmp.youRowFloating, , , ];
  obj = { width: barWidth, height: YOU_BAR_HEIGHT, backgroundColor };
  style[2] = obj;
  style[3] = { borderTopRightRadius: 0, borderTopLeftRadius: 0 };
  style[4] = animatedStyle;
  return callback(importDefault(3991).View, { style });
}
const YOU_BAR_HEIGHT = CONNECTION_BANNER_HEIGHT.YOU_BAR_HEIGHT;
const YOU_BAR_SPRING_CONFIG = CONNECTION_BANNER_HEIGHT.YOU_BAR_SPRING_CONFIG;
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
let obj = {};
obj = { borderWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_MUTED, borderRadius: require("_createForOfIteratorHelperLoose").modules.mobile.YOU_BAR_BORDER_RADIUS, borderTopLeftRadius: YOU_BAR_HEIGHT / 2, borderBottomLeftRadius: YOU_BAR_HEIGHT / 2 };
obj.youRowFloating = obj;
let closure_8 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_9 = { code: "function YouBarBackgroundTsx1(){const{withSpring,questDockAnimatedBorderRadius,YOU_BAR_SPRING_CONFIG,questDockAnimatedBottomLeftRadius}=this.__closure;return{borderTopRightRadius:withSpring(questDockAnimatedBorderRadius.get(),YOU_BAR_SPRING_CONFIG),borderTopLeftRadius:withSpring(questDockAnimatedBorderRadius.get(),YOU_BAR_SPRING_CONFIG),borderBottomLeftRadius:withSpring(questDockAnimatedBottomLeftRadius.get(),YOU_BAR_SPRING_CONFIG)};}" };
const memoResult = require("result").memo(function YouBarBackground(barWidth) {
  let avatarSize;
  let hasNameplate;
  let isLargeAvatar;
  barWidth = barWidth.barWidth;
  ({ hasNameplate, isLargeAvatar, avatarSize } = barWidth);
  let obj = require(3834) /* map */;
  let token = obj.useToken(importDefault(689).colors.MOBILE_FLOATINGBAR_BACKGROUND);
  if (hasNameplate) {
    token = obj2.useToken(importDefault(689).colors.MOBILE_FLOATINGBAR_BACKGROUND_NAMEPLATE);
  }
  if (isLargeAvatar) {
    obj = { barWidth, backgroundColor: token, avatarSize };
    let tmp2Result = tmp2(YouBarMaskedBackground, obj);
  } else {
    obj = { barWidth, backgroundColor: token };
    tmp2Result = tmp2(YouBarAnimatedBackground, obj);
  }
  return tmp2Result;
});
const result = require("CONNECTION_BANNER_HEIGHT").fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarBackground.tsx");

export default memoResult;
