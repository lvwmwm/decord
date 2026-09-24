// Module ID: 8342
// Function ID: 8343
// Name: GuildProductSystemMessageUtils
// Dependencies: [1074, 1115, 2]
// Exports: getGuildProductPurchaseSystemMessageContentMobile

// Module 8342 (GuildProductSystemMessageUtils)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1115 */;
import size from "module_2" /* 2 */;

const NOOP = Constants.NOOP;
const result = size.fileFinishedImporting("modules/guild_products/GuildProductSystemMessageUtils.tsx");

export const getGuildProductPurchaseSystemMessageContentMobile = function getGuildProductPurchaseSystemMessageContentMobile(username) {
  let usernameHook = username.usernameOnClickHandler;
  if (usernameHook === undefined) {
    usernameHook = NOOP;
  }
  const intl = util.intl;
  return intl.formatToParts(util.t["w4iXs+"], { username: username.username, usernameHook, productName: username.productName });
};
