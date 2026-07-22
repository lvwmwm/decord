// Module ID: 11751
// Function ID: 91251
// Name: getScreens
// Dependencies: []
// Exports: HubEmailConnectionScreen, default

// Module 11751 (getScreens)
function getScreens(pop) {
  let obj = arg1(dependencyMap[5]);
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
      return callback2(callback(closure_2[6]), {});
    }
  };
  const obj1 = {
    impressionName: arg1(dependencyMap[7]).ImpressionNames.HUB_EMAIL_SIGNUP,
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
      return callback2(callback(closure_2[8]), {});
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
      return callback2(callback(closure_2[9]), {});
    }
  };
  obj[HubEmailConnectionSteps.SUBMIT_SCHOOL] = {
    fullscreen: true,
    headerTitle() {
      return null;
    },
    render(arg0) {
      const merged = Object.assign(arg0);
      return callback2(callback(closure_2[10]), {});
    }
  };
  obj[HubEmailConnectionSteps.SELECT_SCHOOL] = {
    fullscreen: true,
    headerTitle() {
      return null;
    },
    render(arg0) {
      const merged = Object.assign(arg0);
      return callback2(callback(closure_2[11]), {});
    }
  };
  obj[HubEmailConnectionSteps.VERIFY_PIN] = {
    fullscreen: true,
    headerTitle() {
      return null;
    },
    render(arg0) {
      const merged = Object.assign(arg0);
      return callback2(callback(closure_2[12]), {});
    }
  };
  const obj2 = {
    type: "<string:1040334421>",
    text: "<string:1040334338>",
    render(arg0) {
      const merged = Object.assign(arg0);
      return callback2(callback(closure_2[13]), {});
    }
  };
  obj[HubEmailConnectionSteps.SELECT_SCHOOL_SEARCH] = obj2;
  return obj;
}
importAll(dependencyMap[0]);
const HubEmailConnectionSteps = arg1(dependencyMap[1]).HubEmailConnectionSteps;
const jsx = arg1(dependencyMap[2]).jsx;
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { marginTop: arg1(dependencyMap[4]).NAV_BAR_HEIGHT, flex: 1 };
obj.safeArea = obj;
let closure_5 = obj.createStyles(obj);
const result = arg1(dependencyMap[20]).fileFinishedImporting("modules/hub/native/components/HubEmailConnectionModal.tsx");

export default function HubEmailConnectionModal(arg0) {
  let initialRouteStack;
  let screens;
  ({ isNestedNavigator: closure_0, onCloseExtra: closure_1, invite: closure_2, displayStudentPrompt: closure_3 } = arg0);
  let obj = arg1(dependencyMap[15]);
  const jsx = obj.useNavigation();
  ({ screens, initialRouteStack } = importDefault(dependencyMap[16])(() => {
    function handleClose() {
      let flag = arg0;
      if (arg0 === undefined) {
        flag = false;
      }
      if (null != callback) {
        callback(true === flag);
      }
      if (closure_0) {
        navigation.goBack();
      } else {
        callback(closure_2[17]).close();
        const obj = callback(closure_2[17]);
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
    return { screens: callback(handleClose, closure_0), initialRouteStack: items };
  }));
  obj = { screens, initialRouteStack };
  const intl = arg1(dependencyMap[19]).intl;
  obj.headerBackTitle = intl.string(arg1(dependencyMap[19]).t.13/7kX);
  return jsx(arg1(dependencyMap[18]).Navigator, obj);
};
export const HubEmailConnectionScreen = function HubEmailConnectionScreen(children) {
  const tmp = callback();
  return jsx(arg1(dependencyMap[14]).SafeAreaPaddingView, { top: true, style: callback().safeArea, children: children.children });
};
