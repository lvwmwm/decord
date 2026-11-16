// Module ID: 7556
// Function ID: 7557
// Name: ReportToModConstants
// Dependencies: [1072, 1084, 2]

// Module 7556 (ReportToModConstants)
import Constants from "Constants" /* 1072 */;
import BigFlagUtils from "BigFlagUtils" /* 1084 */;
import size from "module_2" /* 2 */;

const Permissions = Constants.Permissions;
const combineResult = BigFlagUtils.combine(Permissions.ADMINISTRATOR, Permissions.BAN_MEMBERS, Permissions.KICK_MEMBERS, Permissions.MODERATE_MEMBERS);
const result = size.fileFinishedImporting("modules/report_to_mod/ReportToModConstants.tsx");

export const ReportToModPermissions = combineResult;
