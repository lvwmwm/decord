// Module ID: 14814
// Function ID: 14815
// Name: handleOpenUnconfirmedAgeGroupSupportArticle
// Dependencies: [10633, 5933, 7492, 2127, 2]
// Exports: handleOpenUnconfirmedAgeGroupSupportArticle

// Module 14814 (handleOpenUnconfirmedAgeGroupSupportArticle)
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2127 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 7492 */;
import LocationMetadataStore from "LocationMetadataStore" /* 10633 */;
import TinyBroncoConstants from "TinyBroncoConstants" /* 5933 */;
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
