// Module ID: 6042
// Function ID: 53716
// Name: ReportToModPermissions
// Dependencies: [653, 483, 2]

// Module 6042 (ReportToModPermissions)
import { Permissions } from "ME";
import importAllResult from "fromHexReverseArray";

const combineResult = require("fromHexReverseArray").combine(Permissions.ADMINISTRATOR, Permissions.BAN_MEMBERS, Permissions.KICK_MEMBERS, Permissions.MODERATE_MEMBERS);
const result = require("set").fileFinishedImporting("modules/report_to_mod/ReportToModConstants.tsx");

export const ReportToModPermissions = combineResult;
