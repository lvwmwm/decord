// Module ID: 7670
// Function ID: 61295
// Name: getGuildProductPurchaseSystemMessageContentMobile
// Dependencies: []
// Exports: getGuildProductPurchaseSystemMessageContentMobile

// Module 7670 (getGuildProductPurchaseSystemMessageContentMobile)
const NOOP = require(dependencyMap[0]).NOOP;
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/guild_products/GuildProductSystemMessageUtils.tsx");

export const getGuildProductPurchaseSystemMessageContentMobile = function getGuildProductPurchaseSystemMessageContentMobile(username) {
  let usernameOnClickHandler = username.usernameOnClickHandler;
  if (usernameOnClickHandler === undefined) {
    usernameOnClickHandler = NOOP;
  }
  const intl = require(dependencyMap[1]).intl;
  const obj = { username: username.username, usernameHook: usernameOnClickHandler, productName: username.productName };
  return intl.formatToParts(require(dependencyMap[1]).t.w4iXs+, obj);
};
