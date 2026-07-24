// Module ID: 11788
// Function ID: 91538
// Name: getScreens
// Dependencies: [31, 11780, 33, 4130, 5084, 5087, 11789, 480, 11792, 11795, 11797, 11798, 11799, 11803, 5121, 1456, 5450, 11805, 5517, 1212, 2]
// Exports: HubEmailConnectionScreen, default

// Module 11788 (getScreens)
import "result";
import { HubEmailConnectionSteps } from "HubEmailConnectionSteps";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
function getScreens(pop) {
  let obj = require(5087) /* HeaderBackImage */;
  if (arg1) {
    let headerBackButton = obj.getHeaderBackButton(pop);
  } else {
    headerBackButton = obj.getHeaderCloseButton(pop);
  }
  obj = { [closure_3.STUDENT_PROMPT]: obj };
  obj = {
    fullscreen: true,
    headerLeft: headerBackButton,
    headerTitle() {
      return null;
    },
    render(arg0) {
      const merged = Object.assign(arg0);
      return outer1_4(outer1_1(outer1_2[6]), {});
    }
  };
  const obj1 = {
    impressionName: require(480) /* isThrottled */.ImpressionNames.HUB_EMAIL_SIGNUP,
    impressionProperties(invite) {
      return { has_invite: null != invite.invite };
    },
    fullscreen: true,
    headerLeft: headerBackButton,
    headerTitle() {
      return null;
    },
    render(arg0) {
      const merged = Object.assign(arg0);
      return outer1_4(outer1_1(outer1_2[8]), {});
    }
  };
  obj[HubEmailConnectionSteps.VERIFY_EMAIL] = obj1;
  obj[HubEmailConnectionSteps.EMAIL_WAITLIST] = {
    fullscreen: true,
    headerTitle() {
      return null;
    },
    render(arg0) {
      const merged = Object.assign(arg0);
      return outer1_4(outer1_1(outer1_2[9]), {});
    }
  };
  obj[HubEmailConnectionSteps.SUBMIT_SCHOOL] = {
    fullscreen: true,
    headerTitle() {
      return null;
    },
    render(arg0) {
      const merged = Object.assign(arg0);
      return outer1_4(outer1_1(outer1_2[10]), {});
    }
  };
  obj[HubEmailConnectionSteps.SELECT_SCHOOL] = {
    fullscreen: true,
    headerTitle() {
      return null;
    },
    render(arg0) {
      const merged = Object.assign(arg0);
      return outer1_4(outer1_1(outer1_2[11]), {});
    }
  };
  obj[HubEmailConnectionSteps.VERIFY_PIN] = {
    fullscreen: true,
    headerTitle() {
      return null;
    },
    render(arg0) {
      const merged = Object.assign(arg0);
      return outer1_4(outer1_1(outer1_2[12]), {});
    }
  };
  const obj2 = {
    fullscreen: true,
    headerShown: false,
    render(arg0) {
      const merged = Object.assign(arg0);
      return outer1_4(outer1_1(outer1_2[13]), {});
    }
  };
  obj[HubEmailConnectionSteps.SELECT_SCHOOL_SEARCH] = obj2;
  return obj;
}
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { marginTop: require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT, flex: 1 };
_createForOfIteratorHelperLoose.safeArea = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/hub/native/components/HubEmailConnectionModal.tsx");

export default function HubEmailConnectionModal(arg0) {
  let HubEmailConnectionSteps;
  let dependencyMap;
  let importDefault;
  let initialRouteStack;
  let require;
  let screens;
  ({ isNestedNavigator: require, onCloseExtra: importDefault, invite: dependencyMap, displayStudentPrompt: HubEmailConnectionSteps } = arg0);
  let obj = require(1456) /* useNavigation */;
  const jsx = obj.useNavigation();
  ({ screens, initialRouteStack } = importDefault(5450)(() => {
    function handleClose() {
      let flag = arg0;
      if (arg0 === undefined) {
        flag = false;
      }
      if (null != outer1_1) {
        outer1_1(true === flag);
      }
      if (outer1_0) {
        outer1_4.goBack();
      } else {
        outer2_1(outer2_2[17]).close();
        const obj = outer2_1(outer2_2[17]);
      }
    }
    const items = [];
    const push = items.push;
    let obj = {};
    if (closure_3) {
      obj.name = tmp.STUDENT_PROMPT;
      obj = { onClose: handleClose };
      obj.params = obj;
      push(obj);
    } else {
      obj.name = tmp.VERIFY_EMAIL;
      obj = { invite: closure_2, onClose: handleClose };
      obj.params = obj;
      push(obj);
    }
    return { screens: outer1_6(handleClose, closure_0), initialRouteStack: items };
  }));
  obj = { screens, initialRouteStack };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.headerBackTitle = intl.string(require(1212) /* getSystemLocale */.t["13/7kX"]);
  return jsx(require(5517) /* NavigationStack */.Navigator, { screens, initialRouteStack });
};
export const HubEmailConnectionScreen = function HubEmailConnectionScreen(children) {
  const tmp = _createForOfIteratorHelperLoose();
  return jsx(require(5121) /* SafeAreaPaddingView */.SafeAreaPaddingView, { top: true, style: _createForOfIteratorHelperLoose().safeArea, children: children.children });
};
