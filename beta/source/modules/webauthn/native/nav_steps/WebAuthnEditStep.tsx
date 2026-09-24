// Module ID: 14975
// Function ID: 14976
// Name: WebAuthnEditStep
// Dependencies: [32, 19, 21, 4790, 580, 558, 568, 1488, 5871, 6868, 4490, 1119, 10986, 4749, 8908, 1181, 5220, 2]

// Module 14975 (WebAuthnEditStep)
import nativeDefault from "native" /* 580 */;
import NavigatorHeader from "NavigatorHeader" /* 5871 */;
import WebAuthnActionCreators from "WebAuthnActionCreators" /* 6868 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4790);
let obj2 = { inputField: { marginBottom: nativeDefault.space.PX_16 }, form: null };
let obj3 = { marginBottom: nativeDefault.space.PX_16 };
obj2.form = { paddingHorizontal: nativeDefault.space.PX_16 };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { paddingHorizontal: nativeDefault.space.PX_16 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/webauthn/native/nav_steps/WebAuthnEditStep.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((credential) => {
  const cResult = credential(568).c(24);
  credential = credential.credential;
  const tmp4 = closure_7();
  let obj = credential(568);
  const navigation = credential(1488).useNavigation();
  let obj2 = credential(1488);
  const obj3 = noop;
  [tmp7, dependencyMap] = value(noop.useState(false), 2);
  const tmp8 = value(noop.useState(""), 2);
  value = tmp8[0];
  const tmp6 = value(noop.useState(false), 2);
  [tmp11, noop] = value(noop.useState(null), 2);
  if (cResult[0] !== navigation) {
    const fn = function c() {
      const obj = {
        headerLeft: NavigatorHeader.getHeaderBackButton(() => {
          navigation.pop();
        })
      };
      navigation.setOptions(obj);
    };
    const items = [navigation];
    cResult[0] = navigation;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp13 = items;
    let tmp12 = fn;
  } else {
    tmp12 = cResult[1];
    tmp13 = cResult[2];
  }
  const layoutEffect = obj3.useLayoutEffect(tmp12, tmp13);
  if (cResult[3] === credential.id) {
    if (cResult[4] === navigation) {
      if (cResult[5] === value) {
        let tmp15 = cResult[6];
      }
      const _Symbol = Symbol;
      ({ form, inputField } = tmp4);
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        let intl = tmp(1119).intl;
        const stringResult = intl.string(tmp(1119).t["Jzd+z/"]);
        cResult[7] = stringResult;
        let tmp17 = stringResult;
      } else {
        tmp17 = cResult[7];
      }
      if (cResult[8] === credential.name) {
        if (cResult[9] === tmp11) {
          if (cResult[10] === tmp7) {
            if (cResult[11] === value) {
              if (cResult[12] === tmp4.inputField) {
                let tmp19 = cResult[13];
              }
              const _Symbol2 = Symbol;
              if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
                const tmp24 = closure_5(tmp(8908).FormDivider, {});
                cResult[14] = tmp24;
                let tmp22 = tmp24;
              } else {
                tmp22 = cResult[14];
              }
              let tmp25 = tmp7;
              if (!tmp7) {
                tmp25 = "" === value;
              }
              const _Symbol3 = Symbol;
              if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
                const intl2 = tmp(1119).intl;
                const stringResult1 = intl2.string(tmp(1119).t["7asiR3"]);
                cResult[15] = stringResult1;
                let tmp26 = stringResult1;
              } else {
                tmp26 = cResult[15];
              }
              if (cResult[16] === tmp7) {
                if (cResult[17] === tmp15) {
                  if (cResult[18] === tmp25) {
                    let tmp28 = cResult[19];
                  }
                  if (cResult[20] === tmp4.form) {
                    if (cResult[21] === tmp28) {
                      if (cResult[22] === tmp19) {
                        let tmp31 = cResult[23];
                      }
                      return tmp31;
                    }
                  }
                  const obj4 = { style: form, children: null };
                  const items1 = [tmp19, tmp22, tmp28];
                  obj4.children = items1;
                  const tmp33 = closure_6(tmp(8908).Form, obj4);
                  cResult[20] = tmp4.form;
                  cResult[21] = tmp28;
                  cResult[22] = tmp19;
                  cResult[23] = tmp33;
                  tmp31 = tmp33;
                }
              }
              const obj5 = { onPress: tmp15, disabled: tmp25, loading: tmp7, size: "lg", text: tmp26, grow: true };
              const tmp30 = closure_5(tmp(5220).Button, obj5);
              cResult[16] = tmp7;
              cResult[17] = tmp15;
              cResult[18] = tmp25;
              cResult[19] = tmp30;
              tmp28 = tmp30;
            }
          }
        }
      }
      const obj6 = { showTopContainer: false, value, onChange: tmp8[1], style: inputField, error: tmp11, title: tmp17, placeholder: credential.name, disabled: tmp7, clearButtonVisibility: tmp(1181).ClearButtonVisibility.WITH_CONTENT, autoFocus: true, showBorder: true, required: true, large: true };
      const tmp21 = closure_5(tmp(8908).FormInput, obj6);
      cResult[8] = credential.name;
      cResult[9] = tmp11;
      cResult[10] = tmp7;
      cResult[11] = value;
      cResult[12] = tmp4.inputField;
      cResult[13] = tmp21;
      tmp19 = tmp21;
    }
  }
  const fn2 = function h() {
    dependencyMap(true);
    noop(null);
    const result = WebAuthnActionCreators.editWebAuthnCredential(credential.id, first);
    const nextPromise = result.then(() => {
      const obj2 = { key: "WEBAUTHN_CREDENTIAL_EDIT_SUCCESS_TOAST_KEY", content: null, icon: null, IconComponent: null, iconColor: "status-positive" };
      const intl = credential(1119).intl;
      obj2.content = intl.string(credential(1119).t.IV13mH);
      obj2.icon = navigation(10986);
      obj2.IconComponent = credential(4749).CircleCheckIcon;
      navigation(4490).open(obj2);
      closure_1_1.popToTop();
    });
    result.then(() => {
      const obj2 = { key: "WEBAUTHN_CREDENTIAL_EDIT_SUCCESS_TOAST_KEY", content: null, icon: null, IconComponent: null, iconColor: "status-positive" };
      const intl = credential(1119).intl;
      obj2.content = intl.string(credential(1119).t.IV13mH);
      obj2.icon = navigation(10986);
      obj2.IconComponent = credential(4749).CircleCheckIcon;
      navigation(4490).open(obj2);
      closure_1_1.popToTop();
    }).catch((error) => {
      closure_1_4(error.body.message);
    }).finally(() => {
      dependencyMap(false);
    });
  };
  cResult[3] = credential.id;
  cResult[4] = navigation;
  cResult[5] = value;
  cResult[6] = fn2;
  tmp15 = fn2;
}) : ((credential) => {
  credential = credential.credential;
  dependencyMap = undefined;
  value = undefined;
  noop = undefined;
  const tmp = closure_7();
  const navigation = credential(1488).useNavigation();
  let obj = credential(1488);
  [tmp6, c2] = value(noop.useState(false), 2);
  const tmp7 = value(noop.useState(""), 2);
  value = tmp7[0];
  const tmp9 = value(noop.useState(null), 2);
  noop = tmp9[1];
  const items = [navigation];
  const layoutEffect = noop.useLayoutEffect(() => {
    const obj = {
      headerLeft: NavigatorHeader.getHeaderBackButton(() => {
        navigation.pop();
      })
    };
    navigation.setOptions(obj);
  }, items);
  let obj2 = { style: tmp.form, children: null };
  const obj3 = { showTopContainer: false, value, onChange: tmp7[1], style: tmp.inputField, error: tmp9[0], title: null, placeholder: null, disabled: null, clearButtonVisibility: null, autoFocus: true, showBorder: true, required: true, large: true };
  let intl = credential(1119).intl;
  obj3.title = intl.string(credential(1119).t["Jzd+z/"]);
  obj3.placeholder = credential.name;
  obj3.disabled = tmp6;
  obj3.clearButtonVisibility = credential(1181).ClearButtonVisibility.WITH_CONTENT;
  const items1 = [closure_5(credential(8908).FormInput, obj3), closure_5(credential(8908).FormDivider, {}), ];
  const obj4 = {
    onPress() {
      _undefined(true);
      closure_4(null);
      const result = WebAuthnActionCreators.editWebAuthnCredential(credential.id, first);
      const nextPromise = result.then(() => {
        const obj2 = { key: "WEBAUTHN_CREDENTIAL_EDIT_SUCCESS_TOAST_KEY", content: null, icon: null, IconComponent: null, iconColor: "status-positive" };
        const intl = credential(1119).intl;
        obj2.content = intl.string(credential(1119).t.IV13mH);
        obj2.icon = navigation(10986);
        obj2.IconComponent = credential(4749).CircleCheckIcon;
        navigation(4490).open(obj2);
        closure_1_1.popToTop();
      });
      result.then(() => {
        const obj2 = { key: "WEBAUTHN_CREDENTIAL_EDIT_SUCCESS_TOAST_KEY", content: null, icon: null, IconComponent: null, iconColor: "status-positive" };
        const intl = credential(1119).intl;
        obj2.content = intl.string(credential(1119).t.IV13mH);
        obj2.icon = navigation(10986);
        obj2.IconComponent = credential(4749).CircleCheckIcon;
        navigation(4490).open(obj2);
        closure_1_1.popToTop();
      }).catch((error) => {
        closure_1_4(error.body.message);
      }).finally(() => {
        dependencyMap(false);
      });
    },
    disabled: null,
    loading: null,
    size: "lg",
    text: null,
    grow: true
  };
  let tmp13 = tmp6;
  if (!tmp6) {
    tmp13 = "" === value;
  }
  obj4.disabled = tmp13;
  obj4.loading = tmp6;
  const intl2 = tmp2(1119).intl;
  obj4.text = intl2.string(credential(1119).t["7asiR3"]);
  items1[2] = closure_5(credential(5220).Button, obj4);
  obj2.children = items1;
  return closure_6(credential(8908).Form, obj2);
});
