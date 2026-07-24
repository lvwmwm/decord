// Module ID: 11809
// Function ID: 91676
// Name: DiscoverabilityLandingScene
// Dependencies: [31, 27, 11733, 1849, 653, 33, 4130, 689, 5084, 1456, 566, 11740, 668, 11760, 11810, 11753, 480, 5517, 1212, 2]

// Module 11809 (DiscoverabilityLandingScene)
import result from "result";
import { View } from "get ActivityIndicator";
import { useContactSyncModalStore } from "initialValues";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
function DiscoverabilityLandingScene() {
  navigation = navigation(allowPhone[9]).useNavigation();
  let obj = navigation(allowPhone[9]);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = navigation(allowPhone[10]).useStateFromStores(items, () => {
    const currentUser = outer1_6.getCurrentUser();
    let phone;
    if (null != currentUser) {
      phone = currentUser.phone;
    }
    return phone;
  });
  const tmp3 = useContactSyncModalStore();
  allowPhone = tmp3.allowPhone;
  const allowEmail = tmp3.allowEmail;
  let tmp4 = allowPhone;
  if (!allowPhone) {
    tmp4 = allowEmail;
  }
  const View = tmp4;
  const items1 = [navigation, stateFromStores, allowEmail, allowPhone, tmp4];
  const onNext = allowEmail.useCallback(() => {
    let obj = stateFromStores(allowPhone[11]);
    obj = { phone: allowPhone, email: allowEmail };
    const result = obj.updateDiscoverability(obj);
    if (closure_4) {
      if (null != stateFromStores) {
        if (allowPhone) {
          navigation.push(navigation(allowPhone[12]).DiscoverabilityScenes.NAME);
        }
      }
    }
    const result1 = navigation(allowPhone[13]).closeDiscoverabilityModal(false);
  }, items1);
  return jsx(stateFromStores(allowPhone[14]), { onNext });
}
function DiscoverabilityNameScene() {
  let allowPhone;
  let name;
  const tmp = _createForOfIteratorHelperLoose();
  ({ name, allowPhone } = useContactSyncModalStore());
  const items = [allowPhone];
  const effect = React.useEffect(() => {
    if (!allowPhone) {
      const result = allowPhone(outer1_2[13]).closeDiscoverabilityModal(false);
      const obj = allowPhone(outer1_2[13]);
    }
  }, items);
  let obj = { style: tmp.container };
  const callback = React.useCallback((arg0) => {
    const result = allowPhone(outer1_2[13]).startContactSyncForDiscoverability(arg0);
    const obj = allowPhone(outer1_2[13]);
    const result1 = allowPhone(outer1_2[13]).closeDiscoverabilityModal(false);
  }, []);
  obj = { onNext: callback, loading: false };
  let str = "";
  const tmp2 = useContactSyncModalStore();
  const tmp5 = jsx;
  const tmp6 = View;
  const tmp7 = jsx;
  if (null != name) {
    str = name;
  }
  obj.initialName = str;
  obj.children = tmp7(importDefault(11753), obj);
  return tmp5(tmp6, obj);
}
class DiscoverabilityModal {
  constructor() {
    obj = {};
    obj.screens = result.useMemo(() => (function getScreens() {
      let obj = {};
      obj = {
        ignoreKeyboard: true,
        impressionName: outer2_0(outer2_2[16]).ImpressionNames.DISCOVERABILITY,
        fullscreen: true,
        headerLeft() {
          return null;
        },
        headerTitle() {
          return null;
        },
        render() {
          return outer3_7(outer3_9, {});
        }
      };
      obj[outer2_0(outer2_2[12]).DiscoverabilityScenes.LANDING] = obj;
      obj = {
        ignoreKeyboard: true,
        impressionName: outer2_0(outer2_2[16]).ImpressionNames.DISCOVERABILITY,
        fullscreen: true,
        headerTitle() {
          return null;
        },
        render() {
          return outer3_7(outer3_10, {});
        }
      };
      obj[outer2_0(outer2_2[12]).DiscoverabilityScenes.NAME] = obj;
      return obj;
    })(), []);
    obj.initialRouteName = require("keys").DiscoverabilityScenes.LANDING;
    intl = require("getSystemLocale").intl;
    obj.headerBackTitle = intl.string(require("getSystemLocale").t["13/7kX"]);
    return jsx(require("NavigationStack").Navigator, obj);
  }
}
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, justifyContent: "center", paddingBottom: 44, paddingTop: require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT + 32 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
DiscoverabilityModal.modalConfig = { animation: require("ME").ModalAnimation.SLIDE_IN_OUT };
let result = require("initialValues").fileFinishedImporting("modules/nuf/native/components/DiscoverabilityModal.tsx");

export default DiscoverabilityModal;
