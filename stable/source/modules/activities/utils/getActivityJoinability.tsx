// Module ID: 14352
// Function ID: 14353
// Name: getActivityJoinability
// Dependencies: [1087, 11387, 11384, 11388, 5658, 11487, 11418, 7441, 14353, 1384, 11381, 11382, 11383, 2]
// Exports: default

// Module 14352 (getActivityJoinability)
import PlatformUtils from "PlatformUtils" /* 1384 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5658 */;
import hasFlagDefault from "hasFlag" /* 7441 */;
import _slicedToArray from "_slicedToArray" /* 11381 */;
import hasPartySize from "hasPartySize" /* 11382 */;
import isPartyFull from "isPartyFull" /* 11383 */;
import getIsInParty from "getIsInParty" /* 11384 */;
import getCurrentUserPresenceActivityDefault from "getCurrentUserPresenceActivity" /* 11387 */;
import getFrameSurfaces from "getFrameSurfaces" /* 11388 */;
import useIsActivitiesEnabledForCurrentPlatform from "useIsActivitiesEnabledForCurrentPlatform" /* 11418 */;
import getEmbeddedActivityJoinability from "getEmbeddedActivityJoinability" /* 11487 */;
import isActivityJoinableOnCurrentPlatformDefault from "isActivityJoinableOnCurrentPlatform" /* 14353 */;
import Constants from "Constants" /* 1087 */;
import size from "module_2" /* 2 */;

const getEmbeddedActivityJoinabilityDefault = getEmbeddedActivityJoinability;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
({ ActivityFlags: c3, ChannelTypes: closure_4, GuildFeatures: hasOwnProperty, Permissions: metroRequire } = Constants);
const ActivityJoinability = { CAN_JOIN: "can_join", CANNOT_JOIN: "cannot_join", JOINED: "joined" };
const result = size.fileFinishedImporting("modules/activities/utils/getActivityJoinability.tsx");

