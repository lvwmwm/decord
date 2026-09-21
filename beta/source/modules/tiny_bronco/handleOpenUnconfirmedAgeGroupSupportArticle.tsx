// Module ID: 15029
// Function ID: 15030
// Name: handleOpenUnconfirmedAgeGroupSupportArticle
// Dependencies: [14958, 8682, 2108, 2]
// Exports: handleOpenUnconfirmedAgeGroupSupportArticle

// Module 15029 (handleOpenUnconfirmedAgeGroupSupportArticle)
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2108 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8682 */;
import TinyBroncoConstants from "TinyBroncoConstants" /* 14958 */;
import size from "module_2" /* 2 */;

const TINY_BRONCO_ARTICLE_ID = TinyBroncoConstants.TINY_BRONCO_ARTICLE_ID;
const result = size.fileFinishedImporting("modules/tiny_bronco/handleOpenUnconfirmedAgeGroupSupportArticle.tsx");

export const handleOpenUnconfirmedAgeGroupSupportArticle = function handleOpenUnconfirmedAgeGroupSupportArticle() {
  const obj = AgeVerificationActionCreatorsDefault;
  obj.openUrl(HelpdeskUtilsDefault.getArticleURL(TINY_BRONCO_ARTICLE_ID));
};
