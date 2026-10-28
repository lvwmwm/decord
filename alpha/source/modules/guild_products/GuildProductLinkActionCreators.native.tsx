// Module ID: 14448
// Function ID: 14449
// Name: GuildProductLinkActionCreators
// Dependencies: [5945, 1125, 2]
// Exports: openGuildProductLink

// Module 14448 (GuildProductLinkActionCreators)
import intl3 from "intl" /* 1125 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5945 */;
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
