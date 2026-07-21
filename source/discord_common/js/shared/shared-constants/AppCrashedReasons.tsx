// Module ID: 13001
// Function ID: 98950
// Name: set
// Dependencies: [284214097]

// Module 13001 (set)
const obj = { ALL: new Set([]) };
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("../discord_common/js/shared/shared-constants/AppCrashedReasons.tsx");

export const AppCrashedReasons = { UNHANDLED_NATIVE_ERROR: "unhandled_native_error", UNHANDLED_JS_ERROR: "unhandled_js_error", SOCKET_CRASHED: "socket_crashed" };
export const AppCrashedReasonsSets = obj;
