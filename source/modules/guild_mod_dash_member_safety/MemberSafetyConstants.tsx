// Module ID: 3762
// Function ID: 28819
// Name: MemberSafetyPagePermissions
// Dependencies: [653, 483, 2]

// Module 3762 (MemberSafetyPagePermissions)
import { Permissions } from "ME";
import importAllResult from "fromHexReverseArray";

const combineResult = require("fromHexReverseArray").combine(Permissions.ADMINISTRATOR, Permissions.MANAGE_GUILD, Permissions.BAN_MEMBERS, Permissions.KICK_MEMBERS, Permissions.MODERATE_MEMBERS, Permissions.MANAGE_ROLES, Permissions.MANAGE_NICKNAMES);
const result = require("set").fileFinishedImporting("modules/guild_mod_dash_member_safety/MemberSafetyConstants.tsx");

export const MemberSafetyPagePermissions = combineResult;
