// Module ID: 8129
// Function ID: 8130
// Name: useShouldOpenGameProfileModal
// Dependencies: [19, 2001, 1074, 1241, 1385, 8130, 5424, 8131, 38, 2]
// Exports: default, gameIdIsAcceptable, gameIsAcceptable, trackEntryPoint

// Module 8129 (useShouldOpenGameProfileModal)
import _modDef38 from "module_38" /* 38 */;
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import FlagUtilsAll from "FlagUtils" /* 1385 */;
import GameFlags from "GameFlags" /* 8130 */;
import react from "react" /* 19 */;
import GameStore from "GameStore" /* 2001 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importAll;

const AnalyticEvents = Constants.AnalyticEvents;
const RejectionReason = { NoMatch: "no match", NSFW: "nsfw", Disabled: "profile disabled", Obscured: "obscured" };
const result = size.fileFinishedImporting("modules/game_profile/hooks/useShouldOpenGameProfileModal.tsx");

export default function useShouldOpenGameProfileModal(applicationId) {
  let gameId;
  let ref;
  let trackEntryPointImpression;
  let str = applicationId.applicationId;
  if (str === undefined) {
    str = "";
  }
  const source = applicationId.source;
  ({ trackEntryPointImpression, gameId } = applicationId);
  if (trackEntryPointImpression === undefined) {
    trackEntryPointImpression = true;
  }
  let gameRecord;
  let isLoading;
  let obj = isLoading;
  importAll = isLoading.useRef(false);
  let tmp = gameRecord;
  const tmp2 = trackEntryPointImpression(gameRecord[7])({ applicationId: str, gameId });
  gameRecord = tmp2.gameRecord;
  isLoading = tmp2.isLoading;
  let shouldOpenGameProfile = null != gameRecord;
  const gameId2 = tmp2.gameId;
  if (shouldOpenGameProfile) {
    let tmp5 = source;
    const obj2 = require("FlagUtils");
    shouldOpenGameProfile = !obj2.hasFlag(gameRecord.gameFlags, source(tmp[5]).GameFlags.GAME_DISABLED);
  }
  let items = [gameRecord, shouldOpenGameProfile, isLoading, source, trackEntryPointImpression];
  const effect = obj.useEffect(() => {
    let obj;
    let current = ref.current;
    const tmp = ref;
    if (!current) {
      current = !trackEntryPointImpression;
    }
    if (!current) {
      current = isLoading;
    }
    if (!current) {
      current = null == gameRecord;
    }
    if (!current) {
      let tmp14;
      _modDef38(null != source, "Cannot track a Game Profile Entry Point Impressions without a source.");
      const id = gameRecord.id;
      const tmp10 = shouldOpenGameProfile;
      const tmp5 = importDefault;
      const tmp7 = source;
      if (null == gameRecord) {
        const items = [obj.NoMatch];
        tmp14 = items;
      } else {
        const items1 = [];
        const obj4 = FlagUtilsAll;
        const tmp21 = require;
        if (obj4.hasFlag(gameRecord.gameFlags, GameFlags.GameFlags.GAME_DISABLED)) {
          items1.push(obj.Disabled);
        }
        tmp14 = items1;
        const tmp21Result = tmp21(5424);
        if (tmp21Result.isAgeRestrictedContentClassification(gameRecord.contentClassification)) {
          items1.push(obj.NSFW);
          tmp14 = items1;
        }
      }
      obj = { game_profile_available: tmp10, application_id: id, rejection_reason: tmp14, source: tmp7 };
      const tmp5Result = tmp5(1241);
      tmp5Result.track(AnalyticEvents.GAME_PROFILE_ENTRY_POINT_AVAILABLE, obj);
      tmp.current = true;
    }
  }, items);
  return { shouldOpenGameProfile, gameId: gameId2 };
};
export { RejectionReason };
export const trackEntryPoint = function trackEntryPoint(game_profile_available, id, items, CallTile) {
  if (items === undefined) {
    items = [];
  }
  const obj = AnalyticsUtilsDefault;
  const obj2 = { game_profile_available, application_id: id, rejection_reason: items, source: CallTile };
  obj.track(AnalyticEvents.GAME_PROFILE_ENTRY_POINT_AVAILABLE, obj2);
};
export const gameIsAcceptable = function gameIsAcceptable(gameFlags) {
  let arr;
  if (null == gameFlags) {
    const items = [obj.NoMatch];
    arr = items;
  } else {
    const items1 = [];
    const obj2 = FlagUtilsAll;
    const tmp8 = require;
    if (obj2.hasFlag(gameFlags.gameFlags, GameFlags.GameFlags.GAME_DISABLED)) {
      items1.push(obj.Disabled);
    }
    arr = items1;
    const tmp8Result = tmp8(5424);
    if (tmp8Result.isAgeRestrictedContentClassification(gameFlags.contentClassification)) {
      items1.push(obj.NSFW);
      arr = items1;
    }
  }
  return 0 === arr.length;
};
export const gameIdIsAcceptable = function gameIdIsAcceptable(gameId) {
  let arr;
  const game = GameStore.getGame(gameId);
  if (null == game) {
    const items = [obj.NoMatch];
    arr = items;
  } else {
    const items1 = [];
    const obj2 = FlagUtilsAll;
    const tmp9 = require;
    if (obj2.hasFlag(game.gameFlags, GameFlags.GameFlags.GAME_DISABLED)) {
      items1.push(obj.Disabled);
    }
    arr = items1;
    const tmp9Result = tmp9(5424);
    if (tmp9Result.isAgeRestrictedContentClassification(game.contentClassification)) {
      items1.push(obj.NSFW);
      arr = items1;
    }
  }
  return 0 === arr.length;
};
