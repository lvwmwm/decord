// Module ID: 15240
// Function ID: 115971
// Name: ICYMIInfoModal
// Dependencies: [31, 33, 5517, 15241, 5087, 15242, 480, 4337, 5788, 1212, 8374, 15250, 15258, 11100, 13138, 2]
// Exports: default

// Module 15240 (ICYMIInfoModal)
import result from "result";
import { jsx } from "jsxProd";

const require = arg1;
let result = require("NavigationStack").fileFinishedImporting("modules/icymi/native/info_modal/ICYMIInfoModal.tsx");

export default function ICYMIInfoModal(extendedOnboarding) {
  extendedOnboarding = extendedOnboarding.extendedOnboarding;
  let skipIntro = extendedOnboarding.skipIntro;
  let tmp = (function useScreens(extendedOnboarding) {
    extendedOnboarding = extendedOnboarding.extendedOnboarding;
    const skipIntro = extendedOnboarding.skipIntro;
    const items = [extendedOnboarding, skipIntro];
    return extendedOnboarding(outer1_2[2]).useNavigatorScreens(() => {
      let obj = {};
      obj = {};
      let obj2 = extendedOnboarding(outer2_2[4]);
      obj.headerLeft = obj2.getHeaderCloseButton();
      obj.render = function render() {
        return outer3_4(skipIntro(outer3_2[5]), { extendedOnboarding: outer1_0 });
      };
      obj.impressionName = extendedOnboarding(outer2_2[6]).ImpressionNames.ICYMI_ONBOARDING_OVERVIEW;
      obj = { extended_onboarding: extendedOnboarding };
      obj.impressionProperties = obj;
      obj[extendedOnboarding(outer2_2[3]).ICYMIInfoScreens.DEFAULT] = obj;
      const obj1 = {};
      const obj6 = extendedOnboarding(outer2_2[4]);
      if (skipIntro) {
        let headerCloseButton = obj6.getHeaderCloseButton(() => skipIntro(outer3_2[7]).popWithKey(extendedOnboarding(outer3_2[3]).ICYMI_INFO_MODAL_KEY));
      } else {
        headerCloseButton = obj6.getHeaderBackButton();
      }
      obj1.headerLeft = headerCloseButton;
      obj1.headerRight = function headerRight() {
        let tmp = null;
        if (!outer1_1) {
          const obj = {};
          const intl = extendedOnboarding(outer3_2[9]).intl;
          obj.text = intl.string(extendedOnboarding(outer3_2[9]).t["5Wxrcd"]);
          obj.onPress = function onPress() {
            const ICYMIAnalytics = extendedOnboarding(outer4_2[10]).ICYMIAnalytics;
            const result = ICYMIAnalytics.trackFeedOnboardingScreenSkipped({ location: "topics" });
            let arr = skipIntro(outer4_2[7]);
            arr = arr.pop();
          };
          tmp = outer3_4(extendedOnboarding(outer3_2[8]).HeaderActionButton, obj);
        }
        return tmp;
      };
      obj1.render = function render() {
        return outer3_4(skipIntro(outer3_2[11]), {});
      };
      obj1.impressionName = extendedOnboarding(outer2_2[6]).ImpressionNames.ICYMI_ONBOARDING_TOPICS;
      obj[extendedOnboarding(outer2_2[3]).ICYMIInfoScreens.TOPICS_CLOUD] = obj1;
      obj2 = {
        headerLeft: extendedOnboarding(outer2_2[4]).getHeaderBackButton(),
        headerRight() {
          const obj = {};
          const intl = extendedOnboarding(outer3_2[9]).intl;
          obj.text = intl.string(extendedOnboarding(outer3_2[9]).t["5Wxrcd"]);
          obj.onPress = function onPress() {
            const ICYMIAnalytics = extendedOnboarding(outer4_2[10]).ICYMIAnalytics;
            const result = ICYMIAnalytics.trackFeedOnboardingScreenSkipped({ location: "guilds" });
            let arr = skipIntro(outer4_2[7]);
            arr = arr.pop();
          };
          return outer3_4(extendedOnboarding(outer3_2[8]).HeaderActionButton, obj);
        },
        render() {
          return outer3_4(skipIntro(outer3_2[12]), {});
        },
        impressionName: extendedOnboarding(outer2_2[6]).ImpressionNames.ICYMI_ONBOARDING_SELECT_GUILDS
      };
      obj[extendedOnboarding(outer2_2[3]).ICYMIInfoScreens.JOIN_GUILDS] = obj2;
      return obj;
    }, items);
  })({ extendedOnboarding, skipIntro });
  let items = [extendedOnboarding, skipIntro];
  if (extendedOnboarding) {
    let obj = { screens: tmp, steps: tmp2 };
    let ICYMIInfoScreens = extendedOnboarding(15241).ICYMIInfoScreens;
    obj.initialRouteName = skipIntro ? ICYMIInfoScreens.TOPICS_CLOUD : ICYMIInfoScreens.DEFAULT;
    tmp3(tmp4(13138).StepModal, obj);
  } else {
    obj = { screens: tmp, initialRouteName: tmp4(15241).ICYMIInfoScreens.DEFAULT };
    return tmp3(tmp4(11100).Modal, obj);
  }
};
