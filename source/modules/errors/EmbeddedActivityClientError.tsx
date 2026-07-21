// Module ID: 10505
// Function ID: 82029
// Name: EmbeddedActivityClientError
// Dependencies: []

// Module 10505 (EmbeddedActivityClientError)
let closure_0 = importDefault(dependencyMap[1]);
class EmbeddedActivityClientError {
  constructor(arg0, arg1) {
    tmp = closure_0(this, EmbeddedActivityClientError);
    this.reason = global;
    this.detailCode = arg1;
    return;
  }
}
const importDefaultResultResult = importDefault(dependencyMap[0])(EmbeddedActivityClientError);
importDefaultResultResult.Reasons = { PRIMARY_APP_COMMAND_NOT_FOUND: 0, [0]: "PRIMARY_APP_COMMAND_NOT_FOUND", LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED: 1, [1]: "LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED", INVALID_CHANNEL: 2, [2]: "INVALID_CHANNEL" };
const importDefaultResult = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/errors/EmbeddedActivityClientError.tsx");

export default importDefaultResultResult;
