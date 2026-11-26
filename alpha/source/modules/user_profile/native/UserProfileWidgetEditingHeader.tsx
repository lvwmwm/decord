// Module ID: 16170
// Function ID: 16171
// Name: UserProfileWidgetEditingHeader
// Dependencies: [19, 17, 502, 6137, 21, 5043, 575, 504, 14677, 5634, 1112, 5641, 11268, 6382, 5257, 15016, 2120, 7944, 13117, 16171, 2]
// Exports: default

// Module 16170 (UserProfileWidgetEditingHeader)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import asyncRequire from "asyncRequire" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import Constants from "Constants" /* 6137 */;
import UserProfileAnalyticsUtils from "UserProfileAnalyticsUtils" /* 6382 */;
import react from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5043 */;
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
  let obj2 = stateFromStores(14677);
  const length = obj2.useBoardWidgets(stateFromStores).length;
  const ref = react.useRef(null);
  let obj3 = { style: tmp.header, children: items1 };
  const obj4 = { variant: "body-sm/semibold", color: "text-subtle", style: tmp.heading, children: intl.string(stateFromStores(1112).t.OYlggR) };
  const Heading = stateFromStores(5634).Heading;
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
      obj3.openLazy(asyncRequire(15016, dependencyMap.paths), "UserProfileWidgetAddActionSheet");
    }
  };
  const Button = stateFromStores(5641).Button;
  obj6 = { size: "xs", color: ref(575).colors.ICON_DEFAULT };
  PlusSmallIcon = stateFromStores(11268).PlusSmallIcon;
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
      return obj.openLazy(asyncRequire(16171, dependencyMap.paths), "UserProfileWidgetReorderActionSheet", obj2);
    }
  };
  const IconButton = stateFromStores(7944).IconButton;
  obj8 = { size: "sm", color: ref(575).colors.ICON_DEFAULT };
  ArrowsUpDownIcon = stateFromStores(13117).ArrowsUpDownIcon;
  intl3 = stateFromStores(1112).intl;
  items1[2] = closure_7(IconButton, obj7);
  return closure_8(View, obj3);
};
