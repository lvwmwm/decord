// Module ID: 15960
// Function ID: 15961
// Name: PasswordScreen
// Dependencies: [5, 32, 19, 17, 21, 558, 568, 7217, 15953, 1119, 6878, 15951, 15952, 2]

// Module 15960 (PasswordScreen)
import c from "c" /* 568 */;
import useWideAuthViewDefault from "useWideAuthView" /* 7217 */;
import MfaScreenUtilsDefault from "MfaScreenUtils" /* 15953 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/mfa/native/screens/PasswordScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(24);
  ({ mfaChallenge, finish } = arg0);
  closure_0 = finish;
  const tmp5 = useWideAuthViewDefault();
  const screenStyles = MfaScreenUtilsDefault.useScreenStyles(tmp5);
  [tmp8, importDefault] = noop.useState(null);
  const tmp9 = _slicedToArray(noop.useState(""), 2);
  const first = tmp9[0];
  const tmp7 = _slicedToArray(noop.useState(null), 2);
  [tmp11, asyncGeneratorStep] = noop.useState(false);
  const tmp10 = _slicedToArray(noop.useState(false), 2);
  [tmp13, _slicedToArray] = noop.useState(false);
  if (cResult[0] === finish) {
    if (cResult[1] === first) {
      let tmp14 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1119).intl;
      const stringResult = intl.string(tmp(1119).t.Rw1XuM);
      cResult[3] = stringResult;
      let tmp16 = stringResult;
    } else {
      tmp16 = cResult[3];
    }
    const _Symbol2 = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = tmp(1119).intl;
      const stringResult1 = intl2.string(tmp(1119).t["CIGa+7"]);
      cResult[4] = stringResult1;
      let tmp18 = stringResult1;
    } else {
      tmp18 = cResult[4];
    }
    let tmp20 = tmp11;
    if (!tmp11) {
      tmp20 = tmp13;
    }
    if (cResult[5] === tmp8) {
      if (cResult[6] === tmp14) {
        if (cResult[7] === tmp20) {
          let tmp21 = cResult[8];
        }
        if (cResult[9] === screenStyles.inputContainer) {
          if (cResult[10] === tmp21) {
            let tmp24 = cResult[11];
          }
          const _Symbol3 = Symbol;
          if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
            const intl3 = tmp(1119).intl;
            const stringResult2 = intl3.string(tmp(1119).t.geKm7t);
            cResult[12] = stringResult2;
            let tmp28 = stringResult2;
          } else {
            tmp28 = cResult[12];
          }
          let tmp30 = tmp11;
          if (!tmp11) {
            tmp30 = tmp13;
          }
          if (!tmp30) {
            tmp30 = 0 === first.length;
          }
          if (cResult[13] === tmp14) {
            if (cResult[14] === tmp11) {
              if (cResult[15] === tmp30) {
                let tmp31 = cResult[16];
              }
              if (cResult[17] === finish) {
                if (cResult[18] === mfaChallenge) {
                  let tmp34 = cResult[19];
                }
                if (cResult[20] === tmp31) {
                  if (cResult[21] === tmp34) {
                    if (cResult[22] === tmp24) {
                      let tmp35 = cResult[23];
                    }
                    return tmp35;
                  }
                }
                const obj3 = { headerText: tmp16, input: tmp24, submit: tmp31, screenProps: tmp34, mfaMethod: "password" };
                const tmp37 = jsx(tmp4(15952), { headerText: tmp16, input: tmp24, submit: tmp31, screenProps: tmp34, mfaMethod: "password" });
                cResult[20] = tmp31;
                cResult[21] = tmp34;
                cResult[22] = tmp24;
                cResult[23] = tmp37;
                tmp35 = tmp37;
              }
              const obj4 = { mfaChallenge, finish };
              cResult[17] = finish;
              cResult[18] = mfaChallenge;
              cResult[19] = obj4;
              tmp34 = obj4;
            }
          }
          const obj5 = { text: tmp28, disabled: tmp30, loading: tmp11, onPress: tmp14 };
          const tmp33 = jsx(tmp4(15951), { text: tmp28, disabled: tmp30, loading: tmp11, onPress: tmp14 });
          cResult[13] = tmp14;
          cResult[14] = tmp11;
          cResult[15] = tmp30;
          cResult[16] = tmp33;
          tmp31 = tmp33;
        }
        const obj6 = { style: screenStyles.inputContainer, children: tmp21 };
        const tmp27 = <View style={screenStyles.inputContainer}>{tmp21}</View>;
        cResult[9] = screenStyles.inputContainer;
        cResult[10] = tmp21;
        cResult[11] = tmp27;
        tmp24 = tmp27;
      }
    }
    const obj7 = { autoFocus: true, required: true, textContentType: "password", label: tmp18, autoComplete: "current-password", errorMessage: tmp8, returnKeyType: "done", onChange: tmp9[1], onSubmitEditing: tmp14, disabled: tmp20, clearable: true, secureTextEntry: true };
    const tmp23 = jsx(tmp(6878).TextInput, { autoFocus: true, required: true, textContentType: "password", label: tmp18, autoComplete: "current-password", errorMessage: tmp8, returnKeyType: "done", onChange: tmp9[1], onSubmitEditing: tmp14, disabled: tmp20, clearable: true, secureTextEntry: true });
    cResult[5] = tmp8;
    cResult[6] = tmp14;
    cResult[7] = tmp20;
    cResult[8] = tmp23;
    tmp21 = tmp23;
  }
  closure_0 = asyncGeneratorStep(async () => {
    const data = tmp3;
    closure_1(null);
    tmp31(true);
    let v0 = 1;
    await message({ mfaType: "password", data });
    if (1 === tmp7) {
      v0 = 0;
      closure_129_0 = tmp31;
      const body = closure_129_0.body;
      message = undefined;
      if (body != null) {
        message = body.message;
      }
      if (message == null) {
        message = closure_129_0.message;
      }
      closure_1(message);
      tmp31(false);
      c6 = 3;
    } else if (arg0 === 1) {
      c6 = 3;
      throw arg1;
    } else if (arg0 !== 2) {
      v0(true);
      v0 = 0;
    }
    v0 = 0;
    return arg1;
  });
  function sendPassword() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  cResult[0] = finish;
  cResult[1] = first;
  cResult[2] = sendPassword;
  tmp14 = sendPassword;
}) : ((finish) => {
  finish = finish.finish;
  importDefault = undefined;
  let first;
  c3 = undefined;
  _slicedToArray = undefined;
  function sendPassword() {
    const self = this;
    const apply = closure_5.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  noop = async function _sendPassword2() {
    closure_2 = tmp3;
    importDefault(null);
    asyncGeneratorStep(true);
    await finish({ mfaType: "password", data });
    if (1 === tmp7) {
      c4 = 0;
      closure_129_0 = closure_3;
      const body = closure_129_0.body;
      let message;
      if (body != null) {
        message = body.message;
      }
      if (message == null) {
        message = closure_129_0.message;
      }
      closure_130_1(message);
      closure_130_3(false);
      c6 = 3;
    } else if (arg0 === 1) {
      c6 = 3;
      throw arg1;
    } else if (arg0 !== 2) {
      closure_130_4(true);
      c4 = 0;
    }
    return arg1;
  };
  const tmp = importDefault;
  const tmp3 = require("useWideAuthView")();
  const screenStyles = require("MfaScreenUtils").useScreenStyles(tmp3);
  [obj4.errorMessage, importDefault] = noop.useState(null);
  const tmp6 = _slicedToArray(noop.useState(""), 2);
  first = tmp6[0];
  const obj = require("MfaScreenUtils");
  [tmp8, c3] = _slicedToArray(noop.useState(false), 2);
  const tmp7 = _slicedToArray(noop.useState(false), 2);
  [tmp10, c4] = _slicedToArray(noop.useState(false), 2);
  const obj2 = { headerText: null, input: null, submit: null, screenProps: null, mfaMethod: "password" };
  const tmp9 = _slicedToArray(noop.useState(false), 2);
  const intl = finish(first[9]).intl;
  obj2.headerText = intl.string(finish(first[9]).t.Rw1XuM);
  const obj3 = { style: screenStyles.inputContainer, children: null };
  const obj4 = { autoFocus: true, required: true, textContentType: "password", label: null, autoComplete: "current-password", errorMessage: null, returnKeyType: "done", onChange: null, onSubmitEditing: null, disabled: null, clearable: true, secureTextEntry: true };
  const intl2 = finish(first[9]).intl;
  obj4.label = intl2.string(finish(first[9]).t["CIGa+7"]);
  obj4.onChange = tmp6[1];
  obj4.onSubmitEditing = sendPassword;
  let tmp15 = tmp8;
  if (!tmp8) {
    tmp15 = tmp10;
  }
  obj4.disabled = tmp15;
  obj3.children = jsx(finish(first[10]).TextInput, { autoFocus: true, required: true, textContentType: "password", label: null, autoComplete: "current-password", errorMessage: null, returnKeyType: "done", onChange: null, onSubmitEditing: null, disabled: null, clearable: true, secureTextEntry: true });
  obj2.input = <View style={screenStyles.inputContainer}>{null}</View>;
  const obj5 = { text: null, disabled: null, loading: null, onPress: null };
  const tmp12 = require("MfaOptionScreen");
  const intl3 = tmp13(tmp2[9]).intl;
  obj5.text = intl3.string(finish(first[9]).t.geKm7t);
  let tmp17 = tmp8;
  if (!tmp8) {
    tmp17 = tmp10;
  }
  if (!tmp17) {
    tmp17 = 0 === first.length;
  }
  obj5.disabled = tmp17;
  obj5.loading = tmp8;
  obj5.onPress = sendPassword;
  obj2.submit = jsx(tmp(first[11]), { text: null, disabled: null, loading: null, onPress: null });
  obj2.screenProps = { mfaChallenge: finish.mfaChallenge, finish };
  return <tmp12 headerText={null} input={null} submit={null} screenProps={null} mfaMethod="password" />;
});
