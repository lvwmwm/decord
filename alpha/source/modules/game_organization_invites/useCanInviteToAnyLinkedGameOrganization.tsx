// Module ID: 15714
// Function ID: 15715
// Name: useCanInviteToAnyLinkedGameOrganization
// Dependencies: [5222, 5216, 5181, 5242, 12726, 504, 12727, 2]
// Exports: default

// Module 15714 (useCanInviteToAnyLinkedGameOrganization)
import GuildMemberStore from "GuildMemberStore" /* 5222 */;
import GuildRoleStore from "GuildRoleStore" /* 5216 */;
import GuildStore from "GuildStore" /* 5181 */;
import PermissionStore from "PermissionStore" /* 5242 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_organization_invites/useCanInviteToAnyLinkedGameOrganization.tsx");

export default function useCanInviteToAnyLinkedGameOrganization(location) {
  let linkedGameOrgInvitesEnabled;
  let obj = linkedGameOrgInvitesEnabled(12726);
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
