// Module ID: 13145
// Function ID: 13146
// Name: canGoToGameOrganizationGuild
// Dependencies: [4880, 2]
// Exports: default

// Module 13145 (canGoToGameOrganizationGuild)
import GuildStore from "GuildStore" /* 4880 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_organization_invites/canGoToGameOrganizationGuild.tsx");

export default function canGoToGameOrganizationGuild(accepted, arg1) {
  accepted = accepted.accepted && accepted.inviterId !== arg1 && null != GuildStore.getGuild(accepted.guildId);
  return accepted;
};
