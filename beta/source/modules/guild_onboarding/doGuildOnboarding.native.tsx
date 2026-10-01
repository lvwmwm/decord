// Module ID: 6516
// Function ID: 6517
// Name: doGuildOnboarding
// Dependencies: [5, 17, 4655, 6517, 6518, 1074, 6519, 4800, 5039, 5832, 6520, 1397, 1880, 6524, 6525, 6526, 6542, 1981, 1101, 2]
// Exports: default, discardOnboardingPromise, isOnboardingActiveForGuild

// Module 6516 (doGuildOnboarding)
import react_native from "react-native" /* 17 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import react_nativeDefault from "react-native" /* 1880 */;
import asyncRequire from "asyncRequire" /* 1981 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5039 */;
import GuildOnboardingConstants from "GuildOnboardingConstants" /* 6518 */;
import _mod6519 from "module_6519" /* 6519 */;
import GuildOnboardingActionCreatorsDefault from "GuildOnboardingActionCreators" /* 6526 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4655 */;
import GuildOnboardingStore from "GuildOnboardingStore" /* 6517 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let ImageManager, _require, c4, closure_3, closure_4;

let c9;
let metroImportAll;
function getBaseAnimationData() {
  return JSON.parse(JSON.stringify(_mod6519));
}
let obj = function _doGuildOnboarding() {
  obj = _asyncToGenerator(async (arg0) => {
    let guildId = arg0;
    let c5 = 0;
    let c6 = 0;
    const iter = (async (arg0, value) => {
      let obj11;
      let obj6;
      function fetchLandingAsset() {
        return closure_1_14(...arguments);
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
          return { value: "HermesInternal", done: null };
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
              closure_3 = tmp;
              closure_4 = tmp4;
              guildId = undefined;
              guildId = guildId.guildId;
              closure_1 = undefined;
              c5 = 1;
              c6 = 1;
              return { value: "flex", done: true };
            }
          } else if (1 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              const obj9 = closure_131_1(closure_131_2[7]);
              obj9.hideActionSheet();
              const obj10 = closure_131_1(closure_131_2[8]);
              obj10.popAll();
              c5 = 2;
              c6 = 1;
              const obj5 = { value: obj11.waitForGuild(guildId), done: false };
              obj11 = closure_131_0(closure_131_2[9]);
              return obj5;
            }
          } else {
            if (2 === c5) {
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 3;
                return { value, done: true };
              } else {
                closure_1 = value;
                const features2 = closure_1.features;
                let hasItem = features2.has(closure_131_8.GUILD_ONBOARDING);
                if (hasItem) {
                  const features = closure_1.features;
                  hasItem = features.has(closure_131_8.COMMUNITY);
                }
                if (hasItem) {
                  c5 = 3;
                  c6 = 1;
                  const obj8 = { value: obj6.maybeFetchOnboardingPrompts(guildId), done: false };
                  obj6 = closure_131_0(closure_131_2[10]);
                  return obj8;
                }
              }
            } else if (3 === c5) {
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 3;
                return { value, done: true };
              } else if (closure_131_6.shouldShowOnboarding(guildId)) {
                closure_2 = closure_131_12;
                closure_1 = guildId;
                c5 = 4;
                c6 = 1;
                const obj13 = { value: fetchLandingAsset(closure_1), done: false };
                return obj13;
              }
            } else if (4 === c5) {
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 3;
                return { value, done: true };
              } else {
                closure_2[closure_1] = value;
                c5 = 5;
                c6 = 1;
                const obj15 = { value: closure_131_15(closure_1.id), done: false };
                return obj15;
              }
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            }
            c6 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp41) {
          c6 = 3;
          throw tmp41;
        }
      }
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
obj = function _fetchLandingAsset() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let tmp11;
    let closure_0 = arg0;
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
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c3;
      try {
        let closure_1;
        let closure_2;
        let guildIconSource;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_1 = undefined;
            closure_2 = undefined;
            const obj4 = { id: null, icon: null, canAnimate: false, size: 96 / react_nativeDefault() };
            ({ id: obj9.id, icon: obj9.icon } = closure_0);
            const getGuildIconSource = AvatarUtilsDefault.getGuildIconSource;
            guildIconSource = getGuildIconSource(obj4);
            c3 = 1;
            const ImageManager2 = ImageManager.ImageManager;
            c4 = 2;
            c5 = 1;
            const obj5 = { value: ImageManager2.getAvatarBase64(guildIconSource), done: false };
            return obj5;
          }
        } else if (1 === c4) {
          c3 = 0;
          c5 = 3;
          const obj6 = { value: closure_130_10(), done: true };
          return obj6;
        } else if (2 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            closure_1 = value;
            ImageManager = closure_130_4.ImageManager;
            c4 = 3;
            c5 = 1;
            const obj8 = { value: ImageManager.getDominantColors(guildIconSource), done: false };
            return obj8;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          const obj17 = { value, done: true };
          return obj17;
        } else {
          closure_2 = value;
          const _HermesInternal = HermesInternal;
          const tmp9 = closure_130_1(closure_130_2[13]);
          c3 = 0;
          c5 = 3;
          obj = { value: tmp9(tmp11, "data:image/png;base64," + closure_1, closure_2[0]), done: true };
          tmp11 = closure_130_10();
          return obj;
        }
      } catch (tmp20) {
        if (0 === c3) {
          c5 = 3;
          throw tmp20;
        } else {
          c4 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
function openAndWaitForOnboarding(guildId) {
  _require = guildId;
  obj = require("doGuildOnboardingHelpers");
  const result = obj.waitForOnboardingCompletion(guildId);
  result.then(() => {
    const tmp = closure_2_11;
    if (null != closure_2_11[closure_0]) {
      closure_2_11[closure_0]();
    }
    delete tmp[closure_0];
    obj = GuildOnboardingActionCreatorsDefault;
    obj.finishOnboarding(closure_0);
  });
  const promise = new Promise((arg0) => {
    if (null == closure_11[guildId]) {
      tmp[guildId] = arg0;
    }
    obj = ModalActionCreatorsDefault;
    const obj2 = {
      guildId,
      backShouldLeaveGuild: true,
      onFinish() {

      },
      landingAnimation: closure_12[guildId],
      isFirstOpen: true
    };
    const pushLazyResult = obj.pushLazy(asyncRequire(6542, dependencyMap.paths), obj2, closure_7);
    pushLazyResult.then(() => {
      if (guildId.getGuildId() !== closure_1_0) {
        obj = closure_0(dependencyMap[18]);
        obj.transitionTo(closure_2_9.CHANNEL(tmp));
      }
    });
  });
  return promise;
}
const NativeModules = react_native.NativeModules;
let closure_7 = GuildOnboardingConstants.GUILD_ONBOARDING_MODAL_KEY;
({ GuildFeatures: metroImportAll, Routes: c9 } = Constants);
let closure_11 = {};
let closure_12 = {};
let result = size.fileFinishedImporting("modules/guild_onboarding/doGuildOnboarding.native.tsx");

export default function doGuildOnboarding() {
  return obj(...arguments);
};
export { openAndWaitForOnboarding };
export const discardOnboardingPromise = function discardOnboardingPromise(id) {
  delete closure_11[id];
};
export const isOnboardingActiveForGuild = function isOnboardingActiveForGuild(arg0) {
  return null != closure_11[arg0];
};
