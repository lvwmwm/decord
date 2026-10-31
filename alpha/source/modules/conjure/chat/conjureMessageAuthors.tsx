// Module ID: 12633
// Function ID: 12634
// Name: conjureMessageAuthors
// Dependencies: [5, 19, 1383, 8752, 504, 2]
// Exports: requestMessageAuthor, resolveMessageAuthor, useMessageAuthorUser

// Module 12633 (conjureMessageAuthors)
import UserActionCreatorsAll from "UserActionCreators" /* 8752 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1383 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

function settle() {
  return closure_1_8(...arguments);
}
let obj = function _settle() {
  obj = _asyncToGenerator(async (value) => {
    let c2 = 0;
    let c1 = 0;
    let c3 = 0;
    return (async (arg0, value) => {
      if (c1 === 2) {
        c1 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c1 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c1 = 3;
              throw value;
            } else if (arg0 === 2) {
              c1 = 3;
              return { value, done: true };
            } else {
              c3 = 1;
              c2 = 2;
              c1 = 1;
              return { value, done: false };
            }
          } else {
            if (1 === tmp3) {
              c3 = 0;
            } else if (arg0 === 1) {
              c1 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c1 = 3;
              return { value, done: true };
            } else {
              c3 = 0;
            }
            c1 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp4) {
          if (0 === c3) {
            c1 = 3;
            throw tmp4;
          } else {
            c2 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
const map = new Map();
const map1 = new Map();
let result = size.fileFinishedImporting("modules/conjure/chat/conjureMessageAuthors.tsx");

export function resolveMessageAuthor(arg0, arg1, arg2) {
  let tmp;
  if (null == arg0) {
    let tmp2 = arg2;
    if (arg2 == null) {
      tmp2 = null;
    }
    tmp = tmp2;
  } else {
    tmp = arg1;
    if (arg1 == null) {
      tmp = null;
    }
  }
  return tmp;
}
export function requestMessageAuthor(actor_user_id) {
  let closure_0 = actor_user_id;
  if (null != actor_user_id) {
    if (null == UserStore.getUser(actor_user_id)) {
      const value = map.get(actor_user_id);
      const obj2 = map;
      if (null != value) {
        return value;
      } else {
        let num = map1.get(actor_user_id);
        const obj3 = map1;
        if (num == null) {
          num = 0;
        }
        if (num >= 3) {
          return Promise.resolve();
        } else {
          const result = obj3.set(actor_user_id, num + 1);
          obj = UserActionCreatorsAll;
          const user = obj.getUser(actor_user_id);
          const tmp4 = settle(user.finally(() => set.delete(closure_0)));
          const result1 = obj2.set(actor_user_id, tmp4);
          return tmp4;
        }
      }
    }
  }
  return Promise.resolve();
}
export function useMessageAuthorUser(userId) {
  _require = userId;
  const items = [userId];
  const effect = react.useEffect(() => {
    if (null != userId) {
      if (null == UserStore.getUser(userId)) {
        const obj2 = map;
        if (null == map.get(userId)) {
          let num = map1.get(tmp);
          const obj3 = map1;
          if (num == null) {
            num = 0;
          }
          if (num >= 3) {
            const resolved = Promise.resolve();
          } else {
            const result = obj3.set(tmp, num + 1);
            obj = UserActionCreatorsAll;
            const user = obj.getUser(tmp);
            const result1 = obj2.set(tmp, settle(user.finally(() => set.delete(closure_0))));
          }
        }
      }
    }
    const resolved1 = Promise.resolve();
  }, items);
  obj = require("get initialized");
  const items1 = [UserStore];
  const items2 = [userId];
  return obj.useStateFromStores(items1, () => {
    let user = null;
    if (null != userId) {
      user = UserStore.getUser(tmp);
    }
    let currentUser = UserStore.getCurrentUser();
    if (null == userId) {
      if (currentUser == null) {
        currentUser = null;
      }
      user = currentUser;
    } else if (user == null) {
      user = null;
    }
    return user;
  }, items2);
}
