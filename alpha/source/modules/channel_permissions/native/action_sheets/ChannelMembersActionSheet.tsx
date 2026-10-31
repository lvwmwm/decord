// Module ID: 11644
// Function ID: 11645
// Name: ChannelMembersActionSheet
// Dependencies: [19, 17, 4863, 4926, 4920, 4885, 4946, 1072, 21, 5014, 575, 1625, 504, 1497, 5652, 11645, 9031, 1113, 5272, 7321, 6980, 5258, 8199, 11646, 7561, 8179, 11643, 10977, 8025, 5275, 9058, 5624, 2]
// Exports: default

// Module 11644 (ChannelMembersActionSheet)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import intl7 from "intl" /* 1113 */;
import useNavigation from "useNavigation" /* 1497 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1625 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import Text_Text from "Text/Text" /* 5624 */;
import useChannelNameDefault from "useChannelName" /* 5652 */;
import SettingsIcon from "SettingsIcon" /* 7561 */;
import ChannelSettingsActionCreatorsDefault from "ChannelSettingsActionCreators" /* 8199 */;
import ChannelPermissionsUtils from "ChannelPermissionsUtils" /* 9031 */;
import ChannelOverwritesItemDefault from "ChannelOverwritesItem" /* 9058 */;
import GroupPlusIcon from "GroupPlusIcon" /* 10977 */;
import channel_permissions_ChannelPermissionsUtils from "channel_permissions/ChannelPermissionsUtils" /* 11643 */;
import AppChannelPermissionUtils from "AppChannelPermissionUtils" /* 11645 */;
import ChannelDetailsUtils from "ChannelDetailsUtils" /* 11646 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4863 */;
import GuildMemberStore from "GuildMemberStore" /* 4926 */;
import GuildRoleStore from "GuildRoleStore" /* 4920 */;
import GuildStore from "GuildStore" /* 4885 */;
import PermissionStore from "PermissionStore" /* 4946 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
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
  let InlineNotice;
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
        intl4 = tmp5(1113).intl;
        push(obj6);
        const push2 = items5.push;
        const obj7 = { title: intl5.string(intl7.t["9Oq93m"]), data: existingMembersRows };
        intl5 = tmp5(1113).intl;
        push2(obj7);
        BottomSheet = tmp5(5272).BottomSheet;
        const obj8 = { title: intl6.string(intl7.t.ES4CC6), subtitle: "#" + tmp9, trailing: tmp32Result };
        const BottomSheetTitleHeader = tmp5(7321).BottomSheetTitleHeader;
        intl6 = tmp5(1113).intl;
        const _HermesInternal = HermesInternal;
        tmp32Result = canResult;
        if (tmp32Result) {
          const obj9 = {
            onPress: function handleSettingPressed() {
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
          const PressableOpacity = tmp5(6980).PressableOpacity;
          intl = tmp5(1113).intl;
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
          const RowButton = tmp5(8179).RowButton;
          intl3 = tmp5(1113).intl;
          tmp32Result2 = tmp32(RowButton, obj12);
        } else {
          const obj13 = { style: tmp.warning, children: closure_11(InlineNotice, obj14) };
          obj14 = { type: "info", message: intl2.string(intl7.t.VOuiSj), role: "none" };
          InlineNotice = tmp5(8025).InlineNotice;
          intl2 = tmp5(1113).intl;
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
        const BottomSheetSectionList = tmp5(5275).BottomSheetSectionList;
        items6[1] = closure_11(BottomSheetSectionList, obj15);
        return closure_11(BottomSheet, obj10);
      }
    }
  }
  return null;
};
