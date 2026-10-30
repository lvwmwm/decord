// Module ID: 14918
// Function ID: 14919
// Name: UserProfileWidgetContainer
// Dependencies: [19, 17, 502, 21, 5009, 575, 504, 7370, 14919, 14923, 2]
// Exports: default

// Module 14918 (UserProfileWidgetContainer)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import UserProfileCardDefault from "UserProfileCard" /* 7370 */;
import react from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let obj2;
let tmp6;
const UserProfileWidgetReportButtonDefault = tmp6(14923);
const View = react_native.View;
const jsx = Fragment.jsx;
let obj = { actions: obj2 };
obj2 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let closure_6 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWidgetContainer.tsx");

export default function UserProfileWidgetContainer(userId) {
  let actionButtons;
  let children;
  let disableInteraction;
  let title;
  let titleLeadingIcon;
  let widget;
  userId = userId.userId;
  ({ widget, title, actionButtons, disableInteraction } = userId);
  ({ children, titleLeadingIcon } = userId);
  if (disableInteraction === undefined) {
    disableInteraction = false;
  }
  const style = userId.style;
  const items = [AuthenticationStore];
  const tmp = closure_6();
  const obj = userId(504);
  const stateFromStores = obj.useStateFromStores(items, () => AuthenticationStore.getId() === userId);
  UserProfileCardDefault;
  const tmp2 = userId;
  if (title == null) {
    const tmp2Result = tmp2(14919);
    title = tmp2Result.getWidgetTitle(widget);
  }
  let tmp8 = null;
  if (!disableInteraction) {
    let tmp5Result2;
    if (stateFromStores) {
      let tmp5Result = null;
      if (null != actionButtons) {
        tmp5Result = null;
        if (actionButtons.length > 0) {
          const obj3 = { style: tmp.actions, children: actionButtons };
          tmp5Result = tmp5(View, obj3);
        }
      }
      tmp5Result2 = tmp5Result;
    } else {
      const obj4 = { userId, widget };
      tmp5Result2 = tmp5(UserProfileWidgetReportButtonDefault, obj4);
    }
    tmp8 = tmp5Result2;
  }
  return <tmp7 style={style} title={title} titleLeadingIcon={titleLeadingIcon} trailingAction={tmp8}>{children}</tmp7>;
};
