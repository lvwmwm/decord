// Module ID: 8343
// Function ID: 8344
// Name: GameProfileSimilarGames
// Dependencies: [32, 19, 17, 8167, 8223, 21, 576, 4836, 8129, 8139, 8133, 1115, 8195, 4832, 8194, 8213, 8344, 1479, 8179, 8180, 2]
// Exports: default

// Module 8343 (GameProfileSimilarGames)
import nativeDefault from "native" /* 576 */;
import intl2 from "intl" /* 1115 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1479 */;
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 8133 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8139 */;
import GameProfileConstants from "GameProfileConstants" /* 8167 */;
import defaultMVCPConfig from "defaultMVCPConfig" /* 8179 */;
import GameProfileHorizontalScrollViewDefault from "GameProfileHorizontalScrollView" /* 8180 */;
import GameProfileSectionDefault from "GameProfileSection" /* 8194 */;
import GameProfileSkeleton from "GameProfileSkeleton" /* 8195 */;
import GameProfileSkeletonCardRowDefault from "GameProfileSkeletonCardRow" /* 8213 */;
import SimilarGamesConstants from "SimilarGamesConstants" /* 8223 */;
import useSimilarGamesDefault from "useSimilarGames" /* 8344 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const GameProfileSkeletonDefault = GameProfileSkeleton;
let importDefault;

let c10;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let unpackModuleId;
function Spacer() {
  const obj = { style: closure_15().spacer };
  return authStore(metroImportDefault, obj);
}
function ListPadding() {
  const obj = { style: closure_15().listPadding };
  return authStore(metroImportDefault, obj);
}
let _slicedToArray = _slicedToArray_mod;
({ Image: hasOwnProperty, Pressable: metroRequire, View: metroImportDefault } = react_native);
let closure_8 = GameProfileConstants.MOBILE_GAME_PROFILE_MAX_WIDTH;
const set = SimilarGamesConstants.SIMILAR_GAMES_BLOCKED_GAME_IDS;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
const PX_12 = nativeDefault.space.PX_12;
const PX_16 = nativeDefault.space.PX_16;
const PX_122 = nativeDefault.space.PX_12;
let createStyles = createStyles_mod;
let obj = { container: obj2, header: obj3, card: obj4, spacer: { width: PX_12 }, listPadding: { width: PX_16 }, coverArtContainer: obj5, coverArt: { width: "100%", height: "100%" }, coverArtPlaceholder: { position: "absolute", top: 0, right: 0, bottom: 0, left: 0 }, coverArtFallback: obj6, skeletonCards: obj7, skeletonArtwork: obj8 };
obj2 = { gap: nativeDefault.space.PX_8, marginHorizontal: -1 * nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj4 = { gap: nativeDefault.space.PX_4 };
obj5 = { borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj6 = { borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, justifyContent: "center", alignItems: "center", padding: nativeDefault.space.PX_8 };
obj7 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj8 = { borderRadius: nativeDefault.radii.sm };
let closure_15 = createStyles(obj);
let closure_18 = react.memo((game) => {
  let closure_3;
  let first;
  let intl;
  let items2;
  let items3;
  let items4;
  let items5;
  let obj10;
  let obj3;
  let obj6;
  let obj8;
  let tmp13Result1;
  game = game.game;
  const trackAction = game.trackAction;
  const cardWidth = game.cardWidth;
  _slicedToArray = undefined;
  let shouldOpenGameProfile;
  let tmp = closure_15();
  const result = 1.34 * cardWidth;
  size = { width: cardWidth, height: result };
  const coverURL = game.getCoverURL(Math.ceil(result));
  [first, _slicedToArray] = shouldOpenGameProfile.useState(undefined);
  let obj = { gameId: game.id, source: game(coverURL[9]).GameProfileSources.SimilarGames };
  const tmp8 = trackAction(coverURL[8]);
  const tmp8Result = tmp8(obj);
  shouldOpenGameProfile = tmp8Result.shouldOpenGameProfile;
  const gameId = tmp8Result.gameId;
  const items = [game.id, trackAction, shouldOpenGameProfile, gameId];
  const items1 = [coverURL];
  const callback = shouldOpenGameProfile.useCallback(() => {
    let obj2;
    trackAction(GameProfileAnalyticUtils.GameProfileTrackActionActions.ClickSimilarGame, game.id);
    let tmp4 = shouldOpenGameProfile;
    if (tmp4) {
      tmp4 = null != gameId;
    }
    if (tmp4) {
      const obj = { gameId, gameProfileModalChecks: obj2, source: GameProfileAnalyticUtils.GameProfileSources.SimilarGames };
      obj2 = { shouldOpenGameProfile: true, gameId };
      const openGameProfileModal = GameProfileActionCreatorsDefault.openGameProfileModal;
      GameProfileActionCreatorsDefault;
      openGameProfileModal(obj);
    }
  }, items);
  let obj2 = { style: items2, onPress: callback, accessibilityRole: "button", accessibilityLabel: intl.formatToPlainString(game(coverURL[11]).t["8QLQB+"], obj3), children: tmp13Result1 };
  items2 = [tmp.card, { width: cardWidth }];
  const callback1 = shouldOpenGameProfile.useCallback(() => {
    closure_3(coverURL);
  }, items1);
  intl = game(coverURL[11]).intl;
  obj3 = { gameName: game.name };
  const tmp14 = closure_6;
  const tmp6 = trackAction;
  if (null != coverURL) {
    const obj4 = { style: items3, children: items4 };
    items3 = [tmp.coverArtContainer, size];
    let tmp13Result = null != coverURL;
    const tmp17 = closure_11;
    const tmp18 = closure_7;
    if (tmp13Result) {
      tmp13Result = first !== coverURL;
    }
    if (tmp13Result) {
      const obj5 = { style: tmp.coverArtPlaceholder, children: closure_10(tmp6(coverURL[12]), obj6) };
      const GameProfileSkeletonContainer = tmp9(tmp7[12]).GameProfileSkeletonContainer;
      obj6 = { style: tmp.coverArt };
      tmp13Result = tmp13(GameProfileSkeletonContainer, obj5);
    }
    items4 = [tmp13Result, ];
    const obj7 = { source: obj8, style: tmp.coverArt, onLoadEnd: callback1 };
    obj8 = { uri: coverURL };
    items4[1] = closure_10(gameId, obj7);
    tmp13Result1 = tmp17(tmp18, obj4);
  } else {
    const obj9 = { style: items5, children: closure_10(game(coverURL[13]).Text, obj10) };
    items5 = [tmp.coverArtFallback, size];
    obj10 = { variant: "text-xs/medium", color: "text-overlay-light", lineClamp: 3, children: game.name };
    tmp13Result1 = tmp13(closure_7, obj9);
  }
  return closure_10(tmp14, obj2);
});
let closure_19 = react.memo((cardWidth) => {
  let items;
  let obj2;
  cardWidth = cardWidth.cardWidth;
  const animationDelayMs = cardWidth.animationDelayMs;
  const obj = { animationDelayMs, style: { width: cardWidth }, children: authStore(GameProfileSkeletonDefault, obj2) };
  const tmp = closure_15();
  const GameProfileSkeletonContainer = GameProfileSkeleton.GameProfileSkeletonContainer;
  obj2 = { style: items };
  items = [tmp.skeletonArtwork, ];
  size = { width: cardWidth, height: 1.34 * cardWidth };
  items[1] = size;
  return authStore(GameProfileSkeletonContainer, obj);
});
let closure_20 = react.memo((cardWidth) => {
  let obj2;
  let tmp2;
  cardWidth = cardWidth.cardWidth;
  const tmp = closure_15();
  let obj = { style: tmp.container, headerStyle: tmp.header, showViewAllSkeleton: false, skeletonTitleWidth: 124, children: closure_10(tmp2, obj2) };
  const GameProfileSectionSkeleton = cardWidth(8194).GameProfileSectionSkeleton;
  obj2 = {
    contentContainerStyle: tmp.skeletonCards,
    children: Array.from({ length: 4 }, (arg0, arg1) => {
      const obj = { animationDelayMs: arg1 * GameProfileSkeleton.SKELETON_CARD_ANIMATION_DELAY_MS, cardWidth };
      return authStore(closure_19, obj, arg1);
    })
  };
  tmp2 = GameProfileSkeletonCardRowDefault;
  return closure_10(GameProfileSectionSkeleton, obj);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileSimilarGames.tsx");

export default function GameProfileSimilarGames(arg0) {
  let FlashList;
  let cardWidth;
  let gameId;
  let intl;
  let isFetching;
  let obj5;
  let similarGames;
  let trackAction;
  ({ gameId, trackAction: require } = arg0);
  const tmp = closure_15();
  ({ similarGames, isFetching } = useSimilarGamesDefault(gameId));
  useSimilarGamesDefault(gameId);
  const result = (Math.min(useWindowDimensionsDefault().width, closure_8) - 2 * PX_16 - 2 * PX_12 - PX_122) / 3;
  importDefault = result;
  let tmp7 = null;
  const tmp5 = PX_12;
  if (!set.has(gameId)) {
    let tmp8;
    if (isFetching) {
      let obj = { cardWidth: result };
      tmp8 = closure_10(closure_20, obj);
    } else {
      tmp8 = null;
      if (0 !== similarGames.length) {
        ({ container: obj2.style, header: obj2.headerStyle } = tmp);
        const obj3 = { style: null, headerStyle: null, title: intl.string(intl2.t["6rLyQB"]), children: closure_10(FlashList, obj5) };
        const tmp2Result = GameProfileSectionDefault;
        intl = intl2.intl;
        obj5 = {
          horizontal: true,
          renderScrollComponent: GameProfileHorizontalScrollViewDefault,
          data: similarGames,
          renderItem(game) {
                  const obj = { game: game.item, trackAction: require, cardWidth };
                  return authStore(closure_18, obj);
                },
          showsHorizontalScrollIndicator: false,
          ItemSeparatorComponent: Spacer,
          ListHeaderComponent: ListPadding,
          ListFooterComponent: ListPadding,
          decelerationRate: "fast",
          snapToInterval: result + tmp5
        };
        FlashList = defaultMVCPConfig.FlashList;
        tmp8 = closure_10(tmp2Result, obj3);
      }
    }
    tmp7 = tmp8;
  }
  return tmp7;
};
