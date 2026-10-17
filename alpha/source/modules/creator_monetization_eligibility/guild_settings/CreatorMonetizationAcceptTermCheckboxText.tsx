// Module ID: 18934
// Function ID: 18935
// Name: CreatorMonetizationAcceptTermCheckboxText
// Dependencies: [1087, 1128, 2131, 2]
// Exports: getCreatorMonetizationAcceptTermsCheckboxText

// Module 18934 (CreatorMonetizationAcceptTermCheckboxText)
import Constants from "Constants" /* 1087 */;
import intl2 from "intl" /* 1128 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2131 */;
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
