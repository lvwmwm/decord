// Module ID: 13154
// Function ID: 13155
// Name: getActivityJoinability
// Dependencies: [1085, 10797, 10794, 10920, 10846, 7012, 13155, 1382, 10791, 10792, 10793, 2]
// Exports: default

// Module 13154 (getActivityJoinability)
import PlatformUtils from "PlatformUtils" /* 1382 */;
import hasFlagDefault from "hasFlag" /* 7012 */;
import _slicedToArray from "_slicedToArray" /* 10791 */;
import hasPartySize from "hasPartySize" /* 10792 */;
import getIsInParty from "getIsInParty" /* 10794 */;
import getCurrentUserPresenceActivityDefault from "getCurrentUserPresenceActivity" /* 10797 */;
import useIsActivitiesEnabledForCurrentPlatform from "useIsActivitiesEnabledForCurrentPlatform" /* 10846 */;
import getEmbeddedActivityJoinability from "getEmbeddedActivityJoinability" /* 10920 */;
import isActivityJoinableOnCurrentPlatformDefault from "isActivityJoinableOnCurrentPlatform" /* 13155 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

const getEmbeddedActivityJoinabilityDefault = getEmbeddedActivityJoinability;

let c3;
let closure_4;
let hasOwnProperty;
({ ActivityFlags: c3, ChannelTypes: closure_4, GuildFeatures: hasOwnProperty } = Constants);
const ActivityJoinability = { CAN_JOIN: "can_join", CANNOT_JOIN: "cannot_join", JOINED: "joined" };
const result = size.fileFinishedImporting("modules/activities/utils/getActivityJoinability.tsx");

export default function getActivityJoinability(arg0) {
  let ChannelStore;
  let EmbeddedActivitiesStore;
  let GuildMemberCountStore;
  let GuildStore;
  let RelationshipStore;
  let SelectedChannelStore;
  let VoiceStateStore;
  let activity;
  let channelId;
  let isEmbedded;
  let obj;
  let obj8;
  let user;
  ({ user, activity, channelId, isEmbedded, ChannelStore, GuildStore, GuildMemberCountStore, RelationshipStore, SelectedChannelStore, VoiceStateStore, EmbeddedActivitiesStore } = arg0);
  if (isEmbedded) {
    if (isEmbedded) {
      const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
      let tmp17 = null != currentEmbeddedActivity;
      if (tmp17) {
        let application_id;
        const applicationId = currentEmbeddedActivity.applicationId;
        if (activity != null) {
          application_id = activity.application_id;
        }
        tmp17 = applicationId === application_id;
      }
    }
    if (null == user) {
      return obj.CANNOT_JOIN;
    } else {
      if (isEmbedded) {
        if (null != channelId) {
          let CANNOT_JOIN2;
          const obj5 = { userId: user.id, activity, channelId, currentUser: tmp2, application: tmp, isContentGated: tmp3, isActivitiesEnabledForCurrentPlatform: obj8.getIsActivitiesEnabledForCurrentPlatform(), ChannelStore, VoiceStateStore, PermissionStore: tmp4, GuildStore };
          const tmp46 = getEmbeddedActivityJoinabilityDefault;
          obj8 = useIsActivitiesEnabledForCurrentPlatform;
          const tmp46Result = tmp46(obj5);
          if (tmp46Result === getEmbeddedActivityJoinability.EmbeddedActivityJoinability.CAN_JOIN) {
            CANNOT_JOIN2 = obj.CAN_JOIN;
          } else {
            CANNOT_JOIN2 = obj.CANNOT_JOIN;
          }
          return CANNOT_JOIN2;
        }
      }
      if (isEmbedded) {
        if (null == channelId) {
          if (!hasFlagDefault(activity, constants.CONTEXTLESS)) {
            return obj.CANNOT_JOIN;
          }
        }
      }
      if (!isEmbedded) {
        if (isActivityJoinableOnCurrentPlatformDefault(activity)) {
          PlatformUtils;
        }
        return obj.CANNOT_JOIN;
      }
      const obj3 = _slicedToArray;
      const partySize = obj3.getPartySize(activity);
      const obj4 = hasPartySize;
      const tmp28 = require;
      if (obj4.hasPartySize(partySize)) {
        const tmp28Result = tmp28(10793);
        if (!tmp28Result.isPartyFull(partySize)) {
          const tmp31 = importDefault;
          const tmp32 = constants;
          if (hasFlagDefault(activity, constants.PARTY_PRIVACY_FRIENDS)) {
            if (RelationshipStore.isFriend(user.id)) {
              return obj.CAN_JOIN;
            }
          }
          if (tmp31(7012)(activity, tmp32.PARTY_PRIVACY_VOICE_CHANNEL)) {
            const channel = ChannelStore.getChannel(SelectedChannelStore.getVoiceChannelId());
            if (null != channel) {
              if (VoiceStateStore.isInChannel(channel.id, user.id)) {
                const type = channel.type;
                if (constants2.DM !== type) {
                  if (constants2.GROUP_DM !== type) {
                    const guild = GuildStore.getGuild(channel.getGuildId());
                    if (null != guild) {
                      const features = guild.features;
                      if (!features.has(hasOwnProperty.COMMUNITY)) {
                        const memberCount = GuildMemberCountStore.getMemberCount(guild.id);
                        if (null != memberCount) {
                          let CANNOT_JOIN;
                          if (memberCount < 100) {
                            CANNOT_JOIN = obj.CAN_JOIN;
                          }
                          return CANNOT_JOIN;
                        }
                        CANNOT_JOIN = obj.CANNOT_JOIN;
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
    const tmp9 = getCurrentUserPresenceActivityDefault;
    if (activity != null) {
      application_id1 = activity.application_id;
    }
    const tmp9Result = tmp9(tmp5, tmp6, application_id1);
    let isInParty = null != tmp9Result;
    if (isInParty) {
      obj = getIsInParty;
      isInParty = obj.getIsInParty(tmp9Result, activity);
    }
  }
  return obj.JOINED;
};
export { ActivityJoinability };
