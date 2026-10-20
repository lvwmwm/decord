// Module ID: 19070
// Function ID: 19071
// Name: OrbsArcadeStore
// Dependencies: [502, 19071, 504, 584, 2]

// Module 19070 (OrbsArcadeStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import OrbsArcadeTypes from "OrbsArcadeTypes" /* 19071 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import size from "module_2" /* 2 */;

let set;

let c2 = false;
let fetchedAt = null;
let c4 = false;
let orbsArcadeGames = [];
let map = new Map();
const Store = get_initializedDefault.Store;
class OrbsArcadeStore extends Store {
  initialize() {
    this.waitFor(AuthenticationStore);
  }
  getGameStateForGame(id) {
    let value = map.get(id);
    if (value == null) {
      value = null;
    }
    return value;
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
  LOGOUT: function initializeState() {
    c2 = false;
    fetchedAt = null;
    c4 = false;
    orbsArcadeGames = [];
    map = new Map();
  }
};
const orbsArcadeStore = new OrbsArcadeStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/orbs_arcade/OrbsArcadeStore.tsx");

export default orbsArcadeStore;
