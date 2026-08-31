// Module ID: 6102
// Function ID: 6103
// Name: ReportToModPermissions
// Dependencies: [676, 506, 2]

// Module 6102 (ReportToModPermissions)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import importAllResult from "fromString" /* 506 */;

const Permissions = ME.Permissions;
const combineResult = importAllResult.combine(Permissions.ADMINISTRATOR, Permissions.BAN_MEMBERS, Permissions.KICK_MEMBERS, Permissions.MODERATE_MEMBERS);
const result = set.fileFinishedImporting("modules/report_to_mod/ReportToModConstants.tsx");

export const ReportToModPermissions = combineResult;
