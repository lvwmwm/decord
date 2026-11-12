// Module ID: 16910
// Function ID: 16911
// Name: UserProfileWidgetEditingHeader
// Dependencies: [19, 17, 502, 8858, 21, 5170, 575, 504, 5783, 1113, 5790, 9692, 8866, 5406, 15233, 2118, 8131, 12717, 2]
// Exports: default

// Module 16910 (UserProfileWidgetEditingHeader)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5406 */;
import Constants from "Constants" /* 8858 */;
import UserProfileAnalyticsUtils from "UserProfileAnalyticsUtils" /* 8866 */;
import react from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let metroImportDefault;
let metroRequire;
let obj2;
const View = react_native.View;
let closure_5 = Constants.TrackUserProfileEditActions;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { header: obj2, heading: { flex: 1 } };
obj2 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let closure_8 = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWidgetEditingHeader.tsx");

export default function UserProfileWidgetEditingHeader() {
  let ArrowsUpDownIcon;
  let PlusSmallIcon;
  let id;
  let intl;
  let intl2;
  let intl3;
  let items1;
  let obj5;
  let obj7;
  let userId;
  const tmp = closure_8();
  let obj = require("get initialized");
  const items = [AuthenticationStore];
  _require = obj.useStateFromStores(items, () => id.getId());
  let obj2 = { style: tmp.header, children: items1 };
  let obj3 = { variant: "body-sm/semibold", color: "text-subtle", style: tmp.heading, children: intl.string(require("intl").t.OYlggR) };
  const Heading = require("Text/Text").Heading;
  intl = require("intl").intl;
  items1 = [closure_6(Heading, obj3), , ];
  const obj4 = {
    size: "sm",
    variant: "secondary",
    icon: closure_6(PlusSmallIcon, obj5),
    text: intl2.string(require("intl").t["lBG2s/"]),
    onPress() {
      const obj = UserProfileAnalyticsUtils;
      const obj2 = { userId, action: constants.PRESS_ADD_WIDGET };
      const result = obj.trackUserProfileEditAction(obj2);
      const obj3 = ActionSheetActionCreatorsDefault;
      obj3.openLazy(asyncRequire(15233, dependencyMap.paths), "UserProfileWidgetAddActionSheet");
    }
  };
  const Button = require("components/Button/Button").Button;
  obj5 = { size: "xs", color: nativeDefault.colors.ICON_DEFAULT };
  PlusSmallIcon = require("PlusSmallIcon").PlusSmallIcon;
  intl2 = require("intl").intl;
  items1[1] = closure_6(Button, obj4);
  const obj6 = {
    size: "sm",
    variant: "secondary",
    icon: closure_6(ArrowsUpDownIcon, obj7),
    accessibilityLabel: intl3.string(require("intl").t.tm1WHd),
    onPress() {

    }
  };
  const IconButton = require("IconButton").IconButton;
  obj7 = { size: "sm", color: nativeDefault.colors.ICON_DEFAULT };
  ArrowsUpDownIcon = require("ArrowsUpDownIcon").ArrowsUpDownIcon;
  intl3 = require("intl").intl;
  items1[2] = closure_6(IconButton, obj6);
  return closure_7(View, obj2);
};
