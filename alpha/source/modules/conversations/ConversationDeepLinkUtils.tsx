// Module ID: 10010
// Function ID: 10011
// Name: ConversationDeepLinkUtils
// Dependencies: [5, 7012, 7869, 5809, 6204, 9985, 5808, 11, 10011, 2]
// Exports: consumeConversationFocusParam, getConversationPermalink

// Module 10010 (ConversationDeepLinkUtils)
import ConversationConstants from "ConversationConstants" /* 5809 */;
import ChannelUtils from "ChannelUtils" /* 6204 */;
import PostConnectionCallbackStore from "PostConnectionCallbackStore" /* 7012 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import ConversationPreviewStore from "ConversationPreviewStore" /* 7869 */;
import size from "module_2" /* 2 */;

let c3, c4;

function resolveConversationFocusLink() {
  return obj(...arguments);
}
let obj = function _resolveConversationFocusLink() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let c0;
    let c1;
    let c2;
    let obj4;
    let closure_0 = arg0;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        let conversation;
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp4;
            let closure_1 = tmp;
            c0 = undefined;
            c1 = undefined;
            c2 = undefined;
            ({ channelId: c0, conversationId: c1, messageId: c2 } = closure_0);
            conversation = undefined;
            c3 = 1;
            c4 = 1;
            return { value: "flexDirection", done: true };
          }
        } else if (1 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            c3 = 2;
            c4 = 1;
            const obj6 = { value: obj4.fetchConversation(c0, c1), done: false };
            obj4 = closure_130_0(closure_130_2[5]);
            return obj6;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          conversation = closure_130_5.getConversation(c1);
          const tmp7 = null == conversation || conversation.messageCount <= 1;
          let tmp8 = !tmp7;
          if (tmp8) {
            const messageIds = conversation.messageIds;
            let flag = messageIds.includes(c2);
            if (flag) {
              obj = closure_130_0(closure_130_2[5]);
              const result = obj.setSelectedConversation(c0, conversation.id, { cacheType: "preview", shouldJump: false });
              flag = true;
            }
            tmp8 = flag;
          }
          c4 = 3;
          const obj8 = { value: tmp8, done: true };
          return obj8;
        }
      } catch (tmp26) {
        c4 = 3;
        throw tmp26;
      }
    }
  });
  return obj(...arguments);
};
let _asyncToGenerator = _asyncToGenerator_mod;
const addPostConnectionCallback = PostConnectionCallbackStore.addPostConnectionCallback;
const CONVERSATION_QUERY_PARAM = ConversationConstants.CONVERSATION_QUERY_PARAM;
let result = size.fileFinishedImporting("modules/conversations/ConversationDeepLinkUtils.tsx");

export function getConversationPermalink(id) {
  let channelId;
  let guildId;
  let startMessageId;
  obj = { [closure_1_6]: id.id };
  ({ guildId, channelId, startMessageId } = id);
  const str = new URLSearchParams(obj);
  const obj2 = ChannelUtils;
  const channelPermalink = obj2.getChannelPermalink(guildId, channelId, startMessageId);
  return "" + channelPermalink + "?" + str.toString();
}
export { resolveConversationFocusLink };
export function consumeConversationFocusParam(state) {
  let closure_3;
  let hash;
  let pathname;
  ({ pathname, hash } = state);
  let channelId;
  let messageId;
  let guildId;
  _asyncToGenerator = undefined;
  state = state.state;
  const str = new URLSearchParams(state.search);
  const value = str.get(CONVERSATION_QUERY_PARAM);
  const tmp = CONVERSATION_QUERY_PARAM;
  if (null == value) {
    return null;
  } else {
    let sum;
    str.delete(tmp);
    const tmp16 = guildId;
    let obj4 = channelId(guildId[6]);
    const tryParseChannelPathResult = obj4.tryParseChannelPath(pathname);
    channelId = undefined;
    if (tryParseChannelPathResult != null) {
      channelId = tryParseChannelPathResult.channelId;
    }
    messageId = undefined;
    if (tryParseChannelPathResult != null) {
      messageId = tryParseChannelPathResult.messageId;
    }
    if (null != tryParseChannelPathResult) {
      if (null != channelId) {
        if (null != messageId) {
          obj = messageId(tmp16[7]);
          const tmp5 = messageId;
          if (obj.isProbablyAValidSnowflake(value)) {
            guildId = tryParseChannelPathResult.guildId;
            const tmp5Result = tmp5(tmp16[7]);
            _asyncToGenerator = tmp5Result.cast(value);
            addPostConnectionCallback(_asyncToGenerator(async (arg0, value) => {
              let c2;
              let closure_0;
              let v2;
              if (guildId === 2) {
                guildId = 3;
                throw new TypeError("Generator functions may not be called on executing generators");
              } else if (tmp2 === 3) {
                if (arg0 === 1) {
                  throw value;
                } else if (arg0 === 2) {
                  const obj2 = { value, done: true };
                  return obj2;
                } else {
                  return { value: "HermesInternal", done: null };
                }
              } else {
                try {
                  guildId = 2;
                  if (0 === messageId) {
                    if (arg0 === 1) {
                      guildId = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      guildId = 3;
                      const obj3 = { value, done: true };
                      return obj3;
                    } else {
                      channelId = tmp3;
                      messageId = 1;
                      guildId = 1;
                      const obj4 = { value: messageId(guildId[8])(guildId), done: false };
                      return obj4;
                    }
                  } else if (1 === messageId) {
                    if (arg0 === 1) {
                      guildId = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      guildId = 3;
                      const obj5 = { value, done: true };
                      return obj5;
                    } else {
                      const obj6 = { channelId: closure_128_0, conversationId: closure_128_3, messageId: closure_128_1 };
                      messageId = 2;
                      guildId = 1;
                      const obj7 = { value: resolveConversationFocusLink(obj6), done: false };
                      return obj7;
                    }
                  } else if (arg0 === 1) {
                    guildId = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    guildId = 3;
                    const obj8 = { value, done: true };
                    return obj8;
                  } else {
                    if (value) {
                      obj = channelId(guildId[5]);
                      const conversationFocus = obj.requestConversationFocus();
                    }
                    guildId = 3;
                    return { value: "HermesInternal", done: null };
                  }
                } catch (tmp16) {
                  guildId = 3;
                  throw tmp16;
                }
              }
            }));
          }
        }
      }
    }
    const str1 = str.toString();
    if ("" === str1) {
      sum = pathname + hash;
    } else {
      const _HermesInternal = HermesInternal;
      sum = "" + pathname + "?" + str1 + hash;
    }
    let obj2 = { path: sum, state };
    return obj2;
  }
}
