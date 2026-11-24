// Module ID: 11990
// Function ID: 11991
// Name: getGameOrganizationInviteURL
// Dependencies: [2]
// Exports: default

// Module 11990 (getGameOrganizationInviteURL)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_organization_invites/getGameOrganizationInviteURL.tsx");

export default function getGameOrganizationInviteURL(arg0) {
  return "" + location.protocol + window.GLOBAL_ENV.WEBAPP_ENDPOINT + "/game-organizations/invite/" + arg0;
};
