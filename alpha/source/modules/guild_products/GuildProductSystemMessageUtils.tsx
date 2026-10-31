// Module ID: 8451
// Function ID: 8452
// Name: GuildProductSystemMessageUtils
// Dependencies: [1072, 1113, 2]
// Exports: getGuildProductPurchaseSystemMessageContentMobile

// Module 8451 (GuildProductSystemMessageUtils)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import size from "module_2" /* 2 */;

const NOOP = Constants.NOOP;
const result = size.fileFinishedImporting("modules/guild_products/GuildProductSystemMessageUtils.tsx");

export function getGuildProductPurchaseSystemMessageContentMobile(usernameOnClickHandler) {
  let usernameHook = usernameOnClickHandler.usernameOnClickHandler;
  const username = usernameOnClickHandler.username;
  if (usernameHook === undefined) {
    usernameHook = NOOP;
  }
  const productName = usernameOnClickHandler.productName;
  const intl = intl2.intl;
  return intl.formatToParts(intl2.t["w4iXs+"], { username, usernameHook, productName });
}
