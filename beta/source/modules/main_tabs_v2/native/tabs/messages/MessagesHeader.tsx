// Module ID: 15660
// Function ID: 15661
// Name: MessagesHeader
// Dependencies: [19, 17, 1074, 21, 576, 11669, 9578, 5286, 4836, 4566, 5280, 15655, 4693, 11821, 5937, 7363, 10413, 1115, 4832, 6473, 15661, 5281, 4770, 2]
// Exports: getMessagesHeaderHeight

// Module 15660 (MessagesHeader)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import spring from "spring" /* 5280 */;
import ButtonConstants from "ButtonConstants" /* 5286 */;
import useScaledTextLineHeight from "useScaledTextLineHeight" /* 9578 */;
import MobileVisualRefreshExperiment from "MobileVisualRefreshExperiment" /* 11669 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let StyleSheet;
let closure_4;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
({ View: closure_4, StyleSheet } = react_native);
const SearchTypes = Constants.SearchTypes;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const PX_16 = nativeDefault.space.PX_16;
const PX_8 = nativeDefault.space.PX_8;
let createStyles = createStyles_mod;
let obj = { headerPanel: obj2, headerPanelTitle: obj3, headerPanelButtons: obj4, headerBorder: obj5 };
obj2 = { position: "relative", padding: PX_16, paddingBottom: nativeDefault.modules.mobile.MESSAGES_HEADER_PADDING_BOTTOM };
createStyles = createStyles.createStyles;
obj3 = { paddingBottom: PX_8, flexDirection: "row", gap: nativeDefault.space.PX_8, justifyContent: "space-between" };
obj4 = { height: ButtonConstants.SMALL_BUTTON_HEIGHT, gap: nativeDefault.modules.mobile.MESSAGES_HEADER_BUTTON_GAP, flexDirection: nativeDefault.modules.mobile.MESSAGES_HEADER_BUTTON_LAYOUT, alignItems: "center" };
obj5 = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE, top: undefined, height: 1 };
const merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_10 = createStyles(obj);
const __initData = { code: "function MessagesHeaderTsx1(){const{withSpring,scrollPosition}=this.__closure;return{opacity:withSpring(scrollPosition.get()>0?1:0)};}" };
const memoResult = react.memo(function MessagesHeader(height) {
  let PlusLargeIcon;
  let Text;
  let headerPanel;
  let intl;
  let intl3;
  let intl4;
  let items1;
  let items2;
  let items3;
  let obj5;
  let stringResult;
  height = height.height;
  const scrollPosition = height.scrollPosition;
  let tmp = closure_10();
  dependencyMap = tmp;
  let items = [tmp, height];
  const memo = react.useMemo(() => {
    const items = [headerPanel.headerPanel, ];
    const obj = { height };
    items[1] = obj;
    return items;
  }, items);
  let obj = height(4566);
  const fn = function c() {
    const withSpring = spring.withSpring;
    let num = 0;
    spring;
    if (scrollPosition.get() > 0) {
      num = 1;
    }
    const obj = { opacity: withSpring(num) };
    return obj;
  };
  let obj2 = { withSpring: height(5280).withSpring, scrollPosition };
  fn.__closure = obj2;
  fn.__workletHash = 17233409273245;
  fn.__initData = __initData;
  const animatedStyle = obj.useAnimatedStyle(fn);
  let obj3 = height(15655);
  const isHomeDrawerEnabled = obj3.useIsHomeDrawerEnabled();
  const callback = react.useCallback(() => {
    const obj = height(headerPanel[12]);
    const rootNavigationRef = obj.getRootNavigationRef();
    if (rootNavigationRef != null) {
      rootNavigationRef.navigate("message-requests");
    }
  }, []);
  const callback1 = react.useCallback(() => {
    const obj = height(headerPanel[12]);
    const rootNavigationRef = obj.getRootNavigationRef();
    if (rootNavigationRef != null) {
      const obj2 = { screen: "add-friends", params: { sourcePage: "Messages Tab", presentation: "card" } };
      rootNavigationRef.navigate("friends", obj2);
    }
  }, []);
  const callback2 = react.useCallback(() => {
    const obj = height(headerPanel[12]);
    const rootNavigationRef = obj.getRootNavigationRef();
    const tmp = headerPanel;
    if (null != rootNavigationRef) {
      const obj3 = { type: constants.DMS };
      const obj2 = scrollPosition(tmp[13]);
      const result = obj2.navigateToSearchWithPrefetch(rootNavigationRef, obj3);
    }
  }, []);
  const callback3 = react.useCallback(() => {
    const obj = height(headerPanel[12]);
    const rootNavigationRef = obj.getRootNavigationRef();
    if (rootNavigationRef != null) {
      const current = rootNavigationRef.current;
      if (current != null) {
        const obj2 = { screen: "new-message", params: { sourcePage: "Messages Header" } };
        current.navigate("friends", obj2);
      }
    }
  }, []);
  const obj4 = { variant: "primary", icon: closure_6(PlusLargeIcon, obj5), size: "sm", accessibilityLabel: intl.string(height(1115).t.jD1qzM), onPress: callback3 };
  const tmp12 = scrollPosition(5937)("bespoke");
  const IconButton = height(7363).IconButton;
  obj5 = { size: "sm", color: scrollPosition(576).colors.WHITE };
  PlusLargeIcon = height(10413).PlusLargeIcon;
  intl = height(1115).intl;
  const obj6 = { style: memo, children: items1 };
  const obj7 = { style: tmp.headerPanelTitle, children: closure_6(Text, { color: "mobile-text-heading-primary", variant: "heading-lg/semibold", maxFontSizeMultiplier: 1.75, accessibilityRole: "header", children: stringResult }) };
  const tmp14 = closure_6(IconButton, obj4);
  Text = height(4832).Text;
  const intl2 = height(1115).intl;
  const string = intl2.string;
  const t = height(1115).t;
  if (isHomeDrawerEnabled) {
    stringResult = string(t.YUU0RF);
  } else {
    stringResult = string(t.OIgYlQ);
  }
  items1 = [closure_6(closure_4, obj7), , , ];
  const obj8 = { style: tmp.headerPanelButtons, children: items2 };
  const obj9 = { onPress: callback2, variant: "secondary", size: "sm", icon: scrollPosition(6473), accessibilityLabel: intl3.string(height(1115).t["5h0QOP"]) };
  const IconButton2 = tmp3(7363).IconButton;
  intl3 = tmp3(1115).intl;
  items2 = [closure_6(IconButton2, obj9), closure_6(scrollPosition(15661), { noMargin: true, onPress: callback, alternateVariant: true }), , ];
  const obj10 = { variant: "secondary", grow: true, shrink: true, size: "sm", icon: scrollPosition(4770), onPress: callback1, maxFontSizeMultiplier: 1, text: intl4.string(height(1115).t.zIJnA6) };
  const Button = tmp3(5281).Button;
  intl4 = tmp3(1115).intl;
  items2[2] = closure_6(Button, obj10);
  items2[3] = tmp14;
  items1[1] = closure_7(closure_4, obj8);
  const obj11 = { style: items3 };
  items3 = [tmp.headerBorder, animatedStyle];
  items1[2] = closure_6(scrollPosition(4566).View, obj11);
  items1[3] = tmp12;
  return closure_7(closure_4, obj6);
});
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/MessagesHeader.tsx");

export default memoResult;
export const getMessagesHeaderHeight = function getMessagesHeaderHeight(fontScale) {
  const bound = Math.min(fontScale, 1.75);
  const obj = MobileVisualRefreshExperiment;
  const refreshToken = obj.resolveRefreshToken(nativeDefault.modules.mobile.MESSAGES_HEADER_PADDING_BOTTOM);
  const obj2 = useScaledTextLineHeight;
  const sum = obj2.scaleTextLineHeight("redesign/heading-18/bold", bound) + PX_8;
  return sum + ButtonConstants.SMALL_BUTTON_HEIGHT + PX_16 + refreshToken;
};
