// Module ID: 16366
// Function ID: 16367
// Name: OrbsArcadeStore
// Dependencies: [502, 16367, 504, 584, 2]

// Module 16366 (OrbsArcadeStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import OrbsArcadeTypes from "OrbsArcadeTypes" /* 16367 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import size from "module_2" /* 2 */;

let c2 = false;
let fetchedAt = null;
let c4 = false;
let orbsArcadeGames = [];
const map = new Map();
new Set();
const set1 = new Set();
let set = set1;
const Store = get_initializedDefault.Store;
class OrbsArcadeStore extends Store {
  initialize() {
    this.waitFor(AuthenticationStore);
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
  isClaimingRewards(arg0) {
    return set.has(arg0);
  }
  isLaunchingGame(id) {
    return set.has(id);
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
OrbsArcadeStore.displayName = "OrbsArcadeStore";
let obj = {
  ORBS_ARCADE_FETCH_GAMES_BEGIN: function handleFetchGamesBegin() {
    c2 = true;
  },
  ORBS_ARCADE_FETCH_GAMES_SUCCESS: function handleFetchGamesSuccess(arg0) {
    let gameStateByGameId;
    let userId;
    ({ userId, orbsArcadeGames, gameStateByGameId, fetchedAt } = arg0);
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
  ORBS_ARCADE_GAME_STATE_UPDATE: function handleGameStateUpdate(arg0) {
    let game_id;
    let game_state;
    ({ game_id, game_state } = arg0);
    set = map.set;
    const obj = OrbsArcadeTypes;
    const result = set(game_id, obj.orbsArcadeGameStateFromServer(game_state));
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
    set = new Set(set);
    set = set.add(gameId);
  },
  ORBS_ARCADE_LAUNCH_GAME_END: function handleLaunchGameEnd(gameId) {
    gameId = gameId.gameId;
    set = new Set(set);
    set.delete(gameId);
  },
  LOGOUT: function initializeState() {
    c2 = false;
    fetchedAt = null;
    c4 = false;
    orbsArcadeGames = [];
    new Map();
    new Set();
    new Set();
    new Set();
  }
};
const orbsArcadeStore = new OrbsArcadeStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/orbs_arcade/OrbsArcadeStore.tsx");

export default orbsArcadeStore;
