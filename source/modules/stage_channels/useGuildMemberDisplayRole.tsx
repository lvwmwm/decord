// Module ID: 4962
// Function ID: 42666
// Name: getHighestHoistedRole
// Dependencies: [1918, 1838, 3764, 566, 2]
// Exports: default

// Module 4962 (getHighestHoistedRole)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
function getHighestHoistedRole(guildId, id) {
  let obj;
  let obj2;
  let tmp = arg2;
  if (arg2 === undefined) {
    const items = [_createForOfIteratorHelperLoose, _isNativeReflectConstruct];
    tmp = items;
  }
  [obj, obj2] = tmp;
  if (null != guildId) {
    if (null != id) {
      const guild = obj.getGuild(guildId);
      if (null == guild) {
        return null;
      } else {
        const member = obj2.getMember(guild.id, id);
        let highestHoistedRole = null;
        if (null != member) {
          highestHoistedRole = importAll(3764).getHighestHoistedRole(guild, member);
          const obj3 = importAll(3764);
        }
        return highestHoistedRole;
      }
    }
  }
  return null;
}
const result = require("calculateElevatedPermissions").fileFinishedImporting("modules/stage_channels/useGuildMemberDisplayRole.tsx");

export default function useGuildMemberDisplayRole(arg0, arg1) {
  const _require = arg0;
  let closure_1 = arg1;
  let items = [_createForOfIteratorHelperLoose, _isNativeReflectConstruct];
  const items1 = [arg0, arg1];
  return _require(566).useStateFromStores(items, () => {
    const items = [outer1_4, outer1_3];
    return outer1_5(closure_0, closure_1, items);
  }, items1);
};
export { getHighestHoistedRole };
