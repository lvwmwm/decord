// Module ID: 4616
// Function ID: 40237
// Name: shouldShowMembershipVerificationGate
// Dependencies: []
// Exports: useShowMemberVerificationGate

// Module 4616 (shouldShowMembershipVerificationGate)
function shouldShowMembershipVerificationGate(guildId, items) {
  let obj;
  let obj2;
  let obj3;
  let tmp = items;
  if (items === undefined) {
    items = [closure_3, closure_4, closure_2];
    tmp = items;
  }
  [obj, obj2, obj3] = tmp;
  if (null == guildId) {
    return false;
  } else {
    const guild = obj.getGuild(guildId);
    const currentUser = obj2.getCurrentUser();
    let flag = false;
    if (null != currentUser) {
      const member = obj3.getMember(guildId, currentUser.id);
      let isPending;
      if (null != member) {
        isPending = member.isPending;
      }
      flag = null != isPending && isPending;
      const tmp9 = null != isPending && isPending;
    }
    if (flag) {
      flag = items(dependencyMap[3]).guildHasVerificationGate(guild);
      const obj4 = items(dependencyMap[3]);
    }
    return flag;
  }
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/guild_member_verification/hooks/useShowMemberVerificationGate.tsx");

export { shouldShowMembershipVerificationGate };
export const useShowMemberVerificationGate = function useShowMemberVerificationGate(guild_id) {
  const arg1 = guild_id;
  const items = [closure_3, closure_4, closure_2];
  const items1 = [guild_id];
  return arg1(dependencyMap[4]).useStateFromStores(items, () => {
    let tmp = null != arg0;
    if (tmp) {
      const items = [closure_3, closure_4, closure_2];
      tmp = callback(arg0, items);
    }
    return tmp;
  }, items1);
};
