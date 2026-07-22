// Module ID: 13737
// Function ID: 103901
// Name: UserSettingsSessions
// Dependencies: [266338304, 102039552, 441057280, 358285312, 339738624, 339673088, 79429632, 339869696, 338296832, 268435456, 587399168, 91226112, 260440064, 358088704, 357892096, 359202816, 131072, 435159040, 31, 27, 5063, 1194, 4809, 1921, 653, 33, 4126, 689, 4064, 566, 12003]
// Exports: default

// Module 13737 (UserSettingsSessions)
import useConnectionFilteredAppIdentities from "useConnectionFilteredAppIdentities";

function UserSettingsSessions() {
  let currentSession;
  let otherSessions;
  const tmp = callback5();
  let obj = arg1(dependencyMap[9]);
  const authSessions = obj.useAuthSessions();
  ({ currentSession, otherSessions } = authSessions);
  const arg1 = otherSessions;
  let obj1 = arg1(dependencyMap[10]);
  const items = [closure_8];
  const stateFromStores = obj1.useStateFromStores(items, () => currentUser.getCurrentUser());
  const tmp4 = callback2(React.useState(false), 2);
  let closure_1 = tmp4[1];
  const effect = React.useEffect(() => {
    const authSessions = otherSessions(closure_2[11]).fetchAuthSessions();
    const otherSessions = setTimeout(() => callback2(true), 500);
    return () => {
      clearTimeout(callback);
      callback(closure_2[11]).clearAuthSessions();
    };
  }, []);
  if (null == currentSession) {
    let tmp20 = null;
    if (tmp4[0]) {
      obj = { style: tmp.loading, children: callback3(closure_5, {}) };
      tmp20 = callback3(closure_6, obj);
    }
    let tmp25Result = tmp20;
  } else {
    obj = { spacing: 24, style: tmp.list };
    obj1 = {};
    const intl5 = arg1(dependencyMap[14]).intl;
    obj1.title = intl5.string(arg1(dependencyMap[14]).t.LLS19o);
    obj1.hasIcons = true;
    let tmp8 = null;
    if (null != currentSession) {
      const obj2 = { session: currentSession, current: true };
      tmp8 = callback3(SessionInfo, obj2);
    }
    obj1.children = tmp8;
    const items1 = [callback3(arg1(dependencyMap[13]).TableRowGroup, obj1), , ];
    if (otherSessions.length <= 0) {
      if (null != stateFromStores) {
        let tmp9 = null;
      }
      items1[1] = tmp9;
      let tmp15 = null;
      if (otherSessions.length > 0) {
        const obj3 = { borderBottomColor: false, borderBottomWidth: false, paddingVertical: false };
        const intl2 = arg1(dependencyMap[14]).intl;
        obj3.label = intl2.string(arg1(dependencyMap[14]).t.cLmmeY);
        const intl3 = arg1(dependencyMap[14]).intl;
        obj3.subLabel = intl3.string(arg1(dependencyMap[14]).t.OTXyaf);
        obj3.onPress = function onPress() {
          return otherSessions(closure_2[11]).logOutSessions(otherSessions.map((id_hash) => id_hash.id_hash));
        };
        tmp15 = callback3(arg1(dependencyMap[15]).TableRow, obj3);
      }
      items1[2] = tmp15;
      obj.children = items1;
      tmp25Result = tmp25(arg1(dependencyMap[12]).Stack, obj);
    }
    const obj4 = {};
    const intl = arg1(dependencyMap[14]).intl;
    obj4.title = intl.string(arg1(dependencyMap[14]).t.xx1MWc);
    obj4.hasIcons = true;
    const items2 = [otherSessions.map((id_hash) => callback(closure_15, { session: id_hash }, id_hash.id_hash)), callback3(UnknownLegacySessionsInfo, {})];
    obj4.children = items2;
    tmp9 = callback4(arg1(dependencyMap[13]).TableRowGroup, obj4);
    const tmp25 = callback4;
    const tmp28 = callback3;
  }
  const obj5 = { style: tmp.container };
  const obj6 = { bottom: true };
  const obj7 = { variant: "text-sm/medium", style: tmp.description };
  const intl4 = arg1(dependencyMap[14]).intl;
  obj7.children = intl4.string(arg1(dependencyMap[14]).t.zZp618);
  const items3 = [callback3(arg1(dependencyMap[17]).Text, obj7), tmp25Result];
  obj6.children = items3;
  obj5.children = callback4(arg1(dependencyMap[16]).SafeAreaPaddingView, obj6);
  return callback3(closure_7, obj5);
}
function SessionInfo(session) {
  let IconComponent;
  let iconSource;
  let text;
  session = session.session;
  const arg1 = session;
  const current = session.current;
  const tmp = callback5();
  const client_info = session.client_info;
  let _location;
  if (null != client_info) {
    _location = client_info.location;
  }
  if (null == _location) {
    const client_info2 = session.client_info;
    let ip;
    if (null != client_info2) {
      ip = client_info2.ip;
    }
    _location = ip;
  }
  const client_info3 = session.client_info;
  if (null != client_info3) {
    const platform = client_info3.platform;
  }
  const client_info4 = session.client_info;
  let os;
  if (null != client_info4) {
    os = client_info4.os;
  }
  let trimmed;
  if (null != os) {
    trimmed = os.toLowerCase().trim();
    const str = os.toLowerCase();
  }
  if (null !== trimmed) {
    if (undefined !== trimmed) {
      if ("" !== trimmed) {
        if ("ios" !== trimmed) {
          if ("android" !== trimmed) {
            if ("horizon os" === trimmed) {
              let obj = { text: os, iconSource: importDefault(dependencyMap[27]), IconComponent: arg1(dependencyMap[29]).VrHeadsetIcon };
            } else {
              obj = { text: os, iconSource: importDefault(dependencyMap[25]), IconComponent: arg1(dependencyMap[26]).ScreenIcon };
            }
          }
        }
        obj = { text: os, iconSource: importDefault(dependencyMap[27]), IconComponent: arg1(dependencyMap[28]).MobilePhoneIcon };
      }
      let formatDateResult = null;
      ({ text, iconSource, IconComponent } = obj);
      if (!current) {
        let obj4 = arg1(dependencyMap[9]);
        formatDateResult = obj4.formatDate(session.approx_last_used_time);
      }
      const items = [text, platform];
      const found = items.filter(arg1(dependencyMap[18]).isNotNullish);
      let tmp20 = null;
      if (!current) {
        const obj1 = { accessibilityRole: "button" };
        const intl2 = arg1(dependencyMap[14]).intl;
        obj1.accessibilityLabel = intl2.string(arg1(dependencyMap[14]).t.E4MJNt);
        obj1.onPress = function onPress() {
          return session(closure_2[11]).logOutSessions(session.id_hash);
        };
        obj1.hitSlop = { useManaTypeConsolidationExperiment: "Text", notification_center_id: "options", bdt: "to", animatedContainerHeight: "Array" };
        const obj2 = { style: tmp.logoutButton, source: importDefault(dependencyMap[21]) };
        obj1.children = callback3(arg1(dependencyMap[20]).Icon, obj2);
        tmp20 = callback3(arg1(dependencyMap[19]).PressableOpacity, obj1);
      }
      const obj3 = { style: tmp.sessionInfo, accessible: true };
      obj4 = { style: tmp.sessionInfoRow };
      const obj5 = { variant: "text-md/semibold", children: found[0] };
      const items1 = [callback3(arg1(dependencyMap[17]).Text, obj5), ];
      let tmp33 = found.length > 1;
      if (tmp33) {
        const obj6 = {};
        const obj7 = { 9223372036854775807: "f2b2ae790fb60abfa40be44fab4eb6fc", 9223372036854775807: "ps_relink_upsell", 9223372036854775807: "png", 0: true, style: tmp.sessionInfoRowSpacing };
        const items2 = [callback3(arg1(dependencyMap[17]).Text, obj7), ];
        const obj8 = { variant: "text-md/semibold", children: found[1] };
        items2[1] = callback3(arg1(dependencyMap[17]).Text, obj8);
        obj6.children = items2;
        tmp33 = callback4(closure_12, obj6);
      }
      items1[1] = tmp33;
      obj4.children = items1;
      obj3.children = callback4(closure_6, obj4);
      const obj9 = {};
      const obj10 = { source: iconSource, IconComponent };
      obj9.icon = callback3(arg1(dependencyMap[15]).TableRow.Icon, obj10);
      obj9.label = callback3(closure_6, obj3);
      const obj11 = { accessible: true };
      let tmp47 = null != _location;
      if (tmp47) {
        const obj12 = { style: tmp.sessionInfoRow };
        const obj13 = { cachedAt: null, edpbxy: null, style: tmp.detailsText, children: _location };
        obj12.children = callback3(arg1(dependencyMap[17]).Text, obj13);
        tmp47 = callback3(closure_6, obj12);
      }
      const items3 = [tmp47, ];
      let tmp53 = null != formatDateResult;
      if (tmp53) {
        const obj14 = { style: tmp.sessionInfoRow };
        const obj15 = { cachedAt: null, edpbxy: null, style: tmp.detailsText, children: formatDateResult };
        obj14.children = callback3(arg1(dependencyMap[17]).Text, obj15);
        tmp53 = callback3(closure_6, obj14);
      }
      items3[1] = tmp53;
      obj11.children = items3;
      obj9.subLabel = callback4(closure_6, obj11);
      obj9.trailing = tmp20;
      return callback3(arg1(dependencyMap[15]).TableRow, obj9);
    }
  }
  const obj16 = {};
  const intl = arg1(dependencyMap[14]).intl;
  obj16.text = intl.string(arg1(dependencyMap[14]).t.cDHCNY);
  obj16.iconSource = importDefault(dependencyMap[25]);
  obj16.IconComponent = arg1(dependencyMap[26]).ScreenIcon;
  obj = obj16;
}
function UnknownLegacySessionsInfo() {
  let obj = callback(dependencyMap[22]);
  const callback = obj.useNavigation();
  obj = {};
  obj = { variant: "translucent", source: importDefault(dependencyMap[23]) };
  obj.icon = callback3(callback(dependencyMap[15]).TableRow.Icon, obj);
  const intl = callback(dependencyMap[14]).intl;
  obj.label = intl.string(callback(dependencyMap[14]).t.iUa0sn);
  const intl2 = callback(dependencyMap[14]).intl;
  obj.subLabel = intl2.format(callback(dependencyMap[14]).t.044+8i, {
    onClick() {
      callback(closure_2[24]).setSection(constants.ACCOUNT);
      const obj = callback(closure_2[24]);
    }
  });
  return callback3(callback(dependencyMap[15]).TableRow, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ ActivityIndicator: closure_5, View: closure_6, ScrollView: closure_7 } = arg1(dependencyMap[2]));
