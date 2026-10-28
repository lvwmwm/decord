// Module ID: 16434
// Function ID: 16435
// Name: OrbsArcadeActionCreators
// Dependencies: [5, 502, 16429, 1087, 1104, 569, 584, 1297, 16430, 6407, 16435, 2]
// Exports: claimOrbsArcadeRewards, ensureOrbsArcadeEnrollment, fetchOrbsArcadeGamesIfStale, resetOrbsArcadeGame

// Module 16434 (OrbsArcadeActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1087 */;
import DurationsDefault from "Durations" /* 1104 */;
import HTTPUtils from "HTTPUtils" /* 1297 */;
import OrbsArcadeRewardUtils from "OrbsArcadeRewardUtils" /* 16435 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import OrbsArcadeStore from "OrbsArcadeStore" /* 16429 */;
import Backoff from "Backoff" /* 569 */;
import size from "module_2" /* 2 */;

let c7, c8, gameState, gameStateForGame;

function fetchOrbsArcadeGames() {
  return obj(...arguments);
}
let obj = function _fetchOrbsArcadeGames() {
  let id;
  obj = _asyncToGenerator(async function(arg0, value) {
    let closure_2;
    let tmp18;
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
      let tmp28;
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
            tmp28 = undefined;
            games = undefined;
            gameStateByGameId = undefined;
            if (!OrbsArcadeStore.isFetchingOrbsArcadeGames) {
              const obj3 = DispatcherDefault;
              obj3.dispatch({ type: "ORBS_ARCADE_FETCH_GAMES_BEGIN" });
              userId = id.getId();
              c3 = 1;
              const HTTP = HTTPUtils.HTTP;
              const obj5 = { url: constants.ORBS_ARCADE_GAMES, rejectWithError: false };
              dispatch = HTTP.get(obj5);
              c4 = 2;
              c5 = 1;
              const obj6 = { value: dispatch, done: false };
              return obj6;
            }
          }
        } else if (1 === tmp4) {
          c3 = 0;
          let closure_5 = tmp28;
          const _Date = Date;
          const timestamp = Date.now();
          c11 = timestamp + closure_129_10.fail();
          dispatch = closure_129_1(closure_129_2[6]).dispatch;
          const obj7 = { type: "ORBS_ARCADE_FETCH_GAMES_FAILURE", userId, error: tmp18 };
          const self = this;
          const self2 = this;
          const tmp13 = closure_129_1(closure_129_2[6]);
          tmp18 = new closure_129_1(closure_129_2[9])(closure_5);
          dispatch(obj7);
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          body = value;
          const obj8 = closure_129_0(closure_129_2[8]);
          tmp28 = obj8.orbsArcadeGamesFromServer(body.body);
          games = tmp28.games;
          gameStateByGameId = tmp28.gameStateByGameId;
          closure_129_10.succeed();
          c11 = 0;
          dispatch = closure_129_1(closure_129_2[6]).dispatch;
          const obj9 = { type: "ORBS_ARCADE_FETCH_GAMES_SUCCESS", userId, orbsArcadeGames: games, gameStateByGameId, fetchedAt: Date.now() };
          const _Date2 = Date;
          const tmp46 = closure_129_1(closure_129_2[6]);
          dispatch(obj9);
          c3 = 0;
        }
        c5 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp28) {
        if (0 === c3) {
          c5 = 3;
          throw tmp28;
        } else {
          c4 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _resetOrbsArcadeGame() {
  obj = _asyncToGenerator(async function(arg0, value) {
    let closure_0 = arg0;
    if (c6 === 2) {
      c6 = 3;
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
      let c4;
      try {
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp;
            let closure_1 = tmp4;
            c4 = 1;
            const HTTP = HTTPUtils.HTTP;
            const obj4 = { url: Endpoints.ORBS_ARCADE_RESET_GAME(closure_0), rejectWithError: false };
            const post = HTTP.post;
            c5 = 3;
            c6 = 1;
            const obj5 = { value: post(obj4), done: false };
            return obj5;
          }
        } else if (1 === c5) {
          c4 = 0;
          closure_0 = closure_3;
          const self = this;
          const self2 = this;
          const tmp14 = new closure_130_1(closure_130_2[9])(closure_0);
          throw tmp14;
        } else if (2 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            c6 = 3;
            return { value: "IconComponent", done: null };
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          c4 = 0;
          c5 = 2;
          c6 = 1;
          obj = { value: closure_130_12(), done: false };
          return obj;
        }
      } catch (tmp20) {
        closure_3 = tmp20;
        if (0 === c4) {
          c6 = 3;
          throw tmp20;
        } else {
          c5 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _ensureOrbsArcadeEnrollment() {
  obj = _asyncToGenerator(async (arg0) => {
    const user = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (async function(arg0, value) {
      let obj4;
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let body;
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              closure_2 = tmp;
              closure_1 = tmp4;
              body = undefined;
              c4 = 1;
              const HTTP = HTTPUtils.HTTP;
              const request = { url: Endpoints.ORBS_ARCADE_GAME_ENROLLMENT(user.id), body: obj4, rejectWithError: false };
              const put = HTTP.put;
              c5 = 2;
              c6 = 1;
              obj4 = { game_version_id: user.versionId };
              const obj5 = { value: put(request), done: false };
              return obj5;
            }
          } else if (1 === c5) {
            c4 = 0;
            closure_2 = closure_3;
            const self = this;
            const self2 = this;
            const tmp20 = new closure_130_1(closure_130_2[9])(closure_2);
            throw tmp20;
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            return { value, done: true };
          } else {
            body = value.body;
            c4 = 0;
            const obj7 = { type: "ORBS_ARCADE_GAME_STATE_UPDATE", game_id: user.id, game_state: body };
            obj = closure_130_1(closure_130_2[6]);
            obj.dispatch(obj7);
            c6 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp22) {
          closure_3 = tmp22;
          if (0 === c4) {
            c6 = 3;
            throw tmp22;
          } else {
            c5 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
function postOrbsArcadeClaimRewards() {
  return obj(...arguments);
}
obj = function _postOrbsArcadeClaimRewards() {
  obj = _asyncToGenerator(async (arg0) => {
    let body = arg0;
    let c3 = 0;
    let c4 = 0;
    return (async (arg0, value) => {
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              return { value, done: true };
            } else {
              closure_2 = tmp;
              closure_1 = tmp4;
              body = undefined;
              const HTTP = HTTPUtils.HTTP;
              const post = HTTP.post;
              c3 = 1;
              c4 = 1;
              const obj4 = { url: Endpoints.ORBS_ARCADE_CLAIM_REWARDS(body), rejectWithError: false };
              const obj5 = { value: post(obj4), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            return { value, done: true };
          } else {
            body = value;
            c4 = 3;
            const obj7 = { value: obj.orbsArcadeClaimedRewardFromServer(body.body), done: true };
            obj = closure_130_0(closure_130_2[8]);
            return obj7;
          }
        } catch (tmp14) {
          c4 = 3;
          throw tmp14;
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _postOrbsArcadeClaimRewardsWithRetry() {
  let id;
  obj = _asyncToGenerator(async function(arg0, value) {
    let closure_1;
    let items;
    function isRetryableClaimError(status) {
      status = status.status;
      return null == status || status >= 500;
    }
    let closure_0 = arg0;
    if (c8 === 2) {
      c8 = 3;
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
      let c6;
      try {
        let closure_4;
        let closure_3;
        let id2;
        c8 = 2;
        if (0 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_4 = tmp;
            closure_3 = undefined;
            id2 = id.getId();
            value = null;
            c6 = 1;
            c7 = 3;
            c8 = 1;
            const obj5 = { value: postOrbsArcadeClaimRewards(closure_0), done: false };
            return obj5;
          }
        } else {
          if (1 === c7) {
            c6 = 0;
            closure_4 = closure_5;
            const self3 = this;
            let self2 = this;
            const tmp43 = new closure_132_1(closure_132_2[9])(closure_4);
            if (!isRetryableClaimError(tmp43)) {
              throw closure_4;
            }
          } else if (2 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else if (id2 !== closure_132_4.getId()) {
              const _Error = Error;
              const self = this;
              self2 = this;
              const error = new Error("Switched accounts before retrying an Orbs Arcade claim");
              throw error;
            } else {
              c6 = 2;
              c7 = 5;
              c8 = 1;
              const obj7 = { value: closure_132_16(closure_0), done: false };
              return obj7;
            }
          } else if (3 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 0;
              c8 = 3;
              const obj8 = { value, done: true };
              return obj8;
            } else {
              const obj4 = closure_132_0(closure_132_2[10]);
              if (obj4.hasOrbsArcadeUnclaimedRewards(value.gameState)) {
                c6 = 0;
              } else {
                c6 = 0;
                c8 = 3;
                const obj9 = { value, done: true };
                return obj9;
              }
            }
          } else if (4 === c7) {
            c6 = 0;
            if (null != value) {
              c8 = 3;
              const obj10 = { value, done: true };
              return obj10;
            } else {
              throw closure_5;
            }
          } else if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            const obj11 = { value, done: true };
            return obj11;
          } else {
            closure_3 = value;
            const obj12 = { gameState: closure_3.gameState, entitlements: items };
            id2 = 0;
            let entitlements;
            if (value != null) {
              entitlements = value.entitlements;
            }
            value = entitlements;
            if (entitlements == null) {
              value = [];
            }
            items = [];
            id2 = HermesBuiltin.arraySpread(items, value, id2);
            id2 = HermesBuiltin.arraySpread(items, closure_3.entitlements, id2);
            c6 = 0;
            c8 = 3;
            obj = { value: obj12, done: true };
            return obj;
          }
          const self4 = this;
          self2 = this;
          const promise = new Promise((arg0) => {
            obj = new closure_1_1(closure_1_2[5])(closure_1_8, closure_1_9);
            return obj.fail(arg0);
          });
          c7 = 2;
          c8 = 1;
          const obj13 = { value: promise, done: false };
          return obj13;
        }
      } catch (tmp53) {
        closure_5 = tmp53;
        if (0 === c6) {
          c8 = 3;
          throw tmp53;
        } else if (1 === tmp55) {
          c7 = 1;
        } else {
          c7 = 4;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _claimOrbsArcadeRewards() {
  let claimingRewards;
  let id;
  obj = _asyncToGenerator(async (gameId) => {
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (async function(arg0, value) {
      function postOrbsArcadeClaimRewardsWithRetry() {
        return closure_1_18(...arguments);
      }
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              gameState = undefined;
              userId = undefined;
              error = undefined;
              if (claimingRewards.isClaimingRewards(gameId)) {
                c6 = 3;
                return { value: null, done: true };
              } else {
                const obj6 = { type: "ORBS_ARCADE_CLAIM_REWARDS_BEGIN", gameId };
                const obj5 = DispatcherDefault;
                obj5.dispatch(obj6);
                userId = id.getId();
                c4 = 1;
                c5 = 2;
                c6 = 1;
                const obj7 = { value: postOrbsArcadeClaimRewardsWithRetry(gameId), done: false };
                return obj7;
              }
            }
          } else if (1 === tmp4) {
            c4 = 0;
            let closure_4 = error;
            const self = this;
            const self2 = this;
            error = new closure_130_1(closure_130_2[9])(closure_4);
            const obj8 = { type: "ORBS_ARCADE_CLAIM_REWARDS_FAILURE", userId, gameId, error };
            const tmp14 = new closure_130_1(closure_130_2[9])(closure_4);
            const obj3 = closure_130_1(closure_130_2[6]);
            obj3.dispatch(obj8);
            if (userId !== closure_130_4.getId()) {
              c6 = 3;
              return { value: null, done: true };
            } else {
              throw error;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            return { value, done: true };
          } else {
            gameState = value;
            const obj11 = { type: "ORBS_ARCADE_CLAIM_REWARDS_SUCCESS", userId, gameId, gameState: gameState.gameState };
            const obj10 = closure_130_1(closure_130_2[6]);
            obj10.dispatch(obj11);
            c4 = 0;
            let tmp6 = null;
            if (userId === closure_130_4.getId()) {
              tmp6 = gameState;
            }
            c6 = 3;
            return { value: tmp6, done: true };
          }
        } catch (tmp30) {
          error = tmp30;
          if (0 === c4) {
            c6 = 3;
            throw tmp30;
          } else {
            c5 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
let closure_7 = 30 * DurationsDefault.Millis.MINUTE;
const SECOND = DurationsDefault.Millis.SECOND;
let closure_9 = 5 * DurationsDefault.Millis.SECOND;
let result = 5 * DurationsDefault.Millis.SECOND;
new Backoff(result, 10 * DurationsDefault.Millis.MINUTE);
let c11 = 0;
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
      if (tmp4) {
        const orbsArcadeGames = tmp.orbsArcadeGames;
        tmp4 = !orbsArcadeGames.some((id) => {
          gameStateForGame = gameStateForGame.getGameStateForGame(id.id);
          let result = null != gameStateForGame;
          if (result) {
            obj = OrbsArcadeRewardUtils;
            result = obj.isOrbsArcadeEnrollmentOver(gameStateForGame);
          }
          return result;
        });
      }
      if (!tmp4) {
        fetchOrbsArcadeGames();
      }
    } else {
      const _Date = Date;
    }
  }
};
export const resetOrbsArcadeGame = function resetOrbsArcadeGame() {
  return obj(...arguments);
};
export const ensureOrbsArcadeEnrollment = function ensureOrbsArcadeEnrollment() {
  return obj(...arguments);
};
export const claimOrbsArcadeRewards = function claimOrbsArcadeRewards() {
  return obj(...arguments);
};
