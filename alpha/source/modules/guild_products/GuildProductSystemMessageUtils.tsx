// Module ID: 8731
// Function ID: 8732
// Name: GuildProductSystemMessageUtils
// Dependencies: [1071, 1112, 2]
// Exports: getGuildProductPurchaseSystemMessageContentMobile

// Module 8731 (GuildProductSystemMessageUtils)
import Constants from "Constants" /* 1071 */;
import intl2 from "intl" /* 1112 */;
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
