// Module ID: 8632
// Function ID: 68423
// Name: getRejectionReasons
// Dependencies: [31, 4151, 653, 675, 1360, 8633, 8223, 8634, 44, 2]
// Exports: default, gameIdIsAcceptable

// Module 8632 (getRejectionReasons)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { AnalyticEvents } from "ME";

const require = arg1;
function getRejectionReasons(gameFlags) {
  if (null == gameFlags) {
    const items = [closure_7.NoMatch];
    return items;
  } else {
    const items1 = [];
    if (obj2.hasFlag(gameFlags.gameFlags, require(8633) /* GameFlags */.GameFlags.GAME_PROFILE_DISABLED)) {
      items1.push(closure_7.Disabled);
    }
    obj2 = importAll(1360);
    if (obj.isAgeRestrictedContentClassification(gameFlags.contentClassification)) {
      items1.push(closure_7.NSFW);
    }
    return items1;
  }
}
function gameIsAcceptable(game) {
  return 0 === getRejectionReasons(game).length;
}
let closure_7 = { NoMatch: "no match", NSFW: "nsfw", Disabled: "profile disabled" };
const result = require("ME").fileFinishedImporting("modules/game_profile/hooks/useShouldOpenGameProfileModal.tsx");

export default function useShouldOpenGameProfileModal(applicationId) {
  let gameId;
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
  let closure_2;
  let gameRecord;
  let isLoading;
  let shouldOpenGameProfile;
  closure_2 = isLoading.useRef(false);
  let obj = { applicationId: str, gameId };
  gameId = trackEntryPointImpression(gameRecord[7])(obj);
  gameRecord = gameId.gameRecord;
  isLoading = gameId.isLoading;
  shouldOpenGameProfile = gameIsAcceptable(gameRecord);
  let items = [gameRecord, shouldOpenGameProfile, isLoading, source, trackEntryPointImpression];
  const effect = isLoading.useEffect(() => {
    if (!ref.current) {
      if (trackEntryPointImpression) {
        if (!isLoading) {
          if (null != gameRecord) {
            trackEntryPointImpression(gameRecord[8])(null != source, "Cannot track a Game Profile Entry Point Impressions without a source.");
            let items = outer1_8(gameRecord);
            if (items === undefined) {
              items = [];
            }
            let obj = trackEntryPointImpression(gameRecord[3]);
            obj = { game_profile_available: shouldOpenGameProfile, application_id: gameRecord.id, rejection_reason: items, source };
            obj.track(outer1_6.GAME_PROFILE_ENTRY_POINT_AVAILABLE, obj);
            ref.current = true;
            const tmp12 = source;
            const tmp16 = shouldOpenGameProfile;
          }
        }
      }
    }
  }, items);
  return { shouldOpenGameProfile, gameId: gameId.gameId };
};
export { gameIsAcceptable };
export const gameIdIsAcceptable = function gameIdIsAcceptable(arg0) {
  return gameIsAcceptable(game.getGame(arg0));
};
