// Module ID: 18694
// Function ID: 18695
// Name: MessagesItemSuggestedFriendsHeader
// Dependencies: [19, 17, 21, 5866, 575, 5243, 1652, 11192, 10204, 1113, 2]

// Module 18694 (MessagesItemSuggestedFriendsHeader)
import nativeDefault from "native" /* 575 */;
import _mod1652 from "module_1652" /* 1652 */;
import Text_Text from "Text/Text" /* 5866 */;
import useStateFromSharedValueDefault from "useStateFromSharedValue" /* 11192 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

let tmp3;

let StyleSheet;
let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let tmp2;
let tmp8;
const intl2 = tmp2(1113);
const ThemedGradientDefault = tmp8(10204);
({ View: closure_4, StyleSheet } = react_native);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: metroImportDefault } = Fragment);
const sum = Text_Text.TextStyleSheet["body-md/semibold"].lineHeight + nativeDefault.space.PX_24;
let createStyles = createStyles_mod;
let obj = { headerContainer: { height: sum, justifyContent: "center", overflow: "hidden" }, stickyOverlay: obj2, headerText: obj3 };
obj2 = { backgroundColor: nativeDefault.colors.PANEL_BG };
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = { marginHorizontal: nativeDefault.space.PX_16 };
let closure_8 = createStyles(obj);
let closure_9 = { code: "(function MessagesItemSuggestedFriendsHeaderTsx1(){let[stickyAt,scrollPosition]=this.__closure;return stickyAt!=null&&scrollPosition.get()>=stickyAt;})" };
const memoResult = react.memo(function MessagesItemSuggestedFriendsHeader(stickyLeft) {
  let intl;
  let items3;
  let items4;
  let scrollPosition;
  let stickyAt;
  let tmp4;
  let tmp5;
  let tmp6;
  stickyLeft = stickyLeft.stickyLeft;
  const stickyTop = stickyLeft.stickyTop;
  ({ stickyAt, scrollPosition } = stickyLeft);
  const tmp = closure_8();
  let tmp2 = require;
  const items = [closure_9, stickyAt, scrollPosition];
  let c0;
  let c1;
  [tmp4, tmp5, tmp6] = items;
  const obj = _mod1652;
  class MessagesItemSuggestedFriendsHeaderTsx1 {
    constructor() {
      tmp2 = null != closure_0;
      if (tmp2) {
        tmp3 = closure_1;
        tmp2 = closure_1.get() >= tmp;
      }
      return tmp2;
    }
  }
  const items1 = [tmp5, tmp6];
  MessagesItemSuggestedFriendsHeaderTsx1.__closure = items1;
  MessagesItemSuggestedFriendsHeaderTsx1.__workletHash = 9510203774773;
  MessagesItemSuggestedFriendsHeaderTsx1.__initData = tmp4;
  const derivedValue = obj.useDerivedValue(MessagesItemSuggestedFriendsHeaderTsx1);
  const items2 = [stickyLeft, stickyTop];
  let tmp11Result = null;
  const obj2 = { style: tmp.headerContainer, collapsable: false, children: items4 };
  const tmp9 = useStateFromSharedValueDefault(derivedValue);
  if (tmp9) {
    const obj3 = { children: items3 };
    const obj4 = { absolute: true, wide: true, componentStyles: tmp10, tall: true, mix: true };
    items3 = [hasOwnProperty(ThemedGradientDefault, obj4), ];
    const obj5 = { style: tmp.stickyOverlay };
    items3[1] = hasOwnProperty(React3, obj5);
    tmp11Result = tmp11(metroRequire, obj3);
  }
  items4 = [tmp11Result, ];
  const obj6 = { style: tmp.headerText, maxFontSizeMultiplier: 2, lineClamp: 1, accessibilityRole: "header", variant: "body-md/semibold", color: "text-default", children: intl.string(intl2.t["1uAmCw"]) };
  const Text = Text_Text.Text;
  intl = intl2.intl;
  items4[1] = hasOwnProperty(Text, obj6);
  return metroImportDefault(React3, obj2);
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/MessagesItemSuggestedFriendsHeader.tsx");

export default memoResult;
export const MESSAGES_ITEM_SUGGESTED_FRIENDS_HEADER_HEIGHT = sum;
