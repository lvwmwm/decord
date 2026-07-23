// Module ID: 14919
// Function ID: 113702
// Name: sum
// Dependencies: [31, 27, 33, 4126, 689, 4130, 3991, 8277, 4662, 1212, 2]

// Module 14919 (sum)
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
let closure_7;
const require = arg1;
const View = get_ActivityIndicator.View;
({ jsx: closure_5, Fragment: closure_6, jsxs: closure_7 } = jsxProd);
const sum = require("Text").TextStyleSheet["text-md/semibold"].lineHeight + require("_createForOfIteratorHelperLoose").space.PX_24;
obj = { headerContainer: obj };
obj = { height: sum, justifyContent: "center", overflow: "hidden" };
_createForOfIteratorHelperLoose = {};
const merged = Object.assign(get_ActivityIndicator.StyleSheet.absoluteFillObject);
_createForOfIteratorHelperLoose["backgroundColor"] = require("_createForOfIteratorHelperLoose").colors.PANEL_BG;
obj.stickyOverlay = _createForOfIteratorHelperLoose;
obj.headerText = { marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
let closure_8 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_9 = { code: "function MessagesItemSuggestedFriendsHeaderTsx1(){const{stickyAt,scrollPosition}=this.__closure;return stickyAt!=null&&scrollPosition.get()>=stickyAt;}" };
let obj2 = { marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
const memoResult = importAllResult.memo(function MessagesItemSuggestedFriendsHeader(stickyAt) {
  stickyAt = stickyAt.stickyAt;
  const scrollPosition = stickyAt.scrollPosition;
  const stickyLeft = stickyAt.stickyLeft;
  const stickyTop = stickyAt.stickyTop;
  let tmp = callback3();
  let obj = stickyAt(stickyLeft[6]);
  const fn = function x() {
    let tmp = null != stickyAt;
    if (tmp) {
      tmp = scrollPosition.get() >= stickyAt;
    }
    return tmp;
  };
  fn.__closure = { stickyAt, scrollPosition };
  fn.__workletHash = 895751186732;
  fn.__initData = closure_9;
  const derivedValue = obj.useDerivedValue(fn);
  const items = [stickyLeft, stickyTop];
  obj = { style: tmp.headerContainer, collapsable: false };
  let tmp7 = null;
  if (tmp3) {
    obj = {};
    const obj1 = { absolute: true, wide: true, componentStyles: tmp4, tall: true, mix: true };
    const items1 = [callback(scrollPosition(stickyLeft[8]), obj1), ];
    const obj2 = { style: tmp.stickyOverlay };
    items1[1] = callback(View, obj2);
    obj.children = items1;
    tmp7 = callback2(closure_6, obj);
  }
  const items2 = [tmp7, ];
  const obj3 = { style: tmp.headerText, maxFontSizeMultiplier: 2, lineClamp: 1, accessibilityRole: "header", variant: "text-md/semibold", color: "text-default" };
  const intl = stickyAt(stickyLeft[9]).intl;
  obj3.children = intl.string(stickyAt(stickyLeft[9]).t["1uAmCw"]);
  items2[1] = callback(stickyAt(stickyLeft[3]).Text, obj3);
  obj.children = items2;
  return callback2(View, obj);
});
const result = require("jsxProd").fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/MessagesItemSuggestedFriendsHeader.tsx");

export default memoResult;
export const MESSAGES_ITEM_SUGGESTED_FRIENDS_HEADER_HEIGHT = sum;
