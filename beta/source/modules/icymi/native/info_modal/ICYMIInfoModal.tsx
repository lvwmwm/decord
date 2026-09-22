// Module ID: 16809
// Function ID: 16810
// Name: ICYMIInfoModal
// Dependencies: [19, 21, 558, 568, 16810, 5839, 16811, 1253, 4961, 7621, 1119, 8635, 16819, 16827, 7246, 11453, 14457, 2]

// Module 16809 (ICYMIInfoModal)
import c from "c" /* 568 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1253 */;
import NavigatorHeader from "NavigatorHeader" /* 5839 */;
import ICYMIInfoModalTypes from "ICYMIInfoModalTypes" /* 16810 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let ReactCompilerGating = fn(558);
let closure_5 = ReactCompilerGating.isReactCompilerEnabled() ? ((extendedOnboarding) => {
  const cResult = extendedOnboarding(568).c(4);
  extendedOnboarding = extendedOnboarding.extendedOnboarding;
  const skipIntro = extendedOnboarding.skipIntro;
  if (cResult[0] === extendedOnboarding) {
    if (cResult[1] === skipIntro) {
      let tmp4 = cResult[2];
      let tmp5 = cResult[3];
    }
    return extendedOnboarding(7246).useNavigatorScreens(tmp4, tmp5);
  }
  const fn = function t() {
    let obj = {};
    const obj2 = {
      headerLeft: NavigatorHeader.getHeaderCloseButton(),
      render() {
        return jsx(skipIntro(16811), { extendedOnboarding });
      },
      impressionName: discord_common_AnalyticsUtils.ImpressionNames.ICYMI_ONBOARDING_OVERVIEW,
      impressionProperties: { extended_onboarding: extendedOnboarding }
    };
    obj[ICYMIInfoModalTypes.ICYMIInfoScreens.DEFAULT] = obj2;
    const obj5 = NavigatorHeader;
    if (skipIntro) {
      let headerCloseButton = obj5.getHeaderCloseButton(() => skipIntro(4961).popWithKey(extendedOnboarding(16810).ICYMI_INFO_MODAL_KEY));
    } else {
      headerCloseButton = obj5.getHeaderBackButton();
    }
    const obj4 = { extended_onboarding: extendedOnboarding };
    obj[ICYMIInfoModalTypes.ICYMIInfoScreens.TOPICS_CLOUD] = {
      headerLeft: headerCloseButton,
      headerRight() {
        let tmp = null;
        if (!skipIntro) {
          const obj = { text: null, onPress: null };
          const intl = extendedOnboarding(1119).intl;
          obj.text = intl.string(extendedOnboarding(1119).t["5Wxrcd"]);
          obj.onPress = function onPress() {
            const ICYMIAnalytics = extendedOnboarding(8635).ICYMIAnalytics;
            const result = ICYMIAnalytics.trackFeedOnboardingScreenSkipped({ location: "topics" });
            closure_1_1(4961).pop();
          };
          tmp = jsx(extendedOnboarding(7621).HeaderActionButton, { text: null, onPress: null });
        }
        return tmp;
      },
      render() {
        return closure_1_4(skipIntro(16819), {});
      },
      impressionName: discord_common_AnalyticsUtils.ImpressionNames.ICYMI_ONBOARDING_TOPICS
    };
    const obj7 = { headerLeft: null, headerRight: null, render: null, impressionName: null };
    const obj6 = {
      headerLeft: headerCloseButton,
      headerRight() {
        let tmp = null;
        if (!skipIntro) {
          const obj = { text: null, onPress: null };
          const intl = extendedOnboarding(1119).intl;
          obj.text = intl.string(extendedOnboarding(1119).t["5Wxrcd"]);
          obj.onPress = function onPress() {
            const ICYMIAnalytics = extendedOnboarding(8635).ICYMIAnalytics;
            const result = ICYMIAnalytics.trackFeedOnboardingScreenSkipped({ location: "topics" });
            closure_1_1(4961).pop();
          };
          tmp = jsx(extendedOnboarding(7621).HeaderActionButton, { text: null, onPress: null });
        }
        return tmp;
      },
      render() {
        return closure_1_4(skipIntro(16819), {});
      },
      impressionName: discord_common_AnalyticsUtils.ImpressionNames.ICYMI_ONBOARDING_TOPICS
    };
    obj7.headerLeft = NavigatorHeader.getHeaderBackButton();
    obj7.headerRight = function headerRight() {
      const obj = { text: null, onPress: null };
      const intl = extendedOnboarding(1119).intl;
      obj.text = intl.string(extendedOnboarding(1119).t["5Wxrcd"]);
      obj.onPress = function onPress() {
        const ICYMIAnalytics = extendedOnboarding(8635).ICYMIAnalytics;
        const result = ICYMIAnalytics.trackFeedOnboardingScreenSkipped({ location: "guilds" });
        closure_1_1(4961).pop();
      };
      return closure_1_4(extendedOnboarding(7621).HeaderActionButton, obj);
    };
    obj7.render = function render() {
      return closure_1_4(skipIntro(16827), {});
    };
    obj7.impressionName = discord_common_AnalyticsUtils.ImpressionNames.ICYMI_ONBOARDING_SELECT_GUILDS;
    obj[ICYMIInfoModalTypes.ICYMIInfoScreens.JOIN_GUILDS] = obj7;
    return obj;
  };
  const items = [extendedOnboarding, skipIntro];
  cResult[0] = extendedOnboarding;
  cResult[1] = skipIntro;
  cResult[2] = fn;
  cResult[3] = items;
  tmp5 = items;
  tmp4 = fn;
}) : ((extendedOnboarding) => {
  extendedOnboarding = extendedOnboarding.extendedOnboarding;
  const skipIntro = extendedOnboarding.skipIntro;
  const items = [extendedOnboarding, skipIntro];
  return extendedOnboarding(7246).useNavigatorScreens(() => {
    let obj = {};
    const obj2 = {
      headerLeft: NavigatorHeader.getHeaderCloseButton(),
      render() {
        return jsx(skipIntro(16811), { extendedOnboarding });
      },
      impressionName: discord_common_AnalyticsUtils.ImpressionNames.ICYMI_ONBOARDING_OVERVIEW,
      impressionProperties: { extended_onboarding: extendedOnboarding }
    };
    obj[ICYMIInfoModalTypes.ICYMIInfoScreens.DEFAULT] = obj2;
    const obj5 = NavigatorHeader;
    if (skipIntro) {
      let headerCloseButton = obj5.getHeaderCloseButton(() => skipIntro(4961).popWithKey(extendedOnboarding(16810).ICYMI_INFO_MODAL_KEY));
    } else {
      headerCloseButton = obj5.getHeaderBackButton();
    }
    const obj4 = { extended_onboarding: extendedOnboarding };
    obj[ICYMIInfoModalTypes.ICYMIInfoScreens.TOPICS_CLOUD] = {
      headerLeft: headerCloseButton,
      headerRight() {
        let tmp = null;
        if (!skipIntro) {
          const obj = { text: null, onPress: null };
          const intl = extendedOnboarding(1119).intl;
          obj.text = intl.string(extendedOnboarding(1119).t["5Wxrcd"]);
          obj.onPress = function onPress() {
            const ICYMIAnalytics = extendedOnboarding(8635).ICYMIAnalytics;
            const result = ICYMIAnalytics.trackFeedOnboardingScreenSkipped({ location: "topics" });
            closure_1_1(4961).pop();
          };
          tmp = jsx(extendedOnboarding(7621).HeaderActionButton, { text: null, onPress: null });
        }
        return tmp;
      },
      render() {
        return closure_1_4(skipIntro(16819), {});
      },
      impressionName: discord_common_AnalyticsUtils.ImpressionNames.ICYMI_ONBOARDING_TOPICS
    };
    const obj7 = { headerLeft: null, headerRight: null, render: null, impressionName: null };
    const obj6 = {
      headerLeft: headerCloseButton,
      headerRight() {
        let tmp = null;
        if (!skipIntro) {
          const obj = { text: null, onPress: null };
          const intl = extendedOnboarding(1119).intl;
          obj.text = intl.string(extendedOnboarding(1119).t["5Wxrcd"]);
          obj.onPress = function onPress() {
            const ICYMIAnalytics = extendedOnboarding(8635).ICYMIAnalytics;
            const result = ICYMIAnalytics.trackFeedOnboardingScreenSkipped({ location: "topics" });
            closure_1_1(4961).pop();
          };
          tmp = jsx(extendedOnboarding(7621).HeaderActionButton, { text: null, onPress: null });
        }
        return tmp;
      },
      render() {
        return closure_1_4(skipIntro(16819), {});
      },
      impressionName: discord_common_AnalyticsUtils.ImpressionNames.ICYMI_ONBOARDING_TOPICS
    };
    obj7.headerLeft = NavigatorHeader.getHeaderBackButton();
    obj7.headerRight = function headerRight() {
      const obj = { text: null, onPress: null };
      const intl = extendedOnboarding(1119).intl;
      obj.text = intl.string(extendedOnboarding(1119).t["5Wxrcd"]);
      obj.onPress = function onPress() {
        const ICYMIAnalytics = extendedOnboarding(8635).ICYMIAnalytics;
        const result = ICYMIAnalytics.trackFeedOnboardingScreenSkipped({ location: "guilds" });
        closure_1_1(4961).pop();
      };
      return closure_1_4(extendedOnboarding(7621).HeaderActionButton, obj);
    };
    obj7.render = function render() {
      return closure_1_4(skipIntro(16827), {});
    };
    obj7.impressionName = discord_common_AnalyticsUtils.ImpressionNames.ICYMI_ONBOARDING_SELECT_GUILDS;
    obj[ICYMIInfoModalTypes.ICYMIInfoScreens.JOIN_GUILDS] = obj7;
    return obj;
  }, items);
});
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/icymi/native/info_modal/ICYMIInfoModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(12);
  ({ extendedOnboarding, skipIntro } = arg0);
  if (cResult[0] === extendedOnboarding) {
    if (cResult[1] === skipIntro) {
      let tmp4 = cResult[2];
    }
    const tmp6 = closure_5(tmp4);
    if (cResult[3] === extendedOnboarding) {
      if (cResult[4] === skipIntro) {
        if (extendedOnboarding) {
          const ICYMIInfoScreens = tmp(16810).ICYMIInfoScreens;
          const tmp13 = skipIntro ? ICYMIInfoScreens.TOPICS_CLOUD : ICYMIInfoScreens.DEFAULT;
          if (cResult[8] === tmp6) {
            if (cResult[9] === tmp7) {
              if (cResult[10] === tmp13) {
                let tmp14 = cResult[11];
              }
              return tmp14;
            }
          }
          const obj2 = { screens: tmp6, steps: tmp7, initialRouteName: tmp13 };
          const tmp16 = jsx(tmp(14457).StepModal, { screens: tmp6, steps: tmp7, initialRouteName: tmp13 });
          cResult[8] = tmp6;
          cResult[9] = tmp7;
          cResult[10] = tmp13;
          cResult[11] = tmp16;
          tmp14 = tmp16;
        } else {
          if (cResult[6] !== tmp6) {
            const obj3 = { screens: tmp6, initialRouteName: tmp(16810).ICYMIInfoScreens.DEFAULT };
            const tmp12 = jsx(tmp(11453).Modal, { screens: tmp6, initialRouteName: tmp(16810).ICYMIInfoScreens.DEFAULT });
            cResult[6] = tmp6;
            cResult[7] = tmp12;
            let tmp10 = tmp12;
          } else {
            tmp10 = cResult[7];
          }
          return tmp10;
        }
      }
    }
    let ICYMIInfoScreens1 = tmp(16810).ICYMIInfoScreens;
    if (!extendedOnboarding) {
      const items = [ICYMIInfoScreens1.DEFAULT];
      cResult[3] = extendedOnboarding;
      cResult[4] = skipIntro;
      cResult[5] = items;
    }
    if (skipIntro) {
      ICYMIInfoScreens1 = [, ];
      ICYMIInfoScreens1[0] = ICYMIInfoScreens1.TOPICS_CLOUD;
      ICYMIInfoScreens1[1] = tmp(16810).ICYMIInfoScreens.JOIN_GUILDS;
      let items1 = ICYMIInfoScreens1;
    } else {
      items1 = [ICYMIInfoScreens1.DEFAULT, tmp(16810).ICYMIInfoScreens.TOPICS_CLOUD, tmp(16810).ICYMIInfoScreens.JOIN_GUILDS];
    }
  }
  const obj4 = { extendedOnboarding, skipIntro };
  cResult[0] = extendedOnboarding;
  cResult[1] = skipIntro;
  cResult[2] = obj4;
  tmp4 = obj4;
}) : ((extendedOnboarding) => {
  extendedOnboarding = extendedOnboarding.extendedOnboarding;
  const skipIntro = extendedOnboarding.skipIntro;
  const tmp = closure_5({ extendedOnboarding, skipIntro });
  let items = [extendedOnboarding, skipIntro];
  if (extendedOnboarding) {
    const obj2 = { screens: tmp, steps: tmp2, initialRouteName: null };
    let ICYMIInfoScreens = tmp4(16810).ICYMIInfoScreens;
    obj2.initialRouteName = skipIntro ? ICYMIInfoScreens.TOPICS_CLOUD : ICYMIInfoScreens.DEFAULT;
    tmp3(tmp4(14457).StepModal, obj2);
  } else {
    const obj = { screens: tmp, initialRouteName: tmp4(16810).ICYMIInfoScreens.DEFAULT };
    return tmp3(tmp4(11453).Modal, obj);
  }
});
