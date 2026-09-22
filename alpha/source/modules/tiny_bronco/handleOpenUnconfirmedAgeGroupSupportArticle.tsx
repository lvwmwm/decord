// Module ID: 15036
// Function ID: 15037
// Name: handleOpenUnconfirmedAgeGroupSupportArticle
// Dependencies: [14965, 8686, 2108, 2]
// Exports: handleOpenUnconfirmedAgeGroupSupportArticle

// Module 15036 (handleOpenUnconfirmedAgeGroupSupportArticle)
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2108 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8686 */;
import TinyBroncoConstants from "TinyBroncoConstants" /* 14965 */;
import size from "module_2" /* 2 */;

const TINY_BRONCO_ARTICLE_ID = TinyBroncoConstants.TINY_BRONCO_ARTICLE_ID;
const result = size.fileFinishedImporting("modules/tiny_bronco/handleOpenUnconfirmedAgeGroupSupportArticle.tsx");

export const handleOpenUnconfirmedAgeGroupSupportArticle = function handleOpenUnconfirmedAgeGroupSupportArticle() {
  const obj = AgeVerificationActionCreatorsDefault;
  obj.openUrl(HelpdeskUtilsDefault.getArticleURL(TINY_BRONCO_ARTICLE_ID));
};
