// Module ID: 15955
// Function ID: 15956
// Name: handleOpenUnconfirmedAgeGroupSupportArticle
// Dependencies: [10755, 6650, 7868, 2067, 2]
// Exports: handleOpenUnconfirmedAgeGroupSupportArticle

// Module 15955 (handleOpenUnconfirmedAgeGroupSupportArticle)
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2067 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 7868 */;
import LocationMetadataStore from "LocationMetadataStore" /* 10755 */;
import TinyBroncoConstants from "TinyBroncoConstants" /* 6650 */;
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
