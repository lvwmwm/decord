// Module ID: 13851
// Function ID: 106057
// Name: UserSettingsSessions
// Dependencies: [57, 31, 27, 1849, 653, 33, 4130, 5052, 689, 13638, 566, 13852, 4541, 5503, 1212, 5165, 5121, 4126, 1327, 4660, 1273, 7607, 1456, 11369, 7375, 13853, 11855, 10791, 9212, 13854, 2]
// Exports: default

// Module 13851 (UserSettingsSessions)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "registerAsset";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult from "createTextStyle";

let closure_10;
let closure_11;
let closure_12;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
function UserSettingsSessions() {
  let currentSession;
  let otherSessions;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = otherSessions(13638);
  let authSessions = obj.useAuthSessions();
  ({ currentSession, otherSessions } = authSessions);
  let obj1 = otherSessions(566);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj1.useStateFromStores(items, () => outer1_8.getCurrentUser());
  const tmp4 = callback(React.useState(false), 2);
  let closure_1 = tmp4[1];
  const effect = React.useEffect(() => {
    const authSessions = otherSessions(outer1_2[11]).fetchAuthSessions();
    const timeout = setTimeout(() => outer1_1(true), 500);
    return () => {
      clearTimeout(closure_0);
      otherSessions(outer2_2[11]).clearAuthSessions();
    };
  }, []);
  if (null == currentSession) {
    let tmp20 = null;
    if (tmp4[0]) {
      obj = { style: tmp.loading, children: callback2(closure_5, {}) };
      tmp20 = callback2(closure_6, obj);
    }
    let tmp25Result = tmp20;
  } else {
    obj = { spacing: 24, style: tmp.list };
    obj1 = {};
    const intl5 = otherSessions(1212).intl;
    obj1.title = intl5.string(otherSessions(1212).t.LLS19o);
    obj1.hasIcons = true;
    let tmp8 = null;
    if (null != currentSession) {
      const obj2 = { session: currentSession, current: true };
      tmp8 = callback2(SessionInfo, obj2);
    }
    obj1.children = tmp8;
    const items1 = [callback2(otherSessions(5503).TableRowGroup, obj1), , ];
    if (otherSessions.length <= 0) {
      if (null != stateFromStores) {
        let tmp9 = null;
      }
      items1[1] = tmp9;
      let tmp15 = null;
      if (otherSessions.length > 0) {
        const obj3 = { start: true, end: true, variant: "danger" };
        const intl2 = otherSessions(1212).intl;
        obj3.label = intl2.string(otherSessions(1212).t.cLmmeY);
        const intl3 = otherSessions(1212).intl;
        obj3.subLabel = intl3.string(otherSessions(1212).t.OTXyaf);
        obj3.onPress = function onPress() {
          return otherSessions(outer1_2[11]).logOutSessions(otherSessions.map((id_hash) => id_hash.id_hash));
        };
        tmp15 = callback2(otherSessions(5165).TableRow, obj3);
      }
      items1[2] = tmp15;
      obj.children = items1;
      tmp25Result = tmp25(otherSessions(4541).Stack, obj);
    }
    const obj4 = {};
    const intl = otherSessions(1212).intl;
    obj4.title = intl.string(otherSessions(1212).t.xx1MWc);
    obj4.hasIcons = true;
    const items2 = [otherSessions.map((id_hash) => outer1_10(outer1_15, { session: id_hash }, id_hash.id_hash)), callback2(UnknownLegacySessionsInfo, {})];
    obj4.children = items2;
    tmp9 = callback3(otherSessions(5503).TableRowGroup, obj4);
    tmp25 = callback3;
    const tmp28 = callback2;
  }
  const obj5 = { style: tmp.container };
  const obj6 = { bottom: true };
  const obj7 = { variant: "text-sm/medium", style: tmp.description };
  const intl4 = otherSessions(1212).intl;
  obj7.children = intl4.string(otherSessions(1212).t.zZp618);
  const items3 = [callback2(otherSessions(4126).Text, obj7), tmp25Result];
  obj6.children = items3;
  obj5.children = callback3(otherSessions(5121).SafeAreaPaddingView, obj6);
  return callback2(closure_7, obj5);
}
function SessionInfo(session) {
  let IconComponent;
  let iconSource;
  let text;
  session = session.session;
  const current = session.current;
  const tmp = _createForOfIteratorHelperLoose();
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
              let obj = { text: os, iconSource: importDefault(10791), IconComponent: session(13854).VrHeadsetIcon };
            } else {
              obj = { text: os, iconSource: importDefault(13853), IconComponent: session(11855).ScreenIcon };
            }
          }
        }
        obj = { text: os, iconSource: importDefault(10791), IconComponent: session(9212).MobilePhoneIcon };
      }
      let formatDateResult = null;
      ({ text, iconSource, IconComponent } = obj);
      if (!current) {
        let obj4 = session(13638);
        formatDateResult = obj4.formatDate(session.approx_last_used_time);
      }
      const items = [text, platform];
      const found = items.filter(session(1327).isNotNullish);
      let tmp20 = null;
      if (!current) {
        const obj1 = { accessibilityRole: "button" };
        const intl2 = session(1212).intl;
        obj1.accessibilityLabel = intl2.string(session(1212).t.E4MJNt);
        obj1.onPress = function onPress() {
          return session(outer1_2[11]).logOutSessions(session.id_hash);
        };
        obj1.hitSlop = { top: 5, left: 5, bottom: 5, right: 5 };
        const obj2 = { style: tmp.logoutButton, source: importDefault(7607) };
        obj1.children = callback2(session(1273).Icon, obj2);
        tmp20 = callback2(session(4660).PressableOpacity, obj1);
      }
      const obj3 = { style: tmp.sessionInfo, accessible: true };
      obj4 = { style: tmp.sessionInfoRow };
      const obj5 = { variant: "text-md/semibold", children: found[0] };
      const items1 = [callback2(session(4126).Text, obj5), ];
      let tmp33 = found.length > 1;
      if (tmp33) {
        const obj6 = {};
        const obj7 = { variant: "text-md/semibold", accessibilityLabel: ",", style: tmp.sessionInfoRowSpacing, children: "\u00B7" };
        const items2 = [callback2(session(4126).Text, obj7), ];
        const obj8 = { variant: "text-md/semibold", children: found[1] };
        items2[1] = callback2(session(4126).Text, obj8);
        obj6.children = items2;
        tmp33 = callback3(closure_12, obj6);
      }
      items1[1] = tmp33;
      obj4.children = items1;
      obj3.children = callback3(closure_6, obj4);
      const obj9 = {};
      const obj10 = { source: iconSource, IconComponent };
      obj9.icon = callback2(session(5165).TableRow.Icon, obj10);
      obj9.label = callback2(closure_6, obj3);
      const obj11 = { accessible: true };
      let tmp47 = null != _location;
      if (tmp47) {
        const obj12 = { style: tmp.sessionInfoRow };
        const obj13 = { variant: "text-xs/medium", color: "text-subtle", style: tmp.detailsText, children: _location };
        obj12.children = callback2(session(4126).Text, obj13);
        tmp47 = callback2(closure_6, obj12);
      }
      const items3 = [tmp47, ];
      let tmp53 = null != formatDateResult;
      if (tmp53) {
        const obj14 = { style: tmp.sessionInfoRow };
        const obj15 = { variant: "text-xs/medium", color: "text-subtle", style: tmp.detailsText, children: formatDateResult };
        obj14.children = callback2(session(4126).Text, obj15);
        tmp53 = callback2(closure_6, obj14);
      }
      items3[1] = tmp53;
      obj11.children = items3;
      obj9.subLabel = callback3(closure_6, obj11);
      obj9.trailing = tmp20;
      return callback2(session(5165).TableRow, obj9);
    }
  }
  const obj16 = {};
  const intl = session(1212).intl;
  obj16.text = intl.string(session(1212).t.cDHCNY);
  obj16.iconSource = importDefault(13853);
  obj16.IconComponent = session(11855).ScreenIcon;
  obj = obj16;
}
function UnknownLegacySessionsInfo() {
  let obj = _require(1456);
  _require = obj.useNavigation();
  obj = {};
  obj = { variant: "translucent", source: importDefault(11369) };
  obj.icon = callback2(_require(5165).TableRow.Icon, obj);
  const intl = _require(1212).intl;
  obj.label = intl.string(_require(1212).t.iUa0sn);
  const intl2 = _require(1212).intl;
  obj.subLabel = intl2.format(_require(1212).t["044+8i"], {
    onClick() {
      outer1_1(outer1_2[24]).setSection(outer1_9.ACCOUNT);
      const obj = outer1_1(outer1_2[24]);
    }
  });
  return callback2(_require(5165).TableRow, obj);
}
({ ActivityIndicator: closure_5, View: closure_6, ScrollView: closure_7 } = get_ActivityIndicator);
const UserSettingsSections = ME.UserSettingsSections;
({ jsx: closure_10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
_createForOfIteratorHelperLoose = { description: { paddingHorizontal: 16, paddingTop: 8, marginBottom: 8 } };
_createForOfIteratorHelperLoose = {};
const merged = Object.assign(require("createTextStyle")(ME.Fonts.PRIMARY_MEDIUM, require("_createForOfIteratorHelperLoose").colors.TEXT_DEFAULT, 14));
_createForOfIteratorHelperLoose["fontWeight"] = "500";
_createForOfIteratorHelperLoose.detailsText = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.container = { display: "flex", flex: 1 };
_createForOfIteratorHelperLoose.loading = { marginTop: 16 };
_createForOfIteratorHelperLoose.sessionInfo = { display: "flex" };
_createForOfIteratorHelperLoose.sessionInfoRow = { display: "flex", flexDirection: "row", flexWrap: "wrap" };
_createForOfIteratorHelperLoose.sessionInfoRowSpacing = { marginHorizontal: 4 };
_createForOfIteratorHelperLoose.logoutButton = { marginRight: 10, tintColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT };
_createForOfIteratorHelperLoose.list = { paddingHorizontal: 16 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { marginRight: 10, tintColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/user_settings/devices/native/UserSettingsSessions.tsx");

export default function UserSettingsSessionsContainer() {
  return callback2(UserSettingsSessions, {});
};
