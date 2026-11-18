// Module ID: 12010
// Function ID: 12011
// Name: useCanInviteGuildIds
// Dependencies: [19, 4735, 4729, 4694, 4755, 12011, 504, 12012, 2]
// Exports: default

// Module 12010 (useCanInviteGuildIds)
import react from "react" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 4735 */;
import GuildRoleStore from "GuildRoleStore" /* 4729 */;
import GuildStore from "GuildStore" /* 4694 */;
import PermissionStore from "PermissionStore" /* 4755 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_organization_invites/useCanInviteGuildIds.tsx");

export default function useCanInviteGuildIds(location) {
  let linkedGameOrgInvitesEnabled;
  let stateFromStoresArray;
  let obj = linkedGameOrgInvitesEnabled(stateFromStoresArray[5]);
  linkedGameOrgInvitesEnabled = obj.useLinkedGameOrgInvitesEnabled(location);
  const items = [GuildStore, GuildMemberStore, GuildRoleStore, PermissionStore];
  const items1 = [linkedGameOrgInvitesEnabled];
  const obj2 = linkedGameOrgInvitesEnabled(stateFromStoresArray[6]);
  stateFromStoresArray = obj2.useStateFromStoresArray(items, () => {
    let sorted;
    const tmp = linkedGameOrgInvitesEnabled;
    if (tmp) {
      const guildsArray = GuildStore.getGuildsArray();
      const found = guildsArray.filter((item) => {
        const obj = linkedGameOrgInvitesEnabled(stateFromStoresArray[7]);
        return obj.canInviteToLinkedGameOrganization(item, closure_1_6, closure_1_3, closure_1_4);
      });
      const mapped = found.map((id) => id.id);
      sorted = mapped.sort();
    } else {
      sorted = [];
    }
    return sorted;
  }, items1);
  const items2 = [stateFromStoresArray.join(",")];
  return react.useMemo(() => stateFromStoresArray, items2);
};
