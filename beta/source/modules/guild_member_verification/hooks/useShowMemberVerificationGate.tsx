// Module ID: 8632
// Function ID: 8633
// Name: useShowMemberVerificationGate
// Dependencies: [4926, 4885, 1383, 6968, 504, 2]
// Exports: useShowMemberVerificationGate

// Module 8632 (useShowMemberVerificationGate)
import MemberVerificationUtils from "MemberVerificationUtils" /* 6968 */;
import GuildMemberStore from "GuildMemberStore" /* 4926 */;
import GuildStore from "GuildStore" /* 4885 */;
import UserStore from "UserStore" /* 1383 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

function shouldShowMembershipVerificationGate(guildId, items) {
  let obj;
  let obj2;
  let obj3;
  let tmp = items;
  if (items === undefined) {
    items = [GuildStore, UserStore, GuildMemberStore];
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
      let flag2;
      if (member != null) {
        flag2 = member.isPending;
      }
      if (flag2 == null) {
        flag2 = false;
      }
      flag = flag2;
    }
    if (flag) {
      const obj4 = MemberVerificationUtils;
      flag = obj4.guildHasVerificationGate(guild);
    }
    return flag;
  }
}
const result = size.fileFinishedImporting("modules/guild_member_verification/hooks/useShowMemberVerificationGate.tsx");

export { shouldShowMembershipVerificationGate };
export function useShowMemberVerificationGate(guild_id) {
  _require = guild_id;
  let items = [GuildStore, UserStore, GuildMemberStore];
  const items1 = [guild_id];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    let tmp2 = null != guild_id;
    if (tmp2) {
      const items = [GuildStore, UserStore, GuildMemberStore];
      tmp2 = shouldShowMembershipVerificationGate(tmp, items);
    }
    return tmp2;
  }, items1);
}
