// Module ID: 11107
// Function ID: 86392
// Name: useTypingUserIds
// Dependencies: [3767, 11108, 1849, 566, 2]
// Exports: useTypingUserIds

// Module 11107 (useTypingUserIds)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/chat/useTypingUsersIds.tsx");

export const useTypingUserIds = function useTypingUserIds(id, arg1) {
  let MAX_SAFE_INTEGER = arg1;
  const _require = id;
  if (arg1 === undefined) {
    const _Number = Number;
    MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER;
  }
  let items = [closure_4, closure_3, _isNativeReflectConstruct];
  const items1 = [id, MAX_SAFE_INTEGER];
  return _require(MAX_SAFE_INTEGER[3]).useStateFromStoresArray(items, () => {
    const currentUser = outer1_4.getCurrentUser();
    if (null != currentUser) {
      const id = currentUser.id;
    }
    const typingUsers = outer1_3.getTypingUsers(closure_0);
    const items = [];
    for (const key10013 in typingUsers) {
      let tmp7 = key10013;
      let tmp8 = MAX_SAFE_INTEGER;
      if (items.length >= MAX_SAFE_INTEGER) {
        break;
      } else {
        let tmp3 = outer1_4;
        let user = outer1_4.getUser(key10013);
        if (null == user) {
          continue;
        } else {
          if (user.id === id) {
            continue;
          } else {
            let tmp5 = outer1_2;
            if (outer1_2.isBlockedOrIgnored(user.id)) {
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
};
