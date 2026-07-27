// Module ID: 16479
// Function ID: 128461
// Name: getCreatorMonetizationAcceptTermsCheckboxText
// Dependencies: [653, 1212, 1921, 2]
// Exports: getCreatorMonetizationAcceptTermsCheckboxText

// Module 16479 (getCreatorMonetizationAcceptTermsCheckboxText)
import { HelpdeskArticles } from "ME";

const result = require("wrapURL").fileFinishedImporting("modules/creator_monetization_eligibility/guild_settings/CreatorMonetizationAcceptTermCheckboxText.tsx");

export const getCreatorMonetizationAcceptTermsCheckboxText = function getCreatorMonetizationAcceptTermsCheckboxText() {
  const intl = require(1212) /* getSystemLocale */.intl;
  const obj = { fullTermsUrl: importDefault(1921).getArticleURL(HelpdeskArticles.CREATOR_TERMS) };
  const obj2 = importDefault(1921);
  obj.creatorRevenuePolicyUrl = importDefault(1921).getArticleURL(HelpdeskArticles.CREATOR_POLICY);
  return intl.format(require(1212) /* getSystemLocale */.t["+ALa7+"], obj);
};
