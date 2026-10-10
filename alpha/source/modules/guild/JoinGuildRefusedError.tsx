// Module ID: 6919
// Function ID: 6920
// Name: JoinGuildRefusedError
// Dependencies: [2]
// Exports: ignoreJoinGuildRefused

// Module 6919 (JoinGuildRefusedError)
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
