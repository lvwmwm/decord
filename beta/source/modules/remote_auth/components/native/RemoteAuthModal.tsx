// Module ID: 13408
// Function ID: 13409
// Name: RemoteAuthModal
// Dependencies: [32, 19, 17, 1074, 21, 4836, 576, 1613, 13409, 13407, 5893, 1271, 12, 13410, 4832, 1115, 1177, 5745, 5281, 5039, 13411, 5889, 2]
// Exports: default

// Module 13408 (RemoteAuthModal)
import _modDef12 from "module_12" /* 12 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import intl5 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import HTTPUtils from "HTTPUtils" /* 1271 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1613 */;
import Text_Text from "Text/Text" /* 4832 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5039 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import ButtonGroup2 from "ButtonGroup" /* 5745 */;
import ActivityIndicator_ActivityIndicator from "ActivityIndicator/ActivityIndicator" /* 5889 */;
import DeprecatedLayoutAnimation from "DeprecatedLayoutAnimation" /* 5893 */;
import AssetRegistryDefault from "AssetRegistry" /* 13407 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 13409 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 13411 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let c10;
let c9;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let tmp7;
let unpackModuleId;
const AssetRegistryDefault3 = tmp7(13410);
function RemoteAuthBody(remoteAuthFingerprint) {
  let tmp3;
  let tmp5;
  remoteAuthFingerprint = remoteAuthFingerprint.remoteAuthFingerprint;
  [tmp3, importDefault] = _slicedToArray(react.useState(constants.LOADING), 2);
  const tmp2 = _slicedToArray(react.useState(constants.LOADING), 2);
  [tmp5, dependencyMap] = react.useState(null);
  const items = [remoteAuthFingerprint];
  _slicedToArray(react.useState(null), 2);
  const effect = react.useEffect(() => {
    let obj;
    const HTTP = HTTPUtils.HTTP;
    const request = { url: Endpoints.REMOTE_AUTH_INITIALIZE, body: obj, oldFormErrors: true, rejectWithError: true };
    obj = { fingerprint: remoteAuthFingerprint };
    const postResult = HTTP.post(request);
    const nextPromise = postResult.then((body) => {
      closure_1_2(body.body.handshake_token);
      closure_1_1(constants.LOADED);
      const obj = remoteAuthFingerprint(dependencyMap[10]);
      const result = obj.DeprecatedLayoutAnimation();
    });
    nextPromise.catch(() => {
      closure_1_1(constants.NOT_FOUND);
      const obj = remoteAuthFingerprint(dependencyMap[10]);
      const result = obj.DeprecatedLayoutAnimation();
    });
  }, items);
  if (constants.LOADING === tmp3) {
    return closure_9(RemoteAuthLoading, {});
  } else if (constants.LOADED === tmp3) {
    let tmp13;
    if (null == tmp5) {
      tmp13 = closure_9(RemoteAuthNotFound, {});
    } else {
      let obj = {
        handshakeToken: tmp5,
        setAuthStep: function transitionStep(arg0) {
              importDefault(arg0);
              const obj = DeprecatedLayoutAnimation;
              const result = obj.DeprecatedLayoutAnimation();
            }
      };
      tmp13 = closure_9(RemoteAuthLogin, obj);
    }
    return tmp13;
  } else if (constants.SUCCEEDED === tmp3) {
    return closure_9(RemoteAuthLoginSucceeded, {});
  } else {
    const NOT_FOUND = tmp.NOT_FOUND;
    return closure_9(RemoteAuthNotFound, {});
  }
}
function RemoteAuthLogin(arg0) {
  let _undefined;
  let c2;
  let c3;
  let handshake_token;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let items1;
  let tmp3;
  let tmp5;
  ({ handshakeToken: require, setAuthStep: importDefault } = arg0);
  dependencyMap = undefined;
  _slicedToArray = undefined;
  const tmp = closure_12();
  [tmp3, c2] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  [tmp5, c3] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  const effect = react.useEffect(() => {
    let closure_0;
    const timeout = setTimeout(() => {
      closure_1_2(true);
    }, 1000);
    return () => clearTimeout(closure_0);
  }, []);
  let obj = _modDef12;
  let tmp10 = !tmp3;
  const throttleResult = obj.throttle(() => {
    let obj;
    _undefined(true);
    const HTTP = HTTPUtils.HTTP;
    const request = { url: Endpoints.REMOTE_AUTH_FINISH, body: obj, oldFormErrors: true, rejectWithError: true };
    obj = { handshake_token: require };
    const postResult = HTTP.post(request);
    const nextPromise = postResult.then(() => {
      closure_1_1(constants.SUCCEEDED);
    });
    nextPromise.catch(() => {
      closure_1_1(constants.NOT_FOUND);
    });
  }, 1000, { leading: true, trailing: false });
  if (!tmp3) {
    tmp10 = !tmp5;
  }
  const obj2 = { children: items };
  items = [, , , ];
  const obj3 = { source: AssetRegistryDefault3, style: tmp.mainImage };
  items[0] = closure_9(closure_6, obj3);
  const obj4 = { variant: "heading-md/extrabold", children: intl.string(intl5.t.jD2pqF) };
  const Heading = Text_Text.Heading;
  intl = intl5.intl;
  items[1] = closure_9(Heading, obj4);
  const obj5 = { style: tmp.warningCaption, children: intl2.string(intl5.t["hcd/kh"]) };
  const LegacyText = native.LegacyText;
  intl2 = intl5.intl;
  items[2] = closure_9(LegacyText, obj5);
  const obj6 = { style: tmp.buttonGroup, children: items1 };
  const ButtonGroup = ButtonGroup2.ButtonGroup;
  const obj7 = { text: intl3.string(intl5.t.N3qV8e), onPress: throttleResult, disabled: tmp10 };
  const Button = components_Button_Button.Button;
  intl3 = intl5.intl;
  items1 = [closure_9(Button, obj7, "" + tmp10), ];
  const obj8 = {
    variant: "secondary",
    text: intl4.string(intl5.t["ETE/oC"]),
    onPress() {
      let obj;
      const HTTP = HTTPUtils.HTTP;
      const request = { url: Endpoints.REMOTE_AUTH_CANCEL, body: obj, oldFormErrors: true, rejectWithError: true };
      obj = { handshake_token: require };
      HTTP.post(request);
      const arr = ModalActionCreatorsDefault;
      arr.pop();
    }
  };
  const Button2 = components_Button_Button.Button;
  intl4 = intl5.intl;
  items1[1] = closure_9(Button2, obj8);
  items[3] = closure_10(ButtonGroup, obj6);
  return closure_10(closure_11, obj2);
}
function RemoteAuthLoginSucceeded() {
  let Button;
  let intl;
  let intl2;
  let intl3;
  let items;
  let obj6;
  const tmp = closure_12();
  const obj = { children: items };
  items = [, , , ];
  const obj2 = { source: AssetRegistryDefault4, style: tmp.mainImage };
  items[0] = React4(metroRequire, obj2);
  const obj3 = { variant: "heading-xl/extrabold", children: intl.string(intl5.t.HbwTOZ) };
  const Heading = Text_Text.Heading;
  intl = intl5.intl;
  items[1] = React4(Heading, obj3);
  const obj4 = { style: tmp.caption, variant: "text-md/medium", color: "text-muted", children: intl2.string(intl5.t.wKknJ0) };
  const Text = Text_Text.Text;
  intl2 = intl5.intl;
  items[2] = React4(Text, obj4);
  const obj5 = { style: tmp.buttonGroup, children: React4(Button, obj6) };
  const ButtonGroup = ButtonGroup2.ButtonGroup;
  obj6 = { text: intl3.string(intl5.t.pYWLA0), onPress: ModalActionCreatorsDefault.pop };
  Button = components_Button_Button.Button;
  intl3 = intl5.intl;
  items[3] = React4(ButtonGroup, obj5);
  return authStore(unpackModuleId, obj);
}
function RemoteAuthNotFound() {
  let Button;
  let intl;
  let intl2;
  let intl3;
  let items;
  let obj5;
  const tmp = closure_12();
  const obj = { children: items };
  const obj2 = { variant: "heading-xl/extrabold", children: intl.string(intl5.t.NShI3Q) };
  const Heading = Text_Text.Heading;
  intl = intl5.intl;
  items = [React4(Heading, obj2), , ];
  const obj3 = { style: tmp.caption, variant: "text-md/medium", color: "text-muted", children: intl2.string(intl5.t.Ygezov) };
  const Text = Text_Text.Text;
  intl2 = intl5.intl;
  items[1] = React4(Text, obj3);
  const obj4 = { style: tmp.buttonGroup, children: React4(Button, obj5) };
  const ButtonGroup = ButtonGroup2.ButtonGroup;
  obj5 = { text: intl3.string(intl5.t["ETE/oC"]), onPress: ModalActionCreatorsDefault.pop };
  Button = components_Button_Button.Button;
  intl3 = intl5.intl;
  items[2] = React4(ButtonGroup, obj4);
  return authStore(unpackModuleId, obj);
}
function RemoteAuthLoading() {
  const obj = { style: closure_12().loadingContainer, children: React4(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}) };
  return React4(metroImportDefault, obj);
}
let _slicedToArray = _slicedToArray_mod;
({ ImageBackground: hasOwnProperty, Image: metroRequire, View: metroImportDefault } = react_native);
const Endpoints = Constants.Endpoints;
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { background: { width: "100%", height: "100%" }, container: { flex: 1, alignItems: "stretch", alignContent: "center" }, imageStyle: { resizeMode: "cover" }, logo: { position: "absolute", top: 16, alignSelf: "center", width: 32, height: 32 }, mainImage: { marginTop: 16, marginBottom: 32 }, warningCaption: obj2, caption: { lineHeight: 20, textAlign: "center", marginTop: 8, marginBottom: 32 }, mainCard: obj3, buttonGroup: { paddingVertical: 0 }, loadingContainer: { height: 300, justifyContent: "center" } };
obj2 = { fontSize: 16, lineHeight: 20, color: nativeDefault.unsafe_rawColors.RED_400, textAlign: "center", marginTop: 8, marginBottom: 32 };
createStyles = createStyles.createStyles;
obj3 = { display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, marginTop: "auto", marginBottom: "auto", marginLeft: 16, marginRight: 16, borderRadius: nativeDefault.radii.sm, padding: 16, shadowColor: nativeDefault.colors.BLACK, shadowOpacity: 0.16, shadowRadius: 2, shadowOffset: { height: 2, width: 0 } };
let closure_12 = createStyles(obj);
const constants = { LOADING: 0, [0]: "LOADING", NOT_FOUND: 1, [1]: "NOT_FOUND", LOADED: 2, [2]: "LOADED", SUCCEEDED: 3, [3]: "SUCCEEDED" };
let result = size.fileFinishedImporting("modules/remote_auth/components/native/RemoteAuthModal.tsx");

export default function RemoteAuth(arg0) {
  let items;
  let items1;
  let obj4;
  let obj5;
  const tmp = closure_12();
  const obj = { source: AssetRegistryDefault2, imageStyle: null, style: null, children: items1 };
  const top = useSafeAreaInsetsDefault().top;
  ({ imageStyle: obj.imageStyle, background: obj.style } = tmp);
  const obj2 = { style: items, source: AssetRegistryDefault };
  items = [tmp.logo, { marginTop: top }];
  items1 = [React4(metroRequire, obj2), ];
  const obj3 = { style: tmp.container, children: React4(metroImportDefault, obj4) };
  obj4 = { style: tmp.mainCard, children: React4(RemoteAuthBody, obj5) };
  obj5 = {};
  const merged = Object.assign(arg0);
  items1[1] = React4(metroImportDefault, obj3);
  return authStore(hasOwnProperty, obj);
};
