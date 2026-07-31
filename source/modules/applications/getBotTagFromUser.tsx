// Module ID: 9098
// Function ID: 9099
// Name: getBotTagTypeFromUser
// Dependencies: [4219, 2]
// Exports: getBotTagTypeFromUser

// Module 9098 (getBotTagTypeFromUser)
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
