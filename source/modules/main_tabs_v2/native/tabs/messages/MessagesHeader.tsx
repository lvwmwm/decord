// Module ID: 14771
// Function ID: 111362
// Name: PX_16
// Dependencies: []
// Exports: getMessagesHeaderHeight

// Module 14771 (PX_16)
const importAllResult = importAll(dependencyMap[0]);
const tmp2 = arg1(dependencyMap[1]);
const View = tmp2.View;
const SearchTypes = arg1(dependencyMap[2]).SearchTypes;
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
const PX_16 = importDefault(dependencyMap[4]).space.PX_16;
const PX_8 = importDefault(dependencyMap[4]).space.PX_8;
let obj1 = arg1(dependencyMap[8]);
let obj = {};
obj = { position: "relative", padding: PX_16, paddingBottom: importDefault(dependencyMap[4]).modules.mobile.MESSAGES_HEADER_PADDING_BOTTOM };
obj.headerPanel = obj;
obj1 = { paddingBottom: PX_8, flexDirection: "row", gap: importDefault(dependencyMap[4]).space.PX_8, justifyContent: "space-between" };
obj.headerPanelTitle = obj1;
const tmp3 = arg1(dependencyMap[3]);
obj.headerPanelButtons = { height: arg1(dependencyMap[7]).SMALL_BUTTON_HEIGHT, gap: importDefault(dependencyMap[4]).modules.mobile.MESSAGES_HEADER_BUTTON_GAP, flexDirection: importDefault(dependencyMap[4]).modules.mobile.MESSAGES_HEADER_BUTTON_LAYOUT, alignItems: "center" };
const obj3 = {};
const merged = Object.assign(tmp2.StyleSheet.absoluteFillObject);
obj3["backgroundColor"] = importDefault(dependencyMap[4]).colors.BORDER_SUBTLE;
obj3["top"] = undefined;
obj3["height"] = 1;
obj.headerBorder = obj3;
let closure_10 = obj1.createStyles(obj);
let closure_11 = { code: "function MessagesHeaderTsx1(){const{withSpring,scrollPosition}=this.__closure;return{opacity:withSpring(scrollPosition.get()>0?1:0)};}" };
const obj2 = { height: arg1(dependencyMap[7]).SMALL_BUTTON_HEIGHT, gap: importDefault(dependencyMap[4]).modules.mobile.MESSAGES_HEADER_BUTTON_GAP, flexDirection: importDefault(dependencyMap[4]).modules.mobile.MESSAGES_HEADER_BUTTON_LAYOUT, alignItems: "center" };
const memoResult = importAllResult.memo(function MessagesHeader(height) {
  height = height.height;
  const arg1 = height;
  const scrollPosition = height.scrollPosition;
  const importDefault = scrollPosition;
  const tmp = callback2();
  const dependencyMap = tmp;
  const tmp2 = importDefault(dependencyMap[5])("MessagesHeader");
  const items = [tmp, height];
  const memo = importAllResult.useMemo(() => {
    const items = [tmp.headerPanel, { height }];
    return items;
  }, items);
  let obj = arg1(dependencyMap[9]);
  const fn = function c() {
    const obj = {};
    let num = 0;
    if (scrollPosition.get() > 0) {
      num = 1;
    }
    obj.opacity = height(tmp[10]).withSpring(num);
    return obj;
  };
  obj = { withSpring: arg1(dependencyMap[10]).withSpring, scrollPosition };
  fn.__closure = obj;
  fn.__workletHash = 17233409273245;
  fn.__initData = closure_11;
  const animatedStyle = obj.useAnimatedStyle(fn);
  const MobileHomeDrawerExperiment = arg1(dependencyMap[11]).MobileHomeDrawerExperiment;
  const callback = importAllResult.useCallback(() => {
    const rootNavigationRef = height(tmp[12]).getRootNavigationRef();
    if (null != rootNavigationRef) {
      rootNavigationRef.navigate("message-requests");
    }
  }, []);
  const callback1 = importAllResult.useCallback(() => {
    let obj = height(tmp[12]);
    const rootNavigationRef = obj.getRootNavigationRef();
    if (null != rootNavigationRef) {
      obj = { screen: "add-friends", params: {} };
      rootNavigationRef.navigate("friends", obj);
    }
  }, []);
  const callback2 = importAllResult.useCallback(() => {
    let obj = height(tmp[12]);
    const rootNavigationRef = obj.getRootNavigationRef();
    if (null != rootNavigationRef) {
      obj = { type: constants.DMS };
      const result = scrollPosition(tmp[13]).navigateToSearchWithPrefetch(rootNavigationRef, obj);
      const obj2 = scrollPosition(tmp[13]);
    }
  }, []);
  const callback3 = importAllResult.useCallback(() => {
    let obj = height(tmp[12]);
    const rootNavigationRef = obj.getRootNavigationRef();
    let tmp2 = null == rootNavigationRef;
    let obj2 = rootNavigationRef;
    if (!tmp2) {
      const current = rootNavigationRef.current;
      tmp2 = null == current;
      obj2 = current;
    }
    if (!tmp2) {
      obj = { screen: "new-message" };
      obj = { sourcePage: "Messages Header" };
      obj.params = obj;
      obj2.navigate("friends", obj);
    }
  }, []);
  obj = { MESSAGE_AUTOMOD_BACKGROUND_DEFAULT: 1554382849, GuildEventDatetime: 24182788, canvas: 1090519040 };
  const obj1 = { size: "sm", color: importDefault(dependencyMap[4]).colors.WHITE };
  obj.icon = callback(arg1(dependencyMap[16]).PlusLargeIcon, obj1);
  const intl = arg1(dependencyMap[17]).intl;
  obj.accessibilityLabel = intl.string(arg1(dependencyMap[17]).t.jD1qzM);
  obj.onPress = callback3;
  const obj2 = { style: memo };
  const obj3 = { style: tmp.headerPanelTitle };
  const tmp9 = importDefault(dependencyMap[14])("bespoke");
  const obj4 = {};
  let str = "redesign/heading-18/bold";
  if (tmp2) {
    str = "heading-lg/semibold";
  }
  obj4.variant = str;
  const intl2 = arg1(dependencyMap[17]).intl;
  const string = intl2.string;
  const t = arg1(dependencyMap[17]).t;
  if (MobileHomeDrawerExperiment.useConfig({ location: "messages-header" }).enableHome) {
    let stringResult = string(t.YUU0RF);
  } else {
    stringResult = string(t.OIgYlQ);
  }
  obj4.children = stringResult;
  obj3.children = callback(arg1(dependencyMap[18]).Text, obj4);
  const items1 = [callback(View, obj3), , , ];
  const obj5 = { style: tmp.headerPanelButtons };
  const obj6 = { paddingVertical: 44, display: null, flexDirection: true, onPress: callback2 };
  if (tmp2) {
    let tmp21 = importDefault(dependencyMap[19]);
  } else {
    const obj7 = { size: "sm" };
    tmp21 = callback(arg1(dependencyMap[20]).MagnifyingGlassIcon, obj7);
  }
  obj6.icon = tmp21;
  const intl3 = arg1(dependencyMap[17]).intl;
  obj6.accessibilityLabel = intl3.string(arg1(dependencyMap[17]).t.5h0QOP);
  const items2 = [callback(arg1(dependencyMap[15]).IconButton, obj6), callback(importDefault(dependencyMap[21]), { onPress: callback }), , ];
  const obj8 = {};
  if (tmp2) {
    let tmp28 = importDefault(dependencyMap[23]);
  } else {
    const obj9 = { size: "sm" };
    tmp28 = callback(arg1(dependencyMap[24]).UserPlusIcon, obj9);
  }
  obj8.icon = tmp28;
  obj8.onPress = callback1;
  const intl4 = arg1(dependencyMap[17]).intl;
  obj8.text = intl4.string(arg1(dependencyMap[17]).t.zIJnA6);
  items2[2] = callback(arg1(dependencyMap[22]).Button, obj8);
  items2[3] = callback(arg1(dependencyMap[15]).IconButton, obj);
  obj5.children = items2;
  items1[1] = closure_7(View, obj5);
  const items3 = [tmp.headerBorder, animatedStyle];
  items1[2] = callback(importDefault(dependencyMap[9]).View, { style: items3 });
  items1[3] = tmp9;
  obj2.children = items1;
  return closure_7(View, obj2);
});
const result = arg1(dependencyMap[25]).fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/MessagesHeader.tsx");

export default memoResult;
export const getMessagesHeaderHeight = function getMessagesHeaderHeight(fontScale, chatInputFloating) {
  const bound = Math.min(fontScale, 1.75);
  const refreshToken = chatInputFloating(dependencyMap[5]).resolveRefreshToken(importDefault(dependencyMap[4]).modules.mobile.MESSAGES_HEADER_PADDING_BOTTOM, chatInputFloating);
  const obj = chatInputFloating(dependencyMap[5]);
  const sum = chatInputFloating(dependencyMap[6]).scaleTextLineHeight("redesign/heading-18/bold", bound) + PX_8;
  return sum + chatInputFloating(dependencyMap[7]).SMALL_BUTTON_HEIGHT + PX_16 + refreshToken;
};
