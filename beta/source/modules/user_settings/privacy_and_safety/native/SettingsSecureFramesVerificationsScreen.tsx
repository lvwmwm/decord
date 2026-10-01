// Module ID: 15471
// Function ID: 15472
// Name: SettingsSecureFramesVerificationsScreen
// Dependencies: [19, 17, 1372, 21, 4836, 9163, 5917, 1115, 5435, 5992, 4832, 6415, 1485, 504, 4678, 7288, 15468, 8179, 2]
// Exports: default

// Module 15471 (SettingsSecureFramesVerificationsScreen)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import intl3 from "intl" /* 1115 */;
import Text_Text from "Text/Text" /* 4832 */;
import SecureFramesUtils from "SecureFramesUtils" /* 9163 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1372 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let dependencyMap, navigation;

function VerificationListItem(userId) {
  let end;
  let index;
  let start;
  userId = userId.userId;
  const verification = userId.verification;
  const items = [userId, verification.verifiedKey];
  ({ index, start, end } = userId);
  const items1 = [verification.timestamp];
  const callback = react.useCallback(() => {
    const obj = SecureFramesUtils;
    const result = obj.deletePersistentVerification(userId, verification.verifiedKey);
  }, items);
  const memo = react.useMemo(() => {
    const obj = SecureFramesUtils;
    return obj.getSecureFramesUserVerifiedTimestamp(verification.timestamp);
  }, items1);
  const TableRow = userId(5917).TableRow;
  const intl = userId(1115).intl;
  const PressableHighlight = userId(5435).PressableHighlight;
  return <TableRow label={intl.formatToPlainString(userId(1115).t.N4qBBO, { index })} subLabel={memo} start={start} end={end} trailing={null} />;
}
function SectionListItem(title) {
  title = title.title;
  return jsx(Text_Text.Text, { style: closure_7().section, variant: "text-sm/semibold", color: "text-default", children: title });
}
function renderItem(item) {
  item = item.item;
  const type = item.type;
  if (constants.VERIFICATION === type) {
    const merged = Object.assign(item);
    return <VerificationListItem />;
  } else if (tmp.SECTION === type) {
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
    return tmp.SECTION === type ? type.title : undefined;
  }
}
function ClearVerificationsListFooter(userId) {
  let intl;
  let intl2;
  userId = userId.userId;
  const items = [userId];
  const callback = react.useCallback(() => {
    const obj = SecureFramesUtils;
    const result = obj.deleteUserPersistentVerifications(userId);
  }, items);
  const TableRow = userId(5917).TableRow;
  ({ variant: "text-md/semibold", color: "text-feedback-critical", children: intl.string(userId(1115).t["2xL5lu"]) });
  const Text = userId(4832).Text;
  intl = userId(1115).intl;
  ({ variant: "text-xs/medium", color: "text-subtle", children: intl2.string(userId(1115).t.kgAfXN) });
  const Text2 = userId(4832).Text;
  intl2 = userId(1115).intl;
  return <TableRow label={null} subLabel={null} onPress={callback} start end />;
}
const View = react_native.View;
const jsx = Fragment.jsx;
let closure_7 = createStyles.createStyles({ list: { flexGrow: 1 }, listContent: { paddingVertical: 32, paddingHorizontal: 16 }, listFooter: { marginTop: 32 }, section: { marginBottom: 8 } });
const constants = { VERIFICATION: "VERIFICATION", SECTION: "SECTION" };
let result = size.fileFinishedImporting("modules/user_settings/privacy_and_safety/native/SettingsSecureFramesVerificationsScreen.tsx");

export default function SettingsSecureFramesVerificationsScreen() {
  let closure_2;
  let secureFramesUserVerifiedKeys;
  let userId;
  const tmp = closure_7();
  let obj = userId(6415);
  userId = obj.useSettingNavigationRoute().params.userId;
  let obj2 = userId(1485);
  navigation = obj2.useNavigation();
  let items = [UserStore];
  const obj3 = userId(504);
  const stateFromStores = obj3.useStateFromStores(items, () => UserStore.getUser(userId));
  const obj4 = navigation(4678);
  dependencyMap = obj4.getFormattedName(stateFromStores, false);
  const layoutEffect = secureFramesUserVerifiedKeys.useLayoutEffect(() => {
    let intl;
    const setOptions = navigation.setOptions;
    const obj = {
      title: "" + intl.string(intl3.t["5b3FNI"]) + " (" + subtitle + ")",
      headerTitle() {
        const GenericHeaderTitle = userId(subtitle[15]).GenericHeaderTitle;
        const intl = userId(subtitle[7]).intl;
        return <GenericHeaderTitle title={intl.string(userId(subtitle[7]).t["5b3FNI"])} subtitle={subtitle} />;
      }
    };
    intl = intl3.intl;
    setOptions(obj);
  });
  const obj5 = userId(15468);
  secureFramesUserVerifiedKeys = obj5.useSecureFramesUserVerifiedKeys(userId);
  const items1 = [userId, secureFramesUserVerifiedKeys];
  const items2 = [navigation, secureFramesUserVerifiedKeys];
  const memo = secureFramesUserVerifiedKeys.useMemo(() => {
    let intl;
    let obj2;
    const items = [];
    let obj = { type: constants.SECTION, title: intl.formatToPlainString(userId(closure_2[7]).t["/MBjYF"], obj2) };
    const push = items.push;
    intl = userId(closure_2[7]).intl;
    obj2 = { count: secureFramesUserVerifiedKeys.length };
    push(obj);
    const item = secureFramesUserVerifiedKeys.forEach((verification, index) => {
      const obj = { type: constants.VERIFICATION, verification, index: index + 1, userId, start: 0 === index, end: index === secureFramesUserVerifiedKeys.length - 1 };
      items.push(obj);
    });
    return items;
  }, items1);
  const effect = secureFramesUserVerifiedKeys.useEffect(() => {
    if (0 === secureFramesUserVerifiedKeys.length) {
      navigation.pop();
    }
  }, items2);
  const FlashList = userId(8179).FlashList;
  return <View style={tmp.list}>{null}</View>;
};
