// Module ID: 11928
// Function ID: 11929
// Name: usePendingGameProfileReturn
// Dependencies: [19, 2001, 8135, 1074, 504, 8133, 8139, 2]
// Exports: default

// Module 11928 (usePendingGameProfileReturn)
import Constants from "Constants" /* 1074 */;
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 8133 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8139 */;
import react from "react" /* 19 */;
import GameStore from "GameStore" /* 2001 */;
import GameProfileStore from "GameProfileStore" /* 8135 */;
import size from "module_2" /* 2 */;

const AVATAR_SIZE = Constants.AVATAR_SIZE;
const result = size.fileFinishedImporting("modules/game_profile/hooks/usePendingGameProfileReturn.tsx");

export default function usePendingGameProfileReturn(channelId) {
  let name;
  channelId = channelId.channelId;
  let stateFromStores1;
  let obj = channelId(stateFromStores1[4]);
  const items = [GameProfileStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const pendingReturn = GameProfileStore.getPendingReturn();
    let tmp2 = null;
    if (null != pendingReturn) {
      tmp2 = null;
      if (pendingReturn.channelId === channelId) {
        tmp2 = pendingReturn;
      }
    }
    return tmp2;
  });
  const items1 = [stateFromStores];
  let tmp2 = react;
  const callback = react.useCallback(() => {
    if (null != stateFromStores) {
      const obj = { gameId: stateFromStores.gameId, source: GameProfileAnalyticUtils.GameProfileSources.AnnouncementChannelReturn, initialScrollOffset: stateFromStores.initialScrollOffset };
      const returnToGameProfile = GameProfileActionCreatorsDefault.returnToGameProfile;
      GameProfileActionCreatorsDefault;
      returnToGameProfile(obj);
    }
  }, items1);
  const items2 = [GameStore];
  const obj2 = channelId(stateFromStores1[4]);
  stateFromStores1 = obj2.useStateFromStores(items2, () => {
    let gameId;
    if (stateFromStores != null) {
      gameId = tmp.gameId;
    }
    let game = null;
    if (null != gameId) {
      game = GameStore.getGame(tmp.gameId);
    }
    return game;
  });
  let id;
  const useEffect = react.useEffect;
  if (stateFromStores1 != null) {
    id = stateFromStores1.id;
  }
  const items3 = [id];
  const effect = useEffect(() => {
    let id;
    if (stateFromStores1 != null) {
      id = stateFromStores1.id;
    }
    return null != id ? (() => {
      const obj = stateFromStores(stateFromStores1[5]);
      return obj.clearGameProfilePendingReturn(id.id);
    }) : undefined;
  }, items3);
  if (stateFromStores1 != null) {
    name = stateFromStores1.name;
  }
  if (null != stateFromStores1) {
    if (null != name) {
      let iconURL;
      if (stateFromStores1 != null) {
        iconURL = stateFromStores1.getIconURL(AVATAR_SIZE);
      }
      return { gameId: stateFromStores1.id, gameName: name, gameIconUrl: iconURL, onReturnToGameProfile: callback };
    }
  }
  return null;
};
