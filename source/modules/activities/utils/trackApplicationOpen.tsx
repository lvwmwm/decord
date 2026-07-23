// Module ID: 10829
// Function ID: 84069
// Name: trackApplicationOpen
// Dependencies: [653, 675, 2]
// Exports: default

// Module 10829 (trackApplicationOpen)
import { AnalyticEvents } from "ME";

const result = require("set").fileFinishedImporting("modules/activities/utils/trackApplicationOpen.tsx");

export default function trackApplicationOpen(partyId) {
  let analyticsLocations;
  let applicationId;
  let channelId;
  let channelType;
  let guildId;
  let inviterUserId;
  let locationObject;
  let messageId;
  let referrerId;
  let remoteJoinPlatform;
  let source;
  let type;
  let userId;
  partyId = partyId.partyId;
  ({ type, source, userId, guildId, channelId, channelType, applicationId, messageId, locationObject, analyticsLocations, referrerId, inviterUserId, remoteJoinPlatform } = partyId);
  let obj = importDefault(675);
  obj = { type, source, guild_id: guildId, channel_id: channelId, channel_type: channelType, application_id: applicationId };
  let tmp;
  if (null != partyId) {
    tmp = partyId;
  }
  obj.party_id = tmp;
  obj.other_user_id = userId;
  obj.message_id = messageId;
  obj.location = locationObject;
  obj.location_stack = analyticsLocations;
  obj.referrer_id = referrerId;
  obj.invite_inviter_id = inviterUserId;
  obj.remote_join_platform = remoteJoinPlatform;
  obj.track(AnalyticEvents.APPLICATION_OPENED, obj);
};
