// Module ID: 14484
// Function ID: 14485
// Name: UserSettingsSessions
// Dependencies: [32, 19, 17, 1372, 1074, 21, 4836, 5836, 576, 14230, 504, 14485, 5279, 5999, 1115, 5917, 6544, 4832, 1370, 5435, 1177, 6413, 1485, 11746, 6411, 14486, 8347, 9524, 6379, 14487, 2]
// Exports: default

// Module 14484 (UserSettingsSessions)
import nativeDefault from "native" /* 576 */;
import UserSettingsModalActionCreatorsDefault from "UserSettingsModalActionCreators" /* 6411 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 9524 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 11746 */;
import AuthSessionsActionCreators from "AuthSessionsActionCreators" /* 14485 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 14486 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserStore from "UserStore" /* 1372 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import TextStyles from "TextStyles" /* 5836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let Fonts;
let c10;
let c9;
let closure_12;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let tmp10;
let unpackModuleId;
const AssetRegistryDefault = tmp10(6413);
function UserSettingsSessions() {
  let SafeAreaPaddingView;
  let currentSession;
  let currentUser;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items1;
  let items2;
  let items3;
  let obj10;
  let otherSessions;
  let tmp20Result2;
  let tmp21Result;
  let tmp7;
  const tmp = closure_13();
  let obj = otherSessions(14230);
  let authSessions = obj.useAuthSessions();
  ({ currentSession, otherSessions } = authSessions);
  const items = [UserStore];
  const obj2 = otherSessions(504);
  const stateFromStores = obj2.useStateFromStores(items, () => currentUser.getCurrentUser());
  [tmp7, importDefault] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  const effect = react.useEffect(() => {
    let closure_0;
    let obj = otherSessions(dependencyMap[11]);
    const authSessions = obj.fetchAuthSessions();
    const timeout = setTimeout(() => closure_1_1(true), 500);
    return () => {
      clearTimeout(closure_0);
      const obj = AuthSessionsActionCreators;
      obj.clearAuthSessions();
    };
  }, []);
  if (null == currentSession) {
    let tmp16 = null;
    if (tmp7) {
      const obj3 = { style: tmp.loading, children: closure_10(closure_5, {}) };
      tmp16 = closure_10(closure_6, obj3);
    }
    tmp20Result2 = tmp16;
  } else {
    let tmp20Result;
    const obj4 = { spacing: 24, style: tmp.list, children: items1 };
    const Stack = tmp2(5279).Stack;
    const obj5 = { title: intl5.string(otherSessions(1115).t.LLS19o), hasIcons: true, children: tmp21Result };
    const TableRowGroup2 = tmp2(5999).TableRowGroup;
    intl5 = tmp2(1115).intl;
    tmp21Result = null;
    if (null != currentSession) {
      const obj6 = { session: currentSession, current: true };
      tmp21Result = tmp21(SessionInfo, obj6);
    }
    items1 = [closure_10(TableRowGroup2, obj5), , ];
    if (otherSessions.length > 0) {
      const obj7 = { title: intl.string(otherSessions(1115).t.xx1MWc), hasIcons: true, children: items2 };
      const TableRowGroup = tmp2(5999).TableRowGroup;
      intl = tmp2(1115).intl;
      items2 = [
        otherSessions.map((session) => {
              const obj = { session };
              return closure_1_10(SessionInfo, obj, session.id_hash);
            }),
        closure_10(UnknownLegacySessionsInfo, {})
      ];
      tmp20Result = tmp20(TableRowGroup, obj7);
    } else {
      let mfaEnabled;
      if (stateFromStores != null) {
        mfaEnabled = stateFromStores.mfaEnabled;
      }
      tmp20Result = null;
    }
    items1[1] = tmp20Result;
    let tmp21Result2 = null;
    if (otherSessions.length > 0) {
      const obj8 = {
        start: true,
        end: true,
        variant: "danger",
        label: intl2.string(otherSessions(1115).t.cLmmeY),
        subLabel: intl3.string(otherSessions(1115).t.OTXyaf),
        onPress() {
              const obj = AuthSessionsActionCreators;
              return obj.logOutSessions(otherSessions.map((id_hash) => id_hash.id_hash));
            }
      };
      const TableRow = tmp2(5917).TableRow;
      intl2 = tmp2(1115).intl;
      intl3 = tmp2(1115).intl;
      tmp21Result2 = tmp21(TableRow, obj8);
    }
    items1[2] = tmp21Result2;
    tmp20Result2 = tmp20(Stack, obj4);
  }
  const obj9 = { style: tmp.container, children: closure_11(SafeAreaPaddingView, obj10) };
  obj10 = { bottom: true, children: items3 };
  SafeAreaPaddingView = tmp2(6544).SafeAreaPaddingView;
  const obj11 = { variant: "text-sm/medium", style: tmp.description, children: intl4.string(otherSessions(1115).t.zZp618) };
  const Text = tmp2(4832).Text;
  intl4 = tmp2(1115).intl;
  items3 = [closure_10(Text, obj11), tmp20Result2];
  return closure_10(closure_7, obj9);
}
function SessionInfo(session) {
  let Icon;
  let IconComponent;
  let iconSource;
  let intl;
  let intl2;
  let items1;
  let items2;
  let obj13;
  let obj15;
  let obj17;
  let obj18;
  let obj5;
  let obj7;
  let platform;
  let text;
  let tmp20Result;
  session = session.session;
  const current = session.current;
  const tmp = closure_13();
  const client_info = session.client_info;
  let _location;
  if (client_info != null) {
    _location = client_info.location;
  }
  if (_location == null) {
    const client_info2 = session.client_info;
    let ip;
    if (client_info2 != null) {
      ip = client_info2.ip;
    }
    _location = ip;
  }
  const client_info3 = session.client_info;
  if (client_info3 != null) {
    platform = client_info3.platform;
  }
  const client_info4 = session.client_info;
  let os;
  if (client_info4 != null) {
    os = client_info4.os;
  }
  let trimmed;
  if (os != null) {
    const str = os.toLowerCase();
    trimmed = str.trim();
  }
  if (null !== trimmed) {
    if (undefined !== trimmed) {
      let tmp9;
      let obj;
      if ("" !== trimmed) {
        if ("ios" !== trimmed) {
          if ("android" !== trimmed) {
            if ("horizon os" === trimmed) {
              tmp9 = session;
              obj = { text: os, iconSource: AssetRegistryDefault2, IconComponent: session(14487).VrHeadsetIcon };
              const obj2 = { text: os, iconSource: AssetRegistryDefault2, IconComponent: session(14487).VrHeadsetIcon };
            } else {
              obj = { text: os, iconSource: AssetRegistryDefault4, IconComponent: session(8347).ScreenIcon };
              tmp9 = session;
            }
          }
        }
        tmp9 = session;
        obj = { text: os, iconSource: AssetRegistryDefault2, IconComponent: session(6379).MobilePhoneIcon };
        const obj3 = { text: os, iconSource: AssetRegistryDefault2, IconComponent: session(6379).MobilePhoneIcon };
      }
      let formatDateResult = null;
      ({ text, iconSource, IconComponent } = obj);
      if (!current) {
        const tmp9Result = tmp9(14230);
        formatDateResult = tmp9Result.formatDate(session.approx_last_used_time);
      }
      const items = [text, platform];
      const found = items.filter(tmp9(1370).isNotNullish);
      let tmp18 = null;
      if (!current) {
        const obj4 = {
          accessibilityRole: "button",
          accessibilityLabel: intl2.string(tmp9(1115).t.E4MJNt),
          onPress() {
                  const obj = AuthSessionsActionCreators;
                  return obj.logOutSessions(session.id_hash);
                },
          hitSlop: { top: 5, left: 5, bottom: 5, right: 5 },
          children: closure_10(Icon, obj5)
        };
        const PressableOpacity = tmp9(5435).PressableOpacity;
        intl2 = tmp9(1115).intl;
        obj5 = { style: tmp.logoutButton, source: AssetRegistryDefault };
        Icon = tmp9(1177).Icon;
        tmp18 = closure_10(PressableOpacity, obj4);
      }
      const obj6 = { style: tmp.sessionInfo, accessible: true, children: closure_11(closure_6, obj7) };
      obj7 = { style: tmp.sessionInfoRow, children: items1 };
      const obj8 = { variant: "text-md/semibold", children: found[0] };
      items1 = [closure_10(tmp9(4832).Text, obj8), ];
      let tmp22Result = found.length > 1;
      if (tmp22Result) {
        const obj10 = { variant: "text-md/semibold", accessibilityLabel: ",", style: tmp.sessionInfoRowSpacing, children: "\u00B7" };
        const obj9 = { children: items2 };
        items2 = [closure_10(tmp9(4832).Text, obj10), ];
        const obj11 = { variant: "text-md/semibold", children: found[1] };
        items2[1] = closure_10(tmp9(4832).Text, obj11);
        tmp22Result = tmp22(closure_12, obj9);
      }
      items1[1] = tmp22Result;
      const obj12 = { icon: closure_10(tmp9(5917).TableRow.Icon, obj13), label: tmp20Result, subLabel: closure_11(closure_6, obj18), trailing: tmp18 };
      tmp20Result = closure_10(closure_6, obj6);
      const TableRow = tmp9(5917).TableRow;
      let tmp20Result3 = null != _location;
      obj13 = { source: iconSource, IconComponent };
      if (tmp20Result3) {
        const obj14 = { style: tmp.sessionInfoRow, children: closure_10(tmp9(4832).Text, obj15) };
        obj15 = { variant: "text-xs/medium", color: "text-subtle", style: tmp.detailsText, children: _location };
        tmp20Result3 = tmp20(tmp21, obj14);
      }
      const items3 = [tmp20Result3, ];
      let tmp20Result4 = null != formatDateResult;
      if (tmp20Result4) {
        const obj16 = { style: tmp.sessionInfoRow, children: closure_10(tmp9(4832).Text, obj17) };
        obj17 = { variant: "text-xs/medium", color: "text-subtle", style: tmp.detailsText, children: formatDateResult };
        tmp20Result4 = tmp20(tmp21, obj16);
      }
      obj18 = { accessible: true, children: items3 };
      items3[1] = tmp20Result4;
      return closure_10(TableRow, obj12);
    }
  }
  const obj19 = { text: intl.string(session(1115).t.cDHCNY), iconSource: AssetRegistryDefault4, IconComponent: session(8347).ScreenIcon };
  intl = session(1115).intl;
  tmp9 = session;
  obj = obj19;
}
function UnknownLegacySessionsInfo() {
  let Icon;
  let closure_0;
  let intl;
  let intl2;
  let obj3;
  let obj4;
  let obj = require("useNavigation");
  _require = obj.useNavigation();
  const obj2 = { icon: closure_10(Icon, obj3), label: intl.string(require("intl").t.iUa0sn), subLabel: intl2.format(require("intl").t["044+8i"], obj4) };
  const TableRow = require("TableRow").TableRow;
  obj3 = { variant: "translucent", source: AssetRegistryDefault3 };
  Icon = require("TableRow").TableRow.Icon;
  intl = require("intl").intl;
  intl2 = require("intl").intl;
  obj4 = {
    onClick() {
      const obj = UserSettingsModalActionCreatorsDefault;
      obj.setSection(constants.ACCOUNT);
      closure_0.push(constants.ACCOUNT);
    }
  };
  return closure_10(TableRow, obj2);
}
({ ActivityIndicator: hasOwnProperty, View: metroRequire, ScrollView: metroImportDefault } = react_native);
({ UserSettingsSections: c9, Fonts } = Constants);
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let obj = { description: { paddingHorizontal: 16, paddingTop: 8, marginBottom: 8 }, detailsText: obj2, container: { display: "flex", flex: 1 }, loading: { marginTop: 16 }, sessionInfo: { display: "flex" }, sessionInfoRow: { display: "flex", flexDirection: "row", flexWrap: "wrap" }, sessionInfoRowSpacing: { marginHorizontal: 4 }, logoutButton: obj3, list: { paddingHorizontal: 16 } };
obj2 = { fontWeight: "500" };
createStyles = createStyles.createStyles;
const merged = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.colors.TEXT_DEFAULT, 14));
obj3 = { marginRight: 10, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let closure_13 = createStyles(obj);
const result = size.fileFinishedImporting("modules/user_settings/devices/native/UserSettingsSessions.tsx");

export default function UserSettingsSessionsContainer() {
  return authStore(UserSettingsSessions, {});
};
