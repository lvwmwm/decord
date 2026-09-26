// Module ID: 15614
// Function ID: 15615
// Name: CompanionRemoteAuth
// Dependencies: [19, 17, 1074, 21, 4836, 15615, 5889, 4832, 1115, 5281, 1177, 4678, 1485, 5087, 1241, 15616, 15620, 6391, 2]
// Exports: CompanionRemoteAuth

// Module 15614 (CompanionRemoteAuth)
import NativeAuthenticationModuleDefault from "NativeAuthenticationModule" /* 15620 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
const Constants = fn(1074);
({ AnalyticEvents: hasOwnProperty, LoginSuccessfulSources: metroRequire } = Constants);
const jsxProd = fn(21);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4836);
let closure_10 = createStyles.createStyles({ statusContainer: { alignItems: "center", marginTop: 32 }, avatar: { marginBottom: 16 }, statusText: { textAlign: "center", marginTop: 16, marginBottom: 24, paddingHorizontal: 32 }, buttonContainer: { width: "100%", paddingHorizontal: 16, marginTop: 16 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/remote_auth/components/native/CompanionRemoteAuth.tsx");

export const CompanionRemoteAuth = function CompanionRemoteAuth() {
  let tmp = closure_10();
  navigation = navigation(1485).useNavigation();
  const context = noop.useContext(fingerprint(5087));
  const callback = noop.useCallback((arg0) => {
    let tmp = arg0;
    const obj2 = { source: constants2.QR_CODE, login_source: "companion_remote_auth", is_new_user: false, login_method: "quest_remote_auth", login_instance_id: null };
    if (arg0 == null) {
      tmp = null;
    }
    obj2.login_instance_id = tmp;
    fingerprint(dependencyMap[14]).track(constants.LOGIN_SUCCESSFUL, obj2);
  }, []);
  let obj = navigation(1485);
  let obj2 = noop;
  const state = navigation(15616).useAuthWebsocket(callback, true).state;
  const items = [navigation];
  const callback1 = noop.useCallback(() => {
    navigation.goBack();
  }, items);
  fingerprint = null;
  if (state.step === navigation(15615).RemoteAuthStep.PENDING_REMOTE_INIT) {
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
  const obj3 = navigation(15616);
  const intl = tmp2(1115).intl;
  obj4.headerText = intl.string(navigation(1115).t["7fNJgA"]);
  const obj5 = { style: tmp.statusContainer, children: null };
  const step = state.step;
  if (navigation(15615).RemoteAuthStep.INITIALIZING !== step) {
    if (tmp2(15615).RemoteAuthStep.PENDING_REMOTE_INIT !== step) {
      if (tmp2(15615).RemoteAuthStep.PENDING_TICKET === step) {
        const user = state.user;
        const obj6 = { children: null };
        const obj7 = { style: tmp.avatar, user, size: tmp2(1177).AvatarSizes.LARGE, guildId: context };
        const items2 = [tmp11(tmp2(1177).Avatar, obj7), , , ];
        const obj8 = { variant: "heading-lg/bold", children: null };
        const intl2 = tmp2(1115).intl;
        obj8.children = intl2.string(tmp2(1115).t.apGCUT);
        items2[1] = tmp11(tmp2(4832).Text, obj8);
        const obj9 = { style: tmp.statusText, variant: "text-md/medium", color: "text-muted", children: null };
        const intl3 = tmp2(1115).intl;
        const obj10 = { username: tmp5(4678).getUserTag(user) };
        obj9.children = intl3.format(tmp2(1115).t.Cbl5JK, obj10);
        items2[2] = tmp11(tmp2(4832).Text, obj9);
        const obj11 = { style: tmp.buttonContainer, children: null };
        const obj12 = { size: "lg", variant: "tertiary", text: null, onPress: null };
        const intl4 = tmp2(1115).intl;
        obj12.text = intl4.string(tmp2(1115).t["ETE/oC"]);
        obj12.onPress = callback1;
        obj11.children = tmp11(tmp2(5281).Button, obj12);
        items2[3] = tmp11(tmp13, obj11);
        obj6.children = items2;
        let tmp11Result = closure_9(closure_8, obj6);
        const tmp5Result2 = tmp5(4678);
      } else if (tmp2(15615).RemoteAuthStep.PENDING_LOGIN === step) {
        tmp11Result = tmp11(tmp2(5889).ActivityIndicator, {});
      }
    }
    obj5.children = tmp11Result;
    obj4.children = tmp11(tmp13, obj5);
    return tmp11(tmp5Result, obj4);
  }
  const obj13 = { children: null };
  const items3 = [closure_7(navigation(5889).ActivityIndicator, {}), , ];
  const obj14 = { style: tmp.statusText, variant: "text-md/medium", color: "text-muted", children: null };
  const intl5 = tmp2(1115).intl;
  obj14.children = intl5.string(navigation(1115).t["7LkwqE"]);
  items3[1] = closure_7(navigation(4832).Text, obj14);
  const obj15 = { style: tmp.buttonContainer, children: null };
  const obj16 = { size: "lg", variant: "tertiary", text: null, onPress: null };
  const intl6 = tmp2(1115).intl;
  obj16.text = intl6.string(navigation(1115).t["ETE/oC"]);
  obj16.onPress = callback1;
  obj15.children = closure_7(navigation(5281).Button, obj16);
  items3[2] = closure_7(View, obj15);
  obj13.children = items3;
  tmp11Result = closure_9(closure_8, obj13);
};
