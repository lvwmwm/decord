// Module ID: 13266
// Function ID: 13267
// Name: GuildProductLinkActionCreators
// Dependencies: [5141, 1115, 2]
// Exports: openGuildProductLink

// Module 13266 (GuildProductLinkActionCreators)
import util from "util" /* 1115 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5141 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_products/GuildProductLinkActionCreators.native.tsx");

export const openGuildProductLink = function openGuildProductLink() {
  const obj2 = { body: null, confirmText: null };
  const intl = util.intl;
  obj2.body = intl.string(util.t["mYlo/T"]);
  const intl2 = util.intl;
  obj2.confirmText = intl2.string(util.t.BddRzS);
  actions_AlertActionCreatorsDefault.show(obj2);
};
