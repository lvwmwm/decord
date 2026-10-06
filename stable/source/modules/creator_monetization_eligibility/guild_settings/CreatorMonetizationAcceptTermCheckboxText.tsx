// Module ID: 17544
// Function ID: 17545
// Name: CreatorMonetizationAcceptTermCheckboxText
// Dependencies: [1086, 1127, 2114, 2]
// Exports: getCreatorMonetizationAcceptTermsCheckboxText

// Module 17544 (CreatorMonetizationAcceptTermCheckboxText)
import Constants from "Constants" /* 1086 */;
import intl2 from "intl" /* 1127 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2114 */;
import size from "module_2" /* 2 */;

const HelpdeskArticles = Constants.HelpdeskArticles;
const result = size.fileFinishedImporting("modules/creator_monetization_eligibility/guild_settings/CreatorMonetizationAcceptTermCheckboxText.tsx");

export const getCreatorMonetizationAcceptTermsCheckboxText = function getCreatorMonetizationAcceptTermsCheckboxText() {
  let obj2;
  let obj3;
  const intl = intl2.intl;
  const format = intl.format;
  const obj = { fullTermsUrl: obj2.getArticleURL(HelpdeskArticles.CREATOR_TERMS), creatorRevenuePolicyUrl: obj3.getArticleURL(HelpdeskArticles.CREATOR_POLICY) };
  const prop = intl2.t["+ALa7+"];
  obj2 = HelpdeskUtilsDefault;
  obj3 = HelpdeskUtilsDefault;
  return format(prop, obj);
};
