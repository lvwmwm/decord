// Module ID: 9449
// Function ID: 9450
// Name: getGameProfileWebsiteData
// Dependencies: [21, 9233, 9450, 9205, 1128, 8452, 9452, 8454, 8456, 9454, 9456, 9458, 7917, 9276, 2]
// Exports: default

// Module 9449 (getGameProfileWebsiteData)
import Fragment from "Fragment" /* 21 */;
import intl11 from "intl" /* 1128 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 9205 */;
import ThirdPartyGameApplicationWebsiteCategory from "ThirdPartyGameApplicationWebsiteCategory" /* 9233 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/game_profile/native/utils/getGameProfileWebsiteData.tsx");

export default function getGameProfileWebsiteData(category, color) {
  let intl;
  let intl10;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  category = category.category;
  if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.OFFICIAL === category) {
    const obj2 = { icon: null, action: GameProfileAnalyticUtils.GameProfileTrackActionActions.WebsiteLink, title: intl10.string(intl11.t.fOUKvg), url: category.url };
    intl10 = tmp(1128).intl;
    return obj2;
  } else if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.TWITTER === category) {
    const obj4 = { icon: null, action: GameProfileAnalyticUtils.GameProfileTrackActionActions.XLink, title: intl9.string(intl11.t.INic4y), url: category.url };
    intl9 = tmp(1128).intl;
    return obj4;
  } else if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.YOUTUBE === category) {
    const obj6 = { icon: null, action: GameProfileAnalyticUtils.GameProfileTrackActionActions.YouTubeLink, title: intl8.string(intl11.t.lNmxbE), url: category.url };
    intl8 = tmp(1128).intl;
    return obj6;
  } else if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.FACEBOOK === category) {
    const obj8 = { icon: null, action: GameProfileAnalyticUtils.GameProfileTrackActionActions.FacebookLink, title: intl7.string(intl11.t.FjyREK), url: category.url };
    intl7 = tmp(1128).intl;
    return obj8;
  } else if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.INSTAGRAM === category) {
    const obj10 = { icon: null, action: GameProfileAnalyticUtils.GameProfileTrackActionActions.InstagramLink, title: intl6.string(intl11.t["cgR+IK"]), url: category.url };
    intl6 = tmp(1128).intl;
    return obj10;
  } else if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.BLUESKY === category) {
    const obj12 = { icon: null, action: GameProfileAnalyticUtils.GameProfileTrackActionActions.BlueskyLink, title: intl5.string(intl11.t["D/PHq5"]), url: category.url };
    intl5 = tmp(1128).intl;
    return obj12;
  } else if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.REDDIT === category) {
    const obj14 = { icon: null, action: GameProfileAnalyticUtils.GameProfileTrackActionActions.RedditLink, title: intl4.string(intl11.t["Hgb+fc"]), url: category.url };
    intl4 = tmp(1128).intl;
    return obj14;
  } else if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.TWITCH === category) {
    const obj16 = { icon: null, action: GameProfileAnalyticUtils.GameProfileTrackActionActions.TwitchLink, title: intl3.string(intl11.t["7xtz4G"]), url: category.url };
    intl3 = tmp(1128).intl;
    return obj16;
  } else {
    if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.IPHONE !== category) {
      if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.IPAD !== category) {
        if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.ANDROID === category) {
          const obj = { icon: null, action: GameProfileAnalyticUtils.GameProfileTrackActionActions.GooglePlayStoreLink, title: intl.string(intl11.t.V6rllO), url: category.url };
          intl = tmp(1128).intl;
          return obj;
        } else {
          return null;
        }
      }
    }
    const obj19 = { icon: null, action: GameProfileAnalyticUtils.GameProfileTrackActionActions.AppStoreLink, title: intl2.string(intl11.t.LVy7Ug), url: category.url };
    intl2 = tmp(1128).intl;
    return obj19;
  }
};
