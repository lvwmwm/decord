// Module ID: 7570
// Function ID: 60562
// Name: GoogleWalletVerificationScreen
// Dependencies: [496762880, 270270464, 268435456, 496828416, 353107968, 297467904, 325189632, 496893952, 131072, 1416888320, 905969683, 1509949442, 33554451, 4026531840, 7447, 3840, 4352, 4608, 14592, 1536]
// Exports: default

// Module 7570 (GoogleWalletVerificationScreen)
import weakMap from "weakMap";

let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
const ActivityIndicator = arg1(dependencyMap[3]).ActivityIndicator;
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
let closure_9 = { <string:2414968305>: "72af9903f630d67fa106808d11ca96fb", <string:2854291185>: "speaker" };
const result = weakMap.fileFinishedImporting("modules/age_assurance/native/GoogleWalletVerificationScreen.tsx");

export default function GoogleWalletVerificationScreen(modalSessionId) {
  const arg1 = modalSessionId.modalSessionId;
  let obj = arg1(closure_2[5]);
  const navigation = obj.useNavigation();
  const importDefault = navigation;
  const tmp2 = callback2(React.useState({ type: "loading" }), 2);
  const first = tmp2[0];
  closure_2 = tmp2[1];
  let obj1 = arg1(closure_2[6]);
  const watchAgeVerificationStatusChange = obj1.useWatchAgeVerificationStatusChange(modalSessionId.onClose);
  const items = [navigation];
  const callback = React.useCallback(() => {
    navigation.goBack();
  }, items);
  const items1 = [callback];
  const callback1 = React.useCallback(callback(async () => {
    const obj = callback(closure_2[7]);
    const obj2 = callback(closure_2[7]);
    const tmp = yield callback(closure_2[7]).getGoogleWalletCredential(yield obj.requestGoogleWalletVerification().request_json);
    yield callback(closure_2[7]).verifyGoogleWalletCredential(tmp);
  }), items1);
  const callback2 = callback1;
  const React = React.useRef(false);
  const items2 = [navigation, callback1];
  const effect = React.useEffect(() => {
    let closure_0 = navigation.addListener("transitionEnd", (data) => {
      let current = ref.current;
      if (!current) {
        current = true === data.data.closing;
      }
      if (!current) {
        ref.current = true;
        callback2();
      }
    });
    const navigation = setTimeout(() => {
      if (!ref.current) {
        ref.current = true;
        callback2();
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
    obj1 = {};
    const obj2 = { size: "large" };
    const items3 = [callback3(ActivityIndicator, obj2), ];
    const obj3 = { hasMaxConnections: 0.184, isBoostOnlySubscription: 1 };
    const intl = arg1(closure_2[10]).intl;
    obj3.children = intl.string(importDefault(closure_2[11]).MlFuBI);
    items3[1] = callback3(arg1(closure_2[15]).Text, obj3);
    obj1.children = items3;
    obj.children = callback4(arg1(closure_2[14]).Stack, obj1);
    obj.children = callback3(arg1(closure_2[13]).ModalContent, obj);
    let tmp14 = callback3(arg1(closure_2[12]).ModalScreen, obj);
  } else {
    const obj4 = {};
    const obj5 = {};
    const obj6 = {};
    const obj7 = { hasMaxConnections: 0.184, isBoostOnlySubscription: 1, children: first.message };
    const items4 = [callback3(arg1(closure_2[15]).Text, obj7), ];
    const obj8 = {};
    const obj9 = { "Bool(true)": "/assets/.cache/intl/bW9kdWxlcy9jb2xsZWN0aWJsZXMvd2Vi", "Bool(true)": null };
    const intl2 = arg1(closure_2[10]).intl;
    obj9.text = intl2.string(importDefault(closure_2[11]).fEUKEv);
    obj9.onPress = function onPress() {
      const result = modalSessionId(closure_2[18]).trackAgeVerificationModalClicked(modalSessionId, modalSessionId(closure_2[18]).AgeVerificationModalVersion.EXPRESSIVE_PRIMARY, modalSessionId(closure_2[18]).AgeVerificationModalCta.METHOD_SELECT);
      callback();
    };
    obj8.children = callback3(arg1(closure_2[17]).Button, obj9);
    items4[1] = callback3(arg1(closure_2[16]).ButtonGroup, obj8);
    obj6.children = items4;
    obj5.children = callback4(arg1(closure_2[14]).Stack, obj6);
    obj4.children = callback3(arg1(closure_2[13]).ModalContent, obj5);
    tmp14 = callback3(arg1(closure_2[12]).ModalScreen, obj4);
  }
  return tmp14;
};
