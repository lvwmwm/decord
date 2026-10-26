// Module ID: 19367
// Function ID: 19368
// Name: OrbsArcadeFetchManager
// Dependencies: [16394, 1104, 7214, 16399, 16400, 16395, 2]

// Module 19367 (OrbsArcadeFetchManager)
import DurationsDefault from "Durations" /* 1104 */;
import OrbsArcadeTypes from "OrbsArcadeTypes" /* 16395 */;
import OrbsArcadeActionCreators from "OrbsArcadeActionCreators" /* 16399 */;
import OrbsArcadeRewardUtils from "OrbsArcadeRewardUtils" /* 16400 */;
import OrbsArcadeStore from "OrbsArcadeStore" /* 16394 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7214 */;
import size from "module_2" /* 2 */;

let game, gameStateForGame;

const MINUTE = DurationsDefault.Millis.MINUTE;
let closure_4 = 5 * DurationsDefault.Millis.MINUTE;
let closure_5 = 5 * DurationsDefault.Millis.MINUTE;
const DAY = DurationsDefault.Millis.DAY;
class OrbsArcadeFetchManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult.reconnectRefetchTimerId = null;
    applyArgumentsResult.boundaryRefetchTimerId = null;
    applyArgumentsResult.scheduledBoundaryAt = null;
    applyArgumentsResult.lastLocaleRefetchAt = 0;
    applyArgumentsResult.handlePostConnectionOpen = function handlePostConnectionOpen() {
      window.clearTimeout(require.reconnectRefetchTimerId);
      const tmp = require;
      if (require.hasFetched()) {
        const _window = window;
        const _Math = Math;
        const _Math2 = Math;
        tmp.reconnectRefetchTimerId = window.setTimeout(() => {
          const obj = closure_1_0(closure_1_1[3]);
          return obj.fetchOrbsArcadeGames();
        }, Math.floor(Math.random() * MINUTE));
      }
    };
    applyArgumentsResult.handleUserSettingsProtoUpdate = function handleUserSettingsProtoUpdate(settings) {
      let tmp = !("localization" in settings.settings.proto);
      const wasSaved = settings.wasSaved;
      if (!tmp) {
        tmp = !settings.partial;
      }
      if (!tmp) {
        tmp = wasSaved;
      }
      if (!tmp) {
        tmp = !require.hasFetched();
      }
      if (!tmp) {
        const _Date = Date;
        tmp = Date.now() - require.lastLocaleRefetchAt <= closure_4;
      }
      if (!tmp) {
        const _Date2 = Date;
        require.lastLocaleRefetchAt = Date.now();
        const obj = OrbsArcadeActionCreators;
        const orbsArcadeGames = obj.fetchOrbsArcadeGames();
      }
    };
    applyArgumentsResult.handleGameStateUpdate = function handleGameStateUpdate(game_state) {
      game_state = game_state.game_state;
      game = game.getGame(game_state.game_id);
      if (null != game) {
        let tmp4 = null != game.endsAt;
        const versionId = game.versionId;
        const game_version_id = game_state.game_version_id;
        if (tmp4) {
          const _Date = Date;
          const _Date2 = Date;
          const parsed = Date.parse(game.endsAt);
          tmp4 = parsed <= Date.now();
        }
        let result = !tmp4;
        if (result) {
          const isOrbsArcadeEnrollmentOver = OrbsArcadeRewardUtils.isOrbsArcadeEnrollmentOver;
          OrbsArcadeRewardUtils;
          const obj = OrbsArcadeTypes;
          result = isOrbsArcadeEnrollmentOver(obj.orbsArcadeGameStateFromServer(game_state));
        }
        const tmp9 = versionId !== game_version_id || result;
        if (tmp9) {
          const obj2 = OrbsArcadeActionCreators;
          const orbsArcadeGames = obj2.fetchOrbsArcadeGames();
        }
      }
    };
    applyArgumentsResult.handleLogout = function handleLogout() {
      require.clearTimers();
      require.lastLocaleRefetchAt = 0;
    };
    applyArgumentsResult.handleStoreChange = function handleStoreChange() {
      let tmp3 = null;
      if (require.hasFetched()) {
        const _Date = Date;
        let closure_0 = Date.now();
        let orbsArcadeGames = OrbsArcadeStore.orbsArcadeGames;
        let items = [];
        HermesBuiltin.arraySpread(items, orbsArcadeGames.flatMap((id) => {
          const items = [, , ];
          ({ startsAt: arr[0], endsAt: arr[1] } = id);
          gameStateForGame = gameStateForGame.getGameStateForGame(id.id);
          let expiresAt;
          if (gameStateForGame != null) {
            expiresAt = gameStateForGame.expiresAt;
          }
          items[2] = expiresAt;
          return items;
        }), 0);
        const found = items.filter((item) => null != item);
        const mapped = found.map((item) => Date.parse(item));
        const found1 = mapped.filter((item) => item > closure_0);
        let applyResult = null;
        if (found1.length > 0) {
          const _Math = Math;
          const items1 = [];
          HermesBuiltin.arraySpread(items1, found1, 0);
          const _Math2 = Math;
          applyResult = HermesBuiltin.apply(min, items1, Math);
        }
        tmp3 = applyResult;
      }
      if (tmp3 !== require.scheduledBoundaryAt) {
        const _window2 = window;
        window.clearTimeout(require.boundaryRefetchTimerId);
        require.boundaryRefetchTimerId = null;
        require.scheduledBoundaryAt = tmp3;
        if (null != tmp3) {
          const _Math3 = Math;
          const _Date2 = Date;
          const min2 = Math.min;
          const _Math4 = Math;
          const _Math5 = Math;
          const diff = tmp3 - Date.now();
          const _window = window;
          require.boundaryRefetchTimerId = window.setTimeout(() => {
            closure_1_0.boundaryRefetchTimerId = null;
            closure_1_0.scheduledBoundaryAt = null;
            const obj = OrbsArcadeActionCreators;
            const orbsArcadeGames = obj.fetchOrbsArcadeGames();
          }, min2(diff + Math.floor(Math.random() * closure_5), DAY));
        }
      }
    };
    applyArgumentsResult.actions = { POST_CONNECTION_OPEN: applyArgumentsResult.handlePostConnectionOpen, USER_SETTINGS_PROTO_UPDATE: applyArgumentsResult.handleUserSettingsProtoUpdate, ORBS_ARCADE_GAME_STATE_UPDATE: applyArgumentsResult.handleGameStateUpdate, LOGOUT: applyArgumentsResult.handleLogout };
    let items = [OrbsArcadeStore, applyArgumentsResult.handleStoreChange];
    let items1 = [items];
    applyArgumentsResult.stores = new Map(items1);
    new Map(items1);
    return applyArgumentsResult;
  }
  hasFetched() {
    return null != OrbsArcadeStore.lastFetchedOrbsArcadeGamesAt;
  }
  clearTimers() {
    window.clearTimeout(this.reconnectRefetchTimerId);
    window.clearTimeout(this.boundaryRefetchTimerId);
    this.reconnectRefetchTimerId = null;
    this.boundaryRefetchTimerId = null;
    this.scheduledBoundaryAt = null;
  }
}
const prototype = OrbsArcadeFetchManager.prototype;
const orbsArcadeFetchManager = new OrbsArcadeFetchManager();
let result = size.fileFinishedImporting("modules/orbs_arcade/managers/OrbsArcadeFetchManager.tsx");

export default orbsArcadeFetchManager;
