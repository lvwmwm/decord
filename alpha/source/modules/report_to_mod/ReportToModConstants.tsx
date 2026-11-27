// Module ID: 10773
// Function ID: 10774
// Name: ReportToModConstants
// Dependencies: [1071, 1083, 2]

// Module 10773 (ReportToModConstants)
import Constants from "Constants" /* 1071 */;
import BigFlagUtils from "BigFlagUtils" /* 1083 */;
import size from "module_2" /* 2 */;

const Permissions = Constants.Permissions;
const combineResult = BigFlagUtils.combine(Permissions.ADMINISTRATOR, Permissions.BAN_MEMBERS, Permissions.KICK_MEMBERS, Permissions.MODERATE_MEMBERS);
const result = size.fileFinishedImporting("modules/report_to_mod/ReportToModConstants.tsx");

export const ReportToModPermissions = combineResult;
