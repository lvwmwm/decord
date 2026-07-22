// Module ID: 11944
// Function ID: 92370
// Name: getActivityChannelId
// Dependencies: []
// Exports: default

// Module 11944 (getActivityChannelId)
const isTextChannel = require(dependencyMap[0]).isTextChannel;
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/activities/utils/getActivityChannelId.tsx");

export default function getActivityChannelId(userId) {
  let activity;
  let channelId;
  ({ channelId, activity } = userId);
  const channel = channel.getChannel(channelId);
  let session_id;
  if (null != activity) {
    session_id = activity.session_id;
  }
  let tmp3 = channelId;
  if (null != session_id) {
    if (null == channel) {
      let session_id1;
      if (null != activity) {
        session_id1 = activity.session_id;
      }
      const voiceStateForSession = voiceStateForSession.getVoiceStateForSession(userId.userId, session_id1);
      channelId = undefined;
      if (null != voiceStateForSession) {
        channelId = voiceStateForSession.channelId;
      }
      tmp3 = channelId;
    } else {
      tmp3 = channelId;
    }
  }
  let tmp9;
  if (null != tmp3) {
    tmp9 = tmp3;
  }
  return tmp9;
};
