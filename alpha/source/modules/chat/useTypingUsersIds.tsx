// Module ID: 13680
// Function ID: 13681
// Name: useTypingUsersIds
// Dependencies: [4951, 13679, 1384, 504, 2]
// Exports: useTypingUserIds

// Module 13680 (useTypingUsersIds)
import RelationshipStore from "RelationshipStore" /* 4951 */;
import TypingStore from "TypingStore" /* 13679 */;
import UserStore from "UserStore" /* 1384 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/chat/useTypingUsersIds.tsx");

export function useTypingUserIds(id, arg1) {
  _require = id;
  let MAX_SAFE_INTEGER = arg1;
  if (arg1 === undefined) {
    const _Number = Number;
    MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER;
  }
  let items = [UserStore, TypingStore, RelationshipStore];
  const items1 = [id, MAX_SAFE_INTEGER];
  const obj = require("get initialized");
  return obj.useStateFromStoresArray(items, () => {
    const currentUser = UserStore.getCurrentUser();
    if (currentUser != null) {
      id = currentUser.id;
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
}
