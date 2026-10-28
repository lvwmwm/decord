// Module ID: 7422
// Function ID: 7423
// Name: ReportToModConstants
// Dependencies: [1084, 1096, 2]

// Module 7422 (ReportToModConstants)
import Constants from "Constants" /* 1084 */;
import BigFlagUtils from "BigFlagUtils" /* 1096 */;
import size from "module_2" /* 2 */;

const Permissions = Constants.Permissions;
const combineResult = BigFlagUtils.combine(Permissions.ADMINISTRATOR, Permissions.BAN_MEMBERS, Permissions.KICK_MEMBERS, Permissions.MODERATE_MEMBERS);
const result = size.fileFinishedImporting("modules/report_to_mod/ReportToModConstants.tsx");

export const ReportToModPermissions = combineResult;
