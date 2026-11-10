// Module ID: 15150
// Function ID: 15151
// Name: getActivityChannelId
// Dependencies: [4995, 4991, 5805, 2]
// Exports: default

// Module 15150 (getActivityChannelId)
import ChannelRecord from "ChannelRecord" /* 4995 */;
import ChannelStore from "ChannelStore" /* 4991 */;
import VoiceStateStore from "VoiceStateStore" /* 5805 */;
import size from "module_2" /* 2 */;

const isTextChannel = ChannelRecord.isTextChannel;
const result = size.fileFinishedImporting("modules/activities/utils/getActivityChannelId.tsx");

export default function getActivityChannelId(userId) {
  let activity;
  let channelId;
  ({ channelId, activity } = userId);
  userId = userId.userId;
  const channel = ChannelStore.getChannel(channelId);
  let session_id;
  if (activity != null) {
    session_id = activity.session_id;
  }
  let tmp3 = channelId;
  if (null != session_id) {
    if (null == channel) {
      let session_id1;
      const getVoiceStateForSession = VoiceStateStore.getVoiceStateForSession;
      if (activity != null) {
        session_id1 = activity.session_id;
      }
      const voiceStateForSession = getVoiceStateForSession(userId, session_id1);
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
