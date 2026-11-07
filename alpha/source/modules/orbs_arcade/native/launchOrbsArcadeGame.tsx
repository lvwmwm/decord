// Module ID: 17352
// Function ID: 17353
// Name: launchOrbsArcadeGame
// Dependencies: [5, 2162, 6901, 17330, 1072, 6902, 1113, 5837, 17336, 6580, 5374, 6936, 11890, 17337, 11015, 11061, 5315, 572, 2]
// Exports: default

// Module 17352 (launchOrbsArcadeGame)
import DispatcherDefault from "Dispatcher" /* 572 */;
import Constants from "Constants" /* 1072 */;
import intl3 from "intl" /* 1113 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5374 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5837 */;
import ApplicationActionCreatorsDefault from "ApplicationActionCreators" /* 6936 */;
import OrbsArcadeActionCreators from "OrbsArcadeActionCreators" /* 17336 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ApplicationStore from "ApplicationStore" /* 2162 */;
import FramesStore from "FramesStore" /* 6901 */;
import OrbsArcadeStore from "OrbsArcadeStore" /* 17330 */;
import FramesConstants from "FramesConstants" /* 6902 */;
import size from "module_2" /* 2 */;

let c3, c5, claimableRewardIdsAtLaunch, closure_3, closure_4, closure_5, currentRun, frameId, id, navigation, runIdAtLaunch;

