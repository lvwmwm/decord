// Module ID: 17010
// Function ID: 17011
// Name: OrbsArcadeStore
// Dependencies: [32, 9555, 502, 17011, 17012, 504, 572, 2]

// Module 17010 (OrbsArcadeStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import OrbsArcadeTypes from "OrbsArcadeTypes" /* 17011 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import VirtualCurrencyStore from "VirtualCurrencyStore" /* 9555 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import size from "module_2" /* 2 */;

let tmp;
const orbs_arcade_game_state = tmp(17012);
function handleBalanceChange(balance) {
  let tmp8;
  let tmp9;
  balance = balance.balance;
  let num = 0;
  if (null != balance) {
    num = balance - balance;
  }
  let diff = num;
  let flag = false;
  const tmp4 = map[Symbol.iterator]();
  while (tmp4 !== undefined) {
    let tmp7 = _slicedToArray(tmp5, 2);
    [tmp8, tmp9] = tmp7;
    if (tmp9 <= diff) {
      diff = diff - tmp10;
      let deleteResult = map.delete(tmp8);
      flag = true;
    }
    continue;
  }
  return flag;
}
let c2 = false;
let fetchedAt = null;
let c4 = false;
let orbsArcadeGames = [];
new Map();
new Set();
const set1 = new Set();
let set = set1;
let c9 = null;
const map1 = new Map();
let map = map1;
let balance = null;
const Store = get_initializedDefault.Store;
class OrbsArcadeStore extends Store {
  initialize() {
    this.waitFor(AuthenticationStore, VirtualCurrencyStore);
  }
  getGame(arg0) {
    let closure_0 = arg0;
    let found = orbsArcadeGames.find((id) => id.id === closure_0);
    if (found == null) {
      found = null;
    }
    return found;
  }
  getGameStateForGame(id) {
    let value = map.get(id);
    if (value == null) {
      value = null;
    }
    return value;
  }
  isClaimingRewards(id) {
    return set.has(id);
  }
  isLaunchingGame(id) {
    return c9 === id;
  }
}
const prototype = OrbsArcadeStore.prototype;
Object.defineProperty(prototype, "isFetchingOrbsArcadeGames", {
  get: function isFetchingOrbsArcadeGames() {
    return c2;
  },
  set: undefined
});
Object.defineProperty(prototype, "lastFetchedOrbsArcadeGamesAt", {
  get: function lastFetchedOrbsArcadeGamesAt() {
    return fetchedAt;
  },
  set: undefined
});
Object.defineProperty(prototype, "hasFetchFailed", {
  get: function hasFetchFailed() {
    return c4;
  },
  set: undefined
});
Object.defineProperty(prototype, "orbsArcadeGames", {
  get: function orbsArcadeGames() {
    return orbsArcadeGames;
  },
  set: undefined
});
Object.defineProperty(prototype, "ownedRewardSkuIds", {
  get: function ownedRewardSkuIds() {
    return set;
  },
  set: undefined
});
Object.defineProperty(prototype, "isLaunchingAnyGame", {
  get: function isLaunchingAnyGame() {
    return null != c9;
  },
  set: undefined
});
Object.defineProperty(prototype, "heldRunChargeTotal", {
  get: function heldRunChargeTotal() {
    const arr = Array.from(map.values());
    return arr.reduce((acc, item) => acc + item, 0);
  },
  set: undefined
});
OrbsArcadeStore.displayName = "OrbsArcadeStore";
let obj = {
  ORBS_ARCADE_FETCH_GAMES_BEGIN: function handleFetchGamesBegin() {
    c2 = true;
  },
  ORBS_ARCADE_FETCH_GAMES_SUCCESS: function handleFetchGamesSuccess(ownedRewardSkuIds) {
    let gameStateByGameId;
    let userId;
    ownedRewardSkuIds = ownedRewardSkuIds.ownedRewardSkuIds;
    ({ userId, orbsArcadeGames, gameStateByGameId, fetchedAt } = ownedRewardSkuIds);
    if (userId !== AuthenticationStore.getId()) {
      return false;
    } else {
      c2 = false;
      c4 = false;
      const _Map = Map;
      const _Object = Object;
      const values = Object.values(gameStateByGameId);
      const self = this;
      const self2 = this;
      new Map(values.map((gameId) => {
        const items = [gameId.gameId, gameId];
        return items;
      }));
      const _Set = Set;
      const self3 = this;
      const self4 = this;
      new Set(ownedRewardSkuIds);
    }
  },
  ORBS_ARCADE_FETCH_GAMES_FAILURE: function handleFetchGamesFailure(userId) {
    if (userId.userId !== AuthenticationStore.getId()) {
      return false;
    } else {
      c2 = false;
      c4 = true;
    }
  },
  ORBS_ARCADE_GAME_STATE_UPDATE: function handleGameStateUpdate(game_id) {
    let currentRun;
    game_id = game_id.game_id;
    const game_state = game_id.game_state;
    const obj = OrbsArcadeTypes;
    const result = obj.orbsArcadeGameStateFromServer(game_state);
    const value = map.get(game_id);
    if (value != null) {
      currentRun = value.currentRun;
    }
    const currentRun2 = result.currentRun;
    const result1 = map.set(game_id, result);
    if (null != currentRun2) {
      let id1;
      const id = currentRun2.id;
      if (currentRun != null) {
        id1 = currentRun.id;
      }
      if (id !== id1) {
        const tmp7 = null != currentRun && null == currentRun.endedAt;
        if (tmp7) {
          map.delete(currentRun.id);
        }
        if (null == currentRun2.endedAt) {
          if (currentRun2.chargeType === orbs_arcade_game_state.OrbsArcadeChargeType.VIRTUAL_CURRENCY) {
            const found = orbsArcadeGames.find((id) => id.id === result.gameId);
            let orbCost = null;
            if (null != found) {
              orbCost = null;
              if (found.versionId === result.gameVersionId) {
                orbCost = found.orbCost;
              }
            }
            let tmp13 = null;
            if (null != orbCost) {
              tmp13 = null;
              if (orbCost > 0) {
                tmp13 = orbCost;
              }
            }
            if (null != tmp13) {
              const result2 = map.set(currentRun2.id, tmp13);
            }
          }
        }
      }
    }
  },
  ORBS_ARCADE_CLAIM_REWARDS_BEGIN: function handleClaimRewardsBegin(gameId) {
    gameId = gameId.gameId;
    set = new Set(set);
    set = set.add(gameId);
  },
  ORBS_ARCADE_CLAIM_REWARDS_SUCCESS: function handleClaimRewardsSuccess(gameId) {
    let gameState;
    let userId;
    gameId = gameId.gameId;
    ({ userId, gameState } = gameId);
    if (userId !== AuthenticationStore.getId()) {
      return false;
    } else {
      const _Set = Set;
      const self = this;
      const self2 = this;
      set = new Set(set);
      set.delete(gameId);
      const result = map.set(gameId, gameState);
    }
  },
  ORBS_ARCADE_CLAIM_REWARDS_FAILURE: function handleClaimRewardsFailure(arg0) {
    let gameId;
    let userId;
    ({ userId, gameId } = arg0);
    if (userId !== AuthenticationStore.getId()) {
      return false;
    } else {
      const _Set = Set;
      const self = this;
      const self2 = this;
      set = new Set(set);
      set.delete(gameId);
    }
  },
  ORBS_ARCADE_LAUNCH_GAME_BEGIN: function handleLaunchGameBegin(gameId) {
    gameId = gameId.gameId;
    map = new Map();
    balance = VirtualCurrencyStore.balance;
  },
  ORBS_ARCADE_LAUNCH_GAME_END: function handleLaunchGameEnd(gameId) {
    if (c9 !== gameId.gameId) {
      return false;
    } else {
      c9 = null;
    }
  },
  VIRTUAL_CURRENCY_BALANCE_UPDATE: handleBalanceChange,
  VIRTUAL_CURRENCY_BALANCE_FETCH_SUCCESS: handleBalanceChange,
  LOGOUT: function initializeState() {
    c2 = false;
    fetchedAt = null;
    c4 = false;
    orbsArcadeGames = [];
    new Map();
    new Set();
    new Set();
    c9 = null;
    new Set();
    new Map();
    balance = null;
    new Map();
  }
};
const orbsArcadeStore = new OrbsArcadeStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/orbs_arcade/OrbsArcadeStore.tsx");

export default orbsArcadeStore;
