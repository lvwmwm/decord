// Module ID: 8580
// Function ID: 68146
// Name: ClickableGameIcon
// Dependencies: []
// Exports: default

// Module 8580 (ClickableGameIcon)
function ClickableGameIcon(game) {
  let activityLevel;
  let enabled;
  let onPressFallback;
  let style;
  game = game.game;
  const arg1 = game;
  ({ enabled, onPressFallback } = game);
  const importDefault = onPressFallback;
  let React;
  ({ style, activityLevel } = game);
  let obj = { gameId: game.id, source: arg1(dependencyMap[6]).GameProfileSources.GuildProfileGames, trackEntryPointImpression: enabled };
  const tmpResult = importDefault(dependencyMap[5])(obj);
  const dependencyMap = tmpResult;
  if (enabled) {
    enabled = null != tmpResult;
  }
  React = enabled;
  const items = [enabled, tmpResult, onPressFallback, game];
  if (enabled) {
    const callback = React.useCallback(() => {
      if (enabled) {
        tmpResult();
      } else if (null != onPressFallback) {
        onPressFallback(game);
      }
    }, items);
  }
  obj = { style, game, activityLevel, onPress: callback };
  return callback(importDefault(dependencyMap[7]), obj);
}
function FavoriteGame(game) {
  let activityLevel;
  let clickable;
  game = game.game;
  ({ activityLevel, clickable } = game);
  let obj = { style: styles().favoriteGame };
  const items = [callback(ClickableGameIcon, { game, activityLevel, enabled: clickable }), ];
  obj = { cachedAt: true, edpbxy: true, children: game.name };
  items[1] = callback(arg1(dependencyMap[8]).Text, obj);
  obj.children = items;
  return callback2(View, obj);
}
function GuildProfileGamesContent(profile) {
  let gamesToDisplay;
  let lastGameToDisplay;
  profile = profile.profile;
  const arg1 = profile;
  ({ gamesToDisplay, lastGameToDisplay } = profile);
  const importDefault = lastGameToDisplay;
  const remainingGames = profile.remainingGames;
  const dependencyMap = remainingGames;
  let tmp3;
  let styles;
  const tmp = styles();
  const React = tmp;
  const gameActivity = profile.gameActivity;
  const View = gameActivity;
  let obj = arg1(dependencyMap[10]);
  const enabled = obj.useGuildProfileGameProfilesExperiment({ location: "guild_profile_games" }).enabled;
  let iconURL;
  if (null != lastGameToDisplay) {
    iconURL = lastGameToDisplay.getIconURL(24);
  }
  tmp3 = null != iconURL;
  const items = [lastGameToDisplay, tmp3, remainingGames, gameActivity, tmp, enabled];
  const memo = React.useMemo(() => {
    let tmp = null;
    if (null != lastGameToDisplay) {
      if (!null) {
        tmp = null;
      } else if (0 === remainingGames.length) {
        let obj = { game: lastGameToDisplay, activityLevel: gameActivity[closure_1.id], enabled };
        let tmp10 = enabled(closure_8, obj);
      } else {
        obj = { style: tmp.lastItem };
        obj = { style: tmp.lastItemImage, game: lastGameToDisplay, activityLevel: gameActivity[closure_1.id] };
        const items = [enabled(lastGameToDisplay(remainingGames[7]), obj), , ];
        const obj1 = { style: tmp.lastItemOverlay };
        items[1] = enabled(gameActivity, obj1);
        const obj2 = { style: tmp.lastItemText };
        const obj3 = {};
        const _HermesInternal = HermesInternal;
        obj3.children = "+" + remainingGames.length;
        obj2.children = enabled(profile(remainingGames[8]).Text, obj3);
        items[2] = enabled(gameActivity, obj2);
        obj.children = items;
        tmp10 = tmp3(gameActivity, obj);
      }
    }
    return tmp;
  }, items);
  styles = React.useCallback((content) => {
    let obj = lastGameToDisplay(remainingGames[11]);
    obj = { key: "profile-game-" + content.id, content: content.name };
    obj.open(obj);
  }, []);
  [][0] = profile;
  if (1 === gamesToDisplay.length) {
    obj = { style: tmp.container };
    obj = { game: gamesToDisplay[0], activityLevel: gameActivity[gamesToDisplay[0].id], clickable: enabled };
    obj.children = enabled(FavoriteGame, obj);
    let tmp15Result = enabled(View, obj);
  } else if (tmp5) {
    const obj1 = { style: tmp.container, onPress: tmp6 };
    const items1 = [gamesToDisplay.map((game) => enabled(lastGameToDisplay(remainingGames[7]), { game, activityLevel: gameActivity[game.id] }, game.id)), memo];
    obj1.children = items1;
    tmp15Result = tmp15(arg1(dependencyMap[15]).PressableHighlight, obj1);
  } else {
    const obj2 = { style: tmp.container };
    const items2 = [gamesToDisplay.map((game) => enabled(closure_8, { game, activityLevel: gameActivity[game.id], enabled, onPressFallback: closure_7 }, game.id)), memo];
    obj2.children = items2;
    tmp15Result = tmp15(View, obj2);
  }
  return tmp15Result;
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = { container: { "Bool(true)": 9126805527, "Bool(true)": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000273953900656662, "Bool(true)": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002040683002168536 }, favoriteGame: { 9223372036854775807: 8, -9223372036854775808: null, 0: "\u270A\u{1F3FF}", 9223372036854775807: true }, lastItem: { "Null": 711724901615082200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Null": 703831249369113300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Null": 426844242226160100000000000000000000000000000000000000000000 } };
obj = { left: "center", backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_SCRIM, "Bool(true)": null, "Bool(true)": 1, "Bool(true)": "Malaysia", borderRadius: importDefault(dependencyMap[4]).radii.xs };
obj.lastItemOverlay = obj;
obj.lastItemImage = { position: "absolute" };
obj.lastItemText = { usesClientMods: 1441161644, addScreenshotButtonLabel: -1500074894, bHa9kN: true, display: true, borderWidth: true };
const styles = obj.createStyles(obj);
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/guild_profile/native/components/GuildProfileGames.tsx");

export default function GuildProfileGames(profile) {
  profile = profile.profile;
  const gamesToDisplay = importDefault(dependencyMap[9])(profile).gamesToDisplay;
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
export const useStyles = styles;
