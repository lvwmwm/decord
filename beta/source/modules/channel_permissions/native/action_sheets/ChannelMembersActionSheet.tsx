// Module ID: 11729
// Function ID: 11730
// Name: ChannelMembersActionSheet
// Dependencies: [19, 17, 2045, 2109, 2103, 2067, 4399, 1078, 21, 4758, 580, 558, 568, 1616, 504, 1488, 4911, 11730, 9801, 4725, 10630, 11732, 4754, 1119, 9817, 5341, 7624, 7396, 8878, 11728, 10286, 1181, 6863, 7397, 2]

// Module 11729 (ChannelMembersActionSheet)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 580 */;
import util from "util" /* 1119 */;
import useNavigation from "useNavigation" /* 1488 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1616 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4725 */;
import Text_Text from "Text/Text" /* 4754 */;
import ChannelOverwritesItemDefault from "ChannelOverwritesItem" /* 9817 */;
import ChannelSettingsActionCreatorsDefault from "ChannelSettingsActionCreators" /* 10630 */;
import channel_permissions_ChannelPermissionsUtils from "channel_permissions/ChannelPermissionsUtils" /* 11728 */;
import AppChannelPermissionUtils from "AppChannelPermissionUtils" /* 11730 */;
import ChannelDetailsUtils from "ChannelDetailsUtils" /* 11732 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildMemberStore from "GuildMemberStore" /* 2109 */;
import GuildRoleStore from "GuildRoleStore" /* 2103 */;
import GuildStore from "GuildStore" /* 2067 */;
import PermissionStore from "PermissionStore" /* 4399 */;

