// Module ID: 14772
// Function ID: 112671
// Name: renderSteps
// Dependencies: [31, 27, 653, 33, 4130, 14773, 5586, 4126, 1212, 4543, 1273, 3969, 1456, 4364, 675, 14774, 14778, 9219, 2]
// Exports: CompanionRemoteAuth

// Module 14772 (renderSteps)
import result from "result";
import { View } from "get ActivityIndicator";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function renderSteps(state, avatar, callback1, context) {
  const step = state.step;
  if (require(14773) /* RemoteAuthStep */.RemoteAuthStep.INITIALIZING !== step) {
    if (require(14773) /* RemoteAuthStep */.RemoteAuthStep.PENDING_REMOTE_INIT !== step) {
      if (require(14773) /* RemoteAuthStep */.RemoteAuthStep.PENDING_TICKET === step) {
        const user = state.user;
        let obj = {};
        obj = { style: avatar.avatar, user, size: require(1273) /* Button */.AvatarSizes.LARGE, guildId: context };
        const items = [callback(require(1273) /* Button */.Avatar, obj), , , ];
        obj = { variant: "heading-lg/bold" };
        const intl = require(1212) /* getSystemLocale */.intl;
        obj.children = intl.string(require(1212) /* getSystemLocale */.t.apGCUT);
        items[1] = callback(require(4126) /* Text */.Text, obj);
        const obj1 = { style: avatar.statusText, variant: "text-md/medium", color: "text-muted" };
        const intl2 = require(1212) /* getSystemLocale */.intl;
        const obj2 = {};
        let obj5 = importDefault(3969);
        obj2.username = obj5.getUserTag(user);
        obj1.children = intl2.format(require(1212) /* getSystemLocale */.t.Cbl5JK, obj2);
        items[2] = callback(require(4126) /* Text */.Text, obj1);
        const obj3 = { style: avatar.buttonContainer };
        const obj4 = { size: "lg", variant: "tertiary" };
        const intl3 = require(1212) /* getSystemLocale */.intl;
        obj4.text = intl3.string(require(1212) /* getSystemLocale */.t["ETE/oC"]);
        obj4.onPress = callback1;
        obj3.children = callback(require(4543) /* Button */.Button, obj4);
        items[3] = callback(View, obj3);
        obj.children = items;
        return callback2(closure_8, obj);
      } else {
        return callback(require(5586) /* ActivityIndicator */.ActivityIndicator, {});
      }
    }
  }
  obj5 = {};
  const items1 = [callback(require(5586) /* ActivityIndicator */.ActivityIndicator, {}), , ];
  const obj6 = { style: avatar.statusText, variant: "text-md/medium", color: "text-muted" };
  const intl4 = require(1212) /* getSystemLocale */.intl;
  obj6.children = intl4.string(require(1212) /* getSystemLocale */.t["7LkwqE"]);
  items1[1] = callback(require(4126) /* Text */.Text, obj6);
  const obj7 = { style: avatar.buttonContainer };
  const obj8 = { size: "lg", variant: "tertiary" };
  const intl5 = require(1212) /* getSystemLocale */.intl;
  obj8.text = intl5.string(require(1212) /* getSystemLocale */.t["ETE/oC"]);
  obj8.onPress = callback1;
  obj7.children = callback(require(4543) /* Button */.Button, obj8);
  items1[2] = callback(View, obj7);
  obj5.children = items1;
  return callback2(closure_8, obj5);
}
({ AnalyticEvents: closure_5, LoginSuccessfulSources: closure_6 } = ME);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
let closure_10 = _createForOfIteratorHelperLoose.createStyles({ statusContainer: { alignItems: "center", marginTop: 32 }, avatar: { marginBottom: 16 }, statusText: { textAlign: "center", marginTop: 16, marginBottom: 24, paddingHorizontal: 32 }, buttonContainer: { width: "100%", paddingHorizontal: 16, marginTop: 16 } });
const result = require("ME").fileFinishedImporting("modules/remote_auth/components/native/CompanionRemoteAuth.tsx");

export const CompanionRemoteAuth = function CompanionRemoteAuth() {
  let tmp = callback3();
  let obj = navigation(1456);
  navigation = obj.useNavigation();
  const context = React.useContext(fingerprint(4364));
  const callback = React.useCallback((arg0) => {
    let obj = fingerprint(outer1_2[14]);
    obj = { source: outer1_6.QR_CODE, login_source: "companion_remote_auth", is_new_user: false, login_method: "quest_remote_auth" };
    let tmp = null;
    if (null != arg0) {
      tmp = arg0;
    }
    obj.login_instance_id = tmp;
    obj.track(outer1_5.LOGIN_SUCCESSFUL, obj);
  }, []);
  const state = navigation(14774).useAuthWebsocket(callback, true).state;
  const items = [navigation];
  const callback1 = React.useCallback(() => {
    navigation.goBack();
  }, items);
  fingerprint = null;
  if (state.step === navigation(14773).RemoteAuthStep.PENDING_REMOTE_INIT) {
    fingerprint = state.fingerprint;
  }
  const items1 = [fingerprint];
  const effect = React.useEffect(() => {
    if (null != fingerprint) {
      const _HermesInternal = HermesInternal;
      const obj = fingerprint(outer1_2[16]);
      fingerprint(outer1_2[16]).sendAuthUrl("https://discord.com/ra/" + fingerprint).catch(() => {
        const error = new Error("Failed to initialize authentication");
        throw error;
      });
      const sendAuthUrlResult = fingerprint(outer1_2[16]).sendAuthUrl("https://discord.com/ra/" + fingerprint);
    }
  }, items1);
  obj = {};
  const obj2 = navigation(14774);
  const intl = navigation(1212).intl;
  obj.headerText = intl.string(navigation(1212).t["7fNJgA"]);
  obj = { style: tmp.statusContainer, children: renderSteps(state, tmp, callback1, context) };
  obj.children = callback(View, obj);
  return callback(fingerprint(9219), obj);
};
