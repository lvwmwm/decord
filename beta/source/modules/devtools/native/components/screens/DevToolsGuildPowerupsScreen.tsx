// Module ID: 15303
// Function ID: 15304
// Name: DevToolsGuildPowerupsScreen
// Dependencies: [5, 19, 17, 1220, 12058, 2067, 4655, 15304, 1074, 21, 4836, 576, 1271, 4421, 4732, 11984, 15172, 6621, 11990, 2026, 2029, 1613, 504, 4832, 5999, 5917, 2]
// Exports: default

// Module 15303 (DevToolsGuildPowerupsScreen)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import HTTPUtils from "HTTPUtils" /* 1271 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1613 */;
import UserSettingsProtoActionCreators from "UserSettingsProtoActionCreators" /* 2026 */;
import dismissible_content from "dismissible_content" /* 2029 */;
import _modDef4421 from "module_4421" /* 4421 */;
import TableSwitchRow2 from "TableSwitchRow" /* 6621 */;
import GuildDismissibleContentUtils from "GuildDismissibleContentUtils" /* 11990 */;
import toggleDismissibleContentDismissStateDefault from "toggleDismissibleContentDismissState" /* 15172 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1220 */;
import AppliedGuildBoostStore from "AppliedGuildBoostStore" /* 12058 */;
import GuildStore from "GuildStore" /* 2067 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4655 */;
import DevToolsGuildPowerupsConstants from "DevToolsGuildPowerupsConstants" /* 15304 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c1, c2, c5, c6, dependencyMap, importDefault;

let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_18;
let closure_19;
let hasOwnProperty;
let map1;
let metroRequire;
let obj2;
let obj3;
let obj4;
let unpackModuleId;
function setWarningBoosts() {
  return obj(...arguments);
}
let obj = function _setWarningBoosts() {
  obj = _asyncToGenerator(async (arg0, value, arg2) => {
    let addResult;
    let obj6;
    let closure_0 = arg0;
    let closure_1 = value;
    let closure_2 = arg2;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            let closure_4 = tmp2;
            let closure_3 = tmp;
            const HTTP = HTTPUtils.HTTP;
            const request = { url: constants.APPLIED_BOOST_MODIFY_END_DATE, body: obj6, rejectWithError: true };
            obj6 = { applied_boost_ids: closure_1.map((id) => id.id), ends_at: addResult };
            const patch = HTTP.patch;
            addResult = null;
            if (!closure_2) {
              const obj4 = _modDef4421();
              addResult = obj4.add(1, "day");
            }
            c5 = 1;
            c6 = 1;
            const obj7 = { value: patch(request), done: false };
            return obj7;
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          obj = closure_132_0(closure_132_2[14]);
          const appliedGuildBoostsForGuild = obj.fetchAppliedGuildBoostsForGuild(closure_0);
          const obj2 = closure_132_0(closure_132_2[15]);
          const guildBoostEntitlements = obj2.fetchGuildBoostEntitlements(closure_0, true);
          c6 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp19) {
        c6 = 3;
        throw tmp19;
      }
    }
  });
  return obj(...arguments);
};
obj = function _sendPowerupsSystemMessage() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let closure_0 = arg0;
    if (c1 === 2) {
      c1 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c1 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c1 = 3;
            throw value;
          } else if (arg0 === 2) {
            c1 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            const HTTP = HTTPUtils.HTTP;
            const obj4 = { url: Endpoints.SEND_POWERUPS_SYSTEM_MESSAGE(closure_0), rejectWithError: true };
            const post = HTTP.post;
            c2 = 1;
            c1 = 1;
            const obj5 = { value: post(obj4), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          c1 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp8) {
        c1 = 3;
        throw tmp8;
      }
    }
  });
  return obj(...arguments);
};
function UserDCSwitchRow(dc) {
  let handleToggleDismissState;
  let isDismissed;
  dc = dc.dc;
  ({ isDismissed, handleToggleDismissState } = toggleDismissibleContentDismissStateDefault(dc));
  obj = { label: authStore3(dc), value: isDismissed, onValueChange: handleToggleDismissState };
  toggleDismissibleContentDismissStateDefault(dc);
  const TableSwitchRow = TableSwitchRow2.TableSwitchRow;
  return authStore4(TableSwitchRow, obj);
}
function GuildDCSwitchRow(dc) {
  dc = dc.dc;
  const guildId = dc.guildId;
  const items = [dc, guildId];
  const isDismissed = dc.isDismissed;
  const callback = react.useCallback((arg0) => {
    const tmp3 = arg0;
    if (tmp3) {
      const tmpResult = GuildDismissibleContentUtils;
      const result = tmpResult.markContentAsDismissed(dc, guildId, false);
    } else {
      const tmpResult2 = UserSettingsProtoActionCreators;
      const result1 = tmpResult2.removeDismissedRecurringContent(dismissible_content.DismissibleContent.GUILD_POWERUP_NOTIFICATION);
      const obj2 = GuildDismissibleContentUtils;
      const result2 = obj2.unmarkContentAsDismissed(dc, guildId);
    }
  }, items);
  obj = { label: closure_15(dc), value: isDismissed, onValueChange: callback };
  const TableSwitchRow = dc(6621).TableSwitchRow;
  return closure_18(TableSwitchRow, obj);
}
({ ScrollView: hasOwnProperty, View: metroRequire } = react_native);
({ GUILD_DCS: unpackModuleId, SERVER_TAG_GUILD_DCS: closure_12, USER_DCS: map1, VANITY_URL_POWERUP_EDUCATIONAL_DCS: closure_14, getGuildDCString: closure_15, getUserDCString: closure_16 } = DevToolsGuildPowerupsConstants);
const Endpoints = Constants.Endpoints;
({ jsx: closure_18, jsxs: closure_19 } = Fragment);
let createStyles = createStyles_mod;
obj = { container: obj2, scrollContainer: obj3, noGuildContainer: obj4 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
createStyles = createStyles.createStyles;
obj3 = { padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
obj4 = { flex: 1, justifyContent: "center", alignItems: "center", padding: nativeDefault.space.PX_32 };
let closure_20 = createStyles(obj);
let result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsGuildPowerupsScreen.tsx");

export default function DevToolsGuildPowerupsScreen() {
  let closure_1;
  let closure_2;
  let guildId;
  let items4;
  let items5;
  let items6;
  let items7;
  let obj18;
  let obj9;
  let stateFromStores;
  let tmp16Result;
  const tmp = closure_20();
  let tmp2 = importDefault;
  const tmp4 = useSafeAreaInsetsDefault();
  obj = stateFromStores(504);
  let items = [SelectedGuildStore];
  stateFromStores = obj.useStateFromStores(items, () => guildId.getGuildId());
  const items1 = [GuildStore];
  const obj2 = stateFromStores(504);
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    let tmp2 = null;
    if (null != stateFromStores) {
      const guild = GuildStore.getGuild(tmp);
      let name;
      if (guild != null) {
        name = guild.name;
      }
      tmp2 = name;
    }
    return tmp2;
  });
  const items2 = [UserSettingsProtoStore];
  const obj3 = stateFromStores(504);
  importDefault = obj3.useStateFromStoresArray(items2, () => {
    const items = [...closure_2_12];
    return items.filter((item) => {
      let isContentDismissedResult = null != closure_1_0;
      if (isContentDismissedResult) {
        obj = stateFromStores(closure_2[18]);
        isContentDismissedResult = obj.isContentDismissed(item, tmp);
      }
      return isContentDismissedResult;
    });
  });
  const items3 = [AppliedGuildBoostStore];
  const obj4 = stateFromStores(504);
  dependencyMap = obj4.useStateFromStoresArray(items3, () => {
    let items;
    if (null != stateFromStores) {
      let appliedGuildBoostsForGuild = AppliedGuildBoostStore.getAppliedGuildBoostsForGuild(tmp);
      if (appliedGuildBoostsForGuild == null) {
        appliedGuildBoostsForGuild = [];
      }
      items = appliedGuildBoostsForGuild;
    } else {
      items = [];
    }
    return items;
  });
  if (null == stateFromStores) {
    const obj5 = { style: items4, children: closure_18(stateFromStores(4832).Text, { variant: "heading-md/semibold", color: "text-muted", children: "No guild selected" }) };
    items4 = [, ];
    ({ container: arr7[0], noGuildContainer: arr7[1] } = tmp);
    tmp16Result = closure_18(closure_6, obj5);
  } else {
    const obj6 = { style: tmp.container, contentContainerStyle: items5, children: items6 };
    items5 = [tmp.scrollContainer, ];
    items5[1] = { paddingBottom: tmp4.bottom + nativeDefault.space.PX_16 };
    let str = stateFromStores1;
    const obj7 = { paddingBottom: tmp4.bottom + nativeDefault.space.PX_16 };
    const TableRowGroup7 = tmp5(5999).TableRowGroup;
    const tmp17 = closure_5;
    if (stateFromStores1 == null) {
      str = "Unknown";
    }
    const _HermesInternal = HermesInternal;
    const obj8 = { title: "Current Guild: " + str, hasIcons: false, children: closure_18(stateFromStores(5917).TableRow, obj9) };
    obj9 = {
      label: "Reset Notification Indicators",
      onPress() {
          obj = stateFromStores(closure_2[15]);
          return obj.guildPowerupsResetNotifications();
        }
    };
    items6 = [closure_18(TableRowGroup7, obj8), , , , , , ];
    const obj10 = { title: "Warning State", hasIcons: false, children: items7 };
    const TableRowGroup = tmp5(5999).TableRowGroup;
    const obj11 = {
      label: "Set Half Boosts expiring in 1 day",
      onPress() {
          return setWarningBoosts(stateFromStores, closure_2.slice(Math.floor(closure_2.length / 2)), false);
        }
    };
    items7 = [closure_18(tmp5(5917).TableRow, obj11), ];
    const obj12 = {
      label: "Reset End Date",
      onPress() {
          return setWarningBoosts(stateFromStores, closure_2, true);
        }
    };
    items7[1] = closure_18(stateFromStores(5917).TableRow, obj12);
    items6[1] = closure_19(TableRowGroup, obj10);
    const obj13 = {
      title: "User Level DCs",
      hasIcons: false,
      children: closure_13.map((dc) => {
          obj = { dc };
          return closure_1_18(UserDCSwitchRow, obj, dc);
        })
    };
    const TableRowGroup2 = tmp5(5999).TableRowGroup;
    items6[2] = closure_18(TableRowGroup2, obj13);
    const obj14 = {
      title: "Guild Level DCs",
      hasIcons: false,
      children: closure_11.map((dc) => {
          obj = { dc, guildId: stateFromStores, isDismissed: closure_1.includes(dc) };
          return authStore4(GuildDCSwitchRow, obj, dc);
        })
    };
    const TableRowGroup3 = tmp5(5999).TableRowGroup;
    items6[3] = closure_18(TableRowGroup3, obj14);
    const obj15 = {
      title: "Server Tag Guild Level DCs",
      hasIcons: false,
      children: closure_12.map((dc) => {
          obj = { dc, guildId: stateFromStores, isDismissed: closure_1.includes(dc) };
          return authStore4(GuildDCSwitchRow, obj, dc);
        })
    };
    const TableRowGroup4 = tmp5(5999).TableRowGroup;
    items6[4] = closure_18(TableRowGroup4, obj15);
    const obj16 = {
      title: "Vanity URL Powerup DCs",
      hasIcons: false,
      children: closure_14.map((dc) => {
          obj = { dc };
          return closure_1_18(UserDCSwitchRow, obj, dc);
        })
    };
    const TableRowGroup5 = tmp5(5999).TableRowGroup;
    items6[5] = closure_18(TableRowGroup5, obj16);
    const obj17 = { title: "System Messages", hasIcons: false, children: closure_18(stateFromStores(5917).TableRow, obj18) };
    const TableRowGroup6 = tmp5(5999).TableRowGroup;
    obj18 = {
      label: "Send Powerups System Message",
      onPress() {
          function sendPowerupsSystemMessage() {
            return closure_1_23(...arguments);
          }
          return sendPowerupsSystemMessage(stateFromStores);
        }
    };
    items6[6] = closure_18(TableRowGroup6, obj17);
    tmp16Result = tmp16(tmp17, obj6);
  }
  return tmp16Result;
};
