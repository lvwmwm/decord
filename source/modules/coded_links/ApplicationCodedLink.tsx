// Module ID: 6926
// Function ID: 55255
// Name: set
// Dependencies: []
// Exports: getApplicationCodedLinkData, isApplicationCodedLink, isApplicationCodedLinkMobileSupported

// Module 6926 (set)
const items = [require(dependencyMap[0]).CodedLinkType.APP_DIRECTORY_PROFILE, require(dependencyMap[0]).CodedLinkType.ACTIVITY_BOOKMARK, require(dependencyMap[0]).CodedLinkType.APP_DIRECTORY_STOREFRONT, require(dependencyMap[0]).CodedLinkType.APP_DIRECTORY_STOREFRONT_SKU, require(dependencyMap[0]).CodedLinkType.APP_OAUTH2_LINK];
const set = new Set(items);
const items1 = [require(dependencyMap[0]).CodedLinkType.APP_DIRECTORY_PROFILE, require(dependencyMap[0]).CodedLinkType.ACTIVITY_BOOKMARK, require(dependencyMap[0]).CodedLinkType.APP_OAUTH2_LINK];
const set1 = new Set(items1);
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/coded_links/ApplicationCodedLink.tsx");

export const APP_LINK_CODED_TYPES = set;
export const isApplicationCodedLink = function isApplicationCodedLink(type) {
  return require(dependencyMap[1]).isInSet(type, set);
};
export const APP_LINK_CODED_TYPES_MOBILE_SUPPORT = set1;
export const isApplicationCodedLinkMobileSupported = function isApplicationCodedLinkMobileSupported(type) {
  return require(dependencyMap[1]).isInSet(type, set1);
};
export const getApplicationCodedLinkData = function getApplicationCodedLinkData(type, code, url) {
  if (require(dependencyMap[0]).CodedLinkType.APP_DIRECTORY_PROFILE !== type) {
    if (require(dependencyMap[0]).CodedLinkType.APP_OAUTH2_LINK !== type) {
      if (require(dependencyMap[0]).CodedLinkType.APP_DIRECTORY_STOREFRONT !== type) {
        if (require(dependencyMap[0]).CodedLinkType.APP_DIRECTORY_STOREFRONT_SKU === type) {
          const result = require(dependencyMap[2]).parseStorefrontSkuCodedLink(code);
          let tmp9 = null;
          if (null != result) {
            let obj = { type };
            ({ applicationId: obj4.applicationId, skuId: obj4.skuId } = result);
            tmp9 = obj;
          }
          return tmp9;
        } else if (require(dependencyMap[0]).CodedLinkType.ACTIVITY_BOOKMARK === type) {
          obj = { type, applicationId: code, params: require(dependencyMap[3]).extractActivityBookmarkParams(url) };
          return obj;
        }
      }
    }
  }
  obj = { type, applicationId: code };
  return obj;
};
