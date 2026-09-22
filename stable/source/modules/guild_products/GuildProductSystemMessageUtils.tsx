// Module ID: 8098
// Function ID: 8099
// Name: GuildProductSystemMessageUtils
// Dependencies: [1074, 1114, 2]
// Exports: getGuildProductPurchaseSystemMessageContentMobile

// Module 8098 (GuildProductSystemMessageUtils)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1114 */;
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
