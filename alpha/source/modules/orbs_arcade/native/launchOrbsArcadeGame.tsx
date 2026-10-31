// Module ID: 17038
// Function ID: 17039
// Name: launchOrbsArcadeGame
// Dependencies: [5, 2038, 6846, 17010, 1072, 6847, 1113, 5712, 17016, 6447, 5258, 6881, 11726, 17017, 10927, 10928, 5199, 572, 2]
// Exports: default

// Module 17038 (launchOrbsArcadeGame)
import DispatcherDefault from "Dispatcher" /* 572 */;
import Constants from "Constants" /* 1072 */;
import intl3 from "intl" /* 1113 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5712 */;
import ApplicationActionCreatorsDefault from "ApplicationActionCreators" /* 6881 */;
import OrbsArcadeActionCreators from "OrbsArcadeActionCreators" /* 17016 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ApplicationStore from "ApplicationStore" /* 2038 */;
import FramesStore from "FramesStore" /* 6846 */;
import OrbsArcadeStore from "OrbsArcadeStore" /* 17010 */;
import FramesConstants from "FramesConstants" /* 6847 */;
import size from "module_2" /* 2 */;

let claimableRewardIdsAtLaunch, closure_3, closure_4, frameId, id, navigation;

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
  obj = _asyncToGenerator(async (arg0, analyticsLocations) => {
    const user = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (async (arg0, value) => {
      let obj12;
      let obj14;
      let obj15;
      function ensureEnrollment() {
        return closure_1_12(...arguments);
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
              claimableRewardIdsAtLaunch = undefined;
              id = undefined;
              frameId = undefined;
              value = undefined;
              navigation = undefined;
              applicationId = user.applicationId;
              if (null != applicationId) {
                const obj20 = ActionSheetActionCreatorsDefault;
                obj20.hideActionSheet();
                c4 = 1;
                if (null == application.getApplication(applicationId)) {
                  const items = [applicationId];
                  c5 = 2;
                  c6 = 1;
                  const obj7 = { value: obj15.fetchApplications(items, false), done: false };
                  obj15 = ApplicationActionCreatorsDefault;
                  return obj7;
                }
              }
              c6 = 3;
              return { value: "HermesInternal", done: "HermesInternal" };
            }
          } else if (1 === c5) {
            c4 = 0;
            closure_131_11();
            c6 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
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
              const tmp93 = closure_3;
              if (tmp93) {
                const obj4 = closure_131_0(closure_131_2[13]);
                const orbsArcadeClaimableRewards = obj4.getOrbsArcadeClaimableRewards(user.rewards, closure_131_6.getGameStateForGame(user.id));
                claimableRewardIdsAtLaunch = orbsArcadeClaimableRewards.map((id) => id.id);
                id = closure_131_5.getFrame(closure_131_10(applicationId, closure_131_9));
                let tmp32 = null != id;
                if (tmp32) {
                  const tmp37 = closure_131_8(id);
                  let customId;
                  if (tmp37 != null) {
                    customId = tmp37.customId;
                  }
                  tmp32 = customId !== user.id;
                }
                if (tmp32) {
                  const obj5 = closure_131_0(closure_131_2[14]);
                  obj5.leaveFrame(id.id);
                }
                const obj11 = { applicationId, surface: closure_131_9, launch: obj12, analyticsContext: obj14 };
                const _HermesInternal = HermesInternal;
                obj12 = { customId: user.id, path: "/" + user.id + "/" };
                const launchFrame = closure_131_1(closure_131_2[15]).launchFrame;
                closure_131_1(closure_131_2[15]);
                obj14 = { isStart: true, analyticsLocations };
                value = launchFrame(obj11);
                const obj9 = closure_131_1(closure_131_2[15]);
                obj9.demoteMainFrame(closure_131_10(applicationId, closure_131_9));
                c4 = 2;
                c5 = 5;
                c6 = 1;
                return { value, done: false };
              }
            }
          } else if (4 === c5) {
            c4 = 0;
            c6 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
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
            const obj19 = closure_131_0(closure_131_2[16]);
            navigation = obj19.getRootNavigationRef();
            if (null != navigation) {
              if (navigation.isReady()) {
                obj = { frameId, gameId: user.id, claimableRewardIdsAtLaunch };
                navigation.navigate("orbs-arcade-game", obj);
              }
            }
            const obj2 = closure_131_0(closure_131_2[14]);
            obj2.leaveFrame(frameId);
            closure_131_11();
            c6 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
          c4 = 0;
          const obj13 = closure_131_0(closure_131_2[12]);
          if (obj13.canLaunchContextlessFrame(closure_131_4.getApplication(applicationId))) {
            c5 = 3;
            c6 = 1;
            const obj18 = { value: ensureEnrollment(user), done: false };
            return obj18;
          } else {
            closure_131_11();
          }
        } catch (tmp80) {
          if (0 === c4) {
            c6 = 3;
            throw tmp80;
          } else if (1 === tmp81) {
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
  let isLaunchingAnyGame;
  obj = _asyncToGenerator(async (arg0, arg1) => {
    const user = arg0;
    let closure_1 = arg1;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (async (arg0, value) => {
      function launchGame() {
        return closure_1_13(...arguments);
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
              if (!isLaunchingAnyGame.isLaunchingAnyGame) {
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
            const obj6 = closure_131_1(closure_131_2[17]);
            obj6.dispatch(obj9);
            throw closure_4;
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            const obj10 = { type: "ORBS_ARCADE_LAUNCH_GAME_END", gameId: user.id };
            const obj3 = closure_131_1(closure_131_2[17]);
            obj3.dispatch(obj10);
            c7 = 3;
            return { value, done: true };
          } else {
            c5 = 0;
            const obj12 = { type: "ORBS_ARCADE_LAUNCH_GAME_END", gameId: user.id };
            obj = closure_131_1(closure_131_2[17]);
            obj.dispatch(obj12);
          }
          c7 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
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
({ getFrameLaunchParams: metroImportAll, MAIN_SURFACE: c9, makeFrameId: c10 } = FramesConstants);
const result = size.fileFinishedImporting("modules/orbs_arcade/native/launchOrbsArcadeGame.tsx");

export default function launchOrbsArcadeGame() {
  return obj(...arguments);
};
