// Module ID: 17487
// Function ID: 17488
// Name: QuestHomeEmptyState
// Dependencies: [19, 17, 1072, 21, 5243, 575, 1113, 5839, 5432, 7351, 1377, 5866, 5957, 17488, 5830, 2]
// Exports: default

// Module 17487 (QuestHomeEmptyState)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import intl3 from "intl" /* 1113 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import useChatLayoutDefault from "useChatLayout" /* 5432 */;
import LinearGradientDefault from "LinearGradient" /* 5830 */;
import useToken from "useToken" /* 5839 */;
import Text_Text from "Text/Text" /* 5866 */;
import FastImageDefault from "FastImage" /* 5957 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7351 */;
import AssetRegistryDefault from "AssetRegistry" /* 17488 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

let StyleSheet;
let c3;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
({ View: c3, StyleSheet } = react_native);
const VerticalGradient = Constants.VerticalGradient;
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { flex: 1 }, emptyStateContainer: { justifyContent: "center", alignItems: "center", flex: 1 }, emptyStateContainerBelowContent: obj2, emptyStateContentContainer: obj3, emptyStateContentContainerScreenCentered: { top: -55 }, emptyStateContentTitle: { textAlign: "center" }, emptyStateContentDescription: { textAlign: "center", marginTop: 4 }, emptyImage: { flex: 1, width: "100%", aspectRatio: 1.6375545851528384, minWidth: "100%", position: "absolute", bottom: 0, zIndex: -1 }, backgroundImage: obj4, gradient: { height: 22, width: "100%", position: "absolute", bottom: 0 }, actionWrapper: { marginTop: 16, alignSelf: "center" } };
obj2 = { justifyContent: "flex-start", paddingTop: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: nativeDefault.space.PX_32 };
obj4 = { width: "100%", height: undefined };
const merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_8 = createStyles(obj);
const result = size.fileFinishedImporting("modules/quests/native/QuestHomeEmptyState.tsx");

export default function QuestHomeEmptyState(hasContentAbove) {
  let action;
  let items2;
  let items3;
  let items4;
  let items5;
  let obj12;
  let obj3;
  let obj4;
  let obj5;
  let title;
  let tmp8Result;
  let flag = hasContentAbove.hasContentAbove;
  if (flag === undefined) {
    flag = false;
  }
  ({ action, title } = hasContentAbove);
  if (title === undefined) {
    const intl = intl3.intl;
    title = intl.string(intl3.t.SdlRnK);
  }
  let subtitle = hasContentAbove.subtitle;
  if (subtitle === undefined) {
    const intl2 = intl3.intl;
    subtitle = intl2.string(intl3.t["R7mv+G"]);
  }
  const tmp5 = closure_8();
  const obj = useToken;
  const token = obj.useToken(nativeDefault.colors.BACKGROUND_BASE_LOWER);
  const isChatLockedOpen = useChatLayoutDefault().isChatLockedOpen;
  const obj2 = { bottom: obj3.isAndroid(), style: tmp5.container, children: hasOwnProperty(_false, obj4) };
  const SafeAreaPaddingView = common_SafeAreaView.SafeAreaPaddingView;
  obj3 = PlatformUtils;
  const items = [tmp5.emptyStateContainer, ];
  obj4 = { style: tmp5.container, children: metroRequire(_false, obj5) };
  obj5 = { style: items, children: items3 };
  const tmp13 = flag && tmp5.emptyStateContainerBelowContent;
  items[1] = tmp13;
  const items1 = [tmp5.emptyStateContentContainer, ];
  const obj6 = { style: items1, children: items2 };
  const tmp14 = !flag && tmp5.emptyStateContentContainerScreenCentered;
  items1[1] = tmp14;
  items2 = [, , ];
  const obj7 = { variant: "heading-xl/semibold", color: "mobile-text-heading-primary", style: tmp5.emptyStateContentTitle, children: title };
  items2[0] = hasOwnProperty(Text_Text.Text, obj7);
  const obj8 = { variant: "body-md/normal", color: "text-default", style: tmp5.emptyStateContentDescription, children: subtitle };
  items2[1] = hasOwnProperty(Text_Text.Text, obj8);
  let tmp10Result = null != action;
  if (tmp10Result) {
    const obj9 = { style: tmp5.actionWrapper, children: action };
    tmp10Result = tmp10(tmp11, obj9);
  }
  items2[2] = tmp10Result;
  items3 = [metroRequire(_false, obj6), ];
  let tmp12Result = null;
  if (!isChatLockedOpen) {
    const obj10 = { children: items4 };
    const obj11 = { style: tmp5.emptyImage, children: hasOwnProperty(tmp8Result, obj12) };
    obj12 = { style: tmp5.backgroundImage, source: AssetRegistryDefault, resizeMode: "cover" };
    tmp8Result = FastImageDefault;
    items4 = [hasOwnProperty(_false, obj11), ];
    const obj24 = { style: tmp5.gradient, end: null, start: null, colors: items5 };
    ({ END: obj13.end, START: obj13.start } = VerticalGradient);
    items5 = ["rgba(0, 0, 0, 0)", token];
    items4[1] = hasOwnProperty(LinearGradientDefault, obj24);
    tmp12Result = tmp12(metroImportDefault, obj10);
  }
  items3[1] = tmp12Result;
  return hasOwnProperty(SafeAreaPaddingView, obj2);
};
