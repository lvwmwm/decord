// Module ID: 9016
// Function ID: 70899
// Name: set
// Dependencies: [2]

// Module 9016 (set)
import set from "set";

const obj = {};
let set = new Set(["CREATE_NEW_CALL", "TRANSFER_EXISTING_CALL"]);
obj.ALL = set;
const result = set.fileFinishedImporting("../discord_common/js/shared/shared-constants/ConsoleHandoffType.tsx");

export const ConsoleHandoffType = { TRANSFER_EXISTING_CALL: "TRANSFER_EXISTING_CALL", CREATE_NEW_CALL: "CREATE_NEW_CALL" };
export const ConsoleHandoffTypeSets = obj;
