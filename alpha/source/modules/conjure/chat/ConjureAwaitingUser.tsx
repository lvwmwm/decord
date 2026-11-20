// Module ID: 18374
// Function ID: 18375
// Name: chat/ConjureAwaitingUser
// Dependencies: [6807, 2]
// Exports: activeAwaitingUser

// Module 18374 (chat/ConjureAwaitingUser)
import conjureChatTurns from "conjureChatTurns" /* 6807 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/chat/ConjureAwaitingUser.tsx");

export function activeAwaitingUser(message, isNewest) {
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
}
