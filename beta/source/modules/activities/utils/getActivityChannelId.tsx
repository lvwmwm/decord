// Module ID: 13355
// Function ID: 13356
// Name: getActivityChannelId
// Dependencies: [2045, 2041, 4807, 2]
// Exports: default

// Module 13355 (getActivityChannelId)
import ChannelRecord from "ChannelRecord" /* 2045 */;
import ChannelStore from "ChannelStore" /* 2041 */;
import VoiceStateStore from "VoiceStateStore" /* 4807 */;
import size from "module_2" /* 2 */;

const isTextChannel = ChannelRecord.isTextChannel;
const result = size.fileFinishedImporting("modules/activities/utils/getActivityChannelId.tsx");

export default function getActivityChannelId(userId) {
  ({ channelId, activity } = userId);
  const channel = ChannelStore.getChannel(channelId);
  let session_id;
  if (activity != null) {
    session_id = activity.session_id;
  }
  let tmp3 = channelId;
  if (null != session_id) {
    if (null == channel) {
      let session_id1;
      if (activity != null) {
        session_id1 = activity.session_id;
      }
      const voiceStateForSession = VoiceStateStore.getVoiceStateForSession(userId.userId, session_id1);
      let channelId1;
      if (voiceStateForSession != null) {
        channelId1 = voiceStateForSession.channelId;
      }
      tmp3 = channelId1;
    } else {
      tmp3 = channelId;
    }
  }
  return tmp3;
};
