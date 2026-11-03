// Module ID: 16770
// Function ID: 16771
// Name: handleOpenUnconfirmedAgeGroupSupportArticle
// Dependencies: [11071, 6857, 8079, 2190, 2]
// Exports: handleOpenUnconfirmedAgeGroupSupportArticle

// Module 16770 (handleOpenUnconfirmedAgeGroupSupportArticle)
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2190 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8079 */;
import LocationMetadataStore from "LocationMetadataStore" /* 11071 */;
import AgeNoticeConstants from "AgeNoticeConstants" /* 6857 */;
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
