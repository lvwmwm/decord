// Module ID: 7362
// Function ID: 7363
// Name: ReportToModConstants
// Dependencies: [1087, 1099, 2]

// Module 7362 (ReportToModConstants)
import Constants from "Constants" /* 1087 */;
import BigFlagUtils from "BigFlagUtils" /* 1099 */;
import size from "module_2" /* 2 */;

const Permissions = Constants.Permissions;
const combineResult = BigFlagUtils.combine(Permissions.ADMINISTRATOR, Permissions.BAN_MEMBERS, Permissions.KICK_MEMBERS, Permissions.MODERATE_MEMBERS);
const result = size.fileFinishedImporting("modules/report_to_mod/ReportToModConstants.tsx");

export const ReportToModPermissions = combineResult;
