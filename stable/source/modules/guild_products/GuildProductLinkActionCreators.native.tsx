// Module ID: 13078
// Function ID: 13079
// Name: GuildProductLinkActionCreators
// Dependencies: [4981, 1114, 2]
// Exports: openGuildProductLink

// Module 13078 (GuildProductLinkActionCreators)
import util from "util" /* 1114 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 4981 */;
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
