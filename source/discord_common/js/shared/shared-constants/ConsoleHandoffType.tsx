// Module ID: 11039
// Function ID: 11040
// Name: set
// Dependencies: [2]

// Module 11039 (set)
import set from "set" /* 2 */;

const obj = { ALL: null };
let set = new Set(["CREATE_NEW_CALL", "TRANSFER_EXISTING_CALL"]);
obj[0] = set;
const result = set.fileFinishedImporting("../discord_common/js/shared/shared-constants/ConsoleHandoffType.tsx");

export const ConsoleHandoffType = { TRANSFER_EXISTING_CALL: "TRANSFER_EXISTING_CALL", CREATE_NEW_CALL: "CREATE_NEW_CALL" };
export const ConsoleHandoffTypeSets = obj;
