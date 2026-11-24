// Module ID: 16057
// Function ID: 16058
// Name: handleOpenUnconfirmedAgeGroupSupportArticle
// Dependencies: [9861, 6710, 7737, 2187, 2]
// Exports: handleOpenUnconfirmedAgeGroupSupportArticle

// Module 16057 (handleOpenUnconfirmedAgeGroupSupportArticle)
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2187 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 7737 */;
import LocationMetadataStore from "LocationMetadataStore" /* 9861 */;
import AgeNoticeConstants from "AgeNoticeConstants" /* 6710 */;
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
