// Module ID: 16732
// Function ID: 16733
// Name: ConjureAwaitingUser
// Dependencies: [12924, 2]
// Exports: activeAwaitingUser

// Module 16732 (ConjureAwaitingUser)
import ConjureChatStore from "ConjureChatStore" /* 12924 */;
import size from "module_2" /* 2 */;

const turnSettled = ConjureChatStore.turnSettled;
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
          if (turnSettled(message)) {
            awaitingUser = message.awaitingUser;
          }
        }
      }
    }
  }
  return awaitingUser;
};
