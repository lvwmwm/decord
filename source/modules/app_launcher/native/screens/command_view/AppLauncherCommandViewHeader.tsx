// Module ID: 11266
// Function ID: 87665
// Name: DEFAULT_CONTENT_PADDING
// Dependencies: []
// Exports: AppLauncherCommandViewHeader

// Module 11266 (DEFAULT_CONTENT_PADDING)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const tmp2 = arg1(dependencyMap[2]);
const DEFAULT_CONTENT_PADDING = tmp2.DEFAULT_CONTENT_PADDING;
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
const sum = arg1(dependencyMap[4]).BACK_BUTTON_SIZE + 2 * DEFAULT_CONTENT_PADDING + 36 + 4;
let closure_8 = sum - 56;
let obj = arg1(dependencyMap[5]);
obj = { headerContainer: obj };
obj = { <string:3246022526>: false, <string:1764207697>: false, <string:3679956194>: false, <string:944643202>: false, <string:1602118752>: false, <string:4249993594>: false, <string:1366180097>: false, padding: DEFAULT_CONTENT_PADDING };
const tmp3 = arg1(dependencyMap[3]);
obj.loadingHeaderContainer = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOWEST };
const obj2 = { "Bool(false)": 7471103, "Bool(false)": 822083584, "Bool(false)": 1958505087, "Bool(false)": 1069815955, backgroundColor: tmp2.SCREEN_BACKGROUND_COLOR, borderRadius: importDefault(dependencyMap[6]).radii.xl + 4 };
obj.appIconMask = obj2;
const obj3 = { "Null": "NR", "Null": "__RRWEB_EXCLUDE_SHADOW_DOM__", borderRadius: importDefault(dependencyMap[6]).radii.xl };
obj.appIcon = obj3;
const obj1 = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOWEST };
obj.loadingIcon = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_MOD_MUTED };
obj.appSmallName = { "Null": "flex", "Null": "row", "Null": 16, "Null": "center" };
const items = [{ rotate: "180deg" }];
obj.icon = { transform: items };
obj.headerBannerOverlay = { "Null": 1124139009, "Null": 135025, "Bool(false)": 135024, "Bool(false)": 93131, "Bool(false)": 30006081, "Bool(false)": -1556020992 };
const styles = obj.createStyles(obj);
let closure_10 = { code: "function AppLauncherCommandViewHeaderTsx1(){const{interpolate,scrollOffsetY,TOTAL_SCROLL_RANGE}=this.__closure;return{opacity:interpolate(scrollOffsetY.get(),[0,TOTAL_SCROLL_RANGE],[0,1],'clamp'),transform:[{translateY:interpolate(scrollOffsetY.get(),[0,TOTAL_SCROLL_RANGE],[12,0],'clamp')}]};}" };
let closure_11 = { code: "function AppLauncherCommandViewHeaderTsx2(){const{APP_ICON_SIZE,APP_ICON_BORDER_WIDTH,DEFAULT_CONTENT_PADDING,interpolate,scrollOffsetY,TOTAL_SCROLL_RANGE}=this.__closure;return{transform:[{translateX:-APP_ICON_SIZE/2-APP_ICON_BORDER_WIDTH+DEFAULT_CONTENT_PADDING},{translateY:interpolate(scrollOffsetY.get(),[0,TOTAL_SCROLL_RANGE],[0,-APP_ICON_SIZE/2],'clamp')},{scale:interpolate(scrollOffsetY.get(),[0,TOTAL_SCROLL_RANGE],[1,0],'clamp')}],opacity:interpolate(scrollOffsetY.get(),[0,TOTAL_SCROLL_RANGE],[1,0],'clamp')};}" };
let closure_12 = { code: "function AppLauncherCommandViewHeaderTsx3(){const{interpolate,scrollOffsetY,TOTAL_SCROLL_RANGE}=this.__closure;return{opacity:interpolate(scrollOffsetY.get(),[0,TOTAL_SCROLL_RANGE],[0,0.5],'clamp')};}" };
const obj4 = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_MOD_MUTED };
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/app_launcher/native/screens/command_view/AppLauncherCommandViewHeader.tsx");

