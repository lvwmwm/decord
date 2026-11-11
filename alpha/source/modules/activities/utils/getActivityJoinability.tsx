// Module ID: 15640
// Function ID: 15641
// Name: getActivityJoinability
// Dependencies: [1072, 12606, 12602, 12607, 5914, 12754, 12644, 8404, 15484, 1377, 12599, 12600, 12601, 2]
// Exports: default

// Module 15640 (getActivityJoinability)
import PlatformUtils from "PlatformUtils" /* 1377 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5914 */;
import hasFlagDefault from "hasFlag" /* 8404 */;
import _slicedToArray from "_slicedToArray" /* 12599 */;
import hasPartySize from "hasPartySize" /* 12600 */;
import getIsInParty from "getIsInParty" /* 12602 */;
import getCurrentUserPresenceActivityDefault from "getCurrentUserPresenceActivity" /* 12606 */;
import getFrameSurfaces from "getFrameSurfaces" /* 12607 */;
import useIsActivitiesEnabledForCurrentPlatform from "useIsActivitiesEnabledForCurrentPlatform" /* 12644 */;
import getEmbeddedActivityJoinability from "getEmbeddedActivityJoinability" /* 12754 */;
import isActivityJoinableOnCurrentPlatformDefault from "isActivityJoinableOnCurrentPlatform" /* 15484 */;
import Constants from "Constants" /* 1072 */;
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
  let tmp59Result;
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
      if (isEmbedded) {
        if (null != application) {
          const obj11 = getFrameSurfaces;
          const frameSurfaces = obj11.getFrameSurfaces(application);
          const tmp57 = require;
          if (frameSurfaces.has(EmbeddedSurfaceType.EmbeddedSurfaceType.VOICE_CHANNEL)) {
            const tmp57Result = tmp57(12607);
            if (!tmp57Result.canOpenFrame(application)) {
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
      if (isEmbedded) {
        if (null != channelId) {
          const obj13 = getFrameSurfaces;
          if (!obj13.isFrameApp(application)) {
            let CANNOT_JOIN;
            const obj2 = { userId: user.id, activity, channelId, currentUser: tmp, application, isContentGated: tmp2, isActivitiesEnabledForCurrentPlatform: tmp59Result.getIsActivitiesEnabledForCurrentPlatform(), ChannelStore, VoiceStateStore, PermissionStore, GuildStore };
            const tmp27 = getEmbeddedActivityJoinabilityDefault;
            tmp59Result = useIsActivitiesEnabledForCurrentPlatform;
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
            const obj5 = getFrameSurfaces;
            if (!obj5.isFrameApp(application)) {
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
      const obj7 = _slicedToArray;
      const partySize = obj7.getPartySize(activity);
      const obj8 = hasPartySize;
      const tmp40 = require;
      if (obj8.hasPartySize(partySize)) {
        const tmp40Result = tmp40(12601);
        if (!tmp40Result.isPartyFull(partySize)) {
          const tmp43 = importDefault;
          const tmp44 = constants;
          if (hasFlagDefault(activity, constants.PARTY_PRIVACY_FRIENDS)) {
            if (RelationshipStore.isFriend(user.id)) {
              return obj.CAN_JOIN;
            }
          }
          if (tmp43(8404)(activity, tmp44.PARTY_PRIVACY_VOICE_CHANNEL)) {
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
