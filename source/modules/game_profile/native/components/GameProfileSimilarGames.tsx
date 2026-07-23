// Module ID: 11851
// Function ID: 91826
// Name: Spacer
// Dependencies: [31, 27, 33, 689, 4130, 8589, 8600, 8594, 1212, 4126, 8626, 11852, 1450, 7879, 2]
// Exports: default

// Module 11851 (Spacer)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
const require = arg1;
function Spacer() {
  const style = { width: PX_12 };
  return callback(closure_6, { style });
}
function ListPadding() {
  let obj = {};
  obj = { width: importDefault(689).space.PX_16 };
  obj.style = obj;
  return callback(closure_6, obj);
}
function SimilarGameCard(game) {
  game = game.game;
  const trackAction = game.trackAction;
  const cardWidth = game.cardWidth;
  const tmp = _createForOfIteratorHelperLoose();
  const result = 1.34 * cardWidth;
  const coverURL = game.getCoverURL(Math.ceil(result));
  let obj = { width: cardWidth, height: result };
  obj = { gameId: game.id, source: game(shouldOpenGameProfile[6]).GameProfileSources.SimilarGames };
  const tmp4Result = trackAction(shouldOpenGameProfile[5])(obj);
  shouldOpenGameProfile = tmp4Result.shouldOpenGameProfile;
  const gameId = tmp4Result.gameId;
  const items = [game.id, trackAction, shouldOpenGameProfile, gameId];
  obj = {
    style: items1,
    onPress: gameId.useCallback(() => {
      trackAction(game(shouldOpenGameProfile[6]).GameProfileTrackActionActions.ClickSimilarGame, game.id);
      let tmp2 = shouldOpenGameProfile;
      if (shouldOpenGameProfile) {
        tmp2 = null != gameId;
      }
      if (tmp2) {
        let obj = trackAction(shouldOpenGameProfile[7]);
        obj = { gameId };
        obj = { shouldOpenGameProfile: true, gameId };
        obj.gameProfileModalChecks = obj;
        obj.source = game(shouldOpenGameProfile[6]).GameProfileSources.SimilarGames;
        obj.openGameProfileModal(obj);
      }
    }, items),
    accessibilityRole: "button"
  };
  items1 = [tmp.card, { width: cardWidth }];
  const intl = game(shouldOpenGameProfile[8]).intl;
  obj.accessibilityLabel = intl.formatToPlainString(game(shouldOpenGameProfile[8]).t["8QLQB+"], { gameName: game.name });
  if (null != coverURL) {
    const obj2 = {};
    const obj3 = { uri: coverURL };
    obj2.source = obj3;
    const items2 = [tmp.coverArt, obj];
    obj2.style = items2;
    let tmp13 = callback(closure_4, obj2);
  } else {
    const obj4 = {};
    const items3 = [tmp.coverArtFallback, obj];
    obj4.style = items3;
    const obj5 = { variant: "text-xs/medium", color: "text-overlay-light", lineClamp: 3, children: game.name };
    obj4.children = callback(game(shouldOpenGameProfile[9]).Text, obj5);
    tmp13 = callback(closure_6, obj4);
  }
  obj.children = tmp13;
  return callback(closure_5, obj);
}
function LoadingCard(cardWidth) {
  cardWidth = cardWidth.cardWidth;
  let obj = { style: { width: cardWidth } };
  obj = {};
  const items = [_createForOfIteratorHelperLoose().loadingArt, ];
  obj = { width: cardWidth, height: 1.34 * cardWidth };
  items[1] = obj;
  obj.style = items;
  obj.children = callback(closure_6, obj);
  return callback(closure_6, obj);
}
({ Image: closure_4, Pressable: closure_5, View: closure_6 } = get_ActivityIndicator);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let PX_12 = require("_createForOfIteratorHelperLoose").space.PX_12;
const PX_16 = require("_createForOfIteratorHelperLoose").space.PX_16;
PX_12 = require("_createForOfIteratorHelperLoose").space.PX_12;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { gap: require("_createForOfIteratorHelperLoose").space.PX_8, marginHorizontal: -1 * require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.header = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
let obj1 = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.card = { gap: require("_createForOfIteratorHelperLoose").space.PX_4 };
let obj2 = { gap: require("_createForOfIteratorHelperLoose").space.PX_4 };
_createForOfIteratorHelperLoose.coverArt = { borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
let obj3 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
_createForOfIteratorHelperLoose.coverArtFallback = { borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, justifyContent: "center", alignItems: "center", padding: require("_createForOfIteratorHelperLoose").space.PX_8 };
let obj4 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, justifyContent: "center", alignItems: "center", padding: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.loadingArt = { borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj5 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
let result = require("jsxProd").fileFinishedImporting("modules/game_profile/native/components/GameProfileSimilarGames.tsx");

export default function GameProfileSimilarGames(trackAction) {
  let dense;
  let enabled;
  trackAction = trackAction.trackAction;
  let importDefault;
  const tmp = _createForOfIteratorHelperLoose();
  const GameProfileSimilarGamesMobileExperiment = trackAction(8626).GameProfileSimilarGamesMobileExperiment;
  const config = GameProfileSimilarGamesMobileExperiment.useConfig({ location: "GameProfileSimilarGames" });
  ({ enabled, dense } = config);
  const tmp3 = importDefault(11852)(trackAction.gameId, enabled);
  const similarGames = tmp3.similarGames;
  let num = 3;
  if (dense) {
    num = 4;
  }
  const result = (importDefault(1450)().width - 2 * PX_16 - (num - 1) * PX_12 - PX_12) / num;
  importDefault = result;
  {}.length = num;
  if (tmp3.isFetching) {
    let obj = { style: tmp.container };
    obj = { style: tmp.header };
    obj = { variant: "heading-sm/semibold", color: "mobile-text-heading-primary" };
    const intl = trackAction(1212).intl;
    obj.children = intl.string(trackAction(1212).t["6rLyQB"]);
    obj.children = callback(trackAction(4126).Text, obj);
    const items = [callback(closure_6, obj), ];
    const obj1 = {
      horizontal: true,
      data: tmp5,
      renderItem() {
          return outer1_7(outer1_16, { cardWidth: c1 });
        },
      showsHorizontalScrollIndicator: false,
      ItemSeparatorComponent: Spacer,
      ListHeaderComponent: ListPadding,
      ListFooterComponent: ListPadding
    };
    items[1] = callback(trackAction(7879).FlashList, obj1);
    obj.children = items;
    let tmp6 = callback2(closure_6, obj);
  } else {
    tmp6 = null;
    if (0 !== similarGames.length) {
      const obj2 = { style: tmp.container };
      const obj3 = { style: tmp.header };
      const obj4 = { variant: "heading-sm/semibold", color: "mobile-text-heading-primary" };
      const intl2 = trackAction(1212).intl;
      obj4.children = intl2.string(trackAction(1212).t["6rLyQB"]);
      obj3.children = callback(trackAction(4126).Text, obj4);
      const items1 = [callback(closure_6, obj3), ];
      const obj5 = {
        horizontal: true,
        data: similarGames,
        renderItem(game) {
              return outer1_7(outer1_15, { game: game.item, trackAction, cardWidth: c1 });
            },
        showsHorizontalScrollIndicator: false,
        ItemSeparatorComponent: Spacer,
        ListHeaderComponent: ListPadding,
        ListFooterComponent: ListPadding,
        decelerationRate: "fast",
        snapToInterval: result + PX_12
      };
      items1[1] = callback(trackAction(7879).FlashList, obj5);
      obj2.children = items1;
      tmp6 = callback2(closure_6, obj2);
    }
  }
  return tmp6;
};
