// Module ID: 3760
// Function ID: 28809
// Name: MemberSafetyPagePermissions
// Dependencies: []

// Module 3760 (MemberSafetyPagePermissions)
const Permissions = require(dependencyMap[0]).Permissions;
const importAllResult = importAll(dependencyMap[1]);
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/guild_mod_dash_member_safety/MemberSafetyConstants.tsx");

export const MemberSafetyPagePermissions = importAll(dependencyMap[1]).combine(Permissions.ADMINISTRATOR, Permissions.MANAGE_GUILD, Permissions.BAN_MEMBERS, Permissions.KICK_MEMBERS, Permissions.MODERATE_MEMBERS, Permissions.MANAGE_ROLES, Permissions.MANAGE_NICKNAMES);
