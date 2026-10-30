// Module ID: 18488
// Function ID: 18489
// Name: ICYMIInfoModal
// Dependencies: [19, 21, 7163, 18489, 6992, 18490, 1261, 6738, 7552, 1114, 16187, 18498, 18504, 11447, 13163, 2]
// Exports: default

// Module 18488 (ICYMIInfoModal)
import Fragment from "Fragment" /* 21 */;
import ICYMIInfoModalTypes from "ICYMIInfoModalTypes" /* 18489 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("modules/icymi/native/info_modal/ICYMIInfoModal.tsx");

export default function ICYMIInfoModal(extendedOnboarding) {
  let ICYMIInfoScreens;
  let tmp5Result;
  extendedOnboarding = extendedOnboarding.extendedOnboarding;
  const skipIntro = extendedOnboarding.skipIntro;
  let tmp = extendedOnboarding;
  const tmp2 = dependencyMap;
  let obj = extendedOnboarding(7163);
  let items = [extendedOnboarding, skipIntro];
  const navigatorScreens = obj.useNavigatorScreens(() => {
    let headerCloseButton;
    let obj3;
    let obj4;
    let tmpResult;
    function headerRight() {
      let intl;
      let tmp = null;
      if (!skipIntro) {
        const obj = {
          text: intl.string(extendedOnboarding(closure_2_2[9]).t["5Wxrcd"]),
          onPress() {
              const ICYMIAnalytics = extendedOnboarding(closure_1_2[10]).ICYMIAnalytics;
              const result = ICYMIAnalytics.trackFeedOnboardingScreenSkipped({ location: "topics" });
              const arr = closure_1_1(closure_1_2[7]);
              arr.pop();
            }
        };
        const HeaderActionButton = extendedOnboarding(closure_2_2[8]).HeaderActionButton;
        intl = extendedOnboarding(closure_2_2[9]).intl;
        tmp = closure_2_4(HeaderActionButton, obj);
      }
      return tmp;
    }
    function render() {
      return closure_1_4(skipIntro(closure_1_2[11]), {});
    }
    let obj = {};
    let tmp = extendedOnboarding;
    const obj2 = {
      headerLeft: obj3.getHeaderCloseButton(),
      render() {
        const obj = { extendedOnboarding };
        return closure_2_4(skipIntro(closure_2_2[5]), obj);
      },
      impressionName: extendedOnboarding(dependencyMap[6]).ImpressionNames.ICYMI_ONBOARDING_OVERVIEW,
      impressionProperties: obj4
    };
    const DEFAULT = extendedOnboarding(dependencyMap[3]).ICYMIInfoScreens.DEFAULT;
    obj4 = { extended_onboarding: extendedOnboarding };
    obj[DEFAULT] = obj2;
    obj3 = extendedOnboarding(dependencyMap[4]);
    const TOPICS_CLOUD = extendedOnboarding(dependencyMap[3]).ICYMIInfoScreens.TOPICS_CLOUD;
    const obj5 = extendedOnboarding(dependencyMap[4]);
    if (skipIntro) {
      headerCloseButton = obj5.getHeaderCloseButton(() => {
        const obj = skipIntro(closure_1_2[7]);
        return obj.popWithKey(extendedOnboarding(closure_1_2[3]).ICYMI_INFO_MODAL_KEY);
      });
    } else {
      headerCloseButton = obj5.getHeaderBackButton();
    }
    obj[TOPICS_CLOUD] = { headerLeft: headerCloseButton, headerRight, render, impressionName: tmp(dependencyMap[6]).ImpressionNames.ICYMI_ONBOARDING_TOPICS };
    const obj7 = {
      headerLeft: tmpResult.getHeaderBackButton(),
      headerRight() {
        let intl;
        const obj = {
          text: intl.string(extendedOnboarding(closure_1_2[9]).t["5Wxrcd"]),
          onPress() {
            const ICYMIAnalytics = extendedOnboarding(closure_1_2[10]).ICYMIAnalytics;
            const result = ICYMIAnalytics.trackFeedOnboardingScreenSkipped({ location: "guilds" });
            const arr = closure_1_1(closure_1_2[7]);
            arr.pop();
          }
        };
        const HeaderActionButton = extendedOnboarding(closure_1_2[8]).HeaderActionButton;
        intl = extendedOnboarding(closure_1_2[9]).intl;
        return closure_1_4(HeaderActionButton, obj);
      },
      render() {
        return closure_1_4(skipIntro(closure_1_2[12]), {});
      },
      impressionName: tmp(dependencyMap[6]).ImpressionNames.ICYMI_ONBOARDING_SELECT_GUILDS
    };
    ({ headerLeft: headerCloseButton, headerRight, render, impressionName: tmp(dependencyMap[6]).ImpressionNames.ICYMI_ONBOARDING_TOPICS });
    const JOIN_GUILDS = tmp(tmp2[3]).ICYMIInfoScreens.JOIN_GUILDS;
    obj[JOIN_GUILDS] = obj7;
    tmpResult = tmp(dependencyMap[4]);
    return obj;
  }, items);
  let items1 = [extendedOnboarding, skipIntro];
  if (extendedOnboarding) {
    let obj2 = { screens: navigatorScreens, steps: tmp4, initialRouteName: skipIntro ? ICYMIInfoScreens.TOPICS_CLOUD : ICYMIInfoScreens.DEFAULT };
    const StepModal = tmp(13163).StepModal;
    ICYMIInfoScreens = tmp(18489).ICYMIInfoScreens;
    tmp5Result = tmp5(StepModal, obj2);
  } else {
    let obj3 = { screens: navigatorScreens, initialRouteName: tmp(18489).ICYMIInfoScreens.DEFAULT };
    const Modal = tmp(11447).Modal;
    tmp5Result = tmp5(Modal, obj3);
  }
  return tmp5Result;
};
