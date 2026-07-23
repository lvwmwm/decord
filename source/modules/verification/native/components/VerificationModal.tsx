// Module ID: 16196
// Function ID: 125696
// Name: PhoneThenEmailInterstitial
// Dependencies: [5, 31, 27, 16197, 1342, 1849, 653, 33, 4130, 1273, 16198, 1212, 4543, 480, 5087, 5788, 8468, 5497, 5590, 16202, 9188, 9193, 9190, 9228, 9238, 9239, 9189, 16203, 9262, 9233, 566, 4098, 3989, 5519, 2]
// Exports: default

// Module 16196 (PhoneThenEmailInterstitial)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import showActionSheet from "showActionSheet";
import { View } from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import ME from "ME";
import { jsx } from "NavigationStack";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_9;
const require = arg1;
function PhoneThenEmailInterstitial(navigation) {
  navigation = navigation.navigation;
  let obj = { Illustration: navigation(16198).VerifyPhone };
  const intl = navigation(1212).intl;
  obj.title = intl.string(navigation(1212).t.KLnLIP);
  const intl2 = navigation(1212).intl;
  obj.body = intl2.string(navigation(1212).t.XGbCq3);
  obj = { style: callback().button };
  obj = {};
  const intl3 = navigation(1212).intl;
  obj.text = intl3.string(navigation(1212).t["3oK4qw"]);
  obj.onPress = function onPress() {
    const currentUser = outer1_8.getCurrentUser();
    let email;
    if (null != currentUser) {
      email = currentUser.email;
    }
    if (null != email) {
      let ENTER_EMAIL = outer1_10.RESEND_EMAIL;
    } else {
      ENTER_EMAIL = outer1_10.ENTER_EMAIL;
    }
    navigation.push(ENTER_EMAIL);
  };
  obj.children = jsx(navigation(4543).Button, {});
  obj.children = <View />;
  return jsx(navigation(1273).EmptyState, {});
}
({ UserRequiredActions: closure_9, VerificationModalScenes: closure_10 } = ME);
let closure_12 = _createForOfIteratorHelperLoose.createStyles({ button: { position: "absolute", right: 32, bottom: 32, left: 32 } });
let result = require("get ActivityIndicator").fileFinishedImporting("modules/verification/native/components/VerificationModal.tsx");

