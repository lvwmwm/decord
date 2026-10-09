// Module ID: 14962
// Function ID: 14963
// Name: TwoFASetupSuccess
// Dependencies: [5, 32, 19, 17, 21, 5091, 587, 558, 576, 5946, 1126, 14951, 6629, 6163, 14963, 5087, 1200, 5376, 14952, 2]

// Module 14962 (TwoFASetupSuccess)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import FastImageDefault from "FastImage" /* 6163 */;
import NativeCeremoniesDefault from "NativeCeremonies" /* 6629 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let c2, c5;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let size;
let tmp;
const intl5 = tmp(1126);
const native = tmp(1200);
const Text_Text = tmp(5087);
const components_Button_Button = tmp(5376);
const TwoFASetupModal = tmp(14952);
const AssetRegistry = tmp(14963);
const View = react_native.View;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { alignSelf: "stretch", flex: 1, alignItems: "center", justifyContent: "flex-start", flexDirection: "column" }, flex: { flex: 1 }, image: { width: 190, height: 70 }, success: { marginTop: 33 }, successBody: obj2, divider: size, buttonWrapper: { alignSelf: "stretch", margin: 16, marginTop: 0 }, ctaDescription: obj3, errorText: obj4 };
obj2 = { fontSize: 14, textAlign: "center", marginHorizontal: 20, marginTop: 4, color: nativeDefault.colors.TEXT_STRONG };
createStyles = createStyles.createStyles;
size = { height: 2, width: 48, margin: 32, backgroundColor: nativeDefault.colors.BORDER_STRONG };
obj3 = { fontSize: 14, textAlign: "center", marginTop: 4, marginHorizontal: 16, color: nativeDefault.colors.TEXT_STRONG };
obj4 = { fontSize: 14, textAlign: "center", marginHorizontal: 16, marginTop: 8, color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
let closure_9 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function TwoFASetupSuccess() {
  let first;
  let items;
  let items1;
  let obj10;
  let setError;
  let tmp10;
  let tmp14;
  let tmp19;
  let tmp21;
  let tmp24;
  let tmp26;
  let tmp29;
  let tmp33;
  let tmp35;
  let tmp38;
  let tmp6;
  let tmp8;
  let tmp = require;
  let obj = react2;
  const cResult = obj.c(40);
  const tmp4 = closure_9();
  [tmp6, require] = _slicedToArray(react.useState(false), 2);
  const tmp5 = _slicedToArray(react.useState(false), 2);
  [tmp8, importDefault] = _slicedToArray(react.useState(""), 2);
  const tmp7 = _slicedToArray(react.useState(""), 2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o() {
      const tmp = importDefault("");
      setRegistering = _asyncToGenerator(async (arg0, value) => {
        let body;
        let closure_1;
        let credential;
        let ticket;
        closure_0 = arg0;
        if (c5 === 2) {
          c5 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          let c4;
          try {
            c5 = 2;
            if (0 === c2) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                c4 = 1;
                ({ ticket, credential } = closure_0);
                const finishRegisterWebAuthnCredential = closure_0(dependencyMap[9]).finishRegisterWebAuthnCredential;
                const tmp23 = closure_0(dependencyMap[9]);
                const intl = closure_0(dependencyMap[10]).intl;
                c2 = 2;
                c5 = 1;
                const obj4 = { value: finishRegisterWebAuthnCredential(intl.string(closure_0(dependencyMap[10]).t["8H5RmH"]), ticket, credential), done: false };
                return obj4;
              }
            } else {
              if (1 === tmp4) {
                c4 = 0;
                tmp(body.body.message);
              } else if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 0;
                c5 = 3;
                const obj5 = { value, done: true };
                return obj5;
              } else {
                const obj = setError(dependencyMap[11]);
                obj.close();
                c4 = 0;
              }
              c5 = 3;
              return { value: "IconComponent", done: null };
            }
          } catch (tmp14) {
            body = tmp14;
            if (0 === c4) {
              c5 = 3;
              throw tmp14;
            } else {
              c2 = 1;
            }
          }
        }
      });
      let obj = NativeCeremoniesDefault;
      let obj2 = {
        setRegistering,
        setError: importDefault,
        onRegisterSuccess() {
          return closure_0(...arguments);
        }
      };
      obj.registerPasskey(obj2);
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  const container = tmp4.container;
  if (cResult[1] !== tmp4.flex) {
    let obj2 = { style: tmp4.flex };
    const tmp13 = closure_7(View, obj2);
    cResult[1] = tmp4.flex;
    cResult[2] = tmp13;
    tmp10 = tmp13;
  } else {
    tmp10 = cResult[2];
  }
  if (cResult[3] !== tmp4.image) {
    let obj3 = { source: AssetRegistry, style: tmp4.image };
    const tmp17 = FastImageDefault;
    const tmp18 = closure_7(tmp17, obj3);
    cResult[3] = tmp4.image;
    cResult[4] = tmp18;
    tmp14 = tmp18;
  } else {
    tmp14 = cResult[4];
  }
  const success = tmp4.success;
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    let intl = intl5.intl;
    const stringResult = intl.string(intl5.t.Awk3Gw);
    cResult[5] = stringResult;
    tmp19 = stringResult;
  } else {
    tmp19 = cResult[5];
  }
  if (cResult[6] !== tmp4.success) {
    let obj4 = { style: success, variant: "text-lg/semibold", color: "mobile-text-heading-primary", children: tmp19 };
    let tmp23 = closure_7(Text_Text.Text, obj4);
    cResult[6] = tmp4.success;
    cResult[7] = tmp23;
    tmp21 = tmp23;
  } else {
    tmp21 = cResult[7];
  }
  const successBody = tmp4.successBody;
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = intl5.intl;
    const stringResult1 = intl2.string(intl5.t["0d1bXM"]);
    cResult[8] = stringResult1;
    tmp24 = stringResult1;
  } else {
    tmp24 = cResult[8];
  }
  if (cResult[9] !== tmp4.successBody) {
    let obj5 = { style: successBody, children: tmp24 };
    const tmp28 = closure_7(native.LegacyText, obj5);
    cResult[9] = tmp4.successBody;
    cResult[10] = tmp28;
    tmp26 = tmp28;
  } else {
    tmp26 = cResult[10];
  }
  if (cResult[11] !== tmp4.divider) {
    const obj6 = { style: tmp4.divider };
    const tmp32 = closure_7(View, obj6);
    cResult[11] = tmp4.divider;
    cResult[12] = tmp32;
    tmp29 = tmp32;
  } else {
    tmp29 = cResult[12];
  }
  const ctaDescription = tmp4.ctaDescription;
  if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = intl5.intl;
    const stringResult2 = intl3.string(intl5.t.okgGTu);
    cResult[13] = stringResult2;
    tmp33 = stringResult2;
  } else {
    tmp33 = cResult[13];
  }
  if (cResult[14] !== tmp4.ctaDescription) {
    const obj7 = { style: ctaDescription, children: tmp33 };
    const tmp37 = closure_7(native.LegacyText, obj7);
    cResult[14] = tmp4.ctaDescription;
    cResult[15] = tmp37;
    tmp35 = tmp37;
  } else {
    tmp35 = cResult[15];
  }
  if (cResult[16] !== tmp6) {
    let stringResult3;
    const intl4 = intl5.intl;
    const string = intl4.string;
    const t = intl5.t;
    if (tmp6) {
      stringResult3 = string(t.wePEBF);
    } else {
      stringResult3 = string(t.NIFmCJ);
    }
    cResult[16] = tmp6;
    cResult[17] = stringResult3;
    tmp38 = stringResult3;
  } else {
    tmp38 = cResult[17];
  }
  if (cResult[18] === tmp6) {
    let tmp40;
    if (cResult[19] === tmp38) {
      tmp40 = cResult[20];
    }
    if (cResult[21] === tmp8) {
      let tmp42;
      if (cResult[22] === tmp4.errorText) {
        tmp42 = cResult[23];
      }
      if (cResult[24] === tmp4.buttonWrapper) {
        if (cResult[25] === tmp40) {
          let tmp45;
          let tmp49;
          if (cResult[26] === tmp42) {
            tmp45 = cResult[27];
          }
          if (cResult[28] !== tmp4.flex) {
            const obj8 = { style: tmp4.flex };
            const tmp52 = closure_7(View, obj8);
            cResult[28] = tmp4.flex;
            cResult[29] = tmp52;
            tmp49 = tmp52;
          } else {
            tmp49 = cResult[29];
          }
          if (cResult[30] === tmp4.container) {
            if (cResult[31] === tmp29) {
              if (cResult[32] === tmp35) {
                if (cResult[33] === tmp45) {
                  if (cResult[34] === tmp49) {
                    if (cResult[35] === tmp10) {
                      if (cResult[36] === tmp14) {
                        if (cResult[37] === tmp21) {
                          let tmp53;
                          if (cResult[38] === tmp26) {
                            tmp53 = cResult[39];
                          }
                          return tmp53;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          const obj9 = { children: closure_8(View, obj10) };
          obj10 = { style: container, children: items };
          items = [tmp10, tmp14, tmp21, tmp26, tmp29, tmp35, tmp45, tmp49];
          const TwoFASetupModalScreen = TwoFASetupModal.TwoFASetupModalScreen;
          const tmp57 = closure_7(TwoFASetupModalScreen, obj9);
          cResult[30] = tmp4.container;
          cResult[31] = tmp29;
          cResult[32] = tmp35;
          cResult[33] = tmp45;
          cResult[34] = tmp49;
          cResult[35] = tmp10;
          cResult[36] = tmp14;
          cResult[37] = tmp21;
          cResult[38] = tmp26;
          cResult[39] = tmp57;
          tmp53 = tmp57;
        }
      }
      const obj11 = { style: tmp4.buttonWrapper, children: items1 };
      items1 = [tmp40, tmp42];
      const tmp48 = closure_8(View, obj11);
      cResult[24] = tmp4.buttonWrapper;
      cResult[25] = tmp40;
      cResult[26] = tmp42;
      cResult[27] = tmp48;
      tmp45 = tmp48;
    }
    let tmp43 = "" !== tmp8;
    if (tmp43) {
      const obj12 = { style: tmp4.errorText, children: tmp8 };
      tmp43 = closure_7(native.LegacyText, obj12);
    }
    cResult[21] = tmp8;
    cResult[22] = tmp4.errorText;
    cResult[23] = tmp43;
    tmp42 = tmp43;
  }
  const tmp41 = closure_7(components_Button_Button.Button, { text: tmp38, onPress: first, disabled: tmp6, loading: tmp6, grow: true });
  cResult[18] = tmp6;
  cResult[19] = tmp38;
  cResult[20] = tmp41;
  tmp40 = tmp41;
}) : (function TwoFASetupSuccess() {
  let intl;
  let intl2;
  let intl3;
  let items;
  let items1;
  let setError;
  let stringResult;
  let tmp3;
  let tmp5;
  let tmp = closure_9();
  [tmp3, require] = _slicedToArray(react.useState(false), 2);
  const tmp2 = _slicedToArray(react.useState(false), 2);
  [tmp5, importDefault] = _slicedToArray(react.useState(""), 2);
  const tmp4 = _slicedToArray(react.useState(""), 2);
  const callback = react.useCallback(() => {
    let setRegistering = function _onRegisterSuccess2() {
      let obj = _asyncToGenerator(async (arg0, value) => {
        let c0;
        let c1;
        let closure_2;
        let obj;
        let closure_0 = arg0;
        const finishRegisterWebAuthnCredential = setRegistering(closure_2_2[9]).finishRegisterWebAuthnCredential;
        const tmp24 = setRegistering(closure_2_2[9]);
        const intl = setRegistering(closure_2_2[10]).intl;
        await finishRegisterWebAuthnCredential(intl.string(setRegistering(closure_2_2[10]).t["8H5RmH"]), c0, c1);
        if (2 === c5) {
          let c4 = 0;
          obj(body.body.message);
        } else if (arg0 === 1) {
          let c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          obj = setError(closure_2_2[11]);
          obj.close();
          c4 = 0;
        }
        await "IconComponent";
        ({ ticket: c0, credential: c1 } = closure_0);
        return "Set";
      });
      return obj(...arguments);
    };
    const tmp = importDefault("");
    setRegistering = NativeCeremoniesDefault;
    const obj2 = {
      setRegistering,
      setError: importDefault,
      onRegisterSuccess(arg0) {
        return obj(...arguments);
      }
    };
    setRegistering.registerPasskey(obj2);
  }, []);
  let obj = { style: tmp.container, children: items };
  let obj2 = { style: tmp.flex };
  const TwoFASetupModalScreen = TwoFASetupModal.TwoFASetupModalScreen;
  items = [closure_7(View, obj2), , , , , , , ];
  const obj3 = { source: AssetRegistry, style: tmp.image };
  const tmp12 = FastImageDefault;
  items[1] = closure_7(tmp12, obj3);
  const obj4 = { style: tmp.success, variant: "text-lg/semibold", color: "mobile-text-heading-primary", children: intl.string(intl5.t.Awk3Gw) };
  const Text = Text_Text.Text;
  intl = intl5.intl;
  items[2] = closure_7(Text, obj4);
  const obj5 = { style: tmp.successBody, children: intl2.string(intl5.t["0d1bXM"]) };
  const LegacyText = native.LegacyText;
  intl2 = intl5.intl;
  items[3] = closure_7(LegacyText, obj5);
  let obj6 = { style: tmp.divider };
  items[4] = closure_7(View, obj6);
  const obj7 = { style: tmp.ctaDescription, children: intl3.string(intl5.t.okgGTu) };
  const LegacyText2 = native.LegacyText;
  intl3 = intl5.intl;
  items[5] = closure_7(LegacyText2, obj7);
  const obj8 = { style: tmp.buttonWrapper, children: items1 };
  const Button = components_Button_Button.Button;
  const intl4 = intl5.intl;
  const string = intl4.string;
  const t = intl5.t;
  if (tmp3) {
    stringResult = string(t.wePEBF);
  } else {
    stringResult = string(t.NIFmCJ);
  }
  items1 = [tmp7(Button, { text: stringResult, onPress: callback, disabled: tmp3, loading: tmp3, grow: true }), ];
  let tmp7Result = "" !== tmp5;
  if (tmp7Result) {
    const obj9 = { style: tmp.errorText, children: tmp5 };
    tmp7Result = tmp7(native.LegacyText, obj9);
  }
  items1[1] = tmp7Result;
  const obj10 = { children: closure_8(View, obj) };
  items[6] = closure_8(View, obj8);
  const obj11 = { style: tmp.flex };
  items[7] = closure_7(View, obj11);
  return closure_7(TwoFASetupModalScreen, obj10);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/user_settings/account/native/mfa_modal_flow/TwoFASetupSuccess.tsx");

export default tmp4;
