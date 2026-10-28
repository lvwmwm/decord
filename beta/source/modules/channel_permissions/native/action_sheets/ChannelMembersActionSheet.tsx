// Module ID: 11342
// Function ID: 11343
// Name: ChannelMembersActionSheet
// Dependencies: [19, 17, 4855, 4915, 4909, 4877, 4935, 1087, 21, 5003, 587, 558, 576, 1633, 504, 1505, 5636, 11343, 9004, 5242, 10125, 11344, 5266, 1128, 9021, 6940, 7520, 7280, 8985, 11341, 10891, 7985, 5301, 5297, 2]

// Module 11342 (ChannelMembersActionSheet)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 587 */;
import intl7 from "intl" /* 1128 */;
import useNavigation from "useNavigation" /* 1505 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1633 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5242 */;
import Text_Text from "Text/Text" /* 5266 */;
import useChannelNameDefault from "useChannelName" /* 5636 */;
import SettingsIcon from "SettingsIcon" /* 7520 */;
import ChannelPermissionsUtils from "ChannelPermissionsUtils" /* 9004 */;
import ChannelOverwritesItemDefault from "ChannelOverwritesItem" /* 9021 */;
import ChannelSettingsActionCreatorsDefault from "ChannelSettingsActionCreators" /* 10125 */;
import GroupPlusIcon from "GroupPlusIcon" /* 10891 */;
import channel_permissions_ChannelPermissionsUtils from "channel_permissions/ChannelPermissionsUtils" /* 11341 */;
import AppChannelPermissionUtils from "AppChannelPermissionUtils" /* 11343 */;
import ChannelDetailsUtils from "ChannelDetailsUtils" /* 11344 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4855 */;
import GuildMemberStore from "GuildMemberStore" /* 4915 */;
import GuildRoleStore from "GuildRoleStore" /* 4909 */;
import GuildStore from "GuildStore" /* 4877 */;
import PermissionStore from "PermissionStore" /* 4935 */;
import Constants from "Constants" /* 1087 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5003 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let BottomSheet, dependencyMap, navigation;

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
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChannelMembersActionSheet(channelId) {
  let first;
  let guild;
  let sectionRowWrapper;
  let showRemove;
  let sortedGuildRoles;
  let tmp11;
  let tmp14;
  let tmp15;
  let tmp17;
  let tmp19;
  let tmp20;
  let tmp9;
  let obj = channelId(576);
  const cResult = obj.c(65);
  channelId = channelId.channelId;
  let guildId = channelId.guildId;
  dependencyMap = closure_13();
  closure_13();
  guildId(1633)();
  const tmp5 = guildId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [navigation];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function y() {
      return ChannelStore.getChannel(channelId);
    };
    cResult[1] = channelId;
    cResult[2] = fn;
    tmp9 = fn;
  } else {
    tmp9 = cResult[2];
  }
  const tmpResult = channelId(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp9);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GuildStore, GuildRoleStore];
    cResult[3] = items1;
    tmp11 = items1;
  } else {
    tmp11 = cResult[3];
  }
  if (cResult[4] !== stateFromStores) {
    const fn2 = function x() {
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
    };
    const items2 = [stateFromStores];
    cResult[4] = stateFromStores;
    cResult[5] = fn2;
    cResult[6] = items2;
    tmp15 = items2;
    tmp14 = fn2;
  } else {
    tmp14 = cResult[5];
    tmp15 = cResult[6];
  }
  const tmpResult5 = channelId(504);
  const stateFromStoresObject = tmpResult5.useStateFromStoresObject(tmp11, tmp14, tmp15);
  ({ guild, sortedGuildRoles } = stateFromStoresObject);
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const items3 = [GuildMemberStore];
    cResult[7] = items3;
    tmp17 = items3;
  } else {
    tmp17 = cResult[7];
  }
  if (cResult[8] !== stateFromStores) {
    class B {
      constructor() {
        guildId = undefined;
        const getMemberIds = GuildMemberStore.getMemberIds;
        const obj = stateFromStores;
        if (stateFromStores != null) {
          guildId = obj.getGuildId();
        }
        return getMemberIds(guildId);
      }
    }
    const items4 = [stateFromStores];
    cResult[8] = stateFromStores;
    cResult[9] = B;
    cResult[10] = items4;
    tmp20 = items4;
    tmp19 = B;
  } else {
    class B {
      constructor() {
        guildId = undefined;
        const getMemberIds = GuildMemberStore.getMemberIds;
        const obj = stateFromStores;
        if (stateFromStores != null) {
          guildId = obj.getGuildId();
        }
        return getMemberIds(guildId);
      }
    }
    tmp20 = cResult[10];
  }
  const tmpResult6 = channelId(504);
  const stateFromStoresArray = tmpResult6.useStateFromStoresArray(tmp17, tmp19, tmp20);
  const tmpResult7 = channelId(1505);
  navigation = tmpResult7.useNavigation();
  tmp5(5636)(stateFromStores);
  const tmpResult8 = channelId(11343);
  const appChannelBotUserId = tmpResult8.useAppChannelBotUserId(stateFromStores);
  if (null != stateFromStores) {
    class B {
      constructor() {
        guildId = undefined;
        const getMemberIds = GuildMemberStore.getMemberIds;
        const obj = stateFromStores;
        if (stateFromStores != null) {
          guildId = obj.getGuildId();
        }
        return getMemberIds(guildId);
      }
    }
  }
  return null;
}) : (function ChannelMembersActionSheet(arg0) {
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
        intl4 = tmp5(1128).intl;
        push(obj6);
        const push2 = items5.push;
        const obj7 = { title: intl5.string(intl7.t["9Oq93m"]), data: existingMembersRows };
        intl5 = tmp5(1128).intl;
        push2(obj7);
        BottomSheet = tmp5(5297).BottomSheet;
        const obj8 = { title: intl6.string(intl7.t.ES4CC6), subtitle: "#" + tmp9, trailing: tmp32Result };
        const BottomSheetTitleHeader = tmp5(7280).BottomSheetTitleHeader;
        intl6 = tmp5(1128).intl;
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
          const PressableOpacity = tmp5(6940).PressableOpacity;
          intl = tmp5(1128).intl;
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
          const RowButton = tmp5(8985).RowButton;
          intl3 = tmp5(1128).intl;
          tmp32Result2 = tmp32(RowButton, obj12);
        } else {
          const obj13 = { style: tmp.warning, children: closure_11(InlineNotice, obj14) };
          obj14 = { type: "info", message: intl2.string(intl7.t.VOuiSj), role: "none" };
          InlineNotice = tmp5(7985).InlineNotice;
          intl2 = tmp5(1128).intl;
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
        const BottomSheetSectionList = tmp5(5301).BottomSheetSectionList;
        items6[1] = closure_11(BottomSheetSectionList, obj15);
        return closure_11(BottomSheet, obj10);
      }
    }
  }
  return null;
});
let result = size.fileFinishedImporting("modules/channel_permissions/native/action_sheets/ChannelMembersActionSheet.tsx");

export default tmp5;
