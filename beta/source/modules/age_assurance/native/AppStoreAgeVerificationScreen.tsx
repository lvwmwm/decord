// Module ID: 8109
// Function ID: 8110
// Name: AppStoreAgeVerificationScreen
// Dependencies: [32, 5, 19, 17, 21, 6500, 6505, 8110, 8114, 7963, 8111, 1505, 6686, 8118, 7932, 7933, 6009, 5266, 1128, 3090, 6728, 5276, 6689, 2]
// Exports: default

// Module 8109 (AppStoreAgeVerificationScreen)
import react_native from "react-native" /* 17 */;
import MonitoringAgentDefault from "MonitoringAgent" /* 6500 */;
import MetricEvents from "MetricEvents" /* 6505 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 6689 */;
import AppStoreAgeSignalSupport from "AppStoreAgeSignalSupport" /* 7963 */;
import AppStoreAgeSignalAttestation from "AppStoreAgeSignalAttestation" /* 8110 */;
import AppStoreAgeAssuranceDefault from "AppStoreAgeAssurance" /* 8114 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let _undefined, c3, c5, c6, dependencyMap, navigation;

let c9;
let metroImportAll;
let metroImportDefault;
function trackFailure(arg0) {
  let items;
  const tmp = MonitoringAgentDefault;
  const increment = tmp.increment;
  obj = { name: MetricEvents.MetricEvents.APP_STORE_AGE_VERIFICATION_FAILED, tags: items };
  items = ["reason:" + arg0];
  increment(obj);
}
function submitUserInitiatedAgeSignal() {
  return obj(...arguments);
}
let obj = function _submitUserInitiatedAgeSignal() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let obj6;
    let obj9;
    if (c3 === 2) {
      c3 = 3;
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
      try {
        let closure_0;
        let closure_1;
        let appleVerifiedMethod;
        let closure_3;
        let closure_4;
        let closure_5;
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_0 = undefined;
            closure_1 = undefined;
            appleVerifiedMethod = undefined;
            closure_3 = undefined;
            closure_4 = undefined;
            closure_5 = undefined;
            const obj15 = AppStoreAgeSignalAttestation;
            const result = obj15.warmAgeSignalAttestation();
            const obj5 = { firstAgeGate: AppStoreAgeSignalSupport.MIN_AGE_GATE, secondAgeGate: AppStoreAgeSignalSupport.ADULT_AGE_GATE };
            const getAgeSignals = AppStoreAgeAssuranceDefault.getAgeSignals;
            const items = [getAgeSignals(obj5), ];
            const obj17 = AppStoreAgeSignalAttestation;
            items[1] = obj17.getAgeSignalChallenge();
            c2 = 1;
            c3 = 1;
            const obj7 = { value: all(items), done: false };
            return obj7;
          }
        } else if (1 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else {
            closure_0 = value;
            closure_1 = closure_129_3(closure_0, 2);
            appleVerifiedMethod = closure_1[0];
            closure_3 = closure_1[1];
            if ("declined" === appleVerifiedMethod.appleVerifiedMethod) {
              c3 = 3;
              return { value: null, done: true };
            } else {
              c2 = 2;
              c3 = 1;
              const obj10 = { value: obj9.getAgeSignalIntegrityToken(closure_3, appleVerifiedMethod), done: false };
              obj9 = closure_129_0(closure_129_2[7]);
              return obj10;
            }
          }
        } else if (2 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj11 = { value, done: true };
            return obj11;
          } else {
            closure_4 = value;
            c2 = 3;
            c3 = 1;
            const obj12 = { value: obj6.getAppStoreAgeSignalAssertion(appleVerifiedMethod, false), done: false };
            obj6 = closure_129_0(closure_129_2[7]);
            return obj12;
          }
        } else if (3 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj13 = { value, done: true };
            return obj13;
          } else {
            closure_5 = value;
            const obj3 = closure_129_0(closure_129_2[10]);
            c2 = 4;
            c3 = 1;
            const obj14 = { value: obj3.submitAgeSignal(appleVerifiedMethod, closure_4, false, "user_initiated", closure_5), done: false };
            return obj14;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj16 = { value, done: true };
          return obj16;
        } else {
          c3 = 3;
          obj = { value, done: true };
          return obj;
        }
      } catch (tmp24) {
        c3 = 3;
        throw tmp24;
      }
    }
  });
  return obj(...arguments);
};
let react = react_mod;
const ActivityIndicator = react_native.ActivityIndicator;
({ jsx: metroImportDefault, Fragment: metroImportAll, jsxs: c9 } = Fragment);
let result = size.fileFinishedImporting("modules/age_assurance/native/AppStoreAgeVerificationScreen.tsx");

export default function AppStoreAgeVerificationScreen(modalSessionId) {
  let Button;
  let c2;
  let closure_5;
  let intl;
  let intl2;
  let intl3;
  let items3;
  let items4;
  let obj10;
  let obj8;
  let tmp15;
  let tmp5;
  modalSessionId = modalSessionId.modalSessionId;
  dependencyMap = undefined;
  let callback;
  let callback1;
  react = undefined;
  let tmp = modalSessionId;
  const onClose = modalSessionId.onClose;
  obj = modalSessionId(1505);
  navigation = obj.useNavigation();
  const tmp4 = callback(react.useState({ type: "loading" }), 2);
  [tmp5, c2] = tmp4;
  let obj2 = modalSessionId(6686);
  const watchAgeVerificationStatusChange = obj2.useWatchAgeVerificationStatusChange(onClose);
  const items = [navigation];
  callback = react.useCallback(() => {
    navigation.goBack();
  }, items);
  const items1 = [callback];
  callback1 = react.useCallback(callback1(function*(arg0, value) {
    let closure_2;
    let obj3;
    if (c6 === 2) {
      c6 = 3;
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
      let status;
      try {
        let unknown_str;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            _undefined = tmp;
            let closure_1 = tmp4;
            unknown_str = undefined;
            status = undefined;
            c4 = 1;
            c5 = 2;
            c6 = 1;
            const obj5 = { value: obj3.queueAppStoreAgeSignalSubmit(submitUserInitiatedAgeSignal), done: false };
            obj3 = unknown_str(_undefined[13]);
            return obj5;
          }
        } else {
          if (1 === c5) {
            c4 = 0;
            status = undefined;
            if (status != null) {
              status = status.status;
            }
            let str = "unknown";
            const tmp25 = trackFailure;
            if (429 === status) {
              str = "rate_limited";
            }
            tmp25(str);
            closure_130_2({ type: "error" });
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            unknown_str = value;
            if (null == unknown_str) {
              trackFailure("user_declined");
              closure_130_3();
              c4 = 0;
              c6 = 3;
              obj = { value: undefined, done: true };
              return obj;
            } else if ("accepted" === unknown_str.result) {
              c4 = 0;
              c6 = 3;
              return { value: "IconComponent", done: null };
            } else {
              const reason = unknown_str.reason;
              unknown_str = reason;
              const tmp9 = trackFailure;
              if (reason == null) {
                unknown_str = "unknown";
              }
              tmp9(unknown_str);
              closure_130_2({ type: "error" });
              c4 = 0;
            }
          }
          c6 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp33) {
        status = tmp33;
        if (0 === c4) {
          c6 = 3;
          throw tmp33;
        } else {
          c5 = 1;
        }
      }
    }
  }), items1);
  react = react.useRef(false);
  const items2 = [navigation, callback1];
  const effect = react.useEffect(() => {
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
        callback1();
      }
    });
    navigation = setTimeout(() => {
      if (!ref.current) {
        tmp.current = true;
        callback1();
      }
    }, 1000);
    return () => {
      closure_0();
      clearTimeout(closure_1);
    };
  }, items2);
  const ModalScreen = modalSessionId(7932).ModalScreen;
  const ModalContent = modalSessionId(7933).ModalContent;
  const Stack = modalSessionId(6009).Stack;
  if ("loading" === tmp5.type) {
    let obj3 = { children: items3 };
    items3 = [tmp10(ActivityIndicator, { size: "large" }), ];
    let obj4 = { variant: "text-md/medium", color: "text-strong", children: intl.string(navigation(3090).MN6I4Y) };
    const Text = tmp(5266).Text;
    intl = tmp(1128).intl;
    items3[1] = closure_7(Text, obj4);
    tmp15 = closure_9(closure_8, obj3);
  } else {
    let obj5 = { children: items4 };
    let obj6 = { variant: "text-md/medium", color: "text-strong", accessibilityRole: "alert", children: intl2.string(navigation(3090).tBwanH) };
    const Text2 = tmp(5266).Text;
    intl2 = tmp(1128).intl;
    items4 = [tmp10(Text2, obj6), ];
    const obj7 = { children: closure_7(Button, obj8) };
    const ButtonGroup = tmp(6728).ButtonGroup;
    obj8 = {
      variant: "primary",
      size: "lg",
      text: intl3.string(navigation(3090)["Jx33+I"]),
      onPress() {
          const trackAgeVerificationModalClicked = AgeVerificationAnalyticsUtils.trackAgeVerificationModalClicked;
          AgeVerificationAnalyticsUtils;
          const result = trackAgeVerificationModalClicked(modalSessionId, AgeVerificationAnalyticsUtils.AgeVerificationModalVersion.EXPRESSIVE_V2, AgeVerificationAnalyticsUtils.AgeVerificationModalCta.METHOD_SELECT);
          callback();
        }
    };
    Button = tmp(5276).Button;
    intl3 = tmp(1128).intl;
    items4[1] = closure_7(ButtonGroup, obj7);
    tmp15 = closure_9(closure_8, obj5);
  }
  const obj9 = { children: closure_7(ModalContent, obj10) };
  obj10 = { children: closure_7(Stack, { align: "center", justify: "center", spacing: 16, children: tmp15 }) };
  return closure_7(ModalScreen, obj9);
};
