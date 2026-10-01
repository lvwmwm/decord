// Module ID: 15612
// Function ID: 15613
// Name: CompanionRemoteAuth
// Dependencies: [19, 17, 1074, 21, 4836, 15613, 5889, 4832, 1115, 5281, 1177, 4678, 1485, 5087, 1241, 15614, 15618, 6391, 2]
// Exports: CompanionRemoteAuth

// Module 15612 (CompanionRemoteAuth)
import react_native from "react-native" /* 17 */;
import react_nativeDefault from "react-native" /* 15618 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let navigation;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
const View = react_native.View;
({ AnalyticEvents: hasOwnProperty, LoginSuccessfulSources: metroRequire } = Constants);
({ jsx: metroImportDefault, Fragment: metroImportAll, jsxs: c9 } = Fragment);
let closure_10 = createStyles.createStyles({ statusContainer: { alignItems: "center", marginTop: 32 }, avatar: { marginBottom: 16 }, statusText: { textAlign: "center", marginTop: 16, marginBottom: 24, paddingHorizontal: 32 }, buttonContainer: { width: "100%", paddingHorizontal: 16, marginTop: 16 } });
const result = size.fileFinishedImporting("modules/remote_auth/components/native/CompanionRemoteAuth.tsx");

export const CompanionRemoteAuth = function CompanionRemoteAuth() {
  let Button;
  let Button2;
  let Cbl5JK;
  let constants2;
  let fingerprint;
  let format;
  let intl;
  let intl2;
  let intl4;
  let intl5;
  let intl6;
  let items2;
  let items3;
  let obj10;
  let obj12;
  let obj16;
  let tmp5Result2;
  let tmp = closure_10();
  const tmp2 = navigation;
  let obj = navigation(1485);
  navigation = obj.useNavigation();
  const context = react.useContext(fingerprint(5087));
  const callback = react.useCallback((arg0) => {
    let tmp = arg0;
    const obj = { source: constants2.QR_CODE, login_source: "companion_remote_auth", is_new_user: false, login_method: "quest_remote_auth", login_instance_id: tmp };
    const track = fingerprint(dependencyMap[14]).track;
    const LOGIN_SUCCESSFUL = constants.LOGIN_SUCCESSFUL;
    fingerprint(dependencyMap[14]);
    if (arg0 == null) {
      tmp = null;
    }
    track(LOGIN_SUCCESSFUL, obj);
  }, []);
  const obj3 = navigation(15614);
  const state = obj3.useAuthWebsocket(callback, true).state;
  const items = [navigation];
  const callback1 = react.useCallback(() => {
    navigation.goBack();
  }, items);
  fingerprint = null;
  const obj2 = react;
  if (state.step === navigation(15613).RemoteAuthStep.PENDING_REMOTE_INIT) {
    fingerprint = state.fingerprint;
  }
  const items1 = [fingerprint];
  const effect = obj2.useEffect(() => {
    if (null != fingerprint) {
      const _HermesInternal = HermesInternal;
      const obj = react_nativeDefault;
      const sendAuthUrlResult = obj.sendAuthUrl("https://discord.com/ra/" + tmp);
      sendAuthUrlResult.catch(() => {
        const error = new Error("Failed to initialize authentication");
        throw error;
      });
    }
  }, items1);
  const obj4 = { headerText: intl.string(tmp2(1115).t["7fNJgA"]), children: null };
  const tmp5Result = fingerprint(6391);
  intl = tmp2(1115).intl;
  const obj5 = { style: tmp.statusContainer, children: null };
  const step = state.step;
  if (tmp2(15613).RemoteAuthStep.INITIALIZING !== step) {
    let tmp11Result;
    if (tmp2(15613).RemoteAuthStep.PENDING_REMOTE_INIT !== step) {
      if (tmp2(15613).RemoteAuthStep.PENDING_TICKET === step) {
        const user = state.user;
        const obj6 = { children: items2 };
        const obj7 = { style: tmp.avatar, user, size: tmp2(1177).AvatarSizes.LARGE, guildId: context };
        const Avatar = tmp2(1177).Avatar;
        items2 = [closure_7(Avatar, obj7), , , ];
        const obj8 = { variant: "heading-lg/bold", children: intl2.string(tmp2(1115).t.apGCUT) };
        const Text = tmp2(4832).Text;
        intl2 = tmp2(1115).intl;
        items2[1] = closure_7(Text, obj8);
        const obj9 = { style: tmp.statusText, variant: "text-md/medium", color: "text-muted", children: format(Cbl5JK, obj10) };
        const Text2 = tmp2(4832).Text;
        const intl3 = tmp2(1115).intl;
        format = intl3.format;
        obj10 = { username: tmp5Result2.getUserTag(user) };
        Cbl5JK = tmp2(1115).t.Cbl5JK;
        tmp5Result2 = fingerprint(4678);
        items2[2] = closure_7(Text2, obj9);
        const obj11 = { style: tmp.buttonContainer, children: closure_7(Button, obj12) };
        obj12 = { size: "lg", variant: "tertiary", text: intl4.string(tmp2(1115).t["ETE/oC"]), onPress: callback1 };
        Button = tmp2(5281).Button;
        intl4 = tmp2(1115).intl;
        items2[3] = closure_7(View, obj11);
        tmp11Result = closure_9(closure_8, obj6);
      } else if (tmp2(15613).RemoteAuthStep.PENDING_LOGIN === step) {
        tmp11Result = tmp11(tmp2(5889).ActivityIndicator, {});
      }
    }
    obj5.children = tmp11Result;
    obj4.children = closure_7(View, obj5);
    return closure_7(tmp5Result, obj4);
  }
  const obj13 = { children: items3 };
  items3 = [closure_7(tmp2(5889).ActivityIndicator, {}), , ];
  const obj14 = { style: tmp.statusText, variant: "text-md/medium", color: "text-muted", children: intl5.string(tmp2(1115).t["7LkwqE"]) };
  const Text3 = tmp2(4832).Text;
  intl5 = tmp2(1115).intl;
  items3[1] = closure_7(Text3, obj14);
  const obj15 = { style: tmp.buttonContainer, children: closure_7(Button2, obj16) };
  obj16 = { size: "lg", variant: "tertiary", text: intl6.string(tmp2(1115).t["ETE/oC"]), onPress: callback1 };
  Button2 = tmp2(5281).Button;
  intl6 = tmp2(1115).intl;
  items3[2] = closure_7(View, obj15);
  tmp11Result = closure_9(closure_8, obj13);
};
