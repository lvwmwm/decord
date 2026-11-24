// Module ID: 4849
// Function ID: 4850
// Name: MemberSafetyConstants
// Dependencies: [1071, 1083, 2]

// Module 4849 (MemberSafetyConstants)
import Constants from "Constants" /* 1071 */;
import BigFlagUtils from "BigFlagUtils" /* 1083 */;
import size from "module_2" /* 2 */;

const Permissions = Constants.Permissions;
const combineResult = BigFlagUtils.combine(Permissions.ADMINISTRATOR, Permissions.MANAGE_GUILD, Permissions.BAN_MEMBERS, Permissions.KICK_MEMBERS, Permissions.MODERATE_MEMBERS, Permissions.MANAGE_ROLES, Permissions.MANAGE_NICKNAMES);
const result = size.fileFinishedImporting("modules/guild_mod_dash_member_safety/MemberSafetyConstants.tsx");

export const MemberSafetyPagePermissions = combineResult;
