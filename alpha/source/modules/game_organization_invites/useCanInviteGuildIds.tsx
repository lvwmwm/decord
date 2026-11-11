// Module ID: 12441
// Function ID: 12442
// Name: useCanInviteGuildIds
// Dependencies: [5155, 5149, 5114, 5175, 12442, 504, 12443, 2]
// Exports: default

// Module 12441 (useCanInviteGuildIds)
import GuildMemberStore from "GuildMemberStore" /* 5155 */;
import GuildRoleStore from "GuildRoleStore" /* 5149 */;
import GuildStore from "GuildStore" /* 5114 */;
import PermissionStore from "PermissionStore" /* 5175 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_organization_invites/useCanInviteGuildIds.tsx");

export default function useCanInviteGuildIds(location) {
  let linkedGameOrgInvitesEnabled;
  let obj = linkedGameOrgInvitesEnabled(12442);
  linkedGameOrgInvitesEnabled = obj.useLinkedGameOrgInvitesEnabled(location);
  const items = [GuildStore, GuildMemberStore, GuildRoleStore, PermissionStore];
  const items1 = [linkedGameOrgInvitesEnabled];
  const obj2 = linkedGameOrgInvitesEnabled(504);
  return obj2.useStateFromStoresArray(items, () => {
    let sorted;
    const tmp = linkedGameOrgInvitesEnabled;
    if (tmp) {
      const guildsArray = GuildStore.getGuildsArray();
      const found = guildsArray.filter((item) => {
        const obj = linkedGameOrgInvitesEnabled(closure_1_1[6]);
        return obj.canInviteToLinkedGameOrganization(item, closure_1_5, closure_1_2, closure_1_3);
      });
      const mapped = found.map((id) => id.id);
      sorted = mapped.sort();
    } else {
      sorted = [];
    }
    return sorted;
  }, items1);
};
