// Module ID: 11791
// Function ID: 11792
// Name: useCanInviteToAnyLinkedGameOrganization
// Dependencies: [5082, 5076, 5041, 5102, 11792, 504, 11793, 2]
// Exports: default

// Module 11791 (useCanInviteToAnyLinkedGameOrganization)
import GuildMemberStore from "GuildMemberStore" /* 5082 */;
import GuildRoleStore from "GuildRoleStore" /* 5076 */;
import GuildStore from "GuildStore" /* 5041 */;
import PermissionStore from "PermissionStore" /* 5102 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_organization_invites/useCanInviteToAnyLinkedGameOrganization.tsx");

export default function useCanInviteToAnyLinkedGameOrganization(location) {
  let linkedGameOrgInvitesEnabled;
  let obj = linkedGameOrgInvitesEnabled(11792);
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
