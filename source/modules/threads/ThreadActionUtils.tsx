// Module ID: 3765
// Function ID: 28852
// Name: doesThreadMembersActionAffectMe
// Dependencies: [1194, 2]
// Exports: doesThreadMembersActionAffectMe

// Module 3765 (doesThreadMembersActionAffectMe)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const result = require("set").fileFinishedImporting("modules/threads/ThreadActionUtils.tsx");

export const doesThreadMembersActionAffectMe = function doesThreadMembersActionAffectMe(removedMemberIds) {
  id = id.getId();
  let tmp2 = null != id;
  if (tmp2) {
    removedMemberIds = removedMemberIds.removedMemberIds;
    const tmp3 = null == removedMemberIds || !removedMemberIds.includes(id);
    let tmp4 = !tmp3;
    if (tmp3) {
      const addedMembers = removedMemberIds.addedMembers;
      tmp4 = !(null == addedMembers || !addedMembers.some((userId) => userId.userId === id));
      const tmp5 = null == addedMembers || !addedMembers.some((userId) => userId.userId === id);
    }
    tmp2 = tmp4;
  }
  return tmp2;
};
