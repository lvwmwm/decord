// Module ID: 9236
// Function ID: 9237
// Name: NsfwServerInviteWarningAlert
// Dependencies: [19, 21, 5048, 1115, 5209, 7859, 7861, 5209, 5205, 2]
// Exports: showNsfwServerInviteWarningAlert

// Module 9236 (NsfwServerInviteWarningAlert)
import Fragment from "Fragment" /* 21 */;
import useAlertStore from "useAlertStore" /* 5205 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 7859 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 7861 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

class NsfwServerInviteWarningAlert {
  constructor(onConfirm) {
    let confirmText;
    let description;
    let intl;
    let intl2;
    let intl3;
    let intl4;
    let intl5;
    let intl6;
    let obj5;
    let tmp11;
    onConfirm = onConfirm.onConfirm;
    let joins;
    let tmp = onConfirm;
    let obj = onConfirm(joins[4]);
    const dismissModalCallback = obj.useDismissModalCallback();
    const obj2 = onConfirm(joins[2]);
    const isVerifiedTeen = obj2.useIsVerifiedTeen();
    onConfirm(joins[2]);
    if (isVerifiedTeen) {
      const obj3 = { description: intl5.string(tmp(joins[3]).t.dqC1w2), confirmText: intl6.string(tmp(joins[3]).t.FDSSia), joins: false, goBackIsPrimary: true };
      intl5 = tmp(tmp2[3]).intl;
      intl6 = tmp(tmp2[3]).intl;
      obj5 = obj3;
    } else if (tmp6) {
      const obj4 = { description: intl3.string(tmp(joins[3]).t.fp3xf5), confirmText: intl4.string(tmp(joins[3]).t.wVq7uo), joins: true, goBackIsPrimary: false };
      intl3 = tmp(tmp2[3]).intl;
      intl4 = tmp(tmp2[3]).intl;
      obj5 = obj4;
    } else {
      obj5 = { description: intl.string(tmp(tmp2[3]).t.qiLic6), confirmText: intl2.string(tmp(tmp2[3]).t.FDSSia), joins: false, goBackIsPrimary: false };
      intl = tmp(tmp2[3]).intl;
      intl2 = tmp(tmp2[3]).intl;
    }
    joins = obj5.joins;
    const goBackIsPrimary = obj5.goBackIsPrimary;
    const items = [dismissModalCallback, joins, onConfirm];
    ({ description, confirmText } = obj5);
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
    const AlertActionButton = tmp(tmp2[7]).AlertActionButton;
    if (goBackIsPrimary) {
      str = "secondary";
    }
    const tmp8Result = <AlertActionButton key="confirm" variant={str} text={confirmText} onPress={callback} />;
    let str2 = "secondary";
    const AlertActionButton2 = tmp(tmp2[7]).AlertActionButton;
    if (goBackIsPrimary) {
      str2 = "primary";
    }
    const intl7 = tmp(tmp2[3]).intl;
    const tmp8Result2 = <AlertActionButton2 key="go-back" variant={str2} text={intl7.string(tmp(joins[3]).t["/g10LC"])} />;
    const AlertModal = tmp(tmp2[7]).AlertModal;
    const intl8 = tmp(tmp2[3]).intl;
    const items1 = [, ];
    if (goBackIsPrimary) {
      items1[0] = tmp8Result2;
      items1[1] = tmp8Result;
      tmp11 = items1;
    } else {
      items1[0] = tmp8Result;
      items1[1] = tmp8Result2;
      tmp11 = items1;
    }
    return <AlertModal title={intl8.string(tmp(joins[3]).t.xi46lg)} content={description} actions={tmp11} />;
  }
}
const jsx = Fragment.jsx;
let c5 = "nsfw-server-invite-warning";
let result = size.fileFinishedImporting("modules/age_gate/native/components/NsfwServerInviteWarningAlert.tsx");

export default NsfwServerInviteWarningAlert;
export const NSFW_SERVER_INVITE_WARNING_ALERT_KEY = "nsfw-server-invite-warning";
export const showNsfwServerInviteWarningAlert = function showNsfwServerInviteWarningAlert(arg0) {
  let onConfirm;
  let onDismiss;
  ({ onConfirm, onDismiss } = arg0);
  const obj = useAlertStore;
  obj.openAlert(c5, <NsfwServerInviteWarningAlert onConfirm={onConfirm} />, onDismiss);
};
