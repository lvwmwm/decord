// Module ID: 10460
// Function ID: 10461
// Name: GameProfileSimilarGames
// Dependencies: [19, 17, 10316, 21, 575, 5306, 10461, 10286, 10281, 1113, 10321, 10384, 10383, 10403, 10464, 1496, 7888, 10332, 2]
// Exports: default

// Module 10460 (GameProfileSimilarGames)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1496 */;
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 10281 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 10286 */;
import GameProfileConstants from "GameProfileConstants" /* 10316 */;
import GameProfileHorizontalScrollViewDefault from "GameProfileHorizontalScrollView" /* 10332 */;
import GameProfileSectionDefault from "GameProfileSection" /* 10383 */;
import GameProfileSkeleton from "GameProfileSkeleton" /* 10384 */;
import GameProfileSkeletonCardRowDefault from "GameProfileSkeletonCardRow" /* 10403 */;
import useSimilarGamesDefault from "useSimilarGames" /* 10464 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles_mod from "createStyles" /* 5306 */;
import size_mod from "module_2" /* 2 */;

let importDefault;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
function Spacer() {
  return <hasOwnProperty style={closure_11().spacer} />;
}
function ListPadding() {
  return <hasOwnProperty style={closure_11().listPadding} />;
}
({ Pressable: closure_4, View: hasOwnProperty } = react_native);
let closure_6 = GameProfileConstants.MOBILE_GAME_PROFILE_MAX_WIDTH;
const jsx = Fragment.jsx;
const PX_12 = nativeDefault.space.PX_12;
const PX_16 = nativeDefault.space.PX_16;
const PX_122 = nativeDefault.space.PX_12;
let createStyles = createStyles_mod;
let obj = { container: obj2, header: obj3, card: obj4, spacer: { width: PX_12 }, listPadding: { width: PX_16 }, coverArtContainer: obj5, coverArt: { width: "100%", height: "100%" }, skeletonCards: obj6, skeletonArtwork: obj7 };
obj2 = { gap: nativeDefault.space.PX_8, marginHorizontal: -1 * nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj4 = { gap: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.sm };
const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
obj5 = { borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj6 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj7 = { borderRadius: nativeDefault.radii.sm };
const merged1 = Object.assign(nativeDefault.shadows.SHADOW_LOW);
let closure_11 = createStyles(obj);
let closure_14 = react.memo(function SimilarGameCard(game) {
  let items2;
  game = game.game;
  const trackAction = game.trackAction;
  const cardWidth = game.cardWidth;
  let shouldOpenGameProfile;
  let tmp = closure_11();
  let obj = { gameId: game.id, source: game(shouldOpenGameProfile[7]).GameProfileSources.SimilarGames };
  const tmp2 = trackAction(shouldOpenGameProfile[6]);
  const tmp2Result = tmp2(obj);
  shouldOpenGameProfile = tmp2Result.shouldOpenGameProfile;
  const gameId = tmp2Result.gameId;
  const items = [game.id, trackAction, shouldOpenGameProfile, gameId];
  const items1 = [tmp.card, { width: cardWidth }];
  const intl = game(shouldOpenGameProfile[9]).intl;
  let obj3 = { gameName: game.name };
  ({ game, size: game(shouldOpenGameProfile[10]).GameCoverArtSize.SMALL, imageSize: 256, style: items2, accessible: false, loadingPlaceholder: null });
  let tmp4 = trackAction(shouldOpenGameProfile[10]);
  items2 = [tmp.coverArtContainer, ];
  size = { width: cardWidth, height: cardWidth / 0.75 };
  items2[1] = size;
  const GameProfileSkeletonContainer = game(shouldOpenGameProfile[11]).GameProfileSkeletonContainer;
  return <closure_4 style={items1} onPress={gameId.useCallback(() => {
    let obj3;
    const obj = { similarGameId: game.id };
    trackAction(GameProfileAnalyticUtils.GameProfileTrackActionActions.ClickSimilarGame, obj);
    let tmp4 = shouldOpenGameProfile;
    if (tmp4) {
      tmp4 = null != gameId;
    }
    if (tmp4) {
      const obj2 = { gameId, gameProfileModalChecks: obj3, source: GameProfileAnalyticUtils.GameProfileSources.SimilarGames };
      obj3 = { shouldOpenGameProfile: true, gameId };
      const openGameProfileModal = GameProfileActionCreatorsDefault.openGameProfileModal;
      GameProfileActionCreatorsDefault;
      openGameProfileModal(obj2);
    }
  }, items)} accessibilityRole="button" accessibilityLabel={intl.formatToPlainString(game(shouldOpenGameProfile[9]).t["8QLQB+"], obj3)}>{null}</closure_4>;
});
let closure_15 = react.memo(function GameProfileSimilarGameSkeleton(cardWidth) {
  cardWidth = cardWidth.cardWidth;
  const animationDelayMs = cardWidth.animationDelayMs;
  const tmp = closure_11();
  const GameProfileSkeletonContainer = GameProfileSkeleton.GameProfileSkeletonContainer;
  const items = [tmp.skeletonArtwork, ];
  size = { width: cardWidth, height: cardWidth / 0.75 };
  items[1] = size;
  return <GameProfileSkeletonContainer animationDelayMs={animationDelayMs} style={{ width: cardWidth }}>{null}</GameProfileSkeletonContainer>;
});
let closure_16 = react.memo(function GameProfileSimilarGamesSkeleton(cardWidth) {
  cardWidth = cardWidth.cardWidth;
  const tmp = closure_11();
  const GameProfileSectionSkeleton = cardWidth(10383).GameProfileSectionSkeleton;
  ({ contentContainerStyle: tmp.skeletonCards, children: Array.from({ length: 4 }, (arg0, arg1) => <closure_15 key={arg1} animationDelayMs={arg1 * GameProfileSkeleton.SKELETON_CARD_ANIMATION_DELAY_MS} cardWidth={cardWidth} />) });
  GameProfileSkeletonCardRowDefault;
  return <GameProfileSectionSkeleton style={tmp.container} headerStyle={tmp.header} showViewAllSkeleton={false} skeletonTitleWidth={124}>{null}</GameProfileSectionSkeleton>;
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileSimilarGames.tsx");

export default function GameProfileSimilarGames(trackAction) {
  let cardWidth;
  let isFetching;
  let similarGames;
  let tmp7;
  trackAction = trackAction.trackAction;
  const gameId = trackAction.gameId;
  const tmp = closure_11();
  ({ similarGames, isFetching } = useSimilarGamesDefault(gameId));
  useSimilarGamesDefault(gameId);
  const result = (Math.min(useWindowDimensionsDefault().width, closure_6) - 2 * PX_16 - 2 * PX_12 - PX_122) / 3;
  importDefault = result;
  if (isFetching) {
    tmp7 = <closure_16 cardWidth={result} />;
  } else {
    tmp7 = null;
    if (0 !== similarGames.length) {
      ({ container: obj2.style, header: obj2.headerStyle } = tmp);
      GameProfileSectionDefault;
      const intl = trackAction(1113).intl;
      ({
        horizontal: true,
        renderScrollComponent: GameProfileHorizontalScrollViewDefault,
        data: similarGames,
        renderItem(game) {
              return <closure_14 game={arg0.item} trackAction={trackAction} cardWidth={cardWidth} />;
            },
        showsHorizontalScrollIndicator: false,
        ItemSeparatorComponent: Spacer,
        ListHeaderComponent: ListPadding,
        ListFooterComponent: ListPadding,
        decelerationRate: "fast",
        snapToInterval: result + tmp5
      });
      const FlashList = trackAction(7888).FlashList;
      tmp7 = <tmp2Result style={null} headerStyle={null} title={intl.string(trackAction(1113).t["6rLyQB"])}>{null}</tmp2Result>;
    }
  }
  return tmp7;
};
