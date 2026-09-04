// Module ID: 10838
// Function ID: 10839
// Name: getBotTagTypeFromUser
// Dependencies: [4510, 2]
// Exports: getBotTagTypeFromUser

// Module 10838 (getBotTagTypeFromUser)
import set from "set" /* 2 */;
import ApplicationTypes from "ApplicationTypes" /* 4510 */;

const BotTagTypes = ApplicationTypes.BotTagTypes;
const result = set.fileFinishedImporting("modules/applications/getBotTagFromUser.tsx");

export const getBotTagTypeFromUser = function getBotTagTypeFromUser(user) {
  if (user.isSystemUser()) {
    let BOT = BotTagTypes.SYSTEM_DM;
  } else if (user.bot) {
    BOT = BotTagTypes.BOT;
  }
  return BOT;
};
