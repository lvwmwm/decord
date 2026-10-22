// Module ID: 14149
// Function ID: 14150
// Name: GuildProductLinkActionCreators
// Dependencies: [5895, 1128, 2]
// Exports: openGuildProductLink

// Module 14149 (GuildProductLinkActionCreators)
import intl3 from "intl" /* 1128 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5895 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_products/GuildProductLinkActionCreators.native.tsx");

export const openGuildProductLink = function openGuildProductLink() {
  let intl;
  let intl2;
  const obj = { body: intl.string(intl3.t["mYlo/T"]), confirmText: intl2.string(intl3.t.BddRzS) };
  const show = actions_AlertActionCreatorsDefault.show;
  actions_AlertActionCreatorsDefault;
  intl = intl3.intl;
  intl2 = intl3.intl;
  show(obj);
};