let c10;
let c9;
let metroImportAll;
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
        return { value: "HermesInternal", done: "HermesInternal" };
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
          if (closure_0 instanceof closure_130_1(closure_130_2[9])) {
            if (closure_0.code === closure_130_7.ORBS_ARCADE_GAME_VERSION_OUTDATED) {
              const obj2 = closure_130_0(closure_130_2[8]);
              const orbsArcadeGames = obj2.fetchOrbsArcadeGames();
              const intl2 = closure_130_0(closure_130_2[6]).intl;
              closure_130_11(intl2.string(closure_130_0(closure_130_2[6]).t.ZkQ7rP));
            }
            c6 = 3;
            return { value: false, done: true };
          }
          if (closure_0 instanceof closure_130_1(closure_130_2[9])) {
            if (closure_0.code === closure_130_7.ORBS_ARCADE_GAME_CLOSED) {
              const intl = closure_130_0(closure_130_2[6]).intl;
              closure_130_11(intl.string(closure_130_0(closure_130_2[6]).t["2rQ7Zf"]));
            }
          }
          closure_130_11();
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
  obj = _asyncToGenerator(async (arg0, analyticsLocations, surface) => {
    const user = arg0;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    return (async (arg0, value, arg2) => {
      let obj12;
      let obj14;
      let obj15;
      function ensureEnrollment() {
        return closure_1_12(...arguments);
      }
      if (c8 === 2) {
        c8 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        let c6;
        try {
          let applicationId;
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              return { value, done: true };
            } else {
              closure_4 = undefined;
              currentRun = undefined;
              claimableRewardIdsAtLaunch = undefined;
              runIdAtLaunch = undefined;
              id = undefined;
              frameId = undefined;
              value = undefined;
              navigation = undefined;
              applicationId = user.applicationId;
              if (null != applicationId) {
                const obj20 = ActionSheetActionCreatorsDefault;
                obj20.hideActionSheet();
                c6 = 1;
                if (null == application.getApplication(applicationId)) {
                  const items = [applicationId];
                  c7 = 2;
                  c8 = 1;
                  const obj7 = { value: obj15.fetchApplications(items, false), done: false };
                  obj15 = ApplicationActionCreatorsDefault;
                  return obj7;
                }
              }
              c8 = 3;
              return { value: "HermesInternal", done: "HermesInternal" };
            }
          } else if (1 === c7) {
            c6 = 0;
            closure_133_11();
            c8 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          } else if (2 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 0;
              c8 = 3;
              return { value, done: true };
            }
          } else if (3 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              return { value, done: true };
            } else {
              closure_4 = value;
              const tmp100 = closure_4;
              if (tmp100) {
                currentRun = closure_133_6.getGameStateForGame(user.id);
                const obj4 = closure_133_0(closure_133_2[13]);
                const orbsArcadeClaimableRewards = obj4.getOrbsArcadeClaimableRewards(user.rewards, currentRun);
                claimableRewardIdsAtLaunch = orbsArcadeClaimableRewards.map((id) => id.id);
                id = undefined;
                if (currentRun != null) {
                  currentRun = currentRun.currentRun;
                  if (currentRun != null) {
                    id = currentRun.id;
                  }
                }
                c3 = id;
                if (id == null) {
                  c3 = null;
                }
                runIdAtLaunch = c3;
                id = closure_133_5.getFrame(closure_133_10(applicationId, closure_133_9));
                let tmp39 = null != id;
                if (tmp39) {
                  const tmp44 = closure_133_8(id);
                  let customId;
                  if (tmp44 != null) {
                    customId = tmp44.customId;
                  }
                  tmp39 = customId !== user.id;
                }
                if (tmp39) {
                  const obj5 = closure_133_0(closure_133_2[14]);
                  obj5.leaveFrame(id.id);
                }
                const obj11 = { applicationId, surface: closure_133_9, launch: obj12, analyticsContext: obj14 };
                const _HermesInternal = HermesInternal;
                obj12 = { customId: user.id, path: "/" + user.id + "/" };
                const launchFrame = closure_133_1(closure_133_2[15]).launchFrame;
                closure_133_1(closure_133_2[15]);
                obj14 = { isStart: true, analyticsLocations };
                value = launchFrame(obj11);
                const obj9 = closure_133_1(closure_133_2[15]);
                obj9.demoteMainFrame(closure_133_10(applicationId, closure_133_9));
                c6 = 2;
                c7 = 5;
                c8 = 1;
                return { value, done: false };
              }
            }
          } else if (4 === c7) {
            c6 = 0;
            c8 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          } else if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            return { value, done: true };
          } else {
            frameId = value;
            c6 = 0;
            const obj19 = closure_133_0(closure_133_2[16]);
            navigation = obj19.getRootNavigationRef();
            if (null != navigation) {
              if (navigation.isReady()) {
                obj = { frameId, gameId: user.id, claimableRewardIdsAtLaunch, runIdAtLaunch, surface };
                navigation.navigate("orbs-arcade-game", obj);
              }
            }
            const obj2 = closure_133_0(closure_133_2[14]);
            obj2.leaveFrame(frameId);
            closure_133_11();
            c8 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
          c6 = 0;
          const obj13 = closure_133_0(closure_133_2[12]);
          if (obj13.canLaunchContextlessFrame(closure_133_4.getApplication(applicationId))) {
            c7 = 3;
            c8 = 1;
            const obj18 = { value: ensureEnrollment(user), done: false };
            return obj18;
          } else {
            closure_133_11();
          }
        } catch (tmp87) {
          if (0 === c6) {
            c8 = 3;
            throw tmp87;
          } else if (1 === tmp88) {
            c7 = 1;
          } else {
            c7 = 4;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _launchOrbsArcadeGame() {
  let isLaunchingAnyGame;
  obj = _asyncToGenerator(async (arg0, arg1, arg2) => {
    const user = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    return (async (arg0, value, arg2) => {
      function launchGame() {
        return closure_1_13(...arguments);
      }
      if (c8 === 2) {
        c8 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              return { value, done: true };
            } else {
              closure_4 = tmp;
              closure_3 = tmp4;
              if (!isLaunchingAnyGame.isLaunchingAnyGame) {
                const obj5 = { type: "ORBS_ARCADE_LAUNCH_GAME_BEGIN", gameId: user.id };
                const obj8 = DispatcherDefault;
                obj8.dispatch(obj5);
                c6 = 1;
                c7 = 2;
                c8 = 1;
                const obj7 = { value: launchGame(user, tmp35, tmp36), done: false };
                return obj7;
              }
            }
          } else if (1 === c7) {
            c6 = 0;
            const obj9 = { type: "ORBS_ARCADE_LAUNCH_GAME_END", gameId: user.id };
            const obj6 = closure_132_1(closure_132_2[17]);
            obj6.dispatch(obj9);
            throw closure_5;
          } else if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            const obj10 = { type: "ORBS_ARCADE_LAUNCH_GAME_END", gameId: user.id };
            const obj3 = closure_132_1(closure_132_2[17]);
            obj3.dispatch(obj10);
            c8 = 3;
            return { value, done: true };
          } else {
            c6 = 0;
            const obj12 = { type: "ORBS_ARCADE_LAUNCH_GAME_END", gameId: user.id };
            obj = closure_132_1(closure_132_2[17]);
            obj.dispatch(obj12);
          }
          c8 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        } catch (tmp28) {
          closure_5 = tmp28;
          if (0 === c6) {
            c8 = 3;
            throw tmp28;
          } else {
            c7 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
const AbortCodes = Constants.AbortCodes;
({ getFrameLaunchParams: metroImportAll, MAIN_SURFACE: c9, makeFrameId: c10 } = FramesConstants);
const result = size.fileFinishedImporting("modules/orbs_arcade/native/launchOrbsArcadeGame.tsx");

export default function launchOrbsArcadeGame() {
  return obj(...arguments);
};
