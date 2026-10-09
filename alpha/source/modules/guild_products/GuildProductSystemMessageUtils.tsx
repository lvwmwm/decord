// Module ID: 7993
// Function ID: 7994
// Name: GuildProductSystemMessageUtils
// Dependencies: [1085, 1126, 2]
// Exports: getGuildProductPurchaseSystemMessageContentMobile

// Module 7993 (GuildProductSystemMessageUtils)
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
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
