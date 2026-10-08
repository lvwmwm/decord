// Module ID: 6273
// Function ID: 6274
// Name: ResendEmail
// Dependencies: [32, 19, 17, 2057, 1389, 1085, 21, 5090, 558, 576, 1502, 38, 504, 6274, 6200, 5936, 4766, 1126, 6275, 5086, 5375, 2]

// Module 6273 (ResendEmail)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1085 */;
import intl5 from "intl" /* 1126 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4766 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 5936 */;
import EmailVerificationModalActionCreatorsDefault from "EmailVerificationModalActionCreators" /* 6200 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import UserRequiredActionStore from "UserRequiredActionStore" /* 2057 */;
import UserStore from "UserStore" /* 1389 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5090 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closeResult, currentUser, flag, navigation, ref, tmp2;

let c10;
let c9;
const View = react_native.View;
const VerificationModalScenes = Constants.VerificationModalScenes;
({ jsx: c9, jsxs: c10 } = Fragment);
let closure_11 = createStyles.createStyles({ container: { flex: 1, padding: 16, justifyContent: "center", alignItems: "center" }, title: { marginTop: 16, textAlign: "center" }, body: { marginTop: 8, lineHeight: 18, textAlign: "center" }, resend: { marginTop: 16, width: "100%" }, change: { marginTop: 8, width: "100%" } });
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function ResendEmail() {
  let Button;
  let action;
  let email;
  let intl2;
  let obj9;
  let tmp10;
  let tmp11;
  let tmp15;
  let tmp20;
  let tmp21;
  let tmp22;
  let tmp24;
  let tmp36Result;
  let tmp6;
  let tmp7;
  let verified;
  let tmp = navigation;
  let obj = navigation(576);
  const cResult = obj.c(37);
  const tmp4 = closure_11();
  let obj2 = navigation(1502);
  navigation = obj2.useNavigation();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    class E {
      constructor() {
        currentUser = closure_1_7.getCurrentUser();
        tmp2 = verified(closure_2[11])(null != currentUser, "ResendEmail: user cannot be undefined");
        return currentUser;
      }
    }
    cResult[0] = items;
    cResult[1] = E;
    tmp6 = items;
    tmp7 = E;
  } else {
    [tmp6, tmp7] = cResult;
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp6, tmp7);
  ({ email, verified } = stateFromStores);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserRequiredActionStore];
    class E {
      constructor() {
        currentUser = closure_1_7.getCurrentUser();
        tmp2 = verified(closure_2[11])(null != currentUser, "ResendEmail: user cannot be undefined");
        return currentUser;
      }
    }
    cResult[2] = items1;
    cResult[3] = tmp13;
    tmp11 = tmp13;
    tmp10 = items1;
  } else {
    tmp10 = cResult[2];
    tmp11 = cResult[3];
  }
  const tmpResult2 = tmp(504);
  const stateFromStores1 = tmpResult2.useStateFromStores(tmp10, tmp11);
  if (cResult[4] !== stateFromStores1) {
    const obj5 = verified(6274);
    const result = obj5.isEmailReverification(stateFromStores1);
    class E {
      constructor() {
        currentUser = closure_1_7.getCurrentUser();
        tmp2 = verified(closure_2[11])(null != currentUser, "ResendEmail: user cannot be undefined");
        return currentUser;
      }
    }
    cResult[4] = stateFromStores1;
    cResult[5] = result;
    tmp15 = result;
  } else {
    tmp15 = cResult[5];
  }
  [tmp20, dependencyMap] = ref(react.useState(false), 2);
  ref(react.useState(false), 2);
  ref = react.useRef(verified);
  if (cResult[6] !== verified) {
    class A {
      constructor() {
        tmp = verified;
        if (tmp) {
          tmp2 = closure_3;
          flag = false;
          tmp = false === closure_3.current;
        }
        if (tmp) {
          tmp3 = closure_1;
          tmp4 = closure_2;
          obj = closure_1(closure_2[14]);
          closeResult = obj.close();
        }
        return;
      }
    }
    const items2 = [verified];
    class E {
      constructor() {
        currentUser = closure_1_7.getCurrentUser();
        tmp2 = verified(closure_2[11])(null != currentUser, "ResendEmail: user cannot be undefined");
        return currentUser;
      }
    }
    cResult[6] = verified;
    cResult[7] = A;
    cResult[8] = items2;
    tmp22 = items2;
    tmp21 = A;
  } else {
    class A {
      constructor() {
        tmp = verified;
        if (tmp) {
          tmp2 = closure_3;
          flag = false;
          tmp = false === closure_3.current;
        }
        if (tmp) {
          tmp3 = closure_1;
          tmp4 = closure_2;
          obj = closure_1(closure_2[14]);
          closeResult = obj.close();
        }
        return;
      }
    }
    tmp22 = cResult[8];
  }
  const effect = obj6.useEffect(tmp21, tmp22);
  if (cResult[9] !== verified) {
    class O {
      constructor() {
        closure_3.current = verified;
        return;
      }
    }
    cResult[9] = verified;
    class E {
      constructor() {
        currentUser = closure_1_7.getCurrentUser();
        tmp2 = verified(closure_2[11])(null != currentUser, "ResendEmail: user cannot be undefined");
        return currentUser;
      }
    }
    cResult[10] = O;
    tmp24 = O;
  } else {
    class O {
      constructor() {
        closure_3.current = verified;
        return;
      }
    }
  }
  const effect1 = obj6.useEffect(tmp24);
  if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
    class O {
      constructor() {
        closure_3.current = verified;
        return;
      }
    }
    cResult[11] = tmp26;
    class E {
      constructor() {
        currentUser = closure_1_7.getCurrentUser();
        tmp2 = verified(closure_2[11])(null != currentUser, "ResendEmail: user cannot be undefined");
        return currentUser;
      }
    }
  } else {
    class O {
      constructor() {
        closure_3.current = verified;
        return;
      }
    }
  }
  if (cResult[12] !== navigation) {
    class O {
      constructor() {
        closure_3.current = verified;
        return;
      }
    }
    cResult[12] = navigation;
    class E {
      constructor() {
        currentUser = closure_1_7.getCurrentUser();
        tmp2 = verified(closure_2[11])(null != currentUser, "ResendEmail: user cannot be undefined");
        return currentUser;
      }
    }
    cResult[13] = tmp28;
  } else {
    class O {
      constructor() {
        closure_3.current = verified;
        return;
      }
    }
  }
  if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
    class O {
      constructor() {
        closure_3.current = verified;
        return;
      }
    }
    closure_9(tmp(6275).EnvelopeOpenSpotIllustration, { scale: 0.75 });
    class E {
      constructor() {
        currentUser = closure_1_7.getCurrentUser();
        tmp2 = verified(closure_2[11])(null != currentUser, "ResendEmail: user cannot be undefined");
        return currentUser;
      }
    }
  } else {
    class O {
      constructor() {
        closure_3.current = verified;
        return;
      }
    }
  }
  const title = tmp4.title;
  if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
    class O {
      constructor() {
        closure_3.current = verified;
        return;
      }
    }
    const stringResult = obj7.string(tmp(1126).t.fUtddV);
    class E {
      constructor() {
        currentUser = closure_1_7.getCurrentUser();
        tmp2 = verified(closure_2[11])(null != currentUser, "ResendEmail: user cannot be undefined");
        return currentUser;
      }
    }
    cResult[15] = stringResult;
  } else {
    class O {
      constructor() {
        closure_3.current = verified;
        return;
      }
    }
  }
  if (cResult[16] !== tmp4.title) {
    class O {
      constructor() {
        closure_3.current = verified;
        return;
      }
    }
    const obj3 = { style: title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
    class E {
      constructor() {
        currentUser = closure_1_7.getCurrentUser();
        tmp2 = verified(closure_2[11])(null != currentUser, "ResendEmail: user cannot be undefined");
        return currentUser;
      }
    }
    cResult[16] = tmp4.title;
    cResult[17] = closure_9(tmp(5086).Text, obj3);
    const tmp34 = closure_9(tmp(5086).Text, obj3);
  } else {
    class O {
      constructor() {
        closure_3.current = verified;
        return;
      }
    }
  }
  if (cResult[18] === email) {
    class O {
      constructor() {
        closure_3.current = verified;
        return;
      }
    }
    if (cResult[21] === tmp4.body) {
      class O {
        constructor() {
          closure_3.current = verified;
          return;
        }
      }
      const _Symbol = Symbol;
      class E {
        constructor() {
          currentUser = closure_1_7.getCurrentUser();
          tmp2 = verified(closure_2[11])(null != currentUser, "ResendEmail: user cannot be undefined");
          return currentUser;
        }
      }
      if (cResult[25] !== tmp4.resend) {
        class O {
          constructor() {
            closure_3.current = verified;
            return;
          }
        }
        const obj4 = { style: null, children: tmp43 };
        class E {
          constructor() {
            currentUser = closure_1_7.getCurrentUser();
            tmp2 = verified(closure_2[11])(null != currentUser, "ResendEmail: user cannot be undefined");
            return currentUser;
          }
        }
        cResult[25] = tmp4.resend;
        cResult[26] = closure_9(View, obj4);
        const tmp46 = closure_9(View, obj4);
      } else {
        class O {
          constructor() {
            closure_3.current = verified;
            return;
          }
        }
      }
      if (cResult[27] === !tmp15) {
        class O {
          constructor() {
            closure_3.current = verified;
            return;
          }
        }
      }
      let tmp48 = tmp18;
      if (!tmp15) {
        class O {
          constructor() {
            closure_3.current = verified;
            return;
          }
        }
        const obj8 = { style: null, children: closure_9(Button, obj9) };
        class E {
          constructor() {
            currentUser = closure_1_7.getCurrentUser();
            tmp2 = verified(closure_2[11])(null != currentUser, "ResendEmail: user cannot be undefined");
            return currentUser;
          }
        }
        obj9 = { text: intl2.string(tmp(1126).t.Vm8akB), variant: "secondary", onPress: tmp27, grow: true };
        Button = tmp(5375).Button;
        intl2 = tmp(1126).intl;
        tmp48 = closure_9(View, obj8);
      }
      cResult[27] = !tmp15;
      cResult[28] = tmp27;
      cResult[29] = tmp4.change;
      cResult[30] = tmp48;
    }
    class E {
      constructor() {
        currentUser = closure_1_7.getCurrentUser();
        tmp2 = verified(closure_2[11])(null != currentUser, "ResendEmail: user cannot be undefined");
        return currentUser;
      }
    }
    tmp40[0] = tmp4.body;
    tmp40[3] = tmp35;
    cResult[21] = tmp4.body;
    cResult[22] = tmp35;
    cResult[23] = closure_9(tmp(5086).Text, tmp40);
    const tmp41 = closure_9(tmp(5086).Text, tmp40);
  }
  let intl = tmp(1126).intl;
  if (tmp20) {
    class O {
      constructor() {
        closure_3.current = verified;
        return;
      }
    }
    class E {
      constructor() {
        currentUser = closure_1_7.getCurrentUser();
        tmp2 = verified(closure_2[11])(null != currentUser, "ResendEmail: user cannot be undefined");
        return currentUser;
      }
    }
  } else {
    class O {
      constructor() {
        closure_3.current = verified;
        return;
      }
    }
    tmp36Result = tmp36(tmp(1126).t.tSXg8O);
  }
  cResult[18] = email;
  cResult[19] = tmp20;
  cResult[20] = tmp36Result;
}) : (function ResendEmail() {
  let Button;
  let Button2;
  let action;
  let formatResult;
  let intl;
  let intl3;
  let intl4;
  let items4;
  let obj10;
  let obj12;
  let tmp10;
  let tmp = closure_11();
  let obj = navigation(1502);
  navigation = obj.useNavigation();
  let obj2 = navigation(504);
  const items = [UserStore];
  const stateFromStores = obj2.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    verified(dependencyMap[11])(null != currentUser, "ResendEmail: user cannot be undefined");
    return currentUser;
  });
  const verified = stateFromStores.verified;
  const email = stateFromStores.email;
  const items1 = [UserRequiredActionStore];
  const obj3 = navigation(504);
  const stateFromStores1 = obj3.useStateFromStores(items1, () => action.getAction());
  const obj4 = verified(6274);
  const result = obj4.isEmailReverification(stateFromStores1);
  let tmp16Result = !result;
  [tmp10, dependencyMap] = ref(react.useState(false), 2);
  ref(react.useState(false), 2);
  ref = react.useRef(verified);
  const items2 = [verified];
  const effect = react.useEffect(() => {
    const tmp = verified && false === ref.current;
    if (tmp) {
      const obj = EmailVerificationModalActionCreatorsDefault;
      obj.close();
    }
  }, items2);
  const effect1 = react.useEffect(() => {
    ref.current = verified;
  });
  const items3 = [navigation];
  const obj5 = { style: tmp.container, children: items4 };
  const callback = react.useCallback(() => {
    navigation.push(VerificationModalScenes.ENTER_EMAIL);
  }, items3);
  items4 = [closure_9(navigation(6275).EnvelopeOpenSpotIllustration, { scale: 0.75 }), , , , ];
  const obj6 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: intl.string(navigation(1126).t.fUtddV) };
  const Text = navigation(5086).Text;
  intl = navigation(1126).intl;
  items4[1] = closure_9(Text, obj6);
  const obj7 = { style: tmp.body, variant: "text-sm/medium", color: "text-default", children: formatResult };
  const Text2 = navigation(5086).Text;
  const intl2 = navigation(1126).intl;
  const tmp14 = closure_10;
  if (tmp10) {
    const obj8 = { email };
    formatResult = intl2.format(tmp2(1126).t.JqLgQL, obj8);
  } else {
    formatResult = intl2.string(tmp2(1126).t.tSXg8O);
  }
  items4[2] = closure_9(Text2, obj7);
  const obj9 = { style: tmp.resend, children: closure_9(Button, obj10) };
  obj10 = {
    text: intl3.string(navigation(1126).t.WnX4J2),
    variant: "primary",
    onPress: function handleResendEmail() {
      let intl;
      dependencyMap(true);
      const obj = AuthenticationActionCreatorsDefault;
      obj.verifyResend();
      const obj2 = { key: "USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_CODE_SENT", content: intl.string(intl5.t["84yeoz"]) };
      const open = ToastActionCreatorsDefault.open;
      ToastActionCreatorsDefault;
      intl = intl5.intl;
      open(obj2);
    },
    grow: true
  };
  Button = tmp2(5375).Button;
  intl3 = tmp2(1126).intl;
  items4[3] = closure_9(View, obj9);
  if (!result) {
    const obj11 = { style: tmp.change, children: closure_9(Button2, obj12) };
    obj12 = { text: intl4.string(navigation(1126).t.Vm8akB), variant: "secondary", onPress: callback, grow: true };
    Button2 = tmp2(5375).Button;
    intl4 = tmp2(1126).intl;
    tmp16Result = tmp16(tmp15, obj11);
  }
  items4[4] = tmp16Result;
  return tmp14(View, obj5);
});
let result = size.fileFinishedImporting("modules/verification/native/components/ResendEmail.tsx");

export default tmp3;
