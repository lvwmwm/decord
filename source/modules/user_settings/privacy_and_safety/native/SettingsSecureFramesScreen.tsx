// Module ID: 14384
// Function ID: 108544
// Name: UserListItem
// Dependencies: []
// Exports: default

// Module 14384 (UserListItem)
function UserListItem(userId) {
  let end;
  let start;
  userId = userId.userId;
  const arg1 = userId;
  const onPress = userId.onPress;
  const importDefault = onPress;
  ({ start, end } = userId);
  let obj = arg1(dependencyMap[7]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => user.getUser(userId));
  let obj1 = arg1(dependencyMap[8]);
  const secureFramesUserVerifiedKeys = obj1.useSecureFramesUserVerifiedKeys(userId);
  const items1 = [userId];
  const formattedName = importDefault(dependencyMap[9]).getFormattedName(stateFromStores);
  const effect = React.useEffect(() => {
    const user = userId(analyticsLocations[10]).getUser(userId);
  }, items1);
  const items2 = [onPress, userId];
  const callback = React.useCallback(() => {
    onPress(userId);
  }, items2);
  const analyticsLocations = importDefault(dependencyMap[11])().analyticsLocations;
  const dependencyMap = analyticsLocations;
  const items3 = [analyticsLocations, userId];
  const callback1 = React.useCallback(() => {
    onPress(analyticsLocations[12])({ userId, sourceAnalyticsLocations: analyticsLocations });
  }, items3);
  obj = {};
  let tmp7 = null != stateFromStores;
  if (tmp7) {
    obj = { user: stateFromStores, guildId: undefined, size: arg1(dependencyMap[14]).AvatarSizes.REFRESH_MEDIUM_32 };
    tmp7 = callback(arg1(dependencyMap[14]).Avatar, obj);
  }
  obj.icon = tmp7;
  const intl = arg1(dependencyMap[15]).intl;
  obj1 = { count: secureFramesUserVerifiedKeys.length };
  obj.subLabel = intl.formatToPlainString(arg1(dependencyMap[15]).t./MBjYF, obj1);
  obj.label = formattedName;
  obj.start = start;
  obj.end = end;
  obj.onPress = callback;
  obj.onLongPress = callback1;
  obj.trailing = callback(arg1(dependencyMap[16]).TableRowArrow, {});
  return callback(arg1(dependencyMap[13]).TableRow, obj);
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
  let obj = arg1(dependencyMap[17]);
  const token = obj.useToken(importDefault(dependencyMap[6]).modules.mobile.TABLE_ROW_HEIGHT);
  let obj1 = arg1(dependencyMap[18]);
  const navigation = obj1.useNavigation();
  const arg1 = navigation;
  const items = [navigation];
  const callback = React.useCallback((userId) => {
    navigation.navigate(constants.SECURE_FRAMES_VERIFIED_DEVICES, { userId });
  }, items);
  const importDefault = callback;
  let obj2 = arg1(dependencyMap[19]);
  const secureFramesVerifiedUserIds = obj2.useSecureFramesVerifiedUserIds();
  const dependencyMap = secureFramesVerifiedUserIds;
  const items1 = [callback, secureFramesVerifiedUserIds];
  let tmp6 = null;
  if (0 !== secureFramesVerifiedUserIds.length) {
    obj = { style: tmp.list };
    obj = { INTEGRATION_CREATE: null, ConstraintReasonCode: null };
    const intl = arg1(dependencyMap[15]).intl;
    obj.children = intl.string(arg1(dependencyMap[15]).t.5b3FNI);
    const items2 = [callback(arg1(dependencyMap[20]).Text, obj), , ];
    obj1 = {};
    obj2 = { minHeight: secureFramesVerifiedUserIds.length * token };
    obj1.style = obj2;
    const obj3 = { keyExtractor, getItemType, renderItem, data: tmp5 };
    obj1.children = callback(arg1(dependencyMap[21]).FlashList, obj3);
    items2[1] = callback(View, obj1);
    const obj4 = { INTEGRATION_CREATE: true, ConstraintReasonCode: true };
    const intl2 = arg1(dependencyMap[15]).intl;
    const obj5 = { helpArticle: arg1(dependencyMap[23]).getSecureFramesVerifiedDevicesHelpdeskArticle() };
    obj4.children = intl2.format(arg1(dependencyMap[15]).t.7w9ymD, obj5);
    items2[2] = callback(arg1(dependencyMap[22]).TextWithIOSLinkWorkaround, obj4);
    obj.children = items2;
    tmp6 = callback2(View, obj);
    const obj11 = arg1(dependencyMap[23]);
  }
  return tmp6;
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
const UserSettingsSections = arg1(dependencyMap[3]).UserSettingsSections;
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { flexGrow: 1, paddingHorizontal: importDefault(dependencyMap[6]).space.PX_16, gap: importDefault(dependencyMap[6]).space.PX_16 };
obj.container = obj;
const tmp2 = arg1(dependencyMap[4]);
obj.header = { marginTop: importDefault(dependencyMap[6]).space.PX_24, gap: importDefault(dependencyMap[6]).space.PX_8 };
const obj1 = { marginTop: importDefault(dependencyMap[6]).space.PX_24, gap: importDefault(dependencyMap[6]).space.PX_8 };
obj.list = { flexGrow: 1, gap: importDefault(dependencyMap[6]).space.PX_8 };
let closure_9 = obj.createStyles(obj);
let closure_10 = { USER: "USER" };
const obj2 = { flexGrow: 1, gap: importDefault(dependencyMap[6]).space.PX_8 };
const result = arg1(dependencyMap[24]).fileFinishedImporting("modules/user_settings/privacy_and_safety/native/SettingsSecureFramesScreen.tsx");

export default function SettingsSecureFramesScreen() {
  const tmp = callback3();
  let obj = { style: tmp.container };
  obj = { style: tmp.header };
  obj = { INTEGRATION_CREATE: null, ConstraintReasonCode: null };
  const intl = arg1(dependencyMap[15]).intl;
  obj.children = intl.string(arg1(dependencyMap[15]).t.9Q/PQv);
  const items = [callback(arg1(dependencyMap[20]).Text, obj), ];
  const obj1 = { INTEGRATION_CREATE: "AutomodMentionRaidLimit", ConstraintReasonCode: "%URIError%" };
  const intl2 = arg1(dependencyMap[15]).intl;
  const obj2 = { helpArticle: arg1(dependencyMap[23]).getSecureFramesHelpdeskArticle() };
  obj1.children = intl2.format(arg1(dependencyMap[15]).t.8IwQfG, obj2);
  items[1] = callback(arg1(dependencyMap[22]).TextWithIOSLinkWorkaround, obj1);
  obj.children = items;
  const items1 = [callback2(View, obj), callback(SettingsSecureFramesFooter, {})];
  obj.children = items1;
  return callback2(View, obj);
};
