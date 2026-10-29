// Module ID: 19805
// Function ID: 19806
// Name: CreatorMonetizationAcceptTermCheckboxText
// Dependencies: [1084, 1125, 2065, 2]
// Exports: getCreatorMonetizationAcceptTermsCheckboxText

// Module 19805 (CreatorMonetizationAcceptTermCheckboxText)
import Constants from "Constants" /* 1084 */;
import intl2 from "intl" /* 1125 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2065 */;
import size from "module_2" /* 2 */;

const HelpdeskArticles = Constants.HelpdeskArticles;
const result = size.fileFinishedImporting("modules/creator_monetization_eligibility/guild_settings/CreatorMonetizationAcceptTermCheckboxText.tsx");

export function getCreatorMonetizationAcceptTermsCheckboxText() {
  let obj2;
  let obj3;
  const intl = intl2.intl;
  const format = intl.format;
  const obj = { fullTermsUrl: obj2.getArticleURL(HelpdeskArticles.CREATOR_TERMS), creatorRevenuePolicyUrl: obj3.getArticleURL(HelpdeskArticles.CREATOR_POLICY) };
  const prop = intl2.t["+ALa7+"];
  obj2 = HelpdeskUtilsDefault;
  obj3 = HelpdeskUtilsDefault;
  return format(prop, obj);
}
