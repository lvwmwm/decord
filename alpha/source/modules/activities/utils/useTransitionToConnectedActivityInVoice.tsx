// Module ID: 19157
// Function ID: 19158
// Name: useTransitionToConnectedActivityInVoice
// Dependencies: [5, 19, 4863, 4917, 1072, 4935, 5678, 11749, 11697, 1108, 2]
// Exports: default

// Module 19157 (useTransitionToConnectedActivityInVoice)
import Constants from "Constants" /* 1072 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1108 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4863 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4917 */;
import size from "module_2" /* 2 */;

let channelId, guild_id;

const ComponentActions = Constants.ComponentActions;
const result = size.fileFinishedImporting("modules/activities/utils/useTransitionToConnectedActivityInVoice.tsx");

export default function useTransitionToConnectedActivityInVoice(onTransition) {
  onTransition = onTransition.onTransition;
  const items = [onTransition];
  const effect = react.useEffect(() => {
    function handler() {
      return obj(...arguments);
    }
    let obj = function _handler() {
      let channel;
      let voiceChannelId;
      obj = _asyncToGenerator(async (arg0) => {
        const _location = arg0;
        let c3 = 0;
        let c4 = 0;
        const iter = (async (arg0, value) => {
          if (c4 === 2) {
            c4 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              return { value, done: true };
            } else {
              return { value: "HermesInternal", done: "HermesInternal" };
            }
          } else {
            try {
              let location;
              c4 = 2;
              if (0 === c3) {
                if (arg0 === 1) {
                  c4 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c4 = 3;
                  return { value, done: true };
                } else {
                  location = _location.location;
                  channelId = undefined;
                  guild_id = undefined;
                  c3 = 1;
                  c4 = 1;
                  return { value: "flexDirection", done: true };
                }
              } else {
                if (1 === c3) {
                  if (arg0 === 1) {
                    c4 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c4 = 3;
                    return { value, done: true };
                  } else {
                    const obj7 = handler(closure_2_2[5]);
                    channelId = obj7.getEmbeddedActivityLocationChannelId(location);
                    if (null != channelId) {
                      if (closure_2_1(closure_2_2[6])(channelId)) {
                        if (voiceChannelId.getVoiceChannelId() !== channelId) {
                          c3 = 2;
                          c4 = 1;
                          const obj5 = { channelId };
                          const obj6 = { value: closure_2_1(closure_2_2[7])(obj5), done: false };
                          return obj6;
                        }
                      }
                    }
                    c4 = 3;
                    return { value: "HermesInternal", done: "HermesInternal" };
                  }
                } else if (arg0 === 1) {
                  c4 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c4 = 3;
                  obj = { value, done: true };
                  return obj;
                }
                channel.getChannel(channelId);
                guild_id = undefined;
                if (guild_id != null) {
                  guild_id = guild_id.guild_id;
                }
                const _setTimeout = setTimeout;
                const timerId = setTimeout(() => {
                  obj(closure_3_2[8])(closure_1_3, closure_1_0);
                  if (closure_0 != null) {
                    closure_0();
                  }
                }, 0);
              }
            } catch (tmp24) {
              c4 = 3;
              throw tmp24;
            }
          }
        })();
        iter.next();
        return iter;
      });
      return obj(...arguments);
    };
    let ComponentDispatch = onTransition(dependencyMap[9]).ComponentDispatch;
    const subscription = ComponentDispatch.subscribe(constants.OPEN_EMBEDDED_ACTIVITY, handler);
    return () => {
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      ComponentDispatch.unsubscribe(ComponentActions.OPEN_EMBEDDED_ACTIVITY, handler);
    };
  }, items);
};
