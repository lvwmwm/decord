// Module ID: 12730
// Function ID: 12731
// Name: canGoToGameOrganizationGuild
// Dependencies: [4846, 2]
// Exports: default

// Module 12730 (canGoToGameOrganizationGuild)
import GuildStore from "GuildStore" /* 4846 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_organization_invites/canGoToGameOrganizationGuild.tsx");

export default function canGoToGameOrganizationGuild(accepted, arg1) {
  accepted = accepted.accepted && accepted.inviterId !== arg1 && null != GuildStore.getGuild(accepted.guildId);
  return accepted;
};
