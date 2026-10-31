// Module ID: 18444
// Function ID: 18445
// Name: YouBarBackground
// Dependencies: [19, 17, 17062, 21, 5014, 575, 7038, 5587, 671, 5596, 17143, 5095, 5637, 2]

// Module 18444 (YouBarBackground)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import _modDef671 from "module_671" /* 671 */;
import LinearGradientDefault from "LinearGradient" /* 5587 */;
import useToken2 from "useToken" /* 5596 */;
import spring from "spring" /* 5637 */;
import _modDef7038 from "module_7038" /* 7038 */;
import react from "react" /* 19 */;
import YouBarConstants from "YouBarConstants" /* 17062 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap, obj1, tmp2, tmp5;

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
  const tmp3 = _modDef7038;
  items[0] = metroRequire(View, obj3);
  const obj4 = { style: { position: "absolute", top: YOU_BAR_HEIGHT / 2, left: diff - 1, right: 0, bottom: 0, backgroundColor: "black" } };
  items[1] = metroRequire(View, obj4);
  const obj5 = { style: size1, colors: items1, start: { x: 0, y: 0 }, end: { x: 1, y: 0 }, locations: [0, 1], pointerEvents: "none" };
  size1 = { position: "absolute", top: YOU_BAR_HEIGHT / 2, width: 8, left: diff - 8, height: YOU_BAR_HEIGHT / 2 };
  const tmp4 = LinearGradientDefault;
  items1 = [, ];
  const obj9 = _modDef671("#000000");
  const alphaResult = obj9.alpha(0);
  items1[0] = alphaResult.hex();
  items1[1] = "#000000";
  items[2] = metroRequire(tmp4, obj5);
  obj6 = { style: items2 };
  items2 = [tmp.youRowFloating, { width: barWidth, height: YOU_BAR_HEIGHT, backgroundColor }];
  return metroRequire(tmp3, obj);
}
function YouBarAnimatedBackground(condensedReason) {
  let backgroundColor;
  let barWidth;
  let closure_2;
  let closure_3;
  let items;
  condensedReason = condensedReason.condensedReason;
  let token;
  ({ barWidth, backgroundColor } = condensedReason);
  const tmp = closure_8();
  let obj = condensedReason(5596);
  token = obj.useToken(token(575).modules.mobile.YOU_BAR_BORDER_RADIUS);
  const tmp3 = token(17143)(token);
  dependencyMap = tmp3;
  const tmp4 = token(17143)(YOU_BAR_HEIGHT / 2, token);
  View = tmp4;
  let obj2 = condensedReason(5095);
  class R {
    constructor() {
      if ("quest-bar" === condensedReason) {
        obj1 = { borderTopRightRadius: null, borderTopLeftRadius: null, borderBottomLeftRadius: null };
        tmp2 = closure_0;
        tmp3 = closure_2;
        obj3 = closure_0(closure_2[12]);
        tmp4 = closure_2;
        tmp5 = YOU_BAR_SPRING_CONFIG;
        obj1.borderTopRightRadius = obj3.withSpring(closure_2.get(), YOU_BAR_SPRING_CONFIG);
        obj4 = closure_0(closure_2[12]);
        obj1.borderTopLeftRadius = obj4.withSpring(closure_2.get(), YOU_BAR_SPRING_CONFIG);
        obj5 = closure_0(closure_2[12]);
        tmp6 = closure_3;
        obj1.borderBottomLeftRadius = obj5.withSpring(closure_3.get(), YOU_BAR_SPRING_CONFIG);
        obj = obj1;
      } else {
        obj = { borderTopRightRadius: null, borderTopLeftRadius: null, borderBottomLeftRadius: null, borderBottomRightRadius: null };
        tmp = closure_1;
        obj.borderTopRightRadius = closure_1;
        obj.borderTopLeftRadius = closure_1;
        obj.borderBottomLeftRadius = closure_1;
        obj.borderBottomRightRadius = closure_1;
      }
      return obj;
    }
  }
  let obj3 = { condensedReason, withSpring: condensedReason(5637).withSpring, questDockAnimatedBorderRadius: tmp3, YOU_BAR_SPRING_CONFIG, questDockAnimatedBottomLeftRadius: tmp4, borderRadius: token };
  R.__closure = obj3;
  R.__workletHash = 2962516190764;
  R.__initData = __initData;
  const animatedStyle = obj2.useAnimatedStyle(R);
  let obj4 = { style: items };
  items = [{ position: "absolute" }, tmp.youRowFloating, { width: barWidth, height: YOU_BAR_HEIGHT, backgroundColor }, { borderTopRightRadius: 0, borderTopLeftRadius: 0 }, animatedStyle];
  return closure_6(token(5095).View, obj4);
}
let View = react_native.View;
const YOU_BAR_HEIGHT = YouBarConstants.YOU_BAR_HEIGHT;
const YOU_BAR_SPRING_CONFIG = YouBarConstants.YOU_BAR_SPRING_CONFIG;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { youRowFloating: obj2 };
obj2 = { borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED, borderRadius: nativeDefault.modules.mobile.YOU_BAR_BORDER_RADIUS, borderTopLeftRadius: YOU_BAR_HEIGHT / 2, borderBottomLeftRadius: YOU_BAR_HEIGHT / 2 };
let closure_8 = createStyles.createStyles(obj);
const __initData = { code: "function YouBarBackgroundTsx1(){const{condensedReason,withSpring,questDockAnimatedBorderRadius,YOU_BAR_SPRING_CONFIG,questDockAnimatedBottomLeftRadius,borderRadius}=this.__closure;if(condensedReason==='quest-bar'){return{borderTopRightRadius:withSpring(questDockAnimatedBorderRadius.get(),YOU_BAR_SPRING_CONFIG),borderTopLeftRadius:withSpring(questDockAnimatedBorderRadius.get(),YOU_BAR_SPRING_CONFIG),borderBottomLeftRadius:withSpring(questDockAnimatedBottomLeftRadius.get(),YOU_BAR_SPRING_CONFIG)};}return{borderTopRightRadius:borderRadius,borderTopLeftRadius:borderRadius,borderBottomLeftRadius:borderRadius,borderBottomRightRadius:borderRadius};}" };
const memoResult = react.memo(function YouBarBackground(arg0) {
  let avatarSize;
  let barWidth;
  let condensedReason;
  let hasNameplate;
  let tmp6;
  ({ barWidth, condensedReason } = arg0);
  ({ hasNameplate, avatarSize } = arg0);
  const obj = useToken2;
  const token = obj.useToken(nativeDefault.colors.MOBILE_FLOATINGBAR_BACKGROUND);
  const useToken = useToken2.useToken;
  let token1 = token;
  useToken2;
  if (hasNameplate) {
    token1 = useToken(nativeDefault.colors.MOBILE_FLOATINGBAR_BACKGROUND_NAMEPLATE);
  }
  if (null == condensedReason) {
    const obj2 = { barWidth, backgroundColor: token1, avatarSize };
    tmp6 = metroRequire(YouBarMaskedBackground, obj2);
  } else {
    const obj3 = { barWidth, backgroundColor: token1, condensedReason };
    tmp6 = metroRequire(YouBarAnimatedBackground, obj3);
  }
  return tmp6;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarBackground.tsx");

export default memoResult;
