// Module ID: 18747
// Function ID: 18748
// Name: YouBarNameplate
// Dependencies: [19, 5171, 17337, 21, 5754, 575, 17418, 504, 1652, 5791, 9616, 2]

// Module 18747 (YouBarNameplate)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import _mod1652 from "module_1652" /* 1652 */;
import useToken from "useToken" /* 5754 */;
import spring_spring from "spring/spring" /* 5791 */;
import NameplateDefault from "Nameplate" /* 9616 */;
import YouBarConstants from "YouBarConstants" /* 17337 */;
import useQuestDockAnimatedBorderRadiusDefault from "useQuestDockAnimatedBorderRadius" /* 17418 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5171 */;
import size from "module_2" /* 2 */;

const YOU_BAR_SPRING_CONFIG = YouBarConstants.YOU_BAR_SPRING_CONFIG;
const jsx = Fragment.jsx;
let closure_6 = { code: "(function YouBarNameplateTsx1(){let[withSpring,isQuestRendered,questDockAnimatedBorderRadius,borderRadius,YOU_BAR_SPRING_CONFIG]=this.__closure;return{borderTopRightRadius:withSpring(isQuestRendered?questDockAnimatedBorderRadius.get():borderRadius,YOU_BAR_SPRING_CONFIG)};})" };
const memoResult = react.memo(function YouBarNameplate(arg0) {
  let avatarSize;
  let barWidth;
  let isQuestRendered;
  let nameplate;
  let num;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp7;
  let tmp8;
  let tmp9;
  ({ isQuestRendered, avatarSize } = arg0);
  let tmp = dependencyMap;
  ({ nameplate, barWidth } = arg0);
  let obj = useToken;
  const token = obj.useToken(nativeDefault.modules.mobile.YOU_BAR_BORDER_RADIUS);
  const items = [AccessibilityStore];
  const tmp4 = useQuestDockAnimatedBorderRadiusDefault(token);
  const obj2 = get_initialized;
  const stateFromStores = obj2.useStateFromStores(items, () => AccessibilityStore.animateYouBarNameplate);
  const items1 = [closure_6, , , , , ];
  const useAnimatedStyle = _mod1652.useAnimatedStyle;
  _mod1652;
  items1[1] = spring_spring.withSpring;
  items1[2] = isQuestRendered;
  items1[3] = tmp4;
  items1[4] = token;
  items1[5] = YOU_BAR_SPRING_CONFIG;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12] = items1;
  class YouBarNameplateTsx1 {
    constructor() {
      let value;
      const tmp = c0;
      if (c1) {
        value = _undefined.get();
      } else {
        value = c3;
      }
      const obj = { borderTopRightRadius: tmp(value, c4) };
      return obj;
    }
  }
  const items2 = [tmp8, tmp9, tmp10, tmp11, tmp12];
  YouBarNameplateTsx1.__closure = items2;
  YouBarNameplateTsx1.__workletHash = 1217151381395;
  YouBarNameplateTsx1.__initData = tmp7;
  const animatedStyle = useAnimatedStyle(YouBarNameplateTsx1);
  const rect = { position: "absolute", top: 0, left: avatarSize, right: -1, bottom: 0, borderTopRightRadius: num, borderTopLeftRadius: 0, borderBottomRightRadius: token, borderBottomLeftRadius: 0, overflow: "hidden", width: barWidth - avatarSize };
  num = 0;
  const View = tmp2(1652).View;
  if (!isQuestRendered) {
    num = token;
  }
  const items3 = [rect, animatedStyle];
  let str = stateFromStores;
  NameplateDefault;
  if (str) {
    str = "always";
  }
  return <View style={items3} pointerEvents="none">{null}</View>;
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarNameplate.tsx");

export default memoResult;
