// Module ID: 7436
// Function ID: 7437
// Name: GuildProductSystemMessageUtils
// Dependencies: [1074, 1115, 2]
// Exports: getGuildProductPurchaseSystemMessageContentMobile

// Module 7436 (GuildProductSystemMessageUtils)
import Constants from "Constants" /* 1074 */;
import intl2 from "intl" /* 1115 */;
import size from "module_2" /* 2 */;

const NOOP = Constants.NOOP;
const result = size.fileFinishedImporting("modules/guild_products/GuildProductSystemMessageUtils.tsx");

export const getGuildProductPurchaseSystemMessageContentMobile = function getGuildProductPurchaseSystemMessageContentMobile(usernameOnClickHandler) {
  let usernameHook = usernameOnClickHandler.usernameOnClickHandler;
  const username = usernameOnClickHandler.username;
  if (usernameHook === undefined) {
    usernameHook = NOOP;
  }
  const productName = usernameOnClickHandler.productName;
  const intl = intl2.intl;
  return intl.formatToParts(intl2.t["w4iXs+"], { username, usernameHook, productName });
};
