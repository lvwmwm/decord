// Module ID: 19208
// Function ID: 19209
// Name: InterestPickerCatalogs
// Dependencies: [9260, 17256, 1385, 2]
// Exports: getInterestPickerCatalog

// Module 19208 (InterestPickerCatalogs)
import GlobalUtils from "GlobalUtils" /* 1385 */;
import GuildProfileConstants from "GuildProfileConstants" /* 9260 */;
import GameCommunityConfig from "GameCommunityConfig" /* 17256 */;
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
export const getInterestPickerCatalog = function getInterestPickerCatalog(interestPickerGameList) {
  set = new Set(closure_3[interestPickerGameList]());
  const fromResult = from(set);
  const substr = fromResult.slice(0, 60);
  let tmp2 = null;
  if (0 !== substr.length) {
    tmp2 = substr;
  }
  return tmp2;
};
