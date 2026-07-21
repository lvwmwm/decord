// Module ID: 11952
// Function ID: 92400
// Name: isUserProfileVoiceActivityForChannel
// Dependencies: []
// Exports: default

// Module 11952 (isUserProfileVoiceActivityForChannel)
function isUserProfileVoiceActivityForChannel(voiceStateForSession) {
  let activity;
  let voiceChannelId;
  voiceStateForSession = voiceStateForSession.voiceStateForSession;
  ({ activity, voiceChannelId } = voiceStateForSession);
  let tmp = importDefault(dependencyMap[2])(activity);
  if (tmp) {
    let channelId;
    if (null != voiceStateForSession) {
      channelId = voiceStateForSession.channelId;
    }
    tmp = channelId === voiceChannelId;
  }
  return tmp;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/user_profile/hooks/useUserProfileVoiceActivity.tsx");

export default function useUserProfileVoiceActivity(guildId) {
  const userId = guildId.userId;
  const arg1 = userId;
  let importDefault;
  const tmp = importDefault(dependencyMap[3])({ userId, guildId: guildId.guildId });
  const voiceChannel = tmp.voiceChannel;
  let id;
  if (null != voiceChannel) {
    id = voiceChannel.id;
  }
  importDefault = id;
  const obj = { voiceState: tmp.voiceState, voiceChannel };
  const items = [closure_3, closure_4];
  obj.voiceActivity = arg1(dependencyMap[4]).useStateFromStores(items, () => {
    if (null != userId) {
      if (null != id) {
        const findActivityResult = closure_3.findActivity(userId, (activity) => callback({ activity, voiceChannelId: closure_1, voiceStateForSession: voiceStateForSession.getVoiceStateForSession(closure_0, activity.session_id) }));
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
