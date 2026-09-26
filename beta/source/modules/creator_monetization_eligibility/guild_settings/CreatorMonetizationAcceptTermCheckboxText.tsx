// Module ID: 18178
// Function ID: 18179
// Name: CreatorMonetizationAcceptTermCheckboxText
// Dependencies: [1074, 1115, 2108, 2]
// Exports: getCreatorMonetizationAcceptTermsCheckboxText

// Module 18178 (CreatorMonetizationAcceptTermCheckboxText)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1115 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2108 */;
import size from "module_2" /* 2 */;

const HelpdeskArticles = Constants.HelpdeskArticles;
const result = size.fileFinishedImporting("modules/creator_monetization_eligibility/guild_settings/CreatorMonetizationAcceptTermCheckboxText.tsx");

export const getCreatorMonetizationAcceptTermsCheckboxText = function getCreatorMonetizationAcceptTermsCheckboxText() {
  const intl = util.intl;
  const obj = { fullTermsUrl: HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.CREATOR_TERMS), creatorRevenuePolicyUrl: null };
  obj.creatorRevenuePolicyUrl = HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.CREATOR_POLICY);
  return intl.format(util.t["+ALa7+"], obj);
};
