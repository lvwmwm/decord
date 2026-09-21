// Module ID: 15018
// Function ID: 15019
// Name: handleOpenUnconfirmedAgeGroupSupportArticle
// Dependencies: [14947, 8687, 2112, 2]
// Exports: handleOpenUnconfirmedAgeGroupSupportArticle

// Module 15018 (handleOpenUnconfirmedAgeGroupSupportArticle)
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2112 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8687 */;
import TinyBroncoConstants from "TinyBroncoConstants" /* 14947 */;
import size from "module_2" /* 2 */;

const TINY_BRONCO_ARTICLE_ID = TinyBroncoConstants.TINY_BRONCO_ARTICLE_ID;
const result = size.fileFinishedImporting("modules/tiny_bronco/handleOpenUnconfirmedAgeGroupSupportArticle.tsx");

export const handleOpenUnconfirmedAgeGroupSupportArticle = function handleOpenUnconfirmedAgeGroupSupportArticle() {
  const obj = AgeVerificationActionCreatorsDefault;
  obj.openUrl(HelpdeskUtilsDefault.getArticleURL(TINY_BRONCO_ARTICLE_ID));
};
