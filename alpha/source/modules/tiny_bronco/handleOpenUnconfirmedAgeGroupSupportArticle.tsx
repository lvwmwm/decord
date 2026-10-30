// Module ID: 16572
// Function ID: 16573
// Name: handleOpenUnconfirmedAgeGroupSupportArticle
// Dependencies: [10915, 6731, 7947, 2062, 2]
// Exports: handleOpenUnconfirmedAgeGroupSupportArticle

// Module 16572 (handleOpenUnconfirmedAgeGroupSupportArticle)
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2062 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 7947 */;
import LocationMetadataStore from "LocationMetadataStore" /* 10915 */;
import TinyBroncoConstants from "TinyBroncoConstants" /* 6731 */;
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
