// Module ID: 11817
// Function ID: 11818
// Name: useCanInviteToAnyLinkedGameOrganization
// Dependencies: [5053, 5047, 5012, 5073, 11818, 504, 11819, 2]
// Exports: default

// Module 11817 (useCanInviteToAnyLinkedGameOrganization)
import GuildMemberStore from "GuildMemberStore" /* 5053 */;
import GuildRoleStore from "GuildRoleStore" /* 5047 */;
import GuildStore from "GuildStore" /* 5012 */;
import PermissionStore from "PermissionStore" /* 5073 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_organization_invites/useCanInviteToAnyLinkedGameOrganization.tsx");

export default function useCanInviteToAnyLinkedGameOrganization(location) {
  let linkedGameOrgInvitesEnabled;
  let obj = linkedGameOrgInvitesEnabled(11818);
  linkedGameOrgInvitesEnabled = obj.useLinkedGameOrgInvitesEnabled(location);
  const items = [GuildStore, GuildMemberStore, GuildRoleStore, PermissionStore];
  const items1 = [linkedGameOrgInvitesEnabled];
  const obj2 = linkedGameOrgInvitesEnabled(504);
  return obj2.useStateFromStores(items, () => {
    let someResult = linkedGameOrgInvitesEnabled;
    if (someResult) {
      const guildsArray = GuildStore.getGuildsArray();
      someResult = guildsArray.some((item) => {
        const obj = linkedGameOrgInvitesEnabled(closure_1_1[6]);
        return obj.canInviteToLinkedGameOrganization(item, closure_1_5, closure_1_2, closure_1_3);
      });
    }
    return someResult;
  }, items1);
};
