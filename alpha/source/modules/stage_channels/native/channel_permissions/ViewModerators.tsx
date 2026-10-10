// Module ID: 17529
// Function ID: 17530
// Name: ViewModerators
// Dependencies: [5, 19, 2125, 2119, 2087, 1085, 7489, 21, 1265, 5056, 17530, 2000, 558, 576, 1503, 504, 5893, 8602, 2073, 1998, 5300, 1126, 7014, 8603, 4808, 1200, 8620, 5377, 6264, 6179, 10609, 2]
// Exports: openAddModeratorsActionSheet

// Module 17529 (ViewModerators)
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import ChannelPermissionsConstants from "ChannelPermissionsConstants" /* 7489 */;
import ChannelOverwritesItemDefault from "ChannelOverwritesItem" /* 8620 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 2125 */;
import GuildRoleStore from "GuildRoleStore" /* 2119 */;
import GuildStore from "GuildStore" /* 2087 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c1, c2, dependencyMap, navigation;

let c10;
let unpackModuleId;
const AnalyticEvents = Constants.AnalyticEvents;
const RowType = ChannelPermissionsConstants.RowType;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ViewModerators(channel) {
  let TableRow;
  let guild;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items2;
  let obj6;
  let onRemove;
  let sortedGuildRoles;
  let tmp10;
  let tmp11;
  let tmp5;
  let tmp7;
  let tmp = channel;
  const tmp2 = dependencyMap;
  let obj = channel(576);
  const cResult = obj.c(21);
  channel = channel.channel;
  let obj2 = channel(1503);
  navigation = obj2.useNavigation();
  let obj3 = {
    headerRight() {
      return null;
    }
  };
  navigation.setOptions(obj3);
  if (cResult[0] !== channel) {
    const guildId = channel.getGuildId();
    cResult[0] = channel;
    cResult[1] = guildId;
    tmp5 = guildId;
  } else {
    tmp5 = cResult[1];
  }
  let closure_1 = tmp5;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    let tmp8 = GuildStore;
    let items = [GuildStore, ];
    items[1] = GuildRoleStore;
    cResult[2] = items;
    tmp7 = items;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] !== tmp5) {
    const fn = function w() {
      let sortedRoles;
      const obj = { guild: GuildStore.getGuild(closure_1), sortedGuildRoles: sortedRoles };
      sortedRoles = undefined;
      const tmp = closure_1;
      if (null != closure_1) {
        sortedRoles = GuildRoleStore.getSortedRoles(tmp);
      }
      return obj;
    };
    const items1 = [tmp5];
    cResult[3] = tmp5;
    cResult[4] = fn;
    cResult[5] = items1;
    tmp11 = items1;
    tmp10 = fn;
  } else {
    tmp10 = cResult[4];
    tmp11 = cResult[5];
  }
  const tmpResult = tmp(504);
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp7, tmp10, tmp11);
  ({ guild, sortedGuildRoles } = stateFromStoresObject);
  const tmpResult2 = tmp(5893);
  const canUpdateStageChannelModerators = tmpResult2.useCanUpdateStageChannelModerators(channel.id);
  if (null != guild) {
    if (null != sortedGuildRoles) {
      let tmp14;
      let tmp29;
      let tmp16;
      if (cResult[6] !== channel) {
        const isGuildStageVoiceResult = channel.isGuildStageVoice();
        cResult[6] = channel;
        cResult[7] = isGuildStageVoiceResult;
        tmp14 = isGuildStageVoiceResult;
      } else {
        tmp14 = cResult[7];
      }
      if (cResult[8] === canUpdateStageChannelModerators) {
        if (cResult[9] === channel) {
          if (cResult[10] === guild) {
            if (cResult[11] === tmp14) {
              if (cResult[12] === sortedGuildRoles) {
                tmp16 = cResult[13];
              }
              return tmp16;
            }
          }
        }
      }
      let id;
      const getMemberIds = GuildMemberStore.getMemberIds;
      if (guild != null) {
        id = guild.id;
      }
      const memberIds = getMemberIds(id);
      let obj7 = canUpdateStageChannelModerators(8602);
      const existingMembersRows = obj7.getExistingMembersRows(memberIds, channel, guild, tmp(2073).MODERATE_STAGE_CHANNEL_PERMISSIONS);
      let obj8 = canUpdateStageChannelModerators(8602);
      const existingRolesRowWithPermissionDisabled = obj8.getExistingRolesRowWithPermissionDisabled(guild, sortedGuildRoles, channel, tmp(2073).MODERATE_STAGE_CHANNEL_PERMISSIONS);
      if (cResult[14] !== channel) {
        function handleRemovePermission(id) {
          let MEMBER;
          let intl;
          let intl2;
          let intl3;
          let intl4;
          let obj2;
          let closure_0 = id;
          const tmp = channel;
          const tmp3 = channel(onRemove[16]);
          const removeModeratorOverwrite = tmp3.removeModeratorOverwrite;
          id = id.id;
          if (id.rowType === constants.ROLE) {
            MEMBER = tmp(tmp2[19]).PermissionOverwriteType.ROLE;
          } else {
            MEMBER = tmp(tmp2[19]).PermissionOverwriteType.MEMBER;
          }
          id = removeModeratorOverwrite(id, MEMBER, closure_0);
          const tmp4 = closure_1(tmp2[20]);
          let obj = {
            title: intl.string(tmp(tmp2[21]).t.GuPYQB),
            body: intl2.format(tmp(tmp2[21]).t.xERCnZ, obj2),
            cancelText: intl3.string(tmp(tmp2[21]).t["ETE/oC"]),
            confirmText: intl4.string(tmp(tmp2[21]).t.fKxYb0),
            onConfirm() {
              return closure_1(...arguments);
            },
            hideActionSheet: false,
            confirmColor: tmp(tmp2[25]).ButtonColors.RED
          };
          const show = tmp4.show;
          intl = tmp(tmp2[21]).intl;
          intl2 = tmp(tmp2[21]).intl;
          obj2 = { name: id.name };
          intl3 = tmp(tmp2[21]).intl;
          intl4 = tmp(tmp2[21]).intl;
          closure_1 = closure_4(function*(arg0, value) {
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
                return { value: "IconComponent", done: "+51" };
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
                    const obj11 = tmp(onRemove[16]);
                    if (obj11.isEmptyOverwrite(id)) {
                      c1 = 2;
                      c2 = 1;
                      const obj8 = { value: obj7.clearPermissionOverwrite(tmp.id, id.id), done: false };
                      obj7 = v1(onRemove[22]);
                      return obj8;
                    } else {
                      const items = [id];
                      c1 = 1;
                      c2 = 1;
                      const obj9 = { value: obj5.savePermissionUpdates(tmp.id, items), done: false };
                      obj5 = tmp(onRemove[23]);
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
                  const obj2 = tmp(onRemove[24]);
                  const result = obj2.memberOrRoleRemovedToast(closure_128_0.name);
                  const obj3 = v1(onRemove[9]);
                  obj3.hideActionSheet();
                  c2 = 3;
                  return { value: "IconComponent", done: "+51" };
                }
              } catch (tmp19) {
                c2 = 3;
                throw tmp19;
              }
            }
          });
          show(obj);
        }
        cResult[14] = channel;
        cResult[15] = handleRemovePermission;
        tmp29 = handleRemovePermission;
      } else {
        tmp29 = cResult[15];
      }
      dependencyMap = tmp29;
      if (cResult[16] === canUpdateStageChannelModerators) {
        if (cResult[17] === channel.guild_id) {
          if (cResult[18] === channel.id) {
            let tmp30;
            if (cResult[19] === tmp29) {
              tmp30 = cResult[20];
            }
            let closure_4 = tmp30;
            let tmp31 = tmp14;
            if (tmp31) {
              let obj4 = { style: { paddingHorizontal: 16 }, spacing: 16, children: items2 };
              const Stack = tmp(5377).Stack;
              let obj5 = { title: intl.string(tmp(1126).t.f7VbhF), hasIcons: true, children: closure_10(TableRow, obj6) };
              const TableRowGroup = tmp(6264).TableRowGroup;
              intl = tmp(1126).intl;
              obj6 = {
                icon: closure_10(tmp(10609).CirclePlusIcon, {}),
                label: intl2.string(tmp(1126).t.n3bcy8),
                onPress() {
                              if (null != channel) {
                                const obj = AnalyticsUtilsDefault;
                                obj.track(AnalyticEvents.OPEN_POPOUT, { type: "Grant Channel Access" });
                                const openLazy = ActionSheetActionCreatorsDefault.openLazy;
                                const _HermesInternal = HermesInternal;
                                ActionSheetActionCreatorsDefault;
                                const obj2 = { channel, canSkip: false };
                                const tmp8 = asyncRequire(17530, dependencyMap.paths);
                                openLazy(tmp8, "channel-add-moderators-" + channel.id, obj2);
                              }
                            },
                disabled: !canUpdateStageChannelModerators,
                arrow: true
              };
              TableRow = tmp(6179).TableRow;
              intl2 = tmp(1126).intl;
              items2 = [closure_10(TableRowGroup, obj5), , ];
              let obj9 = { title: intl3.string(tmp(1126).t.ghdVJL), hasIcons: true, children: existingRolesRowWithPermissionDisabled.map((item) => closure_4(item)) };
              const TableRowGroup2 = tmp(6264).TableRowGroup;
              intl3 = tmp(1126).intl;
              items2[1] = closure_10(TableRowGroup2, obj9);
              let obj10 = { title: intl4.string(tmp(1126).t.ghdVJL), hasIcons: true, children: existingMembersRows.map((item) => closure_4(item)) };
              const TableRowGroup3 = tmp(6264).TableRowGroup;
              intl4 = tmp(1126).intl;
              items2[2] = closure_10(TableRowGroup3, obj10);
              tmp31 = closure_11(Stack, obj4);
            }
            cResult[8] = canUpdateStageChannelModerators;
            cResult[9] = channel;
            cResult[10] = guild;
            cResult[11] = tmp14;
            cResult[12] = sortedGuildRoles;
            cResult[13] = tmp31;
            tmp16 = tmp31;
          }
        }
      }
      function renderRowItem(item) {
        const obj = { guildId: channel.guild_id, item, channelId: channel.id, showType: true, showRemove: canUpdateStageChannelModerators, onRemove };
        return authStore(ChannelOverwritesItemDefault, obj, item.id);
      }
      cResult[16] = canUpdateStageChannelModerators;
      cResult[17] = channel.guild_id;
      cResult[18] = channel.id;
      cResult[19] = tmp29;
      cResult[20] = renderRowItem;
      tmp30 = renderRowItem;
    }
  }
  return null;
}) : (function ViewModerators(channel) {
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
    const tmp3 = channel(handleRemovePermission[16]);
    const removeModeratorOverwrite = tmp3.removeModeratorOverwrite;
    id = id.id;
    if (id.rowType === constants.ROLE) {
      MEMBER = tmp(tmp2[19]).PermissionOverwriteType.ROLE;
    } else {
      MEMBER = tmp(tmp2[19]).PermissionOverwriteType.MEMBER;
    }
    id = removeModeratorOverwrite(id, MEMBER, closure_0);
    const tmp4 = guildId(tmp2[20]);
    let obj = {
      title: intl.string(tmp(tmp2[21]).t.GuPYQB),
      body: intl2.format(tmp(tmp2[21]).t.xERCnZ, obj2),
      cancelText: intl3.string(tmp(tmp2[21]).t["ETE/oC"]),
      confirmText: intl4.string(tmp(tmp2[21]).t.fKxYb0),
      onConfirm() {
        return closure_1(...arguments);
      },
      hideActionSheet: false,
      confirmColor: tmp(tmp2[25]).ButtonColors.RED
    };
    const show = tmp4.show;
    intl = tmp(tmp2[21]).intl;
    intl2 = tmp(tmp2[21]).intl;
    obj2 = { name: id.name };
    intl3 = tmp(tmp2[21]).intl;
    intl4 = tmp(tmp2[21]).intl;
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
          return { value: "IconComponent", done: "+51" };
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
              const obj11 = tmp(handleRemovePermission[16]);
              if (obj11.isEmptyOverwrite(id)) {
                c1 = 2;
                c2 = 1;
                const obj8 = { value: obj7.clearPermissionOverwrite(tmp.id, id.id), done: false };
                obj7 = v1(handleRemovePermission[22]);
                return obj8;
              } else {
                const items = [id];
                c1 = 1;
                c2 = 1;
                const obj9 = { value: obj5.savePermissionUpdates(tmp.id, items), done: false };
                obj5 = tmp(handleRemovePermission[23]);
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
            const obj2 = tmp(handleRemovePermission[24]);
            const result = obj2.memberOrRoleRemovedToast(closure_128_0.name);
            const obj3 = v1(handleRemovePermission[9]);
            obj3.hideActionSheet();
            c2 = 3;
            return { value: "IconComponent", done: "+51" };
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
  let obj = channel(handleRemovePermission[14]);
  navigation = obj.useNavigation();
  let obj2 = {
    headerRight() {
      return null;
    }
  };
  navigation.setOptions(obj2);
  const guildId = channel.getGuildId();
  let obj4 = channel(handleRemovePermission[15]);
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
  let obj5 = channel(handleRemovePermission[16]);
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
      let obj6 = canUpdateStageChannelModerators(tmp2[17]);
      const existingMembersRows = obj6.getExistingMembersRows(memberIds, channel, guild, tmp(tmp2[18]).MODERATE_STAGE_CHANNEL_PERMISSIONS);
      let obj7 = canUpdateStageChannelModerators(tmp2[17]);
      const existingRolesRowWithPermissionDisabled = obj7.getExistingRolesRowWithPermissionDisabled(guild, sortedGuildRoles, channel, tmp(tmp2[18]).MODERATE_STAGE_CHANNEL_PERMISSIONS);
      if (isGuildStageVoiceResult) {
        let obj3 = { style: { paddingHorizontal: 16 }, spacing: 16, children: items2 };
        const tmp19 = closure_10;
        const Stack = tmp(tmp2[27]).Stack;
        let obj8 = { title: intl.string(tmp(tmp2[21]).t.f7VbhF), hasIcons: true, children: closure_10(TableRow, obj9) };
        const TableRowGroup = tmp(tmp2[28]).TableRowGroup;
        intl = tmp(tmp2[21]).intl;
        obj9 = {
          icon: closure_10(tmp(tmp2[30]).CirclePlusIcon, {}),
          label: intl2.string(tmp(tmp2[21]).t.n3bcy8),
          onPress() {
                  if (null != channel) {
                    const obj = AnalyticsUtilsDefault;
                    obj.track(AnalyticEvents.OPEN_POPOUT, { type: "Grant Channel Access" });
                    const openLazy = ActionSheetActionCreatorsDefault.openLazy;
                    const _HermesInternal = HermesInternal;
                    ActionSheetActionCreatorsDefault;
                    const obj2 = { channel, canSkip: false };
                    const tmp8 = asyncRequire(17530, dependencyMap.paths);
                    openLazy(tmp8, "channel-add-moderators-" + channel.id, obj2);
                  }
                },
          disabled: !canUpdateStageChannelModerators,
          arrow: true
        };
        TableRow = tmp(tmp2[29]).TableRow;
        intl2 = tmp(tmp2[21]).intl;
        items2 = [closure_10(TableRowGroup, obj8), , ];
        let obj10 = {
          title: intl3.string(tmp(tmp2[21]).t.ghdVJL),
          hasIcons: true,
          children: existingRolesRowWithPermissionDisabled.map((item) => {
                  const obj = { guildId: channel.guild_id, item, channelId: channel.id, showType: true, showRemove: canUpdateStageChannelModerators, onRemove: handleRemovePermission };
                  return authStore(ChannelOverwritesItemDefault, obj, item.id);
                })
        };
        const TableRowGroup2 = tmp(tmp2[28]).TableRowGroup;
        intl3 = tmp(tmp2[21]).intl;
        items2[1] = closure_10(TableRowGroup2, obj10);
        let obj11 = {
          title: intl4.string(tmp(tmp2[21]).t.ghdVJL),
          hasIcons: true,
          children: existingMembersRows.map((item) => {
                  const obj = { guildId: channel.guild_id, item, channelId: channel.id, showType: true, showRemove: canUpdateStageChannelModerators, onRemove: handleRemovePermission };
                  return authStore(ChannelOverwritesItemDefault, obj, item.id);
                })
        };
        const TableRowGroup3 = tmp(tmp2[28]).TableRowGroup;
        intl4 = tmp(tmp2[21]).intl;
        items2[2] = closure_10(TableRowGroup3, obj11);
        isGuildStageVoiceResult = closure_11(Stack, obj3);
      }
      return isGuildStageVoiceResult;
    }
  }
  return null;
});
function openAddModeratorsActionSheet(channel) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  const obj = AnalyticsUtilsDefault;
  obj.track(AnalyticEvents.OPEN_POPOUT, { type: "Grant Channel Access" });
  const openLazy = ActionSheetActionCreatorsDefault.openLazy;
  ActionSheetActionCreatorsDefault;
  const obj2 = { channel, canSkip: flag };
  const tmp3 = asyncRequire(17530, dependencyMap.paths);
  openLazy(tmp3, "channel-add-moderators-" + channel.id, obj2);
}
let result = size.fileFinishedImporting("modules/stage_channels/native/channel_permissions/ViewModerators.tsx");

export default tmp4;
export { openAddModeratorsActionSheet };
