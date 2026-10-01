// Module ID: 16392
// Function ID: 16393
// Name: VibegrationsRepliedMessage
// Dependencies: [2]
// Exports: repliedMessage

// Module 16392 (VibegrationsRepliedMessage)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/vibegrations/lib/VibegrationsRepliedMessage.tsx");

export const repliedMessage = function repliedMessage(stateFromStores1, in_reply_to) {
  let closure_0 = in_reply_to;
  if (null != in_reply_to) {
    const found = stateFromStores1.find((id) => id.id === in_reply_to && "user" === id.role);
    if (null != found) {
      let obj3;
      const obj = { id: null, content: null, createdAt: found.created_at };
      ({ id: obj.id, content: obj.content } = found);
      if (null != found.user_id) {
        obj3 = { userId: found.user_id };
        const obj2 = { userId: found.user_id };
      } else {
        obj3 = {};
      }
      const merged = Object.assign(obj3);
      return obj;
    }
  }
};
