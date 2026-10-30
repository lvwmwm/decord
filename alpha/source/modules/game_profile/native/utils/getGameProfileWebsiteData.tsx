// Module ID: 9573
// Function ID: 9574
// Name: getGameProfileWebsiteData
// Dependencies: [19, 21, 9323, 9574, 9320, 1114, 8568, 9576, 8570, 8572, 9578, 9580, 9582, 9584, 9586, 8005, 9369, 9332, 2]
// Exports: default

// Module 9573 (getGameProfileWebsiteData)
import Fragment from "Fragment" /* 21 */;
import ThirdPartyGameApplicationWebsiteCategory from "ThirdPartyGameApplicationWebsiteCategory" /* 9323 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let tmp;
const intl14 = tmp(1114);
const GameProfileAnalyticUtils = tmp(9320);
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/game_profile/native/utils/getGameProfileWebsiteData.tsx");

export default function getGameProfileWebsiteData(category, color) {
  let intl;
  let intl10;
  let intl11;
  let intl12;
  let intl13;
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
    const obj2 = { icon: null, action: GameProfileAnalyticUtils.GameProfileTrackActionActions.WebsiteLink, title: intl13.string(intl14.t.fOUKvg), url: category.url };
    intl13 = intl14.intl;
    return obj2;
  } else if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.TWITTER === category) {
    const obj4 = { icon: null, action: GameProfileAnalyticUtils.GameProfileTrackActionActions.XLink, title: intl12.string(intl14.t.INic4y), url: category.url };
    intl12 = intl14.intl;
    return obj4;
  } else if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.YOUTUBE === category) {
    const obj6 = { icon: null, action: GameProfileAnalyticUtils.GameProfileTrackActionActions.YouTubeLink, title: intl11.string(intl14.t.lNmxbE), url: category.url };
    intl11 = intl14.intl;
    return obj6;
  } else if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.FACEBOOK === category) {
    const obj8 = { icon: null, action: GameProfileAnalyticUtils.GameProfileTrackActionActions.FacebookLink, title: intl10.string(intl14.t.FjyREK), url: category.url };
    intl10 = intl14.intl;
    return obj8;
  } else if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.INSTAGRAM === category) {
    const obj10 = { icon: null, action: GameProfileAnalyticUtils.GameProfileTrackActionActions.InstagramLink, title: intl9.string(intl14.t["cgR+IK"]), url: category.url };
    intl9 = intl14.intl;
    return obj10;
  } else if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.BLUESKY === category) {
    const obj12 = { icon: null, action: GameProfileAnalyticUtils.GameProfileTrackActionActions.BlueskyLink, title: intl8.string(intl14.t["D/PHq5"]), url: category.url };
    intl8 = intl14.intl;
    return obj12;
  } else if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.REDDIT === category) {
    const obj14 = { icon: null, action: GameProfileAnalyticUtils.GameProfileTrackActionActions.RedditLink, title: intl7.string(intl14.t["Hgb+fc"]), url: category.url };
    intl7 = intl14.intl;
    return obj14;
  } else if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.TWITCH === category) {
    const obj16 = { icon: null, action: GameProfileAnalyticUtils.GameProfileTrackActionActions.TwitchLink, title: intl6.string(intl14.t["7xtz4G"]), url: category.url };
    intl6 = intl14.intl;
    return obj16;
  } else if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.ITCH === category) {
    const obj18 = { icon: null, action: GameProfileAnalyticUtils.GameProfileTrackActionActions.ItchLink, title: intl5.string(intl14.t.nOrtg9), url: category.url };
    intl5 = intl14.intl;
    return obj18;
  } else if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.WIKIA === category) {
    const obj20 = { icon: null, action: GameProfileAnalyticUtils.GameProfileTrackActionActions.FandomLink, title: intl4.string(intl14.t.xDtQAQ), url: category.url };
    intl4 = intl14.intl;
    return obj20;
  } else {
    if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.IPHONE !== category) {
      if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.IPAD !== category) {
        if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.ANDROID === category) {
          const obj22 = { icon: null, action: GameProfileAnalyticUtils.GameProfileTrackActionActions.GooglePlayStoreLink, title: intl2.string(intl14.t.V6rllO), url: category.url };
          intl2 = intl14.intl;
          return obj22;
        } else if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.ROBLOX === category) {
          const obj = { icon: null, action: GameProfileAnalyticUtils.GameProfileTrackActionActions.RobloxStoreLink, title: intl.string(intl14.t["pJ+P+h"]), url: category.url };
          intl = intl14.intl;
          return obj;
        } else {
          return null;
        }
      }
    }
    const obj25 = { icon: null, action: GameProfileAnalyticUtils.GameProfileTrackActionActions.AppStoreLink, title: intl3.string(intl14.t.LVy7Ug), url: category.url };
    intl3 = intl14.intl;
    return obj25;
  }
};
