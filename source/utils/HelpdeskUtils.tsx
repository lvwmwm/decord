// Module ID: 1920
// Function ID: 21720
// Name: wrapURL
// Dependencies: []

// Module 1920 (wrapURL)
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
let closure_3 = importDefault(dependencyMap[0]);
const tmp2 = arg1(dependencyMap[1]);
const LocalizedLinks = tmp2.LocalizedLinks;
const combined = "https://" + tmp2.SUPPORT_DOMAIN;
let closure_6 = "https://" + tmp2.SUPPORT_DEV_DOMAIN;
const result = arg1(dependencyMap[4]).fileFinishedImporting("utils/HelpdeskUtils.tsx");

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
    return importDefault(dependencyMap[2])(LocalizedLinks.TWITTER);
  },
  getCommunityURL() {
    return wrapURL("/hc/" + getLocale());
  },
  getSubmitRequestURL(arg0) {
    const tmp = getLocale();
    const tmp2 = wrapURL("/hc/" + tmp + "/requests/new?platform=" + encodeURIComponent(arg1(dependencyMap[3]).getPlatformName()));
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
