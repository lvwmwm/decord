// Module ID: 11983
// Function ID: 92661
// Name: getActivityJoinability
// Dependencies: [653, 10940, 10937, 10549, 10546, 5689, 11984, 477, 10934, 10935, 10936, 2]
// Exports: default

// Module 11983 (getActivityJoinability)
import ME from "ME";

let closure_3;
let closure_4;
let closure_5;
({ ActivityFlags: closure_3, ChannelTypes: closure_4, GuildFeatures: closure_5 } = ME);
let obj = { CAN_JOIN: "can_join", CANNOT_JOIN: "cannot_join", JOINED: "joined" };
const result = require("getIsInParty").fileFinishedImporting("modules/activities/utils/getActivityJoinability.tsx");

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
          obj = { userId: user.id, activity, channelId, currentUser: tmp2, application: tmp };
          const tmp54 = importDefault(10549);
          obj.isActivitiesEnabledForCurrentPlatform = require(10546) /* isActivitiesAllowed */.getIsActivitiesEnabledForCurrentPlatform();
          obj.ChannelStore = ChannelStore;
          obj.VoiceStateStore = VoiceStateStore;
          obj.PermissionStore = tmp3;
          obj.GuildStore = GuildStore;
          const obj8 = require(10546) /* isActivitiesAllowed */;
          if (tmp54Result === require(10549) /* getEmbeddedActivityJoinability */.EmbeddedActivityJoinability.CAN_JOIN) {
            let CANNOT_JOIN2 = obj.CAN_JOIN;
          } else {
            CANNOT_JOIN2 = obj.CANNOT_JOIN;
          }
          return CANNOT_JOIN2;
        }
      }
      if (isEmbedded) {
        if (null == channelId) {
          if (!importDefault(5689)(activity, constants.CONTEXTLESS)) {
            return obj.CANNOT_JOIN;
          }
        }
      }
      if (!isEmbedded) {
        if (importDefault(11984)(activity)) {
          const obj2 = require(477) /* set */;
        }
        return obj.CANNOT_JOIN;
      }
      const partySize = require(10934) /* getPartySize */.getPartySize(activity);
      const obj3 = require(10934) /* getPartySize */;
      if (obj4.hasPartySize(partySize)) {
        if (!obj5.isPartyFull(partySize)) {
          if (importDefault(5689)(activity, constants.PARTY_PRIVACY_FRIENDS)) {
            if (RelationshipStore.isFriend(user.id)) {
              return obj.CAN_JOIN;
            }
          }
          if (importDefault(5689)(activity, constants.PARTY_PRIVACY_VOICE_CHANNEL)) {
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
        obj5 = require(10936) /* isPartyFull */;
      }
      return obj.CANNOT_JOIN;
    }
  } else {
    let application_id1;
    if (null != activity) {
      application_id1 = activity.application_id;
    }
    const tmp8Result = importDefault(10940)(tmp4, tmp5, application_id1);
    let isInParty = null != tmp8Result;
    if (isInParty) {
      obj = require(10937) /* getIsInParty */;
      isInParty = obj.getIsInParty(tmp8Result, activity);
    }
    const tmp8 = importDefault(10940);
  }
  return obj.JOINED;
};
export const ActivityJoinability = obj;
