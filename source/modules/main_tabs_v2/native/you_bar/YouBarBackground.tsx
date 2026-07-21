// Module ID: 14984
// Function ID: 112848
// Name: YouBarMaskedBackground
// Dependencies: []

// Module 14984 (YouBarMaskedBackground)
function YouBarMaskedBackground(barWidth) {
  let avatarSize;
  let backgroundColor;
  barWidth = barWidth.barWidth;
  ({ avatarSize, backgroundColor } = barWidth);
  const diff = avatarSize - 4;
  let obj = { style: { position: "absolute" } };
  obj = { style: obj };
  obj = { width: barWidth, height: YOU_BAR_HEIGHT, backgroundColor: "transparent" };
  const obj1 = { bottom: YOU_BAR_HEIGHT / 2 - 1 };
  const tmp = callback3();
  const items = [callback(View, { style: obj1 }), callback(View, { style: { top: YOU_BAR_HEIGHT / 2, left: diff - 1 } }), ];
  const obj3 = { style: obj4 };
  const obj2 = { top: YOU_BAR_HEIGHT / 2, left: diff - 1 };
  const obj4 = { top: YOU_BAR_HEIGHT / 2, left: diff - 8, height: YOU_BAR_HEIGHT / 2 };
  const tmp3 = importDefault(dependencyMap[6]);
  const tmp4 = importDefault(dependencyMap[7]);
  const obj8 = importDefault(dependencyMap[8])("#000000");
  const items1 = [importDefault(dependencyMap[8])("#000000").alpha(0).hex(), "#000000"];
  obj3.colors = items1;
  obj3.start = { max: -536870861, guildId: -299892737 };
  obj3.end = {};
  obj3.locations = ["Text", "lc"];
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
  let obj = arg1(dependencyMap[9]);
  const token = obj.useToken(importDefault(dependencyMap[5]).modules.mobile.YOU_BAR_BORDER_RADIUS);
  const tmp3 = importDefault(dependencyMap[10])(token);
  const arg1 = tmp3;
  const tmp4 = importDefault(dependencyMap[10])(token, YOU_BAR_HEIGHT / 2);
  const importDefault = tmp4;
  const tmp = callback3();
  const fn = function u() {
    const obj = { borderTopRightRadius: tmp3(closure_2[12]).withSpring(tmp3.get(), closure_5) };
    const obj2 = tmp3(closure_2[12]);
    obj.borderTopLeftRadius = tmp3(closure_2[12]).withSpring(tmp3.get(), closure_5);
    const obj3 = tmp3(closure_2[12]);
    obj.borderBottomLeftRadius = tmp3(closure_2[12]).withSpring(tmp4.get(), closure_5);
    return obj;
  };
  obj = { withSpring: arg1(dependencyMap[12]).withSpring, questDockAnimatedBorderRadius: tmp3, YOU_BAR_SPRING_CONFIG, questDockAnimatedBottomLeftRadius: tmp4 };
  fn.__closure = obj;
  fn.__workletHash = 14606701040012;
  fn.__initData = closure_9;
  const animatedStyle = arg1(dependencyMap[11]).useAnimatedStyle(fn);
  const style = [{ position: "absolute" }, tmp.youRowFloating, , , ];
  obj = { width: barWidth, height: YOU_BAR_HEIGHT, backgroundColor };
  style[2] = obj;
  style[3] = { GET_SOUNDBOARD_SOUNDS: -536870861, DISCOVERY_SETUP_SUCCESS_MODAL: -299892737 };
  style[4] = animatedStyle;
  return callback(importDefault(dependencyMap[11]).View, { style });
}
const View = arg1(dependencyMap[1]).View;
const tmp2 = arg1(dependencyMap[2]);
const YOU_BAR_HEIGHT = tmp2.YOU_BAR_HEIGHT;
const YOU_BAR_SPRING_CONFIG = tmp2.YOU_BAR_SPRING_CONFIG;
const importAllResult = importAll(dependencyMap[0]);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
const tmp3 = arg1(dependencyMap[3]);
let obj = {};
obj = { borderWidth: 1, borderColor: importDefault(dependencyMap[5]).colors.BORDER_MUTED, borderRadius: importDefault(dependencyMap[5]).modules.mobile.YOU_BAR_BORDER_RADIUS, borderTopLeftRadius: YOU_BAR_HEIGHT / 2, borderBottomLeftRadius: YOU_BAR_HEIGHT / 2 };
obj.youRowFloating = obj;
let closure_8 = arg1(dependencyMap[4]).createStyles(obj);
let closure_9 = { code: "function YouBarBackgroundTsx1(){const{withSpring,questDockAnimatedBorderRadius,YOU_BAR_SPRING_CONFIG,questDockAnimatedBottomLeftRadius}=this.__closure;return{borderTopRightRadius:withSpring(questDockAnimatedBorderRadius.get(),YOU_BAR_SPRING_CONFIG),borderTopLeftRadius:withSpring(questDockAnimatedBorderRadius.get(),YOU_BAR_SPRING_CONFIG),borderBottomLeftRadius:withSpring(questDockAnimatedBottomLeftRadius.get(),YOU_BAR_SPRING_CONFIG)};}" };
const obj2 = arg1(dependencyMap[4]);
const memoResult = importAllResult.memo(function YouBarBackground(barWidth) {
  let avatarSize;
  let hasNameplate;
  let isLargeAvatar;
  barWidth = barWidth.barWidth;
  ({ hasNameplate, isLargeAvatar, avatarSize } = barWidth);
  let obj = arg1(dependencyMap[9]);
  let token = obj.useToken(importDefault(dependencyMap[5]).colors.MOBILE_FLOATINGBAR_BACKGROUND);
  if (hasNameplate) {
    token = obj2.useToken(importDefault(dependencyMap[5]).colors.MOBILE_FLOATINGBAR_BACKGROUND_NAMEPLATE);
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
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarBackground.tsx");

export default memoResult;
