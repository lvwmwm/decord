// Module ID: 11742
// Function ID: 11743
// Name: ChannelMembersActionSheet
// Dependencies: [19, 17, 1957, 2021, 2015, 1979, 4275, 1074, 21, 4636, 576, 1611, 504, 1483, 4789, 11743, 9868, 1114, 7253, 7252, 5204, 4603, 8748, 11745, 7483, 8718, 11741, 10161, 1176, 6728, 9881, 4632, 2]
// Exports: default

// Module 11742 (ChannelMembersActionSheet)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import useNavigation from "useNavigation" /* 1483 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4603 */;
import Text_Text from "Text/Text" /* 4632 */;
import ChannelSettingsActionCreatorsDefault from "ChannelSettingsActionCreators" /* 8748 */;
import ChannelOverwritesItemDefault from "ChannelOverwritesItem" /* 9881 */;
import channel_permissions_ChannelPermissionsUtils from "channel_permissions/ChannelPermissionsUtils" /* 11741 */;
import AppChannelPermissionUtils from "AppChannelPermissionUtils" /* 11743 */;
import ChannelDetailsUtils from "ChannelDetailsUtils" /* 11745 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildMemberStore from "GuildMemberStore" /* 2021 */;
import GuildRoleStore from "GuildRoleStore" /* 2015 */;
import GuildStore from "GuildStore" /* 1979 */;
import PermissionStore from "PermissionStore" /* 4275 */;

require = fn;
const View = fn(17).View;
const Constants = fn(1074);
({ ChannelSettingsSections: closure_9, Permissions: c10 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4636);
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
        const tmp5Result = tmp5(9868);
        const existingRolesRows = tmp5Result.getExistingRolesRows(guild, sortedGuildRoles, stateFromStores, stateFromStores.accessPermissions);
        const tmp5Result2 = tmp5(9868);
        const obj5 = { appChannelBotUserId: tmp11 };
        const items5 = [];
        const obj6 = { title: null, data: null };
        const existingMembersRows = tmp5Result2.getExistingMembersRows(stateFromStoresArray, stateFromStores, guild, stateFromStores.accessPermissions, obj5);
        const intl4 = tmp5(1114).intl;
        obj6.title = intl4.string(tmp5(1114).t["LPJmL/"]);
        obj6.data = existingRolesRows;
        items5.push(obj6);
        const obj7 = { title: null, data: null };
        const intl5 = tmp5(1114).intl;
        obj7.title = intl5.string(tmp5(1114).t["9Oq93m"]);
        obj7.data = existingMembersRows;
        items5.push(obj7);
        const obj8 = { title: null, subtitle: null, trailing: null };
        const intl6 = tmp5(1114).intl;
        obj8.title = intl6.string(tmp5(1114).t.ES4CC6);
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
          let intl = tmp5(1114).intl;
          obj9.accessibilityLabel = intl.string(tmp5(1114).t.XPDhcc);
          obj9.children = tmp32(tmp5(7483).SettingsIcon, {});
          tmp32Result = tmp32(tmp5(5204).PressableOpacity, obj9);
        }
        const obj10 = { scrollable: true, header: null, startExpanded: true, children: null };
        obj8.trailing = tmp32Result;
        obj10.header = closure_11(tmp5(7252).BottomSheetTitleHeader, obj8);
        const obj11 = { style: tmp.container, children: null };
        if (canResult) {
          const obj12 = { label: null, onPress: null, icon: null };
          const intl3 = tmp5(1114).intl;
          obj12.label = intl3.string(tmp5(1114).t.dMJ3Y6);
          obj12.onPress = function onPress() {
            return channel_permissions_ChannelPermissionsUtils.openAddMembersActionSheet(stateFromStores);
          };
          obj12.icon = tmp32(tmp5(10161).GroupPlusIcon, {});
          let tmp32Result2 = tmp32(tmp5(8718).RowButton, obj12);
        } else {
          const obj13 = { style: tmp.warning, children: null };
          const obj14 = { messageType: tmp5(1176).HelpMessageTypes.INFO, children: null };
          const intl2 = tmp5(1114).intl;
          obj14.children = intl2.string(tmp5(1114).t.VOuiSj);
          obj13.children = tmp32(tmp5(1176).HelpMessage, obj14);
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
        items6[1] = closure_11(tmp5(6728).BottomSheetSectionList, obj15);
        obj11.children = items6;
        obj10.children = closure_12(stateFromStores, obj11);
        return closure_11(tmp5(7253).BottomSheet, obj10);
      }
    }
  }
  return null;
};
