// Module ID: 12164
// Function ID: 93581
// Name: createActivityMessageEmbed
// Dependencies: []
// Exports: createActivityMessageEmbed

// Module 12164 (createActivityMessageEmbed)
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/applications/message_embed/native/createActivityMessageEmbed.tsx");

export const createActivityMessageEmbed = function createActivityMessageEmbed(app) {
  let embedUrl;
  let message;
  let params;
  let theme;
  app = app.app;
  ({ theme, embedUrl, message, params } = app);
  let obj = require(dependencyMap[0]);
  const appMessageEmbed = obj.createAppMessageEmbed({ theme, embedUrl, message, app });
  if (null == appMessageEmbed) {
    return null;
  } else {
    const linkId = params.linkId;
    if (null == linkId) {
      return appMessageEmbed;
    } else {
      const orFetchCustomActivityLink = require(dependencyMap[1]).getOrFetchCustomActivityLink(app.id, linkId);
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
