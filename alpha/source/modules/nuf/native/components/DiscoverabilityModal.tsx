// Module ID: 14346
// Function ID: 14347
// Name: DiscoverabilityModal
// Dependencies: [19, 17, 14233, 1383, 1072, 21, 5014, 575, 5586, 1497, 504, 14240, 1092, 14261, 14347, 14254, 1260, 7169, 1113, 2]

// Module 14346 (DiscoverabilityModal)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import ConstantsIOS from "ConstantsIOS" /* 1092 */;
import intl2 from "intl" /* 1113 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1260 */;
import NavigatorConstants from "NavigatorConstants" /* 5586 */;
import Navigator2 from "Navigator" /* 7169 */;
import ContactSyncModalStore from "ContactSyncModalStore" /* 14233 */;
import ContactSyncActionCreatorsDefault from "ContactSyncActionCreators" /* 14240 */;
import ContactSyncNameInputDefault from "ContactSyncNameInput" /* 14254 */;
import NUFActionCreators from "NUFActionCreators" /* 14261 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1383 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let currentUser, navigation;

let obj2;
function DiscoverabilityLandingScene() {
  let allowPhone;
  let obj = navigation(allowPhone[9]);
  navigation = obj.useNavigation();
  let obj2 = navigation(allowPhone[10]);
  const items = [UserStore];
  const stateFromStores = obj2.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let phone;
    if (currentUser != null) {
      phone = currentUser.phone;
    }
    return phone;
  });
  let tmp4 = useContactSyncModalStore();
  const tmp = allowPhone;
  allowPhone = tmp4.allowPhone;
  const allowEmail = tmp4.allowEmail;
  let closure_4 = tmp5;
  const items1 = [navigation, stateFromStores, allowEmail, allowPhone, tmp5];
  const onNext = allowEmail.useCallback(() => {
    const obj = ContactSyncActionCreatorsDefault;
    const obj2 = { phone: allowPhone, email: allowEmail };
    const result = obj.updateDiscoverability(obj2);
    const tmp2 = allowPhone;
    const tmp4 = closure_4;
    if (tmp4) {
      if (null != stateFromStores) {
        if (tmp2) {
          navigation.push(ConstantsIOS.DiscoverabilityScenes.NAME);
        }
      }
    }
    const obj3 = NUFActionCreators;
    const result1 = obj3.closeDiscoverabilityModal(false);
  }, items1);
  return jsx(stateFromStores(tmp[14]), { onNext });
}
function DiscoverabilityNameScene() {
  let allowPhone;
  let name;
  let tmp = closure_8();
  ({ name, allowPhone } = useContactSyncModalStore());
  const items = [allowPhone];
  const tmp2 = useContactSyncModalStore();
  const effect = react.useEffect(() => {
    const tmp = allowPhone;
    if (!tmp) {
      const obj = NUFActionCreators;
      const result = obj.closeDiscoverabilityModal(false);
    }
  }, items);
  const callback = react.useCallback((arg0) => {
    const obj = allowPhone(dependencyMap[13]);
    const result = obj.startContactSyncForDiscoverability(arg0);
    const obj2 = allowPhone(dependencyMap[13]);
    const result1 = obj2.closeDiscoverabilityModal(false);
  }, []);
  let obj2 = { onNext: callback, loading: false, initialName: name };
  ContactSyncNameInputDefault;
  if (name == null) {
    name = "";
  }
  return <tmp6 style={tmp.container}>{null}</tmp6>;
}
class DiscoverabilityModal {
  constructor() {
    const Navigator = Navigator2.Navigator;
    const intl = intl2.intl;
    return <Navigator screens={react.useMemo(() => {
      const obj = {};
      const obj2 = {
        ignoreKeyboard: true,
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.DISCOVERABILITY,
        fullscreen: true,
        headerLeft() {
          return null;
        },
        headerTitle() {
          return null;
        },
        render() {
          return closure_1_7(closure_1_9, {});
        }
      };
      const LANDING = ConstantsIOS.DiscoverabilityScenes.LANDING;
      obj[LANDING] = obj2;
      const obj3 = {
        ignoreKeyboard: true,
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.DISCOVERABILITY,
        fullscreen: true,
        headerTitle() {
          return null;
        },
        render() {
          return closure_1_7(closure_1_10, {});
        }
      };
      const NAME = ConstantsIOS.DiscoverabilityScenes.NAME;
      obj[NAME] = obj3;
      return obj;
    }, [])} initialRouteName={ConstantsIOS.DiscoverabilityScenes.LANDING} headerBackTitle={intl.string(intl2.t["13/7kX"])} />;
  }
}
const View = react_native.View;
const useContactSyncModalStore = ContactSyncModalStore.useContactSyncModalStore;
const ModalAnimation = Constants.ModalAnimation;
const jsx = Fragment.jsx;
let obj = { container: obj2 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, justifyContent: "center", paddingBottom: 44, paddingTop: NavigatorConstants.NAV_BAR_HEIGHT + 32 };
let closure_8 = createStyles.createStyles(obj);
DiscoverabilityModal.modalConfig = { animation: ModalAnimation.SLIDE_IN_OUT };
let result = size.fileFinishedImporting("modules/nuf/native/components/DiscoverabilityModal.tsx");

export default DiscoverabilityModal;
