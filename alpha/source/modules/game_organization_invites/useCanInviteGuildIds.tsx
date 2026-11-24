// Module ID: 11942
// Function ID: 11943
// Name: useCanInviteGuildIds
// Dependencies: [19, 4829, 4823, 4788, 4849, 11943, 504, 11944, 2]
// Exports: default

// Module 11942 (useCanInviteGuildIds)
import react from "react" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 4829 */;
import GuildRoleStore from "GuildRoleStore" /* 4823 */;
import GuildStore from "GuildStore" /* 4788 */;
import PermissionStore from "PermissionStore" /* 4849 */;
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
