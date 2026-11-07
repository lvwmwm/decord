// Module ID: 18796
// Function ID: 18797
// Name: YouBarBackground
// Dependencies: [19, 17, 17385, 21, 5140, 575, 7104, 5715, 671, 5724, 17467, 1652, 5761, 2]

// Module 18796 (YouBarBackground)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import _modDef671 from "module_671" /* 671 */;
import _mod1652 from "module_1652" /* 1652 */;
import LinearGradientDefault from "LinearGradient" /* 5715 */;
import useToken2 from "useToken" /* 5724 */;
import spring_spring from "spring/spring" /* 5761 */;
import _modDef7104 from "module_7104" /* 7104 */;
import useQuestDockAnimatedBorderRadiusDefault from "useQuestDockAnimatedBorderRadius" /* 17467 */;
import react from "react" /* 19 */;
import YouBarConstants from "YouBarConstants" /* 17385 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5140 */;
import size_mod from "module_2" /* 2 */;

let obj1, tmp2;

let metroImportDefault;
let metroRequire;
let obj2;
let tmp3;
const _modDef1652 = tmp3(1652);
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
  const tmp3 = _modDef7104;
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
function YouBarAnimatedBackground(arg0) {
  let backgroundColor;
  let barWidth;
  let condensedReason;
  let items2;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp9;
  ({ barWidth, backgroundColor, condensedReason } = arg0);
  const tmp = closure_8();
  let obj = useToken2;
  const token = obj.useToken(nativeDefault.modules.mobile.YOU_BAR_BORDER_RADIUS);
  const tmp5 = useQuestDockAnimatedBorderRadiusDefault(token);
  const items = [closure_10, condensedReason, , , , , ];
  const tmp7 = useQuestDockAnimatedBorderRadiusDefault(YOU_BAR_HEIGHT / 2, token);
  const useAnimatedStyle = _mod1652.useAnimatedStyle;
  _mod1652;
  items[2] = spring_spring.withSpring;
  items[3] = tmp5;
  items[4] = YOU_BAR_SPRING_CONFIG;
  items[5] = tmp7;
  items[6] = token;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  [tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15] = items;
  const tmp6 = YOU_BAR_HEIGHT;
  class YouBarBackgroundTsx1 {
    constructor() {
      if ("quest-bar" === closure_0) {
        obj1 = { borderTopRightRadius: null, borderTopLeftRadius: null, borderBottomLeftRadius: null };
        tmp2 = closure_1;
        tmp3 = closure_2;
        tmp4 = closure_3;
        obj1.borderTopRightRadius = closure_1(closure_2.get(), closure_3);
        obj1.borderTopLeftRadius = closure_1(closure_2.get(), closure_3);
        tmp5 = closure_4;
        obj1.borderBottomLeftRadius = closure_1(closure_4.get(), closure_3);
        obj = obj1;
      } else {
        obj = { borderTopRightRadius: null, borderTopLeftRadius: null, borderBottomLeftRadius: null, borderBottomRightRadius: null };
        tmp = closure_5;
        obj.borderTopRightRadius = closure_5;
        obj.borderTopLeftRadius = closure_5;
        obj.borderBottomLeftRadius = closure_5;
        obj.borderBottomRightRadius = closure_5;
      }
      return obj;
    }
  }
  const items1 = [tmp10, tmp11, tmp12, tmp13, tmp14, tmp15];
  YouBarBackgroundTsx1.__closure = items1;
  YouBarBackgroundTsx1.__workletHash = 17537455487253;
  YouBarBackgroundTsx1.__initData = tmp9;
  const animatedStyle = useAnimatedStyle(YouBarBackgroundTsx1);
  let obj2 = { style: items2 };
  items2 = [{ position: "absolute" }, tmp.youRowFloating, { width: barWidth, height: tmp6, backgroundColor }, { borderTopRightRadius: 0, borderTopLeftRadius: 0 }, animatedStyle];
  return metroRequire(_modDef1652.View, obj2);
}
const View = react_native.View;
const YOU_BAR_HEIGHT = YouBarConstants.YOU_BAR_HEIGHT;
const YOU_BAR_SPRING_CONFIG = YouBarConstants.YOU_BAR_SPRING_CONFIG;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { youRowFloating: obj2 };
obj2 = { borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED, borderRadius: nativeDefault.modules.mobile.YOU_BAR_BORDER_RADIUS, borderTopLeftRadius: YOU_BAR_HEIGHT / 2, borderBottomLeftRadius: YOU_BAR_HEIGHT / 2 };
let closure_8 = createStyles.createStyles(obj);
let closure_10 = { code: "(function YouBarBackgroundTsx1(){let[condensedReason,withSpring,questDockAnimatedBorderRadius,YOU_BAR_SPRING_CONFIG,questDockAnimatedBottomLeftRadius,borderRadius]=this.__closure;if(condensedReason==='quest-bar'){return{borderTopRightRadius:withSpring(questDockAnimatedBorderRadius.get(),YOU_BAR_SPRING_CONFIG),borderTopLeftRadius:withSpring(questDockAnimatedBorderRadius.get(),YOU_BAR_SPRING_CONFIG),borderBottomLeftRadius:withSpring(questDockAnimatedBottomLeftRadius.get(),YOU_BAR_SPRING_CONFIG)};}return{borderTopRightRadius:borderRadius,borderTopLeftRadius:borderRadius,borderBottomLeftRadius:borderRadius,borderBottomRightRadius:borderRadius};})" };
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
