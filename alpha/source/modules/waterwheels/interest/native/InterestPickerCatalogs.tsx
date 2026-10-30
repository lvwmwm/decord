// Module ID: 19506
// Function ID: 19507
// Name: InterestPickerCatalogs
// Dependencies: [9278, 17549, 1380, 2]
// Exports: getInterestPickerCatalog

// Module 19506 (InterestPickerCatalogs)
import GlobalUtils from "GlobalUtils" /* 1380 */;
import GuildProfileConstants from "GuildProfileConstants" /* 9278 */;
import GameCommunityConfig from "GameCommunityConfig" /* 17549 */;
import size from "module_2" /* 2 */;

let set;

const HOISTED_SEARCH_GAME_IDS = GuildProfileConstants.HOISTED_SEARCH_GAME_IDS;
let closure_3 = {
  popular() {
    return HOISTED_SEARCH_GAME_IDS;
  },
  trending() {
    return HOISTED_SEARCH_GAME_IDS;
  },
  mobile() {
    const values = Object.values(GameCommunityConfig.DETECTABLE_GAME_TO_APPLICATION_ID_MAP);
    return values.filter(GlobalUtils.isNotNullish);
  }
};
const result = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestPickerCatalogs.tsx");

export const INTEREST_PICKER_CATALOG_VERSION = "2026-10-27-placeholder";
export function getInterestPickerCatalog(arg0) {
  set = new Set(closure_3[arg0]());
  const fromResult = from(set);
  const substr = fromResult.slice(0, 60);
  let tmp2 = null;
  if (0 !== substr.length) {
    tmp2 = substr;
  }
  return tmp2;
}
