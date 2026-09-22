// Module ID: 8816
// Function ID: 8817
// Name: getGameProfileStoreWebsiteData
// Dependencies: [19, 21, 8812, 8817, 8809, 1114, 8819, 8821, 8823, 8825, 8827, 8831, 2]
// Exports: default

// Module 8816 (getGameProfileStoreWebsiteData)
import ThirdPartyGameApplicationWebsiteCategory from "ThirdPartyGameApplicationWebsiteCategory" /* 8812 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/native/utils/getGameProfileStoreWebsiteData.tsx");

export default function getGameProfileStoreWebsiteData(category) {
  category = category.category;
  if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.STEAM === category) {
    const obj2 = { icon: jsx(tmp(8817).SteamNeutralIcon, { size: "md" }), action: tmp(8809).GameProfileTrackActionActions.SteamStoreLink, title: null, url: null };
    const intl7 = tmp(1114).intl;
    obj2.title = intl7.string(tmp(1114).t.FsANs4);
    obj2.url = category.url;
    return obj2;
  } else if (tmp(8812).ThirdPartyGameApplicationWebsiteCategory.EPICGAMES === category) {
    const obj3 = { icon: jsx(tmp(8819).EpicGamesNeutralIcon, { size: "md" }), action: tmp(8809).GameProfileTrackActionActions.EpicStoreLink, title: null, url: null };
    const intl6 = tmp(1114).intl;
    obj3.title = intl6.string(tmp(1114).t.ZbBMHa);
    obj3.url = category.url;
    return obj3;
  } else if (tmp(8812).ThirdPartyGameApplicationWebsiteCategory.ROBLOX === category) {
    const obj4 = { icon: jsx(tmp(8821).RobloxNeutralIcon, { size: "md" }), action: tmp(8809).GameProfileTrackActionActions.RobloxStoreLink, title: null, url: null };
    const intl5 = tmp(1114).intl;
    obj4.title = intl5.string(tmp(1114).t["pJ+P+h"]);
    obj4.url = category.url;
    return obj4;
  } else if (tmp(8812).ThirdPartyGameApplicationWebsiteCategory.BATTLENET === category) {
    const obj5 = { icon: jsx(tmp(8823).BattlenetNeutralIcon, { size: "md" }), action: tmp(8809).GameProfileTrackActionActions.BattlenetStoreLink, title: null, url: null };
    const intl4 = tmp(1114).intl;
    obj5.title = intl4.string(tmp(1114).t["A7grp+"]);
    obj5.url = category.url;
    return obj5;
  } else if (tmp(8812).ThirdPartyGameApplicationWebsiteCategory.RIOT === category) {
    const obj6 = { icon: jsx(tmp(8825).RiotGamesNeutralIcon, { size: "md" }), action: tmp(8809).GameProfileTrackActionActions.RiotStoreLink, title: null, url: null };
    const intl3 = tmp(1114).intl;
    obj6.title = intl3.string(tmp(1114).t.h6MapL);
    obj6.url = category.url;
    return obj6;
  } else if (tmp(8812).ThirdPartyGameApplicationWebsiteCategory.MINECRAFT === category) {
    const obj7 = { icon: jsx(tmp(8827).MinecraftNeutralIcon, { size: "md" }), action: tmp(8809).GameProfileTrackActionActions.MinecraftStoreLink, title: null, url: null };
    const intl2 = tmp(1114).intl;
    obj7.title = intl2.string(tmp(1114).t["HZbmO+"]);
    obj7.url = category.url;
    return obj7;
  } else if ("XBOX_GAME_PASS" === category) {
    const obj = { icon: jsx(tmp(8831).XboxNeutralIcon, { size: "md" }), action: tmp(8809).GameProfileTrackActionActions.XboxGamePassStoreLink, title: null, url: null };
    const intl = tmp(1114).intl;
    obj.title = intl.string(tmp(1114).t["QpN/Iz"]);
    obj.url = category.url;
    return obj;
  } else {
    return null;
  }
};
