// Module ID: 15141
// Function ID: 15142
// Name: UserProfileWidgetsBoardTab
// Dependencies: [19, 17, 21, 8906, 15142, 15143, 575, 15145, 15159, 15162, 15163, 2]
// Exports: default

// Module 15141 (UserProfileWidgetsBoardTab)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import UserProfileSharedStylesDefault from "UserProfileSharedStyles" /* 8906 */;
import MobileWidgetEditingExperiment from "MobileWidgetEditingExperiment" /* 15142 */;
import useDisplayableBoardWidgets from "useDisplayableBoardWidgets" /* 15143 */;
import UserProfileWidgetsEmptyStateDefault from "UserProfileWidgetsEmptyState" /* 15145 */;
import ConjureCustomWidgetAddOptionDefault from "ConjureCustomWidgetAddOption" /* 15159 */;
import UserProfileWidgetsBoardEditNoticeDefault from "UserProfileWidgetsBoardEditNotice" /* 15162 */;
import UserProfileWidgetsBoardDefault from "UserProfileWidgetsBoard" /* 15163 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroRequire;
const View = react_native.View;
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = Fragment);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWidgetsBoardTab.tsx");

export default function UserProfileWidgetsBoardTab(arg0) {
  let cardStyle;
  let isCurrentUser;
  let isVisible;
  let tmp10;
  let tmp11;
  let tmp13;
  let userId;
  ({ userId, isCurrentUser } = arg0);
  ({ isVisible, cardStyle } = arg0);
  const tmp3 = UserProfileSharedStylesDefault();
  const obj = MobileWidgetEditingExperiment;
  const isMobileWidgetEditingEnabled = obj.useIsMobileWidgetEditingEnabled("UserProfileWidgetsBoardTab");
  let tmp6 = isCurrentUser;
  const obj2 = useDisplayableBoardWidgets;
  const tmp5 = obj2.useDisplayableBoardWidgets(userId).length > 0;
  if (isCurrentUser) {
    tmp6 = isMobileWidgetEditingEnabled;
  }
  if (tmp6) {
    tmp6 = !tmp5;
  }
  const items = [tmp3.profileContent, ];
  let tmp9 = tmp6;
  const tmp8 = View;
  if (tmp6) {
    tmp9 = { gap: nativeDefault.space.PX_24 };
    const obj3 = { gap: nativeDefault.space.PX_24 };
  }
  items[1] = tmp9;
  const obj5 = { children: null };
  const obj4 = { style: items, children: tmp10(tmp11, tmp13) };
  tmp10 = metroRequire;
  tmp11 = hasOwnProperty;
  if (tmp6) {
    const items1 = [React3(UserProfileWidgetsEmptyStateDefault, {}), React3(ConjureCustomWidgetAddOptionDefault, {})];
    obj5.children = items1;
    tmp13 = obj5;
  } else {
    const items2 = [isCurrentUser && !isMobileWidgetEditingEnabled && React3(UserProfileWidgetsBoardEditNoticeDefault, {}), , ];
    isCurrentUser && !isMobileWidgetEditingEnabled && React3(UserProfileWidgetsBoardEditNoticeDefault, {});
    if (isCurrentUser) {
      isCurrentUser = tmp7(tmp(15159), {});
    }
    items2[1] = isCurrentUser;
    const obj6 = { userId, isVisible, cardStyle };
    items2[2] = React3(UserProfileWidgetsBoardDefault, obj6);
    obj5.children = items2;
    tmp13 = obj5;
  }
  return React3(tmp8, obj4);
};
