// Module ID: 18735
// Function ID: 18736
// Name: chat/ConjureAwaitingUser
// Dependencies: [7660, 2]
// Exports: activeAwaitingUser

// Module 18735 (chat/ConjureAwaitingUser)
import conjureChatTurns from "conjureChatTurns" /* 7660 */;
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
