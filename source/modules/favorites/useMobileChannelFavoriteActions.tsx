// Module ID: 10334
// Function ID: 79774
// Name: useMobileChannelFavoriteActions
// Dependencies: []
// Exports: default

// Module 10334 (useMobileChannelFavoriteActions)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/favorites/useMobileChannelFavoriteActions.tsx");

export default function useMobileChannelFavoriteActions(id, FavoritesGuildChannelList) {
  let hasAccess;
  let hasHigherPrivileges;
  FavoritesGuildChannelList = id;
  let obj = FavoritesGuildChannelList(dependencyMap[3]);
  const favoritesAccess = obj.useFavoritesAccess(FavoritesGuildChannelList);
  ({ hasAccess, hasHigherPrivileges } = favoritesAccess);
  let result = FavoritesGuildChannelList(dependencyMap[4]).canFavoriteChannelType(id, hasHigherPrivileges);
  const obj2 = FavoritesGuildChannelList(dependencyMap[4]);
  const items = [closure_4];
  const stateFromStores = FavoritesGuildChannelList(dependencyMap[5]).useStateFromStores(items, () => favorite.isFavorite(arg0.id));
  const obj3 = FavoritesGuildChannelList(dependencyMap[5]);
  const isFavoritesGuildSelected = FavoritesGuildChannelList(dependencyMap[3]).useIsFavoritesGuildSelected();
  const obj4 = FavoritesGuildChannelList(dependencyMap[3]);
  const items1 = [closure_3, closure_2];
  obj = { hasFavoritesAccess: hasAccess };
  if (result) {
    result = obj5.useStateFromStores(items1, () => {
      let isMemberResult = null == arg0.guild_id;
      if (!isMemberResult) {
        isMemberResult = member.isMember(arg0.guild_id, id.getId());
      }
      return isMemberResult;
    });
  }
  obj.canFavoriteChannel = result;
  obj.isChannelInFavorites = stateFromStores;
  obj.isFavoritesGuild = isFavoritesGuildSelected;
  obj.channelId = id.id;
  return obj;
};
