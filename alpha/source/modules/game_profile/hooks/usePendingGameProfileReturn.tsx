// Module ID: 13338
// Function ID: 13339
// Name: usePendingGameProfileReturn
// Dependencies: [32, 19, 2022, 9253, 1087, 558, 576, 504, 9251, 9245, 2]

// Module 13338 (usePendingGameProfileReturn)
import Constants from "Constants" /* 1087 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 9245 */;
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 9251 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GameStore from "GameStore" /* 2022 */;
import GameProfileStore from "GameProfileStore" /* 9253 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let _slicedToArray = _slicedToArray_mod;
const AVATAR_SIZE = Constants.AVATAR_SIZE;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function usePendingGameProfileReturn(channelId) {
  let closure_2;
  let closure_3;
  let first;
  let stateFromStores1;
  let tmp6;
  const tmp = channelId;
  let tmp2 = dependencyMap;
  let obj = channelId(576);
  const cResult = obj.c(21);
  channelId = channelId.channelId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GameProfileStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function f() {
      const pendingReturn = GameProfileStore.getPendingReturn();
      let tmp2 = null;
      if (null != pendingReturn) {
        tmp2 = null;
        if (pendingReturn.channelId === channelId) {
          tmp2 = pendingReturn;
        }
      }
      return tmp2;
    };
    cResult[1] = channelId;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  const tmp8 = _slicedToArray(stateFromStores1.useState(null), 2);
  dependencyMap = tmp8[1];
  _slicedToArray = tmp9;
  const obj3 = stateFromStores1;
  if (cResult[3] === (null != stateFromStores && tmp8[0] === stateFromStores)) {
    let tmp11;
    let tmp13;
    let tmp15;
    let tmp17;
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [GameStore];
      cResult[6] = items1;
      tmp11 = items1;
    } else {
      tmp11 = cResult[6];
    }
    if (cResult[7] !== stateFromStores) {
      class A {
        constructor() {
          let gameId;
          if (stateFromStores != null) {
            gameId = tmp.gameId;
          }
          let game = null;
          if (null != gameId) {
            game = GameStore.getGame(tmp.gameId);
          }
          return game;
        }
      }
      cResult[7] = stateFromStores;
      cResult[8] = A;
      tmp13 = A;
    } else {
      class A {
        constructor() {
          let gameId;
          if (stateFromStores != null) {
            gameId = tmp.gameId;
          }
          let game = null;
          if (null != gameId) {
            game = GameStore.getGame(tmp.gameId);
          }
          return game;
        }
      }
    }
    const tmpResult2 = tmp(504);
    stateFromStores1 = tmpResult2.useStateFromStores(tmp11, tmp13);
    if (cResult[9] !== stateFromStores1) {
      class O {
        constructor() {
          id = undefined;
          if (closure_4 != null) {
            id = closure_4.id;
          }
          return null != id ? (() => {
            const obj = stateFromStores(closure_2[8]);
            return obj.clearGameProfilePendingReturn(id.id);
          }) : undefined;
        }
      }
      cResult[9] = stateFromStores1;
      cResult[10] = O;
      tmp15 = O;
    } else {
      class O {
        constructor() {
          id = undefined;
          if (closure_4 != null) {
            id = closure_4.id;
          }
          return null != id ? (() => {
            const obj = stateFromStores(closure_2[8]);
            return obj.clearGameProfilePendingReturn(id.id);
          }) : undefined;
        }
      }
    }
    if (stateFromStores1 != null) {
      class O {
        constructor() {
          id = undefined;
          if (closure_4 != null) {
            id = closure_4.id;
          }
          return null != id ? (() => {
            const obj = stateFromStores(closure_2[8]);
            return obj.clearGameProfilePendingReturn(id.id);
          }) : undefined;
        }
      }
    }
    if (cResult[11] !== undefined) {
      class O {
        constructor() {
          id = undefined;
          if (closure_4 != null) {
            id = closure_4.id;
          }
          return null != id ? (() => {
            const obj = stateFromStores(closure_2[8]);
            return obj.clearGameProfilePendingReturn(id.id);
          }) : undefined;
        }
      }
      tmp18[0] = undefined;
      cResult[11] = undefined;
      cResult[12] = tmp18;
      tmp17 = tmp18;
    } else {
      class O {
        constructor() {
          id = undefined;
          if (closure_4 != null) {
            id = closure_4.id;
          }
          return null != id ? (() => {
            const obj = stateFromStores(closure_2[8]);
            return obj.clearGameProfilePendingReturn(id.id);
          }) : undefined;
        }
      }
    }
    const effect = obj3.useEffect(tmp15, tmp17);
    if (stateFromStores1 != null) {
      class O {
        constructor() {
          id = undefined;
          if (closure_4 != null) {
            id = closure_4.id;
          }
          return null != id ? (() => {
            const obj = stateFromStores(closure_2[8]);
            return obj.clearGameProfilePendingReturn(id.id);
          }) : undefined;
        }
      }
    }
    if (null != stateFromStores1) {
      class O {
        constructor() {
          id = undefined;
          if (closure_4 != null) {
            id = closure_4.id;
          }
          return null != id ? (() => {
            const obj = stateFromStores(closure_2[8]);
            return obj.clearGameProfilePendingReturn(id.id);
          }) : undefined;
        }
      }
    }
    return null;
  }
  class S {
    constructor() {
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
    }
  }
  cResult[3] = null != stateFromStores && tmp8[0] === stateFromStores;
  cResult[4] = stateFromStores;
  cResult[5] = S;
}) : (function usePendingGameProfileReturn(channelId) {
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
      const obj = stateFromStores(closure_2[8]);
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
});
const result = size.fileFinishedImporting("modules/game_profile/hooks/usePendingGameProfileReturn.tsx");

export default tmp2;
