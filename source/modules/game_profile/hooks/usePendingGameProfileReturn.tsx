// Module ID: 11456
// Function ID: 89263
// Name: usePendingGameProfileReturn
// Dependencies: []
// Exports: default

// Module 11456 (usePendingGameProfileReturn)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const AVATAR_SIZE = arg1(dependencyMap[3]).AVATAR_SIZE;
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/game_profile/hooks/usePendingGameProfileReturn.tsx");

export default function usePendingGameProfileReturn(channelId) {
  const arg1 = channelId.channelId;
  let obj = arg1(dependencyMap[4]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const pendingReturn = pendingReturn.getPendingReturn();
    let tmp2 = null;
    if (null != pendingReturn) {
      tmp2 = null;
      if (pendingReturn.channelId === channelId) {
        tmp2 = pendingReturn;
      }
    }
    return tmp2;
  });
  const importDefault = stateFromStores;
  const items1 = [stateFromStores];
  const callback = React.useCallback(() => {
    if (null != stateFromStores) {
      let obj = stateFromStores(stateFromStores1[5]);
      obj = { gameId: stateFromStores.gameId, source: channelId(stateFromStores1[6]).GameProfileSources.AnnouncementChannelReturn, initialScrollOffset: stateFromStores.initialScrollOffset };
      obj.returnToGameProfile(obj);
    }
  }, items1);
  const items2 = [closure_4];
  const stateFromStores1 = arg1(dependencyMap[4]).useStateFromStores(items2, () => {
    let gameId;
    if (null != stateFromStores) {
      gameId = stateFromStores.gameId;
    }
    let game = null;
    if (null != gameId) {
      game = game.getGame(stateFromStores.gameId);
    }
    return game;
  });
  const dependencyMap = stateFromStores1;
  let id;
  if (null != stateFromStores1) {
    id = stateFromStores1.id;
  }
  const items3 = [id];
  const effect = React.useEffect(() => {
    let id;
    if (null != stateFromStores1) {
      id = stateFromStores1.id;
    }
    return null != id ? () => callback(id[5]).clearGameProfilePendingReturn(id.id) : undefined;
  }, items3);
  if (null != stateFromStores1) {
    const name = stateFromStores1.name;
  }
  if (null != stateFromStores1) {
    if (null != name) {
      let iconURL;
      if (null != stateFromStores1) {
        iconURL = stateFromStores1.getIconURL(AVATAR_SIZE);
      }
      let tmp8;
      if (null != iconURL) {
        tmp8 = iconURL;
      }
      obj = { gameId: stateFromStores1.id, gameName: name, gameIconUrl: tmp8, onReturnToGameProfile: callback };
      return obj;
    }
  }
  return null;
};
