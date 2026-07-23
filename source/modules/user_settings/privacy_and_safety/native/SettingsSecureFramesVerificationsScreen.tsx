// Module ID: 14520
// Function ID: 110823
// Name: VerificationListItem
// Dependencies: [31, 27, 1849, 33, 4130, 8897, 5165, 1212, 4660, 5119, 4126, 6653, 1456, 566, 3969, 9122, 14517, 7879, 2]
// Exports: default

// Module 14520 (VerificationListItem)
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
function VerificationListItem(userId) {
  let end;
  let index;
  let start;
  userId = userId.userId;
  const verification = userId.verification;
  const items = [userId, verification.verifiedKey];
  ({ index, start, end } = userId);
  const items1 = [verification.timestamp];
  const callback = React.useCallback(() => {
    const result = userId(outer1_2[5]).deletePersistentVerification(userId, verification.verifiedKey);
  }, items);
  const memo = React.useMemo(() => userId(outer1_2[5]).getSecureFramesUserVerifiedTimestamp(verification.timestamp), items1);
  let obj = {};
  const intl = userId(1212).intl;
  obj.label = intl.formatToPlainString(userId(1212).t.N4qBBO, { index });
  obj.subLabel = memo;
  obj.start = start;
  obj.end = end;
  obj = { onPress: callback, children: jsx(userId(5119).XSmallIcon, {}) };
  obj.trailing = jsx(userId(4660).PressableHighlight, { onPress: callback, children: jsx(userId(5119).XSmallIcon, {}) });
  return jsx(userId(5165).TableRow, { onPress: callback, children: jsx(userId(5119).XSmallIcon, {}) });
}
function SectionListItem(title) {
  const obj = { style: callback().section, variant: "text-sm/semibold", color: "text-default", children: title.title };
  return jsx(require(4126) /* Text */.Text, { style: callback().section, variant: "text-sm/semibold", color: "text-default", children: title.title });
}
function renderItem(item) {
  item = item.item;
  const type = item.type;
  if (constants.VERIFICATION === type) {
    let obj = {};
    const merged = Object.assign(item);
    return <VerificationListItem />;
  } else if (constants.SECTION === type) {
    obj = {};
    const merged1 = Object.assign(item);
    return <SectionListItem />;
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
  const items = [userId];
  const callback = React.useCallback(() => {
    const result = userId(outer1_2[5]).deleteUserPersistentVerifications(userId);
  }, items);
  let obj = {};
  obj = { variant: "text-md/semibold", color: "text-feedback-critical" };
  const intl = userId(1212).intl;
  obj.children = intl.string(userId(1212).t["2xL5lu"]);
  obj.label = jsx(userId(4126).Text, { variant: "text-md/semibold", color: "text-feedback-critical" });
  obj = { variant: "text-xs/medium", color: "text-subtle" };
  const intl2 = userId(1212).intl;
  obj.children = intl2.string(userId(1212).t.kgAfXN);
  obj.subLabel = jsx(userId(4126).Text, { variant: "text-xs/medium", color: "text-subtle" });
  obj.onPress = callback;
  obj.start = true;
  obj.end = true;
  return jsx(userId(5165).TableRow, { variant: "text-xs/medium", color: "text-subtle" });
}
let closure_7 = _createForOfIteratorHelperLoose.createStyles({ list: { flexGrow: 1 }, listContent: { paddingVertical: 32, paddingHorizontal: 16 }, listFooter: { marginTop: 32 }, section: { marginBottom: 8 } });
let closure_8 = { VERIFICATION: "VERIFICATION", SECTION: "SECTION" };
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/user_settings/privacy_and_safety/native/SettingsSecureFramesVerificationsScreen.tsx");

export default function SettingsSecureFramesVerificationsScreen() {
  const tmp = callback();
  let obj = userId(6653);
  userId = obj.useSettingNavigationRoute().params.userId;
  let obj1 = userId(1456);
  const navigation = obj1.useNavigation();
  let items = [_isNativeReflectConstruct];
  const stateFromStores = userId(566).useStateFromStores(items, () => outer1_5.getUser(userId));
  const obj3 = userId(566);
  const dependencyMap = navigation(3969).getFormattedName(stateFromStores, false);
  const layoutEffect = secureFramesUserVerifiedKeys.useLayoutEffect(() => {
    let obj = {};
    let intl = userId(1212).intl;
    obj.title = "" + intl.string(userId(1212).t["5b3FNI"]) + " (" + dependencyMap + ")";
    obj.headerTitle = function headerTitle() {
      const obj = {};
      const intl = userId(1212).intl;
      obj.title = intl.string(userId(1212).t["5b3FNI"]);
      obj.subtitle = outer1_2;
      return outer2_6(userId(9122).GenericHeaderTitle, obj);
    };
    navigation.setOptions(obj);
  });
  const obj4 = navigation(3969);
  secureFramesUserVerifiedKeys = userId(14517).useSecureFramesUserVerifiedKeys(userId);
  const items1 = [userId, secureFramesUserVerifiedKeys];
  const items2 = [navigation, secureFramesUserVerifiedKeys];
  const memo = secureFramesUserVerifiedKeys.useMemo(() => {
    const items = [];
    let obj = { type: outer1_8.SECTION };
    const intl = userId(1212).intl;
    obj = { count: secureFramesUserVerifiedKeys.length };
    obj.title = intl.formatToPlainString(userId(1212).t["/MBjYF"], obj);
    items.push(obj);
    const item = secureFramesUserVerifiedKeys.forEach((verification) => {
      items.push({ type: outer2_8.VERIFICATION, verification, index: arg1 + 1, userId: items, start: 0 === arg1, end: arg1 === outer1_3.length - 1 });
    });
    return items;
  }, items1);
  const effect = secureFramesUserVerifiedKeys.useEffect(() => {
    if (0 === secureFramesUserVerifiedKeys.length) {
      navigation.pop();
    }
  }, items2);
  obj = { style: tmp.list };
  obj = { keyExtractor, getItemType, renderItem, data: memo, contentContainerStyle: tmp.listContent };
  obj1 = { style: tmp.listFooter, children: <ClearVerificationsListFooter userId={userId} /> };
  obj.ListFooterComponent = <View style={tmp.listFooter}><ClearVerificationsListFooter userId={userId} /></View>;
  obj.children = jsx(userId(7879).FlashList, { keyExtractor, getItemType, renderItem, data: memo, contentContainerStyle: tmp.listContent });
  return <View keyExtractor={keyExtractor} getItemType={getItemType} renderItem={renderItem} data={memo} contentContainerStyle={tmp.listContent} />;
};
