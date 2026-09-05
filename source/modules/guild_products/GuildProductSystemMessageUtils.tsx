// Module ID: 7994
// Function ID: 7995
// Name: getGuildProductPurchaseSystemMessageContentMobile
// Dependencies: [1074, 1114, 2]
// Exports: getGuildProductPurchaseSystemMessageContentMobile

// Module 7994 (getGuildProductPurchaseSystemMessageContentMobile)
import set from "set" /* 2 */;
import ME from "ME" /* 1074 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;

const NOOP = ME.NOOP;
const result = set.fileFinishedImporting("modules/guild_products/GuildProductSystemMessageUtils.tsx");

export const getGuildProductPurchaseSystemMessageContentMobile = function getGuildProductPurchaseSystemMessageContentMobile(username) {
  let usernameHook = username.usernameOnClickHandler;
  if (usernameHook === undefined) {
    usernameHook = NOOP;
  }
  const intl = getSystemLocale.intl;
  return intl.formatToParts(getSystemLocale.t["w4iXs+"], { username: username.username, usernameHook, productName: username.productName });
};
