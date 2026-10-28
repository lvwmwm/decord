// Module ID: 12777
// Function ID: 12778
// Name: canGoToGameOrganizationGuild
// Dependencies: [4878, 2]
// Exports: default

// Module 12777 (canGoToGameOrganizationGuild)
import GuildStore from "GuildStore" /* 4878 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_organization_invites/canGoToGameOrganizationGuild.tsx");

export default function canGoToGameOrganizationGuild(accepted, arg1) {
  accepted = accepted.accepted && accepted.inviterId !== arg1 && null != GuildStore.getGuild(accepted.guildId);
  return accepted;
};
