// Module ID: 17467
// Function ID: 17468
// Name: EnableCommunityModal
// Dependencies: [19, 21, 17466, 5942, 5936, 1115, 6795, 6413, 17468, 17469, 17481, 17482, 6421, 2]
// Exports: default

// Module 17467 (EnableCommunityModal)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1115 */;
import NavigatorHeader from "NavigatorHeader" /* 5936 */;
import useNavigatorBackPressHandler from "useNavigatorBackPressHandler" /* 5942 */;
import Navigator2 from "Navigator" /* 6421 */;
import EnableCommunityModalActionCreatorsDefault from "EnableCommunityModalActionCreators" /* 17466 */;
import EnableCommunitySharedNavigation from "EnableCommunitySharedNavigation" /* 17468 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

function onModalClose() {
  const obj = EnableCommunityModalActionCreatorsDefault;
  obj.close();
}
function HeaderBackButton(arg0) {
  let obj = useNavigatorBackPressHandler;
  obj.useNavigatorBackPressHandler(() => {
    const obj = EnableCommunityModalActionCreatorsDefault;
    obj.close();
    return true;
  });
  const getHeaderTextButton = NavigatorHeader.getHeaderTextButton;
  NavigatorHeader;
  const intl = intl2.intl;
  return getHeaderTextButton(intl.string(intl2.t["13/7kX"]), onModalClose)(arg0);
}
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/public_guilds/native/components/EnableCommunityModal/EnableCommunityModal.tsx");

export default function EnableCommunityModal() {
  let headerLeft;
  const memo = react.useMemo(() => {
    let onPress;
    function headerRight() {
      let intl;
      const obj = { source: closure_1_1(closure_1_2[7]), onPress, accessibilityLabel: intl.string(closure_1_0(closure_1_2[5]).t.cpT0Cq) };
      const HeaderActionButton = closure_1_0(closure_1_2[6]).HeaderActionButton;
      intl = closure_1_0(closure_1_2[5]).intl;
      return closure_1_4(HeaderActionButton, obj);
    }
    let obj = {
      headerRight,
      headerLeft,
      headerTitle() {
        return null;
      },
      render() {
        return closure_1_4(closure_1_1(closure_1_2[9]), {});
      }
    };
    const obj2 = {
      headerRight,
      headerTitle() {
        return null;
      },
      render() {
        return closure_1_4(closure_1_1(closure_1_2[10]), {});
      }
    };
    const obj3 = {
      headerRight,
      headerTitle() {
        return null;
      },
      render() {
        return closure_1_4(closure_1_1(closure_1_2[11]), {});
      }
    };
    return { [closure_1_0(closure_1_2[8]).EnableCommunityModalSteps.STEP_1]: obj, [closure_1_0(closure_1_2[8]).EnableCommunityModalSteps.STEP_2]: obj2, [closure_1_0(closure_1_2[8]).EnableCommunityModalSteps.STEP_3]: obj3 };
  }, []);
  const Navigator = Navigator2.Navigator;
  let intl = intl2.intl;
  return <Navigator screens={memo} initialRouteName={EnableCommunitySharedNavigation.EnableCommunityModalSteps.STEP_1} headerBackTitle={intl.string(intl2.t["13/7kX"])} />;
};
