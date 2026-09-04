// Module ID: 14679
// Function ID: 14680
// Name: handleOpenAgeGatedContentSupportArticle
// Dependencies: [14608, 8341, 1994, 2]
// Exports: handleOpenAgeGatedContentSupportArticle

// Module 14679 (handleOpenAgeGatedContentSupportArticle)
import set from "set" /* 2 */;
import combinedDefault from "combined" /* 1994 */;
import openIncodeAgeVerificationModalDefault from "openIncodeAgeVerificationModal" /* 8341 */;
import TINY_BRONCO_BLOG_URL from "TINY_BRONCO_BLOG_URL" /* 14608 */;

let closure_2 = TINY_BRONCO_BLOG_URL.TINY_BRONCO_SUPPORT_ARTICLE_ID;
const result = set.fileFinishedImporting("modules/tiny_bronco/handleOpenAgeGatedContentSupportArticle.tsx");

export const handleOpenAgeGatedContentSupportArticle = function handleOpenAgeGatedContentSupportArticle() {
  const obj = openIncodeAgeVerificationModalDefault;
  obj.openUrl(combinedDefault.getArticleURL(closure_2));
};
