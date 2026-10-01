// Module ID: 15967
// Function ID: 15968
// Name: useGuildMediaState
// Dependencies: [2044, 2050, 2049, 4858, 502, 2045, 2067, 4469, 4479, 2099, 5017, 4855, 1074, 1095, 504, 13253, 8943, 4458, 13254, 8789, 11, 5728, 2]
// Exports: default

// Module 15967 (useGuildMediaState)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import Constants from "Constants" /* 1074 */;
import ChannelTypes from "ChannelTypes" /* 1095 */;
import ChannelRecord from "ChannelRecord" /* 2049 */;
import BlockedUserUtils from "BlockedUserUtils" /* 13254 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2044 */;
import StageInstanceStore from "StageInstanceStore" /* 2050 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4858 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildStore from "GuildStore" /* 2067 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import RelationshipStore from "RelationshipStore" /* 4479 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2099 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5017 */;
import VoiceStateStore from "VoiceStateStore" /* 4855 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, blockedOrIgnoredIDs, getBasicChannel, voiceChannelId;

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
let result = size.fileFinishedImporting("modules/guilds_bar/useGuildMediaState.tsx");

export default function useGuildMediaState(guild_id) {
  let id;
  let isDontBadgeMutedVcsEnabled;
  let selectedVoiceChannelHasVideo;
  _require = guild_id;
  let tmp = _require;
  let tmp2 = isDontBadgeMutedVcsEnabled;
  let obj = require("get initialized");
  const tmp3 = UserGuildSettingsStore;
  let items = [UserGuildSettingsStore];
  const stateFromStores = obj.useStateFromStores(items, () => UserGuildSettingsStore.isMuted(guild_id));
  let obj2 = require("DontBadgeMutedVcsExperiment");
  isDontBadgeMutedVcsEnabled = obj2.useIsDontBadgeMutedVcsEnabled("useGuildMediaState");
  let obj3 = require("useGuildScheduledEvents");
  const guildActiveEvent = obj3.useGuildActiveEvent(guild_id);
  const items1 = [guildActiveEvent, , ];
  let tmp7 = selectedVoiceChannelHasVideo;
  items1[1] = selectedVoiceChannelHasVideo;
  items1[2] = RelationshipStore;
  const obj4 = require("get initialized");
  const stateFromStoresArray = obj4.useStateFromStoresArray(items1, () => {
    const embeddedActivitiesForGuild = EmbeddedActivitiesStore.getEmbeddedActivitiesForGuild(guild_id);
    return embeddedActivitiesForGuild.filter((location) => {
      getBasicChannel = getBasicChannel.getBasicChannel;
      const obj = guild_id(isDontBadgeMutedVcsEnabled[17]);
      const basicChannel = getBasicChannel(obj.getEmbeddedActivityLocationChannelId(location.location));
      let type;
      if (basicChannel != null) {
        type = basicChannel.type;
      }
      if (type === guild_id(isDontBadgeMutedVcsEnabled[13]).ChannelTypes.GUILD_SPACE) {
        return false;
      } else {
        blockedOrIgnoredIDs = blockedOrIgnoredIDs.getBlockedOrIgnoredIDs();
        const items = [];
        const hasBlockedOrIgnoredUserIds = guild_id(isDontBadgeMutedVcsEnabled[18]).hasBlockedOrIgnoredUserIds;
        guild_id(isDontBadgeMutedVcsEnabled[18]);
        HermesBuiltin.arraySpread(items, location.userIds, 0);
        return !hasBlockedOrIgnoredUserIds(items, blockedOrIgnoredIDs);
      }
    });
  });
  let tmp9 = require("embeddedActivityLocationUtils");
  const first = stateFromStoresArray[0];
  let _location;
  const getEmbeddedActivityLocationChannelId = tmp9.getEmbeddedActivityLocationChannelId;
  if (first != null) {
    _location = first.location;
  }
  const embeddedActivityLocationChannelId = getEmbeddedActivityLocationChannelId(_location);
  const tmpResult = tmp(tmp2[19]);
  const isActivitiesInTextEnabled = tmpResult.useIsActivitiesInTextEnabled(embeddedActivityLocationChannelId);
  const items2 = [SelectedChannelStore, VoiceStateStore, id, PermissionStore, tmp7, tmp3];
  const items3 = [guild_id, stateFromStores, isDontBadgeMutedVcsEnabled];
  const tmpResult3 = tmp(tmp2[14]);
  const stateFromStoresObject = tmpResult3.useStateFromStoresObject(items2, () => {
    let afkChannelId;
    let closure_1;
    let hasVideoResult;
    let tmp;
    voiceChannelId = voiceChannelId.getVoiceChannelId();
    const guild = id.getGuild(afkChannelId);
    afkChannelId = undefined;
    if (guild != null) {
      afkChannelId = guild.afkChannelId;
    }
    const usersWithVideo = authStore.getUsersWithVideo(tmp3);
    let obj = guild_id(isDontBadgeMutedVcsEnabled[18]);
    const result = obj.filterBlockedUsersFromVoiceStates(authStore.getVoiceStates(tmp3));
    isDontBadgeMutedVcsEnabled = result;
    let flag = false;
    if (!usersWithVideo) {
      flag = false;
      const keys = Object.keys();
      if (keys !== undefined) {
        flag = false;
        let tmp9 = keys[tmp];
        while (tmp9 !== undefined) {
          let tmp22 = tmp9;
          let channelId = result[tmp9].channelId;
          if (null == channelId) {
            continue;
          } else {
            let basicChannel = selectedVoiceChannelHasVideo.getBasicChannel(channelId);
            let tmp12 = afkChannelId;
            let obj2 = PermissionStore;
            if (PermissionStore !== undefined) {
              let canBasicChannelResult = null != basicChannel;
              if (canBasicChannelResult) {
                let tmp14 = guild_id;
                canBasicChannelResult = basicChannel.type !== guild_id(isDontBadgeMutedVcsEnabled[13]).ChannelTypes.GUILD_STAGE_VOICE;
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
                let tmp17 = isDontBadgeMutedVcsEnabled;
                flag = true;
                if (!isDontBadgeMutedVcsEnabled) {
                  break;
                } else {
                  let tmp18 = UserGuildSettingsStore;
                  let tmp19 = afkChannelId;
                  flag = true;
                  if (!UserGuildSettingsStore.isGuildOrCategoryOrChannelMuted(afkChannelId, channelId)) {
                    break;
                  }
                }
              }
              break;
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
                let tmp18 = isDontBadgeMutedVcsEnabled;
                obj.return();
                let flag = true;
                return true;
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
      let tmp21 = authStore;
      hasVideoResult = authStore.hasVideo(voiceChannelId);
    }
    return obj3;
  }, items3);
  const guildHasVoice = stateFromStoresObject.guildHasVoice;
  const guildHasVideo = stateFromStoresObject.guildHasVideo;
  selectedVoiceChannelHasVideo = stateFromStoresObject.selectedVoiceChannelHasVideo;
  id = guildHasVideo.getId();
  const items4 = [SelectedChannelStore, tmp7, stateFromStoresArray, guildHasVoice, PermissionStore, tmp3];
  const items5 = [guild_id, stateFromStores, selectedVoiceChannelHasVideo, id, isActivitiesInTextEnabled, stateFromStoresArray, guildActiveEvent, guildHasVoice, guildHasVideo, isDontBadgeMutedVcsEnabled];
  const tmpResult4 = tmp(tmp2[14]);
  return tmpResult4.useStateFromStoresObject(items4, () => {
    let flag2;
    let tmp17;
    let tmp18;
    let tmp19;
    let tmp20;
    voiceChannelId = SelectedChannelStore.getVoiceChannelId();
    let obj = ChannelStore;
    let channel = ChannelStore.getChannel(voiceChannelId);
    guild_id = undefined;
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
      const tmp2 = null != basicChannel && stateFromStores(isDontBadgeMutedVcsEnabled[21])(basicChannel, closure_1_10);
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
    let result = obj5.filterOutStreamsByBlockedOwner(ApplicationStreamingStore.getAllApplicationStreams());
    const someResult1 = result.some((guildId) => {
      let tmp2 = guildId.guildId !== guild_id;
      if (!tmp2) {
        const result = isDontBadgeMutedVcsEnabled && UserGuildSettingsStore.isGuildOrCategoryOrChannelMuted(tmp, guildId.channelId);
        tmp2 = result;
      }
      return !tmp2;
    });
    let tmp14 = (() => {
      if (closure_1_5) {
        return stateFromStoresArray.length > 0;
      } else {
        const obj = stateFromStoresArray[Symbol.iterator]();
        while (obj !== undefined) {
          let getChannel = selectedVoiceChannelHasVideo.getChannel;
          let obj2 = guild_id(isDontBadgeMutedVcsEnabled[17]);
          let channel = getChannel(obj2.getEmbeddedActivityLocationChannelId(tmp4.location));
          if (null != channel) {
            if (isActivitiesInTextEnabled(tmp10.type)) {
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
};
