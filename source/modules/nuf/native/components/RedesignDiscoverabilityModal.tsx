// Module ID: 16133
// Function ID: 125054
// Name: DiscoverabilityLandingScene
// Dependencies: [31, 27, 11706, 1849, 653, 33, 4130, 689, 5084, 1456, 566, 11713, 668, 16134, 11733, 11726, 480, 11725, 5519, 1212, 2]

// Module 16133 (DiscoverabilityLandingScene)
import result from "result";
import { View } from "get ActivityIndicator";
import { useContactSyncModalStore } from "initialValues";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
function DiscoverabilityLandingScene(onComplete) {
  onComplete = onComplete.onComplete;
  let c6;
  const navigation = onComplete(stateFromStores[9]).useNavigation();
  let obj = onComplete(stateFromStores[9]);
  const items = [c6];
  stateFromStores = onComplete(stateFromStores[10]).useStateFromStores(items, () => {
    const currentUser = _undefined.getCurrentUser();
    let phone;
    if (null != currentUser) {
      phone = currentUser.phone;
    }
    return phone;
  });
  const tmp3 = allowEmail();
  const allowPhone = tmp3.allowPhone;
  const name = tmp3.name;
  allowEmail = tmp3.allowEmail;
  let tmp4 = allowPhone;
  if (!allowPhone) {
    tmp4 = allowEmail;
  }
  c6 = tmp4;
  const items1 = [allowPhone, allowEmail, tmp4, stateFromStores, name, navigation, onComplete];
  const onNext = allowPhone.useCallback(() => {
    let obj = navigation(stateFromStores[11]);
    obj = { phone: allowPhone, email: allowEmail };
    const result = obj.updateDiscoverability(obj);
    if (c6) {
      if (null != stateFromStores) {
        if (allowPhone) {
          if (null == name) {
            navigation.push(onComplete(stateFromStores[12]).DiscoverabilityScenes.NAME);
          }
        }
      }
    }
    onComplete();
  }, items1);
  return jsx(navigation(stateFromStores[13]), { onNext });
}
function DiscoverabilityNameScene(onComplete) {
  let allowPhone;
  let name;
  onComplete = onComplete.onComplete;
  const tmp = _createForOfIteratorHelperLoose();
  ({ name, allowPhone } = useContactSyncModalStore());
  const items = [allowPhone, onComplete];
  const effect = React.useEffect(() => {
    if (!allowPhone) {
      onComplete();
    }
  }, items);
  const items1 = [onComplete];
  let obj = { style: tmp.container };
  const callback = React.useCallback((arg0) => {
    const result = onComplete(outer1_2[14]).startContactSyncForDiscoverability(arg0);
    onComplete();
  }, items1);
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
  obj.children = tmp7(allowPhone(11726), obj);
  return tmp5(tmp6, obj);
}
class RedesignDiscoverabilityModal {
  constructor(arg0) {
    onComplete = global.route.params.onComplete;
    tmp = c8();
    obj = { headerStyle: tmp.header };
    items = [];
    items[0] = onComplete;
    obj.screens = result.useMemo(() => (function getScreens(arg0) {
      let closure_0 = arg0;
      let obj = {};
      obj = {
        ignoreKeyboard: true,
        impressionName: onComplete(outer2_2[16]).ImpressionNames.DISCOVERABILITY,
        fullscreen: true,
        headerLeft() {
          return null;
        },
        headerTitle() {
          return null;
        },
        headerRight(arg0) {
          const obj = { insideNavigator: true };
          const merged = Object.assign(arg0);
          obj["onPress"] = function onPress() {
            return outer1_0(true);
          };
          return outer3_7(outer3_1(outer3_2[17]), obj);
        },
        render() {
          return outer3_7(outer3_9, { onComplete: closure_0 });
        }
      };
      obj[onComplete(outer2_2[12]).DiscoverabilityScenes.LANDING] = obj;
      obj = {
        ignoreKeyboard: true,
        impressionName: onComplete(outer2_2[16]).ImpressionNames.DISCOVERABILITY,
        fullscreen: true,
        headerTitle() {
          return null;
        },
        render() {
          return outer3_7(outer3_10, { onComplete: closure_0 });
        }
      };
      obj[onComplete(outer2_2[12]).DiscoverabilityScenes.NAME] = obj;
      return obj;
    })(null != onComplete ? onComplete : (() => {

    })), items);
    obj.initialRouteName = require("keys").DiscoverabilityScenes.LANDING;
    intl = require("getSystemLocale").intl;
    obj.headerBackTitle = intl.string(require("getSystemLocale").t["13/7kX"]);
    return jsx(require("NavigationStack").Navigator, obj);
  }
}
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { borderBottomWidth: 0, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, shadowColor: "transparent" };
_createForOfIteratorHelperLoose.header = _createForOfIteratorHelperLoose;
const obj1 = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, justifyContent: "center", paddingBottom: 44, paddingTop: require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT + 32 };
_createForOfIteratorHelperLoose.container = obj1;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
RedesignDiscoverabilityModal.modalConfig = { animation: require("ME").ModalAnimation.SLIDE_IN_OUT };
let result = require("initialValues").fileFinishedImporting("modules/nuf/native/components/RedesignDiscoverabilityModal.tsx");

export default RedesignDiscoverabilityModal;
