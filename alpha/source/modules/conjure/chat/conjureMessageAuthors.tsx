// Module ID: 17135
// Function ID: 17136
// Name: conjureMessageAuthors
// Dependencies: [1390, 8305, 2]
// Exports: requestMessageAuthor, resolveMessageAuthor

// Module 17135 (conjureMessageAuthors)
import UserActionCreatorsAll from "UserActionCreators" /* 8305 */;
import UserStore from "UserStore" /* 1390 */;
import size from "module_2" /* 2 */;

let importAll;

const set = new Set();
const map = new Map();
let result = size.fileFinishedImporting("modules/conjure/chat/conjureMessageAuthors.tsx");

export const resolveMessageAuthor = function resolveMessageAuthor(arg0, user, currentUser) {
  let tmp;
  if (null == arg0) {
    let tmp2 = currentUser;
    if (currentUser == null) {
      tmp2 = null;
    }
    tmp = tmp2;
  } else {
    tmp = user;
    if (user == null) {
      tmp = null;
    }
  }
  return tmp;
};
export const requestMessageAuthor = function requestMessageAuthor(actor_user_id) {
  importAll = actor_user_id;
  if (null != actor_user_id) {
    const obj2 = set;
    if (!set.has(actor_user_id)) {
      if (null == UserStore.getUser(actor_user_id)) {
        let num = map.get(actor_user_id);
        const obj3 = map;
        if (num == null) {
          num = 0;
        }
        if (num < 3) {
          const result = obj3.set(actor_user_id, num + 1);
          obj2.add(actor_user_id);
          const obj = UserActionCreatorsAll;
          const user = obj.getUser(actor_user_id);
          const cleanupPromise = user.finally(() => set.delete(actor_user_id));
          cleanupPromise.catch(() => {

          });
        }
      }
    }
  }
};
