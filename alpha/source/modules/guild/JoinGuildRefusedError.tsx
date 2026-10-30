// Module ID: 6900
// Function ID: 6901
// Name: JoinGuildRefusedError
// Dependencies: [2]
// Exports: ignoreJoinGuildRefused

// Module 6900 (JoinGuildRefusedError)
import size from "module_2" /* 2 */;

class JoinGuildRefusedError extends Error {
  constructor(arg0) {
    const tmp2 = new tmp("joinGuild was refused and already showed the user an error", arg0, new.target);
    tmp2.name = "JoinGuildRefusedError";
    return tmp2;
  }
}
const result = size.fileFinishedImporting("modules/guild/JoinGuildRefusedError.tsx");

export { JoinGuildRefusedError };
export function ignoreJoinGuildRefused(arg0) {
  if (!(arg0 instanceof JoinGuildRefusedError)) {
    throw arg0;
  }
}
