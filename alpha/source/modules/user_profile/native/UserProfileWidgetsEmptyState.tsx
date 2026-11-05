// Module ID: 16832
// Function ID: 16833
// Name: UserProfileWidgetsEmptyState
// Dependencies: [19, 17, 502, 8900, 21, 5143, 575, 504, 5763, 1113, 5770, 8908, 5384, 16822, 2123, 2]
// Exports: default

// Module 16832 (UserProfileWidgetsEmptyState)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5384 */;
import Constants from "Constants" /* 8900 */;
import UserProfileAnalyticsUtils from "UserProfileAnalyticsUtils" /* 8908 */;
import react from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5143 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
const View = react_native.View;
let closure_5 = Constants.TrackUserProfileEditActions;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, textContainer: obj3, centeredText: { textAlign: "center" } };
obj2 = { paddingTop: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_24, alignItems: "center" };
createStyles = createStyles.createStyles;
obj3 = { alignSelf: "stretch", gap: nativeDefault.space.PX_8 };
let closure_8 = createStyles(obj);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWidgetsEmptyState.tsx");

export default function UserProfileWidgetsEmptyState() {
  let id;
  let intl;
  let intl2;
  let intl3;
  let items1;
  let items2;
  let userId;
  const tmp = closure_8();
  let obj = require("get initialized");
  const items = [AuthenticationStore];
  _require = obj.useStateFromStores(items, () => id.getId());
  let obj2 = { style: tmp.container, children: items2 };
  let obj3 = { style: tmp.textContainer, children: items1 };
  const obj4 = { variant: "heading-sm/semibold", color: "text-strong", style: tmp.centeredText, children: intl.string(require("intl").t["oqalC+"]) };
  const Heading = require("Text/Text").Heading;
  intl = require("intl").intl;
  items1 = [closure_6(Heading, obj4), ];
  const obj5 = { variant: "body-sm/normal", color: "text-default", style: tmp.centeredText, children: intl2.string(require("intl").t.O9SQ1c) };
  const Text = require("Text/Text").Text;
  intl2 = require("intl").intl;
  items1[1] = closure_6(Text, obj5);
  items2 = [closure_7(View, obj3), ];
  const obj6 = {
    variant: "secondary",
    text: intl3.string(require("intl").t["/NKLK5"]),
    onPress() {
      const obj = UserProfileAnalyticsUtils;
      const obj2 = { userId, action: constants.PRESS_ADD_WIDGET };
      const result = obj.trackUserProfileEditAction(obj2);
      const obj3 = ActionSheetActionCreatorsDefault;
      obj3.openLazy(asyncRequire(16822, dependencyMap.paths), "UserProfileWidgetAddActionSheet");
    }
  };
  const Button = require("components/Button/Button").Button;
  intl3 = require("intl").intl;
  items2[1] = closure_6(Button, obj6);
  return closure_7(View, obj2);
};
