// Module ID: 8647
// Function ID: 68542
// Name: buildSteamStoreUrl
// Dependencies: [4151, 653, 566, 8648, 8646, 1832, 2]
// Exports: useSteamWebsiteUrl

// Module 8647 (buildSteamStoreUrl)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { Distributors } from "ME";

const require = arg1;
function buildSteamStoreUrl(arg0) {
  return "https://store.steampowered.com/app/" + encodeURIComponent(arg0);
}
const result = require("initialize").fileFinishedImporting("modules/game_profile/hooks/useSteamWebsiteUrl.tsx");

export { buildSteamStoreUrl };
export const useSteamWebsiteUrl = function useSteamWebsiteUrl(id) {
  const _require = id;
  const items = [_isNativeReflectConstruct];
  const items1 = [id];
  return _require(566).useStateFromStores(items, () => {
    if (null == id) {
      return null;
    } else {
      const game = outer1_2.getGame(id);
      if (null == game) {
        return null;
      } else if (game.steamReleaseStatus === id(outer1_1[3]).SteamReleaseStatus.RETIRED_ABANDONED) {
        return null;
      } else {
        const websites = game.websites;
        const found = websites.find((category) => category.category === callback(outer2_1[4]).ThirdPartyGameApplicationWebsiteCategory.STEAM);
        if (null != found) {
          const url = found.url;
        }
        const thirdPartySkus = game.thirdPartySkus;
        const found1 = thirdPartySkus.filter((distributor) => {
          let tmp = distributor.distributor === outer2_3.STEAM;
          if (tmp) {
            tmp = !callback(outer2_1[5]).isNullOrEmpty(distributor.id);
            const obj = callback(outer2_1[5]);
          }
          return tmp;
        });
        const first = found1[0];
        id = undefined;
        if (null != first) {
          id = first.id;
        }
        let tmp6 = null;
        if (!obj.isNullOrEmpty(id)) {
          tmp6 = outer1_4(id);
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
