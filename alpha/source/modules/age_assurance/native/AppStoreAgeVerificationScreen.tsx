// Module ID: 8061
// Function ID: 8062
// Name: AppStoreAgeVerificationScreen
// Dependencies: [5, 32, 19, 17, 21, 5811, 5816, 1501, 6825, 8062, 8079, 7888, 7890, 6115, 5634, 1112, 3499, 6863, 5641, 6828, 2]
// Exports: default

// Module 8061 (AppStoreAgeVerificationScreen)
import react_native from "react-native" /* 17 */;
import MonitoringAgentDefault from "MonitoringAgent" /* 5811 */;
import MetricEvents from "MetricEvents" /* 5816 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 6828 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let _undefined, c5, c6, dependencyMap, navigation;

let c9;
let metroImportAll;
let metroImportDefault;
function trackFailure(arg0) {
  let items;
  const tmp = MonitoringAgentDefault;
  const increment = tmp.increment;
  const obj = { name: MetricEvents.MetricEvents.APP_STORE_AGE_VERIFICATION_FAILED, tags: items };
  items = ["reason:" + arg0];
  increment(obj);
}
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
  let callback1;
  react = undefined;
  let tmp = modalSessionId;
  const onClose = modalSessionId.onClose;
  let obj = modalSessionId(1501);
  navigation = obj.useNavigation();
  const tmp4 = callback1(react.useState({ type: "loading" }), 2);
  [tmp5, c2] = tmp4;
  let obj2 = modalSessionId(6825);
  const watchAgeVerificationStatusChange = obj2.useWatchAgeVerificationStatusChange(onClose);
  const items = [navigation];
  const callback = react.useCallback(() => {
    navigation.goBack();
  }, items);
  const items1 = [callback];
  callback1 = react.useCallback(callback(function*(arg0, value) {
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
        return { value: "HermesInternal", done: null };
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
            const obj5 = { value: obj3.queueAppStoreAgeSignalSubmit(unknown_str(_undefined[10]).submitUserInitiatedAgeSignal), done: false };
            obj3 = unknown_str(_undefined[9]);
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
              const obj = { value: undefined, done: true };
              return obj;
            } else if ("accepted" === unknown_str.result) {
              c4 = 0;
              c6 = 3;
              return { value: "HermesInternal", done: null };
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
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp32) {
        status = tmp32;
        if (0 === c4) {
          c6 = 3;
          throw tmp32;
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
  const ModalScreen = modalSessionId(7888).ModalScreen;
  const ModalContent = modalSessionId(7890).ModalContent;
  const Stack = modalSessionId(6115).Stack;
  if ("loading" === tmp5.type) {
    let obj3 = { children: items3 };
    items3 = [tmp10(ActivityIndicator, { size: "large" }), ];
    let obj4 = { variant: "body-md/medium", color: "text-strong", children: intl.string(navigation(3499).MN6I4Y) };
    const Text = tmp(5634).Text;
    intl = tmp(1112).intl;
    items3[1] = closure_7(Text, obj4);
    tmp15 = closure_9(closure_8, obj3);
  } else {
    let obj5 = { children: items4 };
    let obj6 = { variant: "body-md/medium", color: "text-strong", accessibilityRole: "alert", children: intl2.string(navigation(3499).tBwanH) };
    const Text2 = tmp(5634).Text;
    intl2 = tmp(1112).intl;
    items4 = [tmp10(Text2, obj6), ];
    const obj7 = { children: closure_7(Button, obj8) };
    const ButtonGroup = tmp(6863).ButtonGroup;
    obj8 = {
      variant: "primary",
      size: "lg",
      text: intl3.string(navigation(3499)["Jx33+I"]),
      onPress() {
          const trackAgeVerificationModalClicked = AgeVerificationAnalyticsUtils.trackAgeVerificationModalClicked;
          AgeVerificationAnalyticsUtils;
          const result = trackAgeVerificationModalClicked(modalSessionId, AgeVerificationAnalyticsUtils.AgeVerificationModalVersion.EXPRESSIVE_V2, AgeVerificationAnalyticsUtils.AgeVerificationModalCta.METHOD_SELECT);
          callback();
        }
    };
    Button = tmp(5641).Button;
    intl3 = tmp(1112).intl;
    items4[1] = closure_7(ButtonGroup, obj7);
    tmp15 = closure_9(closure_8, obj5);
  }
  const obj9 = { children: closure_7(ModalContent, obj10) };
  obj10 = { children: closure_7(Stack, { align: "center", justify: "center", spacing: 16, children: tmp15 }) };
  return closure_7(ModalScreen, obj9);
};
