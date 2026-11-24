// Module ID: 15721
// Function ID: 15722
// Name: resolveGameForProfile
// Dependencies: [5, 2164, 2140, 1071, 6845, 8578, 2]
// Exports: default

// Module 15721 (resolveGameForProfile)
import Constants from "Constants" /* 1071 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ApplicationStore from "ApplicationStore" /* 2164 */;
import GameStore from "GameStore" /* 2140 */;
import size from "module_2" /* 2 */;

let c5, c6;

let obj = function _resolveGameForProfile() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let c0;
    let c1;
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
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        let canonicalGameId2;
        let canonicalGameId;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_4 = tmp4;
            c0 = undefined;
            c1 = undefined;
            ({ applicationId: c0, gameId: c1 } = closure_0);
            canonicalGameId2 = undefined;
            canonicalGameId = undefined;
            c5 = 1;
            c6 = 1;
            return { value: "Path", done: true };
          }
        } else {
          let tmp11;
          if (1 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              if (c1 == null) {
                c1 = null;
              }
              canonicalGameId2 = c1;
              if (null == canonicalGameId2) {
                if (null != c0) {
                  if (!closure_132_3.isHydrated(c0)) {
                    const obj3 = closure_132_0(closure_132_1[4]);
                    const application = obj3.fetchApplication(c0);
                    c5 = 2;
                    c6 = 1;
                    const obj6 = { value: application.catch(closure_132_5), done: false };
                    return obj6;
                  }
                }
              }
              tmp11 = null;
              if (null == canonicalGameId2) {
                c6 = 3;
                const obj7 = { value: tmp11, done: true };
                return obj7;
              } else {
                const useGame = closure_132_0(closure_132_1[5]).useGame;
                const items = [canonicalGameId2];
                c5 = 3;
                c6 = 1;
                const obj8 = { value: useGame.fetchMany(items), done: false };
                return obj8;
              }
            }
          } else if (2 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj9 = { value, done: true };
              return obj9;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            const game = closure_132_4.getGame(canonicalGameId2);
            let c2 = game;
            if (game == null) {
              c2 = null;
            }
            tmp11 = c2;
          }
          canonicalGameId = closure_132_3.getApplication(c0);
          if (null == canonicalGameId) {
            c6 = 3;
            return { value: null, done: true };
          } else {
            canonicalGameId2 = canonicalGameId.getCanonicalGameId();
          }
        }
      } catch (tmp36) {
        c6 = 3;
        throw tmp36;
      }
    }
  });
  return obj(...arguments);
};
const NOOP = Constants.NOOP;
const result = size.fileFinishedImporting("modules/game_profile/resolveGameForProfile.tsx");

export default function resolveGameForProfile() {
  return obj(...arguments);
};
