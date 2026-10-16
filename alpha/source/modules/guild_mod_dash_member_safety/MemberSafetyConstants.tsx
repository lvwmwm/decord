// Module ID: 4813
// Function ID: 4814
// Name: MemberSafetyConstants
// Dependencies: [1087, 1099, 2]

// Module 4813 (MemberSafetyConstants)
import Constants from "Constants" /* 1087 */;
import BigFlagUtils from "BigFlagUtils" /* 1099 */;
import size from "module_2" /* 2 */;

const Permissions = Constants.Permissions;
const combineResult = BigFlagUtils.combine(Permissions.ADMINISTRATOR, Permissions.MANAGE_GUILD, Permissions.BAN_MEMBERS, Permissions.KICK_MEMBERS, Permissions.MODERATE_MEMBERS, Permissions.MANAGE_ROLES, Permissions.MANAGE_NICKNAMES);
const result = size.fileFinishedImporting("modules/guild_mod_dash_member_safety/MemberSafetyConstants.tsx");

export const MemberSafetyPagePermissions = combineResult;
