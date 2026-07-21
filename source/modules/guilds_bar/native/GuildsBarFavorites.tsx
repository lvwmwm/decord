// Module ID: 14717
// Function ID: 111017
// Dependencies: []

// Module 14717
let closure_3 = importDefault(dependencyMap[1]);
const FAVORITES = arg1(dependencyMap[2]).FAVORITES;
const jsx = arg1(dependencyMap[3]).jsx;
let closure_6 = {
  onPress() {
    importDefault(dependencyMap[4])(FAVORITES);
  }
};
const importAllResult = importAll(dependencyMap[0]);
const memoResult = importAll(dependencyMap[0]).memo(function GuildsBarFavorites() {
  let badge;
  let badge2;
  let cutouts;
  let unread;
  let obj = arg1(dependencyMap[6]);
  const tmp = importDefault(dependencyMap[5])("GuildsBarFavorites");
  const guildsBarAnimatedWrapperStyles = obj.useGuildsBarAnimatedWrapperStyles();
  const isFavoritesGuildSelected = arg1(dependencyMap[7]).useIsFavoritesGuildSelected();
  const obj2 = arg1(dependencyMap[7]);
  const items = [closure_3];
  const stateFromStores = arg1(dependencyMap[8]).useStateFromStores(items, () => favoriteChannels.getFavoriteChannels());
  const obj3 = arg1(dependencyMap[8]);
  ({ badge, unread } = importDefault(dependencyMap[9])(stateFromStores));
  const tmp5 = importDefault(dependencyMap[9])(stateFromStores);
  ({ badge: badge2, cutouts } = importDefault(dependencyMap[10])({ mentionCount: badge }));
  obj = { selected: isFavoritesGuildSelected };
  let tmp9 = !tmp;
  const tmp6 = importDefault(dependencyMap[10])({ mentionCount: badge });
  const tmp7 = jsx;
  if (tmp9) {
    tmp9 = !isFavoritesGuildSelected;
  }
  obj.circle = tmp9;
  obj.unread = unread;
  obj.styles = guildsBarAnimatedWrapperStyles;
  obj.cutouts = cutouts;
  obj.overState = undefined;
  obj.config = closure_6;
  const intl = arg1(dependencyMap[11]).intl;
  obj.label = intl.string(arg1(dependencyMap[11]).t.wMWyci);
  obj.externalChildren = badge2;
  obj.expandedChildren = jsx(arg1(dependencyMap[12]).HomeDrawerFavoritesRowExpandedChildren, {});
  obj = {};
  const colors = importDefault(dependencyMap[14]).colors;
  obj.color = isFavoritesGuildSelected ? colors.WHITE : colors.MOBILE_GUILDBAR_ICON_DEFAULT;
  obj.children = jsx(arg1(dependencyMap[13]).StarIcon, obj);
  return tmp7(importDefault(dependencyMap[6]), obj);
});
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/guilds_bar/native/GuildsBarFavorites.tsx");

export default memoResult;
