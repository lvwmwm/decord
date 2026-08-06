// Module ID: 8024
// Function ID: 8025
// Name: getGuildProductPurchaseSystemMessageContentMobile
// Dependencies: [676, 1236, 2]
// Exports: getGuildProductPurchaseSystemMessageContentMobile

// Module 8024 (getGuildProductPurchaseSystemMessageContentMobile)
import { NOOP } from "ME";

const result = require("set").fileFinishedImporting("modules/guild_products/GuildProductSystemMessageUtils.tsx");

export const getGuildProductPurchaseSystemMessageContentMobile = function getGuildProductPurchaseSystemMessageContentMobile(username) {
  let usernameHook = username.usernameOnClickHandler;
  if (usernameHook === undefined) {
    usernameHook = NOOP;
  }
  const intl = require(1236) /* getSystemLocale */.intl;
  return intl.formatToParts(require(1236) /* getSystemLocale */.t["w4iXs+"], { username: username.username, usernameHook, productName: username.productName });
};
