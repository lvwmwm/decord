// Module ID: 16584
// Function ID: 16585
// Name: AddFriendScreen
// Dependencies: [32, 19, 17, 1372, 1074, 12175, 21, 4836, 576, 12177, 4678, 1241, 1115, 7809, 7288, 1364, 5437, 4832, 13400, 13402, 2]
// Exports: default

// Module 16584 (AddFriendScreen)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import ContactSyncConstants from "ContactSyncConstants" /* 12175 */;
import ContactSyncUtils from "ContactSyncUtils" /* 12177 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserStore from "UserStore" /* 1372 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let currentUser, dependencyMap;

let c10;
let closure_12;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let unpackModuleId;
({ View: hasOwnProperty, ScrollView: metroRequire } = react_native);
const AnalyticEvents = Constants.AnalyticEvents;
const ContactPermissions = ContactSyncConstants.ContactPermissions;
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let obj = { headerText: { marginTop: 32, marginHorizontal: 16, textAlign: "center" }, subheaderText: { marginVertical: 8, marginHorizontal: 16, textAlign: "center" }, input: obj2, otherOptionsContainer: { marginTop: 16, paddingHorizontal: 16 }, rowContainer: { marginTop: 8 }, background: obj3 };
obj2 = { marginTop: 16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
let closure_13 = createStyles(obj);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/AddFriendScreen.tsx");

export default function AddFriendScreen(navigation) {
  let _undefined;
  let c2;
  let constants2;
  let intl;
  let intl2;
  let intl3;
  let items2;
  let items3;
  let tmp5;
  navigation = navigation.navigation;
  dependencyMap = undefined;
  let callback;
  const sourcePage = navigation.route.params.sourcePage;
  const tmp = closure_13();
  let tmp2 = dependencyMap;
  let obj = navigation(12177);
  const contactSyncAccount = obj.useContactSyncAccount();
  const useState = react.useState;
  let obj2 = navigation(12177);
  const tmp4 = callback(useState(!obj2.isContactSyncEnabled(contactSyncAccount)), 2);
  [tmp5, c2] = tmp4;
  callback = react.useCallback(() => {
    currentUser = currentUser.getCurrentUser();
    let userTag;
    if (null != currentUser) {
      const obj = contactSyncAccount(c2[10]);
      userTag = obj.getUserTag(currentUser);
    }
    const obj2 = contactSyncAccount(c2[11]);
    obj2.track(constants.FRIEND_ADD_VIEWED, { friend_add_type: "Invite", source_page: "Add Friend Modal" });
    const intl = navigation(c2[12]).intl;
    const formatToPlainString = intl.formatToPlainString;
    const obj3 = { url: "" + location.protocol + window.GLOBAL_ENV.WEBAPP_ENDPOINT, username: userTag };
    const v6E9a1J = navigation(c2[12]).t["6E9a1J"];
    const formatToPlainStringResult = formatToPlainString(v6E9a1J, obj3);
    const obj4 = navigation(c2[13]);
    obj4.showShareActionSheet({ message: formatToPlainStringResult }, "Add Friend Modal");
  }, []);
  const items = [callback, navigation, contactSyncAccount];
  const layoutEffect = react.useLayoutEffect(() => {
    let obj = {
      headerRight(arg0) {
        const getRenderHeaderTextButton = navigation(c2[14]).getRenderHeaderTextButton;
        navigation(c2[14]);
        const intl = navigation(c2[12]).intl;
        const obj = {};
        const renderHeaderTextButton = getRenderHeaderTextButton(intl.string(navigation(c2[12]).t.RDE0Sc), callback);
        const merged = Object.assign(arg0);
        return renderHeaderTextButton(obj);
      }
    };
    navigation.setOptions(obj);
    const obj2 = ContactSyncUtils;
    const result = obj2.checkContactPermissions();
    result.then((result) => {
      const NOT_DETERMINED = constants2.NOT_DETERMINED;
      const obj = navigation(c2[15]);
      let tmp5 = result === NOT_DETERMINED || obj.isAndroid() && result === constants2.UNAUTHORIZED;
      obj.isAndroid() && result === constants2.UNAUTHORIZED;
      const tmp2 = navigation;
      const tmp3 = c2;
      if (!tmp5) {
        const tmp2Result = tmp2(tmp3[9]);
        tmp5 = !tmp2Result.isContactSyncEnabled(contactSyncAccount);
      }
      _undefined(tmp5);
    });
  }, items);
  const items1 = [closure_10(contactSyncAccount(5437), { absolute: true }), ];
  let obj3 = { keyboardShouldPersistTaps: "handled", style: tmp.background, children: items2 };
  let obj4 = { style: tmp.headerText, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: intl.string(navigation(1115).t.GWMTSE) };
  const Text = navigation(4832).Text;
  intl = navigation(1115).intl;
  items2 = [closure_10(Text, obj4), , , ];
  const obj5 = { style: tmp.subheaderText, variant: "text-sm/medium", color: "text-default", children: intl2.string(navigation(1115).t["Rn/sLl"]) };
  const Text2 = navigation(4832).Text;
  intl2 = navigation(1115).intl;
  items2[1] = closure_10(Text2, obj5);
  const obj6 = { style: tmp.input, autoFocusInput: false, sourcePage };
  items2[2] = closure_10(contactSyncAccount(13400), obj6);
  const obj7 = { style: tmp.otherOptionsContainer, children: items3 };
  const obj8 = { accessibilityRole: "header", variant: "eyebrow", color: "text-default", children: intl3.string(navigation(1115).t.dukg0Z) };
  const Text3 = navigation(4832).Text;
  intl3 = navigation(1115).intl;
  items3 = [closure_10(Text3, obj8), ];
  let tmp10Result = null;
  const tmp10 = closure_10;
  const tmp11 = contactSyncAccount;
  const tmp12 = closure_6;
  const tmp13 = closure_5;
  const tmp9 = closure_12;
  if (tmp5) {
    const obj9 = { style: tmp.rowContainer, location: "Add Friend Modal" };
    tmp10Result = tmp10(tmp11(13402), obj9);
  }
  const obj10 = { children: items1 };
  items3[1] = tmp10Result;
  items2[3] = closure_11(tmp13, obj7);
  items1[1] = closure_11(tmp12, obj3);
  return closure_11(tmp9, obj10);
};
