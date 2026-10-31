// Module ID: 10130
// Function ID: 10131
// Name: NsfwServerInviteWarningAlert
// Dependencies: [19, 21, 5964, 10131, 7955, 6729, 5964, 1113, 1260, 5960, 2]
// Exports: showNsfwServerInviteWarningAlert

// Module 10130 (NsfwServerInviteWarningAlert)
import Fragment from "Fragment" /* 21 */;
import useAlertStore from "useAlertStore" /* 5960 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 6729 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 7955 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

class NsfwServerInviteWarningAlert {
  constructor(onConfirm) {
    let tmp10;
    onConfirm = onConfirm.onConfirm;
    let _confirm;
    let obj = onConfirm(_confirm[2]);
    const dismissModalCallback = obj.useDismissModalCallback();
    const getNsfwServerInviteWarningVariant = onConfirm(_confirm[3]).getNsfwServerInviteWarningVariant;
    const tmp4 = onConfirm(_confirm[3]);
    const obj2 = onConfirm(_confirm[3]);
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
    const AlertActionButton = onConfirm(_confirm[6]).AlertActionButton;
    if (goBackIsPrimary) {
      str = "secondary";
    }
    const tmp7Result = <AlertActionButton key="confirm" variant={str} text={_confirm.text} onPress={callback} />;
    let str2 = "secondary";
    const AlertActionButton2 = tmp(tmp2[6]).AlertActionButton;
    if (goBackIsPrimary) {
      str2 = "primary";
    }
    const intl = tmp(tmp2[7]).intl;
    const tmp7Result2 = <AlertActionButton2 key="go-back" variant={str2} text={intl.string(onConfirm(_confirm[7]).t["/g10LC"])} />;
    const AlertModal = tmp(tmp2[6]).AlertModal;
    const intl2 = tmp(tmp2[7]).intl;
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
    const obj6 = { impression: { impressionName: onConfirm(_confirm[8]).ImpressionNames.USER_AGE_GATE_VERIFY } };
    ({ impressionName: onConfirm(_confirm[8]).ImpressionNames.USER_AGE_GATE_VERIFY });
    return <AlertModal title={intl2.string(onConfirm(_confirm[7]).t.xi46lg)} content={description} actions={tmp10} trackingProps={obj6} />;
  }
}
const jsx = Fragment.jsx;
let c5 = "nsfw-server-invite-warning";
let result = size.fileFinishedImporting("modules/age_gate/native/components/NsfwServerInviteWarningAlert.tsx");

export default NsfwServerInviteWarningAlert;
export const NSFW_SERVER_INVITE_WARNING_ALERT_KEY = "nsfw-server-invite-warning";
export function showNsfwServerInviteWarningAlert(arg0) {
  let onConfirm;
  let onDismiss;
  ({ onConfirm, onDismiss } = arg0);
  const obj = useAlertStore;
  obj.openAlert(c5, <NsfwServerInviteWarningAlert onConfirm={onConfirm} />, onDismiss);
}
