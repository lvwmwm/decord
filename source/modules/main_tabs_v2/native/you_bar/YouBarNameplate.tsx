// Module ID: 14985
// Function ID: 112853
// Dependencies: []

// Module 14985
const YOU_BAR_SPRING_CONFIG = arg1(dependencyMap[1]).YOU_BAR_SPRING_CONFIG;
const jsx = arg1(dependencyMap[2]).jsx;
let closure_5 = { code: "function YouBarNameplateTsx1(){const{withSpring,isQuestRendered,questDockAnimatedBorderRadius,borderRadius,YOU_BAR_SPRING_CONFIG}=this.__closure;return{borderTopRightRadius:withSpring(isQuestRendered?questDockAnimatedBorderRadius.get():borderRadius,YOU_BAR_SPRING_CONFIG)};}" };
const importAllResult = importAll(dependencyMap[0]);
const memoResult = importAll(dependencyMap[0]).memo(function YouBarNameplate(isQuestRendered) {
  let barWidth;
  let nameplate;
  isQuestRendered = isQuestRendered.isQuestRendered;
  const arg1 = isQuestRendered;
  const avatarSize = isQuestRendered.avatarSize;
  ({ nameplate, barWidth } = isQuestRendered);
  let obj = arg1(dependencyMap[3]);
  const token = obj.useToken(importDefault(dependencyMap[4]).modules.mobile.YOU_BAR_BORDER_RADIUS);
  const importDefault = token;
  const tmp2 = importDefault(dependencyMap[5])(token);
  const dependencyMap = tmp2;
  let obj1 = arg1(dependencyMap[6]);
  const fn = function l() {
    const obj = {};
    if (isQuestRendered) {
      let value = tmp2.get();
    } else {
      value = token;
    }
    obj.borderTopRightRadius = isQuestRendered(tmp2[7]).withSpring(value, closure_3);
    return obj;
  };
  obj = { withSpring: arg1(dependencyMap[7]).withSpring, isQuestRendered, questDockAnimatedBorderRadius: tmp2, borderRadius: token, YOU_BAR_SPRING_CONFIG };
  fn.__closure = obj;
  fn.__workletHash = 17156260157738;
  fn.__initData = closure_5;
  const animatedStyle = obj1.useAnimatedStyle(fn);
  obj = {};
  obj1 = { left: avatarSize };
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
  const obj2 = { "Bool(true)": "ERROR", "Bool(true)": "ERROR", "Bool(true)": "NOT_RESPONDER", nameplate };
  obj.children = jsx(importDefault(dependencyMap[8]), obj2);
  return jsx(importDefault(dependencyMap[6]).View, obj);
});
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarNameplate.tsx");

export default memoResult;
