// Module ID: 16023
// Function ID: 16024
// Name: RemoteAuthModal
// Dependencies: [32, 19, 17, 1072, 21, 5142, 575, 1627, 7661, 7011, 5844, 16022, 1652, 1282, 12, 16024, 5753, 1113, 1187, 6825, 5760, 6801, 16028, 7018, 2]
// Exports: default

// Module 16023 (RemoteAuthModal)
import _modDef12 from "module_12" /* 12 */;
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import intl5 from "intl" /* 1113 */;
import native from "native" /* 1187 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import _mod1652 from "module_1652" /* 1652 */;
import Text_Text from "Text/Text" /* 5753 */;
import components_Button_Button from "components/Button/Button" /* 5760 */;
import FastImageDefault from "FastImage" /* 5844 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6801 */;
import ButtonGroup2 from "ButtonGroup" /* 6825 */;
import AuthBackgroundArtDefault from "AuthBackgroundArt" /* 7011 */;
import ActivityIndicator_ActivityIndicator from "ActivityIndicator/ActivityIndicator" /* 7018 */;
import useEaseInEaseOutLayoutAnimationsDefault from "useEaseInEaseOutLayoutAnimations" /* 7661 */;
import AssetRegistryDefault from "AssetRegistry" /* 16022 */;
import QrLoginSpotIllustration from "QrLoginSpotIllustration" /* 16024 */;
import QrSuccessSpotIllustration from "QrSuccessSpotIllustration" /* 16028 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5142 */;
import size from "module_2" /* 2 */;

let dependencyMap, importDefault;

