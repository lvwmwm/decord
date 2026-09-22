// Module ID: 18177
// Function ID: 18178
// Name: CreatorMonetizationAcceptTermCheckboxText
// Dependencies: [1078, 1119, 2112, 2]
// Exports: getCreatorMonetizationAcceptTermsCheckboxText

// Module 18177 (CreatorMonetizationAcceptTermCheckboxText)
import Constants from "Constants" /* 1078 */;
import util from "util" /* 1119 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2112 */;
import size from "module_2" /* 2 */;

const HelpdeskArticles = Constants.HelpdeskArticles;
const result = size.fileFinishedImporting("modules/creator_monetization_eligibility/guild_settings/CreatorMonetizationAcceptTermCheckboxText.tsx");

export const getCreatorMonetizationAcceptTermsCheckboxText = function getCreatorMonetizationAcceptTermsCheckboxText() {
  const intl = util.intl;
  const obj = { fullTermsUrl: HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.CREATOR_TERMS), creatorRevenuePolicyUrl: null };
  obj.creatorRevenuePolicyUrl = HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.CREATOR_POLICY);
  return intl.format(util.t["+ALa7+"], obj);
};
