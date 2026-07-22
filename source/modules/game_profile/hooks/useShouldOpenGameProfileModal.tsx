// Module ID: 8582
// Function ID: 68160
// Name: getRejectionReasons
// Dependencies: []
// Exports: default, gameIdIsAcceptable

// Module 8582 (getRejectionReasons)
function getRejectionReasons(gameFlags) {
  if (null == gameFlags) {
    const items = [closure_7.NoMatch];
    return items;
  } else {
    const items1 = [];
    if (obj.hasFlag(gameFlags.gameFlags, arg1(dependencyMap[5]).GameFlags.GAME_PROFILE_DISABLED)) {
      items1.push(closure_7.Disabled);
    }
    const themes = gameFlags.themes;
    if (themes.includes(arg1(dependencyMap[6]).ThirdPartyGameApplicationThemes.EROTIC)) {
      items1.push(closure_7.NSFW);
    }
    return items1;
  }
}
function gameIsAcceptable(game) {
  return 0 === getRejectionReasons(game).length;
}
let closure_4 = importAll(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
const AnalyticEvents = arg1(dependencyMap[2]).AnalyticEvents;
let closure_7 = { NoMatch: "no match", NSFW: "nsfw", Disabled: "profile disabled" };
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/game_profile/hooks/useShouldOpenGameProfileModal.tsx");

export default function useShouldOpenGameProfileModal(applicationId) {
  let gameId;
  let trackEntryPointImpression;
  let str = applicationId.applicationId;
  if (str === undefined) {
    str = "";
  }
  const source = applicationId.source;
  const arg1 = source;
  ({ trackEntryPointImpression, gameId } = applicationId);
  if (trackEntryPointImpression === undefined) {
    trackEntryPointImpression = true;
  }
  const importDefault = trackEntryPointImpression;
  let closure_2;
  let dependencyMap;
  let React;
  let closure_5;
  closure_2 = React.useRef(false);
  const obj = { applicationId: str, gameId };
  gameId = importDefault(dependencyMap[7])(obj);
  const gameRecord = gameId.gameRecord;
  dependencyMap = gameRecord;
  const isLoading = gameId.isLoading;
  React = isLoading;
  const shouldOpenGameProfile = gameIsAcceptable(gameRecord);
  closure_5 = shouldOpenGameProfile;
  const items = [gameRecord, shouldOpenGameProfile, isLoading, source, trackEntryPointImpression];
  const effect = React.useEffect(() => {
    if (!ref.current) {
      if (trackEntryPointImpression) {
        if (!isLoading) {
          if (null != gameRecord) {
            trackEntryPointImpression(gameRecord[8])(null != source, "Cannot track a Game Profile Entry Point Impressions without a source.");
            let items = callback(gameRecord);
            if (items === undefined) {
              items = [];
            }
            let obj = trackEntryPointImpression(gameRecord[3]);
            obj = { game_profile_available: shouldOpenGameProfile, application_id: gameRecord.id, rejection_reason: items, source };
            obj.track(constants.GAME_PROFILE_ENTRY_POINT_AVAILABLE, obj);
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