export const COLLAPSED_HEADER_HEIGHT = 56;
export const EXPANDED_HEADER_TOTAL_CONSUMED_SPACE_IN_PARENT = sum + -16;
export const useStyles = styles;
export const AppLauncherCommandViewHeader = function AppLauncherCommandViewHeader(onPress) {
  let command;
  let scrollOffsetY;
  ({ command, scrollOffsetY } = onPress);
  const arg1 = scrollOffsetY;
  const section = onPress.section;
  const importDefault = section;
  const tmp = styles();
  const items = [section];
  const memo = React.useMemo(() => {
    let application;
    if (null != section) {
      application = section.application;
    }
    return scrollOffsetY(closure_2[7]).getAppLauncherIconSource(application);
  }, items);
  let obj = arg1(dependencyMap[8]);
  class A {
    constructor() {
      obj = {};
      obj2 = scrollOffsetY(closure_2[8]);
      items = [0.229];
      items[1] = closure_8;
      obj.opacity = obj2.interpolate(scrollOffsetY.get(), items, ["replace", "then"], "clamp");
      obj = {};
      obj4 = scrollOffsetY(closure_2[8]);
      items1 = [0.229];
      items1[1] = closure_8;
      obj.translateY = obj4.interpolate(scrollOffsetY.get(), items1, [null, null], "clamp");
      items2 = [];
      items2[0] = obj;
      obj.transform = items2;
      return obj;
    }
  }
  obj = { interpolate: arg1(dependencyMap[8]).interpolate, scrollOffsetY, TOTAL_SCROLL_RANGE: closure_8 };
  A.__closure = obj;
  A.__workletHash = 15596175827193;
  A.__initData = closure_10;
  const animatedStyle = obj.useAnimatedStyle(A);
  let obj2 = arg1(dependencyMap[8]);
  class E {
    constructor() {
      obj = {};
      obj = { translateX: -40 + closure_5 };
      items = [, , ];
      items[0] = obj;
      obj1 = {};
      obj4 = scrollOffsetY(closure_2[8]);
      items1 = [0.229];
      items1[1] = closure_8;
      items2 = [0.229];
      items2[1] = -36;
      obj1.translateY = obj4.interpolate(scrollOffsetY.get(), items1, items2, "clamp");
      items[1] = obj1;
      obj2 = {};
      obj6 = scrollOffsetY(closure_2[8]);
      items3 = [0.229];
      items3[1] = closure_8;
      obj2.scale = obj6.interpolate(scrollOffsetY.get(), items3, [], "clamp");
      items[2] = obj2;
      obj.transform = items;
      obj7 = scrollOffsetY(closure_2[8]);
      items4 = [0.229];
      items4[1] = closure_8;
      obj.opacity = obj7.interpolate(scrollOffsetY.get(), items4, [], "clamp");
      return obj;
    }
  }
  obj = { "Bool(false)": "<string:1912603304>", "Bool(false)": "values", DEFAULT_CONTENT_PADDING, interpolate: arg1(dependencyMap[8]).interpolate, scrollOffsetY, TOTAL_SCROLL_RANGE: closure_8 };
  E.__closure = obj;
  E.__workletHash = 13563524587234;
  E.__initData = closure_11;
  const animatedStyle1 = obj2.useAnimatedStyle(E);
  let obj4 = arg1(dependencyMap[8]);
  class N {
    constructor() {
      obj = {};
      obj2 = scrollOffsetY(closure_2[8]);
      items = [0.229];
      items[1] = closure_8;
      obj.opacity = obj2.interpolate(scrollOffsetY.get(), items, [null, null], "clamp");
      return obj;
    }
  }
  N.__closure = { interpolate: arg1(dependencyMap[8]).interpolate, scrollOffsetY, TOTAL_SCROLL_RANGE: closure_8 };
  N.__workletHash = 2637023147700;
  N.__initData = closure_12;
  const animatedStyle2 = obj4.useAnimatedStyle(N);
  let obj6 = arg1(dependencyMap[9]);
  const token = obj6.useToken(importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOW);
  let tmp8 = memo;
  const obj1 = { interpolate: arg1(dependencyMap[8]).interpolate, scrollOffsetY, TOTAL_SCROLL_RANGE: closure_8 };
  if ("number" !== typeof memo) {
    let uri;
    if (null != memo) {
      uri = memo.uri;
    }
    tmp8 = uri;
  }
  let str = "";
  if (null != token) {
    str = token;
  }
  const tmp7 = importDefault(dependencyMap[10]);
  if (null != memo) {
    obj2 = { style: tmp.appIcon, source: memo };
    let tmp14 = callback(importDefault(dependencyMap[11]), obj2);
  } else {
    const obj3 = {};
    const items1 = [, ];
    ({ appIcon: arr2[0], loadingIcon: arr2[1] } = tmp);
    obj3.style = items1;
    tmp14 = callback(View, obj3);
  }
  obj4 = {};
  const items2 = [tmp.headerContainer, ];
  if (null == command) {
    let prop = tmp.loadingHeaderContainer;
  } else {
    prop = { backgroundColor: tmp7Result };
  }
  items2[1] = prop;
  obj4.style = items2;
  const items3 = [tmp.headerBannerOverlay, animatedStyle2];
  const items4 = [callback(importDefault(dependencyMap[8]).View, { style: items3 }), callback(importDefault(dependencyMap[4]), { onPress: onPress.onPressBack }), , , ];
  const obj5 = { y: 0, isArray: 29.317, "Null": 10, "Null": 199, "Null": "END" };
  const items5 = [tmp.appSmallName, animatedStyle];
  obj5.style = items5;
  let displayName;
  if (null != command) {
    displayName = command.displayName;
  }
  obj5.children = displayName;
  items4[2] = callback(arg1(dependencyMap[12]).Text, obj5);
  items4[3] = callback(arg1(dependencyMap[13]).Spacer, { size: 32 });
  obj6 = { style: items6 };
  const items6 = [tmp.appIconMask, animatedStyle1];
  obj6.children = tmp14;
  items4[4] = callback(importDefault(dependencyMap[8]).View, obj6);
  obj4.children = items4;
  return closure_7(View, obj4);
};
