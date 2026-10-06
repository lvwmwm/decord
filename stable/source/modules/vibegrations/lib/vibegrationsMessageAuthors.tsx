// Module ID: 16341
// Function ID: 16342
// Name: vibegrationsMessageAuthors
// Dependencies: [1378, 7630, 2]
// Exports: requestMessageAuthor, resolveMessageAuthor

// Module 16341 (vibegrationsMessageAuthors)
import UserActionCreatorsAll from "UserActionCreators" /* 7630 */;
import UserStore from "UserStore" /* 1378 */;
import size from "module_2" /* 2 */;

let importAll;

const set = new Set();
const map = new Map();
let result = size.fileFinishedImporting("modules/vibegrations/lib/vibegrationsMessageAuthors.tsx");

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
export const requestMessageAuthor = function requestMessageAuthor(arg0) {
  let closure_0;
  importAll = arg0;
  if (null != arg0) {
    const obj2 = set;
    if (!set.has(arg0)) {
      if (null == UserStore.getUser(arg0)) {
        let num = map.get(arg0);
        const obj3 = map;
        if (num == null) {
          num = 0;
        }
        if (num < 3) {
          const result = obj3.set(arg0, num + 1);
          obj2.add(arg0);
          const obj = UserActionCreatorsAll;
          const user = obj.getUser(arg0);
          const cleanupPromise = user.finally(() => set.delete(closure_0));
          cleanupPromise.catch(() => {

          });
        }
      }
    }
  }
};
