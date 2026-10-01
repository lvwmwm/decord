// Module ID: 8022
// Function ID: 8023
// Name: GoogleWalletVerificationScreen
// Dependencies: [5, 32, 19, 17, 21, 1485, 5048, 7891, 7867, 5179, 5184, 1115, 3039, 7870, 7871, 5279, 4832, 5745, 5281, 7861, 2]
// Exports: default

// Module 8022 (GoogleWalletVerificationScreen)
import react_native from "react-native" /* 17 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 7861 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c5, navigation;

let metroImportAll;
let metroImportDefault;
let _slicedToArray = _slicedToArray_mod;
const ActivityIndicator = react_native.ActivityIndicator;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = { NOT_AVAILABLE: "not_available", FAILED: "credential_error" };
let result = size.fileFinishedImporting("modules/age_assurance/native/GoogleWalletVerificationScreen.tsx");

export default function GoogleWalletVerificationScreen(onClose) {
  let Button;
  let ModalContent;
  let ModalContent2;
  let Stack;
  let Stack2;
  let c4;
  let intl;
  let intl2;
  let items4;
  let items5;
  let obj12;
  let obj4;
  let obj5;
  let obj8;
  let obj9;
  let tmp15;
  let tmp5;
  onClose = onClose.onClose;
  const onComplete = onClose.onComplete;
  const modalSessionId = onClose.modalSessionId;
  _slicedToArray = undefined;
  let callback;
  let tmp = onClose;
  let obj = onClose(modalSessionId[5]);
  navigation = obj.useNavigation();
  const tmp4 = _slicedToArray(callback.useState({ type: "loading" }), 2);
  [tmp5, c4] = tmp4;
  let items = [onComplete, onClose];
  callback = callback.useCallback(() => {
    if (onComplete != null) {
      tmp();
    }
    onClose();
  }, items);
  let obj2 = onClose(modalSessionId[6]);
  const watchAgeVerificationStatusChange = obj2.useWatchAgeVerificationStatusChange(callback);
  const items1 = [navigation];
  const callback1 = callback.useCallback(() => {
    navigation.goBack();
  }, items1);
  const items2 = [callback1, callback];
  const callback2 = callback.useCallback(navigation(function*(arg0, value) {
    let closure_0;
    let closure_1;
    let closure_2;
    let intl;
    let intl2;
    let items;
    let obj14;
    let obj3;
    let obj6;
    function getFailureReason(status) {
      status = undefined;
      if (status != null) {
        status = status.status;
      }
      let str = "rate_limited";
      if (429 !== status) {
        let code;
        if (status != null) {
          code = status.code;
        }
        let str3 = "unknown";
        if (null != code) {
          str3 = "unknown";
          if (status.code in closure_1_9) {
            str3 = tmp3[status.code];
          }
        }
        str = str3;
      }
      return str;
    }
    if (c5 === 2) {
      c5 = 3;
      let str = "Generator functions may not be called on executing generators";
      throw new TypeError("Generator functions may not be called on executing generators");
    } else {
      const str2 = "reason:";
      let str3 = "unsupported_issuing_country";
      if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        let tmp50;
        let c3;
        try {
          let request_json;
          let tmp;
          let closure_3;
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              onClose = tmp4;
              request_json = undefined;
              tmp = undefined;
              tmp50 = undefined;
              closure_3 = undefined;
              c3 = 1;
              c4 = 2;
              c5 = 1;
              const obj5 = { value: obj14.requestGoogleWalletVerification(), done: false };
              obj14 = onClose(tmp50[7]);
              return obj5;
            }
          } else {
            if (1 === c4) {
              c3 = 0;
              let code;
              if (tmp50 != null) {
                code = tmp50.code;
              }
              if ("CANCELLED" === code) {
                const obj7 = { name: onClose(tmp50[10]).MetricEvents.GOOGLE_WALLET_VERIFICATION_FAILED, tags: ["reason:user_cancelled"] };
                const increment2 = tmp(tmp50[9]).increment;
                const tmp42 = tmp(tmp50[9]);
                increment2(obj7);
                closure_129_6();
                c5 = 3;
                const obj8 = { value: undefined, done: true };
                return obj8;
              } else {
                let reason;
                if (tmp50 != null) {
                  const body = tmp50.body;
                  if (body != null) {
                    reason = body.reason;
                  }
                }
                if ("unsupported_issuing_country" === reason) {
                  const obj9 = { name: onClose(tmp50[10]).MetricEvents.GOOGLE_WALLET_VERIFICATION_FAILED, tags: ["reason:unsupported_issuing_country"] };
                  const increment = tmp(tmp50[9]).increment;
                  const tmp29 = tmp(tmp50[9]);
                  increment(obj9);
                  const obj10 = { type: "error", message: intl.string(tmp(tmp50[12]).Pf5xUq) };
                  intl = onClose(tmp50[11]).intl;
                  closure_129_4(obj10);
                  c5 = 3;
                  const obj11 = { value: undefined, done: true };
                  return obj11;
                } else {
                  closure_3 = getFailureReason(tmp50);
                  const obj12 = { name: onClose(tmp50[10]).MetricEvents.GOOGLE_WALLET_VERIFICATION_FAILED, tags: items };
                  const increment3 = tmp(tmp50[9]).increment;
                  const tmp64 = tmp(tmp50[9]);
                  const _HermesInternal = HermesInternal;
                  items = ["reason:" + closure_3];
                  increment3(obj12);
                  const obj13 = { type: "error", message: intl2.string(tmp(tmp50[12])["+pwfOA"]) };
                  intl2 = onClose(tmp50[11]).intl;
                  closure_129_4(obj13);
                }
              }
            } else if (2 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                c5 = 3;
                const obj15 = { value, done: true };
                return obj15;
              } else {
                request_json = value.request_json;
                c4 = 3;
                c5 = 1;
                const obj16 = { value: obj6.getGoogleWalletCredential(request_json), done: false };
                obj6 = onClose(tmp50[7]);
                return obj16;
              }
            } else if (3 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                c5 = 3;
                const obj17 = { value, done: true };
                return obj17;
              } else {
                tmp = value;
                c4 = 4;
                c5 = 1;
                const obj18 = { value: obj3.verifyGoogleWalletCredential(tmp), done: false };
                obj3 = onClose(tmp50[7]);
                return obj18;
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              const obj19 = { value, done: true };
              return obj19;
            } else {
              const obj = onClose(tmp50[8]);
              if (obj.isCurrentUserSuspended()) {
                closure_129_5();
              }
              c3 = 0;
            }
            c5 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp50) {
          if (0 === c3) {
            c5 = 3;
            throw tmp50;
          } else {
            c4 = 1;
          }
        }
      }
    }
  }), items2);
  let closure_8 = callback.useRef(false);
  const items3 = [navigation, callback2];
  const effect = callback.useEffect(() => {
    let closure_1;
    let ref;
    let closure_0 = navigation.addListener("transitionEnd", (data) => {
      let current = ref.current;
      const tmp = ref;
      if (!current) {
        current = true === data.data.closing;
      }
      if (!current) {
        tmp.current = true;
        callback2();
      }
    });
    const timeout = setTimeout(() => {
      if (!ref.current) {
        tmp.current = true;
        callback2();
      }
    }, 1000);
    return () => {
      closure_0();
      clearTimeout(closure_1);
    };
  }, items3);
  if ("loading" === tmp5.type) {
    let obj3 = { children: callback2(ModalContent, obj4) };
    const ModalScreen = tmp(tmp2[13]).ModalScreen;
    obj4 = { children: closure_8(Stack, obj5) };
    ModalContent = tmp(tmp2[14]).ModalContent;
    obj5 = { align: "center", justify: "center", spacing: 16, children: items4 };
    Stack = tmp(tmp2[15]).Stack;
    items4 = [callback2(callback1, { size: "large" }), ];
    let obj6 = { variant: "text-md/medium", color: "text-strong", children: intl.string(onComplete(tmp2[12]).MlFuBI) };
    const Text = tmp(tmp2[16]).Text;
    intl = tmp(tmp2[11]).intl;
    items4[1] = callback2(Text, obj6);
    tmp15 = callback2(ModalScreen, obj3);
  } else {
    let obj7 = { children: callback2(ModalContent2, obj8) };
    const ModalScreen2 = tmp(tmp2[13]).ModalScreen;
    obj8 = { children: closure_8(Stack2, obj9) };
    ModalContent2 = tmp(tmp2[14]).ModalContent;
    obj9 = { align: "center", justify: "center", spacing: 16, children: items5 };
    Stack2 = tmp(tmp2[15]).Stack;
    let obj10 = { variant: "text-md/medium", color: "text-strong", children: tmp5.message };
    items5 = [callback2(tmp(tmp2[16]).Text, obj10), ];
    let obj11 = { children: callback2(Button, obj12) };
    const ButtonGroup = tmp(tmp2[17]).ButtonGroup;
    obj12 = {
      variant: "primary",
      size: "lg",
      text: intl2.string(onComplete(tmp2[12]).fEUKEv),
      onPress() {
          const trackAgeVerificationModalClicked = AgeVerificationAnalyticsUtils.trackAgeVerificationModalClicked;
          AgeVerificationAnalyticsUtils;
          const result = trackAgeVerificationModalClicked(modalSessionId, AgeVerificationAnalyticsUtils.AgeVerificationModalVersion.EXPRESSIVE_PRIMARY, AgeVerificationAnalyticsUtils.AgeVerificationModalCta.METHOD_SELECT);
          callback1();
        }
    };
    Button = tmp(tmp2[18]).Button;
    intl2 = tmp(tmp2[11]).intl;
    items5[1] = callback2(ButtonGroup, obj11);
    tmp15 = callback2(ModalScreen2, obj7);
  }
  return tmp15;
};
