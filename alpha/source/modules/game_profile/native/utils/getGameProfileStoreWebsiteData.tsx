// Module ID: 8342
// Function ID: 8343
// Name: getGameProfileStoreWebsiteData
// Dependencies: [19, 21, 8338, 8343, 8335, 1115, 8345, 8347, 8349, 8351, 8353, 8357, 2]
// Exports: default

// Module 8342 (getGameProfileStoreWebsiteData)
import ThirdPartyGameApplicationWebsiteCategory from "ThirdPartyGameApplicationWebsiteCategory" /* 8338 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/native/utils/getGameProfileStoreWebsiteData.tsx");

export default function getGameProfileStoreWebsiteData(category) {
  category = category.category;
  if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.STEAM === category) {
    const obj2 = { icon: jsx(tmp(8343).SteamNeutralIcon, { size: "md" }), action: tmp(8335).GameProfileTrackActionActions.SteamStoreLink, title: null, url: null };
    const intl7 = tmp(1115).intl;
    obj2.title = intl7.string(tmp(1115).t.FsANs4);
    obj2.url = category.url;
    return obj2;
  } else if (tmp(8338).ThirdPartyGameApplicationWebsiteCategory.EPICGAMES === category) {
    const obj3 = { icon: jsx(tmp(8345).EpicGamesNeutralIcon, { size: "md" }), action: tmp(8335).GameProfileTrackActionActions.EpicStoreLink, title: null, url: null };
    const intl6 = tmp(1115).intl;
    obj3.title = intl6.string(tmp(1115).t.ZbBMHa);
    obj3.url = category.url;
    return obj3;
  } else if (tmp(8338).ThirdPartyGameApplicationWebsiteCategory.ROBLOX === category) {
    const obj4 = { icon: jsx(tmp(8347).RobloxNeutralIcon, { size: "md" }), action: tmp(8335).GameProfileTrackActionActions.RobloxStoreLink, title: null, url: null };
    const intl5 = tmp(1115).intl;
    obj4.title = intl5.string(tmp(1115).t["pJ+P+h"]);
    obj4.url = category.url;
    return obj4;
  } else if (tmp(8338).ThirdPartyGameApplicationWebsiteCategory.BATTLENET === category) {
    const obj5 = { icon: jsx(tmp(8349).BattlenetNeutralIcon, { size: "md" }), action: tmp(8335).GameProfileTrackActionActions.BattlenetStoreLink, title: null, url: null };
    const intl4 = tmp(1115).intl;
    obj5.title = intl4.string(tmp(1115).t["A7grp+"]);
    obj5.url = category.url;
    return obj5;
  } else if (tmp(8338).ThirdPartyGameApplicationWebsiteCategory.RIOT === category) {
    const obj6 = { icon: jsx(tmp(8351).RiotGamesNeutralIcon, { size: "md" }), action: tmp(8335).GameProfileTrackActionActions.RiotStoreLink, title: null, url: null };
    const intl3 = tmp(1115).intl;
    obj6.title = intl3.string(tmp(1115).t.h6MapL);
    obj6.url = category.url;
    return obj6;
  } else if (tmp(8338).ThirdPartyGameApplicationWebsiteCategory.MINECRAFT === category) {
    const obj7 = { icon: jsx(tmp(8353).MinecraftNeutralIcon, { size: "md" }), action: tmp(8335).GameProfileTrackActionActions.MinecraftStoreLink, title: null, url: null };
    const intl2 = tmp(1115).intl;
    obj7.title = intl2.string(tmp(1115).t["HZbmO+"]);
    obj7.url = category.url;
    return obj7;
  } else if ("XBOX_GAME_PASS" === category) {
    const obj = { icon: jsx(tmp(8357).XboxNeutralIcon, { size: "md" }), action: tmp(8335).GameProfileTrackActionActions.XboxGamePassStoreLink, title: null, url: null };
    const intl = tmp(1115).intl;
    obj.title = intl.string(tmp(1115).t["QpN/Iz"]);
    obj.url = category.url;
    return obj;
  } else {
    return null;
  }
};
