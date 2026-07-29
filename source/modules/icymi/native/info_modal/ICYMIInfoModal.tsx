// Module ID: 15336
// Function ID: 15337
// Name: ICYMIInfoModal
// Dependencies: [19, 21, 5570, 15337, 5143, 15338, 503, 4395, 6752, 1236, 8194, 15346, 15354, 11122, 13217, 2]
// Exports: default

// Module 15336 (ICYMIInfoModal)
import noop from "noop";
import { jsx } from "jsxProd";

const require = arg1;
let result = require("NavigationStack").fileFinishedImporting("modules/icymi/native/info_modal/ICYMIInfoModal.tsx");

export default function ICYMIInfoModal(extendedOnboarding) {
  extendedOnboarding = extendedOnboarding.extendedOnboarding;
  const skipIntro = extendedOnboarding.skipIntro;
  let obj = extendedOnboarding(5570);
  let items = [extendedOnboarding, skipIntro];
  const navigatorScreens = obj.useNavigatorScreens(() => {
    let obj = {};
    obj = { headerLeft: null, render: null, impressionName: null, impressionProperties: null };
    let obj2 = extendedOnboarding(outer1_2[4]);
    obj[0] = obj2.getHeaderCloseButton();
    obj[1] = function render() {
      return outer1_4(outer1_1(outer1_2[5]), { extendedOnboarding: closure_0 });
    };
    obj[2] = extendedOnboarding(outer1_2[6]).ImpressionNames.ICYMI_ONBOARDING_OVERVIEW;
    obj = { extended_onboarding: extendedOnboarding };
    obj[3] = obj;
    obj[extendedOnboarding(outer1_2[3]).ICYMIInfoScreens.DEFAULT] = obj;
    const obj5 = extendedOnboarding(outer1_2[4]);
    if (skipIntro) {
      let headerCloseButton = obj5.getHeaderCloseButton(() => callback2(4395).popWithKey(callback(15337).ICYMI_INFO_MODAL_KEY));
    } else {
      headerCloseButton = obj5.getHeaderBackButton();
    }
    obj[extendedOnboarding(outer1_2[3]).ICYMIInfoScreens.TOPICS_CLOUD] = {
      headerLeft: headerCloseButton,
      headerRight() {
        let tmp = null;
        if (!closure_1) {
          const obj = { text: null, onPress: null };
          const intl = outer1_0(outer1_2[9]).intl;
          obj[0] = intl.string(outer1_0(outer1_2[9]).t["5Wxrcd"]);
          obj[1] = function onPress() {
            const ICYMIAnalytics = callback(8194).ICYMIAnalytics;
            const result = ICYMIAnalytics.trackFeedOnboardingScreenSkipped({ location: "topics" });
            let arr = callback2(4395);
            arr = arr.pop();
          };
          tmp = outer1_4(outer1_0(outer1_2[8]).HeaderActionButton, obj);
        }
        return tmp;
      },
      render() {
        return callback3(callback2(15346), {});
      },
      impressionName: extendedOnboarding(outer1_2[6]).ImpressionNames.ICYMI_ONBOARDING_TOPICS
    };
    obj2 = { headerLeft: null, headerRight: null, render: null, impressionName: null };
    const obj1 = {
      headerLeft: headerCloseButton,
      headerRight() {
        let tmp = null;
        if (!closure_1) {
          const obj = { text: null, onPress: null };
          const intl = outer1_0(outer1_2[9]).intl;
          obj[0] = intl.string(outer1_0(outer1_2[9]).t["5Wxrcd"]);
          obj[1] = function onPress() {
            const ICYMIAnalytics = callback(8194).ICYMIAnalytics;
            const result = ICYMIAnalytics.trackFeedOnboardingScreenSkipped({ location: "topics" });
            let arr = callback2(4395);
            arr = arr.pop();
          };
          tmp = outer1_4(outer1_0(outer1_2[8]).HeaderActionButton, obj);
        }
        return tmp;
      },
      render() {
        return callback3(callback2(15346), {});
      },
      impressionName: extendedOnboarding(outer1_2[6]).ImpressionNames.ICYMI_ONBOARDING_TOPICS
    };
    obj2[0] = extendedOnboarding(outer1_2[4]).getHeaderBackButton();
    obj2[1] = function headerRight() {
      const obj = { text: null, onPress: null };
      const intl = callback(1236).intl;
      obj[0] = intl.string(callback(1236).t["5Wxrcd"]);
      obj[1] = function onPress() {
        const ICYMIAnalytics = callback(8194).ICYMIAnalytics;
        const result = ICYMIAnalytics.trackFeedOnboardingScreenSkipped({ location: "guilds" });
        let arr = callback2(4395);
        arr = arr.pop();
      };
      return callback3(callback(6752).HeaderActionButton, obj);
    };
    obj2[2] = function render() {
      return callback3(callback2(15354), {});
    };
    obj2[3] = extendedOnboarding(outer1_2[6]).ImpressionNames.ICYMI_ONBOARDING_SELECT_GUILDS;
    obj[extendedOnboarding(outer1_2[3]).ICYMIInfoScreens.JOIN_GUILDS] = obj2;
    return obj;
  }, items);
  let items1 = [extendedOnboarding, skipIntro];
  if (extendedOnboarding) {
    obj = { screens: null, steps: null, initialRouteName: null };
    obj[0] = navigatorScreens;
    obj[1] = tmp4;
    let ICYMIInfoScreens = tmp(15337).ICYMIInfoScreens;
    obj[2] = skipIntro ? ICYMIInfoScreens.TOPICS_CLOUD : ICYMIInfoScreens.DEFAULT;
    tmp5(tmp(13217).StepModal, obj);
  } else {
    obj = { screens: null, initialRouteName: null };
    obj[0] = navigatorScreens;
    obj[1] = tmp(15337).ICYMIInfoScreens.DEFAULT;
    return tmp5(tmp(11122).Modal, obj);
  }
};
