// Module ID: 5053
// Function ID: 43721
// Name: getBaseAnimationData
// Dependencies: [5, 27, 3947, 5054, 5055, 653, 5056, 4098, 4337, 5048, 5057, 1392, 1825, 5061, 5062, 5063, 5081, 1934, 1198, 2]
// Exports: default, discardOnboardingPromise, isOnboardingActiveForGuild

// Module 5053 (getBaseAnimationData)
import closure_3 from "ME";
import { NativeModules } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import { GUILD_ONBOARDING_MODAL_KEY as closure_7 } from "GUILD_ONBOARDING_MODAL_KEY";
import ME from "ME";

let closure_8;
let closure_9;
const require = arg1;
function getBaseAnimationData() {
  return JSON.parse(JSON.stringify(require(5056) /* items */));
}
async function _doGuildOnboarding(arg0, arg1) {
  let iter = (function*(guildId) {
    guildId = guildId.guildId;
    yield undefined;
    outer2_1(outer2_2[7]).hideActionSheet();
    const obj = outer2_1(outer2_2[7]);
    outer2_1(outer2_2[8]).popAll();
    const obj2 = outer2_1(outer2_2[8]);
    const tmp4 = yield outer2_0(outer2_2[9]).waitForGuild(guildId);
    const features = tmp4.features;
    let hasItem = features.has(outer2_8.GUILD_ONBOARDING);
    if (hasItem) {
      const features2 = tmp4.features;
      hasItem = features2.has(outer2_8.COMMUNITY);
    }
    if (hasItem) {
      yield outer2_0(outer2_2[10]).maybeFetchOnboardingPrompts(guildId);
      if (outer2_6.shouldShowOnboarding(guildId)) {
        outer2_11[guildId] = yield (function fetchLandingAsset(arg0) {
          return outer3_14(...arguments);
        })(tmp4);
        yield outer2_15(tmp4.id);
        const tmp11 = outer2_11;
      }
      const obj4 = outer2_0(outer2_2[10]);
    }
  })();
  iter.next();
  return iter;
}
async function _fetchLandingAsset(arg0, arg1) {
  let obj = outer2_1(outer2_2[11]);
  obj = { id: arg0.id, icon: arg0.icon, canAnimate: false, size: 96 / outer2_1(outer2_2[12])() };
  const guildIconSource = obj.getGuildIconSource(obj);
  const ImageManager = outer2_4.ImageManager;
  const ImageManager2 = outer2_4.ImageManager;
  const tmp2 = yield ImageManager.getAvatarBase64(guildIconSource);
  const tmp3 = yield ImageManager2.getDominantColors(guildIconSource);
  const tmp4 = outer2_1(outer2_2[13]);
  return tmp4(outer2_12(), "data:image/png;base64," + tmp2, tmp3[0]);
}
function openAndWaitForOnboarding(arg0) {
  let closure_0 = arg0;
  (function waitForOnboardingCompleted(arg0) {
    const callback = arg0;
    const result = callback(outer1_2[14]).waitForOnboardingCompletion(arg0);
    result.then(() => {
      if (null != outer2_10[closure_0]) {
        tmp3();
      }
      delete tmp[tmp2];
      outer2_1(outer2_2[15]).finishOnboarding(closure_0);
    });
  })(arg0);
  return new Promise((arg0) => {
    if (null == outer1_10[callback]) {
      outer1_10[callback] = arg0;
    }
    let obj = outer1_1(outer1_2[8]);
    obj = {
      guildId: callback,
      backShouldLeaveGuild: true,
      onFinish(nativeEvent, arg1, arg2) {

      },
      landingAnimation: outer1_11[callback],
      isFirstOpen: true
    };
    obj.pushLazy(callback(outer1_2[17])(outer1_2[16], outer1_2.paths), obj, outer1_7).then(() => {
      if (outer2_5.getGuildId() !== outer1_0) {
        callback(outer2_2[18]).transitionTo(outer2_9.CHANNEL(outer1_0));
        const obj = callback(outer2_2[18]);
      }
    });
  });
}
({ GuildFeatures: closure_8, Routes: closure_9 } = ME);
let closure_10 = {};
let closure_11 = {};
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_onboarding/doGuildOnboarding.native.tsx");

export default function doGuildOnboarding() {
  return _doGuildOnboarding(...arguments);
};
export { openAndWaitForOnboarding };
export const discardOnboardingPromise = function discardOnboardingPromise(id) {
  delete tmp2[tmp];
};
export const isOnboardingActiveForGuild = function isOnboardingActiveForGuild(arg0) {
  return null != table[arg0];
};
