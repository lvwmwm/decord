// Module ID: 16454
// Function ID: 16455
// Name: launchOrbsArcadeGame
// Dependencies: [5, 2045, 16429, 1087, 6808, 1128, 5695, 16434, 6407, 6841, 11426, 16435, 10799, 5242, 5183, 10798, 584, 2]
// Exports: default

// Module 16454 (launchOrbsArcadeGame)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1087 */;
import intl3 from "intl" /* 1128 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5695 */;
import ApplicationActionCreatorsDefault from "ApplicationActionCreators" /* 6841 */;
import OrbsArcadeActionCreators from "OrbsArcadeActionCreators" /* 16434 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ApplicationStore from "ApplicationStore" /* 2045 */;
import OrbsArcadeStore from "OrbsArcadeStore" /* 16429 */;
import FramesConstants from "FramesConstants" /* 6808 */;
import size from "module_2" /* 2 */;

let claimableRewardIdsAtLaunch, closure_3, closure_4, frameId, navigation;

let metroImportAll;
let metroImportDefault;
function showLaunchError() {
  let stringResult = arg0;
  if (arg0 === undefined) {
    const intl = intl3.intl;
    stringResult = intl.string(intl3.t.CKsXk3);
  }
  obj = ToastActionCreatorsDefault;
  obj.open("ORBS_ARCADE_LAUNCH_ERROR", { text: stringResult, variant: "critical" });
}
let obj = function _ensureEnrollment() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let obj3;
    let closure_0 = arg0;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj4 = { value, done: true };
        return obj4;
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
            const obj5 = { value, done: true };
            return obj5;
          } else {
            let closure_2 = tmp;
            let closure_1 = tmp4;
            c4 = 1;
            c5 = 2;
            c6 = 1;
            const obj6 = { value: obj3.ensureOrbsArcadeEnrollment(closure_0), done: false };
            obj3 = OrbsArcadeActionCreators;
            return obj6;
          }
        } else if (1 === c5) {
          c4 = 0;
          closure_0 = closure_3;
          if (closure_0 instanceof closure_130_1(closure_130_2[8])) {
            if (closure_0.code === closure_130_6.ORBS_ARCADE_GAME_VERSION_OUTDATED) {
              const obj2 = closure_130_0(closure_130_2[7]);
              const orbsArcadeGames = obj2.fetchOrbsArcadeGames();
              const intl2 = closure_130_0(closure_130_2[5]).intl;
              closure_130_9(intl2.string(closure_130_0(closure_130_2[5]).t.ZkQ7rP));
            }
            c6 = 3;
            return { value: false, done: true };
          }
          if (closure_0 instanceof closure_130_1(closure_130_2[8])) {
            if (closure_0.code === closure_130_6.ORBS_ARCADE_GAME_CLOSED) {
              const intl = closure_130_0(closure_130_2[5]).intl;
              closure_130_9(intl.string(closure_130_0(closure_130_2[5]).t["2rQ7Zf"]));
            }
          }
          closure_130_9();
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          c4 = 0;
          c6 = 3;
          return { value: true, done: true };
        }
      } catch (tmp48) {
        closure_3 = tmp48;
        if (0 === c4) {
          c6 = 3;
          throw tmp48;
        } else {
          c5 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _launchGame() {
  let application;
  obj = _asyncToGenerator(async (arg0, analyticsLocations) => {
    const user = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (async (arg0, value) => {
      let obj13;
      let obj14;
      function ensureEnrollment() {
        return closure_1_10(...arguments);
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
        let c4;
        try {
          let applicationId;
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              closure_2 = tmp4;
              closure_3 = undefined;
              frameId = undefined;
              claimableRewardIdsAtLaunch = undefined;
              value = undefined;
              navigation = undefined;
              applicationId = user.applicationId;
              if (null != applicationId) {
                c4 = 1;
                if (null == application.getApplication(applicationId)) {
                  const items = [applicationId];
                  c5 = 2;
                  c6 = 1;
                  const obj7 = { value: obj14.fetchApplications(items, false), done: false };
                  obj14 = ApplicationActionCreatorsDefault;
                  return obj7;
                }
              }
              c6 = 3;
              return { value: "IconComponent", done: null };
            }
          } else if (1 === c5) {
            c4 = 0;
            closure_131_9();
            c6 = 3;
            return { value: "IconComponent", done: null };
          } else if (2 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              c6 = 3;
              return { value, done: true };
            }
          } else if (3 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              closure_3 = value;
              const tmp71 = closure_3;
              if (tmp71) {
                const obj4 = closure_131_0(closure_131_2[11]);
                const orbsArcadeClaimableRewards = obj4.getOrbsArcadeClaimableRewards(user.rewards, closure_131_5.getGameStateForGame(user.id));
                claimableRewardIdsAtLaunch = orbsArcadeClaimableRewards.map((id) => id.id);
                c4 = 2;
                const obj11 = { applicationId, surface: closure_131_7, analyticsContext: obj13 };
                obj13 = { isStart: true, analyticsLocations };
                const obj5 = closure_131_1(closure_131_2[12]);
                value = obj5.launchFrame(obj11);
                const obj8 = closure_131_1(closure_131_2[12]);
                obj8.demoteMainFrame(closure_131_8(applicationId, closure_131_7));
                c5 = 5;
                c6 = 1;
                return { value, done: false };
              }
            }
          } else if (4 === c5) {
            c4 = 0;
            c6 = 3;
            return { value: "IconComponent", done: null };
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            return { value, done: true };
          } else {
            frameId = value;
            c4 = 0;
            const obj18 = closure_131_1(closure_131_2[13]);
            obj18.hideActionSheet();
            const obj19 = closure_131_0(closure_131_2[14]);
            navigation = obj19.getRootNavigationRef();
            if (null != navigation) {
              if (navigation.isReady()) {
                obj = { frameId, gameId: user.id, claimableRewardIdsAtLaunch };
                navigation.navigate("orbs-arcade-game", obj);
              }
            }
            const obj2 = closure_131_0(closure_131_2[15]);
            obj2.leaveFrame(frameId);
            closure_131_9();
            c6 = 3;
            return { value: "IconComponent", done: null };
          }
          c4 = 0;
          const obj12 = closure_131_0(closure_131_2[10]);
          if (obj12.canLaunchContextlessFrame(closure_131_4.getApplication(applicationId))) {
            c5 = 3;
            c6 = 1;
            const obj17 = { value: ensureEnrollment(user), done: false };
            return obj17;
          } else {
            closure_131_9();
          }
        } catch (tmp56) {
          if (0 === c4) {
            c6 = 3;
            throw tmp56;
          } else if (1 === tmp57) {
            c5 = 1;
          } else {
            c5 = 4;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _launchOrbsArcadeGame() {
  let launchingGame;
  obj = _asyncToGenerator(async (arg0, arg1) => {
    const user = arg0;
    let closure_1 = arg1;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (async (arg0, value) => {
      function launchGame() {
        return closure_1_11(...arguments);
      }
      if (c7 === 2) {
        c7 = 3;
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
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              closure_3 = tmp;
              closure_2 = tmp4;
              const tmp35 = closure_1;
              if (!launchingGame.isLaunchingGame(user.id)) {
                const obj5 = { type: "ORBS_ARCADE_LAUNCH_GAME_BEGIN", gameId: user.id };
                const obj8 = DispatcherDefault;
                obj8.dispatch(obj5);
                c5 = 1;
                c6 = 2;
                c7 = 1;
                const obj7 = { value: launchGame(user, tmp35), done: false };
                return obj7;
              }
            }
          } else if (1 === c6) {
            c5 = 0;
            const obj9 = { type: "ORBS_ARCADE_LAUNCH_GAME_END", gameId: user.id };
            const obj6 = closure_131_1(closure_131_2[16]);
            obj6.dispatch(obj9);
            throw closure_4;
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            const obj10 = { type: "ORBS_ARCADE_LAUNCH_GAME_END", gameId: user.id };
            const obj3 = closure_131_1(closure_131_2[16]);
            obj3.dispatch(obj10);
            c7 = 3;
            return { value, done: true };
          } else {
            c5 = 0;
            const obj12 = { type: "ORBS_ARCADE_LAUNCH_GAME_END", gameId: user.id };
            obj = closure_131_1(closure_131_2[16]);
            obj.dispatch(obj12);
          }
          c7 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp28) {
          closure_4 = tmp28;
          if (0 === c5) {
            c7 = 3;
            throw tmp28;
          } else {
            c6 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
const AbortCodes = Constants.AbortCodes;
({ MAIN_SURFACE: metroImportDefault, makeFrameId: metroImportAll } = FramesConstants);
const result = size.fileFinishedImporting("modules/orbs_arcade/native/launchOrbsArcadeGame.tsx");

export default function launchOrbsArcadeGame() {
  return obj(...arguments);
};