let closure_8 = importDefault(dependencyMap[3]);
const tmp3 = arg1(dependencyMap[4]);
const UserSettingsSections = tmp3.UserSettingsSections;
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_10, jsxs: closure_11, Fragment: closure_12 } = arg1(dependencyMap[5]));
let obj = arg1(dependencyMap[6]);
obj = { description: {} };
obj = {};
const tmp4 = arg1(dependencyMap[5]);
const merged = Object.assign(importDefault(dependencyMap[7])(tmp3.Fonts.PRIMARY_MEDIUM, importDefault(dependencyMap[8]).colors.TEXT_DEFAULT, 14));
obj["fontWeight"] = "500";
obj.detailsText = obj;
obj.container = {};
obj.loading = { marginTop: 16 };
obj.sessionInfo = { display: "flex" };
obj.sessionInfoRow = { position: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000173019275103164, location: 0.000000007919535119815975, body: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000173019275103164 };
obj.sessionInfoRowSpacing = { marginHorizontal: 4 };
const importDefaultResult = importDefault(dependencyMap[7]);
obj.logoutButton = { marginRight: 10, tintColor: importDefault(dependencyMap[8]).colors.INTERACTIVE_TEXT_DEFAULT };
obj.list = { paddingHorizontal: 16 };
let closure_13 = obj.createStyles(obj);
const result = useConnectionFilteredAppIdentities.fileFinishedImporting("modules/user_settings/devices/native/UserSettingsSessions.tsx");

export default function UserSettingsSessionsContainer() {
  return callback3(UserSettingsSessions, {});
};
