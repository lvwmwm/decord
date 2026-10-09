// Module ID: 14922
// Function ID: 14923
// Name: handleOpenUnconfirmedAgeGroupSupportArticle
// Dependencies: [10807, 5934, 7497, 2127, 2]
// Exports: handleOpenUnconfirmedAgeGroupSupportArticle

// Module 14922 (handleOpenUnconfirmedAgeGroupSupportArticle)
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2127 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 7497 */;
import LocationMetadataStore from "LocationMetadataStore" /* 10807 */;
import TinyBroncoConstants from "TinyBroncoConstants" /* 5934 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ TINY_BRONCO_AGE_GROUP_SUPPORT_ARTICLE_IDS_BY_COUNTRY: c3, TINY_BRONCO_DEFAULT_ARTICLE_ID: closure_4 } = TinyBroncoConstants);
const result = size.fileFinishedImporting("modules/tiny_bronco/handleOpenUnconfirmedAgeGroupSupportArticle.tsx");

export const handleOpenUnconfirmedAgeGroupSupportArticle = function handleOpenUnconfirmedAgeGroupSupportArticle() {
  const countryCode = LocationMetadataStore.getCountryCode();
  let tmp2;
  if (null != countryCode) {
    tmp2 = _false[countryCode.alpha2];
  }
  const openUrl = AgeVerificationActionCreatorsDefault.openUrl;
  AgeVerificationActionCreatorsDefault;
  const getArticleURL = HelpdeskUtilsDefault.getArticleURL;
  HelpdeskUtilsDefault;
  if (tmp2 == null) {
    tmp2 = React3;
  }
  openUrl(getArticleURL(tmp2));
};
