// Module ID: 6084
// Function ID: 6085
// Name: GuildReadStateStore
// Dependencies: [6085, 6064, 6041, 4711, 2068, 2082, 502, 2064, 2086, 1084, 4709, 6042, 2115, 5973, 1390, 1085, 2071, 5974, 6083, 11, 5950, 2089, 12, 4717, 2]

// Module 6084 (GuildReadStateStore)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import _modDef12 from "module_12" /* 12 */;
import Constants from "Constants" /* 1085 */;
import ChannelConstants from "ChannelConstants" /* 2071 */;
import GuildRecord from "GuildRecord" /* 2082 */;
import FavoritesUtils from "FavoritesUtils" /* 2089 */;
import ThreadActionUtils from "ThreadActionUtils" /* 4717 */;
import NSFWContentGate from "NSFWContentGate" /* 5950 */;
import isOptInEnabled from "isOptInEnabled" /* 6083 */;
import RecentMentionsStore from "RecentMentionsStore" /* 6085 */;
import NotificationCenterItemsStore from "NotificationCenterItemsStore" /* 6064 */;
import ActiveJoinedThreadsStore from "ActiveJoinedThreadsStore" /* 6041 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4711 */;
import ChannelRecord from "ChannelRecord" /* 2068 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2064 */;
import GuildStore from "GuildStore" /* 2086 */;
import MobileCacheSnapshotStore from "MobileCacheSnapshotStore" /* 1084 */;
import PermissionStore from "PermissionStore" /* 4709 */;
import ReadStateStore from "ReadStateStore" /* 6042 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2115 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5973 */;
import UserStore from "UserStore" /* 1390 */;
import ReadStateConstants from "ReadStateConstants" /* 5974 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let count, importDefault, nsfwAllowed;

let c10;
let c9;
let closure_21;
let closure_22;
let metroImportAll;
const f92459 = (item) => {
  let tmp;
  let tmp2;
  [tmp, tmp2] = item;
  const tmp3 = Number(tmp) !== constants.GUILD_EVENT && tmp2;
  return tmp3;
};
function updateGuildUnreadSentinel(arg0) {
  let num;
  let tmp = arg0;
  let tmp3 = arg0;
  const tmp2 = guilds;
  if (arg0 == null) {
    tmp3 = NULL_STRING_GUILD_ID;
  }
  let tmp5 = tmp;
  const tmp4 = guilds;
  if (tmp == null) {
    tmp5 = NULL_STRING_GUILD_ID;
  }
  let tmp6 = tmp4[tmp5];
  if (tmp6 == null) {
    const tmp7 = guilds;
    if (tmp == null) {
      tmp = NULL_STRING_GUILD_ID;
    }
    const obj = { unread: false, unreadByType: {}, unreadChannelId: null, lowImportanceMentionCount: 0, highImportanceMentionCount: 0, mentionCounts: {}, ncMentionCount: 0, sentinel: num };
    num = undefined;
    if (tmp7[tmp] != null) {
      num = tmp8.sentinel;
    }
    if (num == null) {
      num = 0;
    }
    tmp6 = obj;
  }
  tmp2[tmp3] = tmp6;
  tmp6.sentinel = tmp6.sentinel + 1;
  closure_26 = closure_26 + 1;
}
function isCountableChannel(channel, mentionCount) {
  let num = mentionCount;
  if (mentionCount === undefined) {
    num = 0;
  }
  if (null == channel) {
    return false;
  } else {
    if (channel.isGuildVocal()) {
      if (0 === num) {
        return false;
      }
    }
    if (channel.hasFlag(ChannelFlags.IS_GUILD_RESOURCE_CHANNEL)) {
      return false;
    } else {
      if (0 === num) {
        let result;
        if (channel.isThread()) {
          result = JoinedThreadsStore.isMuted(channel.id) || UserGuildSettingsStore.isGuildOrCategoryOrChannelMuted(channel.guild_id, channel.parent_id);
          const isMutedResult = JoinedThreadsStore.isMuted(channel.id) || UserGuildSettingsStore.isGuildOrCategoryOrChannelMuted(channel.guild_id, channel.parent_id);
        } else {
          result = UserGuildSettingsStore.isGuildOrCategoryOrChannelMuted(channel.guild_id, channel.id);
        }
        if (result) {
          return false;
        }
      }
      if (!channel.isPrivate()) {
        const obj = isOptInEnabled;
        let result1 = obj.isOptInEnabledForGuild(channel.guild_id);
        let tmp11 = null != channel.guild_id;
        if (tmp11) {
          if (result1) {
            const result2 = authStore(channel.type) || UserGuildSettingsStore.isChannelRecordOrParentOptedIn(channel);
            result1 = !result2;
          }
          if (result1) {
            result1 = tmp2;
          }
          tmp11 = result1;
        }
        if (tmp11) {
          return false;
        } else if (!PermissionStore.can(channel.accessPermissions, channel)) {
          return false;
        }
      }
      const tmp16 = num > 0 || UserGuildSettingsStore.resolveUnreadSetting(channel) === constants2.ALL_MESSAGES;
      return tmp16;
    }
  }
}
function updateNotificationCenterMentions(mentionCounts, mentionCounts2) {
  let c1;
  const f92460 = (item) => {
    const _ackMessageId = notifCenterReadState1._ackMessageId;
    const lastMessageIdResult = ReadStateStore.lastMessageId(item);
    const obj = c1(notifCenterReadState[19]);
    if (obj.compare(lastMessageIdResult, _ackMessageId) > 0) {
      closure_1 = closure_1 + mentionCounts.mentionCounts[item].count;
    }
  };
  if (!NotificationCenterItemsStore.tabFocused) {
    let closure_0 = mentionCounts;
    importDefault = 0;
    let obj = UserStore;
    const currentUser = UserStore.getCurrentUser();
    let notifCenterReadState;
    if (null != currentUser) {
      notifCenterReadState = ReadStateStore.getNotifCenterReadState(currentUser.id);
    }
    if (null != notifCenterReadState) {
      const obj2 = require("SnowflakeUtils");
      const keys = obj2.keys(mentionCounts.mentionCounts);
      const item = keys.forEach(f92460);
    }
    closure_0 = mentionCounts2;
    let closure_1 = 0;
    const currentUser1 = obj.getCurrentUser();
    let notifCenterReadState1;
    const tmp10 = importDefault;
    if (null != currentUser1) {
      notifCenterReadState1 = ReadStateStore.getNotifCenterReadState(currentUser1.id);
    }
    const tmp14 = null == mentionCounts2 || null == notifCenterReadState1;
    if (!tmp14) {
      const obj3 = require("SnowflakeUtils");
      const keys1 = obj3.keys(mentionCounts2.mentionCounts);
      const item1 = keys1.forEach(f92460);
    }
    let num2;
    const _Math = Math;
    const tmp18 = closure_1;
    if (mentionCounts2 != null) {
      num2 = mentionCounts2.ncMentionCount;
    }
    if (num2 == null) {
      num2 = 0;
    }
    mentionCounts.ncMentionCount = max(num2 + (tmp10 - tmp18), 0);
  }
}
function aggregateGuildState(guild_id, unreadByType, unread) {
  let closure_0 = unreadByType;
  const entries = Object.entries(unreadByType.unreadByType);
  unreadByType.unread = entries.some(f92459);
  unreadByType.lowImportanceMentionCount = 0;
  unreadByType.highImportanceMentionCount = 0;
  const arr = SnowflakeUtilsDefault;
  const item = arr.forEach(unreadByType.mentionCounts, (count) => {
    count = count.count;
    if (count.isMentionLowImportance) {
      closure_0.lowImportanceMentionCount = closure_0.lowImportanceMentionCount + count;
    } else {
      closure_0.highImportanceMentionCount = closure_0.highImportanceMentionCount + count;
    }
  });
  let flag = unreadByType.unread !== unread.unread || unreadByType.lowImportanceMentionCount !== unread.lowImportanceMentionCount || unreadByType.highImportanceMentionCount !== unread.highImportanceMentionCount;
  if (flag) {
    let tmp2 = guild_id;
    let tmp5 = guild_id;
    const tmp3 = guilds;
    if (guild_id == null) {
      tmp5 = NULL_STRING_GUILD_ID;
    }
    tmp3[tmp5] = unreadByType;
    if (null != tmp2) {
      if (unreadByType.unread) {
        set.add(tmp2);
      } else {
        set.delete(tmp2);
      }
    }
    closure_26 = closure_26 + 1;
    const tmp9 = updateGuildUnreadSentinel;
    if (tmp2 == null) {
      tmp2 = NULL_STRING_GUILD_ID;
    }
    tmp9(tmp2);
    updateNotificationCenterMentions(unreadByType, unread);
    flag = true;
  }
  return flag;
}
function recountChannels(guildId, items) {
  let num;
  let num2;
  let obj3;
  let obj4;
  let tmp = guildId;
  if (NULL_STRING_GUILD_ID !== guildId) {
    const tmp3 = null;
    let closure_0 = tmp;
    let tmp6 = tmp;
    const tmp4 = guilds;
    if (tmp == null) {
      tmp6 = tmp2;
    }
    let tmp8 = tmp;
    const tmp7 = guilds;
    if (tmp == null) {
      tmp8 = tmp2;
    }
    let tmp9 = tmp7[tmp8];
    if (tmp9 == null) {
      let tmp11 = tmp;
      const tmp10 = guilds;
      if (tmp == null) {
        tmp11 = tmp2;
      }
      const obj = { unread: false, unreadByType: {}, unreadChannelId: null, lowImportanceMentionCount: 0, highImportanceMentionCount: 0, mentionCounts: {}, ncMentionCount: 0, sentinel: num };
      num = undefined;
      if (tmp10[tmp11] != null) {
        num = tmp12.sentinel;
      }
      if (num == null) {
        num = 0;
      }
      tmp9 = obj;
    }
    tmp4[tmp6] = tmp9;
    let tmp14 = tmp;
    const tmp13 = guilds;
    if (tmp == null) {
      tmp14 = tmp2;
    }
    let obj2 = { unread: false, unreadByType: obj4, unreadChannelId: null, lowImportanceMentionCount: 0, highImportanceMentionCount: 0, mentionCounts: obj3, ncMentionCount: 0, sentinel: num2 };
    num2 = undefined;
    if (tmp13[tmp14] != null) {
      num2 = tmp15.sentinel;
    }
    if (num2 == null) {
      num2 = 0;
    }
    obj3 = {};
    const merged = Object.assign(tmp9.mentionCounts);
    obj4 = {};
    const merged1 = Object.assign(tmp9.unreadByType);
    let c2 = false;
    const item = items.forEach((item) => {
      const channel = ChannelStore.getChannel(item);
      const tmp = item;
      if (null != channel) {
        if (channel.getGuildId() === guildId) {
          const mentionCount = ReadStateStore.getMentionCount(item);
          const hasUnreadResult = null !== tmp3 && !c2 && obj3.hasUnread(channel.id) && isCountableChannel(channel, mentionCount, true);
          if (hasUnreadResult) {
            c2 = true;
            obj2.unreadChannelId = channel.id;
          }
          if (mentionCount > 0) {
            if (isCountableChannel(channel, mentionCount)) {
              obj2 = { count: mentionCount, isMentionLowImportance: ReadStateStore.getIsMentionLowImportance(item) };
              const mentionCounts = obj2.mentionCounts;
              const id = channel.id;
              mentionCounts[id] = obj2;
            }
          }
          delete obj2.mentionCounts[obj.id];
        }
      } else {
        delete obj2.mentionCounts[tmp];
      }
    });
    obj2.unreadByType[constants.CHANNEL] = c2;
    if (obj2.unreadByType[constants.CHANNEL] !== tmp9.unreadByType[constants.CHANNEL]) {
      if (!obj2.unreadByType[constants.CHANNEL]) {
        let channel = ChannelStore.getChannel(tmp9.unreadChannelId);
        if (null != channel) {
          if (!items.includes(channel.id)) {
            if (ReadStateStore.hasUnread(channel.id)) {
              if (isCountableChannel(channel)) {
                if (null != tmp) {
                  set.add(tmp);
                }
                obj2.unreadByType[constants.CHANNEL] = true;
              }
            }
          }
        }
        return recountGuild(tmp);
      }
    }
    return aggregateGuildState(tmp, obj2, tmp9);
  }
  tmp = null;
}
function updateNonChannel(guild_id, GUILD_EVENT) {
  let num;
  let num2;
  let obj3;
  let obj4;
  if (null != guild_id) {
    let tmp2 = guild_id;
    const tmp = guilds;
    if (guild_id == null) {
      tmp2 = NULL_STRING_GUILD_ID;
    }
    let tmp4 = guild_id;
    const tmp3 = guilds;
    if (guild_id == null) {
      tmp4 = NULL_STRING_GUILD_ID;
    }
    let tmp5 = tmp3[tmp4];
    if (tmp5 == null) {
      let tmp7 = guild_id;
      const tmp6 = guilds;
      if (guild_id == null) {
        tmp7 = NULL_STRING_GUILD_ID;
      }
      const obj = { unread: false, unreadByType: {}, unreadChannelId: null, lowImportanceMentionCount: 0, highImportanceMentionCount: 0, mentionCounts: {}, ncMentionCount: 0, sentinel: num };
      num = undefined;
      if (tmp6[tmp7] != null) {
        num = tmp8.sentinel;
      }
      if (num == null) {
        num = 0;
      }
      tmp5 = obj;
    }
    tmp[tmp2] = tmp5;
    let tmp10 = guild_id;
    const tmp9 = guilds;
    if (guild_id == null) {
      tmp10 = NULL_STRING_GUILD_ID;
    }
    const obj2 = { unread: false, unreadByType: obj4, unreadChannelId: null, lowImportanceMentionCount: 0, highImportanceMentionCount: 0, mentionCounts: obj3, ncMentionCount: 0, sentinel: num2 };
    num2 = undefined;
    if (tmp9[tmp10] != null) {
      num2 = tmp11.sentinel;
    }
    if (num2 == null) {
      num2 = 0;
    }
    obj3 = {};
    const merged = Object.assign(tmp5.mentionCounts);
    obj4 = {};
    const merged1 = Object.assign(tmp5.unreadByType);
    const unreadByType = obj2.unreadByType;
    GUILD_EVENT = constants.GUILD_EVENT;
    const hasUnreadResult = ReadStateStore.hasUnread(guild_id, GUILD_EVENT);
    let tmp20 = hasUnreadResult;
    if (GUILD_EVENT === constants.GUILD_EVENT) {
      let tmp22 = !UserGuildSettingsStore.isMuted(guild_id);
      UserGuildSettingsStore.isMuted(guild_id);
      const obj5 = UserGuildSettingsStore;
      if (tmp22) {
        const result = obj5.isMuteScheduledEventsEnabled(guild_id);
        tmp22 = !result && hasUnreadResult;
      }
      tmp20 = tmp22;
    }
    unreadByType[GUILD_EVENT] = tmp20;
    return aggregateGuildState(guild_id, obj2, tmp5);
  }
}
function recountGuild(guildId, arg1) {
  let entries;
  let isMentionLowImportance;
  let mentionCount;
  let num;
  let num4;
  let tmp15;
  let tmp3;
  let tmp2 = guildId;
  if (NULL_STRING_GUILD_ID !== guildId) {
    let tmp7 = tmp2;
    const tmp5 = guilds;
    if (tmp2 == null) {
      tmp7 = tmp3;
    }
    const obj = { unread: entries.some(f92459), unreadByType: {}, unreadChannelId: null, lowImportanceMentionCount: 0, highImportanceMentionCount: 0, mentionCounts: {}, ncMentionCount: 0, sentinel: num };
    num = undefined;
    if (tmp5[tmp7] != null) {
      num = tmp8.sentinel;
    }
    if (num == null) {
      num = 0;
    }
    if (null == tmp2) {
      const mutablePrivateChannels = ChannelStore.getMutablePrivateChannels();
      for (const key10166 in mutablePrivateChannels) {
        let tmp106 = mutablePrivateChannels[key10166];
        let mentionCount1 = ReadStateStore.getMentionCount(key10166);
        let tmp80 = mentionCount1 > 0;
        if (tmp80) {
          tmp80 = isCountableChannel(tmp106, mentionCount1);
        }
        if (!tmp80) {
          continue;
        } else {
          obj.highImportanceMentionCount = obj.highImportanceMentionCount + mentionCount1;
          let obj2 = { count: mentionCount1, isMentionLowImportance: false };
          obj.mentionCounts[tmp106.id] = obj2;
          continue;
        }
        continue;
      }
    } else {
      const isMutedResult = UserGuildSettingsStore.isMuted(tmp2);
      if (isMutedResult) {
        if (false === arg1) {
          return false;
        }
      }
      const mutedChannels = obj13.getMutedChannels(tmp2);
      const channelOverrides = obj13.getChannelOverrides(tmp2);
      const obj3 = isOptInEnabled;
      const result = obj3.isOptInEnabledForGuild(tmp2);
      const obj4 = NSFWContentGate;
      const result1 = obj4.currentUserCanSeeNSFW();
      const obj5 = { userCanSeeNSFW: result1, guildIsNSFW: tmp15 };
      tmp15 = !result1 && isGuildNSFW(GuildStore.getGuild(tmp2));
      const mutableBasicGuildChannelsForGuild = ChannelStore.getMutableBasicGuildChannelsForGuild(tmp2);
      for (const key10044 in mutableBasicGuildChannelsForGuild) {
        let obj14 = mutableBasicGuildChannelsForGuild[key10044];
        let hasItem = isMutedResult || mutedChannels.has(key10044);
        if (!hasItem) {
          let hasItem1 = null != obj14.parent_id && mutedChannels.has(obj14.parent_id);
          hasItem = hasItem1;
        }
        let tmp24 = obj.unreadByType[constants.CHANNEL];
        let tmp23 = constants;
        let guildChannelUnreadState = ReadStateStore.getGuildChannelUnreadState(obj14, result, channelOverrides, hasItem, tmp24, obj5);
        ({ mentionCount, isMentionLowImportance } = guildChannelUnreadState);
        let tmp35 = mentionCount > 0;
        if (tmp35) {
          let tmp37 = !tmp24;
          if (tmp37) {
            let tmp38 = !hasItem || tmp35;
            tmp37 = tmp38;
          }
          if (tmp37) {
            tmp37 = tmp34;
          }
          if (tmp37) {
            let tmp40 = React4(obj14.type);
            let tmp41 = !tmp40 || 0 !== mentionCount;
            if (tmp41) {
              let canBasicChannelResult = PermissionStore.canBasicChannel(metroImportAll(obj14.type), obj14);
              if (canBasicChannelResult) {
                let tmp45 = null != obj14.guild_id;
                if (tmp45) {
                  let tmp46 = result;
                  if (tmp46) {
                    let result2 = authStore(obj14.type);
                    if (!result2) {
                      result2 = UserGuildSettingsStore.isChannelRecordOrParentOptedIn(obj14);
                    }
                    tmp46 = !result2;
                  }
                  if (tmp46) {
                    tmp46 = 0 === mentionCount;
                  }
                  tmp45 = tmp46;
                }
                let tmp50 = !tmp45;
                if (tmp50) {
                  let tmp51 = "flags" in obj14;
                  let tmp52 = !tmp51;
                  if (!tmp52) {
                    tmp52 = !obj14.hasFlag(ChannelFlags.IS_GUILD_RESOURCE_CHANNEL);
                  }
                  if (tmp52) {
                    let tmp54 = mentionCount > 0;
                    if (!tmp54) {
                      tmp54 = UserGuildSettingsStore.resolveUnreadSetting(obj14) === constants2.ALL_MESSAGES;
                    }
                    tmp52 = tmp54;
                  }
                  tmp50 = tmp52;
                }
                canBasicChannelResult = tmp50;
              }
              tmp41 = canBasicChannelResult;
            }
            if (!tmp41) {
              continue;
            } else {
              if (tmp37) {
                obj.unreadByType[tmp23.CHANNEL] = true;
                obj.unreadChannelId = key10044;
              }
              if (!tmp35) {
                continue;
              } else {
                if (isMentionLowImportance) {
                  obj.lowImportanceMentionCount = obj.lowImportanceMentionCount + mentionCount;
                } else {
                  obj.highImportanceMentionCount = obj.highImportanceMentionCount + mentionCount;
                }
                let obj6 = { count: mentionCount, isMentionLowImportance };
                obj.mentionCounts[obj14.id] = obj6;
                continue;
              }
              continue;
            }
            continue;
          }
          continue;
        }
        continue;
      }
      const activeJoinedThreadsForGuild = ActiveJoinedThreadsStore.getActiveJoinedThreadsForGuild(tmp2);
      for (const key10119 in activeJoinedThreadsForGuild) {
        let keys = Object.keys();
        if (keys === undefined) {
          continue;
        } else {
          let tmp60 = keys[tmp];
          while (tmp60 !== undefined) {
            let isMutedResult1 = obj.unreadByType[constants.CHANNEL];
            let tmp104 = constants;
            if (!isMutedResult1) {
              isMutedResult1 = !ReadStateStore.hasUnread(tmp60);
            }
            if (!isMutedResult1) {
              isMutedResult1 = JoinedThreadsStore.isMuted(tmp60);
            }
            if (!isMutedResult1) {
              isMutedResult1 = isMutedResult;
            }
            if (!isMutedResult1) {
              obj.unreadByType[tmp104.CHANNEL] = true;
              obj.unreadChannelId = tmp60;
            }
            let mentionCount2 = ReadStateStore.getMentionCount(tmp60);
            let isMentionLowImportance1 = ReadStateStore.getIsMentionLowImportance(tmp60);
            if (mentionCount2 <= 0) {
              continue;
            } else {
              if (isMentionLowImportance1) {
                obj.lowImportanceMentionCount = obj.lowImportanceMentionCount + mentionCount2;
              } else {
                obj.highImportanceMentionCount = obj.highImportanceMentionCount + mentionCount2;
              }
              let obj7 = { count: mentionCount2, isMentionLowImportance: isMentionLowImportance1 };
              obj.mentionCounts[tmp60] = obj7;
              continue;
            }
            continue;
          }
        }
        continue;
      }
      let tmp68 = !obj.unreadByType[constants.GUILD_EVENT];
      if (tmp68) {
        const GUILD_EVENT = tmp67.GUILD_EVENT;
        const hasUnreadResult = ReadStateStore.hasUnread(tmp2, GUILD_EVENT);
        let tmp71 = hasUnreadResult;
        if (GUILD_EVENT === constants.GUILD_EVENT) {
          let tmp73 = !UserGuildSettingsStore.isMuted(tmp2);
          UserGuildSettingsStore.isMuted(tmp2);
          const obj8 = UserGuildSettingsStore;
          if (tmp73) {
            const result3 = obj8.isMuteScheduledEventsEnabled(tmp2);
            tmp73 = !result3 && hasUnreadResult;
          }
          tmp71 = tmp73;
        }
        tmp68 = tmp71;
      }
      if (tmp68) {
        obj.unreadByType[constants.GUILD_EVENT] = true;
      }
    }
    const _Object = Object;
    entries = Object.entries(obj.unreadByType);
    let tmp83 = tmp2;
    const tmp82 = guilds;
    if (tmp2 == null) {
      tmp83 = NULL_STRING_GUILD_ID;
    }
    let tmp85 = tmp2;
    const tmp84 = guilds;
    if (tmp2 == null) {
      tmp85 = NULL_STRING_GUILD_ID;
    }
    let tmp86 = tmp84[tmp85];
    if (tmp86 == null) {
      let tmp88 = tmp2;
      const tmp87 = guilds;
      if (tmp2 == null) {
        tmp88 = NULL_STRING_GUILD_ID;
      }
      const obj9 = { unread: false, unreadByType: {}, unreadChannelId: null, lowImportanceMentionCount: 0, highImportanceMentionCount: 0, mentionCounts: {}, ncMentionCount: 0, sentinel: num4 };
      num4 = undefined;
      if (tmp87[tmp88] != null) {
        num4 = tmp89.sentinel;
      }
      if (num4 == null) {
        num4 = 0;
      }
      tmp86 = obj9;
    }
    tmp82[tmp83] = tmp86;
    let flag3 = obj.unread !== tmp86.unread || obj.highImportanceMentionCount !== tmp86.highImportanceMentionCount || obj.lowImportanceMentionCount !== tmp86.lowImportanceMentionCount;
    if (flag3) {
      let tmp91 = tmp2;
      const tmp90 = guilds;
      if (tmp2 == null) {
        tmp91 = NULL_STRING_GUILD_ID;
      }
      tmp90[tmp91] = obj;
      if (null != tmp2) {
        if (obj.unread) {
          set.add(tmp2);
        } else {
          set.delete(tmp2);
        }
      }
      closure_26 = closure_26 + 1;
      const tmp95 = updateGuildUnreadSentinel;
      if (tmp2 == null) {
        tmp2 = NULL_STRING_GUILD_ID;
      }
      tmp95(tmp2);
      updateNotificationCenterMentions(obj, tmp86);
      flag3 = true;
    }
    return flag3;
  }
  tmp2 = null;
}
function handleOverlayInitialize(guilds) {
  let num;
  guilds = {};
  closure_26 = 0;
  new Set();
  recountGuild(null);
  const length = guilds.length;
  for (let num = 0; num < length; num = num + 1) {
    let tmp3 = guilds[num];
    if (null != tmp3) {
      let tmp6 = recountGuild(tmp3.properties.id);
    }
  }
}
function handleConnectionOpen(arg0) {
  let readState;
  ({ guilds, readState } = arg0);
  let set1;
  let closure_24 = {};
  let c26 = 0;
  new Set();
  const currentUser = UserStore.getCurrentUser();
  nsfwAllowed = undefined;
  if (currentUser != null) {
    nsfwAllowed = currentUser.nsfwAllowed;
  }
  set1 = new Set();
  if (readState.entries.length < 500) {
    const entries = readState.entries;
    const item = entries.forEach((mention_count) => {
      const tmp = null != mention_count.mention_count && mention_count.mention_count > 0;
      if (tmp) {
        if (null != mention_count.read_state_type) {
          if (mention_count.read_state_type !== constants.CHANNEL) {
            set1.add(mention_count.id);
          }
        }
        const add = set1.add;
        const channel = ChannelStore.getChannel(mention_count.id);
        let guild_id;
        if (channel != null) {
          guild_id = channel.guild_id;
        }
        add(guild_id);
      }
    });
  }
  recountGuild(null);
  for (const item10037 of guilds) {
    let hasItem;
    let tmp8 = recountGuild;
    let id = item10037.id;
    if (tmp4) {
      hasItem = set1.has(tmp7.id);
    }
    let tmp8Result = tmp8(id, hasItem);
    continue;
  }
}
function recomputeAllGuilds() {
  guilds = {};
  new Set();
  recountGuild(null);
  const values = Object.values(GuildStore.getGuildIds());
  for (const item10021 of values) {
    let tmp5 = recountGuild(item10021);
    continue;
  }
}
function handleGuildCreate(guild) {
  return recountGuild(guild.guild.id);
}
function handleGuildDelete(guild) {
  guild = guild.guild;
  let flag = null != guilds[guild.id];
  if (flag) {
    delete guilds[guild.id];
    set.delete(guild.id);
    closure_26 = closure_26 + 1;
    flag = true;
  }
  return flag;
}
function handleChannelDelete(channel) {
  channel = channel.channel;
  const items = [channel.id];
  return recountChannels(channel.guild_id, items);
}
function handleWindowFocus() {
  const channel = ChannelStore.getChannel(SelectedChannelStore.getChannelId());
  let tmp = null != channel;
  if (tmp) {
    const items = [channel.id];
    tmp = recountChannels(channel.getGuildId(), items);
  }
  return tmp;
}
function handleGuildMemberUpdate(guildId) {
  guildId = guildId.guildId;
  const tmp = guildId.user.id === AuthenticationStore.getId() && recountGuild(guildId);
  return tmp;
}
function handleGenericUpdate(channelId) {
  const channel = ChannelStore.getChannel(channelId.channelId);
  let tmp = null != channel;
  if (tmp) {
    const items = [channel.id];
    tmp = recountChannels(channel.getGuildId(), items);
  }
  return tmp;
}
function handleMessageCreate(channelId) {
  let num;
  channelId = channelId.channelId;
  const channel = ChannelStore.getChannel(channelId);
  if (null == channel) {
    return false;
  } else {
    if (null != channel.guild_id) {
      let result;
      let guild_id = channel.guild_id;
      let tmp = guild_id;
      const tmp14 = guilds;
      if (guild_id == null) {
        tmp = NULL_STRING_GUILD_ID;
      }
      let tmp3 = guild_id;
      const tmp2 = guilds;
      if (guild_id == null) {
        tmp3 = NULL_STRING_GUILD_ID;
      }
      let tmp4 = tmp2[tmp3];
      if (tmp4 == null) {
        const tmp5 = guilds;
        if (guild_id == null) {
          guild_id = NULL_STRING_GUILD_ID;
        }
        const obj = { unread: false, unreadByType: {}, unreadChannelId: null, lowImportanceMentionCount: 0, highImportanceMentionCount: 0, mentionCounts: {}, ncMentionCount: 0, sentinel: num };
        num = undefined;
        if (tmp5[guild_id] != null) {
          num = tmp6.sentinel;
        }
        if (num == null) {
          num = 0;
        }
        tmp4 = obj;
      }
      tmp14[tmp] = tmp4;
      if (channel.isThread()) {
        const hasJoinedResult = JoinedThreadsStore.hasJoined(channel.id);
        let isMutedResult = !hasJoinedResult;
        const obj3 = JoinedThreadsStore;
        if (hasJoinedResult) {
          isMutedResult = obj3.isMuted(channel.id);
        }
        result = isMutedResult;
      } else {
        result = UserGuildSettingsStore.isGuildOrCategoryOrChannelMuted(channel.guild_id, channel.id);
      }
      if (result) {
        if (0 === ReadStateStore.getMentionCount(channelId)) {
          return false;
        }
      }
    }
    const items = [channel.id];
    return recountChannels(channel.getGuildId(), items);
  }
}
function handleChannelSelect(arg0) {
  let channelId;
  let guildId;
  ({ channelId, guildId } = arg0);
  const obj = FavoritesUtils;
  let tmp2 = !obj.isFavoritesGuildId(guildId);
  obj.isFavoritesGuildId(guildId);
  if (tmp2) {
    let tmp4 = null != channelId;
    if (tmp4) {
      const items = [channelId];
      tmp4 = recountChannels(guildId, items);
    }
    tmp2 = tmp4;
  }
  return tmp2;
}
function handleChannelUpdate(channel) {
  channel = channel.channel;
  const items = [channel.id];
  return recountChannels(channel.getGuildId(), items);
}
function handleChannelUpdates(channels) {
  const obj = _modDef12(channels.channels);
  const groupByResult = obj.groupBy((getGuildId) => getGuildId.getGuildId());
  return groupByResult.reduce((acc, arr, index) => {
    const tmp = recountChannels(index, arr.map((id) => id.id)) || acc;
    return tmp;
  }, false);
}
function handleBulkAck(channels) {
  const arr = _modDef12(channels.channels);
  const mapped = arr.map((channelId) => channelId.channelId);
  const found = mapped.filter((item) => null != ChannelStore.getChannel(item));
  const groupByResult = found.groupBy((arg0) => {
    const channel = ChannelStore.getChannel(arg0);
    let guildId;
    if (channel != null) {
      guildId = channel.getGuildId();
    }
    return guildId;
  });
  return groupByResult.reduce((acc, item, index) => {
    const tmp = recountChannels(index, item) || acc;
    return tmp;
  }, false);
}
function handleThreadUpdate(channel) {
  channel = channel.channel;
  const items = [, ];
  ({ id: arr[0], parent_id: arr[1] } = channel);
  return recountChannels(channel.getGuildId(), items);
}
function handleGuildEventUpdate(guildScheduledEvent) {
  return updateNonChannel(guildScheduledEvent.guildScheduledEvent.guild_id, constants.GUILD_EVENT);
}
function handleGuildEventDelete(guildScheduledEvent) {
  return updateNonChannel(guildScheduledEvent.guildScheduledEvent.guild_id, constants.GUILD_EVENT);
}
function handleGuildFeatureAck(id) {
  return updateNonChannel(id.id, id.ackType);
}
function handleThreadMemberUpdate(id) {
  const items = [id.id];
  return recountChannels(id.guildId, items);
}
function handleThreadMembersUpdate(id) {
  const obj = ThreadActionUtils;
  let result = obj.doesThreadMembersActionAffectMe(id);
  if (result) {
    const items = [id.id];
    result = recountChannels(id.guildId, items);
  }
  return result;
}
function handleThreadListSync(threads) {
  threads = threads.threads;
  const guildId = threads.guildId;
  const found = threads.filter((id) => JoinedThreadsStore.hasJoined(id.id));
  return recountChannels(guildId, found.map((id) => id.id));
}
function handlePassiveUpdateV2(channels) {
  let tmp = channels.channels.length > 0;
  if (tmp) {
    channels = channels.channels;
    tmp = recountChannels(channels.guildId, channels.map((id) => id.id));
  }
  return tmp;
}
function handleMarkGuildAsRead(guildId) {
  return recountGuild(guildId.guildId);
}
function handleGuildUpdate(guildId) {
  return recountGuild(guildId.guildId);
}
function handleGuildNSFWLevelUpdate(guild) {
  guild = guild.guild;
  const obj = NSFWContentGate;
  const result = obj.currentUserCanSeeNSFW();
  const tmp2 = !result && recountGuild(guild.id);
  return tmp2;
}
function handleCurrentUserNSFWAllowedUpdate() {
  const currentUser = UserStore.getCurrentUser();
  nsfwAllowed = undefined;
  if (currentUser != null) {
    nsfwAllowed = currentUser.nsfwAllowed;
  }
  let flag = nsfwAllowed !== nsfwAllowed;
  if (flag) {
    recomputeAllGuilds();
    flag = true;
  }
  return flag;
}
function handleUserGuildSettingsFullUpdate(userGuildSettings) {
  userGuildSettings = userGuildSettings.userGuildSettings;
  set = new Set(userGuildSettings.map((guild_id) => {
    guild_id = guild_id.guild_id;
    if (guild_id == null) {
      guild_id = NULL_STRING_GUILD_ID;
    }
    return guild_id;
  }));
  const obj = SnowflakeUtilsDefault;
  const keys = obj.keys(guilds);
  return keys.reduce((acc, item) => {
    const hasItem = set.has(item) && recountGuild(item) || acc;
    return hasItem;
  }, false);
}
function handleClearNotifCenterGuildMentions() {
  for (const key10003 in guilds) {
    guilds[key10003].ncMentionCount = 0;
    continue;
  }
}
function handleUserGuildSettingsUpdate(guildId) {
  return recountGuild(guildId.guildId);
}
function handleRecentMentionsSuccess(messages) {
  messages = messages.messages;
  set = new Set(messages.map((channel_id) => channel_id.channel_id));
  const item = set.forEach((item) => {
    channel = channel.getChannel(item);
    if (null != channel) {
      const items = [item];
      recountChannels(channel.getGuildId(), items);
    }
  });
}
({ getBasicAccessPermissions: metroImportAll, isGuildVocalChannelType: c9, isThread: c10 } = ChannelRecord);
const isGuildNSFW = GuildRecord.isGuildNSFW;
const NULL_STRING_GUILD_ID = Constants.NULL_STRING_GUILD_ID;
const ChannelFlags = ChannelConstants.ChannelFlags;
({ ReadStateTypes: closure_21, UnreadSetting: closure_22 } = ReadStateConstants);
let guilds = {};
let set = new Set();
let closure_26 = 0;
class GuildReadStateStore extends MobileCacheSnapshotStore {
  constructor() {
    const obj = {
      CONNECTION_OPEN: handleConnectionOpen,
      OVERLAY_INITIALIZE: handleOverlayInitialize,
      CACHE_LOADED_LAZY() {
        return closure_0.loadCache();
      },
      GUILD_CREATE: handleGuildCreate,
      GUILD_DELETE: handleGuildDelete,
      MESSAGE_CREATE: handleMessageCreate,
      MESSAGE_ACK: handleGenericUpdate,
      BULK_ACK: handleBulkAck,
      UPDATE_CHANNEL_DIMENSIONS: handleGenericUpdate,
      CHANNEL_SELECT: handleChannelSelect,
      CHANNEL_DELETE: handleChannelDelete,
      WINDOW_FOCUS: handleWindowFocus,
      GUILD_ACK: handleMarkGuildAsRead,
      GUILD_ROLE_CREATE: handleGuildUpdate,
      GUILD_ROLE_DELETE: handleGuildUpdate,
      GUILD_ROLE_UPDATE: handleGuildUpdate,
      GUILD_UPDATE: handleGuildNSFWLevelUpdate,
      CURRENT_USER_UPDATE: handleCurrentUserNSFWAllowedUpdate,
      CHANNEL_CREATE: handleChannelUpdate,
      CHANNEL_UPDATES: handleChannelUpdates,
      THREAD_CREATE: handleThreadUpdate,
      THREAD_UPDATE: handleThreadUpdate,
      THREAD_DELETE: handleThreadUpdate,
      THREAD_LIST_SYNC: handleThreadListSync,
      THREAD_MEMBER_UPDATE: handleThreadMemberUpdate,
      THREAD_MEMBERS_UPDATE: handleThreadMembersUpdate,
      PASSIVE_UPDATE_V2: handlePassiveUpdateV2,
      GUILD_MEMBER_UPDATE: handleGuildMemberUpdate,
      USER_GUILD_SETTINGS_FULL_UPDATE: handleUserGuildSettingsFullUpdate,
      USER_GUILD_SETTINGS_CHANNEL_UPDATE: handleUserGuildSettingsUpdate,
      USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: handleUserGuildSettingsUpdate,
      USER_GUILD_SETTINGS_GUILD_UPDATE: handleUserGuildSettingsUpdate,
      USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: handleUserGuildSettingsUpdate,
      GUILD_FEATURE_ACK: handleGuildFeatureAck,
      GUILD_SCHEDULED_EVENT_CREATE: handleGuildEventUpdate,
      GUILD_SCHEDULED_EVENT_UPDATE: handleGuildEventUpdate,
      GUILD_SCHEDULED_EVENT_DELETE: handleGuildEventDelete,
      CHANNEL_RTC_UPDATE_CHAT_OPEN: handleGenericUpdate,
      LOAD_MESSAGES_SUCCESS: handleGenericUpdate,
      CHANNEL_ACK: handleGenericUpdate,
      CHANNEL_LOCAL_ACK: handleGenericUpdate,
      NOTIFICATION_SETTINGS_UPDATE: recomputeAllGuilds,
      RECOMPUTE_READ_STATES: recomputeAllGuilds,
      VOICE_CHANNEL_SELECT: handleGenericUpdate,
      ENABLE_AUTOMATIC_ACK: handleGenericUpdate,
      RESORT_THREADS: handleGenericUpdate,
      NOTIFICATION_CENTER_CLEAR_GUILD_MENTIONS: handleClearNotifCenterGuildMentions,
      TRY_ACK: handleGenericUpdate,
      LOAD_RECENT_MENTIONS_SUCCESS: handleRecentMentionsSuccess
    };
    const tmp2 = new tmp(obj, handleClearNotifCenterGuildMentions, handleGenericUpdate, new.target);
    let closure_0 = tmp2;
    return tmp2;
  }
  initialize() {
    this.waitFor(ChannelStore, GuildStore, SelectedChannelStore, ReadStateStore, PermissionStore, AuthenticationStore, UserStore, UserGuildSettingsStore, ActiveJoinedThreadsStore, JoinedThreadsStore, RecentMentionsStore);
  }
  loadCache() {
    const snapshot = this.readSnapshot(GuildReadStateStore.LATEST_SNAPSHOT_VERSION);
    if (null != snapshot) {
      guilds = snapshot.guilds;
      const _Set = Set;
      const self = this;
      const self2 = this;
      new Set(snapshot.unreadGuilds);
    }
  }
  takeSnapshot() {
    const obj = { version: GuildReadStateStore.LATEST_SNAPSHOT_VERSION, data: { guilds, unreadGuilds: Array.from(set) } };
    ({ guilds, unreadGuilds: Array.from(set) });
    return obj;
  }
  hasAnyUnread() {
    return set.size > 0;
  }
  getStoreChangeSentinel() {
    return closure_26;
  }
  getMutableUnreadGuilds() {
    return set;
  }
  getMutableGuildStates() {
    return guilds;
  }
  shouldCountChannelUnread(channel, mentionCount) {
    let num = mentionCount;
    if (mentionCount === undefined) {
      num = 0;
    }
    return isCountableChannel(channel, num, true);
  }
  hasUnread(arg0) {
    return set.has(arg0);
  }
  getMentionCount(arg0) {
    let num;
    let tmp = arg0;
    let tmp3 = arg0;
    const tmp2 = guilds;
    if (arg0 == null) {
      tmp3 = NULL_STRING_GUILD_ID;
    }
    let tmp5 = tmp;
    const tmp4 = guilds;
    if (tmp == null) {
      tmp5 = NULL_STRING_GUILD_ID;
    }
    let tmp6 = tmp4[tmp5];
    if (tmp6 == null) {
      const tmp7 = guilds;
      if (tmp == null) {
        tmp = NULL_STRING_GUILD_ID;
      }
      const obj = { unread: false, unreadByType: {}, unreadChannelId: null, lowImportanceMentionCount: 0, highImportanceMentionCount: 0, mentionCounts: {}, ncMentionCount: 0, sentinel: num };
      num = undefined;
      if (tmp7[tmp] != null) {
        num = tmp8.sentinel;
      }
      if (num == null) {
        num = 0;
      }
      tmp6 = obj;
    }
    tmp2[tmp3] = tmp6;
    return tmp6.highImportanceMentionCount + tmp6.lowImportanceMentionCount;
  }
  getIsMentionLowImportance(arg0) {
    let num;
    let tmp = arg0;
    let tmp3 = arg0;
    const tmp2 = guilds;
    if (arg0 == null) {
      tmp3 = NULL_STRING_GUILD_ID;
    }
    let tmp5 = tmp;
    const tmp4 = guilds;
    if (tmp == null) {
      tmp5 = NULL_STRING_GUILD_ID;
    }
    let tmp6 = tmp4[tmp5];
    if (tmp6 == null) {
      const tmp7 = guilds;
      if (tmp == null) {
        tmp = NULL_STRING_GUILD_ID;
      }
      const obj = { unread: false, unreadByType: {}, unreadChannelId: null, lowImportanceMentionCount: 0, highImportanceMentionCount: 0, mentionCounts: {}, ncMentionCount: 0, sentinel: num };
      num = undefined;
      if (tmp7[tmp] != null) {
        num = tmp8.sentinel;
      }
      if (num == null) {
        num = 0;
      }
      tmp6 = obj;
    }
    tmp2[tmp3] = tmp6;
    return 0 === tmp6.highImportanceMentionCount;
  }
  getGuildHasUnreadIgnoreMuted(id) {
    const mutableGuildChannelsForGuild = ChannelStore.getMutableGuildChannelsForGuild(id);
    for (const key10008 in mutableGuildChannelsForGuild) {
      let obj = mutableGuildChannelsForGuild[key10008];
      if (null == obj) {
        continue;
      } else {
        if (!obj.isGuildVocal()) {
          if (!PermissionStore.can(obj.accessPermissions, obj)) {
            continue;
          } else if (!ReadStateStore.hasUnreadOrMentions(key10008)) {
            continue;
          } else {
            let flag = true;
            return true;
          }
          continue;
        }
        continue;
      }
      continue;
    }
    const activeJoinedThreadsForGuild = ActiveJoinedThreadsStore.getActiveJoinedThreadsForGuild(id);
    for (const key10027 in activeJoinedThreadsForGuild) {
      if (null == ChannelStore.getChannel(key10027)) {
        continue;
      } else {
        let keys = Object.keys();
        if (keys === undefined) {
          continue;
        } else {
          let tmp8 = keys[tmp];
          while (tmp8 !== undefined) {
            if (!ReadStateStore.hasUnreadOrMentions(tmp8)) {
              continue;
            } else {
              let flag2 = true;
              return true;
            }
          }
        }
        continue;
      }
      continue;
    }
    return ReadStateStore.hasUnreadOrMentions(id, constants.GUILD_EVENT);
  }
  getTotalMentionCount(arg0) {
    let num = 0;
    let num2 = 0;
    const keys = Object.keys();
    if (keys !== undefined) {
      num2 = num;
      while (keys[tmp] !== undefined) {
        let tmp7 = tmp2;
        let tmp10 = guilds[tmp5];
        if (tmp2) {
          tmp7 = tmp5 === NULL_STRING_GUILD_ID;
        }
        if (tmp7) {
          continue;
        } else {
          num = tmp4 + tmp10.highImportanceMentionCount;
          continue;
        }
        continue;
      }
    }
    return num2;
  }
  getTotalNotificationsMentionCount(arg0) {
    let num = 0;
    let num2 = 0;
    const keys = Object.keys();
    if (keys !== undefined) {
      num2 = num;
      while (keys[tmp] !== undefined) {
        let tmp7 = tmp2;
        let tmp10 = guilds[tmp5];
        if (tmp2) {
          tmp7 = tmp5 === NULL_STRING_GUILD_ID;
        }
        if (tmp7) {
          continue;
        } else {
          num = tmp4 + tmp10.ncMentionCount;
          continue;
        }
        continue;
      }
    }
    return num2;
  }
  getPrivateChannelMentionCount() {
    let num;
    if (guilds[NULL_STRING_GUILD_ID] != null) {
      num = tmp.highImportanceMentionCount;
    }
    if (num == null) {
      num = 0;
    }
    return num;
  }
  getMentionCountForPrivateChannel(channelId) {
    let num;
    if (guilds[NULL_STRING_GUILD_ID] != null) {
      num = tmp.mentionCounts[channelId];
    }
    if (num == null) {
      num = 0;
    }
    return num;
  }
  getHighImportanceMentionCountForChannel(guild_id, currentlySelectedChannelId) {
    let tmp = guild_id;
    const tmp2 = guilds;
    if (guild_id == null) {
      tmp = NULL_STRING_GUILD_ID;
    }
    let tmp4;
    if (tmp2[tmp] != null) {
      tmp4 = tmp3.mentionCounts[currentlySelectedChannelId];
    }
    let num = 0;
    if (null != tmp4) {
      num = 0;
      if (!tmp4.isMentionLowImportance) {
        num = tmp4.count;
      }
    }
    return num;
  }
  getGuildChangeSentinel(arg0) {
    let num;
    let tmp = arg0;
    let tmp3 = arg0;
    const tmp2 = guilds;
    if (arg0 == null) {
      tmp3 = NULL_STRING_GUILD_ID;
    }
    let tmp5 = tmp;
    const tmp4 = guilds;
    if (tmp == null) {
      tmp5 = NULL_STRING_GUILD_ID;
    }
    let tmp6 = tmp4[tmp5];
    if (tmp6 == null) {
      const tmp7 = guilds;
      if (tmp == null) {
        tmp = NULL_STRING_GUILD_ID;
      }
      const obj = { unread: false, unreadByType: {}, unreadChannelId: null, lowImportanceMentionCount: 0, highImportanceMentionCount: 0, mentionCounts: {}, ncMentionCount: 0, sentinel: num };
      num = undefined;
      if (tmp7[tmp] != null) {
        num = tmp8.sentinel;
      }
      if (num == null) {
        num = 0;
      }
      tmp6 = obj;
    }
    tmp2[tmp3] = tmp6;
    return tmp6.sentinel;
  }
}
const prototype = GuildReadStateStore.prototype;
GuildReadStateStore.displayName = "GuildReadStateStore";
GuildReadStateStore.LATEST_SNAPSHOT_VERSION = 1;
const guildReadStateStore = new GuildReadStateStore();
let result = size.fileFinishedImporting("stores/GuildReadStateStore.tsx");

export default guildReadStateStore;
