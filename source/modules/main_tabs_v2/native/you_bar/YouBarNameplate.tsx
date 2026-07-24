// Module ID: 15159
// Function ID: 115419
// Dependencies: [31, 14047, 33, 3834, 689, 14128, 3991, 4542, 8273, 2]

// Module 15159
import { YOU_BAR_SPRING_CONFIG } from "CONNECTION_BANNER_HEIGHT";
import { jsx } from "jsxProd";
import importAllResult from "result";

const require = arg1;
let closure_5 = { code: "function YouBarNameplateTsx1(){const{withSpring,isQuestRendered,questDockAnimatedBorderRadius,borderRadius,YOU_BAR_SPRING_CONFIG}=this.__closure;return{borderTopRightRadius:withSpring(isQuestRendered?questDockAnimatedBorderRadius.get():borderRadius,YOU_BAR_SPRING_CONFIG)};}" };
const memoResult = require("result").memo(function YouBarNameplate(isQuestRendered) {
  let barWidth;
  let nameplate;
  isQuestRendered = isQuestRendered.isQuestRendered;
  const avatarSize = isQuestRendered.avatarSize;
  ({ nameplate, barWidth } = isQuestRendered);
  let obj = isQuestRendered(3834);
  token = obj.useToken(token(689).modules.mobile.YOU_BAR_BORDER_RADIUS);
  const tmp2 = token(14128)(token);
  const dependencyMap = tmp2;
  let obj1 = isQuestRendered(3991);
  const fn = function l() {
    const obj = {};
    if (isQuestRendered) {
      let value = tmp2.get();
    } else {
      value = token;
    }
    obj.borderTopRightRadius = isQuestRendered(tmp2[7]).withSpring(value, outer1_3);
    return obj;
  };
  obj = { withSpring: isQuestRendered(4542).withSpring, isQuestRendered, questDockAnimatedBorderRadius: tmp2, borderRadius: token, YOU_BAR_SPRING_CONFIG };
  fn.__closure = obj;
  fn.__workletHash = 17156260157738;
  fn.__initData = closure_5;
  const animatedStyle = obj1.useAnimatedStyle(fn);
  obj = {};
  obj1 = { position: "absolute", top: 0, left: avatarSize, right: -1, bottom: 0, borderTopRightRadius: null, borderTopLeftRadius: 0, borderBottomRightRadius: null, borderBottomLeftRadius: 0, overflow: "hidden" };
  let num = 0;
  if (!isQuestRendered) {
    num = token;
  }
  obj1.borderTopRightRadius = num;
  obj1.borderBottomRightRadius = token;
  obj1.width = barWidth - avatarSize;
  const items = [obj1, animatedStyle];
  obj.style = items;
  obj.pointerEvents = "none";
  const obj2 = { nameplate, isFocused: true, animate: false };
  obj.children = jsx(token(8273), { nameplate, isFocused: true, animate: false });
  return jsx(token(3991).View, {});
});
const result = require("jsxProd").fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarNameplate.tsx");

export default memoResult;
