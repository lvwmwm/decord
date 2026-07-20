// Module ID: 5322
// Function ID: 45245
// Name: getBaseAnimationData
// Dependencies: []
// Exports: default, discardOnboardingPromise, isOnboardingActiveForGuild

// Module 5322 (getBaseAnimationData)
function getBaseAnimationData() {
  return JSON.parse(JSON.stringify(arg1(dependencyMap[6])));
}
async function _doGuildOnboarding(arg0, arg1) {
  const fn = function*(guildId) {
    guildId = guildId.guildId;
    yield undefined;
    callback2(closure_2[7]).hideActionSheet();
    const obj = callback2(closure_2[7]);
    callback2(closure_2[8]).popAll();
    const obj2 = callback2(closure_2[8]);
    const tmp4 = yield callback(closure_2[9]).waitForGuild(guildId);
    const features = tmp4.features;
    let hasItem = features.has(constants.GUILD_ONBOARDING);
    if (hasItem) {
      const features2 = tmp4.features;
      hasItem = features2.has(constants.COMMUNITY);
    }
    if (hasItem) {
      yield callback(closure_2[10]).maybeFetchOnboardingPrompts(guildId);
      if (closure_6.shouldShowOnboarding(guildId)) {
        closure_11[guildId] = yield function fetchLandingAsset(arg0) {
          return callback(...arguments);
        }(tmp4);
        yield closure_15(tmp4.id);
        const tmp11 = closure_11;
      }
      const obj4 = callback(closure_2[10]);
    }
  };
  fn.next();
  return fn;
}
async function _fetchLandingAsset(id, arg1) {
  let obj = callback(closure_2[11]);
  obj = { id: id.id, icon: id.icon, canAnimate: false, size: 96 / callback(closure_2[12])() };
  const guildIconSource = obj.getGuildIconSource(obj);
  const ImageManager = closure_4.ImageManager;
  const ImageManager2 = closure_4.ImageManager;
  const tmp2 = yield ImageManager.getAvatarBase64(guildIconSource);
  const tmp3 = yield ImageManager2.getDominantColors(guildIconSource);
  const tmp4 = callback(closure_2[13]);
  return tmp4(callback2(), "data:image/png;base64," + tmp2, tmp3[0]);
}
function openAndWaitForOnboarding(arg0) {
  const arg1 = arg0;
  function waitForOnboardingCompleted(arg0) {
    const result = arg0(closure_2[14]).waitForOnboardingCompletion(arg0);
    result.then(() => {
      if (null != closure_10[closure_0]) {
        tmp();
      }
      delete r1[r3];
      callback(closure_2[15]).finishOnboarding(arg0);
    });
  }(arg0);
  return new Promise((arg0) => {
    if (null == closure_10[closure_0]) {
      closure_10[arg0] = arg0;
    }
    let obj = callback(paths[8]);
    obj = {
      guildId: arg0,
      backShouldLeaveGuild: true,
      onFinish(nativeEvent, arg1, arg2) {

      },
      landingAnimation: closure_11[closure_0],
      isFirstOpen: true
    };
    obj.pushLazy(arg0(paths[17])(paths[16], paths.paths), obj, closure_7).then(() => {
      if (guildId.getGuildId() !== callback) {
        callback(closure_2[18]).transitionTo(closure_9.CHANNEL(callback));
        const obj = callback(closure_2[18]);
      }
    });
  });
}
let closure_3 = importDefault(dependencyMap[0]);
const NativeModules = arg1(dependencyMap[1]).NativeModules;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = arg1(dependencyMap[4]).GUILD_ONBOARDING_MODAL_KEY;
({ GuildFeatures: closure_8, Routes: closure_9 } = arg1(dependencyMap[5]));
let closure_10 = {};
let closure_11 = {};
const tmp2 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[19]).fileFinishedImporting("modules/guild_onboarding/doGuildOnboarding.native.tsx");

export default function doGuildOnboarding() {
  return _doGuildOnboarding(...arguments);
};
export { openAndWaitForOnboarding };
export const discardOnboardingPromise = function discardOnboardingPromise(id) {
  delete r1[r0];
};
export const isOnboardingActiveForGuild = function isOnboardingActiveForGuild(arg0) {
  return null != closure_10[arg0];
};
