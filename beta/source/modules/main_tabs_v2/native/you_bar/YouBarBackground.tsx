// Module ID: 16020
// Function ID: 16021
// Name: YouBarBackground
// Dependencies: [19, 17, 14627, 21, 4836, 576, 5976, 5293, 672, 4531, 14713, 4566, 5280, 2]

// Module 16020 (YouBarBackground)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import _modDef672 from "module_672" /* 672 */;
import useToken2 from "useToken" /* 4531 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4566 */;
import spring from "spring" /* 5280 */;
import LinearGradientDefault from "LinearGradient" /* 5293 */;
import _modDef5976 from "module_5976" /* 5976 */;
import useQuestDockAnimatedBorderRadiusDefault from "useQuestDockAnimatedBorderRadius" /* 14713 */;
import react from "react" /* 19 */;
import YouBarConstants from "YouBarConstants" /* 14627 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let metroImportDefault;
let metroRequire;
let obj2;
function YouBarMaskedBackground(barWidth) {
  let avatarSize;
  let backgroundColor;
  let items;
  let items1;
  let items2;
  let obj2;
  let obj6;
  let rect;
  let size1;
  barWidth = barWidth.barWidth;
  ({ avatarSize, backgroundColor } = barWidth);
  const diff = avatarSize - 4;
  const obj = { style: { position: "absolute" }, maskElement: metroImportDefault(View, obj2), children: metroRequire(View, obj6) };
  obj2 = { style: size, children: items };
  size = { width: barWidth, height: YOU_BAR_HEIGHT, backgroundColor: "transparent" };
  const obj3 = { style: rect };
  rect = { position: "absolute", top: 0, left: 0, right: 0, bottom: YOU_BAR_HEIGHT / 2 - 1, backgroundColor: "black" };
  items = [, , ];
  const tmp = closure_8();
  const tmp3 = _modDef5976;
  items[0] = metroRequire(View, obj3);
  const obj4 = { style: { position: "absolute", top: YOU_BAR_HEIGHT / 2, left: diff - 1, right: 0, bottom: 0, backgroundColor: "black" } };
  items[1] = metroRequire(View, obj4);
  const obj5 = { style: size1, colors: items1, start: { x: 0, y: 0 }, end: { x: 1, y: 0 }, locations: [0, 1], pointerEvents: "none" };
  size1 = { position: "absolute", top: YOU_BAR_HEIGHT / 2, width: 8, left: diff - 8, height: YOU_BAR_HEIGHT / 2 };
  const tmp4 = LinearGradientDefault;
  items1 = [, ];
  const obj9 = _modDef672("#000000");
  const alphaResult = obj9.alpha(0);
  items1[0] = alphaResult.hex();
  items1[1] = "#000000";
  items[2] = metroRequire(tmp4, obj5);
  obj6 = { style: items2 };
  items2 = [tmp.youRowFloating, { width: barWidth, height: YOU_BAR_HEIGHT, backgroundColor }];
  return metroRequire(tmp3, obj);
}
function YouBarAnimatedBackground(arg0) {
  let backgroundColor;
  let barWidth;
  let closure_0;
  let closure_1;
  let items;
  _require = undefined;
  ({ barWidth, backgroundColor } = arg0);
  const tmp = closure_8();
  let obj = require("useToken");
  const token = obj.useToken(nativeDefault.modules.mobile.YOU_BAR_BORDER_RADIUS);
  const tmp3 = useQuestDockAnimatedBorderRadiusDefault(token);
  _require = tmp3;
  const tmp4 = useQuestDockAnimatedBorderRadiusDefault(YOU_BAR_HEIGHT / 2, token);
  importDefault = tmp4;
  let obj2 = require("ReanimatedRexport");
  const fn = function u() {
    let obj2;
    let obj3;
    let obj4;
    const obj = { borderTopRightRadius: obj2.withSpring(closure_0.get(), YOU_BAR_SPRING_CONFIG), borderTopLeftRadius: obj3.withSpring(closure_0.get(), YOU_BAR_SPRING_CONFIG), borderBottomLeftRadius: obj4.withSpring(closure_1.get(), YOU_BAR_SPRING_CONFIG) };
    obj2 = spring;
    obj3 = spring;
    obj4 = spring;
    return obj;
  };
  let obj3 = { withSpring: require("spring").withSpring, questDockAnimatedBorderRadius: tmp3, YOU_BAR_SPRING_CONFIG, questDockAnimatedBottomLeftRadius: tmp4 };
  fn.__closure = obj3;
  fn.__workletHash = 14606701040012;
  fn.__initData = __initData;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  let obj4 = { style: items };
  items = [{ position: "absolute" }, tmp.youRowFloating, { width: barWidth, height: YOU_BAR_HEIGHT, backgroundColor }, { borderTopRightRadius: 0, borderTopLeftRadius: 0 }, animatedStyle];
  return closure_6(ReanimatedRexportDefault.View, obj4);
}
const View = react_native.View;
const YOU_BAR_HEIGHT = YouBarConstants.YOU_BAR_HEIGHT;
const YOU_BAR_SPRING_CONFIG = YouBarConstants.YOU_BAR_SPRING_CONFIG;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { youRowFloating: obj2 };
obj2 = { borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED, borderRadius: nativeDefault.modules.mobile.YOU_BAR_BORDER_RADIUS, borderTopLeftRadius: YOU_BAR_HEIGHT / 2, borderBottomLeftRadius: YOU_BAR_HEIGHT / 2 };
let closure_8 = createStyles.createStyles(obj);
const __initData = { code: "function YouBarBackgroundTsx1(){const{withSpring,questDockAnimatedBorderRadius,YOU_BAR_SPRING_CONFIG,questDockAnimatedBottomLeftRadius}=this.__closure;return{borderTopRightRadius:withSpring(questDockAnimatedBorderRadius.get(),YOU_BAR_SPRING_CONFIG),borderTopLeftRadius:withSpring(questDockAnimatedBorderRadius.get(),YOU_BAR_SPRING_CONFIG),borderBottomLeftRadius:withSpring(questDockAnimatedBottomLeftRadius.get(),YOU_BAR_SPRING_CONFIG)};}" };
const memoResult = react.memo(function YouBarBackground(barWidth) {
  let avatarSize;
  let hasNameplate;
  let isLargeAvatar;
  let tmp3Result;
  barWidth = barWidth.barWidth;
  ({ hasNameplate, isLargeAvatar, avatarSize } = barWidth);
  const obj = useToken2;
  let token = obj.useToken(nativeDefault.colors.MOBILE_FLOATINGBAR_BACKGROUND);
  const useToken = useToken2.useToken;
  useToken2;
  if (hasNameplate) {
    token = useToken(nativeDefault.colors.MOBILE_FLOATINGBAR_BACKGROUND_NAMEPLATE);
  }
  if (isLargeAvatar) {
    const obj2 = { barWidth, backgroundColor: token, avatarSize };
    tmp3Result = tmp3(YouBarMaskedBackground, obj2);
  } else {
    const obj3 = { barWidth, backgroundColor: token };
    tmp3Result = tmp3(YouBarAnimatedBackground, obj3);
  }
  return tmp3Result;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarBackground.tsx");

export default memoResult;
