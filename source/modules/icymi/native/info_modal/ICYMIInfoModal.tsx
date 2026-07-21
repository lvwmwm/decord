// Module ID: 15070
// Function ID: 113437
// Name: ICYMIInfoModal
// Dependencies: []
// Exports: default

// Module 15070 (ICYMIInfoModal)
let closure_3 = importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/icymi/native/info_modal/ICYMIInfoModal.tsx");

export default function ICYMIInfoModal(extendedOnboarding) {
  extendedOnboarding = extendedOnboarding.extendedOnboarding;
  const arg1 = extendedOnboarding;
  const skipIntro = extendedOnboarding.skipIntro;
  const importDefault = skipIntro;
  const tmp = function useScreens(extendedOnboarding) {
    extendedOnboarding = extendedOnboarding.extendedOnboarding;
    const skipIntro = extendedOnboarding.skipIntro;
    const items = [extendedOnboarding, skipIntro];
    return extendedOnboarding(closure_2[2]).useNavigatorScreens(() => {
      let obj = {};
      obj = {};
      let obj2 = extendedOnboarding(closure_2[4]);
      obj.headerLeft = obj2.getHeaderCloseButton();
      obj.render = function render() {
        return callback3(callback2(closure_2[5]), { extendedOnboarding: closure_0 });
      };
      obj.impressionName = extendedOnboarding(closure_2[6]).ImpressionNames.ICYMI_ONBOARDING_OVERVIEW;
      obj = { extended_onboarding: extendedOnboarding };
      obj.impressionProperties = obj;
      obj[extendedOnboarding(closure_2[3]).ICYMIInfoScreens.DEFAULT] = obj;
      const obj1 = {};
      const obj6 = extendedOnboarding(closure_2[4]);
      if (skipIntro) {
        let headerCloseButton = obj6.getHeaderCloseButton(() => callback2(closure_2[7]).popWithKey(callback(closure_2[3]).ICYMI_INFO_MODAL_KEY));
      } else {
        headerCloseButton = obj6.getHeaderBackButton();
      }
      obj1.headerLeft = headerCloseButton;
      obj1.headerRight = function headerRight() {
        let tmp = null;
        if (!closure_1) {
          const obj = {};
          const intl = callback(closure_2[9]).intl;
          obj.text = intl.string(callback(closure_2[9]).t.5Wxrcd);
          obj.onPress = function onPress() {
            const ICYMIAnalytics = callback(closure_2[10]).ICYMIAnalytics;
            const result = ICYMIAnalytics.trackFeedOnboardingScreenSkipped({ location: "topics" });
            let arr = callback2(closure_2[7]);
            arr = arr.pop();
          };
          tmp = callback3(callback(closure_2[8]).HeaderActionButton, obj);
        }
        return tmp;
      };
      obj1.render = function render() {
        return callback3(callback2(closure_2[11]), {});
      };
      obj1.impressionName = extendedOnboarding(closure_2[6]).ImpressionNames.ICYMI_ONBOARDING_TOPICS;
      obj[extendedOnboarding(closure_2[3]).ICYMIInfoScreens.TOPICS_CLOUD] = obj1;
      obj2 = {
        headerLeft: extendedOnboarding(closure_2[4]).getHeaderBackButton(),
        headerRight() {
          const obj = {};
          const intl = callback(closure_2[9]).intl;
          obj.text = intl.string(callback(closure_2[9]).t.5Wxrcd);
          obj.onPress = function onPress() {
            const ICYMIAnalytics = callback(closure_2[10]).ICYMIAnalytics;
            const result = ICYMIAnalytics.trackFeedOnboardingScreenSkipped({ location: "guilds" });
            let arr = callback2(closure_2[7]);
            arr = arr.pop();
          };
          return callback3(callback(closure_2[8]).HeaderActionButton, obj);
        },
        render() {
          return callback3(callback2(closure_2[12]), {});
        },
        impressionName: extendedOnboarding(closure_2[6]).ImpressionNames.ICYMI_ONBOARDING_SELECT_GUILDS
      };
      obj[extendedOnboarding(closure_2[3]).ICYMIInfoScreens.JOIN_GUILDS] = obj2;
      return obj;
    }, items);
  }({ extendedOnboarding, skipIntro });
  const items = [extendedOnboarding, skipIntro];
  if (extendedOnboarding) {
    let obj = { screens: tmp, steps: tmp2 };
    const ICYMIInfoScreens = arg1(dependencyMap[3]).ICYMIInfoScreens;
    obj.initialRouteName = skipIntro ? ICYMIInfoScreens.TOPICS_CLOUD : ICYMIInfoScreens.DEFAULT;
    tmp3(tmp4(tmp5[14]).StepModal, obj);
  } else {
    obj = { screens: tmp, initialRouteName: tmp4(tmp5[3]).ICYMIInfoScreens.DEFAULT };
    return tmp3(tmp4(tmp5[13]).Modal, obj);
  }
};
