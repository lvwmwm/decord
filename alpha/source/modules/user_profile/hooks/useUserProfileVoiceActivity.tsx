// Module ID: 13162
// Function ID: 13163
// Name: useUserProfileVoiceActivity
// Dependencies: [5108, 5113, 7426, 558, 576, 10237, 504, 2]
// Exports: isUserProfileVoiceActivityForChannel

// Module 13162 (useUserProfileVoiceActivity)
import isEmbeddedActivityDefault from "isEmbeddedActivity" /* 7426 */;
import PresenceStore from "PresenceStore" /* 5108 */;
import VoiceStateStore from "VoiceStateStore" /* 5113 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useUserProfileVoiceActivity(userId) {
  let id;
  let voiceChannel;
  let voiceState;
  let tmp = userId;
  const obj = userId(576);
  const cResult = obj.c(11);
  userId = userId.userId;
  const guildId = userId.guildId;
  if (cResult[0] === guildId) {
    let tmp4;
    let tmp10;
    if (cResult[1] === userId) {
      tmp4 = cResult[2];
    }
    ({ voiceState, voiceChannel } = id(10237)(tmp4));
    id(10237)(tmp4);
    id = undefined;
    if (voiceChannel != null) {
      id = voiceChannel.id;
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [PresenceStore, VoiceStateStore];
      cResult[3] = items;
      tmp10 = items;
    } else {
      tmp10 = cResult[3];
    }
    if (cResult[4] === userId) {
      let tmp13;
      if (cResult[5] === id) {
        tmp13 = cResult[6];
      }
      const tmpResult = tmp(504);
      const stateFromStores = tmpResult.useStateFromStores(tmp10, tmp13);
      if (cResult[7] === stateFromStores) {
        if (cResult[8] === voiceChannel) {
          let tmp15;
          if (cResult[9] === voiceState) {
            tmp15 = cResult[10];
          }
          return tmp15;
        }
      }
      const obj2 = { voiceState, voiceChannel, voiceActivity: stateFromStores };
      cResult[7] = stateFromStores;
      cResult[8] = voiceChannel;
      cResult[9] = voiceState;
      cResult[10] = obj2;
      tmp15 = obj2;
    }
    const fn = function f() {
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
    };
    cResult[4] = userId;
    cResult[5] = id;
    cResult[6] = fn;
    tmp13 = fn;
  }
  const obj3 = { userId, guildId };
  cResult[0] = guildId;
  cResult[1] = userId;
  cResult[2] = obj3;
  tmp4 = obj3;
}) : (function useUserProfileVoiceActivity(guildId) {
  let items;
  let obj2;
  const userId = guildId.userId;
  let id;
  let tmp = dependencyMap;
  const tmp2 = id(10237)({ userId, guildId: guildId.guildId });
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
});
function isUserProfileVoiceActivityForChannel(voiceStateForSession) {
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
const result = size.fileFinishedImporting("modules/user_profile/hooks/useUserProfileVoiceActivity.tsx");

export default tmp2;
export { isUserProfileVoiceActivityForChannel };
