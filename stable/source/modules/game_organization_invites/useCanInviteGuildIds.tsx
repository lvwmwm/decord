// Module ID: 11848
// Function ID: 11849
// Name: useCanInviteGuildIds
// Dependencies: [5082, 5076, 5041, 5102, 11815, 504, 11816, 2]
// Exports: default

// Module 11848 (useCanInviteGuildIds)
import GuildMemberStore from "GuildMemberStore" /* 5082 */;
import GuildRoleStore from "GuildRoleStore" /* 5076 */;
import GuildStore from "GuildStore" /* 5041 */;
import PermissionStore from "PermissionStore" /* 5102 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_organization_invites/useCanInviteGuildIds.tsx");

export default function useCanInviteGuildIds(location) {
  let linkedGameOrgInvitesEnabled;
  let obj = linkedGameOrgInvitesEnabled(11815);
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
