// Module ID: 15962
// Function ID: 123281
// Name: CaptchaModal
// Dependencies: [31, 27, 14731, 14732, 33, 4130, 9197, 1508, 15963, 5187, 4541, 5807, 4126, 1212, 4543, 9446, 15964, 14739, 2]
// Exports: default

// Module 15962 (CaptchaModal)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { doesRegistrationHaveIdentityType as closure_6 } from "useRegistrationUIStore";
import RegistrationTransitionActionTypes from "RegistrationTransitionActionTypes";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_4;
let closure_5;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
({ Keyboard: closure_4, View: closure_5 } = get_ActivityIndicator);
({ RegisterTransitionSteps: closure_7, RegistrationTransitionActionTypes: closure_8 } = RegistrationTransitionActionTypes);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
let closure_11 = _createForOfIteratorHelperLoose.createStyles((arg0) => {
  let obj = {};
  obj = { alignItems: "center", paddingVertical: 8 };
  let num = 8;
  if (arg0) {
    num = 32;
  }
  obj.paddingHorizontal = num;
  obj.contentContainer = obj;
  obj.description = { paddingBottom: 12, paddingTop: 4 };
  return obj;
});
let result = require("useRegistrationUIStore").fileFinishedImporting("modules/captcha/native/CaptchaModal.tsx");

export default function CaptchaModal(arg0) {
  let bodyText;
  let result;
  let closure_4;
  let closure_5;
  let closure_6;
  let closure_7;
  let dependencyMap;
  let headerText;
  let onReject;
  let require;
  ({ onCaptchaVerify: require, onReject } = arg0);
  ({ close: dependencyMap, sitekey: result, captchaService: closure_4, headerText, bodyText, rqdata: closure_5, rqtoken: closure_6, userflow: closure_7 } = arg0);
  let tmp = callback2(onReject(9197)());
  const tmp2 = onReject(1508)();
  let closure_8 = tmp2;
  const items = [tmp2];
  const memo = React.useMemo(() => {
    const first = tmp2.getState().routes[0];
    let name;
    if (null != first) {
      name = first.name;
    }
    let str = "Guild Join Captcha";
    if ("auth" === name) {
      str = "Guild Join Captcha";
      if (outer1_6()) {
        str = "User Registration Captcha";
      }
    }
    return str;
  }, items);
  const callback = onReject(15963)({ onReject, analyticsType: memo });
  const effect = React.useEffect(() => {
    outer1_4.dismiss();
  }, []);
  let obj = { startHeight: 900, startExpanded: true };
  obj = { style: tmp.contentContainer, spacing: 12 };
  const items1 = [callback(require(5807) /* AccountAgeTier10LargeBadge */.DisguiseSpotIllustration, { scale: 0.5 }), , ];
  obj = {};
  const obj1 = { variant: "heading-xl/bold", accessibilityRole: "header" };
  if (null == headerText) {
    const intl = require(1212) /* getSystemLocale */.intl;
    headerText = intl.string(require(1212) /* getSystemLocale */.t.FpoiHe);
  }
  obj1.children = headerText;
  const items2 = [callback(require(4126) /* Text */.Text, obj1), ];
  let obj2 = { variant: "text-md/medium", color: "text-subtle", style: tmp.description };
  if (null == bodyText) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    bodyText = intl2.string(require(1212) /* getSystemLocale */.t["/CidxO"]);
  }
  obj2.children = bodyText;
  items2[1] = callback(require(4126) /* Text */.Text, obj2);
  obj.children = items2;
  items1[1] = closure_10(closure_5, obj);
  let obj3 = {
    grow: true,
    onPress() {
      callback2();
      callback();
      const result = outer1_0(outer1_2[15]).emitCaptchaDistributionMetric(closure_7);
      let obj = outer1_0(outer1_2[15]);
      const obj2 = onReject(outer1_2[16]);
      const showCaptchaResult = onReject(outer1_2[16]).showCaptcha(closure_4, result, closure_5);
      onReject(outer1_2[16]).showCaptcha(closure_4, result, closure_5).then((arg0) => {
        let tmp = "auth" === outer1_8.getState().routes[0].name;
        if (tmp) {
          tmp = outer2_6();
        }
        if (tmp) {
          let obj = outer2_0(outer2_2[17]);
          obj = { step: outer2_7.CAPTCHA, actionType: constants.SUBMITTED };
          obj.trackRegTransition(obj);
        }
        outer1_0(arg0, outer1_6);
        let tmp9 = "auth" === outer1_8.getState().routes[0].name;
        if (tmp9) {
          tmp9 = outer2_6();
        }
        if (tmp9) {
          obj = { step: outer2_7.CAPTCHA, actionType: constants.SUCCESS };
          outer2_0(outer2_2[17]).trackRegTransition(obj);
          const obj3 = outer2_0(outer2_2[17]);
        }
      }).catch((arg0) => {
        if (null != outer1_1) {
          outer1_1(arg0);
        }
      });
    }
  };
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj3.text = intl3.string(require(1212) /* getSystemLocale */.t["cY+Oob"]);
  items1[2] = callback(require(4543) /* Button */.Button, obj3);
  obj.children = items1;
  obj.children = closure_10(require(4541) /* Stack */.Stack, obj);
  return callback(require(5187) /* Background */.BottomSheet, obj);
};
