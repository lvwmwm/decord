// Module ID: 8771
// Function ID: 8772
// Name: shared/RPCError
// Dependencies: [2]

// Module 8771 (shared/RPCError)
import size from "module_2" /* 2 */;

class RPCError extends Error {
  constructor(message, message2) {
    const tmp = new RPCError(message, new.target, this, message);
    if ("closeCode" in message) {
      ({ closeCode: tmp.code, closeCode: tmp.closeCode } = message);
    } else {
      ({ errorCode: tmp.code, errorCode: tmp.errorCode } = message);
    }
    tmp.message = message;
    tmp.name = "RPCError";
    return tmp;
  }
}
const result = size.fileFinishedImporting("../discord_common/js/shared/lib/RPCError.tsx");

export { RPCError };
