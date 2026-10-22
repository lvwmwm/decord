// Module ID: 16338
// Function ID: 16339
// Name: launchOrbsArcadeGame
// Dependencies: [5, 2045, 16316, 6761, 5649, 1128, 6794, 11318, 10743, 5196, 5137, 10742, 584, 2]
// Exports: default

// Module 16338 (launchOrbsArcadeGame)
import DispatcherDefault from "Dispatcher" /* 584 */;
import intl2 from "intl" /* 1128 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5649 */;
import ApplicationActionCreatorsDefault from "ApplicationActionCreators" /* 6794 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ApplicationStore from "ApplicationStore" /* 2045 */;
import OrbsArcadeStore from "OrbsArcadeStore" /* 16316 */;
import FramesConstants from "FramesConstants" /* 6761 */;
import size from "module_2" /* 2 */;

let analyticsLocations, closure_2, closure_3, closure_4, frameId, navigation;

let metroImportDefault;
let metroRequire;
function showLaunchError() {
  let intl;
  obj = { text: intl.string(intl2.t.CKsXk3), variant: "critical" };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl2.intl;
  open("ORBS_ARCADE_LAUNCH_ERROR", obj);
}
let obj = function _launchGame() {
  let application;
  obj = _asyncToGenerator(async (analyticsLocations, arg1) => {
    let closure_1 = arg1;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (async (arg0, value) => {
      let obj11;
      let obj13;
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
              analyticsLocations = closure_1;
              frameId = undefined;
              value = undefined;
              navigation = undefined;
              applicationId = analyticsLocations.applicationId;
              if (null != applicationId) {
                c4 = 1;
                if (null == application.getApplication(applicationId)) {
                  const items = [applicationId];
                  c5 = 2;
                  c6 = 1;
                  const obj7 = { value: obj11.fetchApplications(items, false), done: false };
                  obj11 = ApplicationActionCreatorsDefault;
                  return obj7;
                }
              }
              c6 = 3;
              return { value: "IconComponent", done: null };
            }
          } else if (1 === c5) {
            c4 = 0;
            closure_131_8();
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
            const obj15 = closure_131_1(closure_131_2[9]);
            obj15.hideActionSheet();
            const obj16 = closure_131_0(closure_131_2[10]);
            navigation = obj16.getRootNavigationRef();
            if (null != navigation) {
              if (navigation.isReady()) {
                obj = { frameId };
                navigation.navigate("orbs-arcade-game", obj);
              }
            }
            const obj2 = closure_131_0(closure_131_2[11]);
            obj2.leaveFrame(frameId);
            closure_131_8();
            c6 = 3;
            return { value: "IconComponent", done: null };
          }
          c4 = 0;
          const obj5 = closure_131_0(closure_131_2[7]);
          if (obj5.canLaunchContextlessFrame(closure_131_4.getApplication(applicationId))) {
            c4 = 2;
            const obj12 = { applicationId, surface: closure_131_6, analyticsContext: obj13 };
            obj13 = { isStart: true, analyticsLocations };
            const obj6 = closure_131_1(closure_131_2[8]);
            value = obj6.launchFrame(obj12);
            const obj9 = closure_131_1(closure_131_2[8]);
            obj9.demoteMainFrame(closure_131_7(applicationId, closure_131_6));
            c5 = 4;
            c6 = 1;
            return { value, done: false };
          } else {
            closure_131_8();
          }
        } catch (tmp46) {
          if (0 === c4) {
            c6 = 3;
            throw tmp46;
          } else if (1 === tmp47) {
            c5 = 1;
          } else {
            c5 = 3;
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
        return closure_1_9(...arguments);
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
            const obj6 = closure_131_1(closure_131_2[12]);
            obj6.dispatch(obj9);
            throw closure_4;
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            const obj10 = { type: "ORBS_ARCADE_LAUNCH_GAME_END", gameId: user.id };
            const obj3 = closure_131_1(closure_131_2[12]);
            obj3.dispatch(obj10);
            c7 = 3;
            return { value, done: true };
          } else {
            c5 = 0;
            const obj12 = { type: "ORBS_ARCADE_LAUNCH_GAME_END", gameId: user.id };
            obj = closure_131_1(closure_131_2[12]);
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
({ MAIN_SURFACE: metroRequire, makeFrameId: metroImportDefault } = FramesConstants);
const result = size.fileFinishedImporting("modules/orbs_arcade/native/launchOrbsArcadeGame.tsx");

export default function launchOrbsArcadeGame() {
  return obj(...arguments);
};
