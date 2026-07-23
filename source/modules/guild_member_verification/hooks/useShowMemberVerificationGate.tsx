// Module ID: 4619
// Function ID: 40284
// Name: shouldShowMembershipVerificationGate
// Dependencies: [1917, 1838, 1849, 4620, 566, 2]
// Exports: useShowMemberVerificationGate

// Module 4619 (shouldShowMembershipVerificationGate)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_4 from "_isNativeReflectConstruct";

const require = arg1;
function shouldShowMembershipVerificationGate(guildId, items) {
  let obj;
  let obj2;
  let obj3;
  let tmp = items;
  if (items === undefined) {
    items = [_createForOfIteratorHelperLoose, closure_4, _isNativeReflectConstruct];
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
      flag = require(4620) /* isValidFormResponse */.guildHasVerificationGate(guild);
      const obj4 = require(4620) /* isValidFormResponse */;
    }
    return flag;
  }
}
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_member_verification/hooks/useShowMemberVerificationGate.tsx");

export { shouldShowMembershipVerificationGate };
export const useShowMemberVerificationGate = function useShowMemberVerificationGate(guild_id) {
  const _require = guild_id;
  let items = [_createForOfIteratorHelperLoose, closure_4, _isNativeReflectConstruct];
  const items1 = [guild_id];
  return _require(566).useStateFromStores(items, () => {
    let tmp = null != closure_0;
    if (tmp) {
      const items = [outer1_3, outer1_4, outer1_2];
      tmp = outer1_5(closure_0, items);
    }
    return tmp;
  }, items1);
};
