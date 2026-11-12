// Module ID: 18457
// Function ID: 18458
// Name: MessagesHeader
// Dependencies: [19, 17, 1072, 21, 575, 12757, 5915, 5796, 5170, 1652, 5793, 5794, 18452, 5347, 14152, 7098, 8131, 10979, 1113, 5783, 7317, 18458, 5790, 5878, 2]
// Exports: getMessagesHeaderHeight

// Module 18457 (MessagesHeader)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import _modDef1652 from "module_1652" /* 1652 */;
import ButtonConstants from "ButtonConstants" /* 5796 */;
import AssetRegistryDefault from "AssetRegistry" /* 5878 */;
import useScaledTextLineHeight from "useScaledTextLineHeight" /* 5915 */;
import HeaderDebugOverlayDefault from "HeaderDebugOverlay" /* 7098 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 7317 */;
import MobileVisualRefreshExperiment from "MobileVisualRefreshExperiment" /* 12757 */;
import MessageRequestsButtonDefault from "MessageRequestsButton" /* 18458 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

let importDefault;

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
let closure_11 = { code: "(function MessagesHeaderTsx1(){let[withSpring,scrollPosition,Reanimated3DefaultSpringConfig]=this.__closure;return{opacity:withSpring(scrollPosition.get()>0?1:0,Reanimated3DefaultSpringConfig)};})" };
const memoResult = react.memo(function MessagesHeader(height) {
  let PlusLargeIcon;
  let Text;
  let closure_1;
  let intl;
  let intl3;
  let intl4;
  let items3;
  let items4;
  let items5;
  let obj3;
  let stringResult;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  height = height.height;
  const scrollPosition = height.scrollPosition;
  let tmp = closure_10();
  importDefault = tmp;
  let obj = react;
  let items = [tmp, height];
  const memo = react.useMemo(() => {
    const items = [closure_1.headerPanel, ];
    const obj = { height };
    items[1] = obj;
    return items;
  }, items);
  const items1 = [closure_11, , , ];
  const useAnimatedStyle = height(1652).useAnimatedStyle;
  height(1652);
  items1[1] = height(5793).withSpring;
  items1[2] = scrollPosition;
  items1[3] = height(5794).Reanimated3DefaultSpringConfig;
  let c0;
  let c1;
  let c2;
  [tmp6, tmp7, tmp8, tmp9] = items1;
  class MessagesHeaderTsx1 {
    constructor() {
      let num = 0;
      const tmp = c0;
      if (_undefined.get() > 0) {
        num = 1;
      }
      const obj = { opacity: tmp(num, c2) };
      return obj;
    }
  }
  const items2 = [tmp7, tmp8, tmp9];
  MessagesHeaderTsx1.__closure = items2;
  MessagesHeaderTsx1.__workletHash = 7032090280260;
  MessagesHeaderTsx1.__initData = tmp6;
  const animatedStyle = useAnimatedStyle(MessagesHeaderTsx1);
  const tmp3Result = height(18452);
  const isHomeDrawerEnabled = tmp3Result.useIsHomeDrawerEnabled();
  const callback = obj.useCallback(() => {
    const obj = height(dependencyMap[13]);
    const rootNavigationRef = obj.getRootNavigationRef();
    if (rootNavigationRef != null) {
      rootNavigationRef.navigate("message-requests");
    }
  }, []);
  const callback1 = obj.useCallback(() => {
    const obj = height(dependencyMap[13]);
    const rootNavigationRef = obj.getRootNavigationRef();
    if (rootNavigationRef != null) {
      const obj2 = { screen: "add-friends", params: { sourcePage: "Messages Tab", presentation: "card" } };
      rootNavigationRef.navigate("friends", obj2);
    }
  }, []);
  const callback2 = obj.useCallback(() => {
    const obj = height(dependencyMap[13]);
    const rootNavigationRef = obj.getRootNavigationRef();
    const tmp = dependencyMap;
    if (null != rootNavigationRef) {
      const obj3 = { type: constants.DMS };
      const obj2 = closure_1(tmp[14]);
      const result = obj2.navigateToSearchWithPrefetch(rootNavigationRef, obj3);
    }
  }, []);
  const callback3 = obj.useCallback(() => {
    const obj = height(dependencyMap[13]);
    const rootNavigationRef = obj.getRootNavigationRef();
    if (rootNavigationRef != null) {
      const current = rootNavigationRef.current;
      if (current != null) {
        const obj2 = { screen: "new-message", params: { sourcePage: "Messages Header" } };
        current.navigate("friends", obj2);
      }
    }
  }, []);
  let obj2 = { variant: "primary", icon: closure_6(PlusLargeIcon, obj3), size: "sm", accessibilityLabel: intl.string(tmp3(1113).t.jD1qzM), onPress: callback3 };
  const tmp17 = HeaderDebugOverlayDefault("bespoke");
  const IconButton = tmp3(8131).IconButton;
  obj3 = { size: "sm", color: nativeDefault.colors.WHITE };
  PlusLargeIcon = tmp3(10979).PlusLargeIcon;
  intl = tmp3(1113).intl;
  const obj4 = { style: memo, children: items3 };
  const obj5 = { style: tmp.headerPanelTitle, children: closure_6(Text, { color: "mobile-text-heading-primary", variant: "heading-lg/semibold", maxFontSizeMultiplier: 1.75, accessibilityRole: "header", children: stringResult }) };
  const tmp19 = closure_6(IconButton, obj2);
  Text = tmp3(5783).Text;
  const intl2 = tmp3(1113).intl;
  const string = intl2.string;
  const t = tmp3(1113).t;
  if (isHomeDrawerEnabled) {
    stringResult = string(t.YUU0RF);
  } else {
    stringResult = string(t.OIgYlQ);
  }
  items3 = [closure_6(closure_4, obj5), , , ];
  const obj6 = { style: tmp.headerPanelButtons, children: items4 };
  const obj7 = { onPress: callback2, variant: "secondary", size: "sm", icon: AssetRegistryDefault2, accessibilityLabel: intl3.string(height(1113).t["5h0QOP"]) };
  const IconButton2 = tmp3(8131).IconButton;
  intl3 = tmp3(1113).intl;
  items4 = [closure_6(IconButton2, obj7), closure_6(MessageRequestsButtonDefault, { noMargin: true, onPress: callback, alternateVariant: true }), , ];
  const obj8 = { variant: "secondary", grow: true, shrink: true, size: "sm", icon: AssetRegistryDefault, onPress: callback1, maxFontSizeMultiplier: 1, text: intl4.string(height(1113).t.zIJnA6) };
  const Button = tmp3(5790).Button;
  intl4 = tmp3(1113).intl;
  items4[2] = closure_6(Button, obj8);
  items4[3] = tmp19;
  items3[1] = closure_7(closure_4, obj6);
  const obj9 = { style: items5 };
  items5 = [tmp.headerBorder, animatedStyle];
  items3[2] = closure_6(_modDef1652.View, obj9);
  items3[3] = tmp17;
  return closure_7(closure_4, obj4);
});
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/MessagesHeader.tsx");

export default memoResult;
export function getMessagesHeaderHeight(fontScale) {
  const bound = Math.min(fontScale, 1.75);
  const obj = MobileVisualRefreshExperiment;
  const refreshToken = obj.resolveRefreshToken(nativeDefault.modules.mobile.MESSAGES_HEADER_PADDING_BOTTOM);
  const obj2 = useScaledTextLineHeight;
  const sum = obj2.scaleTextLineHeight("heading-md/semibold", bound) + PX_8;
  return sum + ButtonConstants.SMALL_BUTTON_HEIGHT + PX_16 + refreshToken;
}
