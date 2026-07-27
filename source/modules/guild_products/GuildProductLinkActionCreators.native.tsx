// Module ID: 12217
// Function ID: 95505
// Name: openGuildProductLink
// Dependencies: [4472, 1212, 2]
// Exports: openGuildProductLink

// Module 12217 (openGuildProductLink)
const result = require("set").fileFinishedImporting("modules/guild_products/GuildProductLinkActionCreators.native.tsx");

export const openGuildProductLink = function openGuildProductLink(closure_0, closure_1) {
  let obj = importDefault(4472);
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.body = intl.string(require(1212) /* getSystemLocale */.t["mYlo/T"]);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.confirmText = intl2.string(require(1212) /* getSystemLocale */.t.BddRzS);
  obj.show(obj);
};
