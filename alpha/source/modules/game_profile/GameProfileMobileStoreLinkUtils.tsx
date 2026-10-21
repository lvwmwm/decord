// Module ID: 9280
// Function ID: 9281
// Name: GameProfileMobileStoreLinkUtils
// Dependencies: [9233, 1106, 2]
// Exports: getMobileStoreLink

// Module 9280 (GameProfileMobileStoreLinkUtils)
import ApplicationDistributors from "ApplicationDistributors" /* 1106 */;
import ThirdPartyGameApplicationWebsiteCategory from "ThirdPartyGameApplicationWebsiteCategory" /* 9233 */;
import size from "module_2" /* 2 */;

let websiteHostnames;

let items;
let items1;
let obj2;
let obj3;
let obj = { appStore: obj2, googlePlay: obj3 };
obj2 = {
  websiteCategories: items,
  websiteHostnames: ["apps.apple.com", "itunes.apple.com"],
  distributor: ApplicationDistributors.ApplicationDistributors.APPLE_APP_STORE,
  buildUrl(arg0) {
    return "https://apps.apple.com/app/id" + arg0;
  }
};
items = [ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.IPHONE, ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.IPAD];
obj3 = {
  websiteCategories: items1,
  websiteHostnames: ["play.google.com"],
  distributor: ApplicationDistributors.ApplicationDistributors.GOOGLE_PLAY,
  buildUrl(arg0) {
    return "https://play.google.com/store/apps/details?id=" + encodeURIComponent(arg0);
  }
};
items1 = [ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.ANDROID];
const values = Object.values(obj);
const set = new Set(values.flatMap((websiteCategories) => websiteCategories.websiteCategories));
const result = size.fileFinishedImporting("modules/game_profile/GameProfileMobileStoreLinkUtils.tsx");

export const MOBILE_STORES = obj;
export const MOBILE_STORE_WEBSITE_CATEGORIES = set;
export const getMobileStoreLink = function getMobileStoreLink(thirdPartySkus, buildUrl) {
  function getMobileStoreWebsite(thirdPartySkus, buildUrl) {
    let closure_1 = buildUrl;
    function _loop(iter) {
      thirdPartySkus = iter;
      const websites = thirdPartySkus.websites;
      const found = websites.find(function(url) {
        url = url.url;
        if (url.category !== iter) {
          return false;
        } else {
          try {
            const _URL = URL;
            const self = this;
            const self2 = this;
            const uRL = new URL(url);
            let hasItem = "http:" === uRL.protocol || "https:" === tmp5.protocol;
            if (hasItem) {
              websiteHostnames = websiteHostnames.websiteHostnames;
              hasItem = websiteHostnames.includes(tmp4.hostname);
            }
            return hasItem;
          } catch (err) {
            return false;
          }
        }
      });
      if (null != found) {
        return { v: found };
      }
    }
    const iter = buildUrl.websiteCategories[Symbol.iterator]();
    while (iter !== undefined) {
      let _loopResult = _loop(iter.next());
      let tmp2 = _loopResult;
      if (tmp2) {
        let v = _loopResult.v;
        iter.return();
        return v;
      }
    }
    return null;
  }
  let tmp = getMobileStoreWebsite(thirdPartySkus, buildUrl);
  if (tmp == null) {
    thirdPartySkus = thirdPartySkus.thirdPartySkus;
    let found = thirdPartySkus.find((distributor) => distributor.distributor === buildUrl.distributor);
    let id;
    if (found != null) {
      id = found.id;
    }
    let tmp4 = null;
    if (null != id) {
      const obj = { category: buildUrl.websiteCategories[0], url: buildUrl.buildUrl(id) };
      tmp4 = obj;
    }
    tmp = tmp4;
  }
  return tmp;
};
