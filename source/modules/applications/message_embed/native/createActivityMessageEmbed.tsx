// Module ID: 12474
// Function ID: 12475
// Name: createActivityMessageEmbed
// Dependencies: [11231, 12098, 2]
// Exports: createActivityMessageEmbed

// Module 12474 (createActivityMessageEmbed)
const result = require("set").fileFinishedImporting("modules/applications/message_embed/native/createActivityMessageEmbed.tsx");

export const createActivityMessageEmbed = function createActivityMessageEmbed(app) {
  let embedUrl;
  let message;
  let params;
  let theme;
  app = app.app;
  ({ theme, embedUrl, message, params } = app);
  let obj = require(11231) /* createAppMessageEmbed */;
  const appMessageEmbed = obj.createAppMessageEmbed({ theme, embedUrl, message, app });
  if (null == appMessageEmbed) {
    return null;
  } else {
    const linkId = params.linkId;
    if (null == linkId) {
      return appMessageEmbed;
    } else {
      const orFetchCustomActivityLink = tmp(12098).getOrFetchCustomActivityLink(app.id, linkId);
      let tmp8 = null;
      if (null != orFetchCustomActivityLink) {
        obj = {};
        const merged = Object.assign(appMessageEmbed);
        obj.title = app.name;
        ({ title: obj2.header, description: obj2.info } = orFetchCustomActivityLink);
        obj.bannerRatio = "bot";
        let assetURL = orFetchCustomActivityLink.getAssetURL();
        if (assetURL == null) {
          assetURL = null;
        }
        obj.staticBannerSrc = assetURL;
        obj.tagline = null;
        tmp8 = obj;
      }
      return tmp8;
    }
  }
  tmp = require;
};
