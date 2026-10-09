// Module ID: 16694
// Function ID: 16695
// Name: useGuildMediaState
// Dependencies: [2063, 2069, 2068, 5894, 502, 2064, 2086, 4709, 4719, 2115, 5973, 5112, 1085, 1106, 558, 576, 504, 8638, 4698, 13928, 8496, 11, 5891, 2]

// Module 16694 (useGuildMediaState)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import Constants from "Constants" /* 1085 */;
import ChannelTypes from "ChannelTypes" /* 1106 */;
import ChannelRecord from "ChannelRecord" /* 2068 */;
import BlockedUserUtils from "BlockedUserUtils" /* 13928 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2063 */;
import StageInstanceStore from "StageInstanceStore" /* 2069 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 5894 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2064 */;
import GuildStore from "GuildStore" /* 2086 */;
import PermissionStore from "PermissionStore" /* 4709 */;
import RelationshipStore from "RelationshipStore" /* 4719 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2115 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5973 */;
import VoiceStateStore from "VoiceStateStore" /* 5112 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, blockedOrIgnoredIDs, closure_2, getBasicChannel, guild, obj1, tmp22, voiceChannelId;

function canConnectToChannel(type, arg1) {
  let obj = arg2;
  if (arg2 === undefined) {
    obj = PermissionStore;
  }
  const canBasicChannelResult = null != type && type.type !== ChannelTypes.ChannelTypes.GUILD_STAGE_VOICE && arg1 !== type.id && obj.canBasicChannel(BasicPermissions.VIEW_CHANNEL, type);
  return canBasicChannelResult;
}
const isVoiceChannel = ChannelRecord.isVoiceChannel;
const BasicPermissions = Constants.BasicPermissions;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useGuildMediaState(arg0) {
  let closure_0;
  let first;
  let guildActiveEvent;
  let id;
  let items5;
  let obj5;
  let stateFromStoresArray;
  let tmp13;
  let tmp16;
  let tmp19;
  let tmp6;
  let tmp9;
  _require = arg0;
  let tmp = _require;
  let tmp2 = guildActiveEvent;
  let obj = require("react");
  const cResult = obj.c(25);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let tmp5 = UserGuildSettingsStore;
    let items = [UserGuildSettingsStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function y() {
      return UserGuildSettingsStore.isMuted(closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(tmp2[16]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  const tmpResult5 = tmp(tmp2[17]);
  guildActiveEvent = tmpResult5.useGuildActiveEvent(arg0);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    let tmp10 = stateFromStoresArray;
    const items1 = [stateFromStoresArray, , ];
    let tmp11 = id;
    items1[1] = id;
    let tmp12 = RelationshipStore;
    items1[2] = RelationshipStore;
    cResult[3] = items1;
    tmp9 = items1;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] !== arg0) {
    class E {
      constructor() {
        embeddedActivitiesForGuild = closure_3.getEmbeddedActivitiesForGuild(closure_0);
        return embeddedActivitiesForGuild.filter((location) => {
          getBasicChannel = getBasicChannel.getBasicChannel;
          const obj = closure_1_0(guildActiveEvent[18]);
          const basicChannel = getBasicChannel(obj.getEmbeddedActivityLocationChannelId(location.location));
          let type;
          if (basicChannel != null) {
            type = basicChannel.type;
          }
          if (type === closure_1_0(guildActiveEvent[13]).ChannelTypes.GUILD_SPACE) {
            return false;
          } else {
            blockedOrIgnoredIDs = blockedOrIgnoredIDs.getBlockedOrIgnoredIDs();
            const items = [];
            const hasBlockedOrIgnoredUserIds = closure_1_0(guildActiveEvent[19]).hasBlockedOrIgnoredUserIds;
            closure_1_0(guildActiveEvent[19]);
            HermesBuiltin.arraySpread(items, location.userIds, 0);
            return !hasBlockedOrIgnoredUserIds(items, blockedOrIgnoredIDs);
          }
        });
      }
    }
    cResult[4] = arg0;
    cResult[5] = E;
    tmp13 = E;
  } else {
    class E {
      constructor() {
        embeddedActivitiesForGuild = closure_3.getEmbeddedActivitiesForGuild(closure_0);
        return embeddedActivitiesForGuild.filter((location) => {
          getBasicChannel = getBasicChannel.getBasicChannel;
          const obj = closure_1_0(guildActiveEvent[18]);
          const basicChannel = getBasicChannel(obj.getEmbeddedActivityLocationChannelId(location.location));
          let type;
          if (basicChannel != null) {
            type = basicChannel.type;
          }
          if (type === closure_1_0(guildActiveEvent[13]).ChannelTypes.GUILD_SPACE) {
            return false;
          } else {
            blockedOrIgnoredIDs = blockedOrIgnoredIDs.getBlockedOrIgnoredIDs();
            const items = [];
            const hasBlockedOrIgnoredUserIds = closure_1_0(guildActiveEvent[19]).hasBlockedOrIgnoredUserIds;
            closure_1_0(guildActiveEvent[19]);
            HermesBuiltin.arraySpread(items, location.userIds, 0);
            return !hasBlockedOrIgnoredUserIds(items, blockedOrIgnoredIDs);
          }
        });
      }
    }
  }
  const tmpResult6 = tmp(tmp2[16]);
  stateFromStoresArray = tmpResult6.useStateFromStoresArray(tmp9, tmp13);
  let tmp15;
  if (stateFromStoresArray[0] != null) {
    class E {
      constructor() {
        embeddedActivitiesForGuild = closure_3.getEmbeddedActivitiesForGuild(closure_0);
        return embeddedActivitiesForGuild.filter((location) => {
          getBasicChannel = getBasicChannel.getBasicChannel;
          const obj = closure_1_0(guildActiveEvent[18]);
          const basicChannel = getBasicChannel(obj.getEmbeddedActivityLocationChannelId(location.location));
          let type;
          if (basicChannel != null) {
            type = basicChannel.type;
          }
          if (type === closure_1_0(guildActiveEvent[13]).ChannelTypes.GUILD_SPACE) {
            return false;
          } else {
            blockedOrIgnoredIDs = blockedOrIgnoredIDs.getBlockedOrIgnoredIDs();
            const items = [];
            const hasBlockedOrIgnoredUserIds = closure_1_0(guildActiveEvent[19]).hasBlockedOrIgnoredUserIds;
            closure_1_0(guildActiveEvent[19]);
            HermesBuiltin.arraySpread(items, location.userIds, 0);
            return !hasBlockedOrIgnoredUserIds(items, blockedOrIgnoredIDs);
          }
        });
      }
    }
  }
  if (cResult[6] !== tmp15) {
    class E {
      constructor() {
        embeddedActivitiesForGuild = closure_3.getEmbeddedActivitiesForGuild(closure_0);
        return embeddedActivitiesForGuild.filter((location) => {
          getBasicChannel = getBasicChannel.getBasicChannel;
          const obj = closure_1_0(guildActiveEvent[18]);
          const basicChannel = getBasicChannel(obj.getEmbeddedActivityLocationChannelId(location.location));
          let type;
          if (basicChannel != null) {
            type = basicChannel.type;
          }
          if (type === closure_1_0(guildActiveEvent[13]).ChannelTypes.GUILD_SPACE) {
            return false;
          } else {
            blockedOrIgnoredIDs = blockedOrIgnoredIDs.getBlockedOrIgnoredIDs();
            const items = [];
            const hasBlockedOrIgnoredUserIds = closure_1_0(guildActiveEvent[19]).hasBlockedOrIgnoredUserIds;
            closure_1_0(guildActiveEvent[19]);
            HermesBuiltin.arraySpread(items, location.userIds, 0);
            return !hasBlockedOrIgnoredUserIds(items, blockedOrIgnoredIDs);
          }
        });
      }
    }
    const embeddedActivityLocationChannelId = obj5.getEmbeddedActivityLocationChannelId(tmp15);
    cResult[6] = tmp15;
    cResult[7] = embeddedActivityLocationChannelId;
    tmp16 = embeddedActivityLocationChannelId;
  } else {
    class E {
      constructor() {
        embeddedActivitiesForGuild = closure_3.getEmbeddedActivitiesForGuild(closure_0);
        return embeddedActivitiesForGuild.filter((location) => {
          getBasicChannel = getBasicChannel.getBasicChannel;
          const obj = closure_1_0(guildActiveEvent[18]);
          const basicChannel = getBasicChannel(obj.getEmbeddedActivityLocationChannelId(location.location));
          let type;
          if (basicChannel != null) {
            type = basicChannel.type;
          }
          if (type === closure_1_0(guildActiveEvent[13]).ChannelTypes.GUILD_SPACE) {
            return false;
          } else {
            blockedOrIgnoredIDs = blockedOrIgnoredIDs.getBlockedOrIgnoredIDs();
            const items = [];
            const hasBlockedOrIgnoredUserIds = closure_1_0(guildActiveEvent[19]).hasBlockedOrIgnoredUserIds;
            closure_1_0(guildActiveEvent[19]);
            HermesBuiltin.arraySpread(items, location.userIds, 0);
            return !hasBlockedOrIgnoredUserIds(items, blockedOrIgnoredIDs);
          }
        });
      }
    }
  }
  const tmpResult7 = tmp(tmp2[20]);
  const isActivitiesInTextEnabled = tmpResult7.useIsActivitiesInTextEnabled(tmp16);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    class E {
      constructor() {
        embeddedActivitiesForGuild = closure_3.getEmbeddedActivitiesForGuild(closure_0);
        return embeddedActivitiesForGuild.filter((location) => {
          getBasicChannel = getBasicChannel.getBasicChannel;
          const obj = closure_1_0(guildActiveEvent[18]);
          const basicChannel = getBasicChannel(obj.getEmbeddedActivityLocationChannelId(location.location));
          let type;
          if (basicChannel != null) {
            type = basicChannel.type;
          }
          if (type === closure_1_0(guildActiveEvent[13]).ChannelTypes.GUILD_SPACE) {
            return false;
          } else {
            blockedOrIgnoredIDs = blockedOrIgnoredIDs.getBlockedOrIgnoredIDs();
            const items = [];
            const hasBlockedOrIgnoredUserIds = closure_1_0(guildActiveEvent[19]).hasBlockedOrIgnoredUserIds;
            closure_1_0(guildActiveEvent[19]);
            HermesBuiltin.arraySpread(items, location.userIds, 0);
            return !hasBlockedOrIgnoredUserIds(items, blockedOrIgnoredIDs);
          }
        });
      }
    }
    const items2 = [SelectedChannelStore, , , , , ];
    let tmp20 = VoiceStateStore;
    items2[1] = VoiceStateStore;
    let tmp21 = GuildStore;
    items2[2] = GuildStore;
    items2[3] = PermissionStore;
    items2[4] = id;
    items2[5] = UserGuildSettingsStore;
    cResult[8] = items2;
    tmp19 = items2;
  } else {
    class E {
      constructor() {
        embeddedActivitiesForGuild = closure_3.getEmbeddedActivitiesForGuild(closure_0);
        return embeddedActivitiesForGuild.filter((location) => {
          getBasicChannel = getBasicChannel.getBasicChannel;
          const obj = closure_1_0(guildActiveEvent[18]);
          const basicChannel = getBasicChannel(obj.getEmbeddedActivityLocationChannelId(location.location));
          let type;
          if (basicChannel != null) {
            type = basicChannel.type;
          }
          if (type === closure_1_0(guildActiveEvent[13]).ChannelTypes.GUILD_SPACE) {
            return false;
          } else {
            blockedOrIgnoredIDs = blockedOrIgnoredIDs.getBlockedOrIgnoredIDs();
            const items = [];
            const hasBlockedOrIgnoredUserIds = closure_1_0(guildActiveEvent[19]).hasBlockedOrIgnoredUserIds;
            closure_1_0(guildActiveEvent[19]);
            HermesBuiltin.arraySpread(items, location.userIds, 0);
            return !hasBlockedOrIgnoredUserIds(items, blockedOrIgnoredIDs);
          }
        });
      }
    }
  }
  if (cResult[9] === arg0) {
    class E {
      constructor() {
        embeddedActivitiesForGuild = closure_3.getEmbeddedActivitiesForGuild(closure_0);
        return embeddedActivitiesForGuild.filter((location) => {
          getBasicChannel = getBasicChannel.getBasicChannel;
          const obj = closure_1_0(guildActiveEvent[18]);
          const basicChannel = getBasicChannel(obj.getEmbeddedActivityLocationChannelId(location.location));
          let type;
          if (basicChannel != null) {
            type = basicChannel.type;
          }
          if (type === closure_1_0(guildActiveEvent[13]).ChannelTypes.GUILD_SPACE) {
            return false;
          } else {
            blockedOrIgnoredIDs = blockedOrIgnoredIDs.getBlockedOrIgnoredIDs();
            const items = [];
            const hasBlockedOrIgnoredUserIds = closure_1_0(guildActiveEvent[19]).hasBlockedOrIgnoredUserIds;
            closure_1_0(guildActiveEvent[19]);
            HermesBuiltin.arraySpread(items, location.userIds, 0);
            return !hasBlockedOrIgnoredUserIds(items, blockedOrIgnoredIDs);
          }
        });
      }
    }
    const tmpResult8 = tmp(tmp2[16]);
    const stateFromStoresObject = tmpResult8.useStateFromStoresObject(tmp19, O, items5);
    const guildHasVoice = stateFromStoresObject.guildHasVoice;
    const guildHasVideo = stateFromStoresObject.guildHasVideo;
    const selectedVoiceChannelHasVideo = stateFromStoresObject.selectedVoiceChannelHasVideo;
    const _Symbol = Symbol;
    if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
      class E {
        constructor() {
          embeddedActivitiesForGuild = closure_3.getEmbeddedActivitiesForGuild(closure_0);
          return embeddedActivitiesForGuild.filter((location) => {
            getBasicChannel = getBasicChannel.getBasicChannel;
            const obj = closure_1_0(guildActiveEvent[18]);
            const basicChannel = getBasicChannel(obj.getEmbeddedActivityLocationChannelId(location.location));
            let type;
            if (basicChannel != null) {
              type = basicChannel.type;
            }
            if (type === closure_1_0(guildActiveEvent[13]).ChannelTypes.GUILD_SPACE) {
              return false;
            } else {
              blockedOrIgnoredIDs = blockedOrIgnoredIDs.getBlockedOrIgnoredIDs();
              const items = [];
              const hasBlockedOrIgnoredUserIds = closure_1_0(guildActiveEvent[19]).hasBlockedOrIgnoredUserIds;
              closure_1_0(guildActiveEvent[19]);
              HermesBuiltin.arraySpread(items, location.userIds, 0);
              return !hasBlockedOrIgnoredUserIds(items, blockedOrIgnoredIDs);
            }
          });
        }
      }
      id = selectedVoiceChannelHasVideo.getId();
      cResult[13] = id;
    } else {
      class E {
        constructor() {
          embeddedActivitiesForGuild = closure_3.getEmbeddedActivitiesForGuild(closure_0);
          return embeddedActivitiesForGuild.filter((location) => {
            getBasicChannel = getBasicChannel.getBasicChannel;
            const obj = closure_1_0(guildActiveEvent[18]);
            const basicChannel = getBasicChannel(obj.getEmbeddedActivityLocationChannelId(location.location));
            let type;
            if (basicChannel != null) {
              type = basicChannel.type;
            }
            if (type === closure_1_0(guildActiveEvent[13]).ChannelTypes.GUILD_SPACE) {
              return false;
            } else {
              blockedOrIgnoredIDs = blockedOrIgnoredIDs.getBlockedOrIgnoredIDs();
              const items = [];
              const hasBlockedOrIgnoredUserIds = closure_1_0(guildActiveEvent[19]).hasBlockedOrIgnoredUserIds;
              closure_1_0(guildActiveEvent[19]);
              HermesBuiltin.arraySpread(items, location.userIds, 0);
              return !hasBlockedOrIgnoredUserIds(items, blockedOrIgnoredIDs);
            }
          });
        }
      }
    }
    id = tmp26;
    const _Symbol2 = Symbol;
    if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
      class E {
        constructor() {
          embeddedActivitiesForGuild = closure_3.getEmbeddedActivitiesForGuild(closure_0);
          return embeddedActivitiesForGuild.filter((location) => {
            getBasicChannel = getBasicChannel.getBasicChannel;
            const obj = closure_1_0(guildActiveEvent[18]);
            const basicChannel = getBasicChannel(obj.getEmbeddedActivityLocationChannelId(location.location));
            let type;
            if (basicChannel != null) {
              type = basicChannel.type;
            }
            if (type === closure_1_0(guildActiveEvent[13]).ChannelTypes.GUILD_SPACE) {
              return false;
            } else {
              blockedOrIgnoredIDs = blockedOrIgnoredIDs.getBlockedOrIgnoredIDs();
              const items = [];
              const hasBlockedOrIgnoredUserIds = closure_1_0(guildActiveEvent[19]).hasBlockedOrIgnoredUserIds;
              closure_1_0(guildActiveEvent[19]);
              HermesBuiltin.arraySpread(items, location.userIds, 0);
              return !hasBlockedOrIgnoredUserIds(items, blockedOrIgnoredIDs);
            }
          });
        }
      }
      const items3 = [SelectedChannelStore, id, isActivitiesInTextEnabled, guildHasVideo, PermissionStore, UserGuildSettingsStore];
      cResult[14] = items3;
    } else {
      class E {
        constructor() {
          embeddedActivitiesForGuild = closure_3.getEmbeddedActivitiesForGuild(closure_0);
          return embeddedActivitiesForGuild.filter((location) => {
            getBasicChannel = getBasicChannel.getBasicChannel;
            const obj = closure_1_0(guildActiveEvent[18]);
            const basicChannel = getBasicChannel(obj.getEmbeddedActivityLocationChannelId(location.location));
            let type;
            if (basicChannel != null) {
              type = basicChannel.type;
            }
            if (type === closure_1_0(guildActiveEvent[13]).ChannelTypes.GUILD_SPACE) {
              return false;
            } else {
              blockedOrIgnoredIDs = blockedOrIgnoredIDs.getBlockedOrIgnoredIDs();
              const items = [];
              const hasBlockedOrIgnoredUserIds = closure_1_0(guildActiveEvent[19]).hasBlockedOrIgnoredUserIds;
              closure_1_0(guildActiveEvent[19]);
              HermesBuiltin.arraySpread(items, location.userIds, 0);
              return !hasBlockedOrIgnoredUserIds(items, blockedOrIgnoredIDs);
            }
          });
        }
      }
    }
    if (cResult[15] === stateFromStoresArray) {
      class E {
        constructor() {
          embeddedActivitiesForGuild = closure_3.getEmbeddedActivitiesForGuild(closure_0);
          return embeddedActivitiesForGuild.filter((location) => {
            getBasicChannel = getBasicChannel.getBasicChannel;
            const obj = closure_1_0(guildActiveEvent[18]);
            const basicChannel = getBasicChannel(obj.getEmbeddedActivityLocationChannelId(location.location));
            let type;
            if (basicChannel != null) {
              type = basicChannel.type;
            }
            if (type === closure_1_0(guildActiveEvent[13]).ChannelTypes.GUILD_SPACE) {
              return false;
            } else {
              blockedOrIgnoredIDs = blockedOrIgnoredIDs.getBlockedOrIgnoredIDs();
              const items = [];
              const hasBlockedOrIgnoredUserIds = closure_1_0(guildActiveEvent[19]).hasBlockedOrIgnoredUserIds;
              closure_1_0(guildActiveEvent[19]);
              HermesBuiltin.arraySpread(items, location.userIds, 0);
              return !hasBlockedOrIgnoredUserIds(items, blockedOrIgnoredIDs);
            }
          });
        }
      }
    }
    class W {
      constructor() {
        voiceChannelId = closure_12.getVoiceChannelId();
        obj = closure_8;
        channel = closure_8.getChannel(voiceChannelId);
        guild_id = undefined;
        if (channel != null) {
          guild_id = channel.guild_id;
        }
        tmp4 = closure_0;
        tmp5 = guild_id === closure_0;
        if (!tmp5) {
          tmp6 = closure_1;
          if (tmp6) {
            return { audio: false, video: false, screenshare: false, liveStage: false, activeEvent: false, activity: false, isCurrentUserConnected: false };
          }
        }
        tmp7 = closure_2;
        obj2 = closure_1(closure_2[21]);
        keys = obj2.keys(closure_4.getStageInstancesByGuild(tmp4));
        tmp9 = tmp5;
        someResult = keys.some((item) => {
          basicChannel = basicChannel.getBasicChannel(item);
          const tmp2 = null != basicChannel && stateFromStores(guildActiveEvent[22])(basicChannel, closure_1_10);
          return tmp2;
        });
        if (tmp5) {
          channel1 = obj.getChannel(voiceChannelId);
          flag = undefined;
          if (channel1 != null) {
            flag = channel1.isGuildStageVoice();
          }
          if (flag == null) {
            flag = false;
          }
          tmp9 = flag;
        }
        tmp10 = tmp5;
        if (tmp10) {
          tmp11 = closure_6;
          tmp12 = closure_8;
          tmp10 = null != closure_6.getActiveStreamForUser(closure_8, tmp4);
        }
        obj5 = closure_0(tmp7[19]);
        result = obj5.filterOutStreamsByBlockedOwner(closure_6.getAllApplicationStreams());
        someResult1 = result.some((guildId) => {
          const tmp2 = guildId.guildId === closure_1_0 && !UserGuildSettingsStore.isChannelMuted(tmp, guildId.channelId);
          return tmp2;
        });
        tmp14 = (() => {
          if (isActivitiesInTextEnabled) {
            return stateFromStoresArray.length > 0;
          } else {
            const obj = stateFromStoresArray[Symbol.iterator]();
            while (obj !== undefined) {
              let getChannel = id.getChannel;
              let obj2 = closure_0(guildActiveEvent[18]);
              let channel = getChannel(obj2.getEmbeddedActivityLocationChannelId(tmp4.location));
              if (null != channel) {
                if (guildHasVoice(tmp10.type)) {
                  obj.return();
                  let flag = true;
                  return true;
                }
              }
              continue;
            }
            return false;
          }
        })();
        if (tmp5) {
          channel_id = undefined;
          if (closure_2 != null) {
            channel_id = closure_2.channel_id;
          }
          tmp22 = tmp5 && closure_7;
          tmp17 = channel_id === voiceChannelId;
          flag2 = true;
          tmp18 = tmp22;
          tmp14 = tmp15;
          tmp19 = tmp10;
          tmp20 = tmp9;
        } else {
          flag2 = guildHasVoice;
          tmp16 = closure_2;
          tmp17 = null != closure_2;
          tmp18 = guildHasVideo;
          tmp19 = someResult1;
          tmp20 = someResult;
        }
        obj1 = { audio: flag2, video: tmp18, screenshare: tmp19, liveStage: tmp20, activeEvent: tmp17, activity: tmp14, isCurrentUserConnected: null };
        if (!tmp5) {
          tmp5 = tmp9;
        }
        obj1.isCurrentUserConnected = tmp5;
        return obj1;
      }
    }
    const items4 = [arg0, stateFromStores, selectedVoiceChannelHasVideo, tmp26, isActivitiesInTextEnabled, stateFromStoresArray, guildActiveEvent, guildHasVoice, guildHasVideo];
    cResult[15] = stateFromStoresArray;
    cResult[16] = guildActiveEvent;
    cResult[17] = guildHasVideo;
    cResult[18] = guildHasVoice;
    cResult[19] = arg0;
    class O {
      constructor() {
        voiceChannelId = closure_1_12.getVoiceChannelId();
        tmp3 = afkChannelId;
        guild = closure_1_9.getGuild(afkChannelId);
        afkChannelId = undefined;
        if (guild != null) {
          afkChannelId = guild.afkChannelId;
        }
        closure_1 = closure_1_14.getUsersWithVideo(tmp3);
        obj = closure_0(closure_2[19]);
        result = obj.filterBlockedUsersFromVoiceStates(closure_1_14.getVoiceStates(tmp3));
        closure_2 = result;
        flag = false;
        if (!closure_1) {
          tmp7 = result;
          flag = false;
          keys = Object.keys();
          if (keys !== undefined) {
            flag = false;
            tmp9 = keys[tmp];
            while (tmp9 !== undefined) {
              tmp21 = tmp9;
              channelId = result[tmp9].channelId;
              if (null == channelId) {
                continue;
              } else {
                tmp10 = closure_8;
                basicChannel = closure_8.getBasicChannel(channelId);
                tmp12 = afkChannelId;
                obj2 = closure_1_10;
                if (closure_1_10 !== undefined) {
                  canBasicChannelResult = null != basicChannel;
                  if (canBasicChannelResult) {
                    tmp14 = closure_0;
                    tmp15 = closure_2;
                    canBasicChannelResult = basicChannel.type !== closure_0(closure_2[13]).ChannelTypes.GUILD_STAGE_VOICE;
                  }
                  if (canBasicChannelResult) {
                    canBasicChannelResult = tmp12 !== basicChannel.id;
                  }
                  if (canBasicChannelResult) {
                    tmp16 = closure_1_15;
                    canBasicChannelResult = obj2.canBasicChannel(closure_1_15.VIEW_CHANNEL, basicChannel);
                  }
                  if (!canBasicChannelResult) {
                    continue;
                  } else {
                    tmp17 = closure_1_13;
                    tmp18 = afkChannelId;
                    flag = true;
                    if (!closure_1_13.isChannelMuted(afkChannelId, channelId)) {
                      break;
                    }
                  }
                  continue;
                }
              }
              continue;
            }
          }
        }
        obj1 = {
          guildHasVoice: flag,
          guildHasVideo: (() => {
                  const tmp = stateFromStores;
                  if (tmp) {
                    return false;
                  } else {
                    const obj = closure_1[Symbol.iterator]();
                    while (obj !== undefined) {
                      let tmp9 = result[tmp6];
                      let channelId;
                      if (tmp9 != null) {
                        channelId = tmp9.channelId;
                      }
                      let tmp11 = channelId;
                      if (null != channelId) {
                        let tmp12 = canConnectToChannel;
                        let tmp16 = afkChannelId;
                        let basicChannel = ChannelStore.getBasicChannel(tmp11);
                        if (tmp12(basicChannel, tmp16, PermissionStore)) {
                          if (!UserGuildSettingsStore.isChannelMuted(closure_0, tmp11)) {
                            obj.return();
                            let flag = true;
                            return true;
                          }
                        }
                      }
                      continue;
                    }
                    return false;
                  }
                })(),
          selectedVoiceChannelHasVideo: null
        };
        hasVideoResult = null != voiceChannelId;
        if (hasVideoResult) {
          tmp20 = closure_1_14;
          hasVideoResult = closure_1_14.hasVideo(voiceChannelId);
        }
        obj1.selectedVoiceChannelHasVideo = hasVideoResult;
        return obj1;
      }
    }
    cResult[21] = stateFromStores;
    cResult[22] = selectedVoiceChannelHasVideo;
    cResult[23] = W;
    cResult[24] = items4;
  }
  class O {
    constructor() {
      voiceChannelId = closure_1_12.getVoiceChannelId();
      tmp3 = afkChannelId;
      guild = closure_1_9.getGuild(afkChannelId);
      afkChannelId = undefined;
      if (guild != null) {
        afkChannelId = guild.afkChannelId;
      }
      closure_1 = closure_1_14.getUsersWithVideo(tmp3);
      obj = closure_0(closure_2[19]);
      result = obj.filterBlockedUsersFromVoiceStates(closure_1_14.getVoiceStates(tmp3));
      closure_2 = result;
      flag = false;
      if (!closure_1) {
        tmp7 = result;
        flag = false;
        keys = Object.keys();
        if (keys !== undefined) {
          flag = false;
          tmp9 = keys[tmp];
          while (tmp9 !== undefined) {
            tmp21 = tmp9;
            channelId = result[tmp9].channelId;
            if (null == channelId) {
              continue;
            } else {
              tmp10 = closure_8;
              basicChannel = closure_8.getBasicChannel(channelId);
              tmp12 = afkChannelId;
              obj2 = closure_1_10;
              if (closure_1_10 !== undefined) {
                canBasicChannelResult = null != basicChannel;
                if (canBasicChannelResult) {
                  tmp14 = closure_0;
                  tmp15 = closure_2;
                  canBasicChannelResult = basicChannel.type !== closure_0(closure_2[13]).ChannelTypes.GUILD_STAGE_VOICE;
                }
                if (canBasicChannelResult) {
                  canBasicChannelResult = tmp12 !== basicChannel.id;
                }
                if (canBasicChannelResult) {
                  tmp16 = closure_1_15;
                  canBasicChannelResult = obj2.canBasicChannel(closure_1_15.VIEW_CHANNEL, basicChannel);
                }
                if (!canBasicChannelResult) {
                  continue;
                } else {
                  tmp17 = closure_1_13;
                  tmp18 = afkChannelId;
                  flag = true;
                  if (!closure_1_13.isChannelMuted(afkChannelId, channelId)) {
                    break;
                  }
                }
                continue;
              }
            }
            continue;
          }
        }
      }
      obj1 = {
        guildHasVoice: flag,
        guildHasVideo: (() => {
              const tmp = stateFromStores;
              if (tmp) {
                return false;
              } else {
                const obj = closure_1[Symbol.iterator]();
                while (obj !== undefined) {
                  let tmp9 = result[tmp6];
                  let channelId;
                  if (tmp9 != null) {
                    channelId = tmp9.channelId;
                  }
                  let tmp11 = channelId;
                  if (null != channelId) {
                    let tmp12 = canConnectToChannel;
                    let tmp16 = afkChannelId;
                    let basicChannel = ChannelStore.getBasicChannel(tmp11);
                    if (tmp12(basicChannel, tmp16, PermissionStore)) {
                      if (!UserGuildSettingsStore.isChannelMuted(closure_0, tmp11)) {
                        obj.return();
                        let flag = true;
                        return true;
                      }
                    }
                  }
                  continue;
                }
                return false;
              }
            })(),
        selectedVoiceChannelHasVideo: null
      };
      hasVideoResult = null != voiceChannelId;
      if (hasVideoResult) {
        tmp20 = closure_1_14;
        hasVideoResult = closure_1_14.hasVideo(voiceChannelId);
      }
      obj1.selectedVoiceChannelHasVideo = hasVideoResult;
      return obj1;
    }
  }
  items5 = [arg0, stateFromStores];
  cResult[9] = arg0;
  cResult[10] = stateFromStores;
  cResult[11] = O;
  cResult[12] = items5;
}) : (function useGuildMediaState(arg0) {
  let closure_0;
  let guildActiveEvent;
  let id;
  let stateFromStoresArray;
  _require = arg0;
  let tmp = _require;
  let tmp2 = guildActiveEvent;
  let obj = require("get initialized");
  const tmp3 = UserGuildSettingsStore;
  let items = [UserGuildSettingsStore];
  const stateFromStores = obj.useStateFromStores(items, () => UserGuildSettingsStore.isMuted(closure_0));
  let obj2 = require("useGuildScheduledEvents");
  guildActiveEvent = obj2.useGuildActiveEvent(arg0);
  let obj3 = require("get initialized");
  const items1 = [stateFromStoresArray, , ];
  let tmp6 = id;
  items1[1] = id;
  items1[2] = RelationshipStore;
  stateFromStoresArray = obj3.useStateFromStoresArray(items1, () => {
    const embeddedActivitiesForGuild = EmbeddedActivitiesStore.getEmbeddedActivitiesForGuild(closure_0);
    return embeddedActivitiesForGuild.filter((location) => {
      getBasicChannel = getBasicChannel.getBasicChannel;
      const obj = closure_1_0(guildActiveEvent[18]);
      const basicChannel = getBasicChannel(obj.getEmbeddedActivityLocationChannelId(location.location));
      let type;
      if (basicChannel != null) {
        type = basicChannel.type;
      }
      if (type === closure_1_0(guildActiveEvent[13]).ChannelTypes.GUILD_SPACE) {
        return false;
      } else {
        blockedOrIgnoredIDs = blockedOrIgnoredIDs.getBlockedOrIgnoredIDs();
        const items = [];
        const hasBlockedOrIgnoredUserIds = closure_1_0(guildActiveEvent[19]).hasBlockedOrIgnoredUserIds;
        closure_1_0(guildActiveEvent[19]);
        HermesBuiltin.arraySpread(items, location.userIds, 0);
        return !hasBlockedOrIgnoredUserIds(items, blockedOrIgnoredIDs);
      }
    });
  });
  let tmp8 = require("embeddedActivityLocationUtils");
  const first = stateFromStoresArray[0];
  let _location;
  const getEmbeddedActivityLocationChannelId = tmp8.getEmbeddedActivityLocationChannelId;
  if (first != null) {
    _location = first.location;
  }
  const embeddedActivityLocationChannelId = getEmbeddedActivityLocationChannelId(_location);
  const tmpResult = tmp(tmp2[20]);
  const isActivitiesInTextEnabled = tmpResult.useIsActivitiesInTextEnabled(embeddedActivityLocationChannelId);
  const items2 = [SelectedChannelStore, VoiceStateStore, GuildStore, PermissionStore, tmp6, tmp3];
  const items3 = [arg0, stateFromStores];
  const tmpResult3 = tmp(tmp2[16]);
  const stateFromStoresObject = tmpResult3.useStateFromStoresObject(items2, () => {
    let afkChannelId;
    let closure_1;
    let hasVideoResult;
    let tmp;
    voiceChannelId = voiceChannelId.getVoiceChannelId();
    guild = guild.getGuild(afkChannelId);
    afkChannelId = undefined;
    if (guild != null) {
      afkChannelId = guild.afkChannelId;
    }
    const usersWithVideo = authStore.getUsersWithVideo(tmp3);
    let obj = closure_0(guildActiveEvent[19]);
    const result = obj.filterBlockedUsersFromVoiceStates(authStore.getVoiceStates(tmp3));
    guildActiveEvent = result;
    let flag = false;
    if (!usersWithVideo) {
      flag = false;
      const keys = Object.keys();
      if (keys !== undefined) {
        flag = false;
        let tmp9 = keys[tmp];
        while (tmp9 !== undefined) {
          let tmp21 = tmp9;
          let channelId = result[tmp9].channelId;
          if (null == channelId) {
            continue;
          } else {
            let basicChannel = id.getBasicChannel(channelId);
            let tmp12 = afkChannelId;
            let obj2 = PermissionStore;
            if (PermissionStore !== undefined) {
              let canBasicChannelResult = null != basicChannel;
              if (canBasicChannelResult) {
                let tmp14 = closure_0;
                canBasicChannelResult = basicChannel.type !== closure_0(guildActiveEvent[13]).ChannelTypes.GUILD_STAGE_VOICE;
              }
              if (canBasicChannelResult) {
                canBasicChannelResult = tmp12 !== basicChannel.id;
              }
              if (canBasicChannelResult) {
                let tmp16 = constants;
                canBasicChannelResult = obj2.canBasicChannel(constants.VIEW_CHANNEL, basicChannel);
              }
              if (!canBasicChannelResult) {
                continue;
              } else {
                let tmp17 = UserGuildSettingsStore;
                let tmp18 = afkChannelId;
                flag = true;
                if (!UserGuildSettingsStore.isChannelMuted(afkChannelId, channelId)) {
                  break;
                }
              }
              continue;
            }
          }
          continue;
        }
      }
    }
    const obj3 = {
      guildHasVoice: flag,
      guildHasVideo: (() => {
        const tmp = stateFromStores;
        if (tmp) {
          return false;
        } else {
          const obj = closure_1[Symbol.iterator]();
          while (obj !== undefined) {
            let tmp9 = result[tmp6];
            let channelId;
            if (tmp9 != null) {
              channelId = tmp9.channelId;
            }
            let tmp11 = channelId;
            if (null != channelId) {
              let tmp12 = canConnectToChannel;
              let tmp16 = afkChannelId;
              let basicChannel = ChannelStore.getBasicChannel(tmp11);
              if (tmp12(basicChannel, tmp16, PermissionStore)) {
                if (!UserGuildSettingsStore.isChannelMuted(closure_0, tmp11)) {
                  obj.return();
                  let flag = true;
                  return true;
                }
              }
            }
            continue;
          }
          return false;
        }
      })(),
      selectedVoiceChannelHasVideo: hasVideoResult
    };
    hasVideoResult = null != voiceChannelId;
    if (hasVideoResult) {
      let tmp20 = authStore;
      hasVideoResult = authStore.hasVideo(voiceChannelId);
    }
    return obj3;
  }, items3);
  const guildHasVoice = stateFromStoresObject.guildHasVoice;
  const guildHasVideo = stateFromStoresObject.guildHasVideo;
  const selectedVoiceChannelHasVideo = stateFromStoresObject.selectedVoiceChannelHasVideo;
  id = selectedVoiceChannelHasVideo.getId();
  const items4 = [SelectedChannelStore, tmp6, isActivitiesInTextEnabled, guildHasVideo, PermissionStore, tmp3];
  const items5 = [arg0, stateFromStores, selectedVoiceChannelHasVideo, id, isActivitiesInTextEnabled, stateFromStoresArray, guildActiveEvent, guildHasVoice, guildHasVideo];
  const tmpResult4 = tmp(tmp2[16]);
  return tmpResult4.useStateFromStoresObject(items4, () => {
    let flag2;
    let tmp17;
    let tmp18;
    let tmp19;
    let tmp20;
    voiceChannelId = SelectedChannelStore.getVoiceChannelId();
    let obj = ChannelStore;
    let channel = ChannelStore.getChannel(voiceChannelId);
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    const tmp4 = closure_0;
    let tmp5 = guild_id === closure_0;
    if (!tmp5) {
      let tmp6 = stateFromStores;
      if (tmp6) {
        return { audio: false, video: false, screenshare: false, liveStage: false, activeEvent: false, activity: false, isCurrentUserConnected: false };
      }
    }
    let tmp7 = dependencyMap;
    let obj2 = SnowflakeUtilsDefault;
    const keys = obj2.keys(StageInstanceStore.getStageInstancesByGuild(tmp4));
    let tmp9 = tmp5;
    const someResult = keys.some((item) => {
      basicChannel = basicChannel.getBasicChannel(item);
      const tmp2 = null != basicChannel && stateFromStores(guildActiveEvent[22])(basicChannel, closure_1_10);
      return tmp2;
    });
    if (tmp5) {
      const channel1 = obj.getChannel(voiceChannelId);
      let flag;
      if (channel1 != null) {
        flag = channel1.isGuildStageVoice();
      }
      if (flag == null) {
        flag = false;
      }
      tmp9 = flag;
    }
    let tmp10 = tmp5;
    if (tmp10) {
      let tmp11 = ApplicationStreamingStore;
      let tmp12 = id;
      tmp10 = null != ApplicationStreamingStore.getActiveStreamForUser(id, tmp4);
    }
    const obj5 = BlockedUserUtils;
    const result = obj5.filterOutStreamsByBlockedOwner(ApplicationStreamingStore.getAllApplicationStreams());
    const someResult1 = result.some((guildId) => {
      const tmp2 = guildId.guildId === closure_1_0 && !UserGuildSettingsStore.isChannelMuted(tmp, guildId.channelId);
      return tmp2;
    });
    let tmp14 = (() => {
      if (isActivitiesInTextEnabled) {
        return stateFromStoresArray.length > 0;
      } else {
        const obj = stateFromStoresArray[Symbol.iterator]();
        while (obj !== undefined) {
          let getChannel = id.getChannel;
          let obj2 = closure_0(guildActiveEvent[18]);
          let channel = getChannel(obj2.getEmbeddedActivityLocationChannelId(tmp4.location));
          if (null != channel) {
            if (guildHasVoice(tmp10.type)) {
              obj.return();
              let flag = true;
              return true;
            }
          }
          continue;
        }
        return false;
      }
    })();
    if (tmp5) {
      let channel_id;
      if (guildActiveEvent != null) {
        channel_id = guildActiveEvent.channel_id;
      }
      tmp17 = channel_id === voiceChannelId;
      flag2 = true;
      tmp18 = tmp5 && selectedVoiceChannelHasVideo;
      tmp14 = tmp15;
      tmp19 = tmp10;
      tmp20 = tmp9;
    } else {
      flag2 = guildHasVoice;
      tmp17 = null != guildActiveEvent;
      tmp18 = guildHasVideo;
      tmp19 = someResult1;
      tmp20 = someResult;
    }
    const obj3 = { audio: flag2, video: tmp18, screenshare: tmp19, liveStage: tmp20, activeEvent: tmp17, activity: tmp14, isCurrentUserConnected: tmp5 };
    if (!tmp5) {
      tmp5 = tmp9;
    }
    return obj3;
  }, items5);
});
let result = size.fileFinishedImporting("modules/guilds_bar/useGuildMediaState.tsx");

export default tmp2;
