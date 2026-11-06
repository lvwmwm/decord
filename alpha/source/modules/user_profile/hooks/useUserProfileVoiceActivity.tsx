// Module ID: 15100
// Function ID: 15101
// Name: useUserProfileVoiceActivity
// Dependencies: [5917, 5833, 7982, 10884, 504, 2]
// Exports: default, isUserProfileVoiceActivityForChannel

// Module 15100 (useUserProfileVoiceActivity)
import isEmbeddedActivityDefault from "isEmbeddedActivity" /* 7982 */;
import PresenceStore from "PresenceStore" /* 5917 */;
import VoiceStateStore from "VoiceStateStore" /* 5833 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/hooks/useUserProfileVoiceActivity.tsx");

export default function useUserProfileVoiceActivity(guildId) {
  let items;
  let obj2;
  const userId = guildId.userId;
  let id;
  let tmp = dependencyMap;
  const tmp2 = id(10884)({ userId, guildId: guildId.guildId });
  const voiceChannel = tmp2.voiceChannel;
  id = undefined;
  const voiceState = tmp2.voiceState;
  if (voiceChannel != null) {
    id = voiceChannel.id;
  }
  const obj = {
    voiceState,
    voiceChannel,
    voiceActivity: obj2.useStateFromStores(items, () => {
      let tmp;
      if (null != userId) {
        if (null != id) {
          let tmp3 = PresenceStore;
          const findActivityResult = PresenceStore.findActivity(tmp, (session_id) => {
            voiceStateForSession = voiceStateForSession.getVoiceStateForSession(userId, session_id.session_id);
            let tmp3 = id(dependencyMap[2])(session_id);
            const tmp = closure_1_1;
            if (tmp3) {
              let channelId;
              if (voiceStateForSession != null) {
                channelId = voiceStateForSession.channelId;
              }
              tmp3 = channelId === tmp;
            }
            return tmp3;
          });
          return findActivityResult;
        }
      }
    })
  };
  items = [PresenceStore, VoiceStateStore];
  obj2 = userId(504);
  return obj;
};
export function isUserProfileVoiceActivityForChannel(voiceStateForSession) {
  let activity;
  let voiceChannelId;
  voiceStateForSession = voiceStateForSession.voiceStateForSession;
  ({ activity, voiceChannelId } = voiceStateForSession);
  let tmp = isEmbeddedActivityDefault(activity);
  if (tmp) {
    let channelId;
    if (voiceStateForSession != null) {
      channelId = voiceStateForSession.channelId;
    }
    tmp = channelId === voiceChannelId;
  }
  return tmp;
}
