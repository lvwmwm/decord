// Module ID: 14395
// Function ID: 108595
// Name: VerificationListItem
// Dependencies: []
// Exports: default

// Module 14395 (VerificationListItem)
function VerificationListItem(userId) {
  let end;
  let index;
  let start;
  userId = userId.userId;
  const arg1 = userId;
  const verification = userId.verification;
  const importDefault = verification;
  const items = [userId, verification.verifiedKey];
  ({ index, start, end } = userId);
  const items1 = [verification.timestamp];
  const callback = React.useCallback(() => {
    const result = userId(closure_2[5]).deletePersistentVerification(userId, verification.verifiedKey);
  }, items);
  const memo = React.useMemo(() => userId(closure_2[5]).getSecureFramesUserVerifiedTimestamp(verification.timestamp), items1);
  let obj = {};
  const intl = arg1(dependencyMap[7]).intl;
  obj.label = intl.formatToPlainString(arg1(dependencyMap[7]).t.N4qBBO, { index });
  obj.subLabel = memo;
  obj.start = start;
  obj.end = end;
  obj = { onPress: callback, children: jsx(arg1(dependencyMap[9]).XSmallIcon, {}) };
  obj.trailing = jsx(arg1(dependencyMap[8]).PressableHighlight, obj);
  return jsx(arg1(dependencyMap[6]).TableRow, obj);
}
function SectionListItem(children) {
  const tmp = callback();
  return jsx(arg1(dependencyMap[10]).Text, { style: callback().section, children: children.title });
}
function renderItem(item) {
  item = item.item;
  const type = item.type;
  if (constants.VERIFICATION === type) {
    let obj = {};
    const merged = Object.assign(item);
    return <VerificationListItem {...obj} />;
  } else if (constants.SECTION === type) {
    obj = {};
    const merged1 = Object.assign(item);
    return <SectionListItem {...obj} />;
  }
}
function getItemType(type) {
  return type.type;
}
function keyExtractor(type) {
  type = type.type;
  if (constants.VERIFICATION === type) {
    return type.verification.verifiedKey;
  } else {
    return constants.SECTION === type ? type.title : undefined;
  }
}
function ClearVerificationsListFooter(userId) {
  userId = userId.userId;
  const arg1 = userId;
  const items = [userId];
  const callback = React.useCallback(() => {
    const result = userId(closure_2[5]).deleteUserPersistentVerifications(userId);
  }, items);
  let obj = {};
  obj = {};
  const intl = arg1(dependencyMap[7]).intl;
  obj.children = intl.string(arg1(dependencyMap[7]).t.2xL5lu);
  obj.label = jsx(arg1(dependencyMap[10]).Text, obj);
  obj = {};
  const intl2 = arg1(dependencyMap[7]).intl;
  obj.children = intl2.string(arg1(dependencyMap[7]).t.kgAfXN);
  obj.subLabel = jsx(arg1(dependencyMap[10]).Text, obj);
  obj.onPress = callback;
  obj.start = true;
  obj.end = true;
  return jsx(arg1(dependencyMap[6]).TableRow, obj);
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
const jsx = arg1(dependencyMap[3]).jsx;
let closure_7 = arg1(dependencyMap[4]).createStyles({ list: { flexGrow: 1 }, listContent: {}, listFooter: { marginTop: 32 }, section: { marginBottom: 8 } });
let closure_8 = { VERIFICATION: "VERIFICATION", SECTION: "SECTION" };
const obj = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/user_settings/privacy_and_safety/native/SettingsSecureFramesVerificationsScreen.tsx");

export default function SettingsSecureFramesVerificationsScreen() {
  const tmp = callback();
  let obj = arg1(formattedName[11]);
  const userId = obj.useSettingNavigationRoute().params.userId;
  const arg1 = userId;
  let obj1 = arg1(formattedName[12]);
  const navigation = obj1.useNavigation();
  const importDefault = navigation;
  const items = [closure_5];
  const stateFromStores = arg1(formattedName[13]).useStateFromStores(items, () => user.getUser(userId));
  const obj3 = arg1(formattedName[13]);
  const formattedName = importDefault(formattedName[14]).getFormattedName(stateFromStores, false);
  const layoutEffect = React.useLayoutEffect(() => {
    const obj = {};
    const intl = userId(closure_2[7]).intl;
    obj.title = "" + intl.string(userId(closure_2[7]).t.5b3FNI) + " (" + closure_2 + ")";
    obj.headerTitle = function headerTitle() {
      const obj = {};
      const intl = callback(closure_2[7]).intl;
      obj.title = intl.string(callback(closure_2[7]).t.5b3FNI);
      obj.subtitle = closure_2;
      return callback2(callback(closure_2[15]).GenericHeaderTitle, obj);
    };
    navigation.setOptions(obj);
  });
  const obj4 = importDefault(formattedName[14]);
  const secureFramesUserVerifiedKeys = arg1(formattedName[16]).useSecureFramesUserVerifiedKeys(userId);
  const React = secureFramesUserVerifiedKeys;
  const items1 = [userId, secureFramesUserVerifiedKeys];
  const items2 = [navigation, secureFramesUserVerifiedKeys];
  const memo = React.useMemo(() => {
    const items = [];
    const userId = items;
    let obj = { type: constants.SECTION };
    const intl = userId(closure_2[7]).intl;
    obj = { count: secureFramesUserVerifiedKeys.length };
    obj.title = intl.formatToPlainString(userId(closure_2[7]).t./MBjYF, obj);
    items.push(obj);
    const item = secureFramesUserVerifiedKeys.forEach((verification) => {
      items.push({ type: constants.VERIFICATION, verification, index: arg1 + 1, userId: items, start: 0 === arg1, end: arg1 === length.length - 1 });
    });
    return items;
  }, items1);
  const effect = React.useEffect(() => {
    if (0 === secureFramesUserVerifiedKeys.length) {
      navigation.pop();
    }
  }, items2);
  obj = { style: tmp.list };
  obj = { keyExtractor, getItemType, renderItem, data: memo, contentContainerStyle: tmp.listContent };
  obj1 = { style: tmp.listFooter, children: <ClearVerificationsListFooter userId={userId} /> };
  obj.ListFooterComponent = <View {...obj1} />;
  obj.children = jsx(arg1(formattedName[17]).FlashList, obj);
  return <View {...obj} />;
};
