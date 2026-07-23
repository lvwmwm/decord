// Module ID: 14895
// Function ID: 113573
// Name: PX_16
// Dependencies: [31, 27, 653, 33, 689, 1324, 9889, 4547, 4130, 3991, 4542, 3987, 3982, 11398, 5088, 7771, 10197, 1212, 4126, 5787, 5786, 14896, 4543, 4069, 4068, 2]
// Exports: getMessagesHeaderHeight

// Module 14895 (PX_16)
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { SearchTypes } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
const require = arg1;
const View = get_ActivityIndicator.View;
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
const PX_16 = require("_createForOfIteratorHelperLoose").space.PX_16;
const PX_8 = require("_createForOfIteratorHelperLoose").space.PX_8;
let obj = {};
obj = { position: "relative", padding: PX_16, paddingBottom: require("_createForOfIteratorHelperLoose").modules.mobile.MESSAGES_HEADER_PADDING_BOTTOM };
obj.headerPanel = obj;
_createForOfIteratorHelperLoose = { paddingBottom: PX_8, flexDirection: "row", gap: require("_createForOfIteratorHelperLoose").space.PX_8, justifyContent: "space-between" };
obj.headerPanelTitle = _createForOfIteratorHelperLoose;
obj.headerPanelButtons = { height: require("getButtonPadding").SMALL_BUTTON_HEIGHT, gap: require("_createForOfIteratorHelperLoose").modules.mobile.MESSAGES_HEADER_BUTTON_GAP, flexDirection: require("_createForOfIteratorHelperLoose").modules.mobile.MESSAGES_HEADER_BUTTON_LAYOUT, alignItems: "center" };
let obj3 = {};
const merged = Object.assign(get_ActivityIndicator.StyleSheet.absoluteFillObject);
obj3["backgroundColor"] = require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE;
obj3["top"] = undefined;
obj3["height"] = 1;
obj.headerBorder = obj3;
let closure_10 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_11 = { code: "function MessagesHeaderTsx1(){const{withSpring,scrollPosition}=this.__closure;return{opacity:withSpring(scrollPosition.get()>0?1:0)};}" };
let obj2 = { height: require("getButtonPadding").SMALL_BUTTON_HEIGHT, gap: require("_createForOfIteratorHelperLoose").modules.mobile.MESSAGES_HEADER_BUTTON_GAP, flexDirection: require("_createForOfIteratorHelperLoose").modules.mobile.MESSAGES_HEADER_BUTTON_LAYOUT, alignItems: "center" };
const memoResult = importAllResult.memo(function MessagesHeader(height) {
  height = height.height;
  const scrollPosition = height.scrollPosition;
  const tmp = callback2();
  const dependencyMap = tmp;
  let tmp2 = scrollPosition(1324)("MessagesHeader");
  let items = [tmp, height];
  const memo = importAllResult.useMemo(() => {
    const items = [tmp.headerPanel, { height }];
    return items;
  }, items);
  let obj = height(3991);
  const fn = function c() {
    const obj = {};
    let num = 0;
    if (scrollPosition.get() > 0) {
      num = 1;
    }
    obj.opacity = height(tmp[10]).withSpring(num);
    return obj;
  };
  obj = { withSpring: height(4542).withSpring, scrollPosition };
  fn.__closure = obj;
  fn.__workletHash = 17233409273245;
  fn.__initData = closure_11;
  const animatedStyle = obj.useAnimatedStyle(fn);
  const MobileHomeDrawerExperiment = height(3987).MobileHomeDrawerExperiment;
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
      obj = { screen: "add-friends", params: { sourcePage: "Messages Tab", presentation: "card" } };
      rootNavigationRef.navigate("friends", obj);
    }
  }, []);
  callback2 = importAllResult.useCallback(() => {
    let obj = height(tmp[12]);
    const rootNavigationRef = obj.getRootNavigationRef();
    if (null != rootNavigationRef) {
      obj = { type: outer1_5.DMS };
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
  obj = { variant: "primary", icon: null, size: "sm" };
  const obj1 = { size: "sm", color: scrollPosition(689).colors.WHITE };
  obj.icon = callback(height(10197).PlusLargeIcon, obj1);
  const intl = height(1212).intl;
  obj.accessibilityLabel = intl.string(height(1212).t.jD1qzM);
  obj.onPress = callback3;
  let obj2 = { style: memo };
  const obj3 = { style: tmp.headerPanelTitle };
  const tmp9 = scrollPosition(5088)("bespoke");
  const obj4 = { color: "mobile-text-heading-primary", variant: null, maxFontSizeMultiplier: 1.75, accessibilityRole: "header" };
  let str = "redesign/heading-18/bold";
  if (tmp2) {
    str = "heading-lg/semibold";
  }
  obj4.variant = str;
  const intl2 = height(1212).intl;
  const string = intl2.string;
  const t = height(1212).t;
  if (MobileHomeDrawerExperiment.useConfig({ location: "messages-header" }).enableHome) {
    let stringResult = string(t.YUU0RF);
  } else {
    stringResult = string(t.OIgYlQ);
  }
  obj4.children = stringResult;
  obj3.children = callback(height(4126).Text, obj4);
  const items1 = [callback(View, obj3), , , ];
  const obj5 = { style: tmp.headerPanelButtons };
  const obj6 = { onPress: callback2, variant: "secondary", size: "sm" };
  if (tmp2) {
    let tmp21 = scrollPosition(5787);
  } else {
    const obj7 = { size: "sm" };
    tmp21 = callback(height(5786).MagnifyingGlassIcon, obj7);
  }
  obj6.icon = tmp21;
  const intl3 = height(1212).intl;
  obj6.accessibilityLabel = intl3.string(height(1212).t["5h0QOP"]);
  const items2 = [callback(height(7771).IconButton, obj6), , , ];
  const obj8 = { noMargin: true, onPress: callback, alternateVariant: true };
  items2[1] = callback(scrollPosition(14896), obj8);
  const obj9 = { variant: "secondary", grow: true, shrink: true, size: "sm", icon: null, onPress: null, maxFontSizeMultiplier: 1 };
  if (tmp2) {
    let tmp28 = scrollPosition(4069);
  } else {
    const obj10 = { size: "sm" };
    tmp28 = callback(height(4068).UserPlusIcon, obj10);
  }
  obj9.icon = tmp28;
  obj9.onPress = callback1;
  const intl4 = height(1212).intl;
  obj9.text = intl4.string(height(1212).t.zIJnA6);
  items2[2] = callback(height(4543).Button, obj9);
  items2[3] = callback(height(7771).IconButton, obj);
  obj5.children = items2;
  items1[1] = closure_7(View, obj5);
  const items3 = [tmp.headerBorder, animatedStyle];
  items1[2] = callback(scrollPosition(3991).View, { style: items3 });
  items1[3] = tmp9;
  obj2.children = items1;
  return closure_7(View, obj2);
});
let result = require("ME").fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/MessagesHeader.tsx");

export default memoResult;
export const getMessagesHeaderHeight = function getMessagesHeaderHeight(fontScale, closure_2) {
  const bound = Math.min(fontScale, 1.75);
  const refreshToken = require(1324) /* useIsMobileVisualRefreshExperimentEnabled */.resolveRefreshToken(importDefault(689).modules.mobile.MESSAGES_HEADER_PADDING_BOTTOM, closure_2);
  const obj = require(1324) /* useIsMobileVisualRefreshExperimentEnabled */;
  const sum = require(9889) /* scaleLineHeight */.scaleTextLineHeight("redesign/heading-18/bold", bound) + PX_8;
  return sum + require(4547) /* getButtonPadding */.SMALL_BUTTON_HEIGHT + PX_16 + refreshToken;
};
