// Module ID: 12361
// Function ID: 12362
// Name: ConjureRepliedMessage
// Dependencies: [2]
// Exports: repliedMessagesById

// Module 12361 (ConjureRepliedMessage)
import size from "module_2" /* 2 */;

let map, set;

let result = size.fileFinishedImporting("modules/conjure/chat/ConjureRepliedMessage.tsx");

export const repliedMessagesById = function repliedMessagesById(memo) {
  map = new Map();
  const iter = memo[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    let hasItem = "user" !== nextResult.role;
    if (!hasItem) {
      hasItem = map.has(tmp2.id);
    }
    if (!hasItem) {
      let obj4;
      let obj = { id: null, content: null, createdAt: tmp2.created_at };
      ({ id: obj2.id, content: obj2.content } = tmp2);
      set = map.set;
      let id = tmp2.id;
      if (null != tmp2.user_id) {
        let obj3 = { userId: tmp2.user_id };
        obj4 = obj3;
      } else {
        obj4 = {};
      }
      let merged = Object.assign(obj4);
      let result = set(id, obj);
    }
    continue;
  }
  return map;
};
