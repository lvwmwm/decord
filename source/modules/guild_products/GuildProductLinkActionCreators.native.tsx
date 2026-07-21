// Module ID: 12095
// Function ID: 93274
// Name: openGuildProductLink
// Dependencies: []
// Exports: openGuildProductLink

// Module 12095 (openGuildProductLink)
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/guild_products/GuildProductLinkActionCreators.native.tsx");

export const openGuildProductLink = function openGuildProductLink(closure_0, closure_1) {
  let obj = importDefault(dependencyMap[0]);
  obj = {};
  const intl = require(dependencyMap[1]).intl;
  obj.body = intl.string(require(dependencyMap[1]).t.mYlo/T);
  const intl2 = require(dependencyMap[1]).intl;
  obj.confirmText = intl2.string(require(dependencyMap[1]).t.BddRzS);
  obj.show(obj);
};
