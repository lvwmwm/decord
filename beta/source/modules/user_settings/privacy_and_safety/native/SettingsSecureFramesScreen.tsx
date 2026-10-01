// Module ID: 15467
// Function ID: 15468
// Name: SettingsSecureFramesScreen
// Dependencies: [19, 17, 1372, 1074, 21, 4836, 576, 504, 15468, 4678, 7626, 6583, 7624, 5917, 1177, 1115, 5924, 4531, 1485, 15466, 4832, 8179, 9163, 2]
// Exports: default

// Module 15467 (SettingsSecureFramesScreen)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import intl3 from "intl" /* 1115 */;
import Text_Text from "Text/Text" /* 4832 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 7624 */;
import UserActionCreators from "UserActionCreators" /* 7626 */;
import SecureFramesUtils from "SecureFramesUtils" /* 9163 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1372 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let navigation;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
function UserListItem(userId) {
  let end;
  let intl;
  let obj6;
  let start;
  userId = userId.userId;
  const onPress = userId.onPress;
  let analyticsLocations;
  ({ start, end } = userId);
  let obj = userId(analyticsLocations[7]);
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(userId));
  const obj2 = userId(analyticsLocations[8]);
  const secureFramesUserVerifiedKeys = obj2.useSecureFramesUserVerifiedKeys(userId);
  const items1 = [userId];
  const obj3 = onPress(analyticsLocations[9]);
  const formattedName = obj3.getFormattedName(stateFromStores);
  const effect = react.useEffect(() => {
    const obj = UserActionCreators;
    const user = obj.getUser(userId);
  }, items1);
  const items2 = [onPress, userId];
  const callback = react.useCallback(() => {
    onPress(userId);
  }, items2);
  analyticsLocations = onPress(analyticsLocations[11])().analyticsLocations;
  const items3 = [analyticsLocations, userId];
  const callback1 = react.useCallback(() => {
    const obj = { userId, sourceAnalyticsLocations: analyticsLocations };
    showUserProfileActionSheetDefault(obj);
  }, items3);
  let tmp8Result = null != stateFromStores;
  const TableRow = userId(analyticsLocations[13]).TableRow;
  if (tmp8Result) {
    const obj4 = { user: stateFromStores, guildId: "Array", size: userId(analyticsLocations[14]).AvatarSizes.REFRESH_MEDIUM_32 };
    const Avatar = tmp(tmp2[14]).Avatar;
    tmp8Result = tmp8(Avatar, obj4);
  }
  const obj5 = { icon: tmp8Result, subLabel: intl.formatToPlainString(userId(analyticsLocations[15]).t["/MBjYF"], obj6), label: formattedName, start, end, onPress: callback, onLongPress: callback1, trailing: closure_7(userId(analyticsLocations[16]).TableRowArrow, {}) };
  intl = tmp(tmp2[15]).intl;
  obj6 = { count: secureFramesUserVerifiedKeys.length };
  return closure_7(TableRow, obj5);
}
function renderItem(item) {
  item = item.item;
  if (item.type === constants.USER) {
    const obj = {};
    const merged = Object.assign(item);
    return metroImportDefault(UserListItem, obj);
  }
}
function getItemType(type) {
  return type.type;
}
function keyExtractor(type) {
  return type.type === constants.USER ? type.userId : undefined;
}
function SettingsSecureFramesFooter() {
  let callback;
  let format;
  let intl;
  let items2;
  let obj10;
  let obj7;
  let obj8;
  let secureFramesVerifiedUserIds;
  let tmp2Result;
  let v7w9ymD;
  const tmp = closure_9();
  let obj = navigation(secureFramesVerifiedUserIds[17]);
  const token = obj.useToken(callback(secureFramesVerifiedUserIds[6]).modules.mobile.TABLE_ROW_HEIGHT);
  const obj2 = navigation(secureFramesVerifiedUserIds[18]);
  navigation = obj2.useNavigation();
  const items = [navigation];
  callback = react.useCallback((userId) => {
    const obj = { userId };
    navigation.navigate(UserSettingsSections.SECURE_FRAMES_VERIFIED_DEVICES, obj);
  }, items);
  const obj3 = navigation(secureFramesVerifiedUserIds[19]);
  secureFramesVerifiedUserIds = obj3.useSecureFramesVerifiedUserIds();
  const items1 = [callback, secureFramesVerifiedUserIds];
  let tmp8 = null;
  if (0 !== secureFramesVerifiedUserIds.length) {
    const obj4 = { style: tmp.list, children: items2 };
    const obj5 = { variant: "text-sm/semibold", color: "text-default", children: intl.string(navigation(secureFramesVerifiedUserIds[15]).t["5b3FNI"]) };
    const Text = tmp2(tmp3[20]).Text;
    intl = tmp2(tmp3[15]).intl;
    items2 = [closure_7(Text, obj5), , ];
    const obj6 = { style: obj7, children: closure_7(navigation(secureFramesVerifiedUserIds[21]).FlashList, obj8) };
    obj7 = { minHeight: secureFramesVerifiedUserIds.length * token };
    obj8 = { keyExtractor, getItemType, renderItem, data: tmp7 };
    items2[1] = closure_7(View, obj6);
    const obj9 = { variant: "text-xs/normal", color: "text-default", children: format(v7w9ymD, obj10) };
    const Text2 = tmp2(tmp3[20]).Text;
    const intl2 = tmp2(tmp3[15]).intl;
    format = intl2.format;
    obj10 = { helpArticle: tmp2Result.getSecureFramesVerifiedDevicesHelpdeskArticle() };
    v7w9ymD = tmp2(tmp3[15]).t["7w9ymD"];
    tmp2Result = navigation(secureFramesVerifiedUserIds[22]);
    items2[2] = closure_7(Text2, obj9);
    tmp8 = closure_8(View, obj4);
  }
  return tmp8;
}
const View = react_native.View;
const UserSettingsSections = Constants.UserSettingsSections;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, header: obj3, list: obj4 };
obj2 = { flexGrow: 1, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { marginTop: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_8 };
obj4 = { flexGrow: 1, gap: nativeDefault.space.PX_8 };
let closure_9 = createStyles(obj);
const constants = { USER: "USER" };
const result = size.fileFinishedImporting("modules/user_settings/privacy_and_safety/native/SettingsSecureFramesScreen.tsx");

export default function SettingsSecureFramesScreen() {
  let format;
  let intl;
  let items;
  let items1;
  let obj5;
  let obj6;
  let v8IwQfG;
  const tmp = closure_9();
  const obj = { style: tmp.container, children: items1 };
  const obj2 = { style: tmp.header, children: items };
  const obj3 = { variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: intl.string(intl3.t["9Q/PQv"]) };
  const Text = Text_Text.Text;
  intl = intl3.intl;
  items = [metroImportDefault(Text, obj3), ];
  const obj4 = { variant: "text-sm/normal", color: "text-default", children: format(v8IwQfG, obj5) };
  const Text2 = Text_Text.Text;
  const intl2 = intl3.intl;
  format = intl2.format;
  obj5 = { helpArticle: obj6.getSecureFramesHelpdeskArticle() };
  v8IwQfG = intl3.t["8IwQfG"];
  obj6 = SecureFramesUtils;
  items[1] = metroImportDefault(Text2, obj4);
  items1 = [metroImportAll(View, obj2), metroImportDefault(SettingsSecureFramesFooter, {})];
  return metroImportAll(View, obj);
};
