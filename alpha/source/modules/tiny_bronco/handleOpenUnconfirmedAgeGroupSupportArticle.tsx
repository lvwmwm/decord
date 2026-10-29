// Module ID: 16521
// Function ID: 16522
// Name: handleOpenUnconfirmedAgeGroupSupportArticle
// Dependencies: [10892, 6724, 7941, 2065, 2]
// Exports: handleOpenUnconfirmedAgeGroupSupportArticle

// Module 16521 (handleOpenUnconfirmedAgeGroupSupportArticle)
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2065 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 7941 */;
import LocationMetadataStore from "LocationMetadataStore" /* 10892 */;
import TinyBroncoConstants from "TinyBroncoConstants" /* 6724 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ TINY_BRONCO_AGE_GROUP_SUPPORT_ARTICLE_IDS_BY_COUNTRY: c3, TINY_BRONCO_DEFAULT_ARTICLE_ID: closure_4 } = TinyBroncoConstants);
const result = size.fileFinishedImporting("modules/tiny_bronco/handleOpenUnconfirmedAgeGroupSupportArticle.tsx");

export function handleOpenUnconfirmedAgeGroupSupportArticle() {
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
}
