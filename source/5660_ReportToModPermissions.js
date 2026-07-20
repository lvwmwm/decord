// Module ID: 5660
// Function ID: 48590
// Name: ReportToModPermissions
// Dependencies: []

// Module 5660 (ReportToModPermissions)
const Permissions = require(dependencyMap[0]).Permissions;
const importAllResult = importAll(dependencyMap[1]);
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/report_to_mod/ReportToModConstants.tsx");

export const ReportToModPermissions = importAll(dependencyMap[1]).combine(Permissions.ADMINISTRATOR, Permissions.BAN_MEMBERS, Permissions.KICK_MEMBERS, Permissions.MODERATE_MEMBERS);
