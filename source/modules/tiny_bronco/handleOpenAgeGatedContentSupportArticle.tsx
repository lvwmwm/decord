// Module ID: 14754
// Function ID: 14755
// Name: handleOpenAgeGatedContentSupportArticle
// Dependencies: [14683, 8411, 2024, 2]
// Exports: handleOpenAgeGatedContentSupportArticle

// Module 14754 (handleOpenAgeGatedContentSupportArticle)
import set from "set" /* 2 */;
import combinedDefault from "combined" /* 2024 */;
import openIncodeAgeVerificationModalDefault from "openIncodeAgeVerificationModal" /* 8411 */;
import TINY_BRONCO_BLOG_URL from "TINY_BRONCO_BLOG_URL" /* 14683 */;

let closure_2 = TINY_BRONCO_BLOG_URL.TINY_BRONCO_SUPPORT_ARTICLE_ID;
const result = set.fileFinishedImporting("modules/tiny_bronco/handleOpenAgeGatedContentSupportArticle.tsx");

export const handleOpenAgeGatedContentSupportArticle = function handleOpenAgeGatedContentSupportArticle() {
  const obj = openIncodeAgeVerificationModalDefault;
  obj.openUrl(combinedDefault.getArticleURL(closure_2));
};
