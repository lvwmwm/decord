// Module ID: 14566
// Function ID: 111118
// Name: UserListItem
// Dependencies: [31, 27, 1849, 653, 33, 4130, 689, 566, 14567, 3969, 7976, 5462, 8537, 5165, 1273, 1212, 5171, 3834, 1456, 14565, 4126, 7527, 8936, 2]
// Exports: default

// Module 14566 (UserListItem)
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { UserSettingsSections } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_7;
let closure_8;
const require = arg1;
function UserListItem(userId) {
  let end;
  let start;
  userId = userId.userId;
  const onPress = userId.onPress;
  ({ start, end } = userId);
  let obj = userId(analyticsLocations[7]);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_5.getUser(userId));
  let obj1 = userId(analyticsLocations[8]);
  const secureFramesUserVerifiedKeys = obj1.useSecureFramesUserVerifiedKeys(userId);
  const items1 = [userId];
  const formattedName = onPress(analyticsLocations[9]).getFormattedName(stateFromStores);
  const effect = React.useEffect(() => {
    const user = userId(analyticsLocations[10]).getUser(userId);
  }, items1);
  const items2 = [onPress, userId];
  const callback = React.useCallback(() => {
    onPress(userId);
  }, items2);
  analyticsLocations = onPress(analyticsLocations[11])().analyticsLocations;
  const items3 = [analyticsLocations, userId];
  const callback1 = React.useCallback(() => {
    onPress(analyticsLocations[12])({ userId, sourceAnalyticsLocations: analyticsLocations });
  }, items3);
  obj = {};
  let tmp7 = null != stateFromStores;
  if (tmp7) {
    obj = { user: stateFromStores, guildId: undefined, size: userId(analyticsLocations[14]).AvatarSizes.REFRESH_MEDIUM_32 };
    tmp7 = callback(userId(analyticsLocations[14]).Avatar, obj);
  }
  obj.icon = tmp7;
  const intl = userId(analyticsLocations[15]).intl;
  obj1 = { count: secureFramesUserVerifiedKeys.length };
  obj.subLabel = intl.formatToPlainString(userId(analyticsLocations[15]).t["/MBjYF"], obj1);
  obj.label = formattedName;
  obj.start = start;
  obj.end = end;
  obj.onPress = callback;
  obj.onLongPress = callback1;
  obj.trailing = callback(userId(analyticsLocations[16]).TableRowArrow, {});
  return callback(userId(analyticsLocations[13]).TableRow, obj);
}
function renderItem(item) {
  item = item.item;
  if (item.type === constants.USER) {
    const obj = {};
    const merged = Object.assign(item);
    return callback(UserListItem, obj);
  }
}
function getItemType(type) {
  return type.type;
}
function keyExtractor(type) {
  return type.type === constants.USER ? type.userId : undefined;
}
function SettingsSecureFramesFooter() {
  let obj = navigation(secureFramesVerifiedUserIds[17]);
  const token = obj.useToken(callback(secureFramesVerifiedUserIds[6]).modules.mobile.TABLE_ROW_HEIGHT);
  let obj1 = navigation(secureFramesVerifiedUserIds[18]);
  navigation = obj1.useNavigation();
  const items = [navigation];
  callback = React.useCallback((userId) => {
    navigation.navigate(outer1_6.SECURE_FRAMES_VERIFIED_DEVICES, { userId });
  }, items);
  let obj2 = navigation(secureFramesVerifiedUserIds[19]);
  secureFramesVerifiedUserIds = obj2.useSecureFramesVerifiedUserIds();
  const items1 = [callback, secureFramesVerifiedUserIds];
  let tmp6 = null;
  if (0 !== secureFramesVerifiedUserIds.length) {
    obj = { style: tmp.list };
    obj = { variant: "text-sm/semibold", color: "text-default" };
    const intl = navigation(secureFramesVerifiedUserIds[15]).intl;
    obj.children = intl.string(navigation(secureFramesVerifiedUserIds[15]).t["5b3FNI"]);
    const items2 = [callback(navigation(secureFramesVerifiedUserIds[20]).Text, obj), , ];
    obj1 = {};
    obj2 = { minHeight: secureFramesVerifiedUserIds.length * token };
    obj1.style = obj2;
    const obj3 = { keyExtractor, getItemType, renderItem, data: tmp5 };
    obj1.children = callback(navigation(secureFramesVerifiedUserIds[21]).FlashList, obj3);
    items2[1] = callback(View, obj1);
    const obj4 = { variant: "text-xs/normal", color: "text-default" };
    const intl2 = navigation(secureFramesVerifiedUserIds[15]).intl;
    const obj5 = { helpArticle: navigation(secureFramesVerifiedUserIds[22]).getSecureFramesVerifiedDevicesHelpdeskArticle() };
    obj4.children = intl2.format(navigation(secureFramesVerifiedUserIds[15]).t["7w9ymD"], obj5);
    items2[2] = callback(navigation(secureFramesVerifiedUserIds[20]).Text, obj4);
    obj.children = items2;
    tmp6 = callback2(View, obj);
    const obj11 = navigation(secureFramesVerifiedUserIds[22]);
  }
  return tmp6;
}
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flexGrow: 1, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, gap: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.header = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_24, gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
let obj1 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_24, gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.list = { flexGrow: 1, gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_10 = { USER: "USER" };
let obj2 = { flexGrow: 1, gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/user_settings/privacy_and_safety/native/SettingsSecureFramesScreen.tsx");

export default function SettingsSecureFramesScreen() {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: tmp.container };
  obj = { style: tmp.header };
  obj = { variant: "heading-md/semibold", color: "mobile-text-heading-primary" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.string(require(1212) /* getSystemLocale */.t["9Q/PQv"]);
  const items = [callback(require(4126) /* Text */.Text, obj), ];
  const obj1 = { variant: "text-sm/normal", color: "text-default" };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  const obj2 = { helpArticle: require(8936) /* _createForOfIteratorHelperLoose */.getSecureFramesHelpdeskArticle() };
  obj1.children = intl2.format(require(1212) /* getSystemLocale */.t["8IwQfG"], obj2);
  items[1] = callback(require(4126) /* Text */.Text, obj1);
  obj.children = items;
  const items1 = [callback2(View, obj), callback(SettingsSecureFramesFooter, {})];
  obj.children = items1;
  return callback2(View, obj);
};
