// Module ID: 13962
// Function ID: 13963
// Name: canGoToGameOrganizationGuild
// Dependencies: [2]
// Exports: default

// Module 13962 (canGoToGameOrganizationGuild)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_organization_invites/canGoToGameOrganizationGuild.tsx");

export default function canGoToGameOrganizationGuild(accepted, arg1, arg2) {
  accepted = accepted.accepted && accepted.inviterId !== arg1 && arg2;
  return accepted;
};
