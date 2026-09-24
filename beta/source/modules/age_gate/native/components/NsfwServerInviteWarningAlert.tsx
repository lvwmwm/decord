// Module ID: 10043
// Function ID: 10044
// Name: NsfwServerInviteWarningAlert
// Dependencies: [19, 21, 558, 568, 5002, 1119, 5148, 8719, 8721, 5148, 5144, 2]
// Exports: showNsfwServerInviteWarningAlert

// Module 10043 (NsfwServerInviteWarningAlert)
import c from "c" /* 568 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 5002 */;
import useAlertStore from "useAlertStore" /* 5144 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8719 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 8721 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let c5 = "nsfw-server-invite-warning";
let ReactCompilerGating = fn(558);
let closure_6 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let stringResult = dependencyMap;
  const cResult = c.c(3);
  const isVerifiedTeen = AgeVerificationUtils.useIsVerifiedTeen();
  AgeVerificationUtils;
  if (isVerifiedTeen) {
    const _Symbol3 = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { description: null, confirmText: null, joins: false, goBackIsPrimary: true };
      const intl5 = tmp(1119).intl;
      obj3.description = intl5.string(tmp(1119).t.dqC1w2);
      const intl6 = tmp(1119).intl;
      stringResult = intl6.string(tmp(1119).t.FDSSia);
      obj3.confirmText = stringResult;
      cResult[0] = obj3;
      let first = obj3;
    } else {
      first = cResult[0];
    }
  } else if (tmp6) {
    const _Symbol2 = Symbol;
    if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
      const obj4 = { description: null, confirmText: null, joins: true, goBackIsPrimary: false };
      const intl3 = tmp(1119).intl;
      obj4.description = intl3.string(tmp(1119).t.fp3xf5);
      const intl4 = tmp(1119).intl;
      obj4.confirmText = intl4.string(tmp(1119).t.wVq7uo);
      cResult[1] = obj4;
    }
  } else {
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const obj5 = { description: null, confirmText: null, joins: false, goBackIsPrimary: false };
      const intl = tmp(1119).intl;
      obj5.description = intl.string(tmp(1119).t.qiLic6);
      const intl2 = tmp(1119).intl;
      obj5.confirmText = intl2.string(tmp(1119).t.FDSSia);
      cResult[2] = obj5;
      let tmp8 = obj5;
    } else {
      tmp8 = cResult[2];
    }
    return tmp8;
  }
}) : (() => {
  const isVerifiedTeen = AgeVerificationUtils.useIsVerifiedTeen();
  AgeVerificationUtils;
  if (isVerifiedTeen) {
    const obj2 = { description: null, confirmText: null, joins: false, goBackIsPrimary: true };
    const intl5 = tmp(1119).intl;
    obj2.description = intl5.string(tmp(1119).t.dqC1w2);
    const intl6 = tmp(1119).intl;
    obj2.confirmText = intl6.string(tmp(1119).t.FDSSia);
    let obj4 = obj2;
  } else if (tmp5) {
    const obj3 = { description: null, confirmText: null, joins: true, goBackIsPrimary: false };
    const intl3 = tmp(1119).intl;
    obj3.description = intl3.string(tmp(1119).t.fp3xf5);
    const intl4 = tmp(1119).intl;
    obj3.confirmText = intl4.string(tmp(1119).t.wVq7uo);
    obj4 = obj3;
  } else {
    obj4 = { description: null, confirmText: null, joins: false, goBackIsPrimary: false };
    const intl = tmp(1119).intl;
    obj4.description = intl.string(tmp(1119).t.qiLic6);
    const intl2 = tmp(1119).intl;
    obj4.confirmText = intl2.string(tmp(1119).t.FDSSia);
  }
  return obj4;
});
ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((onConfirm) => {
  const cResult = onConfirm(joins[3]).c(19);
  onConfirm = onConfirm.onConfirm;
  let obj = onConfirm(joins[3]);
  const dismissModalCallback = onConfirm(joins[6]).useDismissModalCallback();
  const tmp5 = closure_6();
  ({ description, confirmText, joins } = tmp5);
  const goBackIsPrimary = tmp5.goBackIsPrimary;
  if (cResult[0] === dismissModalCallback) {
    if (cResult[1] === joins) {
      if (cResult[2] === onConfirm) {
        let tmp6 = cResult[3];
      }
      let str2 = "primary";
      if (goBackIsPrimary) {
        str2 = "secondary";
      }
      if (cResult[4] === confirmText) {
        if (cResult[5] === tmp6) {
          if (cResult[6] === str2) {
            let tmp7 = cResult[7];
          }
          let str4 = "secondary";
          if (goBackIsPrimary) {
            str4 = "primary";
          }
          const _Symbol = Symbol;
          if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = tmp(tmp2[5]).intl;
            const stringResult = intl.string(tmp(tmp2[5]).t["/g10LC"]);
            cResult[8] = stringResult;
            let tmp11 = stringResult;
          } else {
            tmp11 = cResult[8];
          }
          if (cResult[9] !== str4) {
            const obj3 = { variant: str4, text: tmp11 };
            const tmp15 = jsx(tmp(tmp2[9]).AlertActionButton, { variant: str4, text: tmp11 }, "go-back");
            cResult[9] = str4;
            cResult[10] = tmp15;
            let tmp13 = tmp15;
          } else {
            tmp13 = cResult[10];
          }
          const _Symbol2 = Symbol;
          if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
            const intl2 = tmp(tmp2[5]).intl;
            const stringResult1 = intl2.string(tmp(tmp2[5]).t.xi46lg);
            cResult[11] = stringResult1;
            let tmp16 = stringResult1;
          } else {
            tmp16 = cResult[11];
          }
          if (cResult[12] === tmp7) {
            if (cResult[13] === tmp13) {
              if (cResult[14] === goBackIsPrimary) {
                if (cResult[16] === description) {
                  if (cResult[17] === tmp18) {
                    let tmp21 = cResult[18];
                  }
                  return tmp21;
                }
                const obj4 = { title: tmp16, content: description, actions: cResult[15] };
                const tmp23 = jsx(tmp(tmp2[9]).AlertModal, { title: tmp16, content: description, actions: cResult[15] });
                cResult[16] = description;
                cResult[17] = cResult[15];
                cResult[18] = tmp23;
                tmp21 = tmp23;
              }
            }
          }
          const items = [, ];
          if (goBackIsPrimary) {
            items[0] = tmp13;
            items[1] = tmp7;
            let tmp19 = items;
          } else {
            items[0] = tmp7;
            items[1] = tmp13;
            tmp19 = items;
          }
          cResult[12] = tmp7;
          cResult[13] = tmp13;
          cResult[14] = goBackIsPrimary;
          cResult[15] = tmp19;
        }
      }
      const obj5 = { variant: str2, text: confirmText, onPress: tmp6 };
      const tmp9 = jsx(tmp(tmp2[9]).AlertActionButton, { variant: str2, text: confirmText, onPress: tmp6 }, "confirm");
      cResult[4] = confirmText;
      cResult[5] = tmp6;
      cResult[6] = str2;
      cResult[7] = tmp9;
      tmp7 = tmp9;
    }
  }
  const fn = function o() {
    if (joins) {
      onConfirm();
    } else {
      dismissModalCallback();
      const obj2 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.NSFW_AGE_GATE };
      const result = AgeVerificationActionCreatorsDefault.showAgeVerificationGetStartedModal(obj2);
    }
  };
  cResult[0] = dismissModalCallback;
  cResult[1] = joins;
  cResult[2] = onConfirm;
  cResult[3] = fn;
  tmp6 = fn;
}) : ((onConfirm) => {
  onConfirm = onConfirm.onConfirm;
  let joins;
  const dismissModalCallback = onConfirm(joins[6]).useDismissModalCallback();
  const tmp4 = closure_6();
  joins = tmp4.joins;
  const goBackIsPrimary = tmp4.goBackIsPrimary;
  const items = [dismissModalCallback, joins, onConfirm];
  ({ description, confirmText } = tmp4);
  const callback = noop.useCallback(() => {
    if (joins) {
      onConfirm();
    } else {
      dismissModalCallback();
      const obj2 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.NSFW_AGE_GATE };
      const result = AgeVerificationActionCreatorsDefault.showAgeVerificationGetStartedModal(obj2);
    }
  }, items);
  let str = "primary";
  if (goBackIsPrimary) {
    str = "secondary";
  }
  const tmp6Result = jsx(onConfirm(joins[9]).AlertActionButton, { variant: str, text: confirmText, onPress: callback }, "confirm");
  let str2 = "secondary";
  if (goBackIsPrimary) {
    str2 = "primary";
  }
  let obj2 = { variant: str2, text: null };
  const intl = tmp(tmp2[5]).intl;
  obj2.text = intl.string(onConfirm(joins[5]).t["/g10LC"]);
  const tmp6Result2 = jsx(onConfirm(joins[9]).AlertActionButton, { variant: str2, text: null }, "go-back");
  const obj3 = { title: null, content: null, actions: null };
  const intl2 = tmp(tmp2[5]).intl;
  obj3.title = intl2.string(onConfirm(joins[5]).t.xi46lg);
  obj3.content = description;
  const items1 = [, ];
  if (goBackIsPrimary) {
    items1[0] = tmp6Result2;
    items1[1] = tmp6Result;
    let tmp9 = items1;
  } else {
    items1[0] = tmp6Result;
    items1[1] = tmp6Result2;
    tmp9 = items1;
  }
  obj3.actions = tmp9;
  return jsx(onConfirm(joins[9]).AlertModal, { title: null, content: null, actions: null });
});
let closure_7 = tmp2;
const size = fn(2);
let result = size.fileFinishedImporting("modules/age_gate/native/components/NsfwServerInviteWarningAlert.tsx");

export default tmp2;
export const NSFW_SERVER_INVITE_WARNING_ALERT_KEY = "nsfw-server-invite-warning";
export const showNsfwServerInviteWarningAlert = function showNsfwServerInviteWarningAlert(arg0) {
  ({ onConfirm, onDismiss } = arg0);
  useAlertStore.openAlert(c5, <closure_7 onConfirm={onConfirm} />, onDismiss);
};
