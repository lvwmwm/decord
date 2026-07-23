// Module ID: 8608
// Function ID: 68330
// Name: getGameProfileStoreWebsiteData
// Dependencies: [31, 33, 8604, 8609, 8600, 1212, 8611, 8613, 8615, 8617, 8619, 8623, 2]
// Exports: default

// Module 8608 (getGameProfileStoreWebsiteData)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("ThirdPartyGameApplicationWebsiteCategory").fileFinishedImporting("modules/game_profile/native/utils/getGameProfileStoreWebsiteData.tsx");

export default function getGameProfileStoreWebsiteData(category) {
  category = category.category;
  if (require(8604) /* ThirdPartyGameApplicationWebsiteCategory */.ThirdPartyGameApplicationWebsiteCategory.STEAM === category) {
    let obj = {};
    obj = { size: "md" };
    obj.icon = jsx(require(8609) /* SteamNeutralIcon */.SteamNeutralIcon, { size: "md" });
    obj.action = require(8600) /* GameProfileEmbedAction */.GameProfileTrackActionActions.SteamStoreLink;
    const intl7 = require(1212) /* getSystemLocale */.intl;
    obj.title = intl7.string(require(1212) /* getSystemLocale */.t.FsANs4);
    obj.url = category.url;
    return obj;
  } else if (require(8604) /* ThirdPartyGameApplicationWebsiteCategory */.ThirdPartyGameApplicationWebsiteCategory.EPICGAMES === category) {
    const obj1 = {};
    const obj2 = { size: "md" };
    obj1.icon = jsx(require(8611) /* EpicGamesNeutralIcon */.EpicGamesNeutralIcon, { size: "md" });
    obj1.action = require(8600) /* GameProfileEmbedAction */.GameProfileTrackActionActions.EpicStoreLink;
    const intl6 = require(1212) /* getSystemLocale */.intl;
    obj1.title = intl6.string(require(1212) /* getSystemLocale */.t.ZbBMHa);
    obj1.url = category.url;
    return obj1;
  } else if (require(8604) /* ThirdPartyGameApplicationWebsiteCategory */.ThirdPartyGameApplicationWebsiteCategory.ROBLOX === category) {
    const obj3 = {};
    const obj4 = { size: "md" };
    obj3.icon = jsx(require(8613) /* RobloxNeutralIcon */.RobloxNeutralIcon, { size: "md" });
    obj3.action = require(8600) /* GameProfileEmbedAction */.GameProfileTrackActionActions.RobloxStoreLink;
    const intl5 = require(1212) /* getSystemLocale */.intl;
    obj3.title = intl5.string(require(1212) /* getSystemLocale */.t["pJ+P+h"]);
    obj3.url = category.url;
    return obj3;
  } else if (require(8604) /* ThirdPartyGameApplicationWebsiteCategory */.ThirdPartyGameApplicationWebsiteCategory.BATTLENET === category) {
    const obj5 = {};
    const obj6 = { size: "md" };
    obj5.icon = jsx(require(8615) /* BattlenetNeutralIcon */.BattlenetNeutralIcon, { size: "md" });
    obj5.action = require(8600) /* GameProfileEmbedAction */.GameProfileTrackActionActions.BattlenetStoreLink;
    const intl4 = require(1212) /* getSystemLocale */.intl;
    obj5.title = intl4.string(require(1212) /* getSystemLocale */.t["A7grp+"]);
    obj5.url = category.url;
    return obj5;
  } else if (require(8604) /* ThirdPartyGameApplicationWebsiteCategory */.ThirdPartyGameApplicationWebsiteCategory.RIOT === category) {
    const obj7 = {};
    const obj8 = { size: "md" };
    obj7.icon = jsx(require(8617) /* RiotGamesNeutralIcon */.RiotGamesNeutralIcon, { size: "md" });
    obj7.action = require(8600) /* GameProfileEmbedAction */.GameProfileTrackActionActions.RiotStoreLink;
    const intl3 = require(1212) /* getSystemLocale */.intl;
    obj7.title = intl3.string(require(1212) /* getSystemLocale */.t.h6MapL);
    obj7.url = category.url;
    return obj7;
  } else if (require(8604) /* ThirdPartyGameApplicationWebsiteCategory */.ThirdPartyGameApplicationWebsiteCategory.MINECRAFT === category) {
    const obj9 = {};
    const obj10 = { size: "md" };
    obj9.icon = jsx(require(8619) /* MinecraftNeutralIcon */.MinecraftNeutralIcon, { size: "md" });
    obj9.action = require(8600) /* GameProfileEmbedAction */.GameProfileTrackActionActions.MinecraftStoreLink;
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj9.title = intl2.string(require(1212) /* getSystemLocale */.t["HZbmO+"]);
    obj9.url = category.url;
    return obj9;
  } else if ("XBOX_GAME_PASS" === category) {
    obj = {};
    const obj11 = { size: "md" };
    obj.icon = jsx(require(8623) /* XboxNeutralIcon */.XboxNeutralIcon, { size: "md" });
    obj.action = require(8600) /* GameProfileEmbedAction */.GameProfileTrackActionActions.XboxGamePassStoreLink;
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.title = intl.string(require(1212) /* getSystemLocale */.t["QpN/Iz"]);
    obj.url = category.url;
    return obj;
  } else {
    return null;
  }
};
