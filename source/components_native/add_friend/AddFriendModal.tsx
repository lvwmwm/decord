// Module ID: 12912
// Function ID: 100248
// Name: AddFriendModalScene
// Dependencies: [57, 31, 27, 1849, 653, 11734, 33, 4130, 5052, 689, 11736, 4559, 675, 477, 1459, 4337, 3969, 1212, 8376, 5788, 12913, 5087, 4126, 12914, 12916, 1557, 5517, 2]
// Exports: default

// Module 12912 (AddFriendModalScene)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "set";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";
import { ContactPermissions } from "ContactSyncLandingPage";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult from "createTextStyle";

let closure_10;
let closure_11;
let closure_5;
let closure_6;
const require = arg1;
function AddFriendModalScene(onSkip) {
  onSkip = onSkip.onSkip;
  const sourceMetadata = onSkip.sourceMetadata;
  let tmp = _createForOfIteratorHelperLoose();
  let obj = onSkip(contactSyncAccount[10]);
  contactSyncAccount = obj.useContactSyncAccount();
  let obj1 = onSkip(contactSyncAccount[10]);
  const tmp3 = callback(navigation.useState(!obj1.isContactSyncEnabled(contactSyncAccount)), 2);
  callback = tmp3[1];
  sourceMetadata(contactSyncAccount[11])(() => {
    sourceMetadata(contactSyncAccount[12]).track(outer1_8.FRIEND_ADD_VIEWED, sourceMetadata);
    const obj = sourceMetadata(contactSyncAccount[12]);
    const result = onSkip(contactSyncAccount[10]).checkContactPermissions();
    result.then((arg0) => {
      let tmp = arg0 === outer2_9.NOT_DETERMINED;
      let isAndroidResult = onSkip(contactSyncAccount[13]).isAndroid();
      if (isAndroidResult) {
        isAndroidResult = arg0 === outer2_9.UNAUTHORIZED;
      }
      if (!tmp) {
        tmp = isAndroidResult;
      }
      if (!tmp) {
        tmp = !onSkip(contactSyncAccount[10]).isContactSyncEnabled(outer1_2);
        const obj2 = onSkip(contactSyncAccount[10]);
      }
      outer1_3(tmp);
    });
  });
  let obj2 = onSkip(contactSyncAccount[14]);
  navigation = obj2.useNavigation();
  const items = [onSkip];
  callback = navigation.useCallback(() => {
    if (null != onSkip) {
      onSkip();
    }
    let arr = sourceMetadata(contactSyncAccount[15]);
    arr = arr.pop();
  }, items);
  const callback1 = navigation.useCallback(() => {
    const currentUser = outer1_7.getCurrentUser();
    let userTag;
    if (null != currentUser) {
      let obj = sourceMetadata(contactSyncAccount[16]);
      userTag = obj.getUserTag(currentUser);
    }
    sourceMetadata(contactSyncAccount[12]).track(outer1_8.FRIEND_ADD_VIEWED, { friend_add_type: "Invite", source_page: "Add Friend Modal" });
    const intl = onSkip(contactSyncAccount[17]).intl;
    obj = { url: "https://discord.com/", username: userTag };
    const obj2 = sourceMetadata(contactSyncAccount[12]);
    const formatToPlainStringResult = intl.formatToPlainString(onSkip(contactSyncAccount[17]).t["6E9a1J"], obj);
    onSkip(contactSyncAccount[18]).showShareActionSheet({ message: formatToPlainStringResult }, "Add Friend Modal");
  }, []);
  const items1 = [callback, callback1, navigation];
  const layoutEffect = navigation.useLayoutEffect(() => {
    let obj = {
      headerRight() {
        const obj = { source: sourceMetadata(contactSyncAccount[20]), onPress: outer1_6 };
        const intl = onSkip(contactSyncAccount[17]).intl;
        obj.accessibilityLabel = intl.string(onSkip(contactSyncAccount[17]).t.RDE0Sc);
        return outer2_10(onSkip(contactSyncAccount[19]).HeaderActionButton, obj);
      },
      headerLeft: onSkip(contactSyncAccount[21]).getHeaderCloseButton(callback)
    };
    navigation.setOptions(obj);
  }, items1);
  obj = { keyboardShouldPersistTaps: "handled" };
  obj = { style: tmp.headerText, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary" };
  let intl = onSkip(contactSyncAccount[17]).intl;
  obj.children = intl.string(onSkip(contactSyncAccount[17]).t.GWMTSE);
  const items2 = [callback2(onSkip(contactSyncAccount[22]).Text, obj), , , ];
  obj1 = { style: tmp.subheaderText, variant: "text-sm/medium", color: "text-default" };
  const intl2 = onSkip(contactSyncAccount[17]).intl;
  obj1.children = intl2.string(onSkip(contactSyncAccount[17]).t["Rn/sLl"]);
  items2[1] = callback2(onSkip(contactSyncAccount[22]).Text, obj1);
  obj2 = { style: tmp.input, autoFocusInput: false };
  items2[2] = callback2(sourceMetadata(contactSyncAccount[23]), obj2);
  const obj3 = { style: tmp.otherOptionsContainer };
  const obj4 = { accessibilityRole: "header", variant: "eyebrow", color: "text-default" };
  const intl3 = onSkip(contactSyncAccount[17]).intl;
  obj4.children = intl3.string(onSkip(contactSyncAccount[17]).t.dukg0Z);
  const items3 = [callback2(onSkip(contactSyncAccount[22]).Text, obj4), ];
  let tmp13 = null;
  if (tmp3[0]) {
    const obj5 = { style: tmp.rowContainer, location: "Add Friend Modal" };
    tmp13 = callback2(sourceMetadata(contactSyncAccount[24]), obj5);
  }
  items3[1] = tmp13;
  obj3.children = items3;
  items2[3] = closure_11(callback, obj3);
  obj.children = items2;
  return closure_11(callback1, obj);
}
({ View: closure_5, ScrollView: closure_6 } = get_ActivityIndicator);
const AnalyticEvents = ME.AnalyticEvents;
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = {};
let merged = Object.assign(require("createTextStyle")(ME.Fonts.DISPLAY_EXTRABOLD, require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY, 24));
_createForOfIteratorHelperLoose["marginTop"] = 32;
_createForOfIteratorHelperLoose["marginHorizontal"] = 16;
_createForOfIteratorHelperLoose["textAlign"] = "center";
_createForOfIteratorHelperLoose.headerText = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.subheaderText = { lineHeight: 18, marginVertical: 8, marginHorizontal: 16, textAlign: "center" };
_createForOfIteratorHelperLoose.input = { marginTop: 16 };
_createForOfIteratorHelperLoose.otherOptionsContainer = { marginTop: 16, paddingHorizontal: 16 };
_createForOfIteratorHelperLoose.rowContainer = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, marginTop: 8 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, marginTop: 8 };
let result = require("get ActivityIndicator").fileFinishedImporting("components_native/add_friend/AddFriendModal.tsx");

export default function AddFriendModal(arg0) {
  const _require = arg0;
  const items = [arg0];
  const screens = React.useMemo(() => (function getScreens(closure_0) {
    let obj = {};
    obj = { ignoreKeyboard: true };
    const intl = callback(outer2_2[17]).intl;
    obj.title = intl.string(callback(outer2_2[17]).t.w5uwoI);
    obj.initialParams = closure_0;
    obj.render = function render(arg0) {
      const merged = Object.assign(arg0);
      return outer3_10(outer3_13, {});
    };
    obj.ADD_FRIEND = obj;
    return obj;
  })(closure_0), items);
  return callback2(_require(5517).Navigator, { screens, initialRouteName: "ADD_FRIEND", headerStatusBarHeight: importDefault(1557)().top });
};
