// Module ID: 5242
// Function ID: 5243
// Name: MemberSafetyConstants
// Dependencies: [1072, 1084, 2]

// Module 5242 (MemberSafetyConstants)
import Constants from "Constants" /* 1072 */;
import BigFlagUtils from "BigFlagUtils" /* 1084 */;
import size from "module_2" /* 2 */;

const Permissions = Constants.Permissions;
const combineResult = BigFlagUtils.combine(Permissions.ADMINISTRATOR, Permissions.MANAGE_GUILD, Permissions.BAN_MEMBERS, Permissions.KICK_MEMBERS, Permissions.MODERATE_MEMBERS, Permissions.MANAGE_ROLES, Permissions.MANAGE_NICKNAMES);
const result = size.fileFinishedImporting("modules/guild_mod_dash_member_safety/MemberSafetyConstants.tsx");

export const MemberSafetyPagePermissions = combineResult;
