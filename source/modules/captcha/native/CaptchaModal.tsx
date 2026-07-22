// Module ID: 15845
// Function ID: 121108
// Name: CaptchaModal
// Dependencies: []
// Exports: default

// Module 15845 (CaptchaModal)
let closure_3 = importAll(dependencyMap[0]);
({ Keyboard: closure_4, View: closure_5 } = arg1(dependencyMap[1]));
let closure_6 = arg1(dependencyMap[2]).doesRegistrationHaveIdentityType;
const tmp2 = arg1(dependencyMap[1]);
({ RegisterTransitionSteps: closure_7, RegistrationTransitionActionTypes: closure_8 } = arg1(dependencyMap[3]));
const tmp3 = arg1(dependencyMap[3]);
({ jsx: closure_9, jsxs: closure_10 } = arg1(dependencyMap[4]));
const tmp4 = arg1(dependencyMap[4]);
let closure_11 = arg1(dependencyMap[5]).createStyles((arg0) => {
  let obj = {};
  obj = {};
  let num = 8;
  if (arg0) {
    num = 32;
  }
  obj.paddingHorizontal = num;
  obj.contentContainer = obj;
  obj.description = {};
  return obj;
});
const obj = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/captcha/native/CaptchaModal.tsx");

export default function CaptchaModal(arg0) {
  let bodyText;
  let headerText;
  let onReject;
  ({ onCaptchaVerify: closure_0, onReject } = arg0);
  const importDefault = onReject;
  ({ close: closure_2, sitekey: closure_3, captchaService: closure_4, headerText, bodyText, rqdata: closure_5, rqtoken: closure_6, userflow: closure_7 } = arg0);
  const tmp = callback2(importDefault(dependencyMap[6])());
  const tmp2 = importDefault(dependencyMap[7])();
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
      if (callback3()) {
        str = "User Registration Captcha";
      }
    }
    return str;
  }, items);
  const callback = importDefault(dependencyMap[8])({ onReject, analyticsType: memo });
  const effect = React.useEffect(() => {
    closure_4.dismiss();
  }, []);
  let obj = { 0: null, 9223372036854775807: null };
  obj = { style: tmp.contentContainer, spacing: 12 };
  const items1 = [callback(arg1(dependencyMap[11]).DisguiseSpotIllustration, { scale: 0.5 }), , ];
  obj = {};
  const obj1 = { tooltipText: false, contain: false };
  if (null == headerText) {
    const intl = arg1(dependencyMap[13]).intl;
    headerText = intl.string(arg1(dependencyMap[13]).t.FpoiHe);
  }
  obj1.children = headerText;
  const items2 = [callback(arg1(dependencyMap[12]).Text, obj1), ];
  const obj2 = { cachedAt: 3, edpbxy: null, style: tmp.description };
  if (null == bodyText) {
    const intl2 = arg1(dependencyMap[13]).intl;
    bodyText = intl2.string(arg1(dependencyMap[13]).t./CidxO);
  }
  obj2.children = bodyText;
  items2[1] = callback(arg1(dependencyMap[12]).Text, obj2);
  obj.children = items2;
  items1[1] = closure_10(closure_5, obj);
  const obj3 = {
    grow: true,
    onPress() {
      callback4();
      callback2();
      const result = callback(callback2[15]).emitCaptchaDistributionMetric(closure_7);
      const obj = callback(callback2[15]);
      const obj2 = onReject(callback2[16]);
      const showCaptchaResult = onReject(callback2[16]).showCaptcha(closure_4, closure_3, closure_5);
      onReject(callback2[16]).showCaptcha(closure_4, closure_3, closure_5).then((arg0) => {
        let tmp = "auth" === store.getState().routes[0].name;
        if (tmp) {
          tmp = callback3();
        }
        if (tmp) {
          let obj = callback(closure_2[17]);
          obj = { step: constants.CAPTCHA, actionType: store.SUBMITTED };
          obj.trackRegTransition(obj);
        }
        callback(arg0, callback3);
        let tmp9 = "auth" === store.getState().routes[0].name;
        if (tmp9) {
          tmp9 = callback3();
        }
        if (tmp9) {
          obj = { step: constants.CAPTCHA, actionType: store.SUCCESS };
          callback(closure_2[17]).trackRegTransition(obj);
          const obj3 = callback(closure_2[17]);
        }
      }).catch((arg0) => {
        if (null != callback2) {
          callback2(arg0);
        }
      });
    }
  };
  const intl3 = arg1(dependencyMap[13]).intl;
  obj3.text = intl3.string(arg1(dependencyMap[13]).t.cY+Oob);
  items1[2] = callback(arg1(dependencyMap[14]).Button, obj3);
  obj.children = items1;
  obj.children = closure_10(arg1(dependencyMap[10]).Stack, obj);
  return callback(arg1(dependencyMap[9]).BottomSheet, obj);
};
