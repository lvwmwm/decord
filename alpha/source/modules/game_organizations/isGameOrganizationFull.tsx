// Module ID: 11938
// Function ID: 11939
// Name: isGameOrganizationFull
// Dependencies: [2]
// Exports: default

// Module 11938 (isGameOrganizationFull)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_organizations/isGameOrganizationFull.tsx");

export default function isGameOrganizationFull(arg0) {
  let maxMembers;
  let memberCount;
  ({ memberCount, maxMembers } = arg0);
  return null != memberCount && null != maxMembers && memberCount >= maxMembers;
};
