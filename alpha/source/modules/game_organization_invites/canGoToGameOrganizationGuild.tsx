// Module ID: 13415
// Function ID: 13416
// Name: canGoToGameOrganizationGuild
// Dependencies: [5012, 2]
// Exports: default

// Module 13415 (canGoToGameOrganizationGuild)
import GuildStore from "GuildStore" /* 5012 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_organization_invites/canGoToGameOrganizationGuild.tsx");

export default function canGoToGameOrganizationGuild(accepted, arg1) {
  accepted = accepted.accepted && accepted.inviterId !== arg1 && null != GuildStore.getGuild(accepted.guildId);
  return accepted;
};
