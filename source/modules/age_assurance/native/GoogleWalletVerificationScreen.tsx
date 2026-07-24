// Module ID: 7630
// Function ID: 60754
// Name: GoogleWalletVerificationScreen
// Dependencies: [5, 57, 31, 27, 33, 1456, 4347, 7626, 6836, 6841, 1212, 2716, 7613, 7614, 4541, 4126, 4965, 4543, 7583, 2]
// Exports: default

// Module 7630 (GoogleWalletVerificationScreen)
import useNavigation from "useNavigation";
import _slicedToArray from "_slicedToArray";
import result from "result";
import { ActivityIndicator } from "get ActivityIndicator";
import jsxProd from "jsxProd";

let closure_7;
let closure_8;
const require = arg1;
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let closure_9 = { NOT_AVAILABLE: "not_available", FAILED: "credential_error" };
let result = require("result").fileFinishedImporting("modules/age_assurance/native/GoogleWalletVerificationScreen.tsx");

export default function GoogleWalletVerificationScreen(modalSessionId) {
  modalSessionId = modalSessionId.modalSessionId;
  let obj = modalSessionId(1456);
  let navigation = obj.useNavigation();
  const tmp2 = callback1(React.useState({ type: "loading" }), 2);
  const first = tmp2[0];
  const dependencyMap = tmp2[1];
  let obj1 = modalSessionId(4347);
  const watchAgeVerificationStatusChange = obj1.useWatchAgeVerificationStatusChange(modalSessionId.onClose);
  const items = [navigation];
  const callback = React.useCallback(() => {
    navigation.goBack();
  }, items);
  const items1 = [callback];
  callback1 = React.useCallback(callback(async () => {
    const obj = modalSessionId(7626);
    const obj2 = modalSessionId(7626);
    const tmp = yield modalSessionId(7626).getGoogleWalletCredential(yield obj.requestGoogleWalletVerification().request_json);
    yield modalSessionId(7626).verifyGoogleWalletCredential(tmp);
  }), items1);
  React = React.useRef(false);
  const items2 = [navigation, callback1];
  const effect = React.useEffect(() => {
    let closure_0 = navigation.addListener("transitionEnd", (data) => {
      let current = outer1_5.current;
      if (!current) {
        current = true === data.data.closing;
      }
      if (!current) {
        outer1_5.current = true;
        outer1_4();
      }
    });
    navigation = setTimeout(() => {
      if (!outer1_5.current) {
        outer1_5.current = true;
        outer1_4();
      }
    }, 1000);
    return () => {
      callback();
      clearTimeout(closure_1);
    };
  }, items2);
  if ("loading" === first.type) {
    obj = {};
    obj = {};
    obj1 = { align: "center", justify: "center", spacing: 16 };
    let obj2 = { size: "large" };
    const items3 = [callback(ActivityIndicator, obj2), ];
    const obj3 = { variant: "text-md/medium", color: "text-strong" };
    const intl = modalSessionId(1212).intl;
    obj3.children = intl.string(navigation(2716).MlFuBI);
    items3[1] = callback(modalSessionId(4126).Text, obj3);
    obj1.children = items3;
    obj.children = callback2(modalSessionId(4541).Stack, obj1);
    obj.children = callback(modalSessionId(7614).ModalContent, obj);
    let tmp14 = callback(modalSessionId(7613).ModalScreen, obj);
  } else {
    const obj4 = {};
    const obj5 = {};
    const obj6 = { align: "center", justify: "center", spacing: 16 };
    const obj7 = { variant: "text-md/medium", color: "text-strong", children: first.message };
    const items4 = [callback(modalSessionId(4126).Text, obj7), ];
    const obj8 = {};
    const obj9 = { variant: "primary", size: "lg" };
    const intl2 = modalSessionId(1212).intl;
    obj9.text = intl2.string(navigation(2716).fEUKEv);
    obj9.onPress = function onPress() {
      const result = modalSessionId(7583).trackAgeVerificationModalClicked(modalSessionId, modalSessionId(7583).AgeVerificationModalVersion.EXPRESSIVE_PRIMARY, modalSessionId(7583).AgeVerificationModalCta.METHOD_SELECT);
      callback();
    };
    obj8.children = callback(modalSessionId(4543).Button, obj9);
    items4[1] = callback(modalSessionId(4965).ButtonGroup, obj8);
    obj6.children = items4;
    obj5.children = callback2(modalSessionId(4541).Stack, obj6);
    obj4.children = callback(modalSessionId(7614).ModalContent, obj5);
    tmp14 = callback(modalSessionId(7613).ModalScreen, obj4);
  }
  return tmp14;
};
