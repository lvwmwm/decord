// Module ID: 15253
// Function ID: 15254
// Name: UserProfileWidgetExpandableItems
// Dependencies: [32, 19, 17, 21, 5170, 575, 5783, 1113, 2]
// Exports: WidgetViewMoreButton, useExpandableItems

// Module 15253 (UserProfileWidgetExpandableItems)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1113 */;
import Text_Text from "Text/Text" /* 5783 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

let obj2;
const Pressable = react_native.Pressable;
const jsx = Fragment.jsx;
const hitSlop = { top: 8, bottom: 8, left: 8, right: 8 };
let obj = { viewMore: obj2 };
obj2 = { marginTop: nativeDefault.space.PX_12 };
let closure_7 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWidgetExpandableItems.tsx");

export function useExpandableItems(games, arg1) {
  let closure_129_0;
  let tmp2;
  [tmp2, closure_129_0] = react.useState(false);
  let substr = games;
  _slicedToArray(react.useState(false), 2);
  const bound = Math.max(games.length - arg1, 0);
  const obj = react;
  if (!tmp2) {
    substr = games.slice(0, arg1);
  }
  const obj2 = { visibleItems: substr, hiddenCount: bound, expanded: tmp2, toggleExpanded: obj.useCallback(() => closure_1_0((arg0) => !arg0), []) };
  return obj2;
}
export function WidgetViewMoreButton(hiddenCount) {
  let expanded;
  let onPress;
  hiddenCount = hiddenCount.hiddenCount;
  ({ expanded, onPress } = hiddenCount);
  let tmp4Result = null;
  if (0 !== hiddenCount) {
    const obj2 = { style: tmp.viewMore, hitSlop, onPress, accessibilityRole: "button", children: null };
    const Text = Text_Text.Text;
    const intl = intl2.intl;
    const tmp5 = Pressable;
    if (expanded) {
      let stringResult = intl.string(tmp7(1113).t["6MwJo/"]);
    } else {
      const obj = { numberOfItems: hiddenCount };
      stringResult = intl.formatToPlainString(tmp7(1113).t.zr0Y5R, obj);
    }
    tmp4Result = tmp4(tmp5, obj2);
  }
  return tmp4Result;
}
