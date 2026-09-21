// Module ID: 12096
// Function ID: 12097
// Name: useTypingUsersIds
// Dependencies: [4409, 12095, 1376, 558, 568, 504, 2]

// Module 12096 (useTypingUsersIds)
import RelationshipStore from "RelationshipStore" /* 4409 */;
import TypingStore from "TypingStore" /* 12095 */;
import UserStore from "UserStore" /* 1376 */;

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat/useTypingUsersIds.tsx");

export const useTypingUserIds = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  _require = arg0;
  let MAX_SAFE_INTEGER = arg1;
  const cResult = require("c").c(5);
  if (undefined === arg1) {
    const _Number = Number;
    MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [UserStore, TypingStore, RelationshipStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg0) {
    if (cResult[2] === MAX_SAFE_INTEGER) {
      let tmp9 = cResult[3];
      let tmp10 = cResult[4];
    }
    return require("initialize").useStateFromStoresArray(first, tmp9, tmp10);
  }
  const fn = function c() {
    const currentUser = UserStore.getCurrentUser();
    if (currentUser != null) {
      const id = currentUser.id;
    }
    const typingUsers = TypingStore.getTypingUsers(closure_0);
    const items = [];
    for (const key10013 in typingUsers) {
      if (items.length >= MAX_SAFE_INTEGER) {
        break;
      } else {
        let user = UserStore.getUser(key10013);
        if (null == user) {
          continue;
        } else {
          if (user.id === id) {
            continue;
          } else {
            if (RelationshipStore.isBlockedOrIgnored(user.id)) {
              continue;
            } else {
              let arr = items.push(user.id);
              continue;
            }
            continue;
          }
          continue;
        }
        continue;
      }
    }
    return items;
  };
  const items1 = [arg0, MAX_SAFE_INTEGER];
  cResult[1] = arg0;
  cResult[2] = MAX_SAFE_INTEGER;
  cResult[3] = fn;
  cResult[4] = items1;
  tmp10 = items1;
  tmp9 = fn;
}) : ((arg0) => {
  _require = arg0;
  let MAX_SAFE_INTEGER = arg1;
  if (arg1 === undefined) {
    const _Number = Number;
    MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER;
  }
  let items = [UserStore, TypingStore, RelationshipStore];
  const items1 = [arg0, MAX_SAFE_INTEGER];
  return require("initialize").useStateFromStoresArray(items, () => {
    const currentUser = UserStore.getCurrentUser();
    if (currentUser != null) {
      const id = currentUser.id;
    }
    const typingUsers = TypingStore.getTypingUsers(closure_0);
    const items = [];
    for (const key10013 in typingUsers) {
      if (items.length >= MAX_SAFE_INTEGER) {
        break;
      } else {
        let user = UserStore.getUser(key10013);
        if (null == user) {
          continue;
        } else {
          if (user.id === id) {
            continue;
          } else {
            if (RelationshipStore.isBlockedOrIgnored(user.id)) {
              continue;
            } else {
              let arr = items.push(user.id);
              continue;
            }
            continue;
          }
          continue;
        }
        continue;
      }
    }
    return items;
  }, items1);
});
