// Module ID: 17532
// Function ID: 17533
// Name: CompanionRemoteAuth
// Dependencies: [19, 17, 1071, 21, 4917, 17533, 6921, 5508, 1112, 5515, 1186, 4973, 1500, 6648, 1255, 17534, 17538, 5921, 7204, 2]
// Exports: CompanionRemoteAuth

// Module 17532 (CompanionRemoteAuth)
import react_native from "react-native" /* 17 */;
import intl7 from "intl" /* 1112 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5921 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1071 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4917 */;
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

export function CompanionRemoteAuth() {
  let Button;
  let Button2;
  let Cbl5JK;
  let callback1;
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
  const tmp3 = fingerprint;
  let obj = navigation(fingerprint[12]);
  navigation = obj.useNavigation();
  const context = react.useContext(callback1(fingerprint[13]));
  const callback = react.useCallback((arg0) => {
    let tmp = arg0;
    const obj = { source: constants2.QR_CODE, login_source: "companion_remote_auth", is_new_user: false, login_method: "quest_remote_auth", login_instance_id: tmp };
    const track = callback1(fingerprint[14]).track;
    const LOGIN_SUCCESSFUL = constants.LOGIN_SUCCESSFUL;
    callback1(fingerprint[14]);
    if (arg0 == null) {
      tmp = null;
    }
    track(LOGIN_SUCCESSFUL, obj);
  }, []);
  const obj3 = navigation(fingerprint[15]);
  const state = obj3.useAuthWebsocket(callback, true).state;
  const items = [navigation];
  callback1 = react.useCallback(() => {
    navigation.goBack();
  }, items);
  fingerprint = null;
  const obj2 = react;
  if (state.step === navigation(fingerprint[5]).RemoteAuthStep.PENDING_REMOTE_INIT) {
    fingerprint = state.fingerprint;
  }
  const items1 = [fingerprint, callback1];
  const effect = obj2.useEffect(() => {
    let tmp;
    if (null != fingerprint) {
      let c0 = true;
      let obj = callback1(fingerprint[16]);
      const _HermesInternal = HermesInternal;
      const sendAuthUrlResult = obj.sendAuthUrl("https://discord.com/ra/" + tmp);
      sendAuthUrlResult.catch(() => {
        let intl;
        let intl2;
        const tmp = c0;
        if (tmp) {
          callback1();
          const obj = { title: intl.string(intl7.t.Cc4Mc9), body: intl2.string(intl7.t.fEptJP) };
          const show = actions_AlertActionCreatorsDefault.show;
          actions_AlertActionCreatorsDefault;
          intl = intl7.intl;
          intl2 = intl7.intl;
          show(obj);
        }
      });
      return () => {
        c0 = false;
      };
    }
  }, items1);
  const obj4 = { headerText: intl.string(tmp2(tmp3[8]).t["7fNJgA"]), children: null };
  const tmp5Result = callback1(tmp3[18]);
  intl = tmp2(tmp3[8]).intl;
  const obj5 = { style: tmp.statusContainer, children: null };
  const step = state.step;
  if (tmp2(tmp3[5]).RemoteAuthStep.INITIALIZING !== step) {
    let tmp11Result;
    if (tmp2(tmp3[5]).RemoteAuthStep.PENDING_REMOTE_INIT !== step) {
      if (tmp2(tmp3[5]).RemoteAuthStep.PENDING_TICKET === step) {
        const user = state.user;
        const obj6 = { children: items2 };
        const obj7 = { style: tmp.avatar, user, size: tmp2(tmp3[10]).AvatarSizes.LARGE, guildId: context };
        const Avatar = tmp2(tmp3[10]).Avatar;
        items2 = [closure_7(Avatar, obj7), , , ];
        const obj8 = { variant: "heading-lg/semibold", children: intl2.string(tmp2(tmp3[8]).t.apGCUT) };
        const Text = tmp2(tmp3[7]).Text;
        intl2 = tmp2(tmp3[8]).intl;
        items2[1] = closure_7(Text, obj8);
        const obj9 = { style: tmp.statusText, variant: "body-md/medium", color: "text-muted", children: format(Cbl5JK, obj10) };
        const Text2 = tmp2(tmp3[7]).Text;
        const intl3 = tmp2(tmp3[8]).intl;
        format = intl3.format;
        obj10 = { username: tmp5Result2.getUserTag(user) };
        Cbl5JK = tmp2(tmp3[8]).t.Cbl5JK;
        tmp5Result2 = callback1(tmp3[11]);
        items2[2] = closure_7(Text2, obj9);
        const obj11 = { style: tmp.buttonContainer, children: closure_7(Button, obj12) };
        obj12 = { size: "lg", variant: "tertiary", text: intl4.string(tmp2(tmp3[8]).t["ETE/oC"]), onPress: callback1 };
        Button = tmp2(tmp3[9]).Button;
        intl4 = tmp2(tmp3[8]).intl;
        items2[3] = closure_7(View, obj11);
        tmp11Result = closure_9(closure_8, obj6);
      } else if (tmp2(tmp3[5]).RemoteAuthStep.PENDING_LOGIN === step) {
        tmp11Result = tmp11(tmp2(tmp3[6]).ActivityIndicator, {});
      }
    }
    obj5.children = tmp11Result;
    obj4.children = closure_7(View, obj5);
    return closure_7(tmp5Result, obj4);
  }
  const obj13 = { children: items3 };
  items3 = [closure_7(tmp2(tmp3[6]).ActivityIndicator, {}), , ];
  const obj14 = { style: tmp.statusText, variant: "body-md/medium", color: "text-muted", children: intl5.string(tmp2(tmp3[8]).t["7LkwqE"]) };
  const Text3 = tmp2(tmp3[7]).Text;
  intl5 = tmp2(tmp3[8]).intl;
  items3[1] = closure_7(Text3, obj14);
  const obj15 = { style: tmp.buttonContainer, children: closure_7(Button2, obj16) };
  obj16 = { size: "lg", variant: "tertiary", text: intl6.string(tmp2(tmp3[8]).t["ETE/oC"]), onPress: callback1 };
  Button2 = tmp2(tmp3[9]).Button;
  intl6 = tmp2(tmp3[8]).intl;
  items3[2] = closure_7(View, obj15);
  tmp11Result = closure_9(closure_8, obj13);
}
