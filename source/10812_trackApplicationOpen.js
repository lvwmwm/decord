// Module ID: 10812
// Function ID: 83973
// Name: trackApplicationOpen
// Dependencies: [670, 2, 6]
// Exports: default

// Module 10812 (trackApplicationOpen)
import { AnalyticEvents } from "MessageEmbedTypes";
import _classCallCheck from "_classCallCheck";

const result = _classCallCheck.fileFinishedImporting("modules/activities/utils/trackApplicationOpen.tsx");

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
  let obj = importDefault(dependencyMap[1]);
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
