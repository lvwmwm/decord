// Module ID: 14998
// Function ID: 112960
// Dependencies: []

// Module 14998
const View = arg1(dependencyMap[1]).View;
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = arg1(dependencyMap[3]).YOU_BAR_GRADIENT_EXTRA_HEIGHT;
const GUILD_LIST_WIDTH = arg1(dependencyMap[4]).GUILD_LIST_WIDTH;
const importAllResult = importAll(dependencyMap[0]);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = arg1(dependencyMap[5]));
const tmp2 = arg1(dependencyMap[5]);
let closure_10 = arg1(dependencyMap[6]).createStyles({ container: { channelId: "<string:3082955202>", selectedAnswerIds: "<string:103629460>", submitting: "<string:3630497793>", editing: "<string:961609729>" } });
let closure_11 = { code: "function YouBarFloatingShadeTsx1(){const{gradientHeight,drawerWidth}=this.__closure;return{height:gradientHeight,opacity:1,width:drawerWidth};}" };
const obj2 = arg1(dependencyMap[6]);
const memoResult = importAllResult.memo(function YouBarFloatingShade() {
  const tmp = callback3();
  let obj = arg1(dependencyMap[10]);
  const youBarTotalHeight = obj.useYouBarTotalHeight();
  const sum = youBarTotalHeight + closure_5;
  const arg1 = sum;
  let width = importDefault(dependencyMap[11])().width;
  if (importDefault(dependencyMap[12])().isChatBesideChannelList) {
    width = tmp4 + GUILD_LIST_WIDTH;
  }
  const importDefault = width;
  let obj1 = arg1(dependencyMap[14]);
  const fn = function v() {
    return { height: sum, opacity: 1, width };
  };
  obj = { gradientHeight: sum, drawerWidth: width };
  fn.__closure = obj;
  fn.__workletHash = 7609004216185;
  fn.__initData = closure_11;
  const animatedStyle = obj1.useAnimatedStyle(fn);
  const gradientValue = arg1(dependencyMap[15]).useGradientValue(arg1(dependencyMap[15]).GradientPercentage.END);
  const obj4 = arg1(dependencyMap[15]);
  const token = arg1(dependencyMap[8]).useToken(importDefault(dependencyMap[9]).colors.BACKGROUND_BASE_LOWER);
  let tmp9 = function useYouBarGradientBackground() {
    const items = [closure_4];
    const stateFromStores = sum(closure_2[7]).useStateFromStores(items, () => gradientPreset.gradientPreset);
    const obj = sum(closure_2[7]);
    let token = null;
    if (null != stateFromStores) {
      token = obj2.useToken(width(closure_2[9]).colors.MOBILE_FLOATINGBAR_BACKGROUND_SCRIM);
    }
    return token;
  }();
  if (null == tmp9) {
    tmp9 = token;
    if (null != gradientValue) {
      tmp9 = gradientValue;
    }
  }
  const obj5 = arg1(dependencyMap[8]);
  const hex2rgbResult = arg1(dependencyMap[16]).hex2rgb(tmp9, 1);
  let str = "transparent";
  let str2 = "transparent";
  if (null != hex2rgbResult) {
    str2 = hex2rgbResult;
  }
  const obj6 = arg1(dependencyMap[16]);
  const hex2rgbResult1 = arg1(dependencyMap[16]).hex2rgb(tmp9, 0);
  if (null != hex2rgbResult1) {
    str = hex2rgbResult1;
  }
  obj = {};
  const items = [tmp.container, animatedStyle, { height: youBarTotalHeight, opacity: 0 }];
  const items1 = [callback(View, { style: items, pointerEvents: "box-only" }), , ];
  const items2 = [tmp.container, ];
  obj1 = { bottom: sum / 2, height: sum / 2, width };
  items2[1] = obj1;
  const items3 = [str, str2];
  items1[1] = callback(importDefault(dependencyMap[17]), { style: items2, colors: items3, start: {}, end: {}, locations: ["replace", "then"], pointerEvents: "none" });
  const items4 = [tmp.container, ];
  const obj2 = { width, height: sum / 2, backgroundColor: str2 };
  items4[1] = obj2;
  items1[2] = callback(View, { style: items4 });
  obj.children = items1;
  return callback2(closure_8, obj);
});
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarFloatingShade.tsx");

export default memoResult;
