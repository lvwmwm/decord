// Module ID: 15558
// Function ID: 15559
// Name: BlockedUserUtils
// Dependencies: [4951, 1380, 2]
// Exports: filterOutBlockedOrIgnoredUserIds, filterOutBlockedOrIgnoredUsers, hasBlockedOrIgnoredUserIds

// Module 15558 (BlockedUserUtils)
import RelationshipStore from "RelationshipStore" /* 4951 */;
import size from "module_2" /* 2 */;

let id;

const result = size.fileFinishedImporting("modules/blocking/BlockedUserUtils.tsx");

export function filterOutBlockedOrIgnoredUsers(mapped, arg1) {
  let closure_0 = arg1;
  const found = mapped.filter((item) => {
    const obj = closure_0(dependencyMap[1]);
    return obj.isNotNullish(item);
  });
  return found.filter((id) => {
    let hasItem;
    id = id.id;
    const obj = closure_0;
    if (null != closure_0) {
      hasItem = obj.has(id);
    } else {
      hasItem = RelationshipStore.isBlockedOrIgnored(id);
    }
    return !hasItem;
  });
}
export function filterOutBlockedOrIgnoredUserIds(arr, arg1) {
  let closure_0 = arg1;
  return arr.filter((item) => {
    let hasItem;
    const obj = closure_0;
    if (null != closure_0) {
      hasItem = obj.has(item);
    } else {
      hasItem = RelationshipStore.isBlockedOrIgnored(item);
    }
    return !hasItem;
  });
}
export function hasBlockedOrIgnoredUserIds(items, blockedOrIgnoredUserIds) {
  let closure_0 = blockedOrIgnoredUserIds;
  return items.some((item) => {
    let hasItem;
    const obj = blockedOrIgnoredUserIds;
    if (null != blockedOrIgnoredUserIds) {
      hasItem = obj.has(item);
    } else {
      hasItem = RelationshipStore.isBlockedOrIgnored(item);
    }
    return hasItem;
  });
}
