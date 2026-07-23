// Module ID: 11956
// Function ID: 92423
// Name: getActivityChannelId
// Dependencies: [1352, 1348, 4146, 2]
// Exports: default

// Module 11956 (getActivityChannelId)
import { isTextChannel } from "_callSuper";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_2 from "_isNativeReflectConstruct";

const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/activities/utils/getActivityChannelId.tsx");

export default function getActivityChannelId(userId) {
  let activity;
  let channelId;
  ({ channelId, activity } = userId);
  channel = channel.getChannel(channelId);
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
      voiceStateForSession = voiceStateForSession.getVoiceStateForSession(userId.userId, session_id1);
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
