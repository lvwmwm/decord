// Module ID: 11863
// Function ID: 91870
// Name: getGameProfileWebsiteData
// Dependencies: [33, 8604, 9023, 8600, 1212, 7773, 11404, 7775, 7777, 11864, 11866, 11868, 2]
// Exports: default

// Module 11863 (getGameProfileWebsiteData)
import { jsx } from "jsxProd";

const result = require("GlobeEarthIcon").fileFinishedImporting("modules/game_profile/native/utils/getGameProfileWebsiteData.tsx");

export default function getGameProfileWebsiteData(category, color) {
  category = category.category;
  if (require(8604) /* ThirdPartyGameApplicationWebsiteCategory */.ThirdPartyGameApplicationWebsiteCategory.OFFICIAL === category) {
    let obj = {};
    obj = { size: "md", color };
    obj.icon = jsx(require(9023) /* GlobeEarthIcon */.GlobeEarthIcon, { size: "md", color });
    obj.action = require(8600) /* GameProfileEmbedAction */.GameProfileTrackActionActions.WebsiteLink;
    const intl8 = require(1212) /* getSystemLocale */.intl;
    obj.title = intl8.string(require(1212) /* getSystemLocale */.t.fOUKvg);
    obj.url = category.url;
    return obj;
  } else if (require(8604) /* ThirdPartyGameApplicationWebsiteCategory */.ThirdPartyGameApplicationWebsiteCategory.TWITTER === category) {
    const obj1 = {};
    const obj2 = { size: "md", color };
    obj1.icon = jsx(require(7773) /* XNeutralIcon */.XNeutralIcon, { size: "md", color });
    obj1.action = require(8600) /* GameProfileEmbedAction */.GameProfileTrackActionActions.XLink;
    const intl7 = require(1212) /* getSystemLocale */.intl;
    obj1.title = intl7.string(require(1212) /* getSystemLocale */.t.INic4y);
    obj1.url = category.url;
    return obj1;
  } else if (require(8604) /* ThirdPartyGameApplicationWebsiteCategory */.ThirdPartyGameApplicationWebsiteCategory.YOUTUBE === category) {
    const obj3 = {};
    const obj4 = { size: "md", color };
    obj3.icon = jsx(require(11404) /* YoutubeNeutralIcon */.YoutubeNeutralIcon, { size: "md", color });
    obj3.action = require(8600) /* GameProfileEmbedAction */.GameProfileTrackActionActions.YouTubeLink;
    const intl6 = require(1212) /* getSystemLocale */.intl;
    obj3.title = intl6.string(require(1212) /* getSystemLocale */.t.lNmxbE);
    obj3.url = category.url;
    return obj3;
  } else if (require(8604) /* ThirdPartyGameApplicationWebsiteCategory */.ThirdPartyGameApplicationWebsiteCategory.FACEBOOK === category) {
    const obj5 = {};
    const obj6 = { size: "md", color };
    obj5.icon = jsx(require(7775) /* FacebookNeutralIcon */.FacebookNeutralIcon, { size: "md", color });
    obj5.action = require(8600) /* GameProfileEmbedAction */.GameProfileTrackActionActions.FacebookLink;
    const intl5 = require(1212) /* getSystemLocale */.intl;
    obj5.title = intl5.string(require(1212) /* getSystemLocale */.t.FjyREK);
    obj5.url = category.url;
    return obj5;
  } else if (require(8604) /* ThirdPartyGameApplicationWebsiteCategory */.ThirdPartyGameApplicationWebsiteCategory.INSTAGRAM === category) {
    const obj7 = {};
    const obj8 = { size: "md", color };
    obj7.icon = jsx(require(7777) /* InstagramNeutralIcon */.InstagramNeutralIcon, { size: "md", color });
    obj7.action = require(8600) /* GameProfileEmbedAction */.GameProfileTrackActionActions.InstagramLink;
    const intl4 = require(1212) /* getSystemLocale */.intl;
    obj7.title = intl4.string(require(1212) /* getSystemLocale */.t["cgR+IK"]);
    obj7.url = category.url;
    return obj7;
  } else if (require(8604) /* ThirdPartyGameApplicationWebsiteCategory */.ThirdPartyGameApplicationWebsiteCategory.BLUESKY === category) {
    const obj9 = {};
    const obj10 = { size: "md", color };
    obj9.icon = jsx(require(11864) /* BlueskyNeutralIcon */.BlueskyNeutralIcon, { size: "md", color });
    obj9.action = require(8600) /* GameProfileEmbedAction */.GameProfileTrackActionActions.BlueskyLink;
    const intl3 = require(1212) /* getSystemLocale */.intl;
    obj9.title = intl3.string(require(1212) /* getSystemLocale */.t["D/PHq5"]);
    obj9.url = category.url;
    return obj9;
  } else if (require(8604) /* ThirdPartyGameApplicationWebsiteCategory */.ThirdPartyGameApplicationWebsiteCategory.REDDIT === category) {
    const obj11 = {};
    const obj12 = { size: "md", color };
    obj11.icon = jsx(require(11866) /* RedditNeutralIcon */.RedditNeutralIcon, { size: "md", color });
    obj11.action = require(8600) /* GameProfileEmbedAction */.GameProfileTrackActionActions.RedditLink;
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj11.title = intl2.string(require(1212) /* getSystemLocale */.t["Hgb+fc"]);
    obj11.url = category.url;
    return obj11;
  } else if (require(8604) /* ThirdPartyGameApplicationWebsiteCategory */.ThirdPartyGameApplicationWebsiteCategory.TWITCH === category) {
    obj = {};
    const obj13 = { size: "md", color };
    obj.icon = jsx(require(11868) /* TwitchNeutralIcon */.TwitchNeutralIcon, { size: "md", color });
    obj.action = require(8600) /* GameProfileEmbedAction */.GameProfileTrackActionActions.TwitchLink;
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.title = intl.string(require(1212) /* getSystemLocale */.t["7xtz4G"]);
    obj.url = category.url;
    return obj;
  } else {
    return null;
  }
};
