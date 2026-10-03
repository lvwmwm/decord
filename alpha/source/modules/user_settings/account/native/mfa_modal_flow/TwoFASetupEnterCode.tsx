// Module ID: 14570
// Function ID: 14571
// Name: TwoFASetupEnterCode
// Dependencies: [32, 19, 1986, 14564, 21, 4890, 558, 576, 14567, 1490, 504, 6439, 14571, 1126, 1188, 5973, 14572, 14563, 6619, 2]

// Module 14570 (TwoFASetupEnterCode)
import MFAUtils from "MFAUtils" /* 6439 */;
import TwoFAConstants from "TwoFAConstants" /* 14564 */;
import MFAActionCreatorsDefault from "MFAActionCreators" /* 14571 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AppStateStore from "AppStateStore" /* 1986 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, cResult, current, importDefault, navigation;

let metroImportAll;
let metroImportDefault;
const TwoFAModalSetupSections = TwoFAConstants.TwoFAModalSetupSections;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles({ container: { flex: 1, justifyContent: "center", alignItems: "center" } });
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((cResult) => {
  let items1;
  let obj7;
  let ref;
  let ref1;
  let tmp10;
  let tmp14;
  let tmp17;
  let tmp6;
  let tmp9;
  _require = cResult;
  let tmp = _require;
  const tmp2 = navigation;
  let obj = require("react");
  cResult = obj.c(22);
  const tmp4 = closure_9();
  let obj2 = require("TwoFASetupStyles");
  const twoFASetupStyles = obj2.useTwoFASetupStyles();
  let obj3 = ref;
  importDefault = ref.useRef(cResult);
  if (cResult[0] !== cResult) {
    const fn = function f() {
      ref.current = current;
    };
    cResult[0] = cResult;
    cResult[1] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[1];
  }
  const effect = obj3.useEffect(tmp6);
  const tmpResult = tmp(tmp2[9]);
  navigation = tmpResult.useNavigation();
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ref1];
    const fn2 = function _() {
      return ref1.getState();
    };
    cResult[2] = items;
    cResult[3] = fn2;
    tmp10 = fn2;
    tmp9 = items;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmpResult2 = tmp(tmp2[10]);
  const stateFromStores = tmpResult2.useStateFromStores(tmp9, tmp10);
  const tmp13 = _slicedToArray(obj3.useState(false), 2);
  [tmp14, _slicedToArray] = tmp13;
  ref = obj3.useRef(null);
  ref1 = obj3.useRef(null);
  if (cResult[4] !== navigation) {
    const fn3 = function w(code) {
      const totpSecret = ref.current.totpSecret;
      const obj = MFAUtils;
      const encodeTotpSecretResult = obj.encodeTotpSecret(totpSecret);
      _slicedToArray(true);
      const obj2 = MFAActionCreatorsDefault;
      const obj3 = { code, secret: encodeTotpSecretResult };
      const enableResult = obj2.enable(obj3);
      const nextPromise = enableResult.then(() => {
        navigation.push(constants.SUCCESS);
      });
      nextPromise.catch((error) => {
        let message;
        const tmp = closure_1_4;
        if (null != error.body) {
          message = error.body.message;
        } else {
          const intl = closure_0(navigation[13]).intl;
          message = intl.string(closure_0(navigation[13]).t["1u5B+G"]);
        }
        tmp.current = message;
        current = ref.current;
        if (current != null) {
          current.clear();
        }
        closure_1_3(false);
      });
    };
    cResult[4] = navigation;
    cResult[5] = fn3;
    tmp17 = fn3;
  } else {
    tmp17 = cResult[5];
  }
  if (cResult[6] === twoFASetupStyles.modalHeader) {
    let tmp19;
    let tmp20;
    let tmp22;
    let tmp25;
    if (cResult[7] === twoFASetupStyles.text) {
      tmp19 = cResult[8];
    }
    const _Symbol = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      let intl = tmp(tmp2[13]).intl;
      const stringResult = intl.string(tmp(tmp2[13]).t.HZPBOd);
      cResult[9] = stringResult;
      tmp20 = stringResult;
    } else {
      tmp20 = cResult[9];
    }
    if (cResult[10] !== tmp19) {
      const obj4 = { style: tmp19, children: tmp20 };
      const tmp24 = closure_7(tmp(tmp2[14]).LegacyText, obj4);
      cResult[10] = tmp19;
      cResult[11] = tmp24;
      tmp22 = tmp24;
    } else {
      tmp22 = cResult[11];
    }
    const _Symbol2 = Symbol;
    if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
      const obj5 = { maxHeight: 520 };
      cResult[12] = obj5;
      tmp25 = obj5;
    } else {
      tmp25 = cResult[12];
    }
    const tmp27 = require("useRefValue")(ref);
    const tmp26 = importDefault;
    if (cResult[13] === stateFromStores) {
      if (cResult[14] === tmp17) {
        if (cResult[15] === tmp14) {
          let tmp28;
          if (cResult[16] === tmp27) {
            tmp28 = cResult[17];
          }
          if (cResult[18] === tmp4.container) {
            if (cResult[19] === tmp28) {
              let tmp31;
              if (cResult[20] === tmp22) {
                tmp31 = cResult[21];
              }
              return tmp31;
            }
          }
          const obj6 = { children: closure_8(tmp(tmp2[18]).SafeAreaPaddingView, obj7) };
          const TwoFASetupModalScreen = tmp(tmp2[17]).TwoFASetupModalScreen;
          obj7 = { bottom: true, style: tmp18, children: items1 };
          items1 = [tmp22, tmp28];
          const tmp34 = closure_7(TwoFASetupModalScreen, obj6);
          cResult[18] = tmp4.container;
          cResult[19] = tmp28;
          cResult[20] = tmp22;
          cResult[21] = tmp34;
          tmp31 = tmp34;
        }
      }
    }
    const obj8 = { style: tmp25, ref: ref1, showActivityIndicator: tmp14, handleSubmit: tmp17, error: tmp27, appState: stateFromStores };
    const tmp30 = closure_7(tmp26(tmp2[16]), obj8);
    cResult[13] = stateFromStores;
    cResult[14] = tmp17;
    cResult[15] = tmp14;
    cResult[16] = tmp27;
    cResult[17] = tmp30;
    tmp28 = tmp30;
  }
  const items2 = [, ];
  ({ modalHeader: arr2[0], text: arr2[1] } = twoFASetupStyles);
  cResult[6] = twoFASetupStyles.modalHeader;
  cResult[7] = twoFASetupStyles.text;
  cResult[8] = items2;
  tmp19 = items2;
}) : ((cResult) => {
  let SafeAreaPaddingView;
  let closure_3;
  let first;
  let intl;
  let items2;
  let items3;
  let obj5;
  let ref;
  let ref1;
  _require = cResult;
  let tmp = closure_9();
  let obj = require("TwoFASetupStyles");
  const twoFASetupStyles = obj.useTwoFASetupStyles();
  importDefault = ref.useRef(cResult);
  const effect = ref.useEffect(() => {
    ref.current = current;
  });
  let obj2 = require("useNavigation");
  navigation = obj2.useNavigation();
  let obj3 = require("get initialized");
  const items = [ref1];
  const stateFromStores = obj3.useStateFromStores(items, () => ref1.getState());
  [first, _slicedToArray] = ref.useState(false);
  ref = ref.useRef(null);
  ref1 = ref.useRef(null);
  const items1 = [navigation];
  const callback = ref.useCallback((code) => {
    const totpSecret = ref.current.totpSecret;
    const obj = MFAUtils;
    const encodeTotpSecretResult = obj.encodeTotpSecret(totpSecret);
    closure_3(true);
    const obj2 = MFAActionCreatorsDefault;
    const obj3 = { code, secret: encodeTotpSecretResult };
    const enableResult = obj2.enable(obj3);
    const nextPromise = enableResult.then(() => {
      navigation.push(constants.SUCCESS);
    });
    nextPromise.catch((error) => {
      let message;
      const tmp = closure_1_4;
      if (null != error.body) {
        message = error.body.message;
      } else {
        const intl = closure_0(navigation[13]).intl;
        message = intl.string(closure_0(navigation[13]).t["1u5B+G"]);
      }
      tmp.current = message;
      current = ref.current;
      if (current != null) {
        current.clear();
      }
      closure_1_3(false);
    });
  }, items1);
  const obj4 = { children: closure_8(SafeAreaPaddingView, obj5) };
  const TwoFASetupModalScreen = require("TwoFASetupModal").TwoFASetupModalScreen;
  obj5 = { bottom: true, style: tmp.container, children: items3 };
  SafeAreaPaddingView = require("common/SafeAreaView").SafeAreaPaddingView;
  const obj6 = { style: items2, children: intl.string(require("intl").t.HZPBOd) };
  items2 = [, ];
  ({ modalHeader: arr3[0], text: arr3[1] } = twoFASetupStyles);
  const LegacyText = require("native").LegacyText;
  intl = require("intl").intl;
  items3 = [closure_7(LegacyText, obj6), ];
  const obj7 = { style: { maxHeight: 520 }, ref: ref1, showActivityIndicator: first, handleSubmit: callback, error: require("useRefValue")(ref), appState: stateFromStores };
  const tmp11 = require("MFACodeInput");
  items3[1] = closure_7(tmp11, obj7);
  return closure_7(TwoFASetupModalScreen, obj4);
});
const result = size.fileFinishedImporting("modules/user_settings/account/native/mfa_modal_flow/TwoFASetupEnterCode.tsx");

export default tmp3;
