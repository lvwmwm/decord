// Module ID: 10545
// Function ID: 82295
// Name: EmbeddedActivityClientError
// Dependencies: [7, 6, 2]

// Module 10545 (EmbeddedActivityClientError)
import _classCallCheck from "_classCallCheck";
import importDefaultResult from "_defineProperties";

class EmbeddedActivityClientError {
  constructor(arg0, arg1) {
    tmp = _classCallCheck(this, EmbeddedActivityClientError);
    this.reason = global;
    this.detailCode = arg1;
    return;
  }
}
const importDefaultResultResult = require("_defineProperties")(EmbeddedActivityClientError);
importDefaultResultResult.Reasons = { PRIMARY_APP_COMMAND_NOT_FOUND: 0, [0]: "PRIMARY_APP_COMMAND_NOT_FOUND", LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED: 1, [1]: "LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED", INVALID_CHANNEL: 2, [2]: "INVALID_CHANNEL" };
const result = require("set").fileFinishedImporting("modules/errors/EmbeddedActivityClientError.tsx");

export default importDefaultResultResult;
