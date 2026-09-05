// Module ID: 17714
// Function ID: 17715
// Name: getCreatorMonetizationAcceptTermsCheckboxText
// Dependencies: [1074, 1114, 2024, 2]
// Exports: getCreatorMonetizationAcceptTermsCheckboxText

// Module 17714 (getCreatorMonetizationAcceptTermsCheckboxText)
import set from "set" /* 2 */;
import ME from "ME" /* 1074 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import combinedDefault from "combined" /* 2024 */;

const HelpdeskArticles = ME.HelpdeskArticles;
const result = set.fileFinishedImporting("modules/creator_monetization_eligibility/guild_settings/CreatorMonetizationAcceptTermCheckboxText.tsx");

export const getCreatorMonetizationAcceptTermsCheckboxText = function getCreatorMonetizationAcceptTermsCheckboxText() {
  const intl = getSystemLocale.intl;
  const obj = { fullTermsUrl: combinedDefault.getArticleURL(HelpdeskArticles.CREATOR_TERMS), creatorRevenuePolicyUrl: null };
  const obj2 = combinedDefault;
  obj[1] = combinedDefault.getArticleURL(HelpdeskArticles.CREATOR_POLICY);
  return intl.format(getSystemLocale.t["+ALa7+"], obj);
};
