// Module ID: 5944
// Function ID: 5945
// Name: ReportToModPermissions
// Dependencies: [676, 506, 2]

// Module 5944 (ReportToModPermissions)
import { Permissions } from "ME";
import importAllResult from "fromString";

const combineResult = require("fromString").combine(Permissions.ADMINISTRATOR, Permissions.BAN_MEMBERS, Permissions.KICK_MEMBERS, Permissions.MODERATE_MEMBERS);
const result = require("set").fileFinishedImporting("modules/report_to_mod/ReportToModConstants.tsx");

export const ReportToModPermissions = combineResult;
