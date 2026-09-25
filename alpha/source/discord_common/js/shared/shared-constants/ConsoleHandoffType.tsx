// Module ID: 9233
// Function ID: 9234
// Name: ConsoleHandoffType
// Dependencies: [2]

// Module 9233 (ConsoleHandoffType)
import size from "module_2" /* 2 */;

const obj = { ALL: new Set(["CREATE_NEW_CALL", "TRANSFER_EXISTING_CALL"]) };
const result = size.fileFinishedImporting("../discord_common/js/shared/shared-constants/ConsoleHandoffType.tsx");

export const ConsoleHandoffType = { TRANSFER_EXISTING_CALL: "TRANSFER_EXISTING_CALL", CREATE_NEW_CALL: "CREATE_NEW_CALL" };
export const ConsoleHandoffTypeSets = obj;
