// Module ID: 17038
// Function ID: 17039
// Name: vibegrationsMessageAuthors
// Dependencies: [1376, 8487, 2]
// Exports: requestMessageAuthor, resolveMessageAuthor

// Module 17038 (vibegrationsMessageAuthors)
import UserActionCreatorsAll from "UserActionCreators" /* 8487 */;
import UserStore from "UserStore" /* 1376 */;

const set = new Set();
const map = new Map();
const size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/lib/vibegrationsMessageAuthors.tsx");

export const resolveMessageAuthor = function resolveMessageAuthor(arg0, user, currentUser) {
  if (null == arg0) {
    let tmp2 = currentUser;
    if (currentUser == null) {
      tmp2 = null;
    }
    let tmp = tmp2;
  } else {
    tmp = user;
    if (user == null) {
      tmp = null;
    }
  }
  return tmp;
};
export const requestMessageAuthor = function requestMessageAuthor(arg0) {
  importAll = arg0;
  if (null != arg0) {
    if (!set.has(arg0)) {
      if (null == UserStore.getUser(arg0)) {
        let num = map.get(arg0);
        if (num == null) {
          num = 0;
        }
        if (num < 3) {
          const result = obj3.set(arg0, num + 1);
          obj2.add(arg0);
          const user = UserActionCreatorsAll.getUser(arg0);
          user.finally(() => set.delete(closure_0)).catch(() => {

          });
          const cleanupPromise = user.finally(() => set.delete(closure_0));
        }
        obj3 = map;
      }
    }
    obj2 = set;
  }
};
