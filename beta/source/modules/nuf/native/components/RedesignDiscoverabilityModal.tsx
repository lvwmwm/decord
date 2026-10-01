// Module ID: 17221
// Function ID: 17222
// Name: RedesignDiscoverabilityModal
// Dependencies: [19, 17, 12174, 1372, 1074, 21, 4836, 576, 5994, 1485, 504, 12181, 1094, 17222, 12201, 12194, 1249, 12193, 6421, 1115, 2]

// Module 17221 (RedesignDiscoverabilityModal)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import ConstantsIOS from "ConstantsIOS" /* 1094 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1249 */;
import NavigatorConstants from "NavigatorConstants" /* 5994 */;
import ContactSyncModalStore from "ContactSyncModalStore" /* 12174 */;
import ContactSyncActionCreatorsDefault from "ContactSyncActionCreators" /* 12181 */;
import NUFActionCreators from "NUFActionCreators" /* 12201 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1372 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let navigation;

let obj2;
let obj3;
function DiscoverabilityLandingScene(onComplete) {
  onComplete = onComplete.onComplete;
  let stateFromStores;
  let allowEmail;
  let currentUser;
  let obj = onComplete(stateFromStores[9]);
  navigation = obj.useNavigation();
  let obj2 = onComplete(stateFromStores[10]);
  const items = [currentUser];
  const tmp = stateFromStores;
  stateFromStores = obj2.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let phone;
    if (currentUser != null) {
      phone = currentUser.phone;
    }
    return phone;
  });
  let tmp4 = allowEmail();
  const allowPhone = tmp4.allowPhone;
  const name = tmp4.name;
  allowEmail = tmp4.allowEmail;
  currentUser = tmp5;
  const items1 = [allowPhone, allowEmail, tmp5, stateFromStores, name, navigation, onComplete];
  const onNext = allowPhone.useCallback(() => {
    const obj = ContactSyncActionCreatorsDefault;
    const obj2 = { phone: allowPhone, email: allowEmail };
    const result = obj.updateDiscoverability(obj2);
    const tmp2 = allowPhone;
    const tmp4 = currentUser;
    if (tmp4) {
      if (null != stateFromStores) {
        if (tmp2) {
          if (null == name) {
            navigation.push(ConstantsIOS.DiscoverabilityScenes.NAME);
          }
        }
      }
    }
    onComplete();
  }, items1);
  return jsx(navigation(tmp[13]), { onNext });
}
function DiscoverabilityNameScene(onComplete) {
  let allowPhone;
  let name;
  onComplete = onComplete.onComplete;
  allowPhone = undefined;
  let tmp = closure_8();
  ({ name, allowPhone } = useContactSyncModalStore());
  const items = [allowPhone, onComplete];
  const tmp2 = useContactSyncModalStore();
  const effect = react.useEffect(() => {
    const tmp = allowPhone;
    if (!tmp) {
      onComplete();
    }
  }, items);
  const items1 = [onComplete];
  const callback = react.useCallback((arg0) => {
    const obj = NUFActionCreators;
    const result = obj.startContactSyncForDiscoverability(arg0);
    onComplete();
  }, items1);
  allowPhone(12194);
  if (name == null) {
    name = "";
  }
  return <tmp6 style={tmp.container}>{null}</tmp6>;
}
class RedesignDiscoverabilityModal {
  constructor(route) {
    const onComplete = route.route.params.onComplete;
    let tmp = closure_8();
    const items = [onComplete];
    const Navigator = onComplete(6421).Navigator;
    const intl = onComplete(1115).intl;
    return <Navigator headerStyle={tmp.header} screens={react.useMemo(() => {
      if (null == onComplete) {
        const fn = () => {

        };
      }
      let obj = {};
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
        headerRight(arg0) {
          const obj = {
            insideNavigator: true,
            onPress() {
              return onComplete(true);
            }
          };
          const tmp = closure_2_1(closure_2_2[17]);
          const merged = Object.assign(arg0);
          return closure_2_7(tmp, obj);
        },
        render() {
          const obj = { onComplete };
          return closure_2_7(closure_2_9, obj);
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
          const obj = { onComplete };
          return closure_2_7(closure_2_10, obj);
        }
      };
      const NAME = ConstantsIOS.DiscoverabilityScenes.NAME;
      obj[NAME] = obj3;
      return obj;
    }, items)} initialRouteName={onComplete(1094).DiscoverabilityScenes.LANDING} headerBackTitle={intl.string(onComplete(1115).t["13/7kX"])} />;
  }
}
const View = react_native.View;
const useContactSyncModalStore = ContactSyncModalStore.useContactSyncModalStore;
const ModalAnimation = Constants.ModalAnimation;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { header: obj2, container: obj3 };
obj2 = { borderBottomWidth: 0, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, shadowColor: "transparent" };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, justifyContent: "center", paddingBottom: 44, paddingTop: NavigatorConstants.NAV_BAR_HEIGHT + 32 };
const metroImportAll = createStyles(obj);
RedesignDiscoverabilityModal.modalConfig = { animation: ModalAnimation.SLIDE_IN_OUT };
let result = size.fileFinishedImporting("modules/nuf/native/components/RedesignDiscoverabilityModal.tsx");

export default RedesignDiscoverabilityModal;
