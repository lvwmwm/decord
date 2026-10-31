// Module ID: 9344
// Function ID: 9345
// Name: useSteamWebsiteUrl
// Dependencies: [2014, 1072, 504, 9345, 9343, 2026, 2]
// Exports: buildSteamStoreUrl, useSteamWebsiteUrl

// Module 9344 (useSteamWebsiteUrl)
import Constants from "Constants" /* 1072 */;
import SteamReleaseStatus from "SteamReleaseStatus" /* 9345 */;
import GameStore from "GameStore" /* 2014 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const Distributors = Constants.Distributors;
const result = size.fileFinishedImporting("modules/game_profile/hooks/useSteamWebsiteUrl.tsx");

export function buildSteamStoreUrl(arg0) {
  return "https://store.steampowered.com/app/" + encodeURIComponent(arg0);
}
export function useSteamWebsiteUrl(id) {
  _require = id;
  let obj = require("get initialized");
  const items = [GameStore];
  const items1 = [id];
  return obj.useStateFromStores(items, () => {
    let tmp;
    if (null == closure_0) {
      return null;
    } else {
      const game = GameStore.getGame(tmp);
      if (null == game) {
        return null;
      } else {
        const tmp11 = require;
        if (game.steamReleaseStatus === SteamReleaseStatus.SteamReleaseStatus.RETIRED_ABANDONED) {
          return null;
        } else {
          let url;
          let tmp7;
          const websites = game.websites;
          const found = websites.find((category) => category.category === id(closure_1_1[4]).ThirdPartyGameApplicationWebsiteCategory.STEAM);
          if (found != null) {
            url = found.url;
          }
          const thirdPartySkus = game.thirdPartySkus;
          const found1 = thirdPartySkus.filter((distributor) => {
            let tmp = distributor.distributor === constants.STEAM;
            if (tmp) {
              const obj = id(closure_1_1[5]);
              tmp = !obj.isNullOrEmpty(distributor.id);
            }
            return tmp;
          });
          const first = found1[0];
          id = undefined;
          if (first != null) {
            id = first.id;
          }
          let combined = null;
          const tmp11Result = tmp11(2026);
          if (!tmp11Result.isNullOrEmpty(id)) {
            const _encodeURIComponent = encodeURIComponent;
            const _HermesInternal = HermesInternal;
            combined = "https://store.steampowered.com/app/" + encodeURIComponent(id);
          }
          if (found1.length <= 1) {
            if (null == combined) {
              let tmp8 = null;
              if (null != url) {
                tmp8 = url;
              }
              combined = tmp8;
            }
            tmp7 = combined;
          } else {
            tmp7 = url;
          }
          return tmp7;
        }
      }
    }
  }, items1);
}
