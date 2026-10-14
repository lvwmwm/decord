// Module ID: 13885
// Function ID: 13886
// Name: createActivityMessageEmbed
// Dependencies: [12394, 13560, 2]
// Exports: createActivityMessageEmbed

// Module 13885 (createActivityMessageEmbed)
import createAppMessageEmbed from "createAppMessageEmbed" /* 12394 */;
import size from "module_2" /* 2 */;

let tmp;
const CustomActivityLinkUtils = tmp(13560);
const result = size.fileFinishedImporting("modules/applications/message_embed/native/createActivityMessageEmbed.tsx");

export const createActivityMessageEmbed = function createActivityMessageEmbed(app) {
  let assetURL;
  let embedUrl;
  let message;
  let params;
  let theme;
  app = app.app;
  ({ theme, embedUrl, message, params } = app);
  const obj = createAppMessageEmbed;
  const appMessageEmbed = obj.createAppMessageEmbed({ theme, embedUrl, message, app });
  if (null == appMessageEmbed) {
    return null;
  } else {
    const linkId = params.linkId;
    if (null == linkId) {
      return appMessageEmbed;
    } else {
      const tmpResult = CustomActivityLinkUtils;
      const orFetchCustomActivityLink = tmpResult.getOrFetchCustomActivityLink(app.id, linkId);
      let tmp8 = null;
      if (null != orFetchCustomActivityLink) {
        const obj3 = { title: app.name, bannerRatio: "bot", staticBannerSrc: assetURL, tagline: null };
        const merged = Object.assign(appMessageEmbed);
        ({ title: obj2.header, description: obj2.info } = orFetchCustomActivityLink);
        assetURL = orFetchCustomActivityLink.getAssetURL();
        if (assetURL == null) {
          assetURL = null;
        }
        tmp8 = obj3;
      }
      return tmp8;
    }
  }
};
