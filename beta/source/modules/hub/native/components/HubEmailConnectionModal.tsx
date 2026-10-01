// Module ID: 12241
// Function ID: 12242
// Name: HubEmailConnectionModal
// Dependencies: [19, 12233, 21, 4836, 5994, 5936, 12242, 1249, 12245, 12250, 12252, 12253, 12254, 12257, 6544, 1485, 5910, 12259, 6421, 1115, 2]
// Exports: HubEmailConnectionScreen, default

// Module 12241 (HubEmailConnectionModal)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1115 */;
import useNavigation from "useNavigation" /* 1485 */;
import reactDefault from "react" /* 5910 */;
import NavigatorHeader from "NavigatorHeader" /* 5936 */;
import NavigatorConstants from "NavigatorConstants" /* 5994 */;
import Navigator2 from "Navigator" /* 6421 */;
import common_SafeAreaView from "common/SafeAreaView" /* 6544 */;
import HubConstants from "HubConstants" /* 12233 */;
import HubEmailConnectionModalActionCreatorsDefault from "HubEmailConnectionModalActionCreators" /* 12259 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let obj2;
const HubEmailConnectionSteps = HubConstants.HubEmailConnectionSteps;
let jsx = Fragment.jsx;
let obj = { safeArea: obj2 };
obj2 = { marginTop: NavigatorConstants.NAV_BAR_HEIGHT, flex: 1 };
let closure_5 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/hub/native/components/HubEmailConnectionModal.tsx");

export default function HubEmailConnectionModal(arg0) {
  let closure_4;
  let initialRouteStack;
  let invite;
  let screens;
  ({ isNestedNavigator: require, onCloseExtra: importDefault, invite: dependencyMap, displayStudentPrompt: HubEmailConnectionSteps } = arg0);
  let obj = useNavigation;
  jsx = obj.useNavigation();
  let tmp = reactDefault(() => {
    let headerBackButton;
    let obj6;
    let obj7;
    let tmp9;
    function impressionProperties(invite) {
      return { has_invite: null != invite.invite };
    }
    function headerTitle() {
      return null;
    }
    function render(arg0) {
      const obj = {};
      const tmp = closure_1_1(invite[8]);
      const merged = Object.assign(arg0);
      return navigation(tmp, obj);
    }
    function handleClose() {
      let flag = arg0;
      if (arg0 === undefined) {
        flag = false;
      }
      if (closure_1_1 != null) {
        tmp(true === flag);
      }
      const tmp3 = closure_1_0;
      if (tmp3) {
        navigation.goBack();
      } else {
        const obj = HubEmailConnectionModalActionCreatorsDefault;
        obj.close();
      }
    }
    const items = [];
    const push = items.push;
    let obj = { name: null, params: null };
    let tmp = HubEmailConnectionSteps;
    if (tmp) {
      obj.name = tmp.STUDENT_PROMPT;
      const obj2 = { onClose: handleClose };
      obj.params = obj2;
      push(obj);
    } else {
      obj.name = tmp.VERIFY_EMAIL;
      const obj3 = { invite: dependencyMap, onClose: handleClose };
      obj.params = obj3;
      push(obj);
    }
    const obj4 = NavigatorHeader;
    if (require) {
      headerBackButton = obj4.getHeaderBackButton(handleClose);
      tmp9 = tmp5;
    } else {
      headerBackButton = obj4.getHeaderCloseButton(handleClose);
      tmp9 = tmp5;
    }
    const obj5 = { screens: obj6, initialRouteStack: items };
    obj6 = { [closure_2_3.STUDENT_PROMPT]: obj7 };
    obj7 = {
      fullscreen: true,
      headerLeft: headerBackButton,
      headerTitle() {
        return null;
      },
      render(arg0) {
        const obj = {};
        const tmp = closure_1_1(invite[6]);
        const merged = Object.assign(arg0);
        return navigation(tmp, obj);
      }
    };
    obj6[HubEmailConnectionSteps.VERIFY_EMAIL] = { impressionName: tmp9(1249).ImpressionNames.HUB_EMAIL_SIGNUP, impressionProperties, fullscreen: true, headerLeft: headerBackButton, headerTitle, render };
    obj6[HubEmailConnectionSteps.EMAIL_WAITLIST] = {
      fullscreen: true,
      headerTitle() {
        return null;
      },
      render(arg0) {
        const obj = {};
        const tmp = closure_1_1(invite[9]);
        const merged = Object.assign(arg0);
        return navigation(tmp, obj);
      }
    };
    obj6[HubEmailConnectionSteps.SUBMIT_SCHOOL] = {
      fullscreen: true,
      headerTitle() {
        return null;
      },
      render(arg0) {
        const obj = {};
        const tmp = closure_1_1(invite[10]);
        const merged = Object.assign(arg0);
        return navigation(tmp, obj);
      }
    };
    obj6[HubEmailConnectionSteps.SELECT_SCHOOL] = {
      fullscreen: true,
      headerTitle() {
        return null;
      },
      render(arg0) {
        const obj = {};
        const tmp = closure_1_1(invite[11]);
        const merged = Object.assign(arg0);
        return navigation(tmp, obj);
      }
    };
    obj6[HubEmailConnectionSteps.VERIFY_PIN] = {
      fullscreen: true,
      headerTitle() {
        return null;
      },
      render(arg0) {
        const obj = {};
        const tmp = closure_1_1(invite[12]);
        const merged = Object.assign(arg0);
        return navigation(tmp, obj);
      }
    };
    obj6[HubEmailConnectionSteps.SELECT_SCHOOL_SEARCH] = {
      fullscreen: true,
      headerShown: false,
      render(arg0) {
        const obj = {};
        const tmp = closure_1_1(invite[13]);
        const merged = Object.assign(arg0);
        return navigation(tmp, obj);
      }
    };
    ({ impressionName: tmp9(1249).ImpressionNames.HUB_EMAIL_SIGNUP, impressionProperties, fullscreen: true, headerLeft: headerBackButton, headerTitle, render });
    return obj5;
  });
  ({ screens, initialRouteStack } = tmp);
  const Navigator = Navigator2.Navigator;
  const intl = intl2.intl;
  return <Navigator screens={screens} initialRouteStack={initialRouteStack} headerBackTitle={intl.string(intl2.t["13/7kX"])} />;
};
export const HubEmailConnectionScreen = function HubEmailConnectionScreen(children) {
  children = children.children;
  return jsx(common_SafeAreaView.SafeAreaPaddingView, { top: true, style: closure_5().safeArea, children });
};
