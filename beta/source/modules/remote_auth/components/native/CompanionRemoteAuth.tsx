// Module ID: 16331
// Function ID: 16332
// Name: CompanionRemoteAuth
// Dependencies: [19, 17, 1078, 21, 4790, 16332, 5828, 4786, 1119, 5220, 1181, 4635, 558, 568, 1488, 5026, 1245, 16333, 16337, 7245, 2]

// Module 16331 (CompanionRemoteAuth)
import util from "util" /* 1119 */;
import UserUtilsDefault from "UserUtils" /* 4635 */;
import Text_Text from "Text/Text" /* 4786 */;
import GuildIDContextDefault from "GuildIDContext" /* 5026 */;
import components_Button_Button from "components/Button/Button" /* 5220 */;
import ActivityIndicator_ActivityIndicator from "ActivityIndicator/ActivityIndicator" /* 5828 */;
import typing from "typing" /* 16332 */;
import NativeAuthenticationModuleDefault from "NativeAuthenticationModule" /* 16337 */;
import noop from "module_19" /* 19 */;

require = fn;
function renderSteps(state, style, I, context) {
  const step = state.step;
  if (typing.RemoteAuthStep.INITIALIZING !== step) {
    if (tmp(16332).RemoteAuthStep.PENDING_REMOTE_INIT !== step) {
      if (tmp(16332).RemoteAuthStep.PENDING_TICKET === step) {
        const user = state.user;
        const obj = { children: null };
        const obj2 = { style: style.avatar, user, size: tmp(1181).AvatarSizes.LARGE, guildId: context };
        const items = [React5(tmp(1181).Avatar, obj2), , , ];
        const obj3 = { variant: "heading-lg/bold", children: null };
        const intl = tmp(1119).intl;
        obj3.children = intl.string(tmp(1119).t.apGCUT);
        items[1] = React5(tmp(4786).Text, obj3);
        const obj4 = { style: style.statusText, variant: "text-md/medium", color: "text-muted", children: null };
        const intl2 = tmp(1119).intl;
        const obj5 = { username: UserUtilsDefault.getUserTag(user) };
        obj4.children = intl2.format(tmp(1119).t.Cbl5JK, obj5);
        items[2] = React5(tmp(4786).Text, obj4);
        const obj7 = { style: style.buttonContainer, children: null };
        const obj8 = { size: "lg", variant: "tertiary", text: null, onPress: null };
        const intl3 = tmp(1119).intl;
        obj8.text = intl3.string(tmp(1119).t["ETE/oC"]);
        obj8.onPress = I;
        obj7.children = React5(tmp(5220).Button, obj8);
        items[3] = React5(View, obj7);
        obj.children = items;
        return options(closure_1_8, obj);
      } else {
        return React5(tmp(5828).ActivityIndicator, {});
      }
    }
  }
  const obj9 = { children: null };
  const items1 = [React5(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}), , ];
  const obj10 = { style: style.statusText, variant: "text-md/medium", color: "text-muted", children: null };
  const intl4 = tmp(1119).intl;
  obj10.children = intl4.string(util.t["7LkwqE"]);
  items1[1] = React5(Text_Text.Text, obj10);
  const obj11 = { style: style.buttonContainer, children: null };
  const obj12 = { size: "lg", variant: "tertiary", text: null, onPress: null };
  const intl5 = tmp(1119).intl;
  obj12.text = intl5.string(util.t["ETE/oC"]);
  obj12.onPress = I;
  obj11.children = React5(components_Button_Button.Button, obj12);
  items1[2] = React5(View, obj11);
  obj9.children = items1;
  return options(closure_1_8, obj9);
}
const View = fn(17).View;
const Constants = fn(1078);
({ AnalyticEvents: hasOwnProperty, LoginSuccessfulSources: metroRequire } = Constants);
const jsxProd = fn(21);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4790);
let closure_10 = createStyles.createStyles({ statusContainer: { alignItems: "center", marginTop: 32 }, avatar: { marginBottom: 16 }, statusText: { textAlign: "center", marginTop: 16, marginBottom: 24, paddingHorizontal: 32 }, buttonContainer: { width: "100%", paddingHorizontal: 16, marginTop: 16 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/remote_auth/components/native/CompanionRemoteAuth.tsx");

export const CompanionRemoteAuth = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = navigation(568).c(15);
  const tmp4 = closure_10();
  let obj = navigation(568);
  navigation = navigation(1488).useNavigation();
  const context = noop.useContext(GuildIDContextDefault);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o(arg0) {
      let tmp = arg0;
      const obj2 = { source: constants2.QR_CODE, login_source: "companion_remote_auth", is_new_user: false, login_method: "quest_remote_auth", login_instance_id: null };
      if (arg0 == null) {
        tmp = null;
      }
      obj2.login_instance_id = tmp;
      _null(dependencyMap[16]).track(constants.LOGIN_SUCCESSFUL, obj2);
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  let obj2 = navigation(1488);
  const obj3 = noop;
  state = navigation(16333).useAuthWebsocket(first, true).state;
  if (cResult[1] !== navigation) {
    class I {
      constructor() {
        goBackResult = closure_0.goBack();
        return;
      }
    }
    cResult[1] = navigation;
    cResult[2] = I;
  } else {
    class I {
      constructor() {
        goBackResult = closure_0.goBack();
        return;
      }
    }
  }
  if (state.step === navigation(16332).RemoteAuthStep.PENDING_REMOTE_INIT) {
    class I {
      constructor() {
        goBackResult = closure_0.goBack();
        return;
      }
    }
  }
  importDefault = tmp9;
  if (cResult[3] !== null) {
    class T {
      constructor() {
        if (null != fingerprint) {
          tmp2 = closure_1;
          tmp3 = closure_2;
          obj = closure_1(closure_2[18]);
          tmp4 = globalThis;
          _HermesInternal = HermesInternal;
          str = "https://discord.com/ra/";
          sendAuthUrlResult = obj.sendAuthUrl("https://discord.com/ra/" + tmp);
          catchPromise = sendAuthUrlResult.catch(() => {
            const error = new Error("Failed to initialize authentication");
            throw error;
          });
        }
        return;
      }
    }
    const items = [tmp9];
    cResult[3] = tmp9;
    cResult[4] = T;
    cResult[5] = items;
    let tmp11 = items;
    const tmp10 = T;
  } else {
    class T {
      constructor() {
        if (null != fingerprint) {
          tmp2 = closure_1;
          tmp3 = closure_2;
          obj = closure_1(closure_2[18]);
          tmp4 = globalThis;
          _HermesInternal = HermesInternal;
          str = "https://discord.com/ra/";
          sendAuthUrlResult = obj.sendAuthUrl("https://discord.com/ra/" + tmp);
          catchPromise = sendAuthUrlResult.catch(() => {
            const error = new Error("Failed to initialize authentication");
            throw error;
          });
        }
        return;
      }
    }
    tmp11 = cResult[5];
  }
  const effect = obj3.useEffect(tmp10, tmp11);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class T {
      constructor() {
        if (null != fingerprint) {
          tmp2 = closure_1;
          tmp3 = closure_2;
          obj = closure_1(closure_2[18]);
          tmp4 = globalThis;
          _HermesInternal = HermesInternal;
          str = "https://discord.com/ra/";
          sendAuthUrlResult = obj.sendAuthUrl("https://discord.com/ra/" + tmp);
          catchPromise = sendAuthUrlResult.catch(() => {
            const error = new Error("Failed to initialize authentication");
            throw error;
          });
        }
        return;
      }
    }
    const stringResult = obj5.string(tmp(1119).t["7fNJgA"]);
    cResult[6] = stringResult;
  } else {
    class T {
      constructor() {
        if (null != fingerprint) {
          tmp2 = closure_1;
          tmp3 = closure_2;
          obj = closure_1(closure_2[18]);
          tmp4 = globalThis;
          _HermesInternal = HermesInternal;
          str = "https://discord.com/ra/";
          sendAuthUrlResult = obj.sendAuthUrl("https://discord.com/ra/" + tmp);
          catchPromise = sendAuthUrlResult.catch(() => {
            const error = new Error("Failed to initialize authentication");
            throw error;
          });
        }
        return;
      }
    }
  }
  if (cResult[7] === context) {
    class T {
      constructor() {
        if (null != fingerprint) {
          tmp2 = closure_1;
          tmp3 = closure_2;
          obj = closure_1(closure_2[18]);
          tmp4 = globalThis;
          _HermesInternal = HermesInternal;
          str = "https://discord.com/ra/";
          sendAuthUrlResult = obj.sendAuthUrl("https://discord.com/ra/" + tmp);
          catchPromise = sendAuthUrlResult.catch(() => {
            const error = new Error("Failed to initialize authentication");
            throw error;
          });
        }
        return;
      }
    }
  }
  const tmpResult = navigation(16333);
  cResult[7] = context;
  cResult[8] = tmp8;
  cResult[9] = state;
  cResult[10] = tmp4;
  cResult[11] = renderSteps(state, tmp4, tmp8, context);
}) : (() => {
  let tmp = closure_10();
  navigation = navigation(1488).useNavigation();
  const context = noop.useContext(fingerprint(5026));
  const callback = noop.useCallback((arg0) => {
    let tmp = arg0;
    const obj2 = { source: constants2.QR_CODE, login_source: "companion_remote_auth", is_new_user: false, login_method: "quest_remote_auth", login_instance_id: null };
    if (arg0 == null) {
      tmp = null;
    }
    obj2.login_instance_id = tmp;
    fingerprint(dependencyMap[16]).track(constants.LOGIN_SUCCESSFUL, obj2);
  }, []);
  let obj = navigation(1488);
  let obj2 = noop;
  const tmp5 = fingerprint;
  state = navigation(16333).useAuthWebsocket(callback, true).state;
  const items = [navigation];
  const callback1 = noop.useCallback(() => {
    navigation.goBack();
  }, items);
  fingerprint = null;
  if (state.step === navigation(16332).RemoteAuthStep.PENDING_REMOTE_INIT) {
    fingerprint = state.fingerprint;
  }
  const items1 = [fingerprint];
  const effect = obj2.useEffect(() => {
    if (null != fingerprint) {
      const _HermesInternal = HermesInternal;
      NativeAuthenticationModuleDefault.sendAuthUrl("https://discord.com/ra/" + tmp).catch(() => {
        const error = new Error("Failed to initialize authentication");
        throw error;
      });
      const sendAuthUrlResult = NativeAuthenticationModuleDefault.sendAuthUrl("https://discord.com/ra/" + tmp);
    }
  }, items1);
  const obj4 = { headerText: null, children: null };
  const obj3 = navigation(16333);
  const intl = tmp2(1119).intl;
  obj4.headerText = intl.string(navigation(1119).t["7fNJgA"]);
  const tmp5Result = tmp5(7245);
  obj4.children = closure_7(View, { style: tmp.statusContainer, children: renderSteps(state, tmp, callback1, context) });
  return closure_7(tmp5Result, obj4);
});