require = fn;
const View = fn(17).View;
const Constants = fn(1078);
({ ChannelSettingsSections: closure_9, Permissions: c10 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4758);
let obj2 = { container: { paddingHorizontal: 16, flex: 1 }, sectionRowWrapper: { paddingVertical: nativeDefault.space.PX_12 }, warning: { margin: 16, marginBottom: 0 } };
let closure_13 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { paddingVertical: nativeDefault.space.PX_12 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/channel_permissions/native/action_sheets/ChannelMembersActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  const cResult = channelId(568).c(65);
  channelId = channelId.channelId;
  let guildId = channelId.guildId;
  let obj = channelId(568);
  dependencyMap = closure_13();
  guildId(1616)();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [navigation];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    class I {
      constructor() {
        return closure_4.getChannel(channelId);
      }
    }
    cResult[1] = channelId;
    cResult[2] = I;
    const tmp9 = I;
  } else {
    class I {
      constructor() {
        return closure_4.getChannel(channelId);
      }
    }
  }
  const tmp4 = closure_13();
  const tmp5 = guildId;
  const stateFromStores = channelId(504).useStateFromStores(first, tmp9);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class I {
      constructor() {
        return closure_4.getChannel(channelId);
      }
    }
    const items1 = [GuildStore, GuildRoleStore];
    cResult[3] = items1;
    const tmp11 = items1;
  } else {
    class I {
      constructor() {
        return closure_4.getChannel(channelId);
      }
    }
  }
  if (cResult[4] !== stateFromStores) {
    class M {
      constructor() {
        obj = closure_3;
        guildId = undefined;
        tmp = closure_7;
        if (closure_3 != null) {
          guildId = obj.getGuildId();
        }
        guild = closure_7.getGuild(guildId);
        obj1 = { guild, sortedGuildRoles: null };
        sortedRoles = undefined;
        if (null != guild) {
          tmp5 = closure_6;
          sortedRoles = closure_6.getSortedRoles(guild.id);
        }
        obj1.sortedGuildRoles = sortedRoles;
        return obj1;
      }
    }
    const items2 = [stateFromStores];
    cResult[4] = stateFromStores;
    cResult[5] = M;
    cResult[6] = items2;
    let tmp14 = items2;
    const tmp13 = M;
  } else {
    class M {
      constructor() {
        obj = closure_3;
        guildId = undefined;
        tmp = closure_7;
        if (closure_3 != null) {
          guildId = obj.getGuildId();
        }
        guild = closure_7.getGuild(guildId);
        obj1 = { guild, sortedGuildRoles: null };
        sortedRoles = undefined;
        if (null != guild) {
          tmp5 = closure_6;
          sortedRoles = closure_6.getSortedRoles(guild.id);
        }
        obj1.sortedGuildRoles = sortedRoles;
        return obj1;
      }
    }
    tmp14 = cResult[6];
  }
  const tmpResult = channelId(504);
  const stateFromStoresObject = channelId(504).useStateFromStoresObject(tmp11, tmp13, tmp14);
  ({ guild, sortedGuildRoles } = stateFromStoresObject);
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    class M {
      constructor() {
        obj = closure_3;
        guildId = undefined;
        tmp = closure_7;
        if (closure_3 != null) {
          guildId = obj.getGuildId();
        }
        guild = closure_7.getGuild(guildId);
        obj1 = { guild, sortedGuildRoles: null };
        sortedRoles = undefined;
        if (null != guild) {
          tmp5 = closure_6;
          sortedRoles = closure_6.getSortedRoles(guild.id);
        }
        obj1.sortedGuildRoles = sortedRoles;
        return obj1;
      }
    }
    const items3 = [GuildMemberStore];
    cResult[7] = items3;
    const tmp16 = items3;
  } else {
    class M {
      constructor() {
        obj = closure_3;
        guildId = undefined;
        tmp = closure_7;
        if (closure_3 != null) {
          guildId = obj.getGuildId();
        }
        guild = closure_7.getGuild(guildId);
        obj1 = { guild, sortedGuildRoles: null };
        sortedRoles = undefined;
        if (null != guild) {
          tmp5 = closure_6;
          sortedRoles = closure_6.getSortedRoles(guild.id);
        }
        obj1.sortedGuildRoles = sortedRoles;
        return obj1;
      }
    }
  }
  if (cResult[8] !== stateFromStores) {
    class A {
      constructor() {
        obj = closure_3;
        guildId = undefined;
        tmp = closure_5;
        if (closure_3 != null) {
          guildId = obj.getGuildId();
        }
        return closure_5.getMemberIds(guildId);
      }
    }
    const items4 = [stateFromStores];
    cResult[8] = stateFromStores;
    cResult[9] = A;
    cResult[10] = items4;
    let tmp18 = items4;
    const tmp17 = A;
  } else {
    class A {
      constructor() {
        obj = closure_3;
        guildId = undefined;
        tmp = closure_5;
        if (closure_3 != null) {
          guildId = obj.getGuildId();
        }
        return closure_5.getMemberIds(guildId);
      }
    }
    tmp18 = cResult[10];
  }
  const tmpResult5 = channelId(504);
  const stateFromStoresArray = channelId(504).useStateFromStoresArray(tmp16, tmp17, tmp18);
  const tmpResult6 = channelId(504);
  navigation = channelId(1488).useNavigation();
  tmp5(4911)(stateFromStores);
  const tmpResult7 = channelId(1488);
  const appChannelBotUserId = channelId(11730).useAppChannelBotUserId(stateFromStores);
  if (null != stateFromStores) {
    class A {
      constructor() {
        obj = closure_3;
        guildId = undefined;
        tmp = closure_5;
        if (closure_3 != null) {
          guildId = obj.getGuildId();
        }
        return closure_5.getMemberIds(guildId);
      }
    }
  }
  return null;
}) : ((arg0) => {
  ({ channelId: require, guildId: importDefault } = arg0);
  closure_4 = undefined;
  c5 = undefined;
  const tmp = closure_13();
  dependencyMap = tmp;
  const tmp4 = useSafeAreaInsetsDefault();
  const items = [closure_4];
  const stateFromStores = initialize.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  const items1 = [GuildStore, GuildRoleStore];
  const items2 = [stateFromStores];
  const stateFromStoresObject = initialize.useStateFromStoresObject(items1, () => {
    guildId = undefined;
    if (stateFromStores != null) {
      guildId = stateFromStores.getGuildId();
    }
    guild = GuildStore.getGuild(guildId);
    const obj2 = { guild, sortedGuildRoles: null };
    let sortedRoles;
    if (null != guild) {
      sortedRoles = GuildRoleStore.getSortedRoles(guild.id);
    }
    obj2.sortedGuildRoles = sortedRoles;
    return obj2;
  }, items2);
  ({ guild, sortedGuildRoles } = stateFromStoresObject);
  const items3 = [c5];
  const items4 = [stateFromStores];
  const stateFromStoresArray = initialize.useStateFromStoresArray(items3, () => {
    guildId = undefined;
    if (stateFromStores != null) {
      guildId = stateFromStores.getGuildId();
    }
    return GuildMemberStore.getMemberIds(guildId);
  }, items4);
  closure_4 = useNavigation.useNavigation();
  AppChannelPermissionUtils;
  if (null != stateFromStores) {
    if (null != guild) {
      if (null != sortedGuildRoles) {
        const canResult = PermissionStore.can(constants2.MANAGE_ROLES, stateFromStores);
        c5 = canResult;
        const tmp5Result = tmp5(9801);
        const existingRolesRows = tmp5Result.getExistingRolesRows(guild, sortedGuildRoles, stateFromStores, stateFromStores.accessPermissions);
        const tmp5Result2 = tmp5(9801);
        const obj5 = { appChannelBotUserId: tmp11 };
        const items5 = [];
        const obj6 = { title: null, data: null };
        const existingMembersRows = tmp5Result2.getExistingMembersRows(stateFromStoresArray, stateFromStores, guild, stateFromStores.accessPermissions, obj5);
        const intl4 = tmp5(1119).intl;
        obj6.title = intl4.string(tmp5(1119).t["LPJmL/"]);
        obj6.data = existingRolesRows;
        items5.push(obj6);
        const obj7 = { title: null, data: null };
        const intl5 = tmp5(1119).intl;
        obj7.title = intl5.string(tmp5(1119).t["9Oq93m"]);
        obj7.data = existingMembersRows;
        items5.push(obj7);
        const obj8 = { title: null, subtitle: null, trailing: null };
        const intl6 = tmp5(1119).intl;
        obj8.title = intl6.string(tmp5(1119).t.ES4CC6);
        const _HermesInternal = HermesInternal;
        obj8.subtitle = "#" + tmp9;
        let tmp32Result = canResult;
        if (canResult) {
          const obj9 = {
            onPress() {
                      ActionSheetActionCreatorsDefault.hideActionSheet();
                      ChannelSettingsActionCreatorsDefault.init(channelId);
                      const result = ChannelDetailsUtils.navigateToChannelDetailsScreen(closure_4, constants.PERMISSIONS, channelId, "channel-members-action-sheet");
                    },
            accessibilityRole: "button",
            accessibilityLabel: null,
            children: null
          };
          let intl = tmp5(1119).intl;
          obj9.accessibilityLabel = intl.string(tmp5(1119).t.XPDhcc);
          obj9.children = tmp32(tmp5(7624).SettingsIcon, {});
          tmp32Result = tmp32(tmp5(5341).PressableOpacity, obj9);
        }
        const obj10 = { scrollable: true, header: null, startExpanded: true, children: null };
        obj8.trailing = tmp32Result;
        obj10.header = closure_11(tmp5(7396).BottomSheetTitleHeader, obj8);
        const obj11 = { style: tmp.container, children: null };
        if (canResult) {
          const obj12 = { label: null, onPress: null, icon: null };
          const intl3 = tmp5(1119).intl;
          obj12.label = intl3.string(tmp5(1119).t.dMJ3Y6);
          obj12.onPress = function onPress() {
            return channel_permissions_ChannelPermissionsUtils.openAddMembersActionSheet(stateFromStores);
          };
          obj12.icon = tmp32(tmp5(10286).GroupPlusIcon, {});
          let tmp32Result2 = tmp32(tmp5(8878).RowButton, obj12);
        } else {
          const obj13 = { style: tmp.warning, children: null };
          const obj14 = { messageType: tmp5(1181).HelpMessageTypes.INFO, children: null };
          const intl2 = tmp5(1119).intl;
          obj14.children = intl2.string(tmp5(1119).t.VOuiSj);
          obj13.children = tmp32(tmp5(1181).HelpMessage, obj14);
          tmp32Result2 = tmp32(tmp14, obj13);
        }
        const items6 = [tmp32Result2, ];
        const obj15 = { contentContainerStyle: null, renderItem: null, renderSectionHeader: null, sections: null, stickySectionHeadersEnabled: false };
        const obj16 = { paddingBottom: tmp4.bottom + nativeDefault.space.PX_16 };
        obj15.contentContainerStyle = obj16;
        obj15.renderItem = function renderItem(index) {
          index = index.index;
          ({ item, section } = index);
          return closure_2_11(ChannelOverwritesItemDefault, { start: 0 === index, end: index === section.data.length - 1, guildId, item, channelId, showType: true, showRemove });
        };
        obj15.renderSectionHeader = function renderSectionHeader(section) {
          ({ title, data } = section.section);
          const obj = { style: sectionRowWrapper.sectionRowWrapper, maxFontSizeMultiplier: 2, accessibilityRole: "header", variant: "text-sm/semibold", color: "interactive-text-default", children: null };
          const intl = util.intl;
          obj.children = intl.format(util.t.u8CWLl, { numberOfItems: data.length, sectionTitle: title });
          return closure_2_11(Text_Text.Text, obj);
        };
        obj15.sections = items5;
        items6[1] = closure_11(tmp5(6863).BottomSheetSectionList, obj15);
        obj11.children = items6;
        obj10.children = closure_12(stateFromStores, obj11);
        return closure_11(tmp5(7397).BottomSheet, obj10);
      }
    }
  }
  return null;
});
