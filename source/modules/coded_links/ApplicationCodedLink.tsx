// Module ID: 5955
// Function ID: 52735
// Name: set
// Dependencies: [4154, 1327, 5956, 5957, 2]
// Exports: getApplicationCodedLinkData, isApplicationCodedLink, isApplicationCodedLinkMobileSupported

// Module 5955 (set)
import set from "makeStorefrontSKUCodedLink";

const items = [require("CodedLinkType").CodedLinkType.APP_DIRECTORY_PROFILE, require("CodedLinkType").CodedLinkType.ACTIVITY_BOOKMARK, require("CodedLinkType").CodedLinkType.APP_DIRECTORY_STOREFRONT, require("CodedLinkType").CodedLinkType.APP_DIRECTORY_STOREFRONT_SKU, require("CodedLinkType").CodedLinkType.APP_OAUTH2_LINK];
let set = new Set(items);
const items1 = [require("CodedLinkType").CodedLinkType.APP_DIRECTORY_PROFILE, require("CodedLinkType").CodedLinkType.ACTIVITY_BOOKMARK, require("CodedLinkType").CodedLinkType.APP_OAUTH2_LINK];
const set1 = new Set(items1);
let result = set.fileFinishedImporting("modules/coded_links/ApplicationCodedLink.tsx");

export const APP_LINK_CODED_TYPES = set;
export const isApplicationCodedLink = function isApplicationCodedLink(type) {
  return require(1327) /* isDiscordFrontendDevelopment */.isInSet(type, set);
};
export const APP_LINK_CODED_TYPES_MOBILE_SUPPORT = set1;
export const isApplicationCodedLinkMobileSupported = function isApplicationCodedLinkMobileSupported(type) {
  return require(1327) /* isDiscordFrontendDevelopment */.isInSet(type, set1);
};
export const getApplicationCodedLinkData = function getApplicationCodedLinkData(type, code, url) {
  if (require(4154) /* CodedLinkType */.CodedLinkType.APP_DIRECTORY_PROFILE !== type) {
    if (require(4154) /* CodedLinkType */.CodedLinkType.APP_OAUTH2_LINK !== type) {
      if (require(4154) /* CodedLinkType */.CodedLinkType.APP_DIRECTORY_STOREFRONT !== type) {
        if (require(4154) /* CodedLinkType */.CodedLinkType.APP_DIRECTORY_STOREFRONT_SKU === type) {
          const result = require(5956) /* makeStorefrontSKUCodedLink */.parseStorefrontSkuCodedLink(code);
          let tmp9 = null;
          if (null != result) {
            let obj = { type };
            ({ applicationId: obj4.applicationId, skuId: obj4.skuId } = result);
            tmp9 = obj;
          }
          return tmp9;
        } else if (require(4154) /* CodedLinkType */.CodedLinkType.ACTIVITY_BOOKMARK === type) {
          obj = { type, applicationId: code, params: require(5957) /* extractActivityBookmarkParams */.extractActivityBookmarkParams(url) };
          return obj;
        }
      }
    }
  }
  obj = { type, applicationId: code };
  return obj;
};
