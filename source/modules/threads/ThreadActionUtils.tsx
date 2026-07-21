// Module ID: 3763
// Function ID: 28846
// Name: doesThreadMembersActionAffectMe
// Dependencies: []
// Exports: doesThreadMembersActionAffectMe

// Module 3763 (doesThreadMembersActionAffectMe)
let closure_0 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[1]).fileFinishedImporting("modules/threads/ThreadActionUtils.tsx");

export const doesThreadMembersActionAffectMe = function doesThreadMembersActionAffectMe(removedMemberIds) {
  const id = id.getId();
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
