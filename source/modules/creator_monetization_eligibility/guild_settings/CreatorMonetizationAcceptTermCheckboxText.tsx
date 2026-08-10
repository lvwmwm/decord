// Module ID: 16801
// Function ID: 16802
// Name: getCreatorMonetizationAcceptTermsCheckboxText
// Dependencies: [676, 1236, 1974, 2]
// Exports: getCreatorMonetizationAcceptTermsCheckboxText

// Module 16801 (getCreatorMonetizationAcceptTermsCheckboxText)
import { HelpdeskArticles } from "ME";

const result = require("combined").fileFinishedImporting("modules/creator_monetization_eligibility/guild_settings/CreatorMonetizationAcceptTermCheckboxText.tsx");

export const getCreatorMonetizationAcceptTermsCheckboxText = function getCreatorMonetizationAcceptTermsCheckboxText() {
  const intl = require(1236) /* getSystemLocale */.intl;
  const obj = { fullTermsUrl: null, creatorRevenuePolicyUrl: null };
  obj[0] = importDefault(1974).getArticleURL(HelpdeskArticles.CREATOR_TERMS);
  const obj2 = importDefault(1974);
  obj[1] = importDefault(1974).getArticleURL(HelpdeskArticles.CREATOR_POLICY);
  return intl.format(require(1236) /* getSystemLocale */.t["+ALa7+"], obj);
};
