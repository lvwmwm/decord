// Module ID: 11656
// Function ID: 11657
// Name: groupInvitableGameOrganizationsByApplication
// Dependencies: [2]
// Exports: default

// Module 11656 (groupInvitableGameOrganizationsByApplication)
import size from "module_2" /* 2 */;

let map;

let result = size.fileFinishedImporting("modules/game_organization_invites/groupInvitableGameOrganizationsByApplication.tsx");

export default function groupInvitableGameOrganizationsByApplication(arg0) {
  let items;
  map = new Map();
  const iter = arg0[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    let value = map.get(nextResult.application.id);
    if (null != value) {
      let gameOrganizations = tmp4.gameOrganizations;
      let arr = gameOrganizations.push(tmp2);
    } else {
      let obj = { application: tmp2.application, gameOrganizations: items };
      items = [tmp2];
      let result = map.set(tmp2.application.id, obj);
    }
    continue;
  }
  return Array.from(map.values());
};
