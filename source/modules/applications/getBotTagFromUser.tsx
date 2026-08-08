// Module ID: 9661
// Function ID: 9662
// Name: getBotTagTypeFromUser
// Dependencies: [4329, 2]
// Exports: getBotTagTypeFromUser

// Module 9661 (getBotTagTypeFromUser)
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
