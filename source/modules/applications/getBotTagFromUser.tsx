// Module ID: 9131
// Function ID: 71451
// Name: getBotTagTypeFromUser
// Dependencies: [4156, 2]
// Exports: getBotTagTypeFromUser

// Module 9131 (getBotTagTypeFromUser)
import { BotTagTypes } from "ApplicationTypes";

const result = require("set").fileFinishedImporting("modules/applications/getBotTagFromUser.tsx");

export const getBotTagTypeFromUser = function getBotTagTypeFromUser(user) {
  if (user.isSystemUser()) {
    let BOT = BotTagTypes.SYSTEM_DM;
  } else if (user.bot) {
    BOT = BotTagTypes.BOT;
  }
  return BOT;
};
