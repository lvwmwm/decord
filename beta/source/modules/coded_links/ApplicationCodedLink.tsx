// Module ID: 7926
// Function ID: 7927
// Name: ApplicationCodedLink
// Dependencies: [4744, 1370, 7927, 7928, 2]
// Exports: getApplicationCodedLinkData, isApplicationCodedLink, isApplicationCodedLinkMobileSupported

// Module 7926 (ApplicationCodedLink)
import GlobalUtils from "GlobalUtils" /* 1370 */;
import CodedLink from "CodedLink" /* 4744 */;
import size from "module_2" /* 2 */;

const items = [CodedLink.CodedLinkType.APP_DIRECTORY_PROFILE, CodedLink.CodedLinkType.ACTIVITY_BOOKMARK, CodedLink.CodedLinkType.APP_DIRECTORY_STOREFRONT, CodedLink.CodedLinkType.APP_DIRECTORY_STOREFRONT_SKU, CodedLink.CodedLinkType.APP_OAUTH2_LINK];
const set = new Set(items);
const items1 = [CodedLink.CodedLinkType.APP_DIRECTORY_PROFILE, CodedLink.CodedLinkType.ACTIVITY_BOOKMARK, CodedLink.CodedLinkType.APP_OAUTH2_LINK];
const set1 = new Set(items1);
let result = size.fileFinishedImporting("modules/coded_links/ApplicationCodedLink.tsx");

export const APP_LINK_CODED_TYPES = set;
export const isApplicationCodedLink = function isApplicationCodedLink(type) {
  return GlobalUtils.isInSet(type, set);
};
export const APP_LINK_CODED_TYPES_MOBILE_SUPPORT = set1;
export const isApplicationCodedLinkMobileSupported = function isApplicationCodedLinkMobileSupported(type) {
  return GlobalUtils.isInSet(type, set1);
};
export const getApplicationCodedLinkData = function getApplicationCodedLinkData(type, code, url) {
  if (CodedLink.CodedLinkType.APP_DIRECTORY_PROFILE !== type) {
    if (tmp(4744).CodedLinkType.APP_OAUTH2_LINK !== type) {
      if (tmp(4744).CodedLinkType.APP_DIRECTORY_STOREFRONT !== type) {
        if (tmp(4744).CodedLinkType.APP_DIRECTORY_STOREFRONT_SKU === type) {
          const result = tmp(7927).parseStorefrontSkuCodedLink(code);
          let tmp5 = null;
          if (null != result) {
            const obj2 = { type, applicationId: null, skuId: null };
            ({ applicationId: obj4.applicationId, skuId: obj4.skuId } = result);
            tmp5 = obj2;
          }
          return tmp5;
        } else if (tmp(4744).CodedLinkType.ACTIVITY_BOOKMARK === type) {
          const obj = { type, applicationId: code, params: tmp(7928).extractActivityBookmarkParams(url) };
          return obj;
        }
      }
    }
  }
  return { type, applicationId: code };
};
