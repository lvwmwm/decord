// Module ID: 13124
// Function ID: 101161
// Name: set
// Dependencies: [2]

// Module 13124 (set)
import set from "set";

const obj = {};
let set = new Set(["socket_crashed", "unhandled_js_error", "unhandled_native_error"]);
obj.ALL = set;
const result = set.fileFinishedImporting("../discord_common/js/shared/shared-constants/AppCrashedReasons.tsx");

export const AppCrashedReasons = { UNHANDLED_NATIVE_ERROR: "unhandled_native_error", UNHANDLED_JS_ERROR: "unhandled_js_error", SOCKET_CRASHED: "socket_crashed" };
export const AppCrashedReasonsSets = obj;
