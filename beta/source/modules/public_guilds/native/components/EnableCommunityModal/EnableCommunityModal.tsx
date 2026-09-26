// Module ID: 18103
// Function ID: 18104
// Name: EnableCommunityModal
// Dependencies: [19, 21, 18102, 5879, 5873, 1115, 7651, 7269, 18104, 18105, 18117, 18118, 7277, 2]
// Exports: default

// Module 18103 (EnableCommunityModal)
import util from "util" /* 1115 */;
import NavigatorHeader from "NavigatorHeader" /* 5873 */;
import useNavigatorBackPressHandler from "useNavigatorBackPressHandler" /* 5879 */;
import Navigator from "Navigator" /* 7277 */;
import EnableCommunityModalActionCreatorsDefault from "EnableCommunityModalActionCreators" /* 18102 */;
import EnableCommunitySharedNavigation from "EnableCommunitySharedNavigation" /* 18104 */;
import noop from "module_19" /* 19 */;

require = fn;
function onModalClose() {
  EnableCommunityModalActionCreatorsDefault.close();
}
function HeaderBackButton(arg0) {
  useNavigatorBackPressHandler.useNavigatorBackPressHandler(() => {
    EnableCommunityModalActionCreatorsDefault.close();
    return true;
  });
  const intl = util.intl;
  return NavigatorHeader.getHeaderTextButton(intl.string(util.t["13/7kX"]), onModalClose)(arg0);
}
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/public_guilds/native/components/EnableCommunityModal/EnableCommunityModal.tsx");

export default function EnableCommunityModal() {
  const memo = noop.useMemo(() => {
    function headerRight() {
      const obj = { source: closure_1_1(7269), onPress, accessibilityLabel: null };
      const intl = closure_1_0(1115).intl;
      obj.accessibilityLabel = intl.string(closure_1_0(1115).t.cpT0Cq);
      return closure_1_4(closure_1_0(7651).HeaderActionButton, obj);
    }
    return {
      [closure_1_0(closure_1_2[8]).EnableCommunityModalSteps.STEP_1]: {
        headerRight,
        headerLeft,
        headerTitle() {
          return null;
        },
        render() {
          return closure_1_4(closure_1_1(18105), {});
        }
      },
      [closure_1_0(closure_1_2[8]).EnableCommunityModalSteps.STEP_2]: {
        headerRight,
        headerTitle() {
          return null;
        },
        render() {
          return closure_1_4(closure_1_1(18117), {});
        }
      },
      [closure_1_0(closure_1_2[8]).EnableCommunityModalSteps.STEP_3]: {
        headerRight,
        headerTitle() {
          return null;
        },
        render() {
          return closure_1_4(closure_1_1(18118), {});
        }
      }
    };
  }, []);
  let obj = { screens: memo, initialRouteName: EnableCommunitySharedNavigation.EnableCommunityModalSteps.STEP_1, headerBackTitle: null };
  let intl = util.intl;
  obj.headerBackTitle = intl.string(util.t["13/7kX"]);
  return jsx(Navigator.Navigator, { screens: memo, initialRouteName: EnableCommunitySharedNavigation.EnableCommunityModalSteps.STEP_1, headerBackTitle: null });
};
