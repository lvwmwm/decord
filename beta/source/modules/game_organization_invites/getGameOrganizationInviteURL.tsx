// Module ID: 11325
// Function ID: 11326
// Name: getGameOrganizationInviteURL
// Dependencies: [2]
// Exports: default

// Module 11325 (getGameOrganizationInviteURL)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_organization_invites/getGameOrganizationInviteURL.tsx");

export default function getGameOrganizationInviteURL(arg0) {
  return "" + location.protocol + window.GLOBAL_ENV.WEBAPP_ENDPOINT + "/game-organizations/invite/" + arg0;
};
