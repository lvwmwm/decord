// Module ID: 16299
// Function ID: 16300
// Name: RegisterIdentity
// Dependencies: [5, 32, 19, 17, 16290, 16291, 21, 4790, 5227, 7217, 1488, 16300, 1098, 16287, 16305, 16306, 16289, 5235, 7236, 7245, 16307, 5220, 1119, 7214, 7319, 558, 568, 16309, 16310, 9900, 9901, 2]

// Module 16299 (RegisterIdentity)
import util from "util" /* 1119 */;
import PhoneOrEmailUtils from "PhoneOrEmailUtils" /* 7236 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function RegisterIdentityBase(inputMode) {
  inputMode = inputMode.inputMode;
  const setInputMode = inputMode.setInputMode;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  function handleSubmit() {
    const self = this;
    const apply = closure_10.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  closure_10 = async function _handleSubmit(arg0, value) {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c4 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_1_9({});
            const obj4 = { step: null, actionType: null };
            let ACCOUNT_IDENTITY = constants;
            obj4.step = constants.ACCOUNT_IDENTITY;
            let items = constants2;
            obj4.actionType = constants2.SUBMITTED;
            options(obj4);
            if (inputMode === tmp3(tmp31[18]).PhoneOrEmailSelectorForceMode.EMAIL) {
              const obj5 = { email, phoneToken: "Array" };
              closure_1_10(obj5);
              const tmp26 = React5();
              if (null != tmp26) {
                const obj6 = { email: tmp26 };
                tmp39(obj6);
                const obj7 = { step: null, actionType: null, details: null };
                ACCOUNT_IDENTITY = ACCOUNT_IDENTITY.ACCOUNT_IDENTITY;
                obj7.step = ACCOUNT_IDENTITY;
                obj7.actionType = items.INPUT_ERROR;
                items = ["email"];
                obj7.details = items;
                tmp41(obj7);
              } else {
                const result = tmp44(tmp45[16]).handleNextOrSubmitRegistration(tmp44(tmp45[12]).AuthStates.REGISTER_IDENTITY, dependencyMap, tmp41);
                const tmp44Result = tmp44(tmp45[16]);
              }
              c4 = 3;
            } else {
              c3 = 1;
              closure_2_8(true);
              c1 = 2;
              c4 = 1;
              const obj8 = {
                value: timestampProducer(() => {
                            closure_1_1(closure_0(closure_2[18]).PhoneOrEmailSelectorForceMode.EMAIL);
                          }),
                done: false
              };
              return obj8;
            }
            tmp39 = closure_1_9;
          }
        } else if (1 === tmp7) {
          c3 = 0;
          closure_128_8(false);
          throw tmp31;
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          closure_128_8(false);
          c4 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          c3 = 0;
          closure_128_8(false);
          c4 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp31) {
        if (tmp4 === c3) {
          c4 = tmp2;
          throw tmp31;
        } else {
          c1 = tmp;
        }
      }
    }
  };
  ({ headerText, controlComponent, subheader } = inputMode);
  const tmp2 = closure_16(45 * Math.min(2, inputMode(5227).useFontScale()));
  let obj = inputMode(5227);
  const tmp4 = setInputMode(7217)();
  dependencyMap = inputMode(1488).useNavigation();
  const tmp5 = closure_11((errors) => errors.errors);
  let message = tmp5;
  let obj2 = inputMode(1488);
  const identityRegistrationStep = inputMode(16300).useIdentityRegistrationStep(inputMode(1098).AuthStates.REGISTER_IDENTITY, inputMode);
  const loginEmail = identityRegistrationStep.loginEmail;
  const identityErrorMessage = identityRegistrationStep.identityErrorMessage;
  ({ registerAndVerifyPhone: c6, validateEmail: c7 } = identityRegistrationStep);
  ({ setLoginEmail, loginPhone, updateLoginPhone, preventSubmitIdentity, identityError } = identityRegistrationStep);
  let obj3 = inputMode(16300);
  [tmp8, c8] = loginEmail(identityErrorMessage.useState(false), 2);
  closure_9 = identityErrorMessage.useContext(inputMode(16287).TrackRegistrationContext);
  let items = [tmp5.message, identityErrorMessage];
  const memo = identityErrorMessage.useMemo(() => {
    message = identityErrorMessage;
    if (null == identityErrorMessage) {
      message = message.message;
    }
    return message;
  }, items);
  const tmp7 = loginEmail(identityErrorMessage.useState(false), 2);
  setInputMode(16305)(inputMode(1098).AuthStates.REGISTER_IDENTITY);
  const tmp10 = setInputMode(16305);
  const tmp12 = setInputMode(16306);
  tmp12(inputMode(16289).getPreviousRegistrationTransitionStep(inputMode(1098).AuthStates.REGISTER_IDENTITY));
  setInputMode(5235)(() => {
    closure_9({ step: constants.ACCOUNT_IDENTITY, actionType: constants2.VIEWED });
  });
  let obj5 = { headerText, subHeader: subheader, children: null };
  let obj6 = { style: tmp2.container, contentContainerStyle: tmp2.scrollContent, keyboardShouldPersistTaps: "handled", children: null };
  const items1 = [controlComponent, , , ];
  let obj4 = inputMode(16289);
  items1[1] = closure_14(inputMode(16307).RegisterPhoneOrEmailInput, { loginPhone, loginEmail, setLoginPhone: updateLoginPhone, setLoginEmail, inputMode, onSubmit: handleSubmit, inputError: identityError, autoFocus: true });
  let obj7 = { style: tmp2.button, children: null };
  let obj8 = { loading: tmp8, size: "lg", text: null, onPress: null, disabled: null };
  const intl = inputMode(1119).intl;
  obj8.text = intl.string(inputMode(1119).t.PDTjLN);
  obj8.onPress = handleSubmit;
  obj8.disabled = preventSubmitIdentity;
  obj7.children = closure_14(inputMode(5220).Button, obj8);
  items1[2] = closure_14(c6, obj7);
  let tmp15Result = null;
  if (null != memo) {
    tmp15Result = null;
    if ("" !== memo) {
      const obj9 = { style: tmp2.errors, children: memo };
      tmp15Result = tmp15(tmp3(7214), obj9);
    }
  }
  items1[3] = tmp15Result;
  obj6.children = items1;
  obj5.children = closure_15(c7, obj6);
  const tmp15Result3 = closure_14(setInputMode(7245), obj5);
  let tmp15Result4 = tmp15Result3;
  if (!tmp4) {
    const obj10 = { style: tmp2.page, children: tmp15Result3 };
    tmp15Result4 = tmp15(tmp3(7319), obj10);
  }
  return tmp15Result4;
}
get_ActivityIndicator = fn(17);
({ View: metroRequire, ScrollView: closure_7 } = get_ActivityIndicator);
const RegistrationUIStore = fn(16290);
({ clearRegistrationErrorMessage: closure_8, setRegistrationErrors: closure_9, updateRegistrationOptions: c10, useRegistrationUIStore: closure_11 } = RegistrationUIStore);
const RegistrationConstants = fn(16291);
({ RegisterTransitionSteps: closure_12, RegistrationTransitionActionTypes: map1 } = RegistrationConstants);
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
const createStyles = fn(4790);
let closure_16 = createStyles.createStyles((minHeight) => {
  const obj = { container: { marginTop: 24, flex: 1 }, page: { flex: 1 }, button: { width: "100%", marginTop: 24 }, errors: { marginTop: 4 }, segmentedControl: { minHeight, marginBottom: 24 }, scrollContent: { paddingBottom: 128 } };
  return obj;
});
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/auth/native/components/RegisterIdentity.tsx");

export const RegisterIdentity = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = arr(segmentedControlState[26]).c(16);
  let obj = arr(segmentedControlState[26]);
  const tmp4 = closure_16(45 * Math.min(2, arr(segmentedControlState[8]).useFontScale()));
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const deviceCountry = tmp(tmp2[27]).getDeviceCountry();
    let hasItem = null != deviceCountry;
    if (hasItem) {
      const EMAIL_FIRST_COUNTRIES = tmp(tmp2[28]).EMAIL_FIRST_COUNTRIES;
      hasItem = EMAIL_FIRST_COUNTRIES.has(deviceCountry);
    }
    cResult[0] = hasItem;
    let first = hasItem;
    const tmpResult = tmp(tmp2[27]);
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    let obj3 = { descriptor: null, mode: null };
    let t = tmp(tmp2[22]).t;
    if (first) {
      obj3.descriptor = t["w/qqKK"];
      obj3.mode = tmp(tmp2[18]).PhoneOrEmailSelectorForceMode.EMAIL;
      t = [obj3, ];
      obj3 = { descriptor: tmp(tmp2[22]).t.dEYpSt, mode: tmp(tmp2[18]).PhoneOrEmailSelectorForceMode.PHONE };
      t[1] = obj3;
      let items = t;
    } else {
      obj3.descriptor = t.dEYpSt;
      obj3.mode = tmp(tmp2[18]).PhoneOrEmailSelectorForceMode.PHONE;
      items = [obj3, ];
      const obj4 = { descriptor: tmp(tmp2[22]).t["w/qqKK"], mode: tmp(tmp2[18]).PhoneOrEmailSelectorForceMode.EMAIL };
      items[1] = obj4;
    }
    cResult[1] = items;
  } else {
    arr = cResult[1];
    [tmp13, importDefault] = noop.useState(arr[0].mode);
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      class I {
        constructor(arg0) {
          tmp = closure_8();
          tmp2 = closure_1(closure_0[arg0].mode);
          return;
        }
      }
      cResult[2] = I;
      const tmp14 = I;
    } else {
      class I {
        constructor(arg0) {
          tmp = closure_8();
          tmp2 = closure_1(closure_0[arg0].mode);
          return;
        }
      }
    }
    const _Symbol2 = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      class I {
        constructor(arg0) {
          tmp = closure_8();
          tmp2 = closure_1(closure_0[arg0].mode);
          return;
        }
      }
      tmp16[2] = tmp14;
      tmp16[3] = arr.map((descriptor) => {
        descriptor = descriptor.descriptor;
        const obj = { id: null, label: null, page: null };
        const intl = arr(segmentedControlState[22]).intl;
        obj.id = intl.string(descriptor);
        const intl2 = arr(segmentedControlState[22]).intl;
        obj.label = intl2.string(descriptor);
        return obj;
      });
      cResult[3] = tmp16;
      const tmp15 = tmp16;
    } else {
      class I {
        constructor(arg0) {
          tmp = closure_8();
          tmp2 = closure_1(closure_0[arg0].mode);
          return;
        }
      }
    }
    const tmp12 = _slicedToArray(noop.useState(arr[0].mode), 2);
    segmentedControlState = tmp(tmp2[29]).useSegmentedControlState(tmp15);
    if (cResult[4] !== segmentedControlState) {
      class I {
        constructor(arg0) {
          tmp = closure_8();
          tmp2 = closure_1(closure_0[arg0].mode);
          return;
        }
      }
      cResult[4] = segmentedControlState;
      cResult[5] = tmp19;
    } else {
      class I {
        constructor(arg0) {
          tmp = closure_8();
          tmp2 = closure_1(closure_0[arg0].mode);
          return;
        }
      }
    }
    if (cResult[6] !== segmentedControlState) {
      class I {
        constructor(arg0) {
          tmp = closure_8();
          tmp2 = closure_1(closure_0[arg0].mode);
          return;
        }
      }
      const obj5 = { state: segmentedControlState, keyboardShouldPersistTaps: "handled" };
      const tmp21 = closure_14(tmp(tmp2[30]).SegmentedControl, obj5);
      cResult[6] = segmentedControlState;
      cResult[7] = tmp21;
    } else {
      class I {
        constructor(arg0) {
          tmp = closure_8();
          tmp2 = closure_1(closure_0[arg0].mode);
          return;
        }
      }
    }
    if (cResult[8] === tmp4.segmentedControl) {
      class I {
        constructor(arg0) {
          tmp = closure_8();
          tmp2 = closure_1(closure_0[arg0].mode);
          return;
        }
      }
      const _Symbol3 = Symbol;
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        class I {
          constructor(arg0) {
            tmp = closure_8();
            tmp2 = closure_1(closure_0[arg0].mode);
            return;
          }
        }
        const stringResult = obj9.string(tmp(tmp2[22]).t.WEdDgv);
        cResult[11] = stringResult;
        const tmp26 = stringResult;
      } else {
        class I {
          constructor(arg0) {
            tmp = closure_8();
            tmp2 = closure_1(closure_0[arg0].mode);
            return;
          }
        }
      }
      if (cResult[12] === tmp18) {
        class I {
          constructor(arg0) {
            tmp = closure_8();
            tmp2 = closure_1(closure_0[arg0].mode);
            return;
          }
        }
      }
      const obj6 = { inputMode: tmp13, setInputMode: tmp18, controlComponent: tmp22, headerText: tmp26 };
      const tmp31 = closure_14(RegisterIdentityBase, obj6);
      cResult[12] = tmp18;
      cResult[13] = tmp13;
      cResult[14] = tmp22;
      cResult[15] = tmp31;
    }
    const obj7 = { style: tmp4.segmentedControl, children: tmp20 };
    const tmp25 = closure_14(closure_6, obj7);
    cResult[8] = tmp4.segmentedControl;
    cResult[9] = tmp20;
    cResult[10] = tmp25;
    const tmpResult2 = tmp(tmp2[29]);
  }
}) : (() => {
  let obj = hasItem(5227);
  const tmp3 = closure_16(45 * Math.min(2, hasItem(5227).useFontScale()));
  const deviceCountry = hasItem(16309).getDeviceCountry();
  hasItem = null != deviceCountry;
  if (hasItem) {
    const EMAIL_FIRST_COUNTRIES = tmp(16310).EMAIL_FIRST_COUNTRIES;
    hasItem = EMAIL_FIRST_COUNTRIES.has(deviceCountry);
  }
  let items = [hasItem];
  const memo = noop.useMemo(() => {
    const obj = { descriptor: null, mode: null };
    const t = util.t;
    if (hasItem) {
      obj.descriptor = t["w/qqKK"];
      obj.mode = PhoneOrEmailUtils.PhoneOrEmailSelectorForceMode.EMAIL;
      const items = [obj, ];
      const obj2 = { descriptor: util.t.dEYpSt, mode: PhoneOrEmailUtils.PhoneOrEmailSelectorForceMode.PHONE };
      items[1] = obj2;
      let items1 = items;
    } else {
      obj.descriptor = t.dEYpSt;
      obj.mode = PhoneOrEmailUtils.PhoneOrEmailSelectorForceMode.PHONE;
      items1 = [obj, ];
      const obj3 = { descriptor: util.t["w/qqKK"], mode: PhoneOrEmailUtils.PhoneOrEmailSelectorForceMode.EMAIL };
      items1[1] = obj3;
    }
    return items1;
  }, items);
  const tmp6 = _slicedToArray(noop.useState(memo[0].mode), 2);
  dependencyMap = tmp7;
  let items1 = [tmp6[1], memo];
  const callback = noop.useCallback((arg0) => {
    closure_2_8();
    dependencyMap(memo[arg0].mode);
  }, items1);
  let obj2 = hasItem(16309);
  const tmpResult = hasItem(9900);
  const segmentedControlState = tmpResult.useSegmentedControlState({
    pageWidth: 0,
    defaultIndex: 0,
    onSetActiveIndex: callback,
    items: memo.map((descriptor) => {
      descriptor = descriptor.descriptor;
      const obj = { id: null, label: null, page: null };
      const intl = hasItem(1119).intl;
      obj.id = intl.string(descriptor);
      const intl2 = hasItem(1119).intl;
      obj.label = intl2.string(descriptor);
      return obj;
    })
  });
  const items2 = [segmentedControlState, memo];
  const obj4 = {
    inputMode: tmp6[0],
    setInputMode: noop.useCallback((arg0) => {
      closure_0 = arg0;
      const findIndexResult = memo.findIndex((mode) => mode.mode === closure_0);
      if (-1 !== findIndexResult) {
        segmentedControlState.setActiveIndex(findIndexResult, false);
      }
    }, items2),
    controlComponent: null,
    headerText: null
  };
  let obj3 = {
    pageWidth: 0,
    defaultIndex: 0,
    onSetActiveIndex: callback,
    items: memo.map((descriptor) => {
      descriptor = descriptor.descriptor;
      const obj = { id: null, label: null, page: null };
      const intl = hasItem(1119).intl;
      obj.id = intl.string(descriptor);
      const intl2 = hasItem(1119).intl;
      obj.label = intl2.string(descriptor);
      return obj;
    })
  };
  obj4.controlComponent = closure_14(closure_6, { style: tmp3.segmentedControl, children: closure_14(hasItem(9901).SegmentedControl, { state: segmentedControlState, keyboardShouldPersistTaps: "handled" }) });
  let intl = tmp(1119).intl;
  obj4.headerText = intl.string(hasItem(1119).t.WEdDgv);
  return closure_14(RegisterIdentityBase, obj4);
});
