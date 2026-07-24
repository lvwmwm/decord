// Module ID: 11991
// Function ID: 92703
// Name: isUserProfileVoiceActivityForChannel
// Dependencies: [4217, 4146, 6981, 9105, 566, 2]
// Exports: default

// Module 11991 (isUserProfileVoiceActivityForChannel)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";

const require = arg1;
function isUserProfileVoiceActivityForChannel(voiceStateForSession) {
  let activity;
  let voiceChannelId;
  voiceStateForSession = voiceStateForSession.voiceStateForSession;
  ({ activity, voiceChannelId } = voiceStateForSession);
  let tmp = importDefault(6981)(activity);
  if (tmp) {
    let channelId;
    if (null != voiceStateForSession) {
      channelId = voiceStateForSession.channelId;
    }
    tmp = channelId === voiceChannelId;
  }
  return tmp;
}
const result = require("isEmbeddedActivity").fileFinishedImporting("modules/user_profile/hooks/useUserProfileVoiceActivity.tsx");

export default function useUserProfileVoiceActivity(guildId) {
  const userId = guildId.userId;
  let id;
  const tmp = id(9105)({ userId, guildId: guildId.guildId });
  const voiceChannel = tmp.voiceChannel;
  id = undefined;
  if (null != voiceChannel) {
    id = voiceChannel.id;
  }
  const obj = { voiceState: tmp.voiceState, voiceChannel };
  const items = [_isNativeReflectConstruct, closure_4];
  obj.voiceActivity = userId(566).useStateFromStores(items, () => {
    if (null != userId) {
      if (null != id) {
        const findActivityResult = outer1_3.findActivity(userId, (activity) => outer2_5({ activity, voiceChannelId: outer1_1, voiceStateForSession: outer2_4.getVoiceStateForSession(outer1_0, activity.session_id) }));
        let tmp5;
        if (null != findActivityResult) {
          tmp5 = findActivityResult;
        }
        return tmp5;
      }
    }
  });
  return obj;
};
export { isUserProfileVoiceActivityForChannel };
