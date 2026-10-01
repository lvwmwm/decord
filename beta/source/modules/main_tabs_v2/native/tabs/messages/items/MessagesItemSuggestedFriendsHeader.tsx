// Module ID: 15729
// Function ID: 15730
// Name: MessagesItemSuggestedFriendsHeader
// Dependencies: [19, 17, 21, 4832, 576, 4836, 4566, 7715, 5437, 1115, 2]

// Module 15729 (MessagesItemSuggestedFriendsHeader)
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import Text_Text from "Text/Text" /* 4832 */;
import useStateFromSharedValueDefault from "useStateFromSharedValue" /* 7715 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let StyleSheet;
let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let tmp2;
let tmp5;
const intl2 = tmp2(1115);
const ThemedGradientDefault = tmp5(5437);
({ View: closure_4, StyleSheet } = react_native);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: metroImportDefault } = Fragment);
const sum = Text_Text.TextStyleSheet["text-md/semibold"].lineHeight + nativeDefault.space.PX_24;
let createStyles = createStyles_mod;
let obj = { headerContainer: { height: sum, justifyContent: "center", overflow: "hidden" }, stickyOverlay: obj2, headerText: obj3 };
obj2 = { backgroundColor: nativeDefault.colors.PANEL_BG };
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = { marginHorizontal: nativeDefault.space.PX_16 };
let closure_8 = createStyles(obj);
const __initData = { code: "function MessagesItemSuggestedFriendsHeaderTsx1(){const{stickyAt,scrollPosition}=this.__closure;return stickyAt!=null&&scrollPosition.get()>=stickyAt;}" };
const memoResult = react.memo(function MessagesItemSuggestedFriendsHeader(stickyAt) {
  let intl;
  let items1;
  let items2;
  stickyAt = stickyAt.stickyAt;
  const scrollPosition = stickyAt.scrollPosition;
  const stickyLeft = stickyAt.stickyLeft;
  const stickyTop = stickyAt.stickyTop;
  const tmp = closure_8();
  let tmp2 = require;
  const fn = function x() {
    const tmp2 = null != stickyAt && scrollPosition.get() >= tmp;
    return tmp2;
  };
  fn.__closure = { stickyAt, scrollPosition };
  fn.__workletHash = 895751186732;
  fn.__initData = __initData;
  const obj = ReanimatedRexport;
  const derivedValue = obj.useDerivedValue(fn);
  const items = [stickyLeft, stickyTop];
  let tmp8Result = null;
  const obj2 = { style: tmp.headerContainer, collapsable: false, children: items2 };
  const tmp6 = useStateFromSharedValueDefault(derivedValue);
  if (tmp6) {
    const obj3 = { children: items1 };
    const obj4 = { absolute: true, wide: true, componentStyles: tmp7, tall: true, mix: true };
    items1 = [hasOwnProperty(ThemedGradientDefault, obj4), ];
    const obj5 = { style: tmp.stickyOverlay };
    items1[1] = hasOwnProperty(React3, obj5);
    tmp8Result = tmp8(metroRequire, obj3);
  }
  items2 = [tmp8Result, ];
  const obj6 = { style: tmp.headerText, maxFontSizeMultiplier: 2, lineClamp: 1, accessibilityRole: "header", variant: "text-md/semibold", color: "text-default", children: intl.string(intl2.t["1uAmCw"]) };
  const Text = Text_Text.Text;
  intl = intl2.intl;
  items2[1] = hasOwnProperty(Text, obj6);
  return metroImportDefault(React3, obj2);
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/MessagesItemSuggestedFriendsHeader.tsx");

export default memoResult;
export const MESSAGES_ITEM_SUGGESTED_FRIENDS_HEADER_HEIGHT = sum;
