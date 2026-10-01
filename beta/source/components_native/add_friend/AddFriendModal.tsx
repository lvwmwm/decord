// Module ID: 13398
// Function ID: 13399
// Name: AddFriendModal
// Dependencies: [32, 19, 17, 1372, 1074, 12175, 21, 4836, 5836, 576, 12177, 5298, 1241, 1364, 1488, 5039, 4678, 1115, 7809, 6795, 13399, 5936, 4832, 13400, 13402, 1613, 6421, 2]
// Exports: default

// Module 13398 (AddFriendModal)
import nativeDefault from "native" /* 576 */;
import intl4 from "intl" /* 1115 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1613 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5039 */;
import NavigatorHeader from "NavigatorHeader" /* 5936 */;
import ContactSyncConstants from "ContactSyncConstants" /* 12175 */;
import ContactSyncUtils from "ContactSyncUtils" /* 12177 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserStore from "UserStore" /* 1372 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import TextStyles from "TextStyles" /* 5836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, currentUser, navigation;

let Fonts;
let c10;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
let obj2;
let obj3;
let unpackModuleId;
function AddFriendModalScene(onSkip) {
  let c3;
  let constants2;
  let intl;
  let intl2;
  let intl3;
  let items3;
  let tmp5;
  onSkip = onSkip.onSkip;
  const sourceMetadata = onSkip.sourceMetadata;
  let contactSyncAccount;
  _slicedToArray = undefined;
  navigation = undefined;
  const tmp = closure_12();
  let tmp2 = contactSyncAccount;
  let obj = onSkip(contactSyncAccount[10]);
  contactSyncAccount = obj.useContactSyncAccount();
  const useState = navigation.useState;
  let obj2 = onSkip(contactSyncAccount[10]);
  const tmp4 = _slicedToArray(useState(!obj2.isContactSyncEnabled(contactSyncAccount)), 2);
  [tmp5, c3] = tmp4;
  sourceMetadata(contactSyncAccount[11])(() => {
    let obj = AnalyticsUtilsDefault;
    obj.track(metroImportAll.FRIEND_ADD_VIEWED, sourceMetadata);
    const obj2 = ContactSyncUtils;
    const result = obj2.checkContactPermissions();
    result.then((result) => {
      const NOT_DETERMINED = constants2.NOT_DETERMINED;
      const obj = onSkip(contactSyncAccount[13]);
      let tmp5 = result === NOT_DETERMINED || obj.isAndroid() && result === constants2.UNAUTHORIZED;
      obj.isAndroid() && result === constants2.UNAUTHORIZED;
      const tmp2 = onSkip;
      const tmp3 = contactSyncAccount;
      if (!tmp5) {
        const tmp2Result = tmp2(tmp3[10]);
        tmp5 = !tmp2Result.isContactSyncEnabled(closure_1_2);
      }
      closure_1_3(tmp5);
    });
  });
  let obj3 = onSkip(contactSyncAccount[14]);
  navigation = obj3.useNavigation();
  const items = [onSkip];
  const callback = navigation.useCallback(() => {
    if (onSkip != null) {
      tmp();
    }
    const arr = ModalActionCreatorsDefault;
    arr.pop();
  }, items);
  const callback1 = navigation.useCallback(() => {
    currentUser = currentUser.getCurrentUser();
    let userTag;
    if (null != currentUser) {
      const obj = sourceMetadata(contactSyncAccount[16]);
      userTag = obj.getUserTag(currentUser);
    }
    const obj2 = sourceMetadata(contactSyncAccount[12]);
    obj2.track(constants.FRIEND_ADD_VIEWED, { friend_add_type: "Invite", source_page: "Add Friend Modal" });
    const intl = onSkip(contactSyncAccount[17]).intl;
    const formatToPlainStringResult = intl.formatToPlainString(onSkip(contactSyncAccount[17]).t["6E9a1J"], { url: "https://discord.com/", username: userTag });
    const obj3 = onSkip(contactSyncAccount[18]);
    obj3.showShareActionSheet({ message: formatToPlainStringResult }, "Add Friend Modal");
  }, []);
  const items1 = [callback, callback1, navigation];
  const layoutEffect = navigation.useLayoutEffect(() => {
    let obj2;
    let onPress;
    let obj = {
      headerRight() {
        let intl;
        const obj = { source: sourceMetadata(contactSyncAccount[20]), onPress, accessibilityLabel: intl.string(onSkip(contactSyncAccount[17]).t.RDE0Sc) };
        const HeaderActionButton = onSkip(contactSyncAccount[19]).HeaderActionButton;
        intl = onSkip(contactSyncAccount[17]).intl;
        return closure_2_10(HeaderActionButton, obj);
      },
      headerLeft: obj2.getHeaderCloseButton(callback)
    };
    const setOptions = navigation.setOptions;
    obj2 = NavigatorHeader;
    setOptions(obj);
  }, items1);
  const obj4 = { style: tmp.headerText, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: intl.string(onSkip(contactSyncAccount[17]).t.GWMTSE) };
  const Text = onSkip(contactSyncAccount[22]).Text;
  intl = onSkip(contactSyncAccount[17]).intl;
  const items2 = [closure_10(Text, obj4), , , ];
  const obj5 = { style: tmp.subheaderText, variant: "text-sm/medium", color: "text-default", children: intl2.string(onSkip(contactSyncAccount[17]).t["Rn/sLl"]) };
  const Text2 = onSkip(contactSyncAccount[22]).Text;
  intl2 = onSkip(contactSyncAccount[17]).intl;
  items2[1] = closure_10(Text2, obj5);
  const obj6 = { style: tmp.input, autoFocusInput: false };
  items2[2] = closure_10(sourceMetadata(contactSyncAccount[23]), obj6);
  const obj7 = { style: tmp.otherOptionsContainer, children: items3 };
  const obj8 = { accessibilityRole: "header", variant: "eyebrow", color: "text-default", children: intl3.string(onSkip(contactSyncAccount[17]).t.dukg0Z) };
  const Text3 = onSkip(contactSyncAccount[22]).Text;
  intl3 = onSkip(contactSyncAccount[17]).intl;
  items3 = [closure_10(Text3, obj8), ];
  let tmp14Result = null;
  const tmp13 = callback1;
  const tmp14 = closure_10;
  const tmp15 = callback;
  const tmp6 = sourceMetadata;
  if (tmp5) {
    const obj9 = { style: tmp.rowContainer, location: "Add Friend Modal" };
    tmp14Result = tmp14(tmp6(tmp2[24]), obj9);
  }
  const obj10 = { keyboardShouldPersistTaps: "handled", children: items2 };
  items3[1] = tmp14Result;
  items2[3] = closure_11(tmp15, obj7);
  return closure_11(tmp13, obj10);
}
let _slicedToArray = _slicedToArray_mod;
({ View: hasOwnProperty, ScrollView: metroRequire } = react_native);
({ AnalyticEvents: metroImportAll, Fonts } = Constants);
const ContactPermissions = ContactSyncConstants.ContactPermissions;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { headerText: obj2, subheaderText: { lineHeight: 18, marginVertical: 8, marginHorizontal: 16, textAlign: "center" }, input: { marginTop: 16 }, otherOptionsContainer: { marginTop: 16, paddingHorizontal: 16 }, rowContainer: obj3 };
obj2 = { marginTop: 32, marginHorizontal: 16, textAlign: "center" };
createStyles = createStyles.createStyles;
let merged = Object.assign(TextStyles(Fonts.DISPLAY_EXTRABOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 24));
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, marginTop: 8 };
let closure_12 = createStyles(obj);
let result = size.fileFinishedImporting("components_native/add_friend/AddFriendModal.tsx");

export default function AddFriendModal(initialParams) {
  _require = initialParams;
  const items = [initialParams];
  const headerStatusBarHeight = useSafeAreaInsetsDefault().top;
  const screens = react.useMemo(() => {
    let intl;
    let obj2;
    let obj = { ADD_FRIEND: obj2 };
    obj2 = {
      ignoreKeyboard: true,
      title: intl.string(intl4.t.w5uwoI),
      initialParams,
      render(arg0) {
        const obj = {};
        const merged = Object.assign(arg0);
        return closure_1_10(closure_1_13, obj);
      }
    };
    intl = intl4.intl;
    return obj;
  }, items);
  return closure_10(require("Navigator").Navigator, { screens, initialRouteName: "ADD_FRIEND", headerStatusBarHeight });
};
