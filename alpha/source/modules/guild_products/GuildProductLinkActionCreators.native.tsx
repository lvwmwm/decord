// Module ID: 13332
// Function ID: 13333
// Name: GuildProductLinkActionCreators
// Dependencies: [5196, 1115, 2]
// Exports: openGuildProductLink

// Module 13332 (GuildProductLinkActionCreators)
import util from "util" /* 1115 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5196 */;
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
