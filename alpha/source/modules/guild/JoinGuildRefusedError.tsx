// Module ID: 7141
// Function ID: 7142
// Name: JoinGuildRefusedError
// Dependencies: [2]
// Exports: ignoreJoinGuildRefused

// Module 7141 (JoinGuildRefusedError)
import size from "module_2" /* 2 */;

class JoinGuildRefusedError extends Error {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.name = "JoinGuildRefusedError";
    return applyArgumentsResult;
  }
}
const result = size.fileFinishedImporting("modules/guild/JoinGuildRefusedError.tsx");

export { JoinGuildRefusedError };
export const ignoreJoinGuildRefused = function ignoreJoinGuildRefused(arg0) {
  if (!(arg0 instanceof JoinGuildRefusedError)) {
    throw arg0;
  }
};
