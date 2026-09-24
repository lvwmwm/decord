// Module ID: 8994
// Function ID: 8995
// Name: getGameProfileStoreWebsiteData
// Dependencies: [19, 21, 8990, 8995, 8976, 1119, 8997, 8999, 9001, 9003, 9005, 9009, 2]
// Exports: default

// Module 8994 (getGameProfileStoreWebsiteData)
import ThirdPartyGameApplicationWebsiteCategory from "ThirdPartyGameApplicationWebsiteCategory" /* 8990 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/native/utils/getGameProfileStoreWebsiteData.tsx");

export default function getGameProfileStoreWebsiteData(category) {
  category = category.category;
  if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.STEAM === category) {
    const obj2 = { icon: jsx(tmp(8995).SteamNeutralIcon, { size: "md" }), action: tmp(8976).GameProfileTrackActionActions.SteamStoreLink, title: null, url: null };
    const intl7 = tmp(1119).intl;
    obj2.title = intl7.string(tmp(1119).t.FsANs4);
    obj2.url = category.url;
    return obj2;
  } else if (tmp(8990).ThirdPartyGameApplicationWebsiteCategory.EPICGAMES === category) {
    const obj3 = { icon: jsx(tmp(8997).EpicGamesNeutralIcon, { size: "md" }), action: tmp(8976).GameProfileTrackActionActions.EpicStoreLink, title: null, url: null };
    const intl6 = tmp(1119).intl;
    obj3.title = intl6.string(tmp(1119).t.ZbBMHa);
    obj3.url = category.url;
    return obj3;
  } else if (tmp(8990).ThirdPartyGameApplicationWebsiteCategory.ROBLOX === category) {
    const obj4 = { icon: jsx(tmp(8999).RobloxNeutralIcon, { size: "md" }), action: tmp(8976).GameProfileTrackActionActions.RobloxStoreLink, title: null, url: null };
    const intl5 = tmp(1119).intl;
    obj4.title = intl5.string(tmp(1119).t["pJ+P+h"]);
    obj4.url = category.url;
    return obj4;
  } else if (tmp(8990).ThirdPartyGameApplicationWebsiteCategory.BATTLENET === category) {
    const obj5 = { icon: jsx(tmp(9001).BattlenetNeutralIcon, { size: "md" }), action: tmp(8976).GameProfileTrackActionActions.BattlenetStoreLink, title: null, url: null };
    const intl4 = tmp(1119).intl;
    obj5.title = intl4.string(tmp(1119).t["A7grp+"]);
    obj5.url = category.url;
    return obj5;
  } else if (tmp(8990).ThirdPartyGameApplicationWebsiteCategory.RIOT === category) {
    const obj6 = { icon: jsx(tmp(9003).RiotGamesNeutralIcon, { size: "md" }), action: tmp(8976).GameProfileTrackActionActions.RiotStoreLink, title: null, url: null };
    const intl3 = tmp(1119).intl;
    obj6.title = intl3.string(tmp(1119).t.h6MapL);
    obj6.url = category.url;
    return obj6;
  } else if (tmp(8990).ThirdPartyGameApplicationWebsiteCategory.MINECRAFT === category) {
    const obj7 = { icon: jsx(tmp(9005).MinecraftNeutralIcon, { size: "md" }), action: tmp(8976).GameProfileTrackActionActions.MinecraftStoreLink, title: null, url: null };
    const intl2 = tmp(1119).intl;
    obj7.title = intl2.string(tmp(1119).t["HZbmO+"]);
    obj7.url = category.url;
    return obj7;
  } else if ("XBOX_GAME_PASS" === category) {
    const obj = { icon: jsx(tmp(9009).XboxNeutralIcon, { size: "md" }), action: tmp(8976).GameProfileTrackActionActions.XboxGamePassStoreLink, title: null, url: null };
    const intl = tmp(1119).intl;
    obj.title = intl.string(tmp(1119).t["QpN/Iz"]);
    obj.url = category.url;
    return obj;
  } else {
    return null;
  }
};
