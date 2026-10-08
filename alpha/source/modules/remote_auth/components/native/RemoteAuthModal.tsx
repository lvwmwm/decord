// Module ID: 13914
// Function ID: 13915
// Name: RemoteAuthModal
// Dependencies: [32, 19, 17, 1085, 21, 5090, 587, 558, 576, 1630, 6164, 13915, 13913, 6658, 1294, 5940, 12, 13916, 5086, 1126, 1200, 5375, 5963, 13918, 6158, 2]

// Module 13914 (RemoteAuthModal)
import _modDef12 from "module_12" /* 12 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import intl5 from "intl" /* 1126 */;
import native from "native" /* 1200 */;
import HTTPUtils from "HTTPUtils" /* 1294 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1630 */;
import Text_Text from "Text/Text" /* 5086 */;
import components_Button_Button from "components/Button/Button" /* 5375 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5940 */;
import ButtonGroup2 from "ButtonGroup" /* 5963 */;
import FastImageDefault from "FastImage" /* 6164 */;
import DeprecatedLayoutAnimation from "DeprecatedLayoutAnimation" /* 6658 */;
import AssetRegistryDefault from "AssetRegistry" /* 13913 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 13915 */;
import QrLoginSpotIllustration from "QrLoginSpotIllustration" /* 13916 */;
import QrSuccessSpotIllustration from "QrSuccessSpotIllustration" /* 13918 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5090 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let StyleSheet;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let tmp;
const ActivityIndicator_ActivityIndicator = tmp(6158);
let _slicedToArray = _slicedToArray_mod;
({ View: hasOwnProperty, StyleSheet } = react_native);
const Endpoints = Constants.Endpoints;
({ jsx: metroImportDefault, jsxs: metroImportAll, Fragment: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { background: { width: "100%", height: "100%" }, container: { flex: 1, alignItems: "stretch", alignContent: "center" }, imageStyle: obj2, logo: { position: "absolute", top: 16, alignSelf: "center", width: 32, height: 32 }, mainImage: { marginTop: 16, marginBottom: 32 }, warningCaption: obj3, caption: { lineHeight: 20, textAlign: "center", marginTop: 8, marginBottom: 32 }, mainCard: obj4, buttonGroup: { paddingVertical: 0 }, loadingContainer: { height: 300, justifyContent: "center" } };
obj2 = { width: "100%", height: "100%", resizeMode: "cover" };
createStyles = createStyles.createStyles;
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = { fontSize: 16, lineHeight: 20, color: nativeDefault.unsafe_rawColors.RED_400, textAlign: "center", marginTop: 8, marginBottom: 32 };
obj4 = { display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, marginTop: "auto", marginBottom: "auto", marginLeft: 16, marginRight: 16, borderRadius: nativeDefault.radii.sm, padding: 16, shadowColor: nativeDefault.colors.BLACK, shadowOpacity: 0.16, shadowRadius: 2, shadowOffset: { height: 2, width: 0 } };
let closure_10 = createStyles(obj);
let c11 = 0.75;
const constants = { LOADING: 0, [0]: "LOADING", NOT_FOUND: 1, [1]: "NOT_FOUND", LOADED: 2, [2]: "LOADED", SUCCEEDED: 3, [3]: "SUCCEEDED" };
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function RemoteAuth(arg0) {
  let items;
  let items1;
  let tmp5;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(20);
  const tmp3 = closure_10();
  const top = useSafeAreaInsetsDefault().top;
  if (cResult[0] !== tmp3.imageStyle) {
    const obj2 = { source: AssetRegistryDefault2, style: tmp3.imageStyle };
    const tmp4Result = FastImageDefault;
    const tmp8 = metroImportDefault(tmp4Result, obj2);
    cResult[0] = tmp3.imageStyle;
    cResult[1] = tmp8;
    tmp5 = tmp8;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== top) {
    const obj3 = { marginTop: top };
    cResult[2] = top;
    cResult[3] = obj3;
    tmp9 = obj3;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] === tmp3.logo) {
    let tmp10;
    let tmp14;
    if (cResult[5] === tmp9) {
      tmp10 = cResult[6];
    }
    if (cResult[7] !== arg0) {
      const obj4 = {};
      const merged = Object.assign(arg0);
      const tmp20 = metroImportDefault(closure_13, obj4);
      cResult[7] = arg0;
      cResult[8] = tmp20;
      tmp14 = tmp20;
    } else {
      tmp14 = cResult[8];
    }
    if (cResult[9] === tmp3.mainCard) {
      let tmp21;
      if (cResult[10] === tmp14) {
        tmp21 = cResult[11];
      }
      if (cResult[12] === tmp3.container) {
        let tmp25;
        if (cResult[13] === tmp21) {
          tmp25 = cResult[14];
        }
        if (cResult[15] === tmp3.background) {
          if (cResult[16] === tmp5) {
            if (cResult[17] === tmp10) {
              let tmp29;
              if (cResult[18] === tmp25) {
                tmp29 = cResult[19];
              }
              return tmp29;
            }
          }
        }
        const obj5 = { style: tmp3.background, children: items };
        items = [tmp5, tmp10, tmp25];
        const tmp32 = metroImportAll(hasOwnProperty, obj5);
        cResult[15] = tmp3.background;
        cResult[16] = tmp5;
        cResult[17] = tmp10;
        cResult[18] = tmp25;
        cResult[19] = tmp32;
        tmp29 = tmp32;
      }
      const obj6 = { style: tmp3.container, children: tmp21 };
      const tmp28 = metroImportDefault(hasOwnProperty, obj6);
      cResult[12] = tmp3.container;
      cResult[13] = tmp21;
      cResult[14] = tmp28;
      tmp25 = tmp28;
    }
    const obj7 = { style: tmp3.mainCard, children: tmp14 };
    const tmp24 = metroImportDefault(hasOwnProperty, obj7);
    cResult[9] = tmp3.mainCard;
    cResult[10] = tmp14;
    cResult[11] = tmp24;
    tmp21 = tmp24;
  }
  const obj8 = { style: items1, source: AssetRegistryDefault };
  items1 = [tmp3.logo, tmp9];
  const tmp4Result2 = FastImageDefault;
  const tmp12 = metroImportDefault(tmp4Result2, obj8);
  cResult[4] = tmp3.logo;
  cResult[5] = tmp9;
  cResult[6] = tmp12;
  tmp10 = tmp12;
}) : (function RemoteAuth(arg0) {
  let items;
  let items1;
  let obj5;
  let obj6;
  const tmp = closure_10();
  const obj = { style: tmp.background, children: items };
  const top = useSafeAreaInsetsDefault().top;
  const obj2 = { source: AssetRegistryDefault2, style: tmp.imageStyle };
  const tmp2 = FastImageDefault;
  items = [metroImportDefault(tmp2, obj2), , ];
  const obj3 = { style: items1, source: AssetRegistryDefault };
  items1 = [tmp.logo, { marginTop: top }];
  const tmp3 = FastImageDefault;
  items[1] = metroImportDefault(tmp3, obj3);
  const obj4 = { style: tmp.container, children: metroImportDefault(hasOwnProperty, obj5) };
  obj5 = { style: tmp.mainCard, children: metroImportDefault(closure_13, obj6) };
  obj6 = {};
  const merged = Object.assign(arg0);
  items[2] = metroImportDefault(hasOwnProperty, obj4);
  return metroImportAll(hasOwnProperty, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (function RemoteAuthBody(remoteAuthFingerprint) {
  let setAuthStep;
  let tmp4;
  let tmp6;
  let tmp8;
  let tmp9;
  let obj = remoteAuthFingerprint(576);
  const cResult = obj.c(10);
  remoteAuthFingerprint = remoteAuthFingerprint.remoteAuthFingerprint;
  [tmp4, importDefault] = setAuthStep(react.useState(constants.LOADING), 2);
  setAuthStep(react.useState(constants.LOADING), 2);
  [tmp6, dependencyMap] = setAuthStep(react.useState(null), 2);
  setAuthStep(react.useState(null), 2);
  const obj2 = react;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    function transitionStep(arg0) {
      importDefault(arg0);
      const obj = DeprecatedLayoutAnimation;
      const result = obj.DeprecatedLayoutAnimation();
    }
    cResult[0] = transitionStep;
    setAuthStep = transitionStep;
  } else {
    setAuthStep = cResult[0];
  }
  if (cResult[1] !== remoteAuthFingerprint) {
    const fn = function x() {
      let obj;
      const HTTP = HTTPUtils.HTTP;
      const request = { url: Endpoints.REMOTE_AUTH_INITIALIZE, body: obj, oldFormErrors: true, rejectWithError: true };
      obj = { fingerprint: remoteAuthFingerprint };
      const postResult = HTTP.post(request);
      const nextPromise = postResult.then((body) => {
        closure_1_2(body.body.handshake_token);
        setAuthStep(constants.LOADED);
      });
      nextPromise.catch(() => {
        setAuthStep(constants.NOT_FOUND);
      });
    };
    const items = [remoteAuthFingerprint];
    cResult[1] = remoteAuthFingerprint;
    cResult[2] = fn;
    cResult[3] = items;
    tmp9 = items;
    tmp8 = fn;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const effect = obj2.useEffect(tmp8, tmp9);
  if (constants.LOADING === tmp4) {
    let tmp27;
    const _Symbol4 = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp30 = closure_7(closure_17, {});
      cResult[4] = tmp30;
      tmp27 = tmp30;
    } else {
      tmp27 = cResult[4];
    }
    return tmp27;
  } else if (constants.LOADED === tmp4) {
    let tmp19;
    if (null == tmp6) {
      let tmp23;
      const _Symbol3 = Symbol;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp26 = closure_7(closure_16, {});
        cResult[5] = tmp26;
        tmp23 = tmp26;
      } else {
        tmp23 = cResult[5];
      }
      tmp19 = tmp23;
    } else if (cResult[6] !== tmp6) {
      const obj3 = { handshakeToken: tmp6, setAuthStep };
      const tmp22 = closure_7(closure_14, obj3);
      cResult[6] = tmp6;
      cResult[7] = tmp22;
      tmp19 = tmp22;
    } else {
      tmp19 = cResult[7];
    }
    return tmp19;
  } else if (constants.SUCCEEDED === tmp4) {
    let tmp15;
    const _Symbol2 = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp18 = closure_7(closure_15, {});
      cResult[8] = tmp18;
      tmp15 = tmp18;
    } else {
      tmp15 = cResult[8];
    }
    return tmp15;
  } else {
    let tmp11;
    const NOT_FOUND = tmp2.NOT_FOUND;
    const _Symbol = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp14 = closure_7(closure_16, {});
      cResult[9] = tmp14;
      tmp11 = tmp14;
    } else {
      tmp11 = cResult[9];
    }
    return tmp11;
  }
}) : (function RemoteAuthBody(remoteAuthFingerprint) {
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
      const obj = remoteAuthFingerprint(dependencyMap[13]);
      const result = obj.DeprecatedLayoutAnimation();
    });
    nextPromise.catch(() => {
      closure_1_1(constants.NOT_FOUND);
      const obj = remoteAuthFingerprint(dependencyMap[13]);
      const result = obj.DeprecatedLayoutAnimation();
    });
  }, items);
  if (constants.LOADING === tmp3) {
    return closure_7(closure_17, {});
  } else if (constants.LOADED === tmp3) {
    let tmp13;
    if (null == tmp5) {
      tmp13 = closure_7(closure_16, {});
    } else {
      let obj = {
        handshakeToken: tmp5,
        setAuthStep: function transitionStep(arg0) {
              importDefault(arg0);
              const obj = DeprecatedLayoutAnimation;
              const result = obj.DeprecatedLayoutAnimation();
            }
      };
      tmp13 = closure_7(closure_14, obj);
    }
    return tmp13;
  } else if (constants.SUCCEEDED === tmp3) {
    return closure_7(closure_15, {});
  } else {
    const NOT_FOUND = tmp.NOT_FOUND;
    return closure_7(closure_16, {});
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (function RemoteAuthLogin(handshakeToken) {
  let closure_3;
  let first;
  let intl;
  let items1;
  let items2;
  let tmp10;
  let tmp12;
  let tmp6;
  let tmp9;
  const tmp = handshakeToken;
  let obj = handshakeToken(576);
  const cResult = obj.c(30);
  handshakeToken = handshakeToken.handshakeToken;
  const setAuthStep = handshakeToken.setAuthStep;
  const tmp4 = closure_10();
  [tmp6, dependencyMap] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  [first, _slicedToArray] = react.useState(false);
  const obj2 = react;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function l() {
      let closure_0;
      const timeout = setTimeout(() => {
        closure_1_2(true);
      }, 1000);
      return () => clearTimeout(closure_0);
    };
    const items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp10 = items;
    tmp9 = fn;
  } else {
    [tmp9, tmp10] = cResult;
  }
  const effect = obj2.useEffect(tmp9, tmp10);
  if (cResult[2] !== handshakeToken) {
    function handleCancelPress() {
      let obj;
      const HTTP = HTTPUtils.HTTP;
      const request = { url: Endpoints.REMOTE_AUTH_CANCEL, body: obj, oldFormErrors: true, rejectWithError: true };
      obj = { handshake_token: handshakeToken };
      HTTP.post(request);
      const arr = ModalActionCreatorsDefault;
      arr.pop();
    }
    cResult[2] = handshakeToken;
    cResult[3] = handleCancelPress;
    tmp12 = handleCancelPress;
  } else {
    tmp12 = cResult[3];
  }
  if (cResult[4] === handshakeToken) {
    let tmp13;
    let tmp16;
    let tmp20;
    let tmp24;
    let tmp27;
    let tmp29;
    let tmp33;
    if (cResult[5] === setAuthStep) {
      tmp13 = cResult[6];
    }
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const obj4 = { scale };
      const tmp19 = closure_7(tmp(13916).QrLoginSpotIllustration, obj4);
      cResult[7] = tmp19;
      tmp16 = tmp19;
    } else {
      tmp16 = cResult[7];
    }
    if (cResult[8] !== tmp4.mainImage) {
      const obj5 = { style: tmp4.mainImage, children: tmp16 };
      const tmp23 = closure_7(closure_5, obj5);
      cResult[8] = tmp4.mainImage;
      cResult[9] = tmp23;
      tmp20 = tmp23;
    } else {
      tmp20 = cResult[9];
    }
    const _Symbol2 = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      const obj6 = { variant: "heading-md/extrabold", children: intl.string(tmp(1126).t.jD2pqF) };
      const Heading = tmp(5086).Heading;
      intl = tmp(1126).intl;
      const tmp26 = closure_7(Heading, obj6);
      cResult[10] = tmp26;
      tmp24 = tmp26;
    } else {
      tmp24 = cResult[10];
    }
    const _Symbol3 = Symbol;
    const warningCaption = tmp4.warningCaption;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = tmp(1126).intl;
      const stringResult = intl2.string(tmp(1126).t["hcd/kh"]);
      cResult[11] = stringResult;
      tmp27 = stringResult;
    } else {
      tmp27 = cResult[11];
    }
    if (cResult[12] !== tmp4.warningCaption) {
      const obj7 = { style: warningCaption, children: tmp27 };
      const tmp31 = closure_7(tmp(1200).LegacyText, obj7);
      cResult[12] = tmp4.warningCaption;
      cResult[13] = tmp31;
      tmp29 = tmp31;
    } else {
      tmp29 = cResult[13];
    }
    const _HermesInternal = HermesInternal;
    const buttonGroup = tmp4.buttonGroup;
    const combined = "" + tmp15;
    const _Symbol4 = Symbol;
    if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
      const intl3 = tmp(1126).intl;
      const stringResult1 = intl3.string(tmp(1126).t.N3qV8e);
      cResult[14] = stringResult1;
      tmp33 = stringResult1;
    } else {
      tmp33 = cResult[14];
    }
    if (cResult[15] === tmp13) {
      if (cResult[16] === (!tmp6 && !first)) {
        let tmp35;
        let tmp38;
        let tmp40;
        if (cResult[17] === combined) {
          tmp35 = cResult[18];
        }
        const _Symbol5 = Symbol;
        if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
          const intl4 = tmp(1126).intl;
          const stringResult2 = intl4.string(tmp(1126).t["ETE/oC"]);
          cResult[19] = stringResult2;
          tmp38 = stringResult2;
        } else {
          tmp38 = cResult[19];
        }
        if (cResult[20] !== tmp12) {
          const obj8 = { variant: "secondary", text: tmp38, onPress: tmp12 };
          const tmp42 = closure_7(tmp(5375).Button, obj8);
          cResult[20] = tmp12;
          cResult[21] = tmp42;
          tmp40 = tmp42;
        } else {
          tmp40 = cResult[21];
        }
        if (cResult[22] === tmp4.buttonGroup) {
          if (cResult[23] === tmp35) {
            let tmp43;
            if (cResult[24] === tmp40) {
              tmp43 = cResult[25];
            }
            if (cResult[26] === tmp29) {
              if (cResult[27] === tmp43) {
                let tmp46;
                if (cResult[28] === tmp20) {
                  tmp46 = cResult[29];
                }
                return tmp46;
              }
            }
            const obj9 = { children: items1 };
            items1 = [tmp20, tmp24, tmp29, tmp43];
            const tmp49 = closure_8(closure_9, obj9);
            cResult[26] = tmp29;
            cResult[27] = tmp43;
            cResult[28] = tmp20;
            cResult[29] = tmp49;
            tmp46 = tmp49;
          }
        }
        const obj10 = { style: buttonGroup, children: items2 };
        items2 = [tmp35, tmp40];
        const tmp45 = closure_8(tmp(5963).ButtonGroup, obj10);
        cResult[22] = tmp4.buttonGroup;
        cResult[23] = tmp35;
        cResult[24] = tmp40;
        cResult[25] = tmp45;
        tmp43 = tmp45;
      }
    }
    const obj11 = { text: tmp33, onPress: tmp13, disabled: !tmp6 && !first };
    const tmp37 = closure_7(tmp(5375).Button, obj11, combined);
    cResult[15] = tmp13;
    cResult[16] = !tmp6 && !first;
    cResult[17] = combined;
    cResult[18] = tmp37;
    tmp35 = tmp37;
  }
  const obj3 = setAuthStep(12);
  const throttleResult = obj3.throttle(() => {
    let obj;
    closure_3(true);
    const HTTP = HTTPUtils.HTTP;
    const request = { url: Endpoints.REMOTE_AUTH_FINISH, body: obj, oldFormErrors: true, rejectWithError: true };
    obj = { handshake_token: handshakeToken };
    const postResult = HTTP.post(request);
    const nextPromise = postResult.then(() => {
      setAuthStep(constants.SUCCEEDED);
    });
    nextPromise.catch(() => {
      setAuthStep(constants.NOT_FOUND);
    });
  }, 1000, { leading: true, trailing: false });
  cResult[4] = handshakeToken;
  cResult[5] = setAuthStep;
  cResult[6] = throttleResult;
  tmp13 = throttleResult;
}) : (function RemoteAuthLogin(arg0) {
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
  let obj4;
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
  const obj3 = { style: tmp.mainImage, children: closure_7(QrLoginSpotIllustration.QrLoginSpotIllustration, obj4) };
  obj4 = { scale };
  items = [closure_7(closure_5, obj3), , , ];
  const obj5 = { variant: "heading-md/extrabold", children: intl.string(intl5.t.jD2pqF) };
  const Heading = Text_Text.Heading;
  intl = intl5.intl;
  items[1] = closure_7(Heading, obj5);
  const obj6 = { style: tmp.warningCaption, children: intl2.string(intl5.t["hcd/kh"]) };
  const LegacyText = native.LegacyText;
  intl2 = intl5.intl;
  items[2] = closure_7(LegacyText, obj6);
  const obj7 = { style: tmp.buttonGroup, children: items1 };
  const ButtonGroup = ButtonGroup2.ButtonGroup;
  const obj8 = { text: intl3.string(intl5.t.N3qV8e), onPress: throttleResult, disabled: tmp9 };
  const Button = components_Button_Button.Button;
  intl3 = intl5.intl;
  items1 = [closure_7(Button, obj8, "" + tmp9), ];
  const obj9 = {
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
  items1[1] = closure_7(Button2, obj9);
  items[3] = closure_8(ButtonGroup, obj7);
  return closure_8(closure_9, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (function RemoteAuthLoginSucceeded() {
  let first;
  let intl;
  let intl3;
  let items;
  let tmp13;
  let tmp16;
  let tmp18;
  let tmp21;
  let tmp25;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(14);
  const tmp4 = closure_10();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { scale };
    const tmp8 = metroImportDefault(QrSuccessSpotIllustration.QrSuccessSpotIllustration, obj2);
    cResult[0] = tmp8;
    first = tmp8;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.mainImage) {
    const obj3 = { style: tmp4.mainImage, children: first };
    const tmp12 = metroImportDefault(hasOwnProperty, obj3);
    cResult[1] = tmp4.mainImage;
    cResult[2] = tmp12;
    tmp9 = tmp12;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { variant: "heading-xl/extrabold", children: intl.string(intl5.t.HbwTOZ) };
    const Heading = tmp(5086).Heading;
    intl = tmp(1126).intl;
    const tmp15 = metroImportDefault(Heading, obj4);
    cResult[3] = tmp15;
    tmp13 = tmp15;
  } else {
    tmp13 = cResult[3];
  }
  const caption = tmp4.caption;
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(1126).intl;
    const stringResult = intl2.string(intl5.t.wKknJ0);
    cResult[4] = stringResult;
    tmp16 = stringResult;
  } else {
    tmp16 = cResult[4];
  }
  if (cResult[5] !== tmp4.caption) {
    const obj5 = { style: caption, variant: "text-md/medium", color: "text-muted", children: tmp16 };
    const tmp20 = metroImportDefault(Text_Text.Text, obj5);
    cResult[5] = tmp4.caption;
    cResult[6] = tmp20;
    tmp18 = tmp20;
  } else {
    tmp18 = cResult[6];
  }
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const obj6 = { text: intl3.string(intl5.t.pYWLA0), onPress: ModalActionCreatorsDefault.pop };
    const Button = tmp(5375).Button;
    intl3 = tmp(1126).intl;
    const tmp24 = metroImportDefault(Button, obj6);
    cResult[7] = tmp24;
    tmp21 = tmp24;
  } else {
    tmp21 = cResult[7];
  }
  if (cResult[8] !== tmp4.buttonGroup) {
    const obj7 = { style: tmp4.buttonGroup, children: tmp21 };
    const tmp27 = metroImportDefault(ButtonGroup2.ButtonGroup, obj7);
    cResult[8] = tmp4.buttonGroup;
    cResult[9] = tmp27;
    tmp25 = tmp27;
  } else {
    tmp25 = cResult[9];
  }
  if (cResult[10] === tmp9) {
    if (cResult[11] === tmp18) {
      let tmp28;
      if (cResult[12] === tmp25) {
        tmp28 = cResult[13];
      }
      return tmp28;
    }
  }
  const obj8 = { children: items };
  items = [tmp9, tmp13, tmp18, tmp25];
  const tmp29 = metroImportAll(React4, obj8);
  cResult[10] = tmp9;
  cResult[11] = tmp18;
  cResult[12] = tmp25;
  cResult[13] = tmp29;
  tmp28 = tmp29;
}) : (function RemoteAuthLoginSucceeded() {
  let Button;
  let intl;
  let intl2;
  let intl3;
  let items;
  let obj3;
  let obj7;
  const tmp = closure_10();
  const obj = { children: items };
  const obj2 = { style: tmp.mainImage, children: metroImportDefault(QrSuccessSpotIllustration.QrSuccessSpotIllustration, obj3) };
  obj3 = { scale };
  items = [metroImportDefault(hasOwnProperty, obj2), , , ];
  const obj4 = { variant: "heading-xl/extrabold", children: intl.string(intl5.t.HbwTOZ) };
  const Heading = Text_Text.Heading;
  intl = intl5.intl;
  items[1] = metroImportDefault(Heading, obj4);
  const obj5 = { style: tmp.caption, variant: "text-md/medium", color: "text-muted", children: intl2.string(intl5.t.wKknJ0) };
  const Text = Text_Text.Text;
  intl2 = intl5.intl;
  items[2] = metroImportDefault(Text, obj5);
  const obj6 = { style: tmp.buttonGroup, children: metroImportDefault(Button, obj7) };
  const ButtonGroup = ButtonGroup2.ButtonGroup;
  obj7 = { text: intl3.string(intl5.t.pYWLA0), onPress: ModalActionCreatorsDefault.pop };
  Button = components_Button_Button.Button;
  intl3 = intl5.intl;
  items[3] = metroImportDefault(ButtonGroup, obj6);
  return metroImportAll(React4, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (function RemoteAuthNotFound() {
  let first;
  let intl;
  let intl3;
  let items;
  let tmp10;
  let tmp13;
  let tmp17;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(10);
  const tmp4 = closure_10();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { variant: "heading-xl/extrabold", children: intl.string(intl5.t.NShI3Q) };
    const Heading = tmp(5086).Heading;
    intl = tmp(1126).intl;
    const tmp7 = metroImportDefault(Heading, obj2);
    cResult[0] = tmp7;
    first = tmp7;
  } else {
    first = cResult[0];
  }
  const caption = tmp4.caption;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(1126).intl;
    const stringResult = intl2.string(intl5.t.Ygezov);
    cResult[1] = stringResult;
    tmp8 = stringResult;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] !== tmp4.caption) {
    const obj3 = { style: caption, variant: "text-md/medium", color: "text-muted", children: tmp8 };
    const tmp12 = metroImportDefault(Text_Text.Text, obj3);
    cResult[2] = tmp4.caption;
    cResult[3] = tmp12;
    tmp10 = tmp12;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { text: intl3.string(intl5.t["ETE/oC"]), onPress: ModalActionCreatorsDefault.pop };
    const Button = tmp(5375).Button;
    intl3 = tmp(1126).intl;
    const tmp16 = metroImportDefault(Button, obj4);
    cResult[4] = tmp16;
    tmp13 = tmp16;
  } else {
    tmp13 = cResult[4];
  }
  if (cResult[5] !== tmp4.buttonGroup) {
    const obj5 = { style: tmp4.buttonGroup, children: tmp13 };
    const tmp19 = metroImportDefault(ButtonGroup2.ButtonGroup, obj5);
    cResult[5] = tmp4.buttonGroup;
    cResult[6] = tmp19;
    tmp17 = tmp19;
  } else {
    tmp17 = cResult[6];
  }
  if (cResult[7] === tmp10) {
    let tmp20;
    if (cResult[8] === tmp17) {
      tmp20 = cResult[9];
    }
    return tmp20;
  }
  const obj6 = { children: items };
  items = [first, tmp10, tmp17];
  const tmp21 = metroImportAll(React4, obj6);
  cResult[7] = tmp10;
  cResult[8] = tmp17;
  cResult[9] = tmp21;
  tmp20 = tmp21;
}) : (function RemoteAuthNotFound() {
  let Button;
  let intl;
  let intl2;
  let intl3;
  let items;
  let obj5;
  const tmp = closure_10();
  const obj = { children: items };
  const obj2 = { variant: "heading-xl/extrabold", children: intl.string(intl5.t.NShI3Q) };
  const Heading = Text_Text.Heading;
  intl = intl5.intl;
  items = [metroImportDefault(Heading, obj2), , ];
  const obj3 = { style: tmp.caption, variant: "text-md/medium", color: "text-muted", children: intl2.string(intl5.t.Ygezov) };
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
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? (function RemoteAuthLoading() {
  let first;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(3);
  const tmp4 = closure_10();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp7 = metroImportDefault(ActivityIndicator_ActivityIndicator.ActivityIndicator, {});
    cResult[0] = tmp7;
    first = tmp7;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.loadingContainer) {
    const obj2 = { style: tmp4.loadingContainer, children: first };
    const tmp11 = metroImportDefault(hasOwnProperty, obj2);
    cResult[1] = tmp4.loadingContainer;
    cResult[2] = tmp11;
    tmp8 = tmp11;
  } else {
    tmp8 = cResult[2];
  }
  return tmp8;
}) : (function RemoteAuthLoading() {
  const obj = { style: closure_10().loadingContainer, children: metroImportDefault(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}) };
  return metroImportDefault(hasOwnProperty, obj);
});
let result = size.fileFinishedImporting("modules/remote_auth/components/native/RemoteAuthModal.tsx");

export default tmp6;
