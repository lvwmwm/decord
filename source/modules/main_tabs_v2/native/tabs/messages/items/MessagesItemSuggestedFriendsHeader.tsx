// Module ID: 14803
// Function ID: 111534
// Name: sum
// Dependencies: []

// Module 14803 (sum)
const importAllResult = importAll(dependencyMap[0]);
const tmp2 = arg1(dependencyMap[1]);
const View = tmp2.View;
({ jsx: closure_5, Fragment: closure_6, jsxs: closure_7 } = arg1(dependencyMap[2]));
const sum = arg1(dependencyMap[3]).TextStyleSheet.text-md/semibold.lineHeight + importDefault(dependencyMap[4]).space.PX_24;
let obj1 = arg1(dependencyMap[5]);
let obj = { headerContainer: { height: sum } };
obj = {};
const merged = Object.assign(tmp2.StyleSheet.absoluteFillObject);
obj["backgroundColor"] = importDefault(dependencyMap[4]).colors.PANEL_BG;
obj.stickyOverlay = obj;
obj1 = { marginHorizontal: importDefault(dependencyMap[4]).space.PX_16 };
obj.headerText = obj1;
let closure_8 = obj1.createStyles(obj);
let closure_9 = { code: "function MessagesItemSuggestedFriendsHeaderTsx1(){const{stickyAt,scrollPosition}=this.__closure;return stickyAt!=null&&scrollPosition.get()>=stickyAt;}" };
const tmp3 = arg1(dependencyMap[2]);
const memoResult = importAllResult.memo(function MessagesItemSuggestedFriendsHeader(stickyAt) {
  stickyAt = stickyAt.stickyAt;
  const arg1 = stickyAt;
  const scrollPosition = stickyAt.scrollPosition;
  const importDefault = scrollPosition;
  const stickyLeft = stickyAt.stickyLeft;
  const dependencyMap = stickyLeft;
  const stickyTop = stickyAt.stickyTop;
  const tmp = callback3();
  let obj = arg1(dependencyMap[6]);
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
    const obj1 = { <string:2898570406>: "%JSONStringify%", <string:2858420019>: "gradientOverlay", <string:1379639394>: "<string:1156272384>", <string:2858527328>: "<string:4294948978>", <string:1370183266>: "SET", componentStyles: tmp4 };
    const items1 = [callback(importDefault(dependencyMap[8]), obj1), ];
    const obj2 = { style: tmp.stickyOverlay };
    items1[1] = callback(View, obj2);
    obj.children = items1;
    tmp7 = callback2(closure_6, obj);
  }
  const items2 = [tmp7, ];
  const obj3 = { "Bool(false)": "isArray", "Bool(false)": "EXPRESSION_PICKER_EXPRESSION_FOCUS", "Bool(false)": "isArray", "Bool(false)": "isArrayBuffer", "Bool(false)": "18d0a2a6cf6cc6fa0358c3bbfd2bce6e", "Bool(false)": "wumpus-mario", style: tmp.headerText };
  const intl = arg1(dependencyMap[9]).intl;
  obj3.children = intl.string(arg1(dependencyMap[9]).t.1uAmCw);
  items2[1] = callback(arg1(dependencyMap[3]).Text, obj3);
  obj.children = items2;
  return callback2(View, obj);
});
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/MessagesItemSuggestedFriendsHeader.tsx");

export default memoResult;
export const MESSAGES_ITEM_SUGGESTED_FRIENDS_HEADER_HEIGHT = sum;
