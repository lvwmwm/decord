// Module ID: 9214
// Function ID: 9215
// Name: GuildProfileGames
// Dependencies: [19, 17, 21, 4836, 576, 8128, 8139, 9215, 4832, 9219, 4528, 4800, 9220, 1981, 5435, 2]
// Exports: default

// Module 9214 (GuildProfileGames)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import asyncRequire from "asyncRequire" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import Text_Text from "Text/Text" /* 4832 */;
import useOpenGameProfileModalDefault from "useOpenGameProfileModal" /* 8128 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8139 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let rect;
let tmp;
const GameIconDefault = tmp(9215);
function ClickableGameIcon(game) {
  let activityLevel;
  let onPress;
  let style;
  game = game.game;
  const onPressFallback = game.onPressFallback;
  ({ style, activityLevel } = game);
  let tmp = importDefault;
  const tmp2 = dependencyMap;
  const obj = { gameId: game.id, source: GameProfileAnalyticUtils.GameProfileSources.GuildProfileGames, trackEntryPointImpression: true };
  const tmp3 = useOpenGameProfileModalDefault;
  const tmp3Result = tmp3(obj);
  let closure_2 = tmp3Result;
  let closure_3 = tmp5;
  const items = [null != tmp3Result, tmp3Result, onPressFallback, game];
  if (null != tmp3Result) {
    onPress = react.useCallback(() => {
      const tmp = closure_3;
      if (tmp) {
        closure_2();
      } else if (onPressFallback != null) {
        tmp2(game);
      }
    }, items);
  }
  return hasOwnProperty(GameIconDefault, { style, game, activityLevel, onPress });
}
function FavoriteGame(game) {
  let items;
  game = game.game;
  const activityLevel = game.activityLevel;
  const obj = { style: styles().favoriteGame, children: items };
  items = [hasOwnProperty(ClickableGameIcon, { game, activityLevel }), ];
  const obj2 = { variant: "text-sm/medium", color: "text-subtle", children: game.name };
  items[1] = hasOwnProperty(Text_Text.Text, obj2);
  return metroRequire(View, obj);
}
let react = react_mod;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { container: { display: "flex", flexDirection: "row", gap: 8 }, favoriteGame: { display: "flex", flexDirection: "row", alignItems: "center", gap: 8 }, lastItem: { position: "relative", width: 32, height: 32 }, lastItemOverlay: rect, lastItemImage: { position: "absolute" }, lastItemText: { display: "flex", justifyContent: "center", alignItems: "center", width: 32, height: 32 } };
rect = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM, borderRadius: nativeDefault.radii.xs };
const styles = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_profile/native/components/GuildProfileGames.tsx");

export default function GuildProfileGames(profile) {
  let closure_3;
  let gamesToDisplay;
  let items1;
  let items2;
  let lastGameToDisplay;
  let obj3;
  let tmp8;
  profile = profile.profile;
  lastGameToDisplay = undefined;
  let remainingGames;
  let closure_5;
  let onPressFallback;
  let tmp2 = lastGameToDisplay(remainingGames[9])(profile);
  ({ gamesToDisplay, lastGameToDisplay } = tmp2);
  const tmp = remainingGames;
  remainingGames = tmp2.remainingGames;
  const tmp3 = styles();
  react = tmp3;
  const gameActivity = profile.gameActivity;
  let iconURL;
  if (lastGameToDisplay != null) {
    iconURL = lastGameToDisplay.getIconURL(24);
  }
  closure_5 = tmp5;
  let items = [lastGameToDisplay, tmp5, remainingGames, gameActivity, tmp3];
  const memo = react.useMemo(() => {
    let Text;
    let items;
    let obj6;
    let tmp2 = null;
    if (null != lastGameToDisplay) {
      let tmp4 = null;
      if (hasOwnProperty) {
        let tmp8;
        if (0 === remainingGames.length) {
          const obj = { game: lastGameToDisplay, activityLevel: gameActivity[lastGameToDisplay.id] };
          tmp8 = hasOwnProperty(ClickableGameIcon, obj);
        } else {
          const obj2 = { style: closure_3.lastItem, children: items };
          const obj3 = { style: closure_3.lastItemImage, game: lastGameToDisplay, activityLevel: gameActivity[lastGameToDisplay.id] };
          items = [hasOwnProperty(GameIconDefault, obj3), , ];
          const obj4 = { style: closure_3.lastItemOverlay };
          items[1] = hasOwnProperty(View, obj4);
          const obj5 = { style: closure_3.lastItemText, children: hasOwnProperty(Text, obj6) };
          const _HermesInternal = HermesInternal;
          obj6 = { variant: "text-xs/medium", color: "text-overlay-light", children: "+" + arr.length };
          Text = Text_Text.Text;
          items[2] = hasOwnProperty(View, obj5);
          tmp8 = metroRequire(View, obj2);
        }
        tmp4 = tmp8;
      }
      tmp2 = tmp4;
    }
    return tmp2;
  }, items);
  onPressFallback = react.useCallback((content) => {
    const obj = lastGameToDisplay(remainingGames[10]);
    const obj2 = { key: "profile-game-" + content.id, content: content.name };
    obj.open(obj2);
  }, []);
  [][0] = profile;
  let tmp9 = null;
  const tmp7 = remainingGames.length > 0;
  if (null != gamesToDisplay) {
    tmp9 = null;
    if (0 !== gamesToDisplay.length) {
      let tmp16Result;
      if (1 === gamesToDisplay.length) {
        let obj2 = { style: tmp3.container, children: closure_5(FavoriteGame, obj3) };
        obj3 = { game: gamesToDisplay[0], activityLevel: gameActivity[gamesToDisplay[0].id] };
        tmp16Result = closure_5(gameActivity, obj2);
      } else if (tmp7) {
        let obj4 = { style: tmp3.container, onPress: tmp8, children: items1 };
        const PressableHighlight = profile(tmp[14]).PressableHighlight;
        items1 = [
          gamesToDisplay.map((game) => {
                  const obj = { game, activityLevel: gameActivity[game.id] };
                  return hasOwnProperty(GameIconDefault, obj, game.id);
                }),
          memo
        ];
        tmp16Result = tmp16(PressableHighlight, obj4);
      } else {
        let obj = { style: tmp3.container, children: items2 };
        items2 = [
          gamesToDisplay.map((game) => {
                  const obj = { game, activityLevel: gameActivity[game.id], onPressFallback };
                  return hasOwnProperty(ClickableGameIcon, obj, game.id);
                }),
          memo
        ];
        tmp16Result = tmp16(gameActivity, obj);
      }
      tmp9 = tmp16Result;
    }
  }
  return tmp9;
};
export const useStyles = styles;
