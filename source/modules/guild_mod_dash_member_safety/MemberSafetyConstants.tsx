// Module ID: 3993
// Function ID: 3994
// Name: MemberSafetyPagePermissions
// Dependencies: [676, 506, 2]

// Module 3993 (MemberSafetyPagePermissions)
import { Permissions } from "ME";
import importAllResult from "fromString";

const combineResult = require("fromString").combine(Permissions.ADMINISTRATOR, Permissions.MANAGE_GUILD, Permissions.BAN_MEMBERS, Permissions.KICK_MEMBERS, Permissions.MODERATE_MEMBERS, Permissions.MANAGE_ROLES, Permissions.MANAGE_NICKNAMES);
const result = require("set").fileFinishedImporting("modules/guild_mod_dash_member_safety/MemberSafetyConstants.tsx");

export const MemberSafetyPagePermissions = combineResult;
