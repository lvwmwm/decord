// Module ID: 9554
// Function ID: 9555
// Name: getGameProfileWebsiteData
// Dependencies: [19, 21, 9309, 9555, 9282, 1125, 8534, 9557, 8536, 8538, 9559, 9561, 9563, 7999, 9355, 9318, 2]
// Exports: default

// Module 9554 (getGameProfileWebsiteData)
import Fragment from "Fragment" /* 21 */;
import intl12 from "intl" /* 1125 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 9282 */;
import ThirdPartyGameApplicationWebsiteCategory from "ThirdPartyGameApplicationWebsiteCategory" /* 9309 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/game_profile/native/utils/getGameProfileWebsiteData.tsx");

export default function getGameProfileWebsiteData(category, color) {
  let intl;
  let intl10;
  let intl11;
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
    const obj2 = { icon: null, action: GameProfileAnalyticUtils.GameProfileTrackActionActions.WebsiteLink, title: intl11.string(intl12.t.fOUKvg), url: category.url };
    intl11 = tmp(1125).intl;
    return obj2;
  } else if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.TWITTER === category) {
    const obj4 = { icon: null, action: GameProfileAnalyticUtils.GameProfileTrackActionActions.XLink, title: intl10.string(intl12.t.INic4y), url: category.url };
    intl10 = tmp(1125).intl;
    return obj4;
  } else if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.YOUTUBE === category) {
    const obj6 = { icon: null, action: GameProfileAnalyticUtils.GameProfileTrackActionActions.YouTubeLink, title: intl9.string(intl12.t.lNmxbE), url: category.url };
    intl9 = tmp(1125).intl;
    return obj6;
  } else if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.FACEBOOK === category) {
    const obj8 = { icon: null, action: GameProfileAnalyticUtils.GameProfileTrackActionActions.FacebookLink, title: intl8.string(intl12.t.FjyREK), url: category.url };
    intl8 = tmp(1125).intl;
    return obj8;
  } else if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.INSTAGRAM === category) {
    const obj10 = { icon: null, action: GameProfileAnalyticUtils.GameProfileTrackActionActions.InstagramLink, title: intl7.string(intl12.t["cgR+IK"]), url: category.url };
    intl7 = tmp(1125).intl;
    return obj10;
  } else if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.BLUESKY === category) {
    const obj12 = { icon: null, action: GameProfileAnalyticUtils.GameProfileTrackActionActions.BlueskyLink, title: intl6.string(intl12.t["D/PHq5"]), url: category.url };
    intl6 = tmp(1125).intl;
    return obj12;
  } else if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.REDDIT === category) {
    const obj14 = { icon: null, action: GameProfileAnalyticUtils.GameProfileTrackActionActions.RedditLink, title: intl5.string(intl12.t["Hgb+fc"]), url: category.url };
    intl5 = tmp(1125).intl;
    return obj14;
  } else if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.TWITCH === category) {
    const obj16 = { icon: null, action: GameProfileAnalyticUtils.GameProfileTrackActionActions.TwitchLink, title: intl4.string(intl12.t["7xtz4G"]), url: category.url };
    intl4 = tmp(1125).intl;
    return obj16;
  } else {
    if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.IPHONE !== category) {
      if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.IPAD !== category) {
        if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.ANDROID === category) {
          const obj18 = { icon: null, action: GameProfileAnalyticUtils.GameProfileTrackActionActions.GooglePlayStoreLink, title: intl2.string(intl12.t.V6rllO), url: category.url };
          intl2 = tmp(1125).intl;
          return obj18;
        } else if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.ROBLOX === category) {
          const obj = { icon: null, action: GameProfileAnalyticUtils.GameProfileTrackActionActions.RobloxStoreLink, title: intl.string(intl12.t["pJ+P+h"]), url: category.url };
          intl = tmp(1125).intl;
          return obj;
        } else {
          return null;
        }
      }
    }
    const obj21 = { icon: null, action: GameProfileAnalyticUtils.GameProfileTrackActionActions.AppStoreLink, title: intl3.string(intl12.t.LVy7Ug), url: category.url };
    intl3 = tmp(1125).intl;
    return obj21;
  }
};
