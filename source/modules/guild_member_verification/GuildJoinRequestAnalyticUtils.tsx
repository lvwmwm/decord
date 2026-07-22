// Module ID: 7103
// Function ID: 57102
// Name: trackMemberApplicationViewed
// Dependencies: []
// Exports: trackMemberApplicationAction, trackMemberApplicationInterviewMessage, trackMemberApplicationViewed, trackMemberVerificationApplicationViewed

// Module 7103 (trackMemberApplicationViewed)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const AnalyticEvents = arg1(dependencyMap[2]).AnalyticEvents;
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/guild_member_verification/GuildJoinRequestAnalyticUtils.tsx");

export const trackMemberApplicationViewed = function trackMemberApplicationViewed(arg0) {
  let applicationStatus;
  let applicationUserId;
  let guildId;
  ({ guildId, applicationUserId, applicationStatus } = arg0);
  let obj = importDefault(dependencyMap[3]);
  obj = { guild_id: guildId, viewing_user_id: store.getId(), application_user_id: applicationUserId, application_status: applicationStatus };
  obj.track(AnalyticEvents.GUILD_MEMBER_APPLICATION_VIEWED, obj);
};
export const trackMemberApplicationAction = function trackMemberApplicationAction(arg0) {
  let actionType;
  let applicationUserId;
  let guildId;
  ({ guildId, actionType, applicationUserId } = arg0);
  let obj = importDefault(dependencyMap[3]);
  obj = { guild_id: guildId, action_type: actionType, application_user_id: applicationUserId, viewing_user_id: store.getId() };
  obj.track(AnalyticEvents.GUILD_MEMBER_APPLICATION_ACTION, obj);
};
export const trackMemberApplicationInterviewMessage = function trackMemberApplicationInterviewMessage(guildId) {
  let channelId;
  let joinRequestStatus;
  let joinRequestUserId;
  let messageId;
  guildId = guildId.guildId;
  ({ messageId, channelId, joinRequestStatus, joinRequestUserId } = guildId);
  const id = store.getId();
  const member = member.getMember(guildId, id);
  let joinedAt;
  if (null != member) {
    joinedAt = member.joinedAt;
  }
  importDefault(dependencyMap[3]).track(AnalyticEvents.GUILD_MEMBER_APPLICATION_INTERVIEW_MESSAGE, { guild_id: guildId, channel_id: channelId, message_id: messageId, message_user_id: id, is_member: null != joinedAt, join_request_status: joinRequestStatus, join_request_user_id: joinRequestUserId });
};
export const trackMemberVerificationApplicationViewed = function trackMemberVerificationApplicationViewed(guild_id) {
  let obj = importDefault(dependencyMap[3]);
  obj = { guild_id };
  obj.track(AnalyticEvents.MEMBER_VERIFICATION_APPLICATION_VIEWED, obj);
};
