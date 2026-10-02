// Module ID: 6707
// Function ID: 6708
// Name: ReportToModConstants
// Dependencies: [1086, 1098, 2]

// Module 6707 (ReportToModConstants)
import Constants from "Constants" /* 1086 */;
import BigFlagUtils from "BigFlagUtils" /* 1098 */;
import size from "module_2" /* 2 */;

const Permissions = Constants.Permissions;
const combineResult = BigFlagUtils.combine(Permissions.ADMINISTRATOR, Permissions.BAN_MEMBERS, Permissions.KICK_MEMBERS, Permissions.MODERATE_MEMBERS);
const result = size.fileFinishedImporting("modules/report_to_mod/ReportToModConstants.tsx");

export const ReportToModPermissions = combineResult;
