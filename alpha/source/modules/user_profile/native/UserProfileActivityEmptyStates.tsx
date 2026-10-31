// Module ID: 14973
// Function ID: 14974
// Name: UserProfileActivityEmptyStates
// Dependencies: [32, 19, 17, 1072, 21, 1113, 5014, 575, 5624, 6041, 12, 7485, 5258, 5634, 7563, 2]

// Module 14973 (UserProfileActivityEmptyStates)
import _mod12 from "module_12" /* 12 */;
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import intl4 from "intl" /* 1113 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import Text_Text from "Text/Text" /* 5624 */;
import components_Button_Button from "components/Button/Button" /* 5634 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 7485 */;
import openUserSettings from "openUserSettings" /* 7563 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
function EmptyState(arg0) {
  let bodyText;
  let children;
  let heading;
  let items1;
  ({ heading, bodyText, children } = arg0);
  const tmp = closure_10();
  const obj2 = { style: tmp.text, children: items };
  items = [, ];
  const obj = { style: tmp.container, children: items1 };
  const obj3 = { variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", accessibilityRole: "header", style: tmp.centeredText, children: heading };
  items[0] = metroImportDefault(Text_Text.Text, obj3);
  const obj4 = { variant: "text-sm/normal", style: tmp.centeredText, children: bodyText };
  items[1] = metroImportDefault(Text_Text.Text, obj4);
  items1 = [metroImportAll(View, obj2), children];
  return metroImportAll(View, obj);
}
const View = react_native.View;
const UserSettingsSections = Constants.UserSettingsSections;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let items = [
  () => {
    const intl = intl4.intl;
    return intl.string(intl4.t.AyMGXA);
  },
  () => {
    const intl = intl4.intl;
    return intl.string(intl4.t.aAFW7V);
  },
  (name) => {
    const intl = intl4.intl;
    const obj = { name };
    return intl.formatToPlainString(intl4.t.h2g0cM, obj);
  },
  () => {
    const intl = intl4.intl;
    return intl.string(intl4.t.rrYh58);
  },
  () => {
    const intl = intl4.intl;
    return intl.string(intl4.t["HX3K+F"]);
  },
  () => {
    const intl = intl4.intl;
    return intl.string(intl4.t["/yW3aY"]);
  },
  () => {
    const intl = intl4.intl;
    return intl.string(intl4.t["PmL/v0"]);
  },
  () => {
    const intl = intl4.intl;
    return intl.string(intl4.t.IALa3h);
  },
  () => {
    const intl = intl4.intl;
    return intl.string(intl4.t.HRcTFL);
  },
  () => {
    const intl = intl4.intl;
    return intl.string(intl4.t.NuCqPt);
  },
  () => {
    const intl = intl4.intl;
    return intl.string(intl4.t["M1tw+4"]);
  },
  () => {
    const intl = intl4.intl;
    return intl.string(intl4.t.UBm1y2);
  },
  () => {
    const intl = intl4.intl;
    return intl.string(intl4.t.Cu95PQ);
  },
  () => {
    const intl = intl4.intl;
    return intl.string(intl4.t["R/wFuh"]);
  },
  () => {
    const intl = intl4.intl;
    return intl.string(intl4.t.HQPAVT);
  },
  () => {
    const intl = intl4.intl;
    return intl.string(intl4.t.YolGh4);
  }
];
let createStyles = createStyles_mod;
let obj = { container: obj2, text: obj3, centeredText: { textAlign: "center" }, buttons: obj4 };
obj2 = { alignItems: "center", paddingVertical: nativeDefault.space.PX_32, gap: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { gap: nativeDefault.space.PX_8, alignItems: "center" };
obj4 = { flexDirection: "row", flexWrap: "wrap", justifyContent: "center", gap: nativeDefault.space.PX_8 };
let closure_10 = createStyles(obj);
const memoResult = react.memo(function UserProfileActivityEmptyOtherUser(user) {
  let Button;
  let channelId;
  let guildId;
  let intl2;
  let obj3;
  let obj4;
  user = user.user;
  let name;
  ({ guildId, channelId } = user);
  let tmp = closure_10();
  let obj = name(6041);
  name = obj.getName(guildId, channelId, user);
  const intl = user(1113).intl;
  items = [user.id];
  const formatToPlainStringResult = intl.formatToPlainString(user(1113).t.sjSitP, { name });
  let obj2 = {
    heading: formatToPlainStringResult,
    bodyText: _slicedToArray(react.useState(() => {
      const obj = _mod12;
      let sampleResult = obj.sample(items);
      const tmp = items;
      if (sampleResult == null) {
        sampleResult = tmp[0];
      }
      return sampleResult(name);
    }), 1)[0],
    children: closure_7(View, obj3)
  };
  obj3 = { style: tmp.buttons, children: closure_7(Button, obj4) };
  const callback = react.useCallback(() => {
    const obj = ChannelActionCreatorsDefault;
    const obj2 = { recipientIds: user.id };
    obj.openPrivateChannel(obj2);
    const obj3 = ActionSheetActionCreatorsDefault;
    obj3.hideAllActionSheets();
  }, items);
  obj4 = { size: "sm", variant: "secondary", text: intl2.string(user(1113).t["g33r/P"]), onPress: callback };
  Button = user(5634).Button;
  intl2 = user(1113).intl;
  return closure_7(EmptyState, obj2);
});
const memoResult1 = react.memo(function UserProfileActivityEmptyCurrentUser() {
  let Button;
  let intl;
  let intl2;
  let intl3;
  let obj2;
  let obj3;
  let obj = { heading: intl.string(intl4.t.VB6LWY), bodyText: intl2.string(intl4.t.KpjsU9), children: metroImportDefault(View, obj2) };
  const tmp = closure_10();
  const callback = react.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideAllActionSheets();
    const obj2 = openUserSettings;
    const obj3 = { screen: constants.CONNECTIONS };
    obj2.openUserSettings(obj3);
  }, []);
  intl = intl4.intl;
  intl2 = intl4.intl;
  obj2 = { style: tmp.buttons, children: metroImportDefault(Button, obj3) };
  obj3 = { size: "sm", variant: "secondary", text: intl3.string(intl4.t["/Hl24U"]), onPress: callback };
  Button = components_Button_Button.Button;
  intl3 = intl4.intl;
  return metroImportDefault(EmptyState, obj);
});
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileActivityEmptyStates.tsx");

export const UserProfileActivityEmptyOtherUser = memoResult;
export const UserProfileActivityEmptyCurrentUser = memoResult1;