let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let tmp8;
const _modDef1652 = tmp8(1652);
function RemoteAuthBody(remoteAuthFingerprint) {
  let closure_1;
  let entering;
  let exiting;
  let tmp12;
  let tmp14;
  let tmp4;
  let tmp5;
  let tmp7;
  remoteAuthFingerprint = remoteAuthFingerprint.remoteAuthFingerprint;
  const tmp = closure_10();
  [tmp4, tmp5] = react.useState(constants.LOADING);
  importDefault = tmp5;
  _slicedToArray(react.useState(constants.LOADING), 2);
  [tmp7, dependencyMap] = react.useState(null);
  _slicedToArray(react.useState(null), 2);
  const items = [remoteAuthFingerprint];
  ({ entering, exiting } = useEaseInEaseOutLayoutAnimationsDefault());
  useEaseInEaseOutLayoutAnimationsDefault();
  const effect = react.useEffect(() => {
    let obj;
    const HTTP = HTTPUtils.HTTP;
    const request = { url: Endpoints.REMOTE_AUTH_INITIALIZE, body: obj, oldFormErrors: true, rejectWithError: true };
    obj = { fingerprint: remoteAuthFingerprint };
    const postResult = HTTP.post(request);
    const nextPromise = postResult.then((body) => {
      closure_1_2(body.body.handshake_token);
      closure_1_1(constants.LOADED);
    });
    nextPromise.catch(() => {
      closure_1_1(constants.NOT_FOUND);
    });
  }, items);
  if (constants.LOADING === tmp4) {
    tmp14 = closure_7(RemoteAuthLoading, {});
    tmp12 = closure_7;
  } else if (constants.LOADED === tmp4) {
    let tmp19;
    let tmp17;
    if (null == tmp7) {
      tmp19 = closure_7(RemoteAuthNotFound, {});
      tmp17 = closure_7;
    } else {
      tmp17 = closure_7;
      let obj = { handshakeToken: tmp7, setAuthStep: tmp5 };
      tmp19 = closure_7(RemoteAuthLogin, obj);
    }
    tmp12 = tmp17;
    tmp14 = tmp19;
  } else if (constants.SUCCEEDED === tmp4) {
    tmp14 = closure_7(RemoteAuthLoginSucceeded, {});
    tmp12 = closure_7;
  } else {
    const NOT_FOUND = tmp2.NOT_FOUND;
    tmp12 = closure_7;
    tmp14 = closure_7(RemoteAuthNotFound, {});
  }
  const obj2 = { style: tmp.step, entering, exiting, children: tmp14 };
  return tmp12(_modDef1652.View, obj2, tmp4);
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
  const tmp = closure_10();
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
  let tmp9 = !tmp3;
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
    tmp9 = !tmp5;
  }
  const obj2 = { children: items };
  items = [, , , ];
  const obj3 = { style: tmp.mainImage, children: closure_7(QrLoginSpotIllustration.QrLoginSpotIllustration, { scale: 0.75 }) };
  items[0] = closure_7(View, obj3);
  const obj4 = { variant: "heading-sm/semibold", children: intl.string(intl5.t.jD2pqF) };
  const Heading = Text_Text.Heading;
  intl = intl5.intl;
  items[1] = closure_7(Heading, obj4);
  const obj5 = { style: tmp.warningCaption, children: intl2.string(intl5.t["hcd/kh"]) };
  const LegacyText = native.LegacyText;
  intl2 = intl5.intl;
  items[2] = closure_7(LegacyText, obj5);
  const obj6 = { style: tmp.buttonGroup, children: items1 };
  const ButtonGroup = ButtonGroup2.ButtonGroup;
  const obj7 = { text: intl3.string(intl5.t.N3qV8e), onPress: throttleResult, disabled: tmp9 };
  const Button = components_Button_Button.Button;
  intl3 = intl5.intl;
  items1 = [closure_7(Button, obj7, "" + tmp9), ];
  const obj8 = {
    variant: "secondary",
    text: intl4.string(intl5.t["ETE/oC"]),
    onPress: function handleCancelPress() {
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
  items1[1] = closure_7(Button2, obj8);
  items[3] = closure_8(ButtonGroup, obj6);
  return closure_8(closure_9, obj2);
}
function RemoteAuthLoginSucceeded() {
  let Button;
  let intl;
  let intl2;
  let intl3;
  let items;
  let obj6;
  const tmp = closure_10();
  const obj = { children: items };
  items = [, , , ];
  const obj2 = { style: tmp.mainImage, children: metroImportDefault(QrSuccessSpotIllustration.QrSuccessSpotIllustration, { scale: 0.75 }) };
  items[0] = metroImportDefault(View, obj2);
  const obj3 = { variant: "heading-xl/semibold", children: intl.string(intl5.t.HbwTOZ) };
  const Heading = Text_Text.Heading;
  intl = intl5.intl;
  items[1] = metroImportDefault(Heading, obj3);
  const obj4 = { style: tmp.caption, variant: "body-md/medium", color: "text-muted", children: intl2.string(intl5.t.wKknJ0) };
  const Text = Text_Text.Text;
  intl2 = intl5.intl;
  items[2] = metroImportDefault(Text, obj4);
  const obj5 = { style: tmp.buttonGroup, children: metroImportDefault(Button, obj6) };
  const ButtonGroup = ButtonGroup2.ButtonGroup;
  obj6 = { text: intl3.string(intl5.t.pYWLA0), onPress: ModalActionCreatorsDefault.pop };
  Button = components_Button_Button.Button;
  intl3 = intl5.intl;
  items[3] = metroImportDefault(ButtonGroup, obj5);
  return metroImportAll(React4, obj);
}
function RemoteAuthNotFound() {
  let Button;
  let intl;
  let intl2;
  let intl3;
  let items;
  let obj5;
  const tmp = closure_10();
  const obj = { children: items };
  const obj2 = { variant: "heading-xl/semibold", children: intl.string(intl5.t.NShI3Q) };
  const Heading = Text_Text.Heading;
  intl = intl5.intl;
  items = [metroImportDefault(Heading, obj2), , ];
  const obj3 = { style: tmp.caption, variant: "body-md/medium", color: "text-muted", children: intl2.string(intl5.t.Ygezov) };
  const Text = Text_Text.Text;
  intl2 = intl5.intl;
  items[1] = metroImportDefault(Text, obj3);
  const obj4 = { style: tmp.buttonGroup, children: metroImportDefault(Button, obj5) };
  const ButtonGroup = ButtonGroup2.ButtonGroup;
  obj5 = { text: intl3.string(intl5.t["ETE/oC"]), onPress: ModalActionCreatorsDefault.pop };
  Button = components_Button_Button.Button;
  intl3 = intl5.intl;
  items[2] = metroImportDefault(ButtonGroup, obj4);
  return metroImportAll(React4, obj);
}
function RemoteAuthLoading() {
  const obj = { style: closure_10().loadingContainer, children: metroImportDefault(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}) };
  return metroImportDefault(View, obj);
}
let _slicedToArray = _slicedToArray_mod;
let View = react_native.View;
const Endpoints = Constants.Endpoints;
({ jsx: metroImportDefault, jsxs: metroImportAll, Fragment: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { background: { width: "100%", height: "100%" }, container: { flex: 1, alignItems: "stretch", alignContent: "center" }, logo: { position: "absolute", top: 16, alignSelf: "center", width: 32, height: 32 }, mainImage: { marginTop: 16, marginBottom: 32 }, warningCaption: obj2, caption: { lineHeight: 20, textAlign: "center", marginTop: 8, marginBottom: 32 }, mainCard: obj3, step: { alignSelf: "stretch", alignItems: "center" }, buttonGroup: { paddingVertical: 0 }, loadingContainer: { height: 300, justifyContent: "center" } };
obj2 = { fontSize: 16, lineHeight: 20, color: nativeDefault.unsafe_rawColors.RED_400, textAlign: "center", marginTop: 8, marginBottom: 32 };
createStyles = createStyles.createStyles;
obj3 = { display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, marginTop: "auto", marginBottom: "auto", marginLeft: 16, marginRight: 16, borderRadius: nativeDefault.radii.sm, padding: 16, shadowColor: nativeDefault.colors.BLACK, shadowOpacity: 0.16, shadowRadius: 2, shadowOffset: { height: 2, width: 0 } };
let closure_10 = createStyles(obj);
const constants = { LOADING: 0, [0]: "LOADING", NOT_FOUND: 1, [1]: "NOT_FOUND", LOADED: 2, [2]: "LOADED", SUCCEEDED: 3, [3]: "SUCCEEDED" };
const result = size.fileFinishedImporting("modules/remote_auth/components/native/RemoteAuthModal.tsx");

export default function RemoteAuth(arg0) {
  let LayoutAnimationConfig;
  let items;
  let items1;
  let obj4;
  let obj5;
  let obj6;
  const tmp = closure_10();
  const top = useSafeAreaInsetsDefault().top;
  const obj = { style: tmp.background, children: items };
  const layout = useEaseInEaseOutLayoutAnimationsDefault().layout;
  items = [metroImportDefault(AuthBackgroundArtDefault, {}), , ];
  const obj2 = { style: items1, source: AssetRegistryDefault };
  items1 = [tmp.logo, { marginTop: top }];
  const tmp2 = FastImageDefault;
  items[1] = metroImportDefault(tmp2, obj2);
  const obj3 = { style: tmp.container, children: metroImportDefault(LayoutAnimationConfig, obj4) };
  obj4 = { skipEntering: true, children: metroImportDefault(View, obj5) };
  LayoutAnimationConfig = _mod1652.LayoutAnimationConfig;
  obj5 = { style: tmp.mainCard, layout, children: metroImportDefault(RemoteAuthBody, obj6) };
  obj6 = {};
  View = _modDef1652.View;
  const merged = Object.assign(arg0);
  items[2] = metroImportDefault(View, obj3);
  return metroImportAll(View, obj);
};
