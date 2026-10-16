// Module ID: 12117
// Function ID: 12118
// Name: ConjureAwaitingUser
// Dependencies: [10903, 2]
// Exports: activeAwaitingUser

// Module 12117 (ConjureAwaitingUser)
import conjureChatTurns from "conjureChatTurns" /* 10903 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/chat/ConjureAwaitingUser.tsx");

export const activeAwaitingUser = function activeAwaitingUser(message, isNewest) {
  let awaitingUser = null;
  if (isNewest) {
    let role;
    if (message != null) {
      role = message.role;
    }
    awaitingUser = null;
    if ("assistant" === role) {
      awaitingUser = null;
      if (null != message.awaitingUser) {
        awaitingUser = null;
        if (null != message.secretRequest) {
          awaitingUser = null;
          const obj = conjureChatTurns;
          if (obj.turnSettled(message)) {
            awaitingUser = message.awaitingUser;
          }
        }
      }
    }
  }
  return awaitingUser;
};
