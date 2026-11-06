// Module ID: 11523
// Function ID: 11524
// Name: GameOrganizationModels
// Dependencies: [2]
// Exports: gameOrganizationFromServer, linkableGameOrganizationFromServer

// Module 11523 (GameOrganizationModels)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_organizations/GameOrganizationModels.tsx");

export function gameOrganizationFromServer(game_organization) {
  const obj = { guildId: game_organization.guild_id };
  const obj2 = { id: game_organization.game_organization_id, applicationId: game_organization.application_id, name: game_organization.name, description: game_organization.description, iconUrl: game_organization.icon_url, memberCount: game_organization.member_count, maxMembers: game_organization.max_members };
  const merged = Object.assign(obj2);
  return obj;
}
export function linkableGameOrganizationFromServer(gameOrganizationRoleIds) {
  let channels;
  let roles;
  let user_is_blocked_from_link;
  const obj = { userIsBlockedFromLink: user_is_blocked_from_link, channels: channels.map((lobbyId) => ({ lobbyId: lobbyId.lobby_id, name: lobbyId.name })), roles: roles.map((id) => ({ id: id.id, name: id.name, canInvite: id.can_invite, canLink: id.can_link })), member: { gameOrganizationRoleIds: gameOrganizationRoleIds.member.game_organization_role_ids } };
  const obj2 = { id: gameOrganizationRoleIds.game_organization_id, applicationId: gameOrganizationRoleIds.application_id, name: gameOrganizationRoleIds.name, description: gameOrganizationRoleIds.description, iconUrl: gameOrganizationRoleIds.icon_url, memberCount: gameOrganizationRoleIds.member_count, maxMembers: gameOrganizationRoleIds.max_members };
  const merged = Object.assign(obj2);
  ({ guild_id: obj.guildId, user_is_blocked_from_link } = gameOrganizationRoleIds);
  if (user_is_blocked_from_link == null) {
    user_is_blocked_from_link = false;
  }
  channels = gameOrganizationRoleIds.channels;
  roles = gameOrganizationRoleIds.roles;
  return obj;
}
