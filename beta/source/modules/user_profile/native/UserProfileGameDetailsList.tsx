// Module ID: 15252
// Function ID: 15253
// Name: UserProfileGameDetailsList
// Dependencies: [19, 17, 21, 5170, 575, 15253, 2]
// Exports: default

// Module 15252 (UserProfileGameDetailsList)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import UserProfileWidgetExpandableItems from "UserProfileWidgetExpandableItems" /* 15253 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: c3, Fragment: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { list: obj2 };
obj2 = { gap: nativeDefault.space.PX_16 };
let closure_6 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileGameDetailsList.tsx");

export default function UserProfileGameDetailsList(arg0) {
  let expanded;
  let games;
  let hiddenCount;
  let items;
  let renderRow;
  let toggleExpanded;
  ({ games, renderRow } = arg0);
  const tmp = closure_6();
  const obj = UserProfileWidgetExpandableItems;
  const expandableItems = obj.useExpandableItems(games, 2);
  const visibleItems = expandableItems.visibleItems;
  const obj2 = { children: items };
  ({ hiddenCount, expanded, toggleExpanded } = expandableItems);
  items = [, ];
  const obj3 = { style: tmp.list, children: visibleItems.map(renderRow) };
  items[0] = _false(View, obj3);
  items[1] = _false(UserProfileWidgetExpandableItems.WidgetViewMoreButton, { expanded, hiddenCount, onPress: toggleExpanded });
  return hasOwnProperty(React3, obj2);
};
