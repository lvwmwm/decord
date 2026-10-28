// Module ID: 8384
// Function ID: 8385
// Name: GuildProductSystemMessageUtils
// Dependencies: [1084, 1125, 2]
// Exports: getGuildProductPurchaseSystemMessageContentMobile

// Module 8384 (GuildProductSystemMessageUtils)
import Constants from "Constants" /* 1084 */;
import intl2 from "intl" /* 1125 */;
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
