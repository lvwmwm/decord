// Module ID: 10071
// Function ID: 10072
// Name: openConversationFocusLink
// Dependencies: [5, 10072, 9742, 2002, 2]
// Exports: default

// Module 10071 (openConversationFocusLink)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let channelId, conversationId, guildId, messageId;

let obj = function _openConversationFocusLink() {
  obj = _asyncToGenerator(async (guildId) => {
    let c3 = 0;
    let c4 = 0;
    const iter = (async (arg0, value) => {
      let c0;
      let c1;
      let c2;
      let c3;
      let obj5;
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === messageId) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              return { value, done: true };
            } else {
              let closure_2 = tmp4;
              let closure_1 = tmp;
              guildId = undefined;
              channelId = undefined;
              conversationId = undefined;
              ({ guildId: c0, channelId: c1, conversationId: c2, messageId: c3 } = closure_0);
              messageId = 1;
              c4 = 1;
              return { value: "Reflect", done: true };
            }
          } else if (1 === messageId) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              return { value, done: true };
            } else {
              const obj6 = { channelId, conversationId, messageId };
              messageId = 2;
              c4 = 1;
              const obj7 = { value: obj5.resolveConversationFocusLink(obj6), done: false };
              obj5 = closure_130_0(closure_130_1[1]);
              return obj7;
            }
          } else {
            if (2 === messageId) {
              if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                return { value, done: true };
              } else if (value) {
                messageId = 3;
                c4 = 1;
                const obj9 = { value: closure_130_0(closure_130_1[3])(closure_130_1[2], closure_130_1.paths), done: false };
                return obj9;
              }
            } else if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              return { value, done: true };
            } else {
              obj = { channelId, guildId, focusSelectedConversation: true };
              const result = value.openConversationNavigator(obj);
            }
            c4 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp22) {
          c4 = 3;
          throw tmp22;
        }
      }
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
let result = size.fileFinishedImporting("modules/conversations/native/openConversationFocusLink.tsx");

export default function openConversationFocusLink() {
  return obj(...arguments);
};
