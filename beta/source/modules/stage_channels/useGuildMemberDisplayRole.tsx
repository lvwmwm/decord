// Module ID: 5741
// Function ID: 5742
// Name: useGuildMemberDisplayRole
// Dependencies: [2108, 2067, 4474, 504, 2]
// Exports: default

// Module 5741 (useGuildMemberDisplayRole)
import PermissionUtilsAll from "PermissionUtils" /* 4474 */;
import GuildMemberStore from "GuildMemberStore" /* 2108 */;
import GuildStore from "GuildStore" /* 2067 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

function getHighestHoistedRole(arg0, arg1) {
  let obj;
  let obj2;
  let tmp = arg2;
  if (arg2 === undefined) {
    const items = [GuildStore, GuildMemberStore];
    tmp = items;
  }
  [obj, obj2] = tmp;
  if (null != arg0) {
    if (null != arg1) {
      const guild = obj.getGuild(arg0);
      if (null == guild) {
        return null;
      } else {
        const member = obj2.getMember(guild.id, arg1);
        let highestHoistedRole = null;
        if (null != member) {
          const obj3 = PermissionUtilsAll;
          highestHoistedRole = obj3.getHighestHoistedRole(guild, member);
        }
        return highestHoistedRole;
      }
    }
  }
  return null;
}
const result = size.fileFinishedImporting("modules/stage_channels/useGuildMemberDisplayRole.tsx");

export default function useGuildMemberDisplayRole(arg0, arg1) {
  let closure_0;
  _require = arg0;
  let closure_1 = arg1;
  let items = [GuildStore, GuildMemberStore];
  const items1 = [arg0, arg1];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    const items = [GuildStore, GuildMemberStore];
    return getHighestHoistedRole(closure_0, closure_1, items);
  }, items1);
};
export { getHighestHoistedRole };
