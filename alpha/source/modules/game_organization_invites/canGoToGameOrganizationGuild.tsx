// Module ID: 12994
// Function ID: 12995
// Name: canGoToGameOrganizationGuild
// Dependencies: [4879, 2]
// Exports: default

// Module 12994 (canGoToGameOrganizationGuild)
import GuildStore from "GuildStore" /* 4879 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_organization_invites/canGoToGameOrganizationGuild.tsx");

export default function canGoToGameOrganizationGuild(accepted, arg1) {
  accepted = accepted.accepted && accepted.inviterId !== arg1 && null != GuildStore.getGuild(accepted.guildId);
  return accepted;
};
