// Module ID: 9475
// Function ID: 9476
// Name: getGameProfileStoreWebsiteData
// Dependencies: [19, 21, 9471, 9476, 9468, 1113, 9478, 9480, 9482, 9484, 9486, 9490, 2]
// Exports: default

// Module 9475 (getGameProfileStoreWebsiteData)
import Fragment from "Fragment" /* 21 */;
import intl8 from "intl" /* 1113 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 9468 */;
import ThirdPartyGameApplicationWebsiteCategory from "ThirdPartyGameApplicationWebsiteCategory" /* 9471 */;
import SteamNeutralIcon from "SteamNeutralIcon" /* 9476 */;
import EpicGamesNeutralIcon from "EpicGamesNeutralIcon" /* 9478 */;
import RobloxNeutralIcon from "RobloxNeutralIcon" /* 9480 */;
import BattlenetNeutralIcon from "BattlenetNeutralIcon" /* 9482 */;
import RiotGamesNeutralIcon from "RiotGamesNeutralIcon" /* 9484 */;
import MinecraftNeutralIcon from "MinecraftNeutralIcon" /* 9486 */;
import XboxNeutralIcon from "XboxNeutralIcon" /* 9490 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/game_profile/native/utils/getGameProfileStoreWebsiteData.tsx");

export default function getGameProfileStoreWebsiteData(category) {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  category = category.category;
  if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.STEAM === category) {
    const obj2 = { icon: jsx(SteamNeutralIcon.SteamNeutralIcon, { size: "md" }), action: GameProfileAnalyticUtils.GameProfileTrackActionActions.SteamStoreLink, title: intl7.string(intl8.t.FsANs4), url: category.url };
    intl7 = tmp(1113).intl;
    return obj2;
  } else if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.EPICGAMES === category) {
    const obj3 = { icon: jsx(EpicGamesNeutralIcon.EpicGamesNeutralIcon, { size: "md" }), action: GameProfileAnalyticUtils.GameProfileTrackActionActions.EpicStoreLink, title: intl6.string(intl8.t.ZbBMHa), url: category.url };
    intl6 = tmp(1113).intl;
    return obj3;
  } else if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.ROBLOX === category) {
    const obj4 = { icon: jsx(RobloxNeutralIcon.RobloxNeutralIcon, { size: "md" }), action: GameProfileAnalyticUtils.GameProfileTrackActionActions.RobloxStoreLink, title: intl5.string(intl8.t["pJ+P+h"]), url: category.url };
    intl5 = tmp(1113).intl;
    return obj4;
  } else if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.BATTLENET === category) {
    const obj5 = { icon: jsx(BattlenetNeutralIcon.BattlenetNeutralIcon, { size: "md" }), action: GameProfileAnalyticUtils.GameProfileTrackActionActions.BattlenetStoreLink, title: intl4.string(intl8.t["A7grp+"]), url: category.url };
    intl4 = tmp(1113).intl;
    return obj5;
  } else if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.RIOT === category) {
    const obj6 = { icon: jsx(RiotGamesNeutralIcon.RiotGamesNeutralIcon, { size: "md" }), action: GameProfileAnalyticUtils.GameProfileTrackActionActions.RiotStoreLink, title: intl3.string(intl8.t.h6MapL), url: category.url };
    intl3 = tmp(1113).intl;
    return obj6;
  } else if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.MINECRAFT === category) {
    const obj7 = { icon: jsx(MinecraftNeutralIcon.MinecraftNeutralIcon, { size: "md" }), action: GameProfileAnalyticUtils.GameProfileTrackActionActions.MinecraftStoreLink, title: intl2.string(intl8.t["HZbmO+"]), url: category.url };
    intl2 = tmp(1113).intl;
    return obj7;
  } else if ("XBOX_GAME_PASS" === category) {
    const obj = { icon: jsx(XboxNeutralIcon.XboxNeutralIcon, { size: "md" }), action: GameProfileAnalyticUtils.GameProfileTrackActionActions.XboxGamePassStoreLink, title: intl.string(intl8.t["QpN/Iz"]), url: category.url };
    intl = tmp(1113).intl;
    return obj;
  } else {
    return null;
  }
};
