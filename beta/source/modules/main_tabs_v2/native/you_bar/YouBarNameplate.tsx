// Module ID: 16021
// Function ID: 16022
// Name: YouBarNameplate
// Dependencies: [19, 4825, 14627, 21, 4531, 576, 14713, 504, 4566, 5280, 8281, 2]

// Module 16021 (YouBarNameplate)
import Fragment from "Fragment" /* 21 */;
import spring from "spring" /* 5280 */;
import YouBarConstants from "YouBarConstants" /* 14627 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import size from "module_2" /* 2 */;

let dependencyMap;

const YOU_BAR_SPRING_CONFIG = YouBarConstants.YOU_BAR_SPRING_CONFIG;
const jsx = Fragment.jsx;
const __initData = { code: "function YouBarNameplateTsx1(){const{withSpring,isQuestRendered,questDockAnimatedBorderRadius,borderRadius,YOU_BAR_SPRING_CONFIG}=this.__closure;return{borderTopRightRadius:withSpring(isQuestRendered?questDockAnimatedBorderRadius.get():borderRadius,YOU_BAR_SPRING_CONFIG)};}" };
const memoResult = react.memo(function YouBarNameplate(isQuestRendered) {
  let barWidth;
  let closure_2;
  let nameplate;
  let num;
  isQuestRendered = isQuestRendered.isQuestRendered;
  const avatarSize = isQuestRendered.avatarSize;
  let token;
  dependencyMap = undefined;
  ({ nameplate, barWidth } = isQuestRendered);
  let obj = isQuestRendered(4531);
  const tmp2 = token;
  token = obj.useToken(token(576).modules.mobile.YOU_BAR_BORDER_RADIUS);
  const tmp4 = token(14713)(token);
  dependencyMap = tmp4;
  const items = [AccessibilityStore];
  const obj2 = isQuestRendered(504);
  const stateFromStores = obj2.useStateFromStores(items, () => AccessibilityStore.animateYouBarNameplate);
  const fn = function p() {
    let value;
    const withSpring = spring.withSpring;
    spring;
    if (isQuestRendered) {
      value = closure_2.get();
    } else {
      value = token;
    }
    const obj = { borderTopRightRadius: withSpring(value, YOU_BAR_SPRING_CONFIG) };
    return obj;
  };
  const obj3 = isQuestRendered(4566);
  fn.__closure = { withSpring: isQuestRendered(5280).withSpring, isQuestRendered, questDockAnimatedBorderRadius: tmp4, borderRadius: token, YOU_BAR_SPRING_CONFIG };
  fn.__workletHash = 17156260157738;
  fn.__initData = __initData;
  ({ withSpring: isQuestRendered(5280).withSpring, isQuestRendered, questDockAnimatedBorderRadius: tmp4, borderRadius: token, YOU_BAR_SPRING_CONFIG });
  const animatedStyle = obj3.useAnimatedStyle(fn);
  const rect = { position: "absolute", top: 0, left: avatarSize, right: -1, bottom: 0, borderTopRightRadius: num, borderTopLeftRadius: 0, borderBottomRightRadius: token, borderBottomLeftRadius: 0, overflow: "hidden", width: barWidth - avatarSize };
  num = 0;
  const View = token(4566).View;
  if (!isQuestRendered) {
    num = token;
  }
  const items1 = [rect, animatedStyle];
  let str = stateFromStores;
  tmp2(8281);
  if (str) {
    str = "always";
  }
  return <View style={items1} pointerEvents="none">{null}</View>;
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarNameplate.tsx");

export default memoResult;
