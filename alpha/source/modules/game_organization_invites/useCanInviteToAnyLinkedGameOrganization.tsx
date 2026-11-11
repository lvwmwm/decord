// Module ID: 15569
// Function ID: 15570
// Name: useCanInviteToAnyLinkedGameOrganization
// Dependencies: [5155, 5149, 5114, 5175, 12442, 504, 12443, 2]
// Exports: default

// Module 15569 (useCanInviteToAnyLinkedGameOrganization)
import GuildMemberStore from "GuildMemberStore" /* 5155 */;
import GuildRoleStore from "GuildRoleStore" /* 5149 */;
import GuildStore from "GuildStore" /* 5114 */;
import PermissionStore from "PermissionStore" /* 5175 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_organization_invites/useCanInviteToAnyLinkedGameOrganization.tsx");

export default function useCanInviteToAnyLinkedGameOrganization(location) {
  let linkedGameOrgInvitesEnabled;
  let obj = linkedGameOrgInvitesEnabled(12442);
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
