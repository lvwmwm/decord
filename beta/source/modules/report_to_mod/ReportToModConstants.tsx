// Module ID: 7532
// Function ID: 7533
// Name: ReportToModConstants
// Dependencies: [1078, 1090, 2]

// Module 7532 (ReportToModConstants)
import Constants from "Constants" /* 1078 */;
import BigFlagUtils from "BigFlagUtils" /* 1090 */;
import size from "module_2" /* 2 */;

const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("modules/report_to_mod/ReportToModConstants.tsx");

export const ReportToModPermissions = BigFlagUtils.combine(Permissions.ADMINISTRATOR, Permissions.BAN_MEMBERS, Permissions.KICK_MEMBERS, Permissions.MODERATE_MEMBERS);
