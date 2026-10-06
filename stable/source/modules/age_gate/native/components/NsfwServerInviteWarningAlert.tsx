// Module ID: 9202
// Function ID: 9203
// Name: NsfwServerInviteWarningAlert
// Dependencies: [19, 21, 558, 576, 5049, 1127, 5210, 7863, 7865, 5210, 5206, 2]
// Exports: showNsfwServerInviteWarningAlert

// Module 9202 (NsfwServerInviteWarningAlert)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import intl7 from "intl" /* 1127 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 5049 */;
import useAlertStore from "useAlertStore" /* 5206 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 7863 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 7865 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let c5 = "nsfw-server-invite-warning";
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_6 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(3);
  const obj2 = AgeVerificationUtils;
  const isVerifiedTeen = obj2.useIsVerifiedTeen();
  AgeVerificationUtils;
  if (isVerifiedTeen) {
    let first;
    const _Symbol3 = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { description: intl5.string(intl7.t.dqC1w2), confirmText: intl6.string(intl7.t.FDSSia), joins: false, goBackIsPrimary: true };
      intl5 = tmp(1127).intl;
      intl6 = tmp(1127).intl;
      cResult[0] = obj3;
      first = obj3;
    } else {
      first = cResult[0];
    }
    tmp8 = first;
  } else if (tmp6) {
    let tmp10;
    const _Symbol2 = Symbol;
    if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
      const obj4 = { description: intl3.string(intl7.t.fp3xf5), confirmText: intl4.string(intl7.t.wVq7uo), joins: true, goBackIsPrimary: false };
      intl3 = tmp(1127).intl;
      intl4 = tmp(1127).intl;
      cResult[1] = obj4;
      tmp10 = obj4;
    } else {
      tmp10 = cResult[1];
    }
    tmp8 = tmp10;
  } else {
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const obj5 = { description: intl.string(intl7.t.qiLic6), confirmText: intl2.string(intl7.t.FDSSia), joins: false, goBackIsPrimary: false };
      intl = tmp(1127).intl;
      intl2 = tmp(1127).intl;
      cResult[2] = obj5;
      tmp8 = obj5;
    } else {
      tmp8 = cResult[2];
    }
  }
  return tmp8;
}) : (() => {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let obj4;
  const obj = AgeVerificationUtils;
  const isVerifiedTeen = obj.useIsVerifiedTeen();
  AgeVerificationUtils;
  if (isVerifiedTeen) {
    const obj2 = { description: intl5.string(intl7.t.dqC1w2), confirmText: intl6.string(intl7.t.FDSSia), joins: false, goBackIsPrimary: true };
    intl5 = tmp(1127).intl;
    intl6 = tmp(1127).intl;
    obj4 = obj2;
  } else if (tmp5) {
    const obj3 = { description: intl3.string(intl7.t.fp3xf5), confirmText: intl4.string(intl7.t.wVq7uo), joins: true, goBackIsPrimary: false };
    intl3 = tmp(1127).intl;
    intl4 = tmp(1127).intl;
    obj4 = obj3;
  } else {
    obj4 = { description: intl.string(intl7.t.qiLic6), confirmText: intl2.string(intl7.t.FDSSia), joins: false, goBackIsPrimary: false };
    intl = tmp(1127).intl;
    intl2 = tmp(1127).intl;
  }
  return obj4;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((onConfirm) => {
  let confirmText;
  let description;
  let joins;
  let tmp = onConfirm;
  let obj = onConfirm(joins[3]);
  const cResult = obj.c(19);
  onConfirm = onConfirm.onConfirm;
  const obj2 = onConfirm(joins[6]);
  const dismissModalCallback = obj2.useDismissModalCallback();
  const tmp5 = closure_6();
  ({ description, confirmText, joins } = tmp5);
  const goBackIsPrimary = tmp5.goBackIsPrimary;
  if (cResult[0] === dismissModalCallback) {
    if (cResult[1] === joins) {
      let tmp6;
      if (cResult[2] === onConfirm) {
        tmp6 = cResult[3];
      }
      let str2 = "primary";
      if (goBackIsPrimary) {
        str2 = "secondary";
      }
      if (cResult[4] === confirmText) {
        if (cResult[5] === tmp6) {
          let tmp7;
          let tmp11;
          let tmp13;
          let tmp16;
          let tmp19;
          if (cResult[6] === str2) {
            tmp7 = cResult[7];
          }
          let str4 = "secondary";
          if (goBackIsPrimary) {
            str4 = "primary";
          }
          const _Symbol = Symbol;
          if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = tmp(tmp2[5]).intl;
            const stringResult = intl.string(tmp(joins[5]).t["/g10LC"]);
            cResult[8] = stringResult;
            tmp11 = stringResult;
          } else {
            tmp11 = cResult[8];
          }
          if (cResult[9] !== str4) {
            const tmp15 = jsx(tmp(joins[9]).AlertActionButton, { variant: str4, text: tmp11 }, "go-back");
            cResult[9] = str4;
            cResult[10] = tmp15;
            tmp13 = tmp15;
          } else {
            tmp13 = cResult[10];
          }
          const _Symbol2 = Symbol;
          if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
            const intl2 = tmp(tmp2[5]).intl;
            const stringResult1 = intl2.string(tmp(joins[5]).t.xi46lg);
            cResult[11] = stringResult1;
            tmp16 = stringResult1;
          } else {
            tmp16 = cResult[11];
          }
          if (cResult[12] === tmp7) {
            if (cResult[13] === tmp13) {
              let tmp18;
              if (cResult[14] === goBackIsPrimary) {
                tmp18 = cResult[15];
              }
              if (cResult[16] === description) {
                let tmp20;
                if (cResult[17] === tmp18) {
                  tmp20 = cResult[18];
                }
                return tmp20;
              }
              const tmp22 = jsx(tmp(joins[9]).AlertModal, { title: tmp16, content: description, actions: tmp18 });
              cResult[16] = description;
              cResult[17] = tmp18;
              cResult[18] = tmp22;
              tmp20 = tmp22;
            }
          }
          const items = [, ];
          if (goBackIsPrimary) {
            items[0] = tmp13;
            items[1] = tmp7;
            tmp19 = items;
          } else {
            items[0] = tmp7;
            items[1] = tmp13;
            tmp19 = items;
          }
          cResult[12] = tmp7;
          cResult[13] = tmp13;
          cResult[14] = goBackIsPrimary;
          cResult[15] = tmp19;
          tmp18 = tmp19;
        }
      }
      const tmp9 = jsx(tmp(joins[9]).AlertActionButton, { variant: str2, text: confirmText, onPress: tmp6 }, "confirm");
      cResult[4] = confirmText;
      cResult[5] = tmp6;
      cResult[6] = str2;
      cResult[7] = tmp9;
      tmp7 = tmp9;
    }
  }
  const fn = function o() {
    const tmp = joins;
    if (tmp) {
      onConfirm();
    } else {
      dismissModalCallback();
      const obj = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.NSFW_AGE_GATE };
      const showAgeVerificationGetStartedModal = AgeVerificationActionCreatorsDefault.showAgeVerificationGetStartedModal;
      AgeVerificationActionCreatorsDefault;
      const result = showAgeVerificationGetStartedModal(obj);
    }
  };
  cResult[0] = dismissModalCallback;
  cResult[1] = joins;
  cResult[2] = onConfirm;
  cResult[3] = fn;
  tmp6 = fn;
}) : ((onConfirm) => {
  let confirmText;
  let description;
  let intl;
  let intl2;
  let tmp9;
  onConfirm = onConfirm.onConfirm;
  let joins;
  let tmp = onConfirm;
  let obj = onConfirm(joins[6]);
  const dismissModalCallback = obj.useDismissModalCallback();
  const tmp4 = closure_6();
  joins = tmp4.joins;
  const goBackIsPrimary = tmp4.goBackIsPrimary;
  const items = [dismissModalCallback, joins, onConfirm];
  ({ description, confirmText } = tmp4);
  const tmp6 = jsx;
  const callback = react.useCallback(() => {
    const tmp = joins;
    if (tmp) {
      onConfirm();
    } else {
      dismissModalCallback();
      const obj = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.NSFW_AGE_GATE };
      const showAgeVerificationGetStartedModal = AgeVerificationActionCreatorsDefault.showAgeVerificationGetStartedModal;
      AgeVerificationActionCreatorsDefault;
      const result = showAgeVerificationGetStartedModal(obj);
    }
  }, items);
  let str = "primary";
  const AlertActionButton = onConfirm(joins[9]).AlertActionButton;
  if (goBackIsPrimary) {
    str = "secondary";
  }
  const tmp6Result = tmp6(AlertActionButton, { variant: str, text: confirmText, onPress: callback }, "confirm");
  let str2 = "secondary";
  const AlertActionButton2 = tmp(tmp2[9]).AlertActionButton;
  if (goBackIsPrimary) {
    str2 = "primary";
  }
  const obj2 = { variant: str2, text: intl.string(tmp(joins[5]).t["/g10LC"]) };
  intl = tmp(tmp2[5]).intl;
  const tmp6Result2 = tmp6(AlertActionButton2, obj2, "go-back");
  const obj3 = { title: intl2.string(tmp(joins[5]).t.xi46lg), content: description, actions: tmp9 };
  const AlertModal = tmp(tmp2[9]).AlertModal;
  intl2 = tmp(tmp2[5]).intl;
  const items1 = [, ];
  if (goBackIsPrimary) {
    items1[0] = tmp6Result2;
    items1[1] = tmp6Result;
    tmp9 = items1;
  } else {
    items1[0] = tmp6Result;
    items1[1] = tmp6Result2;
    tmp9 = items1;
  }
  return tmp6(AlertModal, obj3);
});
let closure_7 = tmp2;
let result = size.fileFinishedImporting("modules/age_gate/native/components/NsfwServerInviteWarningAlert.tsx");

export default tmp2;
export const NSFW_SERVER_INVITE_WARNING_ALERT_KEY = "nsfw-server-invite-warning";
export const showNsfwServerInviteWarningAlert = function showNsfwServerInviteWarningAlert(arg0) {
  let onConfirm;
  let onDismiss;
  ({ onConfirm, onDismiss } = arg0);
  const obj = useAlertStore;
  obj.openAlert(c5, <closure_7 onConfirm={onConfirm} />, onDismiss);
};
