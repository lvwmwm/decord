// Module ID: 10767
// Function ID: 10768
// Name: ChannelMembersActionSheet
// Dependencies: [19, 17, 2065, 2125, 2119, 2087, 4750, 1085, 21, 5092, 587, 558, 576, 1631, 504, 1503, 5421, 10768, 8602, 5056, 9696, 10769, 5088, 1126, 8620, 6184, 7091, 6838, 8581, 10766, 10330, 7567, 6306, 6839, 2]

// Module 10767 (ChannelMembersActionSheet)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 587 */;
import intl7 from "intl" /* 1126 */;
import useNavigation from "useNavigation" /* 1503 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1631 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import Text_Text from "Text/Text" /* 5088 */;
import useChannelNameDefault from "useChannelName" /* 5421 */;
import SettingsIcon from "SettingsIcon" /* 7091 */;
import ChannelPermissionsUtils from "ChannelPermissionsUtils" /* 8602 */;
import ChannelOverwritesItemDefault from "ChannelOverwritesItem" /* 8620 */;
import ChannelSettingsActionCreatorsDefault from "ChannelSettingsActionCreators" /* 9696 */;
import GroupPlusIcon from "GroupPlusIcon" /* 10330 */;
import channel_permissions_ChannelPermissionsUtils from "channel_permissions/ChannelPermissionsUtils" /* 10766 */;
import AppChannelPermissionUtils from "AppChannelPermissionUtils" /* 10768 */;
import ChannelDetailsUtils from "ChannelDetailsUtils" /* 10769 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import GuildMemberStore from "GuildMemberStore" /* 2125 */;
import GuildRoleStore from "GuildRoleStore" /* 2119 */;
import GuildStore from "GuildStore" /* 2087 */;
import PermissionStore from "PermissionStore" /* 4750 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5092 */;
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
  guildId(1631)();
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
  const tmpResult7 = channelId(1503);
  navigation = tmpResult7.useNavigation();
  tmp5(5421)(stateFromStores);
  const tmpResult8 = channelId(10768);
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
        intl4 = tmp5(1126).intl;
        push(obj6);
        const push2 = items5.push;
        const obj7 = { title: intl5.string(intl7.t["9Oq93m"]), data: existingMembersRows };
        intl5 = tmp5(1126).intl;
        push2(obj7);
        BottomSheet = tmp5(6839).BottomSheet;
        const obj8 = { title: intl6.string(intl7.t.ES4CC6), subtitle: "#" + tmp9, trailing: tmp32Result };
        const BottomSheetTitleHeader = tmp5(6838).BottomSheetTitleHeader;
        intl6 = tmp5(1126).intl;
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
          const PressableOpacity = tmp5(6184).PressableOpacity;
          intl = tmp5(1126).intl;
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
          const RowButton = tmp5(8581).RowButton;
          intl3 = tmp5(1126).intl;
          tmp32Result2 = tmp32(RowButton, obj12);
        } else {
          const obj13 = { style: tmp.warning, children: closure_11(InlineNotice, obj14) };
          obj14 = { type: "info", message: intl2.string(intl7.t.VOuiSj), role: "static" };
          InlineNotice = tmp5(7567).InlineNotice;
          intl2 = tmp5(1126).intl;
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
        const BottomSheetSectionList = tmp5(6306).BottomSheetSectionList;
        items6[1] = closure_11(BottomSheetSectionList, obj15);
        return closure_11(BottomSheet, obj10);
      }
    }
  }
  return null;
});
let result = size.fileFinishedImporting("modules/channel_permissions/native/action_sheets/ChannelMembersActionSheet.tsx");

export default tmp5;
