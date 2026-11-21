// Module ID: 14705
// Function ID: 14706
// Name: GuildProductLinkActionCreators
// Dependencies: [5861, 1112, 2]
// Exports: openGuildProductLink

// Module 14705 (GuildProductLinkActionCreators)
import intl3 from "intl" /* 1112 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5861 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_products/GuildProductLinkActionCreators.native.tsx");

export function openGuildProductLink() {
  let intl;
  let intl2;
  const obj = { body: intl.string(intl3.t["mYlo/T"]), confirmText: intl2.string(intl3.t.BddRzS) };
  const show = actions_AlertActionCreatorsDefault.show;
  actions_AlertActionCreatorsDefault;
  intl = intl3.intl;
  intl2 = intl3.intl;
  show(obj);
}
