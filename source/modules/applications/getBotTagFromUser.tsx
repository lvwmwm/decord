// Module ID: 9721
// Function ID: 9722
// Name: getBotTagTypeFromUser
// Dependencies: [4371, 2]
// Exports: getBotTagTypeFromUser

// Module 9721 (getBotTagTypeFromUser)
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
