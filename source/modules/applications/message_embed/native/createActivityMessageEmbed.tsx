// Module ID: 12286
// Function ID: 95812
// Name: createActivityMessageEmbed
// Dependencies: [11071, 12213, 2]
// Exports: createActivityMessageEmbed

// Module 12286 (createActivityMessageEmbed)
const result = require("set").fileFinishedImporting("modules/applications/message_embed/native/createActivityMessageEmbed.tsx");

export const createActivityMessageEmbed = function createActivityMessageEmbed(app) {
  let embedUrl;
  let message;
  let params;
  let theme;
  app = app.app;
  ({ theme, embedUrl, message, params } = app);
  let obj = require(11071) /* createBlockedAppMessageEmbed */;
  const appMessageEmbed = obj.createAppMessageEmbed({ theme, embedUrl, message, app });
  if (null == appMessageEmbed) {
    return null;
  } else {
    const linkId = params.linkId;
    if (null == linkId) {
      return appMessageEmbed;
    } else {
      const orFetchCustomActivityLink = require(12213) /* fetchCustomActivityLink */.getOrFetchCustomActivityLink(app.id, linkId);
      let tmp7 = null;
      if (null != orFetchCustomActivityLink) {
        obj = {};
        const merged = Object.assign(appMessageEmbed);
        obj["title"] = app.name;
        obj["header"] = orFetchCustomActivityLink.title;
        obj["info"] = orFetchCustomActivityLink.description;
        obj["bannerRatio"] = "bot";
        const assetURL = orFetchCustomActivityLink.getAssetURL();
        let tmp6 = null;
        if (null != assetURL) {
          tmp6 = assetURL;
        }
        obj["staticBannerSrc"] = tmp6;
        obj["tagline"] = null;
        tmp7 = obj;
      }
      return tmp7;
    }
  }
};
