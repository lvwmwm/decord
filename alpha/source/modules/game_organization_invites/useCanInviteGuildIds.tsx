// Module ID: 11325
// Function ID: 11326
// Name: useCanInviteGuildIds
// Dependencies: [4884, 4878, 4846, 4904, 558, 576, 11293, 11294, 504, 2]

// Module 11325 (useCanInviteGuildIds)
import GuildMemberStore from "GuildMemberStore" /* 4884 */;
import GuildRoleStore from "GuildRoleStore" /* 4878 */;
import GuildStore from "GuildStore" /* 4846 */;
import PermissionStore from "PermissionStore" /* 4904 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useCanInviteGuildIds(arg0) {
  let first;
  let linkedGameOrgInvitesEnabled;
  let tmp10;
  let tmp11;
  let tmp = linkedGameOrgInvitesEnabled;
  let obj = linkedGameOrgInvitesEnabled(576);
  const cResult = obj.c(4);
  const obj2 = linkedGameOrgInvitesEnabled(11293);
  linkedGameOrgInvitesEnabled = obj2.useLinkedGameOrgInvitesEnabled(arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore, GuildMemberStore, GuildRoleStore, PermissionStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== linkedGameOrgInvitesEnabled) {
    const fn = function c() {
      let sorted;
      const tmp = linkedGameOrgInvitesEnabled;
      if (tmp) {
        const guildsArray = GuildStore.getGuildsArray();
        const found = guildsArray.filter((item) => {
          const obj = linkedGameOrgInvitesEnabled(closure_1_1[7]);
          return obj.canInviteToLinkedGameOrganization(item, closure_1_5, closure_1_2, closure_1_3);
        });
        const mapped = found.map((id) => id.id);
        sorted = mapped.sort();
      } else {
        sorted = [];
      }
      return sorted;
    };
    const items1 = [linkedGameOrgInvitesEnabled];
    cResult[1] = linkedGameOrgInvitesEnabled;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp11 = items1;
    tmp10 = fn;
  } else {
    tmp10 = cResult[2];
    tmp11 = cResult[3];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStoresArray(first, tmp10, tmp11);
}) : (function useCanInviteGuildIds(arg0) {
  let linkedGameOrgInvitesEnabled;
  let obj = linkedGameOrgInvitesEnabled(11293);
  linkedGameOrgInvitesEnabled = obj.useLinkedGameOrgInvitesEnabled(arg0);
  const items = [GuildStore, GuildMemberStore, GuildRoleStore, PermissionStore];
  const items1 = [linkedGameOrgInvitesEnabled];
  const obj2 = linkedGameOrgInvitesEnabled(504);
  return obj2.useStateFromStoresArray(items, () => {
    let sorted;
    const tmp = linkedGameOrgInvitesEnabled;
    if (tmp) {
      const guildsArray = GuildStore.getGuildsArray();
      const found = guildsArray.filter((item) => {
        const obj = linkedGameOrgInvitesEnabled(closure_1_1[7]);
        return obj.canInviteToLinkedGameOrganization(item, closure_1_5, closure_1_2, closure_1_3);
      });
      const mapped = found.map((id) => id.id);
      sorted = mapped.sort();
    } else {
      sorted = [];
    }
    return sorted;
  }, items1);
});
const result = size.fileFinishedImporting("modules/game_organization_invites/useCanInviteGuildIds.tsx");

export default tmp2;
