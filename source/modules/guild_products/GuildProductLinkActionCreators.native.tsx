// Module ID: 12130
// Function ID: 12131
// Name: openGuildProductLink
// Dependencies: [4624, 1236, 2]
// Exports: openGuildProductLink

// Module 12130 (openGuildProductLink)
const result = require("set").fileFinishedImporting("modules/guild_products/GuildProductLinkActionCreators.native.tsx");

export const openGuildProductLink = function openGuildProductLink(closure_0, closure_1) {
  let obj = importDefault(4624);
  obj = { body: null, confirmText: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl.string(require(1236) /* getSystemLocale */.t["mYlo/T"]);
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl2.string(require(1236) /* getSystemLocale */.t.BddRzS);
  obj.show(obj);
};
