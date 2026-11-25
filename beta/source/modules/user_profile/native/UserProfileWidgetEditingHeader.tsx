// Module ID: 15963
// Function ID: 15964
// Name: UserProfileWidgetEditingHeader
// Dependencies: [19, 17, 502, 8069, 21, 4913, 575, 504, 10354, 5504, 1112, 5511, 9578, 8136, 5127, 14584, 2119, 7591, 10233, 15964, 2]
// Exports: default

// Module 15963 (UserProfileWidgetEditingHeader)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import Constants from "Constants" /* 8069 */;
import UserProfileAnalyticsUtils from "UserProfileAnalyticsUtils" /* 8136 */;
import react from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4913 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let obj2;
const View = react_native.View;
let closure_6 = Constants.TrackUserProfileEditActions;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let obj = { header: obj2, heading: { flex: 1 } };
obj2 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let closure_9 = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWidgetEditingHeader.tsx");

export default function UserProfileWidgetEditingHeader() {
  let ArrowsUpDownIcon;
  let PlusSmallIcon;
  let id;
  let intl;
  let intl2;
  let intl3;
  let items1;
  let obj6;
  let obj8;
  let stateFromStores;
  const tmp = closure_9();
  let obj = stateFromStores(504);
  const items = [AuthenticationStore];
  stateFromStores = obj.useStateFromStores(items, () => id.getId());
  let obj2 = stateFromStores(10354);
  const length = obj2.useBoardWidgets(stateFromStores).length;
  const ref = react.useRef(null);
  let obj3 = { style: tmp.header, children: items1 };
  const obj4 = { variant: "body-sm/semibold", color: "text-subtle", style: tmp.heading, children: intl.string(stateFromStores(1112).t.OYlggR) };
  const Heading = stateFromStores(5504).Heading;
  intl = stateFromStores(1112).intl;
  items1 = [closure_7(Heading, obj4), , ];
  const obj5 = {
    size: "sm",
    variant: "secondary",
    icon: closure_7(PlusSmallIcon, obj6),
    text: intl2.string(stateFromStores(1112).t["lBG2s/"]),
    onPress() {
      const obj = UserProfileAnalyticsUtils;
      const obj2 = { userId: stateFromStores, action: constants.PRESS_ADD_WIDGET };
      const result = obj.trackUserProfileEditAction(obj2);
      const obj3 = ActionSheetActionCreatorsDefault;
      obj3.openLazy(asyncRequire(14584, dependencyMap.paths), "UserProfileWidgetAddActionSheet");
    }
  };
  const Button = stateFromStores(5511).Button;
  obj6 = { size: "xs", color: ref(575).colors.ICON_DEFAULT };
  PlusSmallIcon = stateFromStores(9578).PlusSmallIcon;
  intl2 = stateFromStores(1112).intl;
  items1[1] = closure_7(Button, obj5);
  const obj7 = {
    ref,
    size: "sm",
    variant: "secondary",
    icon: closure_7(ArrowsUpDownIcon, obj8),
    accessibilityLabel: intl3.string(stateFromStores(1112).t.tm1WHd),
    disabled: length < 2,
    onPress() {
      const obj = ActionSheetActionCreatorsDefault;
      const obj2 = { returnFocusRef: ref };
      return obj.openLazy(asyncRequire(15964, dependencyMap.paths), "UserProfileWidgetReorderActionSheet", obj2);
    }
  };
  const IconButton = stateFromStores(7591).IconButton;
  obj8 = { size: "sm", color: ref(575).colors.ICON_DEFAULT };
  ArrowsUpDownIcon = stateFromStores(10233).ArrowsUpDownIcon;
  intl3 = stateFromStores(1112).intl;
  items1[2] = closure_7(IconButton, obj7);
  return closure_8(View, obj3);
};
