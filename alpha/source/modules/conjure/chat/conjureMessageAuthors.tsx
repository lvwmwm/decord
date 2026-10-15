// Module ID: 12069
// Function ID: 12070
// Name: conjureMessageAuthors
// Dependencies: [19, 1390, 8524, 558, 576, 504, 2]
// Exports: requestMessageAuthor, resolveMessageAuthor

// Module 12069 (conjureMessageAuthors)
import UserActionCreatorsAll from "UserActionCreators" /* 8524 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1390 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f111479 = () => {

};
const set = new Set();
const map = new Map();
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useMessageAuthorUser(arg0) {
  let closure_0;
  let tmp10;
  let tmp4;
  let tmp5;
  let tmp7;
  let tmp9;
  _require = arg0;
  const tmp = _require;
  let obj = require("react");
  const cResult = obj.c(7);
  if (cResult[0] !== arg0) {
    const fn = function o() {
      if (null != closure_0) {
        const obj2 = set;
        if (!set.has(closure_0)) {
          if (null == UserStore.getUser(closure_0)) {
            let num = map.get(tmp);
            const obj3 = map;
            if (num == null) {
              num = 0;
            }
            if (num < 3) {
              const result = obj3.set(tmp, num + 1);
              obj2.add(closure_0);
              const obj = UserActionCreatorsAll;
              const user = obj.getUser(tmp);
              const cleanupPromise = user.finally(() => set.delete(closure_0));
              cleanupPromise.catch(f111479);
            }
          }
        }
      }
    };
    const items = [arg0];
    let num = 0;
    cResult[0] = arg0;
    cResult[1] = fn;
    cResult[2] = items;
    tmp5 = items;
    tmp4 = fn;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  const effect = react.useEffect(tmp4, tmp5);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserStore];
    cResult[3] = items1;
    tmp7 = items1;
  } else {
    tmp7 = cResult[3];
  }
  if (cResult[4] !== arg0) {
    const fn2 = function c() {
      let user = null;
      if (null != closure_0) {
        user = UserStore.getUser(tmp);
      }
      let currentUser = UserStore.getCurrentUser();
      if (null == closure_0) {
        if (currentUser == null) {
          currentUser = null;
        }
        user = currentUser;
      } else if (user == null) {
        user = null;
      }
      return user;
    };
    const items2 = [arg0];
    cResult[4] = arg0;
    cResult[5] = fn2;
    cResult[6] = items2;
    tmp10 = items2;
    tmp9 = fn2;
  } else {
    tmp9 = cResult[5];
    tmp10 = cResult[6];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(tmp7, tmp9, tmp10);
}) : (function useMessageAuthorUser(arg0) {
  let closure_0;
  _require = arg0;
  const items = [arg0];
  const effect = react.useEffect(() => {
    if (null != closure_0) {
      const obj2 = set;
      if (!set.has(closure_0)) {
        if (null == UserStore.getUser(closure_0)) {
          let num = map.get(tmp);
          const obj3 = map;
          if (num == null) {
            num = 0;
          }
          if (num < 3) {
            const result = obj3.set(tmp, num + 1);
            obj2.add(closure_0);
            const obj = UserActionCreatorsAll;
            const user = obj.getUser(tmp);
            const cleanupPromise = user.finally(() => set.delete(closure_0));
            cleanupPromise.catch(f111479);
          }
        }
      }
    }
  }, items);
  let obj = require("get initialized");
  const items1 = [UserStore];
  const items2 = [arg0];
  return obj.useStateFromStores(items1, () => {
    let user = null;
    if (null != closure_0) {
      user = UserStore.getUser(tmp);
    }
    let currentUser = UserStore.getCurrentUser();
    if (null == closure_0) {
      if (currentUser == null) {
        currentUser = null;
      }
      user = currentUser;
    } else if (user == null) {
      user = null;
    }
    return user;
  }, items2);
});
function resolveMessageAuthor(arg0, arg1, arg2) {
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
function requestMessageAuthor(actor_user_id) {
  let closure_0 = actor_user_id;
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
          const cleanupPromise = user.finally(() => set.delete(closure_0));
          cleanupPromise.catch(f111479);
        }
      }
    }
  }
}
let result = size.fileFinishedImporting("modules/conjure/chat/conjureMessageAuthors.tsx");

export { resolveMessageAuthor };
export { requestMessageAuthor };
export const useMessageAuthorUser = tmp4;
