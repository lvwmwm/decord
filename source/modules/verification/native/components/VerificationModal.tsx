// Module ID: 16079
// Function ID: 123523
// Name: PhoneThenEmailInterstitial
// Dependencies: []
// Exports: default

// Module 16079 (PhoneThenEmailInterstitial)
function PhoneThenEmailInterstitial(navigation) {
  const arg1 = navigation.navigation;
  let obj = { Illustration: arg1(dependencyMap[10]).VerifyPhone };
  const intl = arg1(dependencyMap[11]).intl;
  obj.title = intl.string(arg1(dependencyMap[11]).t.KLnLIP);
  const intl2 = arg1(dependencyMap[11]).intl;
  obj.body = intl2.string(arg1(dependencyMap[11]).t.XGbCq3);
  obj = { style: callback().button };
  obj = {};
  const intl3 = arg1(dependencyMap[11]).intl;
  obj.text = intl3.string(arg1(dependencyMap[11]).t.3oK4qw);
  obj.onPress = function onPress() {
    const currentUser = currentUser.getCurrentUser();
    let email;
    if (null != currentUser) {
      email = currentUser.email;
    }
    if (null != email) {
      let ENTER_EMAIL = constants.RESEND_EMAIL;
    } else {
      ENTER_EMAIL = constants.ENTER_EMAIL;
    }
    navigation.push(ENTER_EMAIL);
  };
  obj.children = jsx(arg1(dependencyMap[12]).Button, obj);
  obj.children = <View {...obj} />;
  return jsx(arg1(dependencyMap[9]).EmptyState, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
({ UserRequiredActions: closure_9, VerificationModalScenes: closure_10 } = arg1(dependencyMap[6]));
const jsx = arg1(dependencyMap[7]).jsx;
const tmp2 = arg1(dependencyMap[6]);
let closure_12 = arg1(dependencyMap[8]).createStyles({ button: {} });
const obj = arg1(dependencyMap[8]);
const result = arg1(dependencyMap[34]).fileFinishedImporting("modules/verification/native/components/VerificationModal.tsx");

export default function VerificationModal() {
  let obj = arg1(dependencyMap[30]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => countrySelectorOpened.getCountrySelectorOpened());
  const arg1 = stateFromStores;
  const items1 = [stateFromStores];
  const memo = React.useMemo(() => {
    let obj = { name: constants.OVERVIEW };
    const items = [obj];
    if (stateFromStores) {
      obj = { name: constants.ADD_PHONE };
      items.push(obj);
    }
    return items;
  }, items1);
  const effect = React.useEffect(() => {
    callback(closure_2[31]).hideActionSheet();
    const obj = callback(closure_2[31]);
    stateFromStores(closure_2[32]).dismissKeyboard();
  }, []);
  obj = {
    screens: React.useMemo(() => function getScreens() {
      function impressionProperties(RESEND_EMAIL) {
        return { impression_group: callback(closure_2[13]).ImpressionGroups.USER_VERIFICATION_MODAL_FLOW, step: RESEND_EMAIL };
      }
      let obj = {};
      obj = { impressionName: callback(closure_2[13]).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: impressionProperties(constants.CHANGE_EMAIL_COLLECT_REASONS) };
      let obj2 = callback(closure_2[14]);
      obj.headerTitle = obj2.getHeaderNoTitle();
      obj.render = function render() {
        return null;
      };
      obj[constants.CHANGE_EMAIL_COLLECT_REASONS] = obj;
      obj = { impressionName: callback(closure_2[13]).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: impressionProperties(constants.CHANGE_EMAIL_WARNING) };
      let obj4 = callback(closure_2[14]);
      obj.headerTitle = obj4.getHeaderNoTitle();
      obj.render = function render() {
        return null;
      };
      obj[constants.CHANGE_EMAIL_WARNING] = obj;
      const obj1 = {
        impressionName: callback(closure_2[13]).ImpressionNames.USER_VERIFICATION_MODAL,
        impressionProperties: impressionProperties(constants.OVERVIEW),
        gestureEnabled: false,
        headerLeft() {
          return null;
        }
      };
      let obj6 = callback(closure_2[14]);
      obj1.headerTitle = obj6.getHeaderNoTitle();
      obj1.headerRight = function headerRight() {
        const obj = { source: callback2(closure_2[16]) };
        const intl = callback(closure_2[11]).intl;
        obj.accessibilityLabel = intl.string(callback(closure_2[11]).t.PdRCRg);
        obj.onPress = function onPress() {
          let obj = callback(closure_2[17]);
          obj = { 0: 1914765568, 9223372036854775807: "<string:35389440>", 9223372036854775807: "<string:141754368>" };
          obj = {};
          const intl = callback(closure_2[11]).intl;
          obj.label = intl.string(callback(closure_2[11]).t.2jxGer);
          obj.isDestructive = true;
          obj.onPress = function onPress() { ... };
          const items = [obj];
          obj.options = items;
          const result = obj.showSimpleActionSheet(obj);
        };
        return callback3(callback(closure_2[15]).HeaderActionButton, obj);
      };
      obj1.render = function render() {
        return callback3(callback2(closure_2[19]), {});
      };
      obj[constants.OVERVIEW] = obj1;
      obj2 = { impressionName: callback(closure_2[13]).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: impressionProperties(constants.RESEND_EMAIL) };
      let obj8 = callback(closure_2[14]);
      obj2.headerTitle = obj8.getHeaderNoTitle();
      obj2.render = function render() {
        return callback3(callback2(closure_2[20]), {});
      };
      obj[constants.RESEND_EMAIL] = obj2;
      const obj3 = { impressionName: callback(closure_2[13]).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: impressionProperties(constants.RESEND_EMAIL) };
      let obj10 = callback(closure_2[14]);
      obj3.headerTitle = obj10.getHeaderNoTitle();
      obj3.render = function render() {
        return callback3(callback2(closure_2[20]), {});
      };
      obj[constants.CHANGE_EMAIL_COMPLETE] = obj3;
      obj4 = {
        impressionName: callback(closure_2[13]).ImpressionNames.USER_VERIFICATION_MODAL,
        impressionProperties: impressionProperties(constants.CONFIRM_EMAIL_CHANGE_CODE),
        headerTitle: callback(closure_2[14]).getHeaderNoTitle(),
        render() {
          return callback3(callback2(closure_2[21]), { isChangeEmail: false });
        }
      };
      obj[constants.CONFIRM_EMAIL_CHANGE_CODE] = obj4;
      const obj5 = { impressionName: callback(closure_2[13]).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: impressionProperties(constants.CONFIRM_EMAIL_CHANGE_START) };
      const obj13 = callback(closure_2[14]);
      obj5.headerTitle = callback(closure_2[14]).getHeaderNoTitle();
      obj5.render = function render() {
        return callback3(callback2(closure_2[22]), {});
      };
      obj[constants.CONFIRM_EMAIL_CHANGE_START] = obj5;
      obj6 = { impressionName: callback(closure_2[13]).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: impressionProperties(constants.ENTER_EMAIL) };
      const obj15 = callback(closure_2[14]);
      obj6.headerTitle = callback(closure_2[14]).getHeaderNoTitle();
      obj6.render = function render() {
        return callback3(callback2(closure_2[23]), { isChangeEmail: false });
      };
      obj[constants.ENTER_EMAIL] = obj6;
      const obj7 = { impressionName: callback(closure_2[13]).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: impressionProperties(constants.ADD_PHONE) };
      const obj17 = callback(closure_2[14]);
      obj7.headerTitle = callback(closure_2[14]).getHeaderNoTitle();
      obj7.render = function render(arg0, arg1) {
        const obj = {};
        const merged = Object.assign(arg0);
        obj["reason"] = arg1(closure_2[25]).ChangePhoneReason.USER_ACTION_REQUIRED;
        obj["onComplete"] = function onComplete(phone) {
          return arg1.push(constants.VERIFY_PHONE, { phone, onVerified() { ... } });
        };
        return callback3(callback2(closure_2[24]), obj);
      };
      obj[constants.ADD_PHONE] = obj7;
      obj8 = { impressionName: callback(closure_2[13]).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: impressionProperties(constants.VERIFY_PHONE) };
      const obj19 = callback(closure_2[14]);
      obj8.headerTitle = callback(closure_2[14]).getHeaderNoTitle();
      obj8.render = function render(arg0) {
        const merged = Object.assign(arg0);
        return callback3(callback2(closure_2[28]), { disableKeyboardAvoidingView: true });
      };
      obj[constants.VERIFY_PHONE] = obj8;
      const obj9 = { impressionName: callback(closure_2[13]).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: impressionProperties(constants.VERIFY_PASSWORD) };
      const obj21 = callback(closure_2[14]);
      obj9.headerTitle = callback(closure_2[14]).getHeaderNoTitle();
      obj9.render = function render(arg0) {
        const merged = Object.assign(arg0);
        return callback3(callback2(closure_2[29]), {});
      };
      obj[constants.VERIFY_PASSWORD] = obj9;
      obj10 = { impressionName: callback(closure_2[13]).ImpressionNames.USER_VERIFICATION_MODAL, impressionProperties: impressionProperties(constants.PHONE_THEN_EMAIL_INTERSTITIAL) };
      const obj23 = callback(closure_2[14]);
      obj10.headerTitle = callback(closure_2[14]).getHeaderNoTitle();
      obj10.render = function render(arg0, navigation) {
        return callback3(closure_13, { navigation });
      };
      obj[constants.PHONE_THEN_EMAIL_INTERSTITIAL] = obj10;
      return obj;
    }(), []),
    initialRouteStack: memo
  };
  const intl = arg1(dependencyMap[11]).intl;
  obj.headerBackTitle = intl.string(arg1(dependencyMap[11]).t.13/7kX);
  return jsx(arg1(dependencyMap[33]).Navigator, obj);
};
