// Module ID: 10049
// Function ID: 10050
// Name: ConversationDeepLinkUtils
// Dependencies: [5, 6844, 7686, 5593, 9713, 5592, 11, 2]
// Exports: consumeConversationFocusParam

// Module 10049 (ConversationDeepLinkUtils)
import ConversationConstants from "ConversationConstants" /* 5593 */;
import PostConnectionCallbackStore from "PostConnectionCallbackStore" /* 6844 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ConversationPreviewStore from "ConversationPreviewStore" /* 7686 */;
import size from "module_2" /* 2 */;

let c3, c4, conversationId, dependencyMap;

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
        return { value: "IconComponent", done: null };
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
            return { value: "Reflect", done: true };
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
            obj4 = closure_130_0(closure_130_2[4]);
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
              obj = closure_130_0(closure_130_2[4]);
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
const addPostConnectionCallback = PostConnectionCallbackStore.addPostConnectionCallback;
const CONVERSATION_QUERY_PARAM = ConversationConstants.CONVERSATION_QUERY_PARAM;
let result = size.fileFinishedImporting("modules/conversations/ConversationDeepLinkUtils.tsx");

export { resolveConversationFocusLink };
export const consumeConversationFocusParam = function consumeConversationFocusParam(state) {
  let hash;
  let pathname;
  ({ pathname, hash } = state);
  let channelId;
  let messageId;
  dependencyMap = undefined;
  state = state.state;
  const str = new URLSearchParams(state.search);
  const value = str.get(CONVERSATION_QUERY_PARAM);
  const tmp = CONVERSATION_QUERY_PARAM;
  if (null == value) {
    return null;
  } else {
    let sum;
    str.delete(tmp);
    let obj4 = channelId(5592);
    const tryParseChannelPathResult = obj4.tryParseChannelPath(pathname);
    channelId = undefined;
    if (tryParseChannelPathResult != null) {
      channelId = tryParseChannelPathResult.channelId;
    }
    messageId = undefined;
    if (tryParseChannelPathResult != null) {
      messageId = tryParseChannelPathResult.messageId;
    }
    if (null != channelId) {
      if (null != messageId) {
        obj = messageId(11);
        const tmp5 = messageId;
        if (obj.isProbablyAValidSnowflake(value)) {
          const tmp5Result = tmp5(11);
          dependencyMap = tmp5Result.cast(value);
          addPostConnectionCallback(_asyncToGenerator(async (arg0, value) => {
            let closure_0;
            if (conversationId === 2) {
              conversationId = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp2 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj2 = { value, done: true };
                return obj2;
              } else {
                return { value: "IconComponent", done: null };
              }
            } else {
              try {
                conversationId = 2;
                if (0 === c1) {
                  if (arg0 === 1) {
                    conversationId = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    conversationId = 3;
                    const obj3 = { value, done: true };
                    return obj3;
                  } else {
                    const obj4 = { channelId, conversationId, messageId };
                    c1 = 1;
                    conversationId = 1;
                    const obj5 = { value: resolveConversationFocusLink(obj4), done: false };
                    return obj5;
                  }
                } else if (arg0 === 1) {
                  conversationId = 3;
                  throw value;
                } else if (arg0 === 2) {
                  conversationId = 3;
                  const obj6 = { value, done: true };
                  return obj6;
                } else {
                  if (value) {
                    obj = tmp3(conversationId[4]);
                    const conversationFocus = obj.requestConversationFocus();
                  }
                  conversationId = 3;
                  return { value: "IconComponent", done: null };
                }
              } catch (tmp12) {
                conversationId = 3;
                throw tmp12;
              }
            }
          }));
        }
      }
    }
    const str1 = str.toString();
    if ("" === str1) {
      sum = pathname + hash;
    } else {
      const _HermesInternal = HermesInternal;
      const tmp12 = hash;
      sum = "" + pathname + "?" + str1 + hash;
    }
    let obj2 = { path: sum, state };
    return obj2;
  }
};
