// Module ID: 19687
// Function ID: 19688
// Name: CaptchaModal
// Dependencies: [19, 17, 18263, 18264, 21, 5170, 7207, 1500, 19688, 5418, 6185, 19689, 5781, 1113, 5788, 6617, 19693, 18272, 2]
// Exports: default

// Module 19687 (CaptchaModal)
import intl4 from "intl" /* 1113 */;
import Link from "Link" /* 1500 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 5418 */;
import Text_Text from "Text/Text" /* 5781 */;
import Stack_Stack from "Stack/Stack" /* 6185 */;
import SharedCaptchaUtils from "SharedCaptchaUtils" /* 6617 */;
import RegistrationUIStore from "RegistrationUIStore" /* 18263 */;
import RegistrationUtils from "RegistrationUtils" /* 18272 */;
import DisguiseSpotIllustration from "DisguiseSpotIllustration" /* 19689 */;
import CaptchaUtilsDefault from "CaptchaUtils" /* 19693 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import RegistrationConstants from "RegistrationConstants" /* 18264 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

let navigation;

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
  const tmp2 = closure_11(onReject(7207)());
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
  let closure_9 = onReject(19688)({ onReject, analyticsType: memo });
  const effect = react.useEffect(() => {
    closure_4.dismiss();
  }, []);
  const BottomSheet = Sheet_BottomSheet.BottomSheet;
  let obj2 = { style: tmp2.contentContainer, spacing: 12, children: items1 };
  const Stack = Stack_Stack.Stack;
  items1 = [closure_9(DisguiseSpotIllustration.DisguiseSpotIllustration, { scale: 0.5 }), , ];
  const Text = Text_Text.Text;
  const tmp9 = closure_5;
  if (headerText == null) {
    const intl = tmp3(1113).intl;
    headerText = intl.string(tmp3(1113).t.FpoiHe);
  }
  const items2 = [tmp7(Text, { variant: "heading-xl/semibold", accessibilityRole: "header", children: headerText }), ];
  let obj3 = { variant: "body-md/medium", color: "text-subtle", style: tmp2.description, children: bodyText };
  const Text2 = tmp3(5781).Text;
  if (bodyText == null) {
    const intl2 = tmp3(1113).intl;
    bodyText = intl2.string(tmp3(1113).t["/CidxO"]);
  }
  let obj4 = { startHeight: 900, startExpanded: true, children: tmp8(Stack, obj2) };
  let obj5 = { children: items2 };
  items2[1] = closure_9(Text2, obj3);
  items1[1] = closure_10(tmp9, obj5);
  const obj6 = {
    grow: true,
    onPress: function handleShowCaptcha() {
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
  const Button = tmp3(5788).Button;
  intl3 = tmp3(1113).intl;
  items1[2] = closure_9(Button, obj6);
  return closure_9(BottomSheet, obj4);
};
