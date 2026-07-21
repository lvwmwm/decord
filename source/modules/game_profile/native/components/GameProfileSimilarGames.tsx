// Module ID: 11838
// Function ID: 91759
// Name: Spacer
// Dependencies: []
// Exports: default

// Module 11838 (Spacer)
function Spacer() {
  const style = { width: PX_12 };
  return callback(closure_6, { style });
}
function ListPadding() {
  let obj = {};
  obj = { width: importDefault(dependencyMap[3]).space.PX_16 };
  obj.style = obj;
  return callback(closure_6, obj);
}
function SimilarGameCard(game) {
  game = game.game;
  const arg1 = game;
  const trackAction = game.trackAction;
  const importDefault = trackAction;
  const cardWidth = game.cardWidth;
  const tmp = callback3();
  const result = 1.34 * cardWidth;
  const coverURL = game.getCoverURL(Math.ceil(result));
  let obj = { width: cardWidth, height: result };
  obj = { gameId: game.id, source: arg1(dependencyMap[6]).GameProfileSources.SimilarGames };
  const tmp4Result = importDefault(dependencyMap[5])(obj);
  const shouldOpenGameProfile = tmp4Result.shouldOpenGameProfile;
  const dependencyMap = shouldOpenGameProfile;
  const gameId = tmp4Result.gameId;
  const React = gameId;
  const items = [game.id, trackAction, shouldOpenGameProfile, gameId];
  obj = {
    style: items1,
    onPress: React.useCallback(() => {
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
  const items1 = [tmp.card, { width: cardWidth }];
  const intl = arg1(dependencyMap[8]).intl;
  obj.accessibilityLabel = intl.formatToPlainString(arg1(dependencyMap[8]).t.8QLQB+, { gameName: game.name });
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
    const obj5 = { <string:1643205302>: "flag", <string:1415816450>: "<string:2639347968>", <string:4283523744>: "<string:2622554113>", children: game.name };
    obj4.children = callback(arg1(dependencyMap[9]).Text, obj5);
    tmp13 = callback(closure_6, obj4);
  }
  obj.children = tmp13;
  return callback(closure_5, obj);
}
function LoadingCard(cardWidth) {
  cardWidth = cardWidth.cardWidth;
  let obj = { style: { width: cardWidth } };
  obj = {};
  const items = [callback3().loadingArt, ];
  obj = { width: cardWidth, height: 1.34 * cardWidth };
  items[1] = obj;
  obj.style = items;
  obj.children = callback(closure_6, obj);
  return callback(closure_6, obj);
}
let closure_3 = importAll(dependencyMap[0]);
({ Image: closure_4, Pressable: closure_5, View: closure_6 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[2]));
let PX_12 = importDefault(dependencyMap[3]).space.PX_12;
const PX_16 = importDefault(dependencyMap[3]).space.PX_16;
PX_12 = importDefault(dependencyMap[3]).space.PX_12;
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { gap: importDefault(dependencyMap[3]).space.PX_8, marginHorizontal: -1 * importDefault(dependencyMap[3]).space.PX_16 };
obj.container = obj;
const tmp3 = arg1(dependencyMap[2]);
obj.header = { paddingHorizontal: importDefault(dependencyMap[3]).space.PX_16 };
const obj1 = { paddingHorizontal: importDefault(dependencyMap[3]).space.PX_16 };
obj.card = { gap: importDefault(dependencyMap[3]).space.PX_4 };
const obj2 = { gap: importDefault(dependencyMap[3]).space.PX_4 };
obj.coverArt = { borderRadius: importDefault(dependencyMap[3]).radii.sm };
const obj3 = { borderRadius: importDefault(dependencyMap[3]).radii.sm };
obj.coverArtFallback = { borderRadius: importDefault(dependencyMap[3]).radii.sm, backgroundColor: importDefault(dependencyMap[3]).colors.BACKGROUND_SURFACE_HIGH, justifyContent: "center", alignItems: "center", padding: importDefault(dependencyMap[3]).space.PX_8 };
const obj4 = { borderRadius: importDefault(dependencyMap[3]).radii.sm, backgroundColor: importDefault(dependencyMap[3]).colors.BACKGROUND_SURFACE_HIGH, justifyContent: "center", alignItems: "center", padding: importDefault(dependencyMap[3]).space.PX_8 };
obj.loadingArt = { borderRadius: importDefault(dependencyMap[3]).radii.sm, backgroundColor: importDefault(dependencyMap[3]).colors.BACKGROUND_SURFACE_HIGH };
let closure_12 = obj.createStyles(obj);
const obj5 = { borderRadius: importDefault(dependencyMap[3]).radii.sm, backgroundColor: importDefault(dependencyMap[3]).colors.BACKGROUND_SURFACE_HIGH };
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/game_profile/native/components/GameProfileSimilarGames.tsx");

export default function GameProfileSimilarGames(trackAction) {
  let dense;
  let enabled;
  const arg1 = trackAction.trackAction;
  let importDefault;
  const tmp = callback3();
  const GameProfileSimilarGamesMobileExperiment = arg1(dependencyMap[10]).GameProfileSimilarGamesMobileExperiment;
  const config = GameProfileSimilarGamesMobileExperiment.useConfig({ location: "GameProfileSimilarGames" });
  ({ enabled, dense } = config);
  const tmp3 = importDefault(dependencyMap[11])(trackAction.gameId, enabled);
  const similarGames = tmp3.similarGames;
  let num = 3;
  if (dense) {
    num = 4;
  }
  const result = (importDefault(dependencyMap[12])().width - 2 * PX_16 - (num - 1) * PX_12 - PX_12) / num;
  importDefault = result;
  {}.length = num;
  if (tmp3.isFetching) {
    let obj = { style: tmp.container };
    obj = { style: tmp.header };
    obj = { hasMaxConnections: true, isBoostOnlySubscription: true };
    const intl = arg1(dependencyMap[8]).intl;
    obj.children = intl.string(arg1(dependencyMap[8]).t.6rLyQB);
    obj.children = callback(arg1(dependencyMap[9]).Text, obj);
    const items = [callback(closure_6, obj), ];
    const obj1 = {
      horizontal: true,
      data: tmp5,
      renderItem() {
          return callback(closure_16, { cardWidth: result });
        },
      showsHorizontalScrollIndicator: false,
      ItemSeparatorComponent: Spacer,
      ListHeaderComponent: ListPadding,
      ListFooterComponent: ListPadding
    };
    items[1] = callback(arg1(dependencyMap[13]).FlashList, obj1);
    obj.children = items;
    let tmp6 = callback2(closure_6, obj);
  } else {
    tmp6 = null;
    if (0 !== similarGames.length) {
      const obj2 = { style: tmp.container };
      const obj3 = { style: tmp.header };
      const obj4 = { hasMaxConnections: true, isBoostOnlySubscription: true };
      const intl2 = arg1(dependencyMap[8]).intl;
      obj4.children = intl2.string(arg1(dependencyMap[8]).t.6rLyQB);
      obj3.children = callback(arg1(dependencyMap[9]).Text, obj4);
      const items1 = [callback(closure_6, obj3), ];
      const obj5 = {
        horizontal: true,
        data: similarGames,
        renderItem(game) {
              return callback(closure_15, { game: game.item, trackAction, cardWidth: result });
            },
        showsHorizontalScrollIndicator: false,
        ItemSeparatorComponent: Spacer,
        ListHeaderComponent: ListPadding,
        ListFooterComponent: ListPadding,
        decelerationRate: "fast",
        snapToInterval: result + PX_12
      };
      items1[1] = callback(arg1(dependencyMap[13]).FlashList, obj5);
      obj2.children = items1;
      tmp6 = callback2(closure_6, obj2);
    }
  }
  return tmp6;
};
