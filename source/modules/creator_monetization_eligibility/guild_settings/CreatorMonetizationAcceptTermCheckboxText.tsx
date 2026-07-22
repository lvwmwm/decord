// Module ID: 16292
// Function ID: 125748
// Name: getCreatorMonetizationAcceptTermsCheckboxText
// Dependencies: []
// Exports: getCreatorMonetizationAcceptTermsCheckboxText

// Module 16292 (getCreatorMonetizationAcceptTermsCheckboxText)
const HelpdeskArticles = require(dependencyMap[0]).HelpdeskArticles;
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/creator_monetization_eligibility/guild_settings/CreatorMonetizationAcceptTermCheckboxText.tsx");

export const getCreatorMonetizationAcceptTermsCheckboxText = function getCreatorMonetizationAcceptTermsCheckboxText() {
  const intl = require(dependencyMap[1]).intl;
  const obj = { fullTermsUrl: importDefault(dependencyMap[2]).getArticleURL(HelpdeskArticles.CREATOR_TERMS) };
  const obj2 = importDefault(dependencyMap[2]);
  obj.creatorRevenuePolicyUrl = importDefault(dependencyMap[2]).getArticleURL(HelpdeskArticles.CREATOR_POLICY);
  return intl.format(require(dependencyMap[1]).t.+ALa7+, obj);
};
