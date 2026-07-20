// Module ID: 9029
// Function ID: 70970
// Name: set
// Dependencies: []

// Module 9029 (set)
const obj = { ALL: new Set(["dependencyMap", "onSendMessage"]) };
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("../discord_common/js/shared/shared-constants/ConsoleHandoffType.tsx");

export const ConsoleHandoffType = { TRANSFER_EXISTING_CALL: "TRANSFER_EXISTING_CALL", CREATE_NEW_CALL: "CREATE_NEW_CALL" };
export const ConsoleHandoffTypeSets = obj;
