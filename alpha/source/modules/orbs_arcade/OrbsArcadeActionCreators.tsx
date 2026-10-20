// Module ID: 19072
// Function ID: 19073
// Name: OrbsArcadeActionCreators
// Dependencies: [5, 502, 19070, 1087, 1104, 569, 584, 1297, 19071, 6329, 2]
// Exports: fetchOrbsArcadeGamesIfStale

// Module 19072 (OrbsArcadeActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1087 */;
import DurationsDefault from "Durations" /* 1104 */;
import HTTPUtils from "HTTPUtils" /* 1297 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import OrbsArcadeStore from "OrbsArcadeStore" /* 19070 */;
import Backoff from "Backoff" /* 569 */;
import size from "module_2" /* 2 */;

let c4, c5;

function fetchOrbsArcadeGames() {
  return obj(...arguments);
}
let obj = function _fetchOrbsArcadeGames() {
  let id;
  obj = _asyncToGenerator(async function(arg0, value) {
    let closure_2;
    let tmp21;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let tmp38;
      let c3;
      try {
        let userId;
        let body;
        let games;
        let gameStateByGameId;
        let dispatch;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            userId = undefined;
            body = undefined;
            tmp38 = undefined;
            games = undefined;
            gameStateByGameId = undefined;
            if (OrbsArcadeStore.isFetchingOrbsArcadeGames) {
              c10 = true;
            } else {
              const obj3 = DispatcherDefault;
              obj3.dispatch({ type: "ORBS_ARCADE_FETCH_GAMES_BEGIN" });
              userId = id.getId();
              c3 = 2;
              const HTTP = HTTPUtils.HTTP;
              const obj5 = { url: constants.ORBS_ARCADE_GAMES, rejectWithError: false };
              dispatch = HTTP.get(obj5);
              c4 = 3;
              c5 = 1;
              const obj6 = { value: dispatch, done: false };
              return obj6;
            }
          }
        } else if (1 === c4) {
          dispatch = body;
          c3 = 0;
          const tmp27 = tmp38;
          if (c10) {
            c10 = false;
            dispatch = closure_129_11();
          }
          throw tmp27;
        } else {
          if (2 === c4) {
            c3 = 1;
            let closure_5 = tmp38;
            const _Date = Date;
            const timestamp = Date.now();
            c9 = timestamp + closure_129_8.fail();
            dispatch = closure_129_1(closure_129_2[6]).dispatch;
            const obj7 = { type: "ORBS_ARCADE_FETCH_GAMES_FAILURE", userId, error: tmp21 };
            const self = this;
            const self2 = this;
            const tmp16 = closure_129_1(closure_129_2[6]);
            tmp21 = new closure_129_1(closure_129_2[9])(closure_5);
            dispatch(obj7);
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            dispatch = c10;
            if (dispatch) {
              c10 = false;
              closure_129_11();
            }
            c5 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            body = value;
            const obj8 = closure_129_0(closure_129_2[8]);
            tmp38 = obj8.orbsArcadeGamesFromServer(body.body);
            games = tmp38.games;
            gameStateByGameId = tmp38.gameStateByGameId;
            closure_129_8.succeed();
            c9 = 0;
            dispatch = closure_129_1(closure_129_2[6]).dispatch;
            const obj9 = { type: "ORBS_ARCADE_FETCH_GAMES_SUCCESS", userId, orbsArcadeGames: games, gameStateByGameId, fetchedAt: Date.now() };
            const _Date2 = Date;
            const tmp56 = closure_129_1(closure_129_2[6]);
            dispatch(obj9);
            c3 = 1;
          }
          c3 = 0;
          dispatch = c10;
          if (dispatch) {
            c10 = false;
            closure_129_11();
          }
        }
        c5 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp38) {
        if (0 === c3) {
          c5 = 3;
          throw tmp38;
        } else if (1 === tmp40) {
          c4 = 1;
        } else {
          c4 = 2;
        }
      }
    }
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
let closure_7 = 30 * DurationsDefault.Millis.MINUTE;
const result = 5 * DurationsDefault.Millis.SECOND;
new Backoff(result, 10 * DurationsDefault.Millis.MINUTE);
let c9 = 0;
let c10 = false;
const result1 = size.fileFinishedImporting("modules/orbs_arcade/OrbsArcadeActionCreators.tsx");

export { fetchOrbsArcadeGames };
export const fetchOrbsArcadeGamesIfStale = function fetchOrbsArcadeGamesIfStale() {
  let hasFetchFailed;
  let lastFetchedOrbsArcadeGamesAt;
  if (!OrbsArcadeStore.isFetchingOrbsArcadeGames) {
    if (!OrbsArcadeStore.hasFetchFailed) {
      ({ lastFetchedOrbsArcadeGamesAt, hasFetchFailed } = OrbsArcadeStore);
      let tmp4 = !hasFetchFailed && null != lastFetchedOrbsArcadeGamesAt;
      if (tmp4) {
        const _Date2 = Date;
        tmp4 = Date.now() - lastFetchedOrbsArcadeGamesAt < closure_7;
      }
      if (!tmp4) {
        fetchOrbsArcadeGames();
      }
    } else {
      const _Date = Date;
    }
  }
};
