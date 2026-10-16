// Module ID: 8232
// Function ID: 8233
// Name: GuildProductSystemMessageUtils
// Dependencies: [1087, 1128, 2]
// Exports: getGuildProductPurchaseSystemMessageContentMobile

// Module 8232 (GuildProductSystemMessageUtils)
import Constants from "Constants" /* 1087 */;
import intl2 from "intl" /* 1128 */;
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