export default function VerificationModal() {
  let obj = stateFromStores(566);
  let items = [closure_6];
  stateFromStores = obj.useStateFromStores(items, () => outer1_6.getCountrySelectorOpened());
  const items1 = [stateFromStores];
  const memo = React.useMemo(() => {
    let obj = { name: outer1_10.OVERVIEW };
    const items = [obj];
    if (stateFromStores) {
      obj = { name: outer1_10.ADD_PHONE };
      items.push(obj);
    }
    return items;
  }, items1);
  const effect = React.useEffect(() => {
    outer1_1(outer1_2[31]).hideActionSheet();
    const obj = outer1_1(outer1_2[31]);
    stateFromStores(outer1_2[32]).dismissKeyboard();
  }, []);
  obj = {
    screens: React.useMemo(() => (function getScreens() {
      function impressionProperties(RESEND_EMAIL) {
        return { impression_group: stateFromStores(outer3_2[13]).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: RESEND_EMAIL };
      }
      let obj = {};
      obj = { impressionName: stateFromStores(outer2_2[13]).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: impressionProperties(outer2_10.CHANGE_EMAIL_COLLECT_REASONS) };
      let obj2 = stateFromStores(outer2_2[14]);
      obj.headerTitle = obj2.getHeaderNoTitle();
      obj.render = function render() {
        return null;
      };
      obj[outer2_10.CHANGE_EMAIL_COLLECT_REASONS] = obj;
      obj = { impressionName: stateFromStores(outer2_2[13]).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: impressionProperties(outer2_10.CHANGE_EMAIL_WARNING) };
      let obj4 = stateFromStores(outer2_2[14]);
      obj.headerTitle = obj4.getHeaderNoTitle();
      obj.render = function render() {
        return null;
      };
      obj[outer2_10.CHANGE_EMAIL_WARNING] = obj;
      const obj1 = {
        impressionName: stateFromStores(outer2_2[13]).ImpressionNames.USER_VERIFICATION_MODAL,
        impressionProperties: impressionProperties(outer2_10.OVERVIEW),
        gestureEnabled: false,
        headerLeft() {
          return null;
        }
      };
      let obj6 = stateFromStores(outer2_2[14]);
      obj1.headerTitle = obj6.getHeaderNoTitle();
      obj1.headerRight = function headerRight() {
        let obj = { source: outer3_1(outer3_2[16]) };
        let intl = stateFromStores(outer3_2[11]).intl;
        obj.accessibilityLabel = intl.string(stateFromStores(outer3_2[11]).t.PdRCRg);
        obj.onPress = function onPress() {
          let obj = stateFromStores(outer4_2[17]);
          obj = { key: "VerificationOverviewMore", options: null, hasIcons: false };
          obj = {};
          const intl = stateFromStores(outer4_2[11]).intl;
          obj.label = intl.string(stateFromStores(outer4_2[11]).t["2jxGer"]);
          obj.isDestructive = true;
          obj.onPress = function onPress() { ... };
          const items = [obj];
          obj.options = items;
          const result = obj.showSimpleActionSheet(obj);
        };
        return outer3_11(stateFromStores(outer3_2[15]).HeaderActionButton, obj);
      };
      obj1.render = function render() {
        return outer3_11(outer3_1(outer3_2[19]), {});
      };
      obj[outer2_10.OVERVIEW] = obj1;
      obj2 = { impressionName: stateFromStores(outer2_2[13]).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: impressionProperties(outer2_10.RESEND_EMAIL) };
      let obj8 = stateFromStores(outer2_2[14]);
      obj2.headerTitle = obj8.getHeaderNoTitle();
      obj2.render = function render() {
        return outer3_11(outer3_1(outer3_2[20]), {});
      };
      obj[outer2_10.RESEND_EMAIL] = obj2;
      const obj3 = { impressionName: stateFromStores(outer2_2[13]).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: impressionProperties(outer2_10.RESEND_EMAIL) };
      let obj10 = stateFromStores(outer2_2[14]);
      obj3.headerTitle = obj10.getHeaderNoTitle();
      obj3.render = function render() {
        return outer3_11(outer3_1(outer3_2[20]), {});
      };
      obj[outer2_10.CHANGE_EMAIL_COMPLETE] = obj3;
      obj4 = {
        impressionName: stateFromStores(outer2_2[13]).ImpressionNames.USER_VERIFICATION_MODAL,
        impressionProperties: impressionProperties(outer2_10.CONFIRM_EMAIL_CHANGE_CODE),
        headerTitle: stateFromStores(outer2_2[14]).getHeaderNoTitle(),
        render() {
          return outer3_11(outer3_1(outer3_2[21]), { isChangeEmail: false });
        }
      };
      obj[outer2_10.CONFIRM_EMAIL_CHANGE_CODE] = obj4;
      const obj5 = { impressionName: stateFromStores(outer2_2[13]).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: impressionProperties(outer2_10.CONFIRM_EMAIL_CHANGE_START) };
      const obj13 = stateFromStores(outer2_2[14]);
      obj5.headerTitle = stateFromStores(outer2_2[14]).getHeaderNoTitle();
      obj5.render = function render() {
        return outer3_11(outer3_1(outer3_2[22]), {});
      };
      obj[outer2_10.CONFIRM_EMAIL_CHANGE_START] = obj5;
      obj6 = { impressionName: stateFromStores(outer2_2[13]).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: impressionProperties(outer2_10.ENTER_EMAIL) };
      const obj15 = stateFromStores(outer2_2[14]);
      obj6.headerTitle = stateFromStores(outer2_2[14]).getHeaderNoTitle();
      obj6.render = function render() {
        return outer3_11(outer3_1(outer3_2[23]), { isChangeEmail: false });
      };
      obj[outer2_10.ENTER_EMAIL] = obj6;
      const obj7 = { impressionName: stateFromStores(outer2_2[13]).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: impressionProperties(outer2_10.ADD_PHONE) };
      const obj17 = stateFromStores(outer2_2[14]);
      obj7.headerTitle = stateFromStores(outer2_2[14]).getHeaderNoTitle();
      obj7.render = function render(arg0, arg1) {
        let closure_0 = arg1;
        let obj = {};
        const merged = Object.assign(arg0);
        obj["reason"] = stateFromStores(outer3_2[25]).ChangePhoneReason.USER_ACTION_REQUIRED;
        obj["onComplete"] = function onComplete(phone) {
          return arr.push(outer4_10.VERIFY_PHONE, { phone, onVerified() { ... } });
        };
        return outer3_11(outer3_1(outer3_2[24]), obj);
      };
      obj[outer2_10.ADD_PHONE] = obj7;
      obj8 = { impressionName: stateFromStores(outer2_2[13]).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: impressionProperties(outer2_10.VERIFY_PHONE) };
      const obj19 = stateFromStores(outer2_2[14]);
      obj8.headerTitle = stateFromStores(outer2_2[14]).getHeaderNoTitle();
      obj8.render = function render(arg0) {
        const merged = Object.assign(arg0);
        return outer3_11(outer3_1(outer3_2[28]), { disableKeyboardAvoidingView: true });
      };
      obj[outer2_10.VERIFY_PHONE] = obj8;
      const obj9 = { impressionName: stateFromStores(outer2_2[13]).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: impressionProperties(outer2_10.VERIFY_PASSWORD) };
      const obj21 = stateFromStores(outer2_2[14]);
      obj9.headerTitle = stateFromStores(outer2_2[14]).getHeaderNoTitle();
      obj9.render = function render(arg0) {
        const merged = Object.assign(arg0);
        return outer3_11(outer3_1(outer3_2[29]), {});
      };
      obj[outer2_10.VERIFY_PASSWORD] = obj9;
      obj10 = { impressionName: stateFromStores(outer2_2[13]).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: impressionProperties(outer2_10.PHONE_THEN_EMAIL_INTERSTITIAL) };
      const obj23 = stateFromStores(outer2_2[14]);
      obj10.headerTitle = stateFromStores(outer2_2[14]).getHeaderNoTitle();
      obj10.render = function render(arg0, navigation) {
        return outer3_11(outer3_13, { navigation });
      };
      obj[outer2_10.PHONE_THEN_EMAIL_INTERSTITIAL] = obj10;
      return obj;
    })(), []),
    initialRouteStack: memo
  };
  let intl = stateFromStores(1212).intl;
  obj.headerBackTitle = intl.string(stateFromStores(1212).t["13/7kX"]);
  return jsx(stateFromStores(5519).Navigator, {
    screens: React.useMemo(() => (function getScreens() {
      function impressionProperties(RESEND_EMAIL) {
        return { impression_group: stateFromStores(outer3_2[13]).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: RESEND_EMAIL };
      }
      let obj = {};
      obj = { impressionName: stateFromStores(outer2_2[13]).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: impressionProperties(outer2_10.CHANGE_EMAIL_COLLECT_REASONS) };
      let obj2 = stateFromStores(outer2_2[14]);
      obj.headerTitle = obj2.getHeaderNoTitle();
      obj.render = function render() {
        return null;
      };
      obj[outer2_10.CHANGE_EMAIL_COLLECT_REASONS] = obj;
      obj = { impressionName: stateFromStores(outer2_2[13]).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: impressionProperties(outer2_10.CHANGE_EMAIL_WARNING) };
      let obj4 = stateFromStores(outer2_2[14]);
      obj.headerTitle = obj4.getHeaderNoTitle();
      obj.render = function render() {
        return null;
      };
      obj[outer2_10.CHANGE_EMAIL_WARNING] = obj;
      const obj1 = {
        impressionName: stateFromStores(outer2_2[13]).ImpressionNames.USER_VERIFICATION_MODAL,
        impressionProperties: impressionProperties(outer2_10.OVERVIEW),
        gestureEnabled: false,
        headerLeft() {
          return null;
        }
      };
      let obj6 = stateFromStores(outer2_2[14]);
      obj1.headerTitle = obj6.getHeaderNoTitle();
      obj1.headerRight = function headerRight() {
        let obj = { source: outer3_1(outer3_2[16]) };
        let intl = stateFromStores(outer3_2[11]).intl;
        obj.accessibilityLabel = intl.string(stateFromStores(outer3_2[11]).t.PdRCRg);
        obj.onPress = function onPress() {
          let obj = stateFromStores(outer4_2[17]);
          obj = { key: "VerificationOverviewMore", options: null, hasIcons: false };
          obj = {};
          const intl = stateFromStores(outer4_2[11]).intl;
          obj.label = intl.string(stateFromStores(outer4_2[11]).t["2jxGer"]);
          obj.isDestructive = true;
          obj.onPress = function onPress() { ... };
          const items = [obj];
          obj.options = items;
          const result = obj.showSimpleActionSheet(obj);
        };
        return outer3_11(stateFromStores(outer3_2[15]).HeaderActionButton, obj);
      };
      obj1.render = function render() {
        return outer3_11(outer3_1(outer3_2[19]), {});
      };
      obj[outer2_10.OVERVIEW] = obj1;
      obj2 = { impressionName: stateFromStores(outer2_2[13]).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: impressionProperties(outer2_10.RESEND_EMAIL) };
      let obj8 = stateFromStores(outer2_2[14]);
      obj2.headerTitle = obj8.getHeaderNoTitle();
      obj2.render = function render() {
        return outer3_11(outer3_1(outer3_2[20]), {});
      };
      obj[outer2_10.RESEND_EMAIL] = obj2;
      const obj3 = { impressionName: stateFromStores(outer2_2[13]).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: impressionProperties(outer2_10.RESEND_EMAIL) };
      let obj10 = stateFromStores(outer2_2[14]);
      obj3.headerTitle = obj10.getHeaderNoTitle();
      obj3.render = function render() {
        return outer3_11(outer3_1(outer3_2[20]), {});
      };
      obj[outer2_10.CHANGE_EMAIL_COMPLETE] = obj3;
      obj4 = {
        impressionName: stateFromStores(outer2_2[13]).ImpressionNames.USER_VERIFICATION_MODAL,
        impressionProperties: impressionProperties(outer2_10.CONFIRM_EMAIL_CHANGE_CODE),
        headerTitle: stateFromStores(outer2_2[14]).getHeaderNoTitle(),
        render() {
          return outer3_11(outer3_1(outer3_2[21]), { isChangeEmail: false });
        }
      };
      obj[outer2_10.CONFIRM_EMAIL_CHANGE_CODE] = obj4;
      const obj5 = { impressionName: stateFromStores(outer2_2[13]).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: impressionProperties(outer2_10.CONFIRM_EMAIL_CHANGE_START) };
      const obj13 = stateFromStores(outer2_2[14]);
      obj5.headerTitle = stateFromStores(outer2_2[14]).getHeaderNoTitle();
      obj5.render = function render() {
        return outer3_11(outer3_1(outer3_2[22]), {});
      };
      obj[outer2_10.CONFIRM_EMAIL_CHANGE_START] = obj5;
      obj6 = { impressionName: stateFromStores(outer2_2[13]).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: impressionProperties(outer2_10.ENTER_EMAIL) };
      const obj15 = stateFromStores(outer2_2[14]);
      obj6.headerTitle = stateFromStores(outer2_2[14]).getHeaderNoTitle();
      obj6.render = function render() {
        return outer3_11(outer3_1(outer3_2[23]), { isChangeEmail: false });
      };
      obj[outer2_10.ENTER_EMAIL] = obj6;
      const obj7 = { impressionName: stateFromStores(outer2_2[13]).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: impressionProperties(outer2_10.ADD_PHONE) };
      const obj17 = stateFromStores(outer2_2[14]);
      obj7.headerTitle = stateFromStores(outer2_2[14]).getHeaderNoTitle();
      obj7.render = function render(arg0, arg1) {
        let closure_0 = arg1;
        let obj = {};
        const merged = Object.assign(arg0);
        obj["reason"] = stateFromStores(outer3_2[25]).ChangePhoneReason.USER_ACTION_REQUIRED;
        obj["onComplete"] = function onComplete(phone) {
          return arr.push(outer4_10.VERIFY_PHONE, { phone, onVerified() { ... } });
        };
        return outer3_11(outer3_1(outer3_2[24]), obj);
      };
      obj[outer2_10.ADD_PHONE] = obj7;
      obj8 = { impressionName: stateFromStores(outer2_2[13]).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: impressionProperties(outer2_10.VERIFY_PHONE) };
      const obj19 = stateFromStores(outer2_2[14]);
      obj8.headerTitle = stateFromStores(outer2_2[14]).getHeaderNoTitle();
      obj8.render = function render(arg0) {
        const merged = Object.assign(arg0);
        return outer3_11(outer3_1(outer3_2[28]), { disableKeyboardAvoidingView: true });
      };
      obj[outer2_10.VERIFY_PHONE] = obj8;
      const obj9 = { impressionName: stateFromStores(outer2_2[13]).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: impressionProperties(outer2_10.VERIFY_PASSWORD) };
      const obj21 = stateFromStores(outer2_2[14]);
      obj9.headerTitle = stateFromStores(outer2_2[14]).getHeaderNoTitle();
      obj9.render = function render(arg0) {
        const merged = Object.assign(arg0);
        return outer3_11(outer3_1(outer3_2[29]), {});
      };
      obj[outer2_10.VERIFY_PASSWORD] = obj9;
      obj10 = { impressionName: stateFromStores(outer2_2[13]).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: impressionProperties(outer2_10.PHONE_THEN_EMAIL_INTERSTITIAL) };
      const obj23 = stateFromStores(outer2_2[14]);
      obj10.headerTitle = stateFromStores(outer2_2[14]).getHeaderNoTitle();
      obj10.render = function render(arg0, navigation) {
        return outer3_11(outer3_13, { navigation });
      };
      obj[outer2_10.PHONE_THEN_EMAIL_INTERSTITIAL] = obj10;
      return obj;
    })(), []),
    initialRouteStack: memo
  });
};
