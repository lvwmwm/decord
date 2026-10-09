// Module ID: 16324
// Function ID: 16325
// Name: CompanionRemoteAuth
// Dependencies: [19, 17, 1085, 21, 5091, 16325, 6160, 5087, 1126, 5376, 1200, 4923, 558, 576, 1503, 5628, 1265, 16326, 16330, 6652, 2]

// Module 16324 (CompanionRemoteAuth)
import react_native from "react-native" /* 17 */;
import intl6 from "intl" /* 1126 */;
import native from "native" /* 1200 */;
import UserUtilsDefault from "UserUtils" /* 4923 */;
import reactDefault from "react" /* 5628 */;
import ActivityIndicator_ActivityIndicator from "ActivityIndicator/ActivityIndicator" /* 6160 */;
import typing from "typing" /* 16325 */;
import react_nativeDefault from "react-native" /* 16330 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let importDefault, navigation;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
function renderSteps(state, style, E, context) {
  let Button;
  let Button2;
  let Cbl5JK;
  let format;
  let intl;
  let intl3;
  let intl4;
  let intl5;
  let items;
  let items1;
  let obj12;
  let obj5;
  let obj6;
  let obj8;
  const step = state.step;
  if (typing.RemoteAuthStep.INITIALIZING !== step) {
    if (typing.RemoteAuthStep.PENDING_REMOTE_INIT !== step) {
      if (typing.RemoteAuthStep.PENDING_TICKET === step) {
        const user = state.user;
        const obj = { children: items };
        const obj2 = { style: style.avatar, user, size: native.AvatarSizes.LARGE, guildId: context };
        const Avatar = tmp(1200).Avatar;
        items = [metroImportDefault(Avatar, obj2), , , ];
        const obj3 = { variant: "heading-lg/bold", children: intl.string(intl6.t.apGCUT) };
        const Text = tmp(5087).Text;
        intl = tmp(1126).intl;
        items[1] = metroImportDefault(Text, obj3);
        const obj4 = { style: style.statusText, variant: "text-md/medium", color: "text-muted", children: format(Cbl5JK, obj5) };
        const Text2 = tmp(5087).Text;
        const intl2 = tmp(1126).intl;
        format = intl2.format;
        obj5 = { username: obj6.getUserTag(user) };
        Cbl5JK = tmp(1126).t.Cbl5JK;
        obj6 = UserUtilsDefault;
        items[2] = metroImportDefault(Text2, obj4);
        const obj7 = { style: style.buttonContainer, children: metroImportDefault(Button, obj8) };
        obj8 = { size: "lg", variant: "tertiary", text: intl3.string(intl6.t["ETE/oC"]), onPress: E };
        Button = tmp(5376).Button;
        intl3 = tmp(1126).intl;
        items[3] = metroImportDefault(View, obj7);
        return React4(metroImportAll, obj);
      } else {
        return metroImportDefault(ActivityIndicator_ActivityIndicator.ActivityIndicator, {});
      }
    }
  }
  const obj9 = { children: items1 };
  items1 = [metroImportDefault(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}), , ];
  const obj10 = { style: style.statusText, variant: "text-md/medium", color: "text-muted", children: intl4.string(intl6.t["7LkwqE"]) };
  const Text3 = tmp(5087).Text;
  intl4 = tmp(1126).intl;
  items1[1] = metroImportDefault(Text3, obj10);
  const obj11 = { style: style.buttonContainer, children: metroImportDefault(Button2, obj12) };
  obj12 = { size: "lg", variant: "tertiary", text: intl5.string(intl6.t["ETE/oC"]), onPress: E };
  Button2 = tmp(5376).Button;
  intl5 = tmp(1126).intl;
  items1[2] = metroImportDefault(View, obj11);
  return React4(metroImportAll, obj9);
}
const View = react_native.View;
({ AnalyticEvents: hasOwnProperty, LoginSuccessfulSources: metroRequire } = Constants);
({ jsx: metroImportDefault, Fragment: metroImportAll, jsxs: c9 } = Fragment);
let closure_10 = createStyles.createStyles({ statusContainer: { alignItems: "center", marginTop: 32 }, avatar: { marginBottom: 16 }, statusText: { textAlign: "center", marginTop: 16, marginBottom: 24, paddingHorizontal: 32 }, buttonContainer: { width: "100%", paddingHorizontal: 16, marginTop: 16 } });
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function CompanionRemoteAuth() {
  let _null;
  let constants2;
  let first;
  let tmp10;
  let tmp11;
  let tmp = navigation;
  let obj = navigation(576);
  const cResult = obj.c(15);
  const tmp4 = closure_10();
  const obj2 = navigation(1503);
  navigation = obj2.useNavigation();
  const context = react.useContext(reactDefault);
  const obj3 = react;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o(arg0) {
      let tmp = arg0;
      const obj = { source: constants2.QR_CODE, login_source: "companion_remote_auth", is_new_user: false, login_method: "quest_remote_auth", login_instance_id: tmp };
      const track = _null(dependencyMap[16]).track;
      const LOGIN_SUCCESSFUL = constants.LOGIN_SUCCESSFUL;
      _null(dependencyMap[16]);
      if (arg0 == null) {
        tmp = null;
      }
      track(LOGIN_SUCCESSFUL, obj);
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  const tmpResult = tmp(16326);
  const state = tmpResult.useAuthWebsocket(first, true).state;
  if (cResult[1] !== navigation) {
    class E {
      constructor() {
        navigation.goBack();
      }
    }
    cResult[1] = navigation;
    cResult[2] = E;
  } else {
    class E {
      constructor() {
        navigation.goBack();
      }
    }
  }
  if (state.step === tmp(16325).RemoteAuthStep.PENDING_REMOTE_INIT) {
    class E {
      constructor() {
        navigation.goBack();
      }
    }
  }
  importDefault = tmp9;
  if (cResult[3] !== null) {
    class E {
      constructor() {
        navigation.goBack();
      }
    }
    const items = [null];
    cResult[3] = null;
    cResult[4] = tmp12;
    cResult[5] = items;
    tmp11 = items;
    tmp10 = tmp12;
  } else {
    class E {
      constructor() {
        navigation.goBack();
      }
    }
    tmp11 = cResult[5];
  }
  const effect = obj3.useEffect(tmp10, tmp11);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class E {
      constructor() {
        navigation.goBack();
      }
    }
    cResult[6] = obj5.string(tmp(1126).t["7fNJgA"]);
    const stringResult = obj5.string(tmp(1126).t["7fNJgA"]);
  } else {
    class E {
      constructor() {
        navigation.goBack();
      }
    }
  }
  if (cResult[7] === context) {
    class E {
      constructor() {
        navigation.goBack();
      }
    }
  }
  cResult[7] = context;
  cResult[8] = tmp8;
  cResult[9] = state;
  cResult[10] = tmp4;
  cResult[11] = renderSteps(state, tmp4, tmp8, context);
  renderSteps(state, tmp4, tmp8, context);
}) : (function CompanionRemoteAuth() {
  let constants2;
  let fingerprint;
  let intl;
  let obj5;
  let tmp = closure_10();
  const tmp2 = navigation;
  let obj = navigation(1503);
  navigation = obj.useNavigation();
  const context = react.useContext(fingerprint(5628));
  const callback = react.useCallback((arg0) => {
    let tmp = arg0;
    const obj = { source: constants2.QR_CODE, login_source: "companion_remote_auth", is_new_user: false, login_method: "quest_remote_auth", login_instance_id: tmp };
    const track = fingerprint(dependencyMap[16]).track;
    const LOGIN_SUCCESSFUL = constants.LOGIN_SUCCESSFUL;
    fingerprint(dependencyMap[16]);
    if (arg0 == null) {
      tmp = null;
    }
    track(LOGIN_SUCCESSFUL, obj);
  }, []);
  const obj3 = navigation(16326);
  const state = obj3.useAuthWebsocket(callback, true).state;
  const items = [navigation];
  const callback1 = react.useCallback(() => {
    navigation.goBack();
  }, items);
  const tmp5 = fingerprint;
  fingerprint = null;
  const obj2 = react;
  if (state.step === navigation(16325).RemoteAuthStep.PENDING_REMOTE_INIT) {
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
  const obj4 = { headerText: intl.string(tmp2(1126).t["7fNJgA"]), children: closure_7(View, obj5) };
  const tmp5Result = tmp5(6652);
  intl = tmp2(1126).intl;
  obj5 = { style: tmp.statusContainer, children: renderSteps(state, tmp, callback1, context) };
  return closure_7(tmp5Result, obj4);
});
const result = size.fileFinishedImporting("modules/remote_auth/components/native/CompanionRemoteAuth.tsx");

export const CompanionRemoteAuth = tmp4;
