// Module ID: 7391
// Function ID: 7392
// Name: ReportToModConstants
// Dependencies: [1074, 1086, 2]

// Module 7391 (ReportToModConstants)
import Constants from "Constants" /* 1074 */;
import BigFlagUtils from "BigFlagUtils" /* 1086 */;
import size from "module_2" /* 2 */;

const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("modules/report_to_mod/ReportToModConstants.tsx");

export const ReportToModPermissions = BigFlagUtils.combine(Permissions.ADMINISTRATOR, Permissions.BAN_MEMBERS, Permissions.KICK_MEMBERS, Permissions.MODERATE_MEMBERS);
