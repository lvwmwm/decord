// Module ID: 12828
// Function ID: 12829
// Name: VibegrationsAppChannelActions
// Dependencies: [19, 17, 12829, 21, 4837, 558, 576, 504, 12830, 12831, 1127, 3718, 12832, 11106, 12448, 5371, 5375, 5386, 12833, 2]

// Module 12828 (VibegrationsAppChannelActions)
import react_native from "react-native" /* 17 */;
import VibegrationsUtils from "VibegrationsUtils" /* 5371 */;
import restartVibegrationsAppFramesDefault from "restartVibegrationsAppFrames" /* 12448 */;
import VibegrationsAppChannelActionCreators from "VibegrationsAppChannelActionCreators" /* 12833 */;
import react from "react" /* 19 */;
import VibegrationsAppChannelsStore from "VibegrationsAppChannelsStore" /* 12829 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4837 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let channel;

let hasOwnProperty;
let metroRequire;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles({ actionWrapper: { flexShrink: 0, flexDirection: "row", alignItems: "center" } });
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let badge;
  let first;
  let items2;
  let mentionCount;
  let tmp14;
  let tmp7;
  let tmp8;
  let tmp = channel;
  let obj = channel(576);
  const cResult = obj.c(29);
  channel = channel.channel;
  const tmp4 = closure_7();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [VibegrationsAppChannelsStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channel.id) {
    const fn = function u() {
      return VibegrationsAppChannelsStore.isChatOpen(channel.id);
    };
    const items1 = [channel.id];
    cResult[1] = channel.id;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp8 = items1;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7, tmp8);
  ({ mentionCount, badge } = stateFromStores(12830)(channel.id));
  stateFromStores(12830)(channel.id);
  stateFromStores(12831)(channel, stateFromStores);
  let tmp13 = null;
  if (!stateFromStores) {
    tmp13 = badge;
  }
  if (cResult[4] !== stateFromStores) {
    const intl = tmp(1127).intl;
    const string = intl.string;
    const tmp10Result = stateFromStores(3718);
    const stringResult = string(stateFromStores ? tmp10Result.jLMpUv : tmp10Result.aWVf4j);
    cResult[4] = stateFromStores;
    cResult[5] = stringResult;
    tmp14 = stringResult;
  } else {
    tmp14 = cResult[5];
  }
  if (cResult[6] === tmp13) {
    if (cResult[7] === mentionCount) {
      let obj3;
      if (cResult[8] === tmp14) {
        obj3 = cResult[9];
      }
      if (cResult[13] === channel.topic) {
        let tmp23;
        let ChatIcon;
        if (cResult[14] === stateFromStores) {
          tmp23 = cResult[15];
        }
        if (stateFromStores) {
          ChatIcon = tmp(5375).AppsIcon;
        } else {
          ChatIcon = tmp(5386).ChatIcon;
        }
        if (cResult[16] === channel.id) {
          let tmp25;
          if (cResult[17] === stateFromStores) {
            tmp25 = cResult[18];
          }
          const joined = obj3.join(", ");
          class L {
            constructor() {
              const obj = VibegrationsAppChannelActionCreators;
              return obj.setAppChannelChatOpen(channel.id, !stateFromStores);
            }
          }
          let StringResult;
          if ("mention" === tmp13) {
            const _String = String;
            StringResult = String(mentionCount);
          }
          if (cResult[19] === tmp27) {
            if (cResult[20] === StringResult) {
              if (cResult[21] === ChatIcon) {
                if (cResult[22] === tmp25) {
                  let tmp29;
                  if (cResult[23] === joined) {
                    tmp29 = cResult[24];
                  }
                  if (cResult[25] === tmp4.actionWrapper) {
                    if (cResult[26] === tmp29) {
                      let tmp32;
                      if (cResult[27] === tmp23) {
                        tmp32 = cResult[28];
                      }
                      return tmp32;
                    }
                  }
                  class L {
                    constructor() {
                      const obj = VibegrationsAppChannelActionCreators;
                      return obj.setAppChannelChatOpen(channel.id, !stateFromStores);
                    }
                  }
                  const obj2 = { style: tmp22, children: items2 };
                  items2 = [tmp23, tmp29];
                  const tmp34 = closure_6(View, obj2);
                  cResult[25] = tmp4.actionWrapper;
                  cResult[26] = tmp29;
                  cResult[27] = tmp23;
                  cResult[28] = tmp34;
                  tmp32 = tmp34;
                }
              }
            }
          }
          const obj4 = { noMargin: true, source: null, IconComponent: ChatIcon, onPress: tmp25, accessibilityLabel: joined, badge: tmp27, badgePosition: "right", buttonText: StringResult };
          const tmp31 = closure_5(stateFromStores(12832), obj4);
          cResult[19] = tmp27;
          cResult[20] = StringResult;
          cResult[21] = ChatIcon;
          cResult[22] = tmp25;
          cResult[23] = joined;
          cResult[24] = tmp31;
          tmp29 = tmp31;
        }
        class L {
          constructor() {
            const obj = VibegrationsAppChannelActionCreators;
            return obj.setAppChannelChatOpen(channel.id, !stateFromStores);
          }
        }
        cResult[16] = channel.id;
        cResult[17] = stateFromStores;
        cResult[18] = L;
        tmp25 = L;
      }
      cResult[13] = channel.topic;
      cResult[14] = stateFromStores;
      cResult[15] = null;
      tmp23 = tmp24;
    }
  }
  const items3 = [tmp14];
  if ("mention" === tmp13) {
    let tmp19;
    if (cResult[10] !== mentionCount) {
      const intl3 = tmp(1127).intl;
      const formatToPlainString = intl3.formatToPlainString;
      const obj5 = { mentionCount: null };
      class L {
        constructor() {
          const obj = VibegrationsAppChannelActionCreators;
          return obj.setAppChannelChatOpen(channel.id, !stateFromStores);
        }
      }
      const formatToPlainStringResult = formatToPlainString(tmp(1127).t["3l1GOx"], obj5);
      cResult[10] = mentionCount;
      cResult[11] = formatToPlainStringResult;
      tmp19 = formatToPlainStringResult;
    } else {
      tmp19 = cResult[11];
    }
    items3.push(tmp19);
  } else if ("unread" === tmp13) {
    const _Symbol = Symbol;
    if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = tmp(1127).intl;
      const stringResult1 = intl2.string(tmp(1127).t.x5zAGZ);
      class L {
        constructor() {
          const obj = VibegrationsAppChannelActionCreators;
          return obj.setAppChannelChatOpen(channel.id, !stateFromStores);
        }
      }
      cResult[12] = stringResult1;
    }
    class L {
      constructor() {
        const obj = VibegrationsAppChannelActionCreators;
        return obj.setAppChannelChatOpen(channel.id, !stateFromStores);
      }
    }
  }
  cResult[6] = tmp13;
  cResult[7] = mentionCount;
  cResult[8] = tmp14;
  cResult[9] = items3;
  obj3 = items3;
}) : ((channel) => {
  let ChatIcon;
  let StringResult;
  let badge;
  let intl3;
  let items3;
  let mentionCount;
  channel = channel.channel;
  let tmp = closure_7();
  let obj = channel(504);
  const items = [VibegrationsAppChannelsStore];
  const items1 = [channel.id];
  const stateFromStores = obj.useStateFromStores(items, () => VibegrationsAppChannelsStore.isChatOpen(channel.id), items1);
  ({ mentionCount, badge } = stateFromStores(12830)(channel.id));
  stateFromStores(12830)(channel.id);
  stateFromStores(12831)(channel, stateFromStores);
  let tmp8 = null;
  if (!stateFromStores) {
    tmp8 = badge;
  }
  const intl = tmp2(1127).intl;
  const string = intl.string;
  const tmp5Result = stateFromStores(3718);
  const items2 = [string(stateFromStores ? tmp5Result.jLMpUv : tmp5Result.aWVf4j)];
  if ("mention" === tmp8) {
    const push = items2.push;
    const intl2 = tmp2(1127).intl;
    const obj2 = { mentionCount };
    push(intl2.formatToPlainString(channel(1127).t["3l1GOx"], obj2));
  } else if ("unread" === tmp8) {
    const push2 = items2.push;
    const intl4 = tmp2(1127).intl;
    push2(intl4.string(channel(1127).t.x5zAGZ));
  }
  let tmp14 = null;
  const obj3 = { style: tmp.actionWrapper, children: items3 };
  const tmp12 = closure_6;
  const tmp13 = View;
  if (!stateFromStores) {
    const obj4 = {
      source: null,
      IconComponent: channel(11106).RetryIcon,
      onPress() {
          const tmp = restartVibegrationsAppFramesDefault;
          const obj = VibegrationsUtils;
          return tmp(obj.vibegrationsAppIdFromTopic(channel.topic));
        },
      accessibilityLabel: intl3.string(stateFromStores(3718).xKexN1)
    };
    const tmp5Result3 = stateFromStores(12832);
    intl3 = tmp2(1127).intl;
    tmp14 = closure_5(tmp5Result3, obj4);
  }
  items3 = [tmp14, ];
  const tmp17 = closure_5;
  const tmp5Result4 = stateFromStores(12832);
  if (stateFromStores) {
    ChatIcon = tmp2(5375).AppsIcon;
  } else {
    ChatIcon = tmp2(5386).ChatIcon;
  }
  const obj5 = {
    noMargin: true,
    source: null,
    IconComponent: ChatIcon,
    onPress() {
      const obj = VibegrationsAppChannelActionCreators;
      return obj.setAppChannelChatOpen(channel.id, !stateFromStores);
    },
    accessibilityLabel: items2.join(", "),
    badge: null != tmp8,
    badgePosition: "right",
    buttonText: StringResult
  };
  StringResult = undefined;
  if ("mention" === tmp8) {
    const _String = String;
    StringResult = String(mentionCount);
  }
  items3[1] = tmp17(tmp5Result4, obj5);
  return tmp12(tmp13, obj3);
});
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsAppChannelActions.tsx");

export default tmp4;
