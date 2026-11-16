// Module ID: 16975
// Function ID: 16976
// Name: handleOpenUnconfirmedAgeGroupSupportArticle
// Dependencies: [11099, 6824, 8057, 2185, 2]
// Exports: handleOpenUnconfirmedAgeGroupSupportArticle

// Module 16975 (handleOpenUnconfirmedAgeGroupSupportArticle)
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2185 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8057 */;
import LocationMetadataStore from "LocationMetadataStore" /* 11099 */;
import AgeNoticeConstants from "AgeNoticeConstants" /* 6824 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ AGE_NOTICE_AGE_GROUP_SUPPORT_ARTICLE_IDS_BY_COUNTRY: c3, AGE_NOTICE_DEFAULT_ARTICLE_ID: closure_4 } = AgeNoticeConstants);
const result = size.fileFinishedImporting("modules/age_assurance/age_notice/handleOpenUnconfirmedAgeGroupSupportArticle.tsx");

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
