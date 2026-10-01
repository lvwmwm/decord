// Module ID: 11104
// Function ID: 11105
// Name: ChannelMembersActionSheet
// Dependencies: [19, 17, 2045, 2108, 2102, 2067, 4469, 1074, 21, 4836, 576, 1613, 504, 1485, 4989, 11105, 9016, 1115, 6571, 6570, 5435, 4800, 8085, 11107, 6798, 8055, 11103, 9492, 1177, 6045, 9032, 4832, 2]
// Exports: default

// Module 11104 (ChannelMembersActionSheet)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 576 */;
import intl7 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import useNavigation from "useNavigation" /* 1485 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1613 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import Text_Text from "Text/Text" /* 4832 */;
import useChannelNameDefault from "useChannelName" /* 4989 */;
import SettingsIcon from "SettingsIcon" /* 6798 */;
import ChannelSettingsActionCreatorsDefault from "ChannelSettingsActionCreators" /* 8085 */;
import ChannelPermissionsUtils from "ChannelPermissionsUtils" /* 9016 */;
import ChannelOverwritesItemDefault from "ChannelOverwritesItem" /* 9032 */;
import GroupPlusIcon from "GroupPlusIcon" /* 9492 */;
import channel_permissions_ChannelPermissionsUtils from "channel_permissions/ChannelPermissionsUtils" /* 11103 */;
import AppChannelPermissionUtils from "AppChannelPermissionUtils" /* 11105 */;
import ChannelDetailsUtils from "ChannelDetailsUtils" /* 11107 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildMemberStore from "GuildMemberStore" /* 2108 */;
import GuildRoleStore from "GuildRoleStore" /* 2102 */;
import GuildStore from "GuildStore" /* 2067 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let BottomSheet, dependencyMap, guildId;

let c10;
let c9;
let closure_12;
let obj2;
let unpackModuleId;
const View = react_native.View;
({ ChannelSettingsSections: c9, Permissions: c10 } = Constants);
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let obj = { container: { paddingHorizontal: 16, flex: 1 }, sectionRowWrapper: obj2, warning: { margin: 16, marginBottom: 0 } };
obj2 = { paddingVertical: nativeDefault.space.PX_12 };
let closure_13 = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/channel_permissions/native/action_sheets/ChannelMembersActionSheet.tsx");

export default function ChannelMembersActionSheet(arg0) {
  let HelpMessage;
  let channelId;
  let guild;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let items6;
  let obj11;
  let obj14;
  let obj16;
  let sectionRowWrapper;
  let showRemove;
  let sortedGuildRoles;
  let tmp13;
  let tmp32Result;
  ({ channelId: require, guildId: importDefault } = arg0);
  let closure_4;
  let c5;
  const tmp = closure_13();
  dependencyMap = tmp;
  const tmp4 = useSafeAreaInsetsDefault();
  let obj = get_initialized;
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(require));
  let obj2 = get_initialized;
  const items1 = [GuildStore, GuildRoleStore];
  const items2 = [stateFromStores];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items1, () => {
    let sortedRoles;
    guildId = undefined;
    const getGuild = GuildStore.getGuild;
    const obj = stateFromStores;
    if (stateFromStores != null) {
      guildId = obj.getGuildId();
    }
    const guild = getGuild(guildId);
    const obj2 = { guild, sortedGuildRoles: sortedRoles };
    sortedRoles = undefined;
    if (null != guild) {
      sortedRoles = GuildRoleStore.getSortedRoles(guild.id);
    }
    return obj2;
  }, items2);
  ({ guild, sortedGuildRoles } = stateFromStoresObject);
  let obj3 = get_initialized;
  const items3 = [c5];
  const items4 = [stateFromStores];
  const stateFromStoresArray = obj3.useStateFromStoresArray(items3, () => {
    guildId = undefined;
    const getMemberIds = GuildMemberStore.getMemberIds;
    const obj = stateFromStores;
    if (stateFromStores != null) {
      guildId = obj.getGuildId();
    }
    return getMemberIds(guildId);
  }, items4);
  const obj4 = useNavigation;
  closure_4 = obj4.useNavigation();
  const tmp9 = useChannelNameDefault(stateFromStores);
  AppChannelPermissionUtils;
  if (null != stateFromStores) {
    if (null != guild) {
      if (null != sortedGuildRoles) {
        let tmp32Result2;
        const canResult = PermissionStore.can(constants2.MANAGE_ROLES, stateFromStores);
        c5 = canResult;
        const tmp5Result = ChannelPermissionsUtils;
        const existingRolesRows = tmp5Result.getExistingRolesRows(guild, sortedGuildRoles, stateFromStores, stateFromStores.accessPermissions);
        const items5 = [];
        const obj5 = { appChannelBotUserId: tmp11 };
        const tmp5Result2 = ChannelPermissionsUtils;
        const obj6 = { title: intl4.string(intl7.t["LPJmL/"]), data: existingRolesRows };
        const existingMembersRows = tmp5Result2.getExistingMembersRows(stateFromStoresArray, stateFromStores, guild, stateFromStores.accessPermissions, obj5);
        const push = items5.push;
        intl4 = tmp5(1115).intl;
        push(obj6);
        const push2 = items5.push;
        const obj7 = { title: intl5.string(intl7.t["9Oq93m"]), data: existingMembersRows };
        intl5 = tmp5(1115).intl;
        push2(obj7);
        BottomSheet = tmp5(6571).BottomSheet;
        const obj8 = { title: intl6.string(intl7.t.ES4CC6), subtitle: "#" + tmp9, trailing: tmp32Result };
        const BottomSheetTitleHeader = tmp5(6570).BottomSheetTitleHeader;
        intl6 = tmp5(1115).intl;
        const _HermesInternal = HermesInternal;
        tmp32Result = canResult;
        if (tmp32Result) {
          const obj9 = {
            onPress() {
                      const obj = ActionSheetActionCreatorsDefault;
                      obj.hideActionSheet();
                      const obj2 = ChannelSettingsActionCreatorsDefault;
                      obj2.init(require);
                      const obj3 = ChannelDetailsUtils;
                      const result = obj3.navigateToChannelDetailsScreen(closure_4, constants.PERMISSIONS, require, "channel-members-action-sheet");
                    },
            accessibilityRole: "button",
            accessibilityLabel: intl.string(intl7.t.XPDhcc),
            children: closure_11(SettingsIcon.SettingsIcon, {})
          };
          const PressableOpacity = tmp5(5435).PressableOpacity;
          intl = tmp5(1115).intl;
          tmp32Result = tmp32(PressableOpacity, obj9);
        }
        const obj10 = { scrollable: true, header: closure_11(BottomSheetTitleHeader, obj8), startExpanded: true, children: tmp13(stateFromStores, obj11) };
        obj11 = { style: tmp.container, children: items6 };
        tmp13 = closure_12;
        if (canResult) {
          const obj12 = {
            label: intl3.string(intl7.t.dMJ3Y6),
            onPress() {
                      const obj = channel_permissions_ChannelPermissionsUtils;
                      return obj.openAddMembersActionSheet(stateFromStores);
                    },
            icon: closure_11(GroupPlusIcon.GroupPlusIcon, {})
          };
          const RowButton = tmp5(8055).RowButton;
          intl3 = tmp5(1115).intl;
          tmp32Result2 = tmp32(RowButton, obj12);
        } else {
          const obj13 = { style: tmp.warning, children: closure_11(HelpMessage, obj14) };
          obj14 = { messageType: native.HelpMessageTypes.INFO, children: intl2.string(intl7.t.VOuiSj) };
          HelpMessage = tmp5(1177).HelpMessage;
          intl2 = tmp5(1115).intl;
          tmp32Result2 = tmp32(tmp14, obj13);
        }
        items6 = [tmp32Result2, ];
        const obj15 = {
          contentContainerStyle: obj16,
          renderItem(index) {
                  let item;
                  let section;
                  index = index.index;
                  ({ item, section } = index);
                  const obj = { start: 0 === index, end: index === section.data.length - 1, guildId: importDefault, item, channelId: require, showType: true, showRemove };
                  return unpackModuleId(ChannelOverwritesItemDefault, obj);
                },
          renderSectionHeader(section) {
                  let data;
                  let intl;
                  let obj2;
                  let title;
                  ({ title, data } = section.section);
                  const obj = { style: sectionRowWrapper.sectionRowWrapper, maxFontSizeMultiplier: 2, accessibilityRole: "header", variant: "text-sm/semibold", color: "interactive-text-default", children: intl.format(intl7.t.u8CWLl, obj2) };
                  const Text = Text_Text.Text;
                  intl = intl7.intl;
                  obj2 = { numberOfItems: data.length, sectionTitle: title };
                  return unpackModuleId(Text, obj);
                },
          sections: items5,
          stickySectionHeadersEnabled: false
        };
        obj16 = { paddingBottom: tmp4.bottom + nativeDefault.space.PX_16 };
        const BottomSheetSectionList = tmp5(6045).BottomSheetSectionList;
        items6[1] = closure_11(BottomSheetSectionList, obj15);
        return closure_11(BottomSheet, obj10);
      }
    }
  }
  return null;
};
