// Module ID: 1920
// Function ID: 21722
// Name: wrapURL
// Dependencies: [1921, 653, 3742, 477, 2]

// Module 1920 (wrapURL)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";

const require = arg1;
function wrapURL(arg0, closure_6) {
  let tmp = closure_6;
  if (closure_6 === undefined) {
    tmp = combined;
  }
  return tmp + arg0;
}
function getLocale() {
  return locale.locale.toLowerCase();
}
const LocalizedLinks = ME.LocalizedLinks;
const combined = "https://" + ME.SUPPORT_DOMAIN;
let closure_6 = "https://" + ME.SUPPORT_DEV_DOMAIN;
const result = require("getLocalizedLink").fileFinishedImporting("utils/HelpdeskUtils.tsx");

export default {
  getArticleURL(REFERRAL_PROGRAM) {
    return wrapURL("/hc/" + getLocale() + "/articles/" + REFERRAL_PROGRAM);
  },
  getDevArticleURL(arg0) {
    return wrapURL("/hc/" + getLocale() + "/articles/" + arg0, closure_6);
  },
  getCreatorSupportArticleURL(MEDIA_CHANNEL) {
    return wrapURL("/hc/" + getLocale() + "/articles/" + MEDIA_CHANNEL, "https://creator-support.discord.com");
  },
  getTwitterURL() {
    return importDefault(3742)(LocalizedLinks.TWITTER);
  },
  getCommunityURL() {
    return wrapURL("/hc/" + getLocale());
  },
  getSubmitRequestURL(arg0) {
    const tmp = getLocale();
    const tmp2 = wrapURL("/hc/" + tmp + "/requests/new?platform=" + encodeURIComponent(require(477) /* set */.getPlatformName()));
    let sum = tmp2;
    if (null != arg0) {
      const _encodeURIComponent = encodeURIComponent;
      const _HermesInternal = HermesInternal;
      sum = tmp2 + "&device_info=" + encodeURIComponent(arg0);
    }
    return sum;
  },
  getSearchURL(arg0) {
    return wrapURL("/hc/" + getLocale() + "/search?utf8=%E2%9C%93&query=" + encodeURIComponent(arg0) + "&commit=Search");
  },
  getFeaturedArticlesJsonURL() {
    return wrapURL("/api/v2/help_center/en-us/articles.json?label_names=featured");
  },
  getAppsSupportURL(APPS_LEARN_MORE) {
    return wrapURL("/hc/" + getLocale() + "/articles/" + APPS_LEARN_MORE, "https://support-apps.discord.com");
  }
};
export const SUPPORT_LOCATION = combined;
