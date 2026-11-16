// Module ID: 15203
// Function ID: 15204
// Name: UserProfileWidgetsBoardTab
// Dependencies: [19, 17, 21, 8921, 15204, 15205, 15207, 15221, 15233, 15234, 15235, 2]
// Exports: default

// Module 15203 (UserProfileWidgetsBoardTab)
import react_native from "react-native" /* 17 */;
import UserProfileSharedStylesDefault from "UserProfileSharedStyles" /* 8921 */;
import MobileWidgetEditingExperiment from "MobileWidgetEditingExperiment" /* 15204 */;
import useDisplayableBoardWidgets from "useDisplayableBoardWidgets" /* 15205 */;
import UserProfileWidgetsBoardDefault from "UserProfileWidgetsBoard" /* 15235 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroRequire;
const View = react_native.View;
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = Fragment);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWidgetsBoardTab.tsx");

export default function UserProfileWidgetsBoardTab(isVisible) {
  let cardStyle;
  let isCurrentUser;
  let userId;
  ({ userId, cardStyle, isCurrentUser } = isVisible);
  isVisible = isVisible.isVisible;
  const tmp3 = UserProfileSharedStylesDefault();
  const obj = MobileWidgetEditingExperiment;
  const isMobileWidgetEditingEnabled = obj.useIsMobileWidgetEditingEnabled("UserProfileWidgetsBoardTab");
  const obj3 = { style: tmp3.profileContent, children: null };
  let tmp8 = isCurrentUser;
  const obj2 = useDisplayableBoardWidgets;
  const tmp5 = obj2.useDisplayableBoardWidgets(userId).length > 0;
  const tmp7 = View;
  if (isCurrentUser) {
    const obj4 = { cardStyle };
    tmp8 = React3(tmp(15207), obj4);
  }
  const items = [tmp8, ];
  if (isCurrentUser) {
    if (isMobileWidgetEditingEnabled) {
      let tmp6Result;
      if (!tmp5) {
        tmp6Result = React3(tmp(15221), {});
      }
      items[1] = tmp6Result;
      obj3.children = items;
      return metroRequire(tmp7, obj3);
    }
  }
  let tmp13 = isCurrentUser;
  const tmp12 = hasOwnProperty;
  if (isCurrentUser) {
    tmp13 = !isMobileWidgetEditingEnabled;
  }
  if (tmp13) {
    tmp13 = React3(tmp(15233), {});
  }
  const items1 = [tmp13, , ];
  if (isCurrentUser) {
    isCurrentUser = React3(tmp(15234), {});
  }
  const obj5 = { children: items1 };
  items1[1] = isCurrentUser;
  items1[2] = React3(UserProfileWidgetsBoardDefault, { userId, isVisible, cardStyle });
  tmp6Result = tmp6(tmp12, obj5);
};
