// Module ID: 13448
// Function ID: 13449
// Name: canGoToGameOrganizationGuild
// Dependencies: [2]
// Exports: default

// Module 13448 (canGoToGameOrganizationGuild)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_organization_invites/canGoToGameOrganizationGuild.tsx");

export default function canGoToGameOrganizationGuild(accepted, arg1, arg2) {
  accepted = accepted.accepted && accepted.inviterId !== arg1 && arg2;
  return accepted;
};
