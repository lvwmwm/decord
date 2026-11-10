// Module ID: 15259
// Function ID: 15260
// Name: UserProfileGameCoverGrid
// Dependencies: [19, 17, 21, 5142, 15233, 15247, 2]
// Exports: default

// Module 15259 (UserProfileGameCoverGrid)
import react_native from "react-native" /* 17 */;
import UserProfileGameWidgetConstants from "UserProfileGameWidgetConstants" /* 15233 */;
import UserProfileWidgetExpandableItems from "UserProfileWidgetExpandableItems" /* 15247 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5142 */;
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

export default function UserProfileGameCoverGrid(arg0) {
  let columns;
  let expanded;
  let games;
  let hiddenCount;
  let items;
  let renderCover;
  let toggleExpanded;
  ({ games, columns, renderCover } = arg0);
  const tmp = closure_6();
  const obj = UserProfileWidgetExpandableItems;
  const expandableItems = obj.useExpandableItems(games, 2 * columns);
  const visibleItems = expandableItems.visibleItems;
  const obj2 = { children: items };
  ({ hiddenCount, expanded, toggleExpanded } = expandableItems);
  items = [, ];
  const obj3 = { style: tmp.grid, children: visibleItems.map(renderCover) };
  items[0] = _false(View, obj3);
  items[1] = _false(UserProfileWidgetExpandableItems.WidgetViewMoreButton, { expanded, hiddenCount, onPress: toggleExpanded });
  return hasOwnProperty(React3, obj2);
};
