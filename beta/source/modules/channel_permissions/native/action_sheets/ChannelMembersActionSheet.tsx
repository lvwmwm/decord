// Module ID: 11104
// Function ID: 11105
// Name: ChannelMembersActionSheet
// Dependencies: [19, 17, 2045, 2108, 2102, 2067, 4469, 1074, 21, 4836, 576, 1613, 504, 1485, 4989, 11105, 9016, 1115, 6571, 6570, 5435, 4800, 8085, 11107, 6798, 8055, 11103, 9492, 1177, 6045, 9032, 4832, 2]
// Exports: default

// Module 11104 (ChannelMembersActionSheet)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import useNavigation from "useNavigation" /* 1485 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1613 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import Text_Text from "Text/Text" /* 4832 */;
import ChannelSettingsActionCreatorsDefault from "ChannelSettingsActionCreators" /* 8085 */;
import ChannelOverwritesItemDefault from "ChannelOverwritesItem" /* 9032 */;
import channel_permissions_ChannelPermissionsUtils from "channel_permissions/ChannelPermissionsUtils" /* 11103 */;
import AppChannelPermissionUtils from "AppChannelPermissionUtils" /* 11105 */;
import ChannelDetailsUtils from "ChannelDetailsUtils" /* 11107 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildMemberStore from "GuildMemberStore" /* 2108 */;
import GuildRoleStore from "GuildRoleStore" /* 2102 */;
import GuildStore from "GuildStore" /* 2067 */;
import PermissionStore from "PermissionStore" /* 4469 */;

require = fn;
const View = fn(17).View;
const Constants = fn(1074);
({ ChannelSettingsSections: closure_9, Permissions: c10 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4836);
let obj2 = { container: { paddingHorizontal: 16, flex: 1 }, sectionRowWrapper: { paddingVertical: nativeDefault.space.PX_12 }, warning: { margin: 16, marginBottom: 0 } };
let closure_13 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/channel_permissions/native/action_sheets/ChannelMembersActionSheet.tsx");

export default function ChannelMembersActionSheet(arg0) {
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
    const guild = GuildStore.getGuild(guildId);
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
        const tmp5Result = tmp5(9016);
        const existingRolesRows = tmp5Result.getExistingRolesRows(guild, sortedGuildRoles, stateFromStores, stateFromStores.accessPermissions);
        const tmp5Result2 = tmp5(9016);
        const obj5 = { appChannelBotUserId: tmp11 };
        const items5 = [];
        const obj6 = { title: null, data: null };
        const existingMembersRows = tmp5Result2.getExistingMembersRows(stateFromStoresArray, stateFromStores, guild, stateFromStores.accessPermissions, obj5);
        const intl4 = tmp5(1115).intl;
        obj6.title = intl4.string(tmp5(1115).t["LPJmL/"]);
        obj6.data = existingRolesRows;
        items5.push(obj6);
        const obj7 = { title: null, data: null };
        const intl5 = tmp5(1115).intl;
        obj7.title = intl5.string(tmp5(1115).t["9Oq93m"]);
        obj7.data = existingMembersRows;
        items5.push(obj7);
        const obj8 = { title: null, subtitle: null, trailing: null };
        const intl6 = tmp5(1115).intl;
        obj8.title = intl6.string(tmp5(1115).t.ES4CC6);
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
          let intl = tmp5(1115).intl;
          obj9.accessibilityLabel = intl.string(tmp5(1115).t.XPDhcc);
          obj9.children = tmp32(tmp5(6798).SettingsIcon, {});
          tmp32Result = tmp32(tmp5(5435).PressableOpacity, obj9);
        }
        const obj10 = { scrollable: true, header: null, startExpanded: true, children: null };
        obj8.trailing = tmp32Result;
        obj10.header = closure_11(tmp5(6570).BottomSheetTitleHeader, obj8);
        const obj11 = { style: tmp.container, children: null };
        if (canResult) {
          const obj12 = { label: null, onPress: null, icon: null };
          const intl3 = tmp5(1115).intl;
          obj12.label = intl3.string(tmp5(1115).t.dMJ3Y6);
          obj12.onPress = function onPress() {
            return channel_permissions_ChannelPermissionsUtils.openAddMembersActionSheet(stateFromStores);
          };
          obj12.icon = tmp32(tmp5(9492).GroupPlusIcon, {});
          let tmp32Result2 = tmp32(tmp5(8055).RowButton, obj12);
        } else {
          const obj13 = { style: tmp.warning, children: null };
          const obj14 = { messageType: tmp5(1177).HelpMessageTypes.INFO, children: null };
          const intl2 = tmp5(1115).intl;
          obj14.children = intl2.string(tmp5(1115).t.VOuiSj);
          obj13.children = tmp32(tmp5(1177).HelpMessage, obj14);
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
        items6[1] = closure_11(tmp5(6045).BottomSheetSectionList, obj15);
        obj11.children = items6;
        obj10.children = closure_12(stateFromStores, obj11);
        return closure_11(tmp5(6571).BottomSheet, obj10);
      }
    }
  }
  return null;
};
