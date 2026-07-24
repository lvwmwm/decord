// Module ID: 5666
// Function ID: 48686
// Name: ReportToModPermissions
// Dependencies: [653, 483, 2]

// Module 5666 (ReportToModPermissions)
import { Permissions } from "ME";
import importAllResult from "fromHexReverseArray";

const combineResult = require("fromHexReverseArray").combine(Permissions.ADMINISTRATOR, Permissions.BAN_MEMBERS, Permissions.KICK_MEMBERS, Permissions.MODERATE_MEMBERS);
const result = require("set").fileFinishedImporting("modules/report_to_mod/ReportToModConstants.tsx");

export const ReportToModPermissions = combineResult;
