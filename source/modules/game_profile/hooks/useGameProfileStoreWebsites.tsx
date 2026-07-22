// Module ID: 8596
// Function ID: 68273
// Name: set
// Dependencies: []
// Exports: useGameProfileStoreWebsites

// Module 8596 (set)
let closure_3 = importAll(dependencyMap[0]);
const set = new Set([2073565331, -206158272]);
const items = [arg1(dependencyMap[1]).ThirdPartyGameApplicationWebsiteCategory.EPICGAMES, arg1(dependencyMap[1]).ThirdPartyGameApplicationWebsiteCategory.STEAM, arg1(dependencyMap[1]).ThirdPartyGameApplicationWebsiteCategory.ROBLOX, arg1(dependencyMap[1]).ThirdPartyGameApplicationWebsiteCategory.BATTLENET, arg1(dependencyMap[1]).ThirdPartyGameApplicationWebsiteCategory.RIOT, arg1(dependencyMap[1]).ThirdPartyGameApplicationWebsiteCategory.MINECRAFT];
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/game_profile/hooks/useGameProfileStoreWebsites.tsx");

export const useGameProfileStoreWebsites = function useGameProfileStoreWebsites(data) {
  let id;
  if (null != data) {
    id = data.id;
  }
  const steamWebsiteUrl = arg1(dependencyMap[2]).useSteamWebsiteUrl(id);
  const arg1 = steamWebsiteUrl;
  const tmp3 = importDefault(dependencyMap[3])(data);
  const importDefault = tmp3;
  let id1;
  if (null != data) {
    id1 = data.id;
  }
  const dependencyMap = id1;
  let websites;
  if (null != data) {
    websites = data.websites;
  }
  const React = websites;
  let steamReleaseStatus;
  if (null != data) {
    steamReleaseStatus = data.steamReleaseStatus;
  }
  const items = [steamWebsiteUrl, websites, id1, steamReleaseStatus, tmp3];
  return React.useMemo(() => {
    if (null != websites) {
      if (null != id1) {
        let found;
        if (null != websites) {
          found = websites.filter((category) => {
            let tmp = category.category === callback(closure_2[1]).ThirdPartyGameApplicationWebsiteCategory.EPICGAMES;
            if (tmp) {
              tmp = !set.has(closure_2);
            }
            let tmp4 = !tmp;
            if (!tmp) {
              let hasItem = category.category !== callback(closure_2[1]).ThirdPartyGameApplicationWebsiteCategory.STEAM;
              if (!hasItem) {
                hasItem = set !== callback(closure_2[4]).SteamReleaseStatus.RETIRED_ABANDONED;
              }
              if (hasItem) {
                hasItem = closure_5.includes(category.category);
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
          someResult = found.some((category) => category.category === callback(closure_2[1]).ThirdPartyGameApplicationWebsiteCategory.STEAM);
        }
        if (!someResult) {
          let obj = { category: steamWebsiteUrl(id1[1]).ThirdPartyGameApplicationWebsiteCategory.STEAM, url: steamWebsiteUrl };
          found.push(obj);
        }
        const sorted = found.sort((category, category2) => {
          let num = -1;
          if (category.category !== callback(closure_2[1]).ThirdPartyGameApplicationWebsiteCategory.STEAM) {
            let num2 = 0;
            if (category2.category === callback(closure_2[1]).ThirdPartyGameApplicationWebsiteCategory.STEAM) {
              num2 = 1;
            }
            num = num2;
          }
          return num;
        });
        if (null != tmp3) {
          obj = { category: "XBOX_GAME_PASS", url: tmp3 };
          sorted.unshift(obj);
        }
        return sorted;
      }
    }
    return [];
  }, items);
};
