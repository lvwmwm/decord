// Module ID: 17542
// Function ID: 17543
// Name: CreatorMonetizationAcceptTermCheckboxText
// Dependencies: [1074, 1115, 2111, 2]
// Exports: getCreatorMonetizationAcceptTermsCheckboxText

// Module 17542 (CreatorMonetizationAcceptTermCheckboxText)
import Constants from "Constants" /* 1074 */;
import intl2 from "intl" /* 1115 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2111 */;
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
