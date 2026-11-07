// Module ID: 15173
// Function ID: 15174
// Name: UserProfileWidgetsBoardTab
// Dependencies: [19, 17, 21, 8888, 15174, 15175, 15177, 15194, 15195, 15196, 2]
// Exports: default

// Module 15173 (UserProfileWidgetsBoardTab)
import react_native from "react-native" /* 17 */;
import UserProfileSharedStylesDefault from "UserProfileSharedStyles" /* 8888 */;
import MobileWidgetEditingExperiment from "MobileWidgetEditingExperiment" /* 15174 */;
import useDisplayableBoardWidgets from "useDisplayableBoardWidgets" /* 15175 */;
import UserProfileWidgetsBoardDefault from "UserProfileWidgetsBoard" /* 15196 */;
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
  let userId;
  ({ userId, isCurrentUser } = arg0);
  ({ isVisible, cardStyle } = arg0);
  const tmp3 = UserProfileSharedStylesDefault();
  const obj = MobileWidgetEditingExperiment;
  const isMobileWidgetEditingEnabled = obj.useIsMobileWidgetEditingEnabled("UserProfileWidgetsBoardTab");
  const obj3 = { style: tmp3.profileContent, children: null };
  const obj2 = useDisplayableBoardWidgets;
  if (isCurrentUser) {
    if (isMobileWidgetEditingEnabled) {
      let tmp8Result;
      if (obj2.useDisplayableBoardWidgets(userId).length <= 0) {
        tmp8Result = tmp5(tmp(15177), {});
      }
      obj3.children = tmp8Result;
      return React3(tmp6, obj3);
    }
  }
  let tmp5Result2 = isCurrentUser;
  const tmp8 = metroRequire;
  const tmp9 = hasOwnProperty;
  if (isCurrentUser) {
    tmp5Result2 = !isMobileWidgetEditingEnabled;
  }
  if (tmp5Result2) {
    tmp5Result2 = tmp5(tmp(15194), {});
  }
  const items = [tmp5Result2, , ];
  if (isCurrentUser) {
    isCurrentUser = tmp5(tmp(15195), {});
  }
  const obj4 = { children: items };
  items[1] = isCurrentUser;
  items[2] = React3(UserProfileWidgetsBoardDefault, { userId, isVisible, cardStyle });
  tmp8Result = tmp8(tmp9, obj4);
};
