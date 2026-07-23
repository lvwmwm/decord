// Module ID: 7681
// Function ID: 61366
// Name: getGuildProductPurchaseSystemMessageContentMobile
// Dependencies: [653, 1212, 2]
// Exports: getGuildProductPurchaseSystemMessageContentMobile

// Module 7681 (getGuildProductPurchaseSystemMessageContentMobile)
import { NOOP } from "ME";

const result = require("set").fileFinishedImporting("modules/guild_products/GuildProductSystemMessageUtils.tsx");

export const getGuildProductPurchaseSystemMessageContentMobile = function getGuildProductPurchaseSystemMessageContentMobile(username) {
  let usernameOnClickHandler = username.usernameOnClickHandler;
  if (usernameOnClickHandler === undefined) {
    usernameOnClickHandler = NOOP;
  }
  const intl = require(1212) /* getSystemLocale */.intl;
  const obj = { username: username.username, usernameHook: usernameOnClickHandler, productName: username.productName };
  return intl.formatToParts(require(1212) /* getSystemLocale */.t["w4iXs+"], obj);
};
