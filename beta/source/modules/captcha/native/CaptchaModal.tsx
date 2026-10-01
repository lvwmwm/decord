// Module ID: 17065
// Function ID: 17066
// Name: CaptchaModal
// Dependencies: [19, 17, 15570, 15571, 21, 4836, 6363, 1486, 17066, 6571, 5279, 17067, 4832, 1115, 5281, 5177, 17069, 15578, 2]
// Exports: default

// Module 17065 (CaptchaModal)
import intl4 from "intl" /* 1115 */;
import Link from "Link" /* 1486 */;
import Text_Text from "Text/Text" /* 4832 */;
import SharedCaptchaUtils from "SharedCaptchaUtils" /* 5177 */;
import Stack_Stack from "Stack/Stack" /* 5279 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 6571 */;
import RegistrationUIStore from "RegistrationUIStore" /* 15570 */;
import RegistrationUtils from "RegistrationUtils" /* 15578 */;
import DisguiseSpotIllustration from "DisguiseSpotIllustration" /* 17067 */;
import CaptchaUtilsDefault from "CaptchaUtils" /* 17069 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import RegistrationConstants from "RegistrationConstants" /* 15571 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let BottomSheet, navigation;

let c10;
let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
({ Keyboard: closure_4, View: hasOwnProperty } = react_native);
let closure_6 = RegistrationUIStore.doesRegistrationHaveIdentityType;
({ RegisterTransitionSteps: metroImportDefault, RegistrationTransitionActionTypes: metroImportAll } = RegistrationConstants);
({ jsx: c9, jsxs: c10 } = Fragment);
let closure_11 = createStyles.createStyles((arg0) => {
  let num = 8;
  const tmp = arg0;
  if (tmp) {
    num = 32;
  }
  return { contentContainer: { alignItems: "center", paddingVertical: 8, paddingHorizontal: num }, description: { paddingBottom: 12, paddingTop: 4 } };
});
let result = size.fileFinishedImporting("modules/captcha/native/CaptchaModal.tsx");

export default function CaptchaModal(arg0) {
  let bodyText;
  let closure_4;
  let closure_5;
  let closure_7;
  let headerText;
  let intl3;
  let items1;
  let onReject;
  ({ onCaptchaVerify: require, onReject } = arg0);
  ({ close: dependencyMap, sitekey: react, captchaService: closure_4, headerText, bodyText, rqdata: closure_5, rqtoken: closure_6, userflow: closure_7 } = arg0);
  let tmp = dependencyMap;
  const tmp2 = closure_11(onReject(6363)());
  let obj = Link;
  navigation = obj.useNavigation();
  const items = [navigation];
  const memo = react.useMemo(() => {
    const state = navigation.getState();
    let name;
    if (state != null) {
      const first = state.routes[0];
      if (first != null) {
        name = first.name;
      }
    }
    let str = "Guild Join Captcha";
    if ("auth" === name) {
      str = "Guild Join Captcha";
      if (closure_6()) {
        str = "User Registration Captcha";
      }
    }
    return str;
  }, items);
  let closure_9 = onReject(17066)({ onReject, analyticsType: memo });
  const effect = react.useEffect(() => {
    closure_4.dismiss();
  }, []);
  BottomSheet = Sheet_BottomSheet.BottomSheet;
  let obj2 = { style: tmp2.contentContainer, spacing: 12, children: items1 };
  const Stack = Stack_Stack.Stack;
  items1 = [closure_9(DisguiseSpotIllustration.DisguiseSpotIllustration, { scale: 0.5 }), , ];
  const Text = Text_Text.Text;
  const tmp9 = closure_5;
  if (headerText == null) {
    const intl = tmp3(1115).intl;
    headerText = intl.string(tmp3(1115).t.FpoiHe);
  }
  const items2 = [tmp7(Text, { variant: "heading-xl/bold", accessibilityRole: "header", children: headerText }), ];
  let obj3 = { variant: "text-md/medium", color: "text-subtle", style: tmp2.description, children: bodyText };
  const Text2 = tmp3(4832).Text;
  if (bodyText == null) {
    const intl2 = tmp3(1115).intl;
    bodyText = intl2.string(tmp3(1115).t["/CidxO"]);
  }
  let obj4 = { startHeight: 900, startExpanded: true, children: tmp8(Stack, obj2) };
  let obj5 = { children: items2 };
  items2[1] = closure_9(Text2, obj3);
  items1[1] = closure_10(tmp9, obj5);
  const obj6 = {
    grow: true,
    onPress() {
      const tmp = closure_9();
      dependencyMap();
      let obj = SharedCaptchaUtils;
      const result = obj.emitCaptchaDistributionMetric(constants);
      let obj2 = CaptchaUtilsDefault;
      const showCaptchaResult = obj2.showCaptcha(closure_4, react, closure_5);
      const nextPromise = showCaptchaResult.then((result) => {
        const obj = state;
        state = state.getState();
        let name;
        if (state != null) {
          const first = state.routes[0];
          if (first != null) {
            name = first.name;
          }
        }
        const tmp4 = "auth" === name && closure_6();
        if (tmp4) {
          const obj3 = { step: constants.CAPTCHA, actionType: navigation.SUBMITTED };
          const obj2 = RegistrationUtils;
          obj2.trackRegTransition(obj3);
        }
        closure_1_0(result, closure_1_6);
        const state1 = obj.getState();
        let name1;
        if (state1 != null) {
          const first1 = state1.routes[0];
          if (first1 != null) {
            name1 = first1.name;
          }
        }
        const tmp15 = "auth" === name1 && closure_6();
        if (tmp15) {
          const obj5 = { step: constants.CAPTCHA, actionType: navigation.SUCCESS };
          const obj4 = RegistrationUtils;
          obj4.trackRegTransition(obj5);
        }
      });
      nextPromise.catch((error) => {
        if (onReject != null) {
          tmp(error);
        }
      });
    },
    text: intl3.string(intl4.t["cY+Oob"])
  };
  const Button = tmp3(5281).Button;
  intl3 = tmp3(1115).intl;
  items1[2] = closure_9(Button, obj6);
  return closure_9(BottomSheet, obj4);
};