export default function getActivityJoinability(arg0) {
  let ChannelStore;
  let EmbeddedActivitiesStore;
  let GuildMemberCountStore;
  let GuildStore;
  let PermissionStore;
  let RelationshipStore;
  let SelectedChannelStore;
  let VoiceStateStore;
  let activity;
  let application;
  let channelId;
  let isEmbedded;
  let obj;
  let tmp51Result7;
  let user;
  ({ user, activity, application, channelId, isEmbedded, ChannelStore, GuildStore, GuildMemberCountStore, RelationshipStore, SelectedChannelStore, VoiceStateStore, PermissionStore, EmbeddedActivitiesStore } = arg0);
  if (isEmbedded) {
    if (isEmbedded) {
      const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
      let tmp15 = null != currentEmbeddedActivity;
      if (tmp15) {
        let application_id;
        const applicationId = currentEmbeddedActivity.applicationId;
        if (activity != null) {
          application_id = activity.application_id;
        }
        tmp15 = applicationId === application_id;
      }
    }
    if (null == user) {
      return obj.CANNOT_JOIN;
    } else {
      const obj10 = getFrameSurfaces;
      const frameSurfaces = obj10.getFrameSurfaces(application);
      if (isEmbedded) {
        if (null != application) {
          if (frameSurfaces.has(EmbeddedSurfaceType.EmbeddedSurfaceType.VOICE_CHANNEL)) {
            if (!frameSurfaces.has(EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN)) {
              if (!frameSurfaces.has(EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL)) {
                const voiceStateForUser = VoiceStateStore.getVoiceStateForUser(user.id);
                let channelId1;
                if (voiceStateForUser != null) {
                  channelId1 = voiceStateForUser.channelId;
                }
                let flag = false;
                if (null != channelId1) {
                  const channel = ChannelStore.getChannel(channelId1);
                  let tmp21 = null == channel;
                  if (!tmp21) {
                    tmp21 = channel.type === constants2.GUILD_VOICE && channel.application_id === application.id && PermissionStore.can(metroRequire.CONNECT, channel);
                    const canResult = channel.type === constants2.GUILD_VOICE && channel.application_id === application.id && PermissionStore.can(metroRequire.CONNECT, channel);
                  }
                  flag = tmp21;
                }
                if (!flag) {
                  return obj.CANNOT_JOIN;
                }
              }
            }
          }
        }
      }
      if (isEmbedded) {
        if (null != channelId) {
          const tmp51Result = getFrameSurfaces;
          if (!tmp51Result.isFrameApp(application)) {
            let CANNOT_JOIN;
            const obj2 = { userId: user.id, activity, channelId, currentUser: tmp, application, isContentGated: tmp2, isActivitiesEnabledForCurrentPlatform: tmp51Result7.getIsActivitiesEnabledForCurrentPlatform(), ChannelStore, VoiceStateStore, PermissionStore, GuildStore };
            const tmp27 = getEmbeddedActivityJoinabilityDefault;
            tmp51Result7 = useIsActivitiesEnabledForCurrentPlatform;
            const tmp27Result = tmp27(obj2);
            if (tmp27Result === getEmbeddedActivityJoinability.EmbeddedActivityJoinability.CAN_JOIN) {
              CANNOT_JOIN = obj.CAN_JOIN;
            } else {
              CANNOT_JOIN = obj.CANNOT_JOIN;
            }
            return CANNOT_JOIN;
          }
        }
      }
      if (isEmbedded) {
        if (null == channelId) {
          if (!hasFlagDefault(activity, constants.CONTEXTLESS)) {
            const tmp51Result8 = getFrameSurfaces;
            if (!tmp51Result8.isFrameApp(application)) {
              return obj.CANNOT_JOIN;
            }
          }
        }
      }
      if (!isEmbedded) {
        if (isActivityJoinableOnCurrentPlatformDefault(activity)) {
          PlatformUtils;
        }
        return obj.CANNOT_JOIN;
      }
      const tmp51Result10 = _slicedToArray;
      const partySize = tmp51Result10.getPartySize(activity);
      const tmp51Result11 = hasPartySize;
      if (tmp51Result11.hasPartySize(partySize)) {
        const tmp51Result12 = isPartyFull;
        if (!tmp51Result12.isPartyFull(partySize)) {
          const tmp37 = importDefault;
          const tmp38 = constants;
          if (hasFlagDefault(activity, constants.PARTY_PRIVACY_FRIENDS)) {
            if (RelationshipStore.isFriend(user.id)) {
              return obj.CAN_JOIN;
            }
          }
          if (tmp37(7441)(activity, tmp38.PARTY_PRIVACY_VOICE_CHANNEL)) {
            const channel1 = ChannelStore.getChannel(SelectedChannelStore.getVoiceChannelId());
            if (null != channel1) {
              if (VoiceStateStore.isInChannel(channel1.id, user.id)) {
                const type = channel1.type;
                if (constants2.DM !== type) {
                  if (constants2.GROUP_DM !== type) {
                    const guild = GuildStore.getGuild(channel1.getGuildId());
                    if (null != guild) {
                      const features = guild.features;
                      if (!features.has(hasOwnProperty.COMMUNITY)) {
                        const memberCount = GuildMemberCountStore.getMemberCount(guild.id);
                        if (null != memberCount) {
                          let CANNOT_JOIN2;
                          if (memberCount < 100) {
                            CANNOT_JOIN2 = obj.CAN_JOIN;
                          }
                          return CANNOT_JOIN2;
                        }
                        CANNOT_JOIN2 = obj.CANNOT_JOIN;
                      }
                    }
                    return obj.CANNOT_JOIN;
                  }
                }
                return obj.CAN_JOIN;
              }
            }
            return obj.CANNOT_JOIN;
          } else {
            return obj.CANNOT_JOIN;
          }
        }
      }
      return obj.CANNOT_JOIN;
    }
  } else {
    let application_id1;
    const tmp7 = getCurrentUserPresenceActivityDefault;
    if (activity != null) {
      application_id1 = activity.application_id;
    }
    const tmp7Result = tmp7(tmp3, tmp4, application_id1);
    let isInParty = null != tmp7Result;
    if (isInParty) {
      obj = getIsInParty;
      isInParty = obj.getIsInParty(tmp7Result, activity);
    }
  }
  return obj.JOINED;
};
export { ActivityJoinability };
