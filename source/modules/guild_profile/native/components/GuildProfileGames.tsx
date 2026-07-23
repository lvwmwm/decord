// Module ID: 8587
// Function ID: 68186
// Name: ClickableGameIcon
// Dependencies: [31, 27, 33, 4130, 689, 8588, 8600, 11876, 4126, 11880, 11881, 3831, 4098, 11882, 1934, 4660, 2]
// Exports: default

// Module 8587 (ClickableGameIcon)
import result from "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
function ClickableGameIcon(game) {
  let activityLevel;
  let enabled;
  let onPressFallback;
  let style;
  game = game.game;
  ({ enabled, onPressFallback } = game);
  enabled = undefined;
  ({ style, activityLevel } = game);
  let obj = { gameId: game.id, source: game(8600).GameProfileSources.GuildProfileGames, trackEntryPointImpression: enabled };
  const tmpResult = onPressFallback(8588)(obj);
  const dependencyMap = tmpResult;
  if (enabled) {
    enabled = null != tmpResult;
  }
  const items = [enabled, tmpResult, onPressFallback, game];
  if (enabled) {
    const callback = enabled.useCallback(() => {
      if (enabled) {
        tmpResult();
      } else if (null != onPressFallback) {
        onPressFallback(game);
      }
    }, items);
  }
  obj = { style, game, activityLevel, onPress: callback };
  return callback(onPressFallback(11876), obj);
}
function FavoriteGame(game) {
  let activityLevel;
  let clickable;
  game = game.game;
  ({ activityLevel, clickable } = game);
  let obj = { style: _createForOfIteratorHelperLoose().favoriteGame };
  const items = [callback(ClickableGameIcon, { game, activityLevel, enabled: clickable }), ];
  obj = { variant: "text-sm/medium", color: "text-subtle", children: game.name };
  items[1] = callback(require(4126) /* Text */.Text, obj);
  obj.children = items;
  return callback2(View, obj);
}
function GuildProfileGamesContent(profile) {
  let gamesToDisplay;
  let lastGameToDisplay;
  profile = profile.profile;
  ({ gamesToDisplay, lastGameToDisplay } = profile);
  const remainingGames = profile.remainingGames;
  let c6;
  let _createForOfIteratorHelperLoose;
  let tmp = _createForOfIteratorHelperLoose();
  const React = tmp;
  const gameActivity = profile.gameActivity;
  let obj = profile(remainingGames[10]);
  const enabled = obj.useGuildProfileGameProfilesExperiment({ location: "guild_profile_games" }).enabled;
  let iconURL;
  if (null != lastGameToDisplay) {
    iconURL = lastGameToDisplay.getIconURL(24);
  }
  c6 = tmp3;
  let items = [lastGameToDisplay, null != iconURL, remainingGames, gameActivity, tmp, enabled];
  const memo = React.useMemo(() => {
    let tmp = null;
    if (null != lastGameToDisplay) {
      if (!_undefined) {
        tmp = null;
      } else if (0 === remainingGames.length) {
        let obj = { game: lastGameToDisplay, activityLevel: gameActivity[lastGameToDisplay.id], enabled };
        let tmp10 = enabled(outer1_8, obj);
      } else {
        obj = { style: tmp.lastItem };
        obj = { style: tmp.lastItemImage, game: lastGameToDisplay, activityLevel: gameActivity[lastGameToDisplay.id] };
        const items = [enabled(lastGameToDisplay(remainingGames[7]), obj), , ];
        const obj1 = { style: tmp.lastItemOverlay };
        items[1] = enabled(gameActivity, obj1);
        const obj2 = { style: tmp.lastItemText };
        const obj3 = { variant: "text-xs/medium", color: "text-overlay-light" };
        const _HermesInternal = HermesInternal;
        obj3.children = "+" + remainingGames.length;
        obj2.children = enabled(profile(remainingGames[8]).Text, obj3);
        items[2] = enabled(gameActivity, obj2);
        obj.children = items;
        tmp10 = _undefined(gameActivity, obj);
      }
    }
    return tmp;
  }, items);
  _createForOfIteratorHelperLoose = React.useCallback((content) => {
    let obj = lastGameToDisplay(remainingGames[11]);
    obj = { key: "profile-game-" + content.id, content: content.name };
    obj.open(obj);
  }, []);
  [][0] = profile;
  if (1 === gamesToDisplay.length) {
    obj = { style: tmp.container };
    obj = { game: gamesToDisplay[0], activityLevel: gameActivity[gamesToDisplay[0].id], clickable: enabled };
    obj.children = enabled(FavoriteGame, obj);
    let tmp15Result = enabled(gameActivity, obj);
  } else if (tmp5) {
    let obj1 = { style: tmp.container, onPress: tmp6 };
    const items1 = [gamesToDisplay.map((game) => enabled(lastGameToDisplay(remainingGames[7]), { game, activityLevel: gameActivity[game.id] }, game.id)), memo];
    obj1.children = items1;
    tmp15Result = tmp15(profile(remainingGames[15]).PressableHighlight, obj1);
  } else {
    let obj2 = { style: tmp.container };
    const items2 = [gamesToDisplay.map((game) => enabled(outer1_8, { game, activityLevel: gameActivity[game.id], enabled, onPressFallback: closure_7 }, game.id)), memo];
    obj2.children = items2;
    tmp15Result = tmp15(gameActivity, obj2);
  }
  return tmp15Result;
}
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { display: "flex", flexDirection: "row", gap: 8 }, favoriteGame: { display: "flex", flexDirection: "row", alignItems: "center", gap: 8 }, lastItem: { position: "relative", width: 32, height: 32 } };
_createForOfIteratorHelperLoose = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SCRIM, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs };
_createForOfIteratorHelperLoose.lastItemOverlay = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.lastItemImage = { position: "absolute" };
_createForOfIteratorHelperLoose.lastItemText = { display: "flex", justifyContent: "center", alignItems: "center", width: 32, height: 32 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/guild_profile/native/components/GuildProfileGames.tsx");

export default function GuildProfileGames(profile) {
  profile = profile.profile;
  const gamesToDisplay = importDefault(11880)(profile).gamesToDisplay;
  let tmp4 = null;
  if (null != gamesToDisplay) {
    tmp4 = null;
    if (0 !== gamesToDisplay.length) {
      const obj = { profile, gamesToDisplay, lastGameToDisplay: tmp2, remainingGames: tmp3 };
      tmp4 = callback(GuildProfileGamesContent, obj);
    }
  }
  return tmp4;
};
export const useStyles = _createForOfIteratorHelperLoose;
