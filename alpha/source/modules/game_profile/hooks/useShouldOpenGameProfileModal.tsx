// Module ID: 8880
// Function ID: 8881
// Name: useShouldOpenGameProfileModal
// Dependencies: [19, 2020, 1085, 1265, 1403, 8881, 6042, 558, 576, 8882, 38, 2]
// Exports: gameIdIsAcceptable, gameIsAcceptable, isGameDisabled, trackEntryPoint

// Module 8880 (useShouldOpenGameProfileModal)
import _modDef38 from "module_38" /* 38 */;
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import FlagUtilsAll from "FlagUtils" /* 1403 */;
import GameFlags from "GameFlags" /* 8881 */;
import react from "react" /* 19 */;
import GameStore from "GameStore" /* 2020 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let arr1, arr3, flag, importAll, importDefault, obj1, tmp11, tmp17, tmp18, tmp20, tmp3, tmp4, tmp6, trackResult;

const AnalyticEvents = Constants.AnalyticEvents;
const RejectionReason = { NoMatch: "no match", NSFW: "nsfw", Disabled: "profile disabled", Obscured: "obscured" };
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useShouldOpenGameProfileModal(trackEntryPointImpression) {
  let applicationId;
  let closure_1;
  let gameId;
  let gameId2;
  let gameRecord;
  let isLoading;
  let ref;
  let source;
  let tmp = source;
  let obj = source(gameRecord[8]);
  const cResult = obj.c(15);
  ({ applicationId, gameId, source } = trackEntryPointImpression);
  trackEntryPointImpression = trackEntryPointImpression.trackEntryPointImpression;
  let str = "";
  if (undefined !== applicationId) {
    str = applicationId;
  }
  importDefault = tmp4;
  importAll = isLoading.useRef(false);
  const obj2 = isLoading;
  if (cResult[0] === str) {
    let tmp5;
    let tmp8;
    if (cResult[1] === gameId) {
      tmp5 = cResult[2];
    }
    let tmp7 = require("useResolveGameForProfile")(tmp5);
    ({ gameId: gameId2, gameRecord } = tmp7);
    isLoading = tmp7.isLoading;
    if (cResult[3] !== gameRecord) {
      let tmp10 = null != gameRecord;
      if (tmp10) {
        let obj4 = require("FlagUtils");
        tmp10 = !obj4.hasFlag(gameRecord.gameFlags, tmp(tmp2[5]).GameFlags.GAME_DISABLED);
      }
      cResult[3] = gameRecord;
      cResult[4] = tmp10;
      tmp8 = tmp10;
    } else {
      tmp8 = cResult[4];
    }
    let closure_5 = tmp8;
    if (cResult[5] === gameRecord) {
      if (cResult[6] === tmp8) {
        if (cResult[7] === isLoading) {
          if (cResult[8] === source) {
            let tmp12;
            let tmp13;
            if (cResult[9] === (undefined === trackEntryPointImpression || trackEntryPointImpression)) {
              tmp12 = cResult[10];
              tmp13 = cResult[11];
            }
            const effect = obj2.useEffect(tmp12, tmp13);
            if (cResult[12] === gameId2) {
              let tmp15;
              if (cResult[13] === tmp8) {
                tmp15 = cResult[14];
              }
              return tmp15;
            }
            const obj3 = { shouldOpenGameProfile: tmp8, gameId: gameId2 };
            cResult[12] = gameId2;
            cResult[13] = tmp8;
            class A {
              constructor() {
                current = closure_2.current;
                tmp = closure_2;
                if (!current) {
                  tmp2 = trackEntryPointImpression;
                  current = !trackEntryPointImpression;
                }
                if (!current) {
                  current = isLoading;
                }
                if (!current) {
                  tmp3 = gameRecord;
                  tmp4 = null;
                  current = null == gameRecord;
                }
                if (!current) {
                  tmp6 = closure_3;
                  tmp5 = closure_1;
                  tmp8 = null;
                  str = "Cannot track a Game Profile Entry Point Impressions without a source.";
                  tmp7 = source;
                  tmp9 = closure_1(closure_3[10])(null != source, "Cannot track a Game Profile Entry Point Impressions without a source.");
                  tmp11 = gameRecord;
                  tmp10 = closure_5;
                  id = gameRecord.id;
                  if (null == gameRecord) {
                    tmp17 = closure_7;
                    items = [];
                    items[0] = closure_7.NoMatch;
                    tmp14 = items;
                  } else {
                    items1 = [];
                    tmp20 = closure_2;
                    obj4 = closure_2(tmp6[4]);
                    tmp21 = closure_0;
                    if (obj4.hasFlag(tmp11.gameFlags, closure_0(tmp6[5]).GameFlags.GAME_DISABLED)) {
                      tmp12 = closure_7;
                      arr1 = items1.push(closure_7.Disabled);
                    }
                    tmp21Result = tmp21(tmp6[6]);
                    tmp14 = items1;
                    if (tmp21Result.isAgeRestrictedContentClassification(tmp11.contentClassification)) {
                      tmp15 = closure_7;
                      arr3 = items1.push(closure_7.NSFW);
                      tmp14 = items1;
                    }
                  }
                  tmp5Result = tmp5(tmp6[3]);
                  tmp18 = AnalyticEvents;
                  obj1 = { game_profile_available: null, application_id: null, rejection_reason: null, source: null };
                  obj1.game_profile_available = tmp10;
                  obj1.application_id = id;
                  obj1.rejection_reason = tmp14;
                  obj1.source = tmp7;
                  trackResult = tmp5Result.track(AnalyticEvents.GAME_PROFILE_ENTRY_POINT_AVAILABLE, obj1);
                  flag = true;
                  tmp.current = true;
                }
                return;
              }
            }
            tmp15 = obj3;
          }
        }
      }
    }
    class A {
      constructor() {
        current = closure_2.current;
        tmp = closure_2;
        if (!current) {
          tmp2 = trackEntryPointImpression;
          current = !trackEntryPointImpression;
        }
        if (!current) {
          current = isLoading;
        }
        if (!current) {
          tmp3 = gameRecord;
          tmp4 = null;
          current = null == gameRecord;
        }
        if (!current) {
          tmp6 = closure_3;
          tmp5 = closure_1;
          tmp8 = null;
          str = "Cannot track a Game Profile Entry Point Impressions without a source.";
          tmp7 = source;
          tmp9 = closure_1(closure_3[10])(null != source, "Cannot track a Game Profile Entry Point Impressions without a source.");
          tmp11 = gameRecord;
          tmp10 = closure_5;
          id = gameRecord.id;
          if (null == gameRecord) {
            tmp17 = closure_7;
            items = [];
            items[0] = closure_7.NoMatch;
            tmp14 = items;
          } else {
            items1 = [];
            tmp20 = closure_2;
            obj4 = closure_2(tmp6[4]);
            tmp21 = closure_0;
            if (obj4.hasFlag(tmp11.gameFlags, closure_0(tmp6[5]).GameFlags.GAME_DISABLED)) {
              tmp12 = closure_7;
              arr1 = items1.push(closure_7.Disabled);
            }
            tmp21Result = tmp21(tmp6[6]);
            tmp14 = items1;
            if (tmp21Result.isAgeRestrictedContentClassification(tmp11.contentClassification)) {
              tmp15 = closure_7;
              arr3 = items1.push(closure_7.NSFW);
              tmp14 = items1;
            }
          }
          tmp5Result = tmp5(tmp6[3]);
          tmp18 = AnalyticEvents;
          obj1 = { game_profile_available: null, application_id: null, rejection_reason: null, source: null };
          obj1.game_profile_available = tmp10;
          obj1.application_id = id;
          obj1.rejection_reason = tmp14;
          obj1.source = tmp7;
          trackResult = tmp5Result.track(AnalyticEvents.GAME_PROFILE_ENTRY_POINT_AVAILABLE, obj1);
          flag = true;
          tmp.current = true;
        }
        return;
      }
    }
    let items = [gameRecord, tmp8, isLoading, source, tmp4];
    cResult[5] = gameRecord;
    cResult[6] = tmp8;
    cResult[7] = isLoading;
    cResult[8] = source;
    cResult[9] = undefined === trackEntryPointImpression || trackEntryPointImpression;
    cResult[10] = A;
    cResult[11] = items;
    tmp13 = items;
    tmp12 = A;
  }
  const obj5 = { applicationId: str, gameId };
  cResult[0] = str;
  cResult[1] = gameId;
  cResult[2] = obj5;
  tmp5 = obj5;
}) : (function useShouldOpenGameProfileModal(applicationId) {
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
  const tmp2 = trackEntryPointImpression(gameRecord[9])({ applicationId: str, gameId });
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
        const tmp21Result = tmp21(6042);
        if (tmp21Result.isAgeRestrictedContentClassification(gameRecord.contentClassification)) {
          items1.push(obj.NSFW);
          tmp14 = items1;
        }
      }
      obj = { game_profile_available: tmp10, application_id: id, rejection_reason: tmp14, source: tmp7 };
      const tmp5Result = tmp5(1265);
      tmp5Result.track(AnalyticEvents.GAME_PROFILE_ENTRY_POINT_AVAILABLE, obj);
      tmp.current = true;
    }
  }, items);
  return { shouldOpenGameProfile, gameId: gameId2 };
});
function trackEntryPoint(game_profile_available, id, items, CallTile) {
  if (items === undefined) {
    items = [];
  }
  const obj = AnalyticsUtilsDefault;
  const obj2 = { game_profile_available, application_id: id, rejection_reason: items, source: CallTile };
  obj.track(AnalyticEvents.GAME_PROFILE_ENTRY_POINT_AVAILABLE, obj2);
}
function isGameDisabled(gameFlags) {
  const obj = FlagUtilsAll;
  return obj.hasFlag(gameFlags.gameFlags, GameFlags.GameFlags.GAME_DISABLED);
}
function gameIsAcceptable(gameFlags) {
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
    const tmp8Result = tmp8(6042);
    if (tmp8Result.isAgeRestrictedContentClassification(gameFlags.contentClassification)) {
      items1.push(obj.NSFW);
      arr = items1;
    }
  }
  return 0 === arr.length;
}
const result = size.fileFinishedImporting("modules/game_profile/hooks/useShouldOpenGameProfileModal.tsx");

export default tmp2;
export { RejectionReason };
export { trackEntryPoint };
export { isGameDisabled };
export { gameIsAcceptable };
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
    const tmp9Result = tmp9(6042);
    if (tmp9Result.isAgeRestrictedContentClassification(game.contentClassification)) {
      items1.push(obj.NSFW);
      arr = items1;
    }
  }
  return 0 === arr.length;
};
