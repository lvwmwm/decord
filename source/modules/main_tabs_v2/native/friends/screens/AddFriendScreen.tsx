// Module ID: 15501
// Function ID: 119221
// Name: AddFriendScreen
// Dependencies: [57, 31, 27, 1849, 653, 11734, 33, 4130, 689, 11736, 3969, 675, 1212, 8376, 9158, 477, 4662, 4126, 12914, 12916, 2]
// Exports: default

// Module 15501 (AddFriendScreen)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { AnalyticEvents } from "ME";
import { ContactPermissions } from "ContactSyncLandingPage";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
let closure_5;
let closure_6;
const require = arg1;
({ View: closure_5, ScrollView: closure_6 } = get_ActivityIndicator);
({ jsx: closure_10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
_createForOfIteratorHelperLoose = { headerText: { marginTop: 32, marginHorizontal: 16, textAlign: "center" }, subheaderText: { marginVertical: 8, marginHorizontal: 16, textAlign: "center" } };
_createForOfIteratorHelperLoose = { marginTop: 16, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER };
_createForOfIteratorHelperLoose.input = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.otherOptionsContainer = { marginTop: 16, paddingHorizontal: 16 };
_createForOfIteratorHelperLoose.rowContainer = { marginTop: 8 };
_createForOfIteratorHelperLoose.background = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/AddFriendScreen.tsx");

export default function AddFriendScreen(navigation) {
  let dependencyMap;
  let tmp4;
  navigation = navigation.navigation;
  let tmp = _createForOfIteratorHelperLoose();
  let obj = navigation(11736);
  const contactSyncAccount = obj.useContactSyncAccount();
  let obj1 = navigation(11736);
  [tmp4, dependencyMap] = callback(React.useState(!obj1.isContactSyncEnabled(contactSyncAccount)), 2);
  callback = React.useCallback(() => {
    const currentUser = outer1_7.getCurrentUser();
    let userTag;
    if (null != currentUser) {
      let obj = contactSyncAccount(outer1_2[10]);
      userTag = obj.getUserTag(currentUser);
    }
    contactSyncAccount(outer1_2[11]).track(outer1_8.FRIEND_ADD_VIEWED, { friend_add_type: "Invite", source_page: "Add Friend Modal" });
    const intl = navigation(outer1_2[12]).intl;
    obj = { url: "" + location.protocol + window.GLOBAL_ENV.WEBAPP_ENDPOINT, username: userTag };
    const obj2 = contactSyncAccount(outer1_2[11]);
    const formatToPlainStringResult = intl.formatToPlainString(navigation(outer1_2[12]).t["6E9a1J"], obj);
    navigation(outer1_2[13]).showShareActionSheet({ message: formatToPlainStringResult }, "Add Friend Modal");
  }, []);
  const items = [callback, navigation, contactSyncAccount];
  const layoutEffect = React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight(arg0) {
        let obj = navigation(outer2_2[14]);
        const intl = navigation(outer2_2[12]).intl;
        obj = {};
        const renderHeaderTextButton = obj.getRenderHeaderTextButton(intl.string(navigation(outer2_2[12]).t.RDE0Sc), outer1_3);
        const merged = Object.assign(arg0);
        return renderHeaderTextButton(obj);
      }
    });
    const result = navigation(outer1_2[9]).checkContactPermissions();
    result.then((arg0) => {
      let tmp = arg0 === outer2_9.NOT_DETERMINED;
      let isAndroidResult = navigation(outer2_2[15]).isAndroid();
      if (isAndroidResult) {
        isAndroidResult = arg0 === outer2_9.UNAUTHORIZED;
      }
      if (!tmp) {
        tmp = isAndroidResult;
      }
      if (!tmp) {
        tmp = !navigation(outer2_2[9]).isContactSyncEnabled(outer1_1);
        const obj2 = navigation(outer2_2[9]);
      }
      outer1_2(tmp);
    });
  }, items);
  obj = {};
  const items1 = [callback(contactSyncAccount(4662), { absolute: true }), ];
  obj = { keyboardShouldPersistTaps: "handled", style: tmp.background };
  obj1 = { style: tmp.headerText, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary" };
  let intl = navigation(1212).intl;
  obj1.children = intl.string(navigation(1212).t.GWMTSE);
  const items2 = [callback(navigation(4126).Text, obj1), , , ];
  let obj2 = { style: tmp.subheaderText, variant: "text-sm/medium", color: "text-default" };
  const intl2 = navigation(1212).intl;
  obj2.children = intl2.string(navigation(1212).t["Rn/sLl"]);
  items2[1] = callback(navigation(4126).Text, obj2);
  items2[2] = callback(contactSyncAccount(12914), { style: tmp.input, autoFocusInput: false, sourcePage: navigation.route.params.sourcePage });
  const obj4 = { style: tmp.otherOptionsContainer };
  const obj5 = { accessibilityRole: "header", variant: "eyebrow", color: "text-default" };
  const intl3 = navigation(1212).intl;
  obj5.children = intl3.string(navigation(1212).t.dukg0Z);
  const items3 = [callback(navigation(4126).Text, obj5), ];
  let tmp11 = null;
  if (tmp4) {
    const obj6 = { style: tmp.rowContainer, location: "Add Friend Modal" };
    tmp11 = callback(contactSyncAccount(12916), obj6);
  }
  items3[1] = tmp11;
  obj4.children = items3;
  items2[3] = closure_11(closure_5, obj4);
  obj.children = items2;
  items1[1] = closure_11(closure_6, obj);
  obj.children = items1;
  return closure_11(closure_12, obj);
};
