// Module ID: 8645
// Function ID: 68535
// Name: set
// Dependencies: [31, 8646, 8647, 8649, 8648, 2]
// Exports: useGameProfileStoreWebsites

// Module 8645 (set)
import result from "result";
import set from "buildSteamStoreUrl";

const require = arg1;
let set = new Set(["1402418703554842694", "356877880938070016"]);
let items = [require("ThirdPartyGameApplicationWebsiteCategory").ThirdPartyGameApplicationWebsiteCategory.EPICGAMES, require("ThirdPartyGameApplicationWebsiteCategory").ThirdPartyGameApplicationWebsiteCategory.STEAM, require("ThirdPartyGameApplicationWebsiteCategory").ThirdPartyGameApplicationWebsiteCategory.ROBLOX, require("ThirdPartyGameApplicationWebsiteCategory").ThirdPartyGameApplicationWebsiteCategory.BATTLENET, require("ThirdPartyGameApplicationWebsiteCategory").ThirdPartyGameApplicationWebsiteCategory.RIOT, require("ThirdPartyGameApplicationWebsiteCategory").ThirdPartyGameApplicationWebsiteCategory.MINECRAFT];
const result = set.fileFinishedImporting("modules/game_profile/hooks/useGameProfileStoreWebsites.tsx");

export const useGameProfileStoreWebsites = function useGameProfileStoreWebsites(data) {
  let id;
  if (null != data) {
    id = data.id;
  }
  steamWebsiteUrl = steamWebsiteUrl(id1[2]).useSteamWebsiteUrl(id);
  const tmp3 = importDefault(id1[3])(data);
  importDefault = tmp3;
  id1 = undefined;
  if (null != data) {
    id1 = data.id;
  }
  let websites;
  if (null != data) {
    websites = data.websites;
  }
  let steamReleaseStatus;
  if (null != data) {
    steamReleaseStatus = data.steamReleaseStatus;
  }
  const items = [steamWebsiteUrl, websites, id1, steamReleaseStatus, tmp3];
  return websites.useMemo(() => {
    if (null != websites) {
      if (null != id1) {
        let found;
        if (null != websites) {
          found = websites.filter((category) => {
            let tmp = category.category === steamWebsiteUrl(id1[1]).ThirdPartyGameApplicationWebsiteCategory.EPICGAMES;
            if (tmp) {
              tmp = !steamReleaseStatus.has(outer1_2);
            }
            let tmp4 = !tmp;
            if (!tmp) {
              let hasItem = category.category !== steamWebsiteUrl(id1[1]).ThirdPartyGameApplicationWebsiteCategory.STEAM;
              if (!hasItem) {
                hasItem = outer1_4 !== steamWebsiteUrl(id1[4]).SteamReleaseStatus.RETIRED_ABANDONED;
              }
              if (hasItem) {
                hasItem = outer2_5.includes(category.category);
              }
              tmp4 = hasItem;
            }
            return tmp4;
          });
        }
        if (null == found) {
          found = [];
        }
        let someResult = null == steamWebsiteUrl;
        if (!someResult) {
          someResult = steamReleaseStatus === steamWebsiteUrl(id1[4]).SteamReleaseStatus.RETIRED_ABANDONED;
        }
        if (!someResult) {
          someResult = found.some((category) => category.category === steamWebsiteUrl(id1[1]).ThirdPartyGameApplicationWebsiteCategory.STEAM);
        }
        if (!someResult) {
          let obj = { category: steamWebsiteUrl(id1[1]).ThirdPartyGameApplicationWebsiteCategory.STEAM, url: steamWebsiteUrl };
          found.push(obj);
        }
        const sorted = found.sort((category, category2) => {
          let num = -1;
          if (category.category !== steamWebsiteUrl(id1[1]).ThirdPartyGameApplicationWebsiteCategory.STEAM) {
            let num2 = 0;
            if (category2.category === steamWebsiteUrl(id1[1]).ThirdPartyGameApplicationWebsiteCategory.STEAM) {
              num2 = 1;
            }
            num = num2;
          }
          return num;
        });
        if (null != closure_1) {
          obj = { category: "XBOX_GAME_PASS", url: closure_1 };
          sorted.unshift(obj);
        }
        return sorted;
      }
    }
    return [];
  }, items);
};
