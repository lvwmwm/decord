// Module ID: 11496
// Function ID: 89558
// Name: usePendingGameProfileReturn
// Dependencies: [31, 4151, 8638, 653, 566, 8636, 8642, 2]
// Exports: default

// Module 11496 (usePendingGameProfileReturn)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import { AVATAR_SIZE } from "ME";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/game_profile/hooks/usePendingGameProfileReturn.tsx");

export default function usePendingGameProfileReturn(channelId) {
  channelId = channelId.channelId;
  let obj = channelId(stateFromStores1[4]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const pendingReturn = outer1_5.getPendingReturn();
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
  const callback = React.useCallback(() => {
    if (null != stateFromStores) {
      let obj = stateFromStores(stateFromStores1[5]);
      obj = { gameId: stateFromStores.gameId, source: channelId(stateFromStores1[6]).GameProfileSources.AnnouncementChannelReturn, initialScrollOffset: stateFromStores.initialScrollOffset };
      obj.returnToGameProfile(obj);
    }
  }, items1);
  const items2 = [_isNativeReflectConstruct];
  stateFromStores1 = channelId(stateFromStores1[4]).useStateFromStores(items2, () => {
    let gameId;
    if (null != stateFromStores) {
      gameId = stateFromStores.gameId;
    }
    let game = null;
    if (null != gameId) {
      game = outer1_4.getGame(stateFromStores.gameId);
    }
    return game;
  });
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
    return null != id ? (() => stateFromStores(stateFromStores1[5]).clearGameProfilePendingReturn(outer1_2.id)) : undefined;
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
