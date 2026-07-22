// Module ID: 11097
// Function ID: 86342
// Name: useTypingUserIds
// Dependencies: []
// Exports: useTypingUserIds

// Module 11097 (useTypingUserIds)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/chat/useTypingUsersIds.tsx");

export const useTypingUserIds = function useTypingUserIds(id, arg1) {
  let MAX_SAFE_INTEGER = arg1;
  arg1 = id;
  if (arg1 === undefined) {
    const _Number = Number;
    MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER;
  }
  const dependencyMap = MAX_SAFE_INTEGER;
  const items = [closure_4, closure_3, closure_2];
  const items1 = [id, MAX_SAFE_INTEGER];
  return arg1(dependencyMap[3]).useStateFromStoresArray(items, () => {
    const currentUser = currentUser.getCurrentUser();
    if (null != currentUser) {
      const id = currentUser.id;
    }
    const typingUsers = typingUsers.getTypingUsers(arg0);
    const items = [];
    for (const key10013 in typingUsers) {
      let tmp7 = key10013;
      let tmp8 = closure_1;
      if (items.length >= closure_1) {
        break;
      } else {
        let tmp3 = closure_4;
        let user = closure_4.getUser(key10013);
        if (null == user) {
          continue;
        } else {
          if (user.id === id) {
            continue;
          } else {
            let tmp5 = closure_2;
            if (closure_2.isBlockedOrIgnored(user.id)) {
              continue;
            } else {
              let arr = items.push(user.id);
              // continue
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
