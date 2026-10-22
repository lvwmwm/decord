// Module ID: 12197
// Function ID: 12198
// Name: chat/ConjureAwaitingUser
// Dependencies: [10980, 2]
// Exports: activeAwaitingUser

// Module 12197 (chat/ConjureAwaitingUser)
import conjureChatTurns from "conjureChatTurns" /* 10980 */;
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
