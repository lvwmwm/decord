// Module ID: 11297
// Function ID: 11298
// Name: ConnectionsRoleMessageBadgeActionSheet
// Dependencies: [32, 19, 17, 1386, 502, 2108, 2102, 2067, 11298, 5720, 1074, 21, 4836, 576, 1115, 5719, 4783, 4832, 4767, 12, 4531, 5595, 11061, 8741, 1177, 1397, 4685, 38, 6583, 6603, 504, 1241, 5016, 5832, 6571, 6624, 5281, 4800, 11064, 7624, 2]
// Exports: default

// Module 11297 (ConnectionsRoleMessageBadgeActionSheet)
import _modDef12 from "module_12" /* 12 */;
import nativeDefault from "native" /* 576 */;
import intl6 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import AvatarUtils from "AvatarUtils" /* 1397 */;
import shared from "shared" /* 4685 */;
import useThemeDefault from "useTheme" /* 4767 */;
import CheckmarkLargeIcon from "CheckmarkLargeIcon" /* 4783 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import Text_Text from "Text/Text" /* 4832 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5016 */;
import PlatformsDefault from "Platforms" /* 5595 */;
import ConnectionsUtils from "ConnectionsUtils" /* 5719 */;
import Constants2 from "Constants" /* 5720 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5832 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 7624 */;
import GuildRoleConnectionsModalActionCreators from "GuildRoleConnectionsModalActionCreators" /* 11064 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserRecord from "UserRecord" /* 1386 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildMemberStore from "GuildMemberStore" /* 2108 */;
import GuildRoleStore from "GuildRoleStore" /* 2102 */;
import GuildStore from "GuildStore" /* 2067 */;
import GuildRoleConnectionEligibilityStore from "GuildRoleConnectionEligibilityStore" /* 11298 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let BottomSheet, dependencyMap, importDefault;

let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
function PopoutCheck(arg0) {
  let connectionMetadataField;
  let connectionType;
  let description;
  let formatResult;
  let items;
  let operator;
  let value;
  ({ operator, value, description } = arg0);
  ({ connectionType, connectionMetadataField } = arg0);
  const tmp = closure_19();
  if (null != description) {
    if (OperatorTypes.LESS_THAN === operator) {
      const intl = intl6.intl;
      const format = intl.format;
      const _Math = Math;
      const _Number = Number;
      const obj2 = { description, count: Math.max(0, Number(value) - 1) };
      const v2p7dA3 = intl6.t["2p7dA3"];
      formatResult = format(v2p7dA3, obj2);
    } else {
      formatResult = description;
      if (tmp5.GREATER_THAN === operator) {
        const intl2 = intl6.intl;
        const format2 = intl2.format;
        const _Math2 = Math;
        const _Number2 = Number;
        const obj3 = { description, count: Math.max(0, Number(value) + 1) };
        const v2p7dA31 = intl6.t["2p7dA3"];
        formatResult = format2(v2p7dA31, obj3);
      }
    }
  } else {
    const obj4 = { connectionType, connectionMetadataField, operator, value };
    const obj = ConnectionsUtils;
    formatResult = obj.getConnectionsCheckText(obj4);
  }
  let tmp10 = null;
  if (null != formatResult) {
    const obj5 = { style: tmp.popoutCheck, children: items };
    const obj6 = { size: "sm", style: tmp.popoutCheckIcon };
    items = [authStore3(CheckmarkLargeIcon.CheckmarkLargeIcon, obj6), ];
    const obj7 = { variant: "text-xs/medium", color: "mobile-text-heading-primary", children: formatResult };
    items[1] = authStore3(Text_Text.Text, obj7);
    tmp10 = closure_17(metroRequire, obj5);
  }
  return tmp10;
}
class PopoutChecks {
  constructor(guildId) {
    let _undefined;
    let closure_1;
    let closure_2;
    guildId = guildId.guildId;
    const eligibilityStates = guildId.eligibilityStates;
    importDefault = closure_19();
    dependencyMap = useThemeDefault();
    let obj = _modDef12;
    const groupByResult = obj.groupBy(eligibilityStates, (connection_type) => {
      let str = "";
      connection_type = connection_type.connection_type;
      if (null != connection_type.application_id) {
        const _HermesInternal = HermesInternal;
        str = ":" + connection_type.application_id;
      }
      return "" + connection_type + str;
    });
    let c3 = groupByResult;
    const keys = Object.keys(groupByResult);
    let closure_4 = keys.length - 1;
    let obj2 = guildId(4531);
    const roleColor = obj2.useToken(nativeDefault.unsafe_rawColors.GREEN_330);
    let obj3 = {
      children: keys.map(function(item, index) {
        let icon;
        let items1;
        let items2;
        let makeSource;
        let tmp10;
        let tmp9Result2;
        const found = arr.filter((operator) => null != operator.operator);
        const found1 = arr.find((application) => null != application.application);
        const obj = PlatformsDefault;
        const value = obj.get(item);
        let application;
        if (found1 != null) {
          application = found1.application;
        }
        let bot;
        if (application != null) {
          bot = application.bot;
        }
        let tmp7 = null;
        if (null != bot) {
          const self = this;
          const self2 = this;
          tmp7 = new UserRecord(application.bot);
        }
        const officialApplicationIds = ConnectionsUtils.officialApplicationIds;
        let str;
        const includes = officialApplicationIds.includes;
        if (application != null) {
          str = application.id;
        }
        if (str == null) {
          str = "";
        }
        if (includes(str)) {
          const obj2 = { style: closure_1.botTag, guildId, roleColor, size: 16 };
          tmp10 = authStore3(tmp2(11061), obj2);
        } else if (null != tmp7) {
          const obj3 = { style: closure_1.botTag, verified: false };
          tmp10 = authStore3(tmp2(8741), obj3);
        }
        const items = [closure_1.popoutChecksGroup, ];
        let prop = null;
        if (index < closure_4) {
          prop = tmp19.popoutChecksGroupBottomMargin;
        }
        const obj4 = { style: items, children: items2 };
        items[1] = prop;
        let tmp22Result = null;
        const obj5 = { style: closure_1.popoutCheckGroupName, children: items1 };
        if (null != value) {
          const obj6 = { style: closure_1.popoutCheckGroupPlatformIcon, source: makeSource(tmp9Result2.isThemeDark(closure_2) ? icon.darkPNG : icon.lightPNG), disableColor: true, size: native.Icon.Sizes.MEDIUM };
          const Icon = tmp9(1177).Icon;
          makeSource = AvatarUtils.makeSource;
          AvatarUtils;
          icon = value.icon;
          tmp9Result2 = shared;
          tmp22Result = authStore3(Icon, obj6);
        }
        items1 = [tmp22Result, , , ];
        let tmp25 = null;
        if (null != tmp7) {
          const obj7 = { style: closure_1.popoutCheckGroupPlatformIcon, user: tmp7, size: native.AvatarSizes.XSMALL, guildId: "a" };
          const Avatar = tmp9(1177).Avatar;
          tmp25 = authStore3(Avatar, obj7);
        }
        items1[1] = tmp25;
        let name;
        const Text = tmp9(4832).Text;
        const tmp27 = authStore3;
        if (value != null) {
          name = value.name;
        }
        if (name == null) {
          let name1;
          if (application != null) {
            name1 = application.name;
          }
          name = name1;
        }
        items1[2] = tmp27(Text, { variant: "text-sm/medium", color: "interactive-text-active", children: name });
        items1[3] = tmp10;
        items2 = [
          closure_17(metroRequire, obj5),
          found.map((description) => {
            let connection_metadata_field;
            let connection_type;
            let operator;
            let value;
            ({ connection_type, connection_metadata_field, operator, value } = description);
            description = description.description;
            closure_1_1(closure_1_2[27])(null != connectionMetadataField, "connectionMetadataField is null");
            closure_1_1(closure_1_2[27])(null != operator, "operator is null");
            closure_1_1(closure_1_2[27])(null != value, "value is null");
            return closure_1_16(closure_1_20, { connectionType, connectionMetadataField, operator, value, description }, "" + connectionType + ":" + connectionMetadataField + ":" + operator + ":" + value);
          })
        ];
        return closure_17(metroRequire, obj4, item);
      })
    };
    return closure_16(closure_18, obj3);
  }
}
({ ActivityIndicator: hasOwnProperty, View: metroRequire } = react_native);
const OperatorTypes = Constants2.OperatorTypes;
({ AnalyticEvents: closure_14, EMPTY_STRING_SNOWFLAKE_ID: closure_15 } = Constants);
({ jsx: closure_16, jsxs: closure_17, Fragment: closure_18 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { flexDirection: "column", alignItems: "center", padding: 16 }, header: obj2, verifiedContainer: { marginRight: 8, height: 24, width: 24 }, headerTextContainer: { flexShrink: 1, flexDirection: "column" }, verifiedCheck: { position: "absolute", left: 0, top: 0 }, loadingSpinner: { marginVertical: 40 }, popoutCheck: { flexDirection: "row", alignItems: "center", marginTop: 8, marginLeft: 32, paddingRight: 20 }, popoutCheckIcon: obj3, popoutChecksGroup: { width: "100%", marginBottom: 24 }, popoutChecksGroupBottomMargin: obj4, popoutCheckGroupName: { flexDirection: "row", alignItems: "center" }, popoutCheckGroupPlatformIcon: { marginRight: 8 }, button: { marginBottom: 8 }, botTag: { marginLeft: 4 } };
obj2 = { width: "100%", flexDirection: "row", alignItems: "center", paddingBottom: 16, borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, marginBottom: nativeDefault.space.PX_24 };
createStyles = createStyles.createStyles;
obj3 = { marginRight: 8, tintColor: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE };
obj4 = { paddingBottom: 12, borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, marginBottom: 12 };
let closure_19 = createStyles(obj);
let result = size.fileFinishedImporting("modules/connections/native/ConnectionsRoleMessageBadgeActionSheet.tsx");

export default function ConnectionsRoleMessageBadgeActionSheet(userId) {
  let Button;
  let Button2;
  let formatResult;
  let hasItem;
  let id;
  let intl4;
  let intl5;
  let items7;
  let items8;
  let obj10;
  let obj16;
  let obj18;
  let someResult;
  let tmp21;
  let tmp2Result;
  userId = userId.userId;
  const roleId = userId.roleId;
  const channelId = userId.channelId;
  const guildId = userId.guildId;
  let first;
  let closure_9;
  let tmp = closure_19();
  const tmp4 = roleId(channelId[28]);
  const analyticsLocations = tmp4(roleId(channelId[29]).CONNECTIONS_ROLE_POPOUT).analyticsLocations;
  let obj = userId(channelId[30]);
  const items = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId));
  let obj2 = userId(channelId[30]);
  const items1 = [first];
  let closure_6 = obj2.useStateFromStores(items1, () => first.getId());
  let obj3 = userId(channelId[30]);
  const items2 = [closure_9];
  const stateFromStores1 = obj3.useStateFromStores(items2, () => GuildMemberStore.getMember(guildId, closure_6));
  const items3 = [GuildRoleConnectionEligibilityStore];
  const obj4 = userId(channelId[30]);
  const stateFromStores2 = obj4.useStateFromStores(items3, () => GuildRoleConnectionEligibilityStore.getGuildRoleConnectionEligibility(roleId));
  const tmp8 = guildId(analyticsLocations.useState(null == stateFromStores2), 2);
  first = tmp8[0];
  closure_9 = tmp8[1];
  const tmp2 = roleId;
  if (stateFromStores1 != null) {
    const roles = stateFromStores1.roles;
    hasItem = roles.includes(roleId);
  }
  const items4 = [userId, roleId, channelId, guildId];
  const effect = obj5.useEffect(() => {
    const track = AnalyticsUtilsDefault.track;
    const PASSPORT_ROLE_POPOUT_VIEWED = constants.PASSPORT_ROLE_POPOUT_VIEWED;
    const obj = { other_user_id: userId, role_id: roleId };
    AnalyticsUtilsDefault;
    const obj2 = AppAnalyticsUtils;
    const merged = Object.assign(obj2.collectChannelAnalyticsMetadataFromId(channelId));
    const obj3 = AppAnalyticsUtils;
    const merged1 = Object.assign(obj3.collectGuildAnalyticsMetadata(guildId));
    track(PASSPORT_ROLE_POPOUT_VIEWED, obj);
  }, items4);
  const items5 = [guildId, roleId, first, stateFromStores2];
  const effect1 = obj5.useEffect(() => {
    const tmp = first && null == stateFromStores2;
    if (tmp) {
      const obj = GuildActionCreatorsDefault;
      const guildRoleConnectionsEligibility = obj.fetchGuildRoleConnectionsEligibility(guildId, roleId);
      guildRoleConnectionsEligibility.then(() => closure_1_9(false));
    }
  }, items5);
  if (stateFromStores2 != null) {
    const flatResult = stateFromStores2.flat();
    someResult = flatResult.some((application_id) => undefined === application_id.application_id);
  }
  const items6 = [GuildRoleStore];
  const tmp5Result = userId(channelId[30]);
  const stateFromStores3 = tmp5Result.useStateFromStores(items6, () => {
    let role;
    if (null != stateFromStores) {
      role = GuildRoleStore.getRole(tmp.id, roleId);
    }
    return role;
  });
  if (null != stateFromStores2) {
    if (1 === stateFromStores2.length) {
      const obj6 = { value: analyticsLocations, children: null };
      const AnalyticsLocationProvider = tmp5(tmp3[28]).AnalyticsLocationProvider;
      const obj7 = { style: tmp.container, children: null };
      const obj8 = { style: tmp.header, children: items7 };
      const obj9 = { style: tmp.verifiedContainer, children: closure_16(tmp2Result, obj10) };
      BottomSheet = tmp5(tmp3[34]).BottomSheet;
      obj10 = { style: tmp.verifiedCheck, guildId: id, role: tmp21, size: 24 };
      id = undefined;
      tmp2Result = tmp2(channelId[35]);
      if (stateFromStores != null) {
        id = stateFromStores.id;
      }
      if (id == null) {
        id = closure_15;
      }
      items7 = [closure_16(closure_6, obj9), ];
      let name;
      const obj11 = { style: tmp.headerTextContainer, children: items8 };
      const Text = tmp5(tmp3[17]).Text;
      tmp21 = stateFromStores3;
      if (stateFromStores3 != null) {
        name = stateFromStores3.name;
      }
      const obj12 = { variant: "text-lg/semibold", color: "mobile-text-heading-primary", children: name };
      items8 = [closure_16(Text, obj12), ];
      const obj13 = { variant: "text-xs/normal", color: "text-default", children: formatResult };
      items8[1] = closure_16(userId(channelId[17]).Text, obj13);
      items7[1] = closure_17(closure_6, obj11);
      const items9 = [closure_17(closure_6, obj8), ];
      if (null != stateFromStores2) {
        let tmp16Result3;
        if (null != stateFromStores2.flat()) {
          const obj14 = { eligibilityStates: stateFromStores2.flat(), guildId };
          const items10 = [closure_16(PopoutChecks, obj14), , ];
          let tmp16Result = null;
          const tmp25 = closure_18;
          if (!hasItem) {
            const obj15 = { style: tmp.button, children: closure_16(Button, obj16) };
            obj16 = {
              onPress() {
                          const obj = ActionSheetActionCreatorsDefault;
                          obj.hideActionSheet("ConnectionsRoleMessageBadgeActionSheet");
                          const obj2 = GuildRoleConnectionsModalActionCreators;
                          const obj3 = { guildId };
                          const result = obj2.openGuildRoleConnectionsModal(obj3);
                        },
              text: intl4.string(userId(channelId[14]).t.T1t1WV),
              variant: "primary",
              grow: true
            };
            Button = tmp5(tmp3[36]).Button;
            intl4 = tmp5(tmp3[14]).intl;
            tmp16Result = tmp16(tmp18, obj15);
          }
          items10[1] = tmp16Result;
          let tmp16Result2 = null;
          if (someResult) {
            const obj17 = { style: tmp.button, children: closure_16(Button2, obj18) };
            obj18 = {
              onPress() {
                          const obj = { userId, channelId, roleId, sourceAnalyticsLocations: analyticsLocations };
                          showUserProfileActionSheetDefault(obj);
                        },
              text: intl5.string(userId(channelId[14]).t.hgKDnG),
              variant: "secondary",
              grow: true
            };
            Button2 = tmp5(tmp3[36]).Button;
            intl5 = tmp5(tmp3[14]).intl;
            tmp16Result2 = tmp16(tmp18, obj17);
          }
          const obj19 = { children: items10 };
          items10[2] = tmp16Result2;
          tmp16Result3 = tmp17(tmp25, obj19);
        }
        items9[1] = tmp16Result3;
        obj7.children = items9;
        const obj20 = { children: closure_17(closure_6, obj7) };
        obj6.children = closure_16(BottomSheet, obj20);
        return closure_16(AnalyticsLocationProvider, obj6);
      }
      const obj21 = { style: tmp.loadingSpinner, size: "large" };
      tmp16Result3 = tmp16(stateFromStores, obj21);
    }
    if (1 === stateFromStores2.length) {
      const intl2 = tmp5(tmp3[14]).intl;
      formatResult = intl2.format(tmp5(tmp3[14]).t["0eBj3x"], {});
    } else {
      const intl = tmp5(tmp3[14]).intl;
      formatResult = intl.format(tmp5(tmp3[14]).t.D7uftB, {});
    }
  }
  const intl3 = tmp5(tmp3[14]).intl;
  formatResult = intl3.string(tmp5(tmp3[14]).t.jDym4E);
};
export { PopoutChecks };
