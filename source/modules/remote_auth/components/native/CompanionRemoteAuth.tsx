// Module ID: 14649
// Function ID: 110464
// Name: renderSteps
// Dependencies: []
// Exports: CompanionRemoteAuth

// Module 14649 (renderSteps)
function renderSteps(state, avatar, callback1, context) {
  const step = state.step;
  if (avatar(dependencyMap[5]).RemoteAuthStep.INITIALIZING !== step) {
    if (avatar(dependencyMap[5]).RemoteAuthStep.PENDING_REMOTE_INIT !== step) {
      if (avatar(dependencyMap[5]).RemoteAuthStep.PENDING_TICKET === step) {
        const user = state.user;
        let obj = {};
        obj = { style: avatar.avatar, user, size: avatar(dependencyMap[10]).AvatarSizes.LARGE, guildId: context };
        const items = [callback(avatar(dependencyMap[10]).Avatar, obj), , , ];
        obj = { variant: "heading-lg/bold" };
        const intl = avatar(dependencyMap[8]).intl;
        obj.children = intl.string(avatar(dependencyMap[8]).t.apGCUT);
        items[1] = callback(avatar(dependencyMap[7]).Text, obj);
        const obj1 = { delete: 14789019781002023000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, dispatch: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000254639494975, raw: -120145600412238510000000000000000000000000000000000000000000000000000000000, style: avatar.statusText };
        const intl2 = avatar(dependencyMap[8]).intl;
        const obj2 = {};
        let obj5 = importDefault(dependencyMap[11]);
        obj2.username = obj5.getUserTag(user);
        obj1.children = intl2.format(avatar(dependencyMap[8]).t.Cbl5JK, obj2);
        items[2] = callback(avatar(dependencyMap[7]).Text, obj1);
        const obj3 = { style: avatar.buttonContainer };
        const obj4 = {};
        const intl3 = avatar(dependencyMap[8]).intl;
        obj4.text = intl3.string(avatar(dependencyMap[8]).t.ETE/oC);
        obj4.onPress = callback1;
        obj3.children = callback(avatar(dependencyMap[9]).Button, obj4);
        items[3] = callback(View, obj3);
        obj.children = items;
        return callback2(closure_8, obj);
      } else {
        return callback(avatar(dependencyMap[6]).ActivityIndicator, {});
      }
    }
  }
  obj5 = {};
  const items1 = [callback(avatar(dependencyMap[6]).ActivityIndicator, {}), , ];
  const obj6 = { delete: 14789019781002023000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, dispatch: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000254639494975, raw: -120145600412238510000000000000000000000000000000000000000000000000000000000, style: avatar.statusText };
  const intl4 = avatar(dependencyMap[8]).intl;
  obj6.children = intl4.string(avatar(dependencyMap[8]).t.7LkwqE);
  items1[1] = callback(avatar(dependencyMap[7]).Text, obj6);
  const obj7 = { style: avatar.buttonContainer };
  const obj8 = {};
  const intl5 = avatar(dependencyMap[8]).intl;
  obj8.text = intl5.string(avatar(dependencyMap[8]).t.ETE/oC);
  obj8.onPress = callback1;
  obj7.children = callback(avatar(dependencyMap[9]).Button, obj8);
  items1[2] = callback(View, obj7);
  obj5.children = items1;
  return callback2(closure_8, obj5);
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ AnalyticEvents: closure_5, LoginSuccessfulSources: closure_6 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = arg1(dependencyMap[3]));
const tmp3 = arg1(dependencyMap[3]);
let closure_10 = arg1(dependencyMap[4]).createStyles({ statusContainer: {}, avatar: { marginBottom: 16 }, statusText: { timestamp: "png", target: true, type: "/assets/images/native", appearance: 48 }, buttonContainer: {} });
const obj = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/remote_auth/components/native/CompanionRemoteAuth.tsx");

export const CompanionRemoteAuth = function CompanionRemoteAuth() {
  const tmp = callback3();
  let obj = arg1(dependencyMap[12]);
  const navigation = obj.useNavigation();
  const arg1 = navigation;
  const context = React.useContext(importDefault(dependencyMap[13]));
  const callback = React.useCallback((arg0) => {
    let obj = fingerprint(closure_2[14]);
    obj = { "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, source: constants2.QR_CODE };
    let tmp = null;
    if (null != arg0) {
      tmp = arg0;
    }
    obj.login_instance_id = tmp;
    obj.track(constants.LOGIN_SUCCESSFUL, obj);
  }, []);
  const state = arg1(dependencyMap[15]).useAuthWebsocket(callback, true).state;
  const items = [navigation];
  const callback1 = React.useCallback(() => {
    navigation.goBack();
  }, items);
  let fingerprint = null;
  if (state.step === arg1(dependencyMap[5]).RemoteAuthStep.PENDING_REMOTE_INIT) {
    fingerprint = state.fingerprint;
  }
  const importDefault = fingerprint;
  const items1 = [fingerprint];
  const effect = React.useEffect(() => {
    if (null != fingerprint) {
      const _HermesInternal = HermesInternal;
      const obj = fingerprint(closure_2[16]);
      fingerprint(closure_2[16]).sendAuthUrl("https://discord.com/ra/" + fingerprint).catch(() => {
        const error = new Error("Failed to initialize authentication");
        throw error;
      });
      const sendAuthUrlResult = fingerprint(closure_2[16]).sendAuthUrl("https://discord.com/ra/" + fingerprint);
    }
  }, items1);
  obj = {};
  const obj2 = arg1(dependencyMap[15]);
  const intl = arg1(dependencyMap[8]).intl;
  obj.headerText = intl.string(arg1(dependencyMap[8]).t.7fNJgA);
  obj = { style: tmp.statusContainer, children: renderSteps(state, tmp, callback1, context) };
  obj.children = callback(View, obj);
  return callback(importDefault(dependencyMap[17]), obj);
};
