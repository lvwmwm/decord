// Module ID: 8597
// Function ID: 68268
// Name: buildSteamStoreUrl
// Dependencies: []
// Exports: useSteamWebsiteUrl

// Module 8597 (buildSteamStoreUrl)
function buildSteamStoreUrl(arg0) {
  return "https://store.steampowered.com/app/" + encodeURIComponent(arg0);
}
let closure_2 = importDefault(dependencyMap[0]);
const Distributors = arg1(dependencyMap[1]).Distributors;
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/game_profile/hooks/useSteamWebsiteUrl.tsx");

export { buildSteamStoreUrl };
export const useSteamWebsiteUrl = function useSteamWebsiteUrl(id) {
  const arg1 = id;
  const items = [closure_2];
  const items1 = [id];
  return arg1(dependencyMap[2]).useStateFromStores(items, () => {
    if (null == arg0) {
      return null;
    } else {
      const game = game.getGame(arg0);
      if (null == game) {
        return null;
      } else if (game.steamReleaseStatus === arg0(closure_1[3]).SteamReleaseStatus.RETIRED_ABANDONED) {
        return null;
      } else {
        const websites = game.websites;
        const found = websites.find((category) => category.category === callback(closure_1[4]).ThirdPartyGameApplicationWebsiteCategory.STEAM);
        if (null != found) {
          const url = found.url;
        }
        const thirdPartySkus = game.thirdPartySkus;
        const found1 = thirdPartySkus.filter((distributor) => {
          let tmp = distributor.distributor === constants.STEAM;
          if (tmp) {
            tmp = !callback(closure_1[5]).isNullOrEmpty(distributor.id);
            const obj = callback(closure_1[5]);
          }
          return tmp;
        });
        const first = found1[0];
        let id;
        if (null != first) {
          id = first.id;
        }
        let tmp6 = null;
        if (!obj.isNullOrEmpty(id)) {
          tmp6 = callback(id);
        }
        if (found1.length <= 1) {
          if (null == tmp6) {
            let tmp9 = null;
            if (null != url) {
              tmp9 = url;
            }
            tmp6 = tmp9;
          }
          let tmp8 = tmp6;
        } else {
          tmp8 = url;
        }
        return tmp8;
      }
    }
  }, items1);
};
