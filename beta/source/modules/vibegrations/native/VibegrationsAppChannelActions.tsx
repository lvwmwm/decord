// Module ID: 13560
// Function ID: 13561
// Name: VibegrationsAppChannelActions
// Dependencies: [19, 17, 13561, 21, 4758, 558, 568, 504, 13562, 13563, 1119, 3682, 13564, 11860, 13186, 5276, 5280, 5291, 13565, 2]

// Module 13560 (VibegrationsAppChannelActions)
import VibegrationsUtils from "VibegrationsUtils" /* 5276 */;
import restartVibegrationsAppFramesDefault from "restartVibegrationsAppFrames" /* 13186 */;
import VibegrationsAppChannelActionCreators from "VibegrationsAppChannelActionCreators" /* 13565 */;
import noop from "module_19" /* 19 */;
import VibegrationsAppChannelsStore from "VibegrationsAppChannelsStore" /* 13561 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4758);
let closure_7 = createStyles.createStyles({ actionWrapper: { flexShrink: 0, flexDirection: "row", alignItems: "center" } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsAppChannelActions.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  const cResult = channel(568).c(29);
  channel = channel.channel;
  const tmp4 = closure_7();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [VibegrationsAppChannelsStore];
    cResult[0] = items;
    let first = items;
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
    let tmp8 = items1;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const obj = channel(568);
  const stateFromStores = channel(504).useStateFromStores(first, tmp7, tmp8);
  const tmpResult = channel(504);
  ({ mentionCount, badge } = stateFromStores(13562)(channel.id));
  stateFromStores(13563)(channel, stateFromStores);
  let tmp13 = null;
  if (!stateFromStores) {
    tmp13 = badge;
  }
  if (cResult[4] !== stateFromStores) {
    const intl = tmp(1119).intl;
    const tmp10Result = tmp10(3682);
    const stringResult = intl.string(stateFromStores ? tmp10Result.jLMpUv : tmp10Result.aWVf4j);
    cResult[4] = stateFromStores;
    cResult[5] = stringResult;
  } else {
    if (cResult[6] === tmp13) {
      if (cResult[7] === mentionCount) {
        if (cResult[8] === tmp14) {
          if (cResult[13] === channel.topic) {
            if (cResult[14] === stateFromStores) {
              let tmp25 = cResult[15];
            }
            if (stateFromStores) {
              let ChatIcon = tmp(5280).AppsIcon;
            } else {
              ChatIcon = tmp(5291).ChatIcon;
            }
            if (cResult[16] === channel.id) {
              if (cResult[17] === stateFromStores) {
                let tmp27 = cResult[18];
              }
              const joined = obj3.join(", ");
              class L {
                constructor() {
                  obj = closure_0(closure_2[18]);
                  return obj.setAppChannelChatOpen(channel.id, !closure_1);
                }
              }
              let StringResult;
              if ("mention" === tmp13) {
                const _String = String;
                StringResult = String(mentionCount);
              }
              if (cResult[19] === tmp29) {
                if (cResult[20] === StringResult) {
                  if (cResult[21] === ChatIcon) {
                    if (cResult[22] === tmp27) {
                      if (cResult[23] === joined) {
                        let tmp31 = cResult[24];
                      }
                      if (cResult[25] === tmp4.actionWrapper) {
                        if (cResult[26] === tmp31) {
                          if (cResult[27] === tmp25) {
                            let tmp34 = cResult[28];
                          }
                          return tmp34;
                        }
                      }
                      class L {
                        constructor() {
                          obj = closure_0(closure_2[18]);
                          return obj.setAppChannelChatOpen(channel.id, !closure_1);
                        }
                      }
                      const obj2 = { style: tmp24, children: null };
                      const items2 = [tmp25, tmp31];
                      obj2.children = items2;
                      const tmp36 = closure_6(View, obj2);
                      cResult[25] = tmp4.actionWrapper;
                      cResult[26] = tmp31;
                      cResult[27] = tmp25;
                      cResult[28] = tmp36;
                      tmp34 = tmp36;
                    }
                  }
                }
              }
              const obj4 = { noMargin: true, source: null, IconComponent: ChatIcon, onPress: tmp27, accessibilityLabel: joined, badge: tmp29, badgePosition: "right", buttonText: StringResult };
              const tmp33 = closure_5(tmp10(13564), obj4);
              cResult[19] = tmp29;
              cResult[20] = StringResult;
              cResult[21] = ChatIcon;
              cResult[22] = tmp27;
              cResult[23] = joined;
              cResult[24] = tmp33;
              tmp31 = tmp33;
            }
            class L {
              constructor() {
                obj = closure_0(closure_2[18]);
                return obj.setAppChannelChatOpen(channel.id, !closure_1);
              }
            }
            cResult[16] = channel.id;
            cResult[17] = stateFromStores;
            cResult[18] = L;
            tmp27 = L;
          }
          cResult[13] = channel.topic;
          cResult[14] = stateFromStores;
          cResult[15] = null;
          tmp25 = tmp26;
          obj3 = cResult[9];
        }
      }
    }
    const items3 = [];
    if ("mention" !== tmp13) {
      if ("unread" === tmp13) {
        const _Symbol = Symbol;
        if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = tmp(1119).intl;
          const stringResult1 = intl2.string(tmp(1119).t.x5zAGZ);
          class L {
            constructor() {
              obj = closure_0(closure_2[18]);
              return obj.setAppChannelChatOpen(channel.id, !closure_1);
            }
          }
          cResult[12] = stringResult1;
        }
        class L {
          constructor() {
            obj = closure_0(closure_2[18]);
            return obj.setAppChannelChatOpen(channel.id, !closure_1);
          }
        }
      }
      class L {
        constructor() {
          obj = closure_0(closure_2[18]);
          return obj.setAppChannelChatOpen(channel.id, !closure_1);
        }
      }
      cResult[7] = mentionCount;
      cResult[8] = tmp14;
      cResult[9] = items3;
    }
    if (cResult[10] !== mentionCount) {
      const intl3 = tmp(1119).intl;
      class L {
        constructor() {
          obj = closure_0(closure_2[18]);
          return obj.setAppChannelChatOpen(channel.id, !closure_1);
        }
      }
      const formatToPlainStringResult = intl3.formatToPlainString(tmp(1119).t["3l1GOx"], { mentionCount: null });
      cResult[10] = mentionCount;
      cResult[11] = formatToPlainStringResult;
      let tmp20 = formatToPlainStringResult;
      const obj5 = { mentionCount: null };
    } else {
      tmp20 = cResult[11];
    }
    items3.push(tmp20);
  }
}) : ((channel) => {
  channel = channel.channel;
  let tmp = closure_7();
  const items = [VibegrationsAppChannelsStore];
  const items1 = [channel.id];
  const stateFromStores = channel(504).useStateFromStores(items, () => VibegrationsAppChannelsStore.isChatOpen(channel.id), items1);
  const obj = channel(504);
  ({ mentionCount, badge } = stateFromStores(13562)(channel.id));
  stateFromStores(13563)(channel, stateFromStores);
  let tmp8 = null;
  if (!stateFromStores) {
    tmp8 = badge;
  }
  const intl = tmp2(1119).intl;
  const tmp5Result = stateFromStores(3682);
  const items2 = [intl.string(stateFromStores ? tmp5Result.jLMpUv : tmp5Result.aWVf4j)];
  if ("mention" === tmp8) {
    const intl2 = tmp2(1119).intl;
    const obj2 = { mentionCount };
    items2.push(intl2.formatToPlainString(tmp2(1119).t["3l1GOx"], obj2));
  } else if ("unread" === tmp8) {
    const intl4 = tmp2(1119).intl;
    items2.push(intl4.string(tmp2(1119).t.x5zAGZ));
  }
  const obj3 = { style: tmp.actionWrapper, children: null };
  let tmp14 = null;
  if (!stateFromStores) {
    const obj4 = {
      source: null,
      IconComponent: tmp2(11860).RetryIcon,
      onPress() {
          const tmp = restartVibegrationsAppFramesDefault;
          return tmp(VibegrationsUtils.vibegrationsAppIdFromTopic(channel.topic));
        },
      accessibilityLabel: null
    };
    const intl3 = tmp2(1119).intl;
    obj4.accessibilityLabel = intl3.string(tmp5(3682).xKexN1);
    tmp14 = closure_5(tmp5(13564), obj4);
    const tmp5Result3 = tmp5(13564);
  }
  const items3 = [tmp14, ];
  const tmp12 = closure_6;
  const tmp13 = View;
  const tmp17 = closure_5;
  const tmp6 = stateFromStores(13562)(channel.id);
  if (stateFromStores) {
    let ChatIcon = tmp2(5280).AppsIcon;
  } else {
    ChatIcon = tmp2(5291).ChatIcon;
  }
  const obj5 = {
    noMargin: true,
    source: null,
    IconComponent: ChatIcon,
    onPress() {
      return VibegrationsAppChannelActionCreators.setAppChannelChatOpen(channel.id, !stateFromStores);
    },
    accessibilityLabel: items2.join(", "),
    badge: null != tmp8,
    badgePosition: "right",
    buttonText: null
  };
  let StringResult;
  if ("mention" === tmp8) {
    const _String = String;
    StringResult = String(mentionCount);
  }
  obj5.buttonText = StringResult;
  items3[1] = tmp17(stateFromStores(13564), obj5);
  obj3.children = items3;
  return tmp12(tmp13, obj3);
});
