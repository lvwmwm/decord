// Module ID: 14610
// Function ID: 14611
// Name: UserProfileGameCoverGrid
// Dependencies: [19, 17, 21, 5043, 14565, 14609, 2]
// Exports: default

// Module 14610 (UserProfileGameCoverGrid)
import react_native from "react-native" /* 17 */;
import UserProfileGameWidgetConstants from "UserProfileGameWidgetConstants" /* 14565 */;
import UserProfileWidgetExpandableItems from "UserProfileWidgetExpandableItems" /* 14609 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5043 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: c3, Fragment: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { grid: obj2 };
obj2 = { flexDirection: "row", flexWrap: "wrap", gap: UserProfileGameWidgetConstants.GAME_COVER_GRID_GAP };
let closure_6 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileGameCoverGrid.tsx");

export default function UserProfileGameCoverGrid(disableInteraction) {
  let columns;
  let expanded;
  let games;
  let hiddenCount;
  let renderCover;
  let toggleExpanded;
  disableInteraction = disableInteraction.disableInteraction;
  ({ games, columns, renderCover } = disableInteraction);
  const tmp = closure_6();
  const obj = UserProfileWidgetExpandableItems;
  const expandableItems = obj.useExpandableItems(games, 2 * columns);
  const visibleItems = expandableItems.visibleItems;
  ({ hiddenCount, expanded, toggleExpanded } = expandableItems);
  const children = [, ];
  const obj2 = { style: tmp.grid, children: visibleItems.map(renderCover) };
  children[0] = _false(View, obj2);
  let tmp7Result = !disableInteraction;
  const tmp5 = hasOwnProperty;
  const tmp6 = React3;
  const tmp7 = _false;
  if (tmp7Result) {
    const obj3 = { expanded, hiddenCount, onPress: toggleExpanded };
    tmp7Result = tmp7(UserProfileWidgetExpandableItems.WidgetViewMoreButton, obj3);
  }
  children[1] = tmp7Result;
  return tmp5(tmp6, { children });
};
