// Module ID: 18855
// Function ID: 18856
// Name: ViewModerators
// Dependencies: [5, 19, 4921, 4915, 4880, 1072, 7939, 21, 1253, 5253, 18856, 1995, 1498, 504, 6704, 9022, 4866, 1993, 5954, 1114, 7479, 9023, 5706, 1188, 9039, 6022, 7054, 6969, 11454, 2]
// Exports: default, openAddModeratorsActionSheet

// Module 18855 (ViewModerators)
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import asyncRequire from "asyncRequire" /* 1995 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import ChannelPermissionsConstants from "ChannelPermissionsConstants" /* 7939 */;
import ChannelOverwritesItemDefault from "ChannelOverwritesItem" /* 9039 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 4921 */;
import GuildRoleStore from "GuildRoleStore" /* 4915 */;
import GuildStore from "GuildStore" /* 4880 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c1, c2, navigation;

let c10;
let unpackModuleId;
const AnalyticEvents = Constants.AnalyticEvents;
const RowType = ChannelPermissionsConstants.RowType;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let result = size.fileFinishedImporting("modules/stage_channels/native/channel_permissions/ViewModerators.tsx");

export default function ViewModerators(channel) {
  let TableRow;
  let guild;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items2;
  let obj9;
  let sortedGuildRoles;
  channel = channel.channel;
  function handleRemovePermission(id) {
    let MEMBER;
    let intl;
    let intl2;
    let intl3;
    let intl4;
    let obj2;
    let closure_0 = id;
    const tmp = channel;
    const tmp3 = channel(handleRemovePermission[14]);
    const removeModeratorOverwrite = tmp3.removeModeratorOverwrite;
    id = id.id;
    if (id.rowType === constants.ROLE) {
      MEMBER = tmp(tmp2[17]).PermissionOverwriteType.ROLE;
    } else {
      MEMBER = tmp(tmp2[17]).PermissionOverwriteType.MEMBER;
    }
    id = removeModeratorOverwrite(id, MEMBER, closure_0);
    const tmp4 = guildId(tmp2[18]);
    let obj = {
      title: intl.string(tmp(tmp2[19]).t.GuPYQB),
      body: intl2.format(tmp(tmp2[19]).t.xERCnZ, obj2),
      cancelText: intl3.string(tmp(tmp2[19]).t["ETE/oC"]),
      confirmText: intl4.string(tmp(tmp2[19]).t.fKxYb0),
      onConfirm() {
        return closure_1(...arguments);
      },
      hideActionSheet: false,
      confirmColor: tmp(tmp2[23]).ButtonColors.RED
    };
    const show = tmp4.show;
    intl = tmp(tmp2[19]).intl;
    intl2 = tmp(tmp2[19]).intl;
    obj2 = { name: id.name };
    intl3 = tmp(tmp2[19]).intl;
    intl4 = tmp(tmp2[19]).intl;
    let closure_1 = _asyncToGenerator(async (arg0, value) => {
      let closure_0;
      let obj5;
      let obj7;
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj4 = { value, done: true };
          return obj4;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c2 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              const obj11 = tmp(handleRemovePermission[14]);
              if (obj11.isEmptyOverwrite(id)) {
                c1 = 2;
                c2 = 1;
                const obj8 = { value: obj7.clearPermissionOverwrite(tmp.id, id.id), done: false };
                obj7 = v1(handleRemovePermission[20]);
                return obj8;
              } else {
                const items = [id];
                c1 = 1;
                c2 = 1;
                const obj9 = { value: obj5.savePermissionUpdates(tmp.id, items), done: false };
                obj5 = tmp(handleRemovePermission[21]);
                return obj9;
              }
            }
          } else {
            if (1 === tmp4) {
              if (arg0 === 1) {
                c2 = 3;
                throw value;
              } else if (arg0 === 2) {
                c2 = 3;
                const obj10 = { value, done: true };
                return obj10;
              }
            } else if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj = { value, done: true };
              return obj;
            }
            const obj2 = tmp(handleRemovePermission[22]);
            const result = obj2.memberOrRoleRemovedToast(closure_128_0.name);
            const obj3 = v1(handleRemovePermission[9]);
            obj3.hideActionSheet();
            c2 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp19) {
          c2 = 3;
          throw tmp19;
        }
      }
    });
    show(obj);
  }
  let tmp = channel;
  const tmp2 = handleRemovePermission;
  let obj = channel(handleRemovePermission[12]);
  navigation = obj.useNavigation();
  let obj2 = {
    headerRight() {
      return null;
    }
  };
  navigation.setOptions(obj2);
  const guildId = channel.getGuildId();
  let obj4 = channel(handleRemovePermission[13]);
  let items = [GuildStore, GuildRoleStore];
  const items1 = [guildId];
  const stateFromStoresObject = obj4.useStateFromStoresObject(items, () => {
    let sortedRoles;
    const obj = { guild: GuildStore.getGuild(guildId), sortedGuildRoles: sortedRoles };
    sortedRoles = undefined;
    const tmp = guildId;
    if (null != guildId) {
      sortedRoles = GuildRoleStore.getSortedRoles(tmp);
    }
    return obj;
  }, items1);
  ({ guild, sortedGuildRoles } = stateFromStoresObject);
  let obj5 = channel(handleRemovePermission[14]);
  const canUpdateStageChannelModerators = obj5.useCanUpdateStageChannelModerators(channel.id);
  if (null != guild) {
    if (null != sortedGuildRoles) {
      let isGuildStageVoiceResult = channel.isGuildStageVoice();
      let id;
      const getMemberIds = GuildMemberStore.getMemberIds;
      if (guild != null) {
        id = guild.id;
      }
      const memberIds = getMemberIds(id);
      let obj6 = canUpdateStageChannelModerators(tmp2[15]);
      const existingMembersRows = obj6.getExistingMembersRows(memberIds, channel, guild, tmp(tmp2[16]).MODERATE_STAGE_CHANNEL_PERMISSIONS);
      let obj7 = canUpdateStageChannelModerators(tmp2[15]);
      const existingRolesRowWithPermissionDisabled = obj7.getExistingRolesRowWithPermissionDisabled(guild, sortedGuildRoles, channel, tmp(tmp2[16]).MODERATE_STAGE_CHANNEL_PERMISSIONS);
      if (isGuildStageVoiceResult) {
        let obj3 = { style: { paddingHorizontal: 16 }, spacing: 16, children: items2 };
        const tmp19 = closure_10;
        const Stack = tmp(tmp2[25]).Stack;
        let obj8 = { title: intl.string(tmp(tmp2[19]).t.f7VbhF), hasIcons: true, children: closure_10(TableRow, obj9) };
        const TableRowGroup = tmp(tmp2[26]).TableRowGroup;
        intl = tmp(tmp2[19]).intl;
        obj9 = {
          icon: closure_10(tmp(tmp2[28]).CirclePlusIcon, {}),
          label: intl2.string(tmp(tmp2[19]).t.n3bcy8),
          onPress() {
                  if (null != channel) {
                    const obj = AnalyticsUtilsDefault;
                    obj.track(AnalyticEvents.OPEN_POPOUT, { type: "Grant Channel Access" });
                    const openLazy = ActionSheetActionCreatorsDefault.openLazy;
                    const _HermesInternal = HermesInternal;
                    ActionSheetActionCreatorsDefault;
                    const obj2 = { channel, canSkip: false };
                    const tmp8 = asyncRequire(18856, dependencyMap.paths);
                    openLazy(tmp8, "channel-add-moderators-" + channel.id, obj2);
                  }
                },
          disabled: !canUpdateStageChannelModerators,
          arrow: true
        };
        TableRow = tmp(tmp2[27]).TableRow;
        intl2 = tmp(tmp2[19]).intl;
        items2 = [closure_10(TableRowGroup, obj8), , ];
        let obj10 = {
          title: intl3.string(tmp(tmp2[19]).t.ghdVJL),
          hasIcons: true,
          children: existingRolesRowWithPermissionDisabled.map((item) => {
                  const obj = { guildId: channel.guild_id, item, channelId: channel.id, showType: true, showRemove: canUpdateStageChannelModerators, onRemove: handleRemovePermission };
                  return authStore(ChannelOverwritesItemDefault, obj, item.id);
                })
        };
        const TableRowGroup2 = tmp(tmp2[26]).TableRowGroup;
        intl3 = tmp(tmp2[19]).intl;
        items2[1] = closure_10(TableRowGroup2, obj10);
        let obj11 = {
          title: intl4.string(tmp(tmp2[19]).t.ghdVJL),
          hasIcons: true,
          children: existingMembersRows.map((item) => {
                  const obj = { guildId: channel.guild_id, item, channelId: channel.id, showType: true, showRemove: canUpdateStageChannelModerators, onRemove: handleRemovePermission };
                  return authStore(ChannelOverwritesItemDefault, obj, item.id);
                })
        };
        const TableRowGroup3 = tmp(tmp2[26]).TableRowGroup;
        intl4 = tmp(tmp2[19]).intl;
        items2[2] = closure_10(TableRowGroup3, obj11);
        isGuildStageVoiceResult = closure_11(Stack, obj3);
      }
      return isGuildStageVoiceResult;
    }
  }
  return null;
};
export function openAddModeratorsActionSheet(channel) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  const obj = AnalyticsUtilsDefault;
  obj.track(AnalyticEvents.OPEN_POPOUT, { type: "Grant Channel Access" });
  const openLazy = ActionSheetActionCreatorsDefault.openLazy;
  ActionSheetActionCreatorsDefault;
  const obj2 = { channel, canSkip: flag };
  const tmp3 = asyncRequire(18856, dependencyMap.paths);
  openLazy(tmp3, "channel-add-moderators-" + channel.id, obj2);
}
