// Module ID: 13958
// Function ID: 13959
// Name: usePendingGameProfileReturn
// Dependencies: [32, 19, 2015, 9302, 1072, 504, 9300, 9320, 2]
// Exports: default

// Module 13958 (usePendingGameProfileReturn)
import Constants from "Constants" /* 1072 */;
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 9300 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 9320 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GameStore from "GameStore" /* 2015 */;
import GameProfileStore from "GameProfileStore" /* 9302 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let _slicedToArray = _slicedToArray_mod;
const AVATAR_SIZE = Constants.AVATAR_SIZE;
const result = size.fileFinishedImporting("modules/game_profile/hooks/usePendingGameProfileReturn.tsx");

export default function usePendingGameProfileReturn(channelId) {
  let closure_2;
  let closure_3;
  let name;
  channelId = channelId.channelId;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  let stateFromStores1;
  const tmp = channelId;
  let tmp2 = dependencyMap;
  let obj = channelId(504);
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
  const tmp4 = _slicedToArray(stateFromStores1.useState(null), 2);
  dependencyMap = tmp4[1];
  _slicedToArray = tmp5;
  const items1 = [stateFromStores, tmp5];
  const callback = obj2.useCallback(() => {
    let source;
    const tmp2 = null == stateFromStores || closure_3;
    if (!tmp2) {
      closure_2(stateFromStores);
      const obj = { gameId: null, source, initialScrollOffset: null, initialTab: null };
      ({ gameId: obj.gameId, source } = stateFromStores);
      const returnToGameProfile = GameProfileActionCreatorsDefault.returnToGameProfile;
      GameProfileActionCreatorsDefault;
      if (source == null) {
        source = GameProfileAnalyticUtils.GameProfileSources.AnnouncementChannelReturn;
      }
      ({ initialScrollOffset: obj.initialScrollOffset, tab: obj.initialTab } = stateFromStores);
      returnToGameProfile(obj);
    }
  }, items1);
  const items2 = [GameStore];
  const tmpResult = tmp(504);
  stateFromStores1 = tmpResult.useStateFromStores(items2, () => {
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
  const useEffect = obj2.useEffect;
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
      const obj = stateFromStores(closure_2[6]);
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
      return { gameId: stateFromStores1.id, gameName: name, gameIconUrl: iconURL, isReturning: null != stateFromStores && tmp4[0] === stateFromStores, onReturnToGameProfile: callback };
    }
  }
  return null;
};
