// Module ID: 9069
// Function ID: 9070
// Name: useSelectStage
// Dependencies: [5, 32, 19, 2045, 2099, 504, 7841, 2]
// Exports: default

// Module 9069 (useSelectStage)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2099 */;
import size from "module_2" /* 2 */;

let c3, c6, channel;

const result = size.fileFinishedImporting("modules/guild_scheduled_events/useSelectStage.tsx");

export default function useSelectStage() {
  let closure_2;
  let first;
  let stateFromStores;
  let voiceChannelId;
  let obj = stateFromStores(first[5]);
  const items = [SelectedChannelStore];
  stateFromStores = obj.useStateFromStores(items, () => voiceChannelId.getVoiceChannelId(), []);
  [first, _asyncToGenerator] = react.useState(stateFromStores);
  const items1 = [stateFromStores];
  const effect = react.useEffect(() => {
    let closure_0;
    const timeout = setTimeout(() => {
      closure_1_2(closure_0);
    }, 500);
    return () => {
      clearTimeout(closure_0);
    };
  }, items1);
  const useCallback = react.useCallback;
  let closure_0 = _asyncToGenerator(async (arg0, value) => {
    let obj2;
    closure_0 = arg0;
    let closure_1 = value;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c5;
      try {
        c6 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            c5 = 1;
            const tmp25 = closure_0;
            if (closure_1 === closure_1) {
              channel = channel.getChannel(tmp26);
              if (null != channel) {
                const obj4 = closure_0(first[6]);
                obj4.navigateToStage(channel);
                c5 = 0;
                c6 = 3;
                const obj6 = { value: undefined, done: true };
                return obj6;
              }
            }
            tmp(closure_1);
            c3 = 2;
            c6 = 1;
            const obj7 = { value: obj2.connectOrLurkStage(tmp25, closure_1), done: false };
            obj2 = closure_0(first[6]);
            return obj7;
          }
        } else {
          if (1 === tmp4) {
            c5 = 0;
            tmp(null);
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c6 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            c5 = 0;
          }
          c6 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp18) {
        let closure_4 = tmp18;
        if (0 === c5) {
          c6 = 3;
          throw tmp18;
        } else {
          c3 = 1;
        }
      }
    }
  });
  const items2 = [first];
  const items3 = [
    first,
    useCallback(function() {
      return closure_0(...arguments);
    }, items2)
  ];
  return items3;
};
