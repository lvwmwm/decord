// Module ID: 12876
// Function ID: 12877
// Name: openGuildProductLink
// Dependencies: [4866, 1233, 2]
// Exports: openGuildProductLink

// Module 12876 (openGuildProductLink)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import _modDef4866 from "module_4866" /* 4866 */;

const result = set.fileFinishedImporting("modules/guild_products/GuildProductLinkActionCreators.native.tsx");

export const openGuildProductLink = function openGuildProductLink(closure_0, closure_1) {
  let obj = _modDef4866;
  obj = { body: null, confirmText: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t["mYlo/T"]);
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.string(getSystemLocale.t.BddRzS);
  obj.show(obj);
};
