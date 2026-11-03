// Module ID: 11793
// Function ID: 11794
// Name: useCanInviteGuildIds
// Dependencies: [5053, 5047, 5012, 5073, 11761, 504, 11762, 2]
// Exports: default

// Module 11793 (useCanInviteGuildIds)
import GuildMemberStore from "GuildMemberStore" /* 5053 */;
import GuildRoleStore from "GuildRoleStore" /* 5047 */;
import GuildStore from "GuildStore" /* 5012 */;
import PermissionStore from "PermissionStore" /* 5073 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_organization_invites/useCanInviteGuildIds.tsx");

export default function useCanInviteGuildIds(location) {
  let linkedGameOrgInvitesEnabled;
  let obj = linkedGameOrgInvitesEnabled(11761);
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
