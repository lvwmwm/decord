// Module ID: 8141
// Function ID: 8142
// Name: useGameProfileStoreWebsites
// Dependencies: [19, 8142, 8143, 8145, 8144, 2]
// Exports: useGameProfileStoreWebsites

// Module 8141 (useGameProfileStoreWebsites)
import ThirdPartyGameApplicationWebsiteCategory from "ThirdPartyGameApplicationWebsiteCategory" /* 8142 */;
import SteamReleaseStatus from "SteamReleaseStatus" /* 8144 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

new Set(["1402418703554842694", "356877880938070016"]);
let items = [ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.EPICGAMES, ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.STEAM, ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.ROBLOX, ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.BATTLENET, ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.RIOT, ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.MINECRAFT];
const result = size.fileFinishedImporting("modules/game_profile/hooks/useGameProfileStoreWebsites.tsx");

export const useGameProfileStoreWebsites = function useGameProfileStoreWebsites(data) {
  let closure_1;
  let id1;
  let steamWebsiteUrl;
  let tmp = id1;
  let tmp2 = steamWebsiteUrl(id1[2]);
  let id;
  const useSteamWebsiteUrl = tmp2.useSteamWebsiteUrl;
  if (data != null) {
    id = data.id;
  }
  steamWebsiteUrl = useSteamWebsiteUrl(id);
  const tmp5 = require("useXboxGamePassStoreUrl")(data);
  importDefault = tmp5;
  id1 = undefined;
  if (data != null) {
    id1 = data.id;
  }
  let websites;
  if (data != null) {
    websites = data.websites;
  }
  let steamReleaseStatus;
  if (data != null) {
    steamReleaseStatus = data.steamReleaseStatus;
  }
  items = [steamWebsiteUrl, websites, id1, steamReleaseStatus, tmp5];
  return websites.useMemo(() => {
    if (null != websites) {
      let tmp2 = id1;
      if (null != id1) {
        let found;
        if (websites != null) {
          found = arr.filter((category) => {
            let tmp6 = !(category.category === steamWebsiteUrl(id1[1]).ThirdPartyGameApplicationWebsiteCategory.EPICGAMES && !steamReleaseStatus.has(closure_1_2));
            const tmp3 = category.category === steamWebsiteUrl(id1[1]).ThirdPartyGameApplicationWebsiteCategory.EPICGAMES && !steamReleaseStatus.has(closure_1_2);
            if (tmp6) {
              const hasItem = (category.category !== tmp(tmp2[1]).ThirdPartyGameApplicationWebsiteCategory.STEAM || closure_1_4 !== tmp(tmp2[4]).SteamReleaseStatus.RETIRED_ABANDONED) && items.includes(category.category);
              tmp6 = hasItem;
            }
            return tmp6;
          });
        }
        if (found == null) {
          found = [];
        }
        let someResult = null == steamWebsiteUrl;
        let tmp3 = steamWebsiteUrl;
        if (!someResult) {
          let tmp6 = require;
          someResult = steamReleaseStatus === SteamReleaseStatus.SteamReleaseStatus.RETIRED_ABANDONED;
        }
        if (!someResult) {
          someResult = found.some((category) => category.category === steamWebsiteUrl(id1[1]).ThirdPartyGameApplicationWebsiteCategory.STEAM);
        }
        if (!someResult) {
          const push = found.push;
          const obj = { category: ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.STEAM, url: tmp3 };
          push(obj);
        }
        const sorted = found.sort((category, category2) => {
          let num = -1;
          const tmp = steamWebsiteUrl;
          const tmp2 = id1;
          if (category.category !== steamWebsiteUrl(id1[1]).ThirdPartyGameApplicationWebsiteCategory.STEAM) {
            let num2 = 0;
            if (category2.category === tmp(tmp2[1]).ThirdPartyGameApplicationWebsiteCategory.STEAM) {
              num2 = 1;
            }
            num = num2;
          }
          return num;
        });
        if (null != closure_1) {
          const obj2 = { category: "XBOX_GAME_PASS", url: tmp11 };
          sorted.unshift(obj2);
        }
        return sorted;
      }
    } else {
      let tmp = closure_1;
    }
    return [];
  }, items);
};
