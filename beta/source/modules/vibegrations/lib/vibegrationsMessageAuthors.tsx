// Module ID: 16339
// Function ID: 16340
// Name: vibegrationsMessageAuthors
// Dependencies: [1372, 7626, 2]
// Exports: requestMessageAuthor, resolveMessageAuthor

// Module 16339 (vibegrationsMessageAuthors)
import UserActionCreatorsAll from "UserActionCreators" /* 7626 */;
import UserStore from "UserStore" /* 1372 */;
import size from "module_2" /* 2 */;

let importAll;

const set = new Set();
const map = new Map();
let result = size.fileFinishedImporting("modules/vibegrations/lib/vibegrationsMessageAuthors.tsx");

export const resolveMessageAuthor = function resolveMessageAuthor(userId, user, currentUser) {
  let tmp;
  if (null == userId) {
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
export const requestMessageAuthor = function requestMessageAuthor(userId) {
  importAll = userId;
  if (null != userId) {
    const obj2 = set;
    if (!set.has(userId)) {
      if (null == UserStore.getUser(userId)) {
        let num = map.get(userId);
        const obj3 = map;
        if (num == null) {
          num = 0;
        }
        if (num < 3) {
          const result = obj3.set(userId, num + 1);
          obj2.add(userId);
          const obj = UserActionCreatorsAll;
          const user = obj.getUser(userId);
          const cleanupPromise = user.finally(() => set.delete(userId));
          cleanupPromise.catch(() => {

          });
        }
      }
    }
  }
};
