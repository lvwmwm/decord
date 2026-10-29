// Module ID: 10083
// Function ID: 10084
// Name: NsfwServerInviteWarningAlert
// Dependencies: [19, 21, 558, 576, 5952, 10084, 7941, 6716, 5952, 1125, 1272, 5948, 2]
// Exports: showNsfwServerInviteWarningAlert

// Module 10083 (NsfwServerInviteWarningAlert)
import Fragment from "Fragment" /* 21 */;
import useAlertStore from "useAlertStore" /* 5948 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 6716 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 7941 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let c5 = "nsfw-server-invite-warning";
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function NsfwServerInviteWarningAlert(onConfirm) {
  let _confirm;
  let description;
  let obj6;
  let tmp6;
  let obj = onConfirm(_confirm[3]);
  const cResult = obj.c(22);
  onConfirm = onConfirm.onConfirm;
  const obj2 = onConfirm(_confirm[4]);
  const dismissModalCallback = obj2.useDismissModalCallback();
  const obj3 = onConfirm(_confirm[5]);
  const gatedAgeGroup = obj3.useGatedAgeGroup();
  if (cResult[0] !== gatedAgeGroup) {
    const tmpResult = onConfirm(_confirm[5]);
    const nsfwServerInviteWarningVariant = tmpResult.getNsfwServerInviteWarningVariant(gatedAgeGroup);
    cResult[0] = gatedAgeGroup;
    cResult[1] = nsfwServerInviteWarningVariant;
    tmp6 = nsfwServerInviteWarningVariant;
  } else {
    tmp6 = cResult[1];
  }
  ({ description, confirm: _confirm } = tmp6);
  const goBackIsPrimary = tmp6.goBackIsPrimary;
  if (cResult[2] === _confirm.joins) {
    if (cResult[3] === dismissModalCallback) {
      let tmp8;
      if (cResult[4] === onConfirm) {
        tmp8 = cResult[5];
      }
      let str2 = "primary";
      if (goBackIsPrimary) {
        str2 = "secondary";
      }
      if (cResult[6] === _confirm.text) {
        if (cResult[7] === tmp8) {
          let tmp9;
          let tmp13;
          let tmp15;
          let tmp18;
          let tmp21;
          if (cResult[8] === str2) {
            tmp9 = cResult[9];
          }
          let str4 = "secondary";
          if (goBackIsPrimary) {
            str4 = "primary";
          }
          const _Symbol = Symbol;
          if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = tmp(tmp2[9]).intl;
            const stringResult = intl.string(onConfirm(_confirm[9]).t["/g10LC"]);
            cResult[10] = stringResult;
            tmp13 = stringResult;
          } else {
            tmp13 = cResult[10];
          }
          if (cResult[11] !== str4) {
            const tmp17 = jsx(onConfirm(_confirm[8]).AlertActionButton, { variant: str4, text: tmp13 }, "go-back");
            cResult[11] = str4;
            cResult[12] = tmp17;
            tmp15 = tmp17;
          } else {
            tmp15 = cResult[12];
          }
          const _Symbol2 = Symbol;
          if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
            const intl2 = tmp(tmp2[9]).intl;
            const stringResult1 = intl2.string(onConfirm(_confirm[9]).t.xi46lg);
            cResult[13] = stringResult1;
            tmp18 = stringResult1;
          } else {
            tmp18 = cResult[13];
          }
          if (cResult[14] === tmp9) {
            if (cResult[15] === tmp15) {
              let tmp20;
              let tmp22;
              if (cResult[16] === goBackIsPrimary) {
                tmp20 = cResult[17];
              }
              const _Symbol3 = Symbol;
              if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
                const obj5 = { impression: obj6 };
                cResult[18] = obj5;
                tmp22 = obj5;
                obj6 = { impressionName: onConfirm(_confirm[10]).ImpressionNames.USER_AGE_GATE_VERIFY };
              } else {
                tmp22 = cResult[18];
              }
              if (cResult[19] === description) {
                let tmp23;
                if (cResult[20] === tmp20) {
                  tmp23 = cResult[21];
                }
                return tmp23;
              }
              const tmp25 = jsx(onConfirm(_confirm[8]).AlertModal, { title: tmp18, content: description, actions: tmp20, trackingProps: tmp22 });
              cResult[19] = description;
              cResult[20] = tmp20;
              cResult[21] = tmp25;
              tmp23 = tmp25;
            }
          }
          const items = [, ];
          if (goBackIsPrimary) {
            items[0] = tmp15;
            items[1] = tmp9;
            tmp21 = items;
          } else {
            items[0] = tmp9;
            items[1] = tmp15;
            tmp21 = items;
          }
          cResult[14] = tmp9;
          cResult[15] = tmp15;
          cResult[16] = goBackIsPrimary;
          cResult[17] = tmp21;
          tmp20 = tmp21;
        }
      }
      const tmp11 = jsx(onConfirm(_confirm[8]).AlertActionButton, { variant: str2, text: _confirm.text, onPress: tmp8 }, "confirm");
      cResult[6] = _confirm.text;
      cResult[7] = tmp8;
      cResult[8] = str2;
      cResult[9] = tmp11;
      tmp9 = tmp11;
    }
  }
  const fn = function f() {
    if (_confirm.joins) {
      onConfirm();
    } else {
      dismissModalCallback();
      const obj = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.NSFW_AGE_GATE };
      const showAgeVerificationGetStartedModal = AgeVerificationActionCreatorsDefault.showAgeVerificationGetStartedModal;
      AgeVerificationActionCreatorsDefault;
      const result = showAgeVerificationGetStartedModal(obj);
    }
  };
  cResult[2] = _confirm.joins;
  cResult[3] = dismissModalCallback;
  cResult[4] = onConfirm;
  cResult[5] = fn;
  tmp8 = fn;
}) : (function NsfwServerInviteWarningAlert(onConfirm) {
  let tmp10;
  onConfirm = onConfirm.onConfirm;
  let _confirm;
  let obj = onConfirm(_confirm[4]);
  const dismissModalCallback = obj.useDismissModalCallback();
  const getNsfwServerInviteWarningVariant = onConfirm(_confirm[5]).getNsfwServerInviteWarningVariant;
  const tmp4 = onConfirm(_confirm[5]);
  const obj2 = onConfirm(_confirm[5]);
  const nsfwServerInviteWarningVariant = getNsfwServerInviteWarningVariant(obj2.useGatedAgeGroup());
  _confirm = nsfwServerInviteWarningVariant.confirm;
  const goBackIsPrimary = nsfwServerInviteWarningVariant.goBackIsPrimary;
  const items = [_confirm.joins, dismissModalCallback, onConfirm];
  const description = nsfwServerInviteWarningVariant.description;
  const callback = react.useCallback(() => {
    if (_confirm.joins) {
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
  const AlertActionButton = onConfirm(_confirm[8]).AlertActionButton;
  if (goBackIsPrimary) {
    str = "secondary";
  }
  const tmp7Result = <AlertActionButton key="confirm" variant={str} text={_confirm.text} onPress={callback} />;
  let str2 = "secondary";
  const AlertActionButton2 = tmp(tmp2[8]).AlertActionButton;
  if (goBackIsPrimary) {
    str2 = "primary";
  }
  const intl = tmp(tmp2[9]).intl;
  const tmp7Result2 = <AlertActionButton2 key="go-back" variant={str2} text={intl.string(onConfirm(_confirm[9]).t["/g10LC"])} />;
  const AlertModal = tmp(tmp2[8]).AlertModal;
  const intl2 = tmp(tmp2[9]).intl;
  const items1 = [, ];
  if (goBackIsPrimary) {
    items1[0] = tmp7Result2;
    items1[1] = tmp7Result;
    tmp10 = items1;
  } else {
    items1[0] = tmp7Result;
    items1[1] = tmp7Result2;
    tmp10 = items1;
  }
  const obj6 = { impression: { impressionName: onConfirm(_confirm[10]).ImpressionNames.USER_AGE_GATE_VERIFY } };
  ({ impressionName: onConfirm(_confirm[10]).ImpressionNames.USER_AGE_GATE_VERIFY });
  return <AlertModal title={intl2.string(onConfirm(_confirm[9]).t.xi46lg)} content={description} actions={tmp10} trackingProps={obj6} />;
});
let closure_6 = tmp2;
let result = size.fileFinishedImporting("modules/age_gate/native/components/NsfwServerInviteWarningAlert.tsx");

export default tmp2;
export const NSFW_SERVER_INVITE_WARNING_ALERT_KEY = "nsfw-server-invite-warning";
export function showNsfwServerInviteWarningAlert(arg0) {
  let onConfirm;
  let onDismiss;
  ({ onConfirm, onDismiss } = arg0);
  const obj = useAlertStore;
  obj.openAlert(c5, <closure_6 onConfirm={onConfirm} />, onDismiss);
}
