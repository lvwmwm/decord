// Module ID: 14274
// Function ID: 14275
// Name: handleOpenUnconfirmedAgeGroupSupportArticle
// Dependencies: [13263, 9197, 7863, 2114, 2]
// Exports: handleOpenUnconfirmedAgeGroupSupportArticle

// Module 14274 (handleOpenUnconfirmedAgeGroupSupportArticle)
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2114 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 7863 */;
import LocationMetadataStore from "LocationMetadataStore" /* 13263 */;
import TinyBroncoConstants from "TinyBroncoConstants" /* 9197 */;
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
