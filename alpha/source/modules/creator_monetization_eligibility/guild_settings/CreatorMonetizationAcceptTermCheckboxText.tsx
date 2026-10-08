// Module ID: 18244
// Function ID: 18245
// Name: CreatorMonetizationAcceptTermCheckboxText
// Dependencies: [1085, 1126, 2127, 2]
// Exports: getCreatorMonetizationAcceptTermsCheckboxText

// Module 18244 (CreatorMonetizationAcceptTermCheckboxText)
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2127 */;
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
