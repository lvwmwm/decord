// Module ID: 11945
// Function ID: 92372
// Name: getActivityJoinability
// Dependencies: [653, 22, 2, 4213, 4142, 6977, 9059, 566, 2, 31, 27, 4574]
// Exports: default

// Module 11945 (getActivityJoinability)
import ME from "ME";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

({ ActivityFlags: closure_3, ChannelTypes: closure_4, GuildFeatures: closure_5 } = ME);
const obj = { CAN_JOIN: "can_join", CANNOT_JOIN: "cannot_join", JOINED: "joined" };
const result = _isNativeReflectConstruct.fileFinishedImporting("modules/activities/utils/getActivityJoinability.tsx");

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
  let user;
  ({ user, activity, channelId, isEmbedded, ChannelStore, GuildStore, GuildMemberCountStore, RelationshipStore, SelectedChannelStore, VoiceStateStore, EmbeddedActivitiesStore } = arg0);
  if (isEmbedded) {
    if (isEmbedded) {
      const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
      let tmp17 = null != currentEmbeddedActivity;
      if (tmp17) {
        let application_id;
        if (null != activity) {
          application_id = activity.application_id;
        }
        tmp17 = currentEmbeddedActivity.applicationId === application_id;
      }
    }
    if (null == user) {
      return obj.CANNOT_JOIN;
    } else {
      if (isEmbedded) {
        if (null != channelId) {
          let obj = { userId: user.id, activity, channelId, currentUser: tmp2, application: tmp };
          const tmp54 = importDefault(dependencyMap[3]);
          obj.isActivitiesEnabledForCurrentPlatform = require(dependencyMap[4]).getIsActivitiesEnabledForCurrentPlatform();
          obj.ChannelStore = ChannelStore;
          obj.VoiceStateStore = VoiceStateStore;
          obj.PermissionStore = tmp3;
          obj.GuildStore = GuildStore;
          const obj8 = require(dependencyMap[4]);
          if (tmp54Result === require(dependencyMap[3]).EmbeddedActivityJoinability.CAN_JOIN) {
            let CANNOT_JOIN2 = obj.CAN_JOIN;
          } else {
            CANNOT_JOIN2 = obj.CANNOT_JOIN;
          }
          return CANNOT_JOIN2;
        }
      }
      if (isEmbedded) {
        if (null == channelId) {
          if (!importDefault(dependencyMap[5])(activity, constants.CONTEXTLESS)) {
            return obj.CANNOT_JOIN;
          }
        }
      }
      if (!isEmbedded) {
        if (importDefault(dependencyMap[6])(activity)) {
          const obj2 = require(dependencyMap[7]);
        }
        return obj.CANNOT_JOIN;
      }
      const partySize = require(dependencyMap[8]).getPartySize(activity);
      const obj3 = require(dependencyMap[8]);
      if (obj4.hasPartySize(partySize)) {
        if (!obj5.isPartyFull(partySize)) {
          if (importDefault(dependencyMap[5])(activity, constants.PARTY_PRIVACY_FRIENDS)) {
            if (RelationshipStore.isFriend(user.id)) {
              return obj.CAN_JOIN;
            }
          }
          if (importDefault(dependencyMap[5])(activity, constants.PARTY_PRIVACY_VOICE_CHANNEL)) {
            const channel = ChannelStore.getChannel(SelectedChannelStore.getVoiceChannelId());
            if (null != channel) {
              if (VoiceStateStore.isInChannel(channel.id, user.id)) {
                const type = channel.type;
                if (constants2.DM !== type) {
                  if (constants2.GROUP_DM !== type) {
                    const guild = GuildStore.getGuild(channel.getGuildId());
                    if (null != guild) {
                      const features = guild.features;
                      if (!features.has(constants3.COMMUNITY)) {
                        const memberCount = GuildMemberCountStore.getMemberCount(guild.id);
                        if (null != memberCount) {
                          if (memberCount < 100) {
                            let CANNOT_JOIN = obj.CAN_JOIN;
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
        const obj5 = require(dependencyMap[10]);
      }
      return obj.CANNOT_JOIN;
    }
  } else {
    let application_id1;
    if (null != activity) {
      application_id1 = activity.application_id;
    }
    const tmp8Result = importDefault(dependencyMap[1])(tmp4, tmp5, application_id1);
    let isInParty = null != tmp8Result;
    if (isInParty) {
      obj = require(dependencyMap[2]);
      isInParty = obj.getIsInParty(tmp8Result, activity);
    }
    const tmp8 = importDefault(dependencyMap[1]);
  }
  return obj.JOINED;
};
export const ActivityJoinability = obj;
