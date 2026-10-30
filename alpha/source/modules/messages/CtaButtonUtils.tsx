// Module ID: 13300
// Function ID: 13301
// Name: CtaButtonUtils
// Dependencies: [11330, 13301, 13302, 504, 2]
// Exports: getCtaButtonType, useCtaButtonType

// Module 13300 (CtaButtonUtils)
import get_initialized from "get initialized" /* 504 */;
import useShouldRenderReportFalsePositiveButton from "useShouldRenderReportFalsePositiveButton" /* 13301 */;
import AgeVerificationSystemNotificationUtils from "AgeVerificationSystemNotificationUtils" /* 13302 */;
import FamilyCenterPendingConnectionStore from "FamilyCenterPendingConnectionStore" /* 11330 */;
import size from "module_2" /* 2 */;

const CtaButtonType = { MARK_AS_FALSE_POSITIVE: "mark_as_false_positive", AGE_VERIFICATION_RETRY: "age_verification_retry", CONNECT_TO_TEEN: "connect_to_teen", AGE_VERIFICATION_MANUAL_REVIEW: "age_verification_manual_review" };
let result = size.fileFinishedImporting("modules/messages/CtaButtonUtils.tsx");

export { CtaButtonType };
export function getCtaButtonType(id, channel_id) {
  let CONNECT_TO_TEEN;
  const obj = useShouldRenderReportFalsePositiveButton;
  if (obj.shouldRenderReportFalsePositiveButton(id)) {
    CONNECT_TO_TEEN = obj.MARK_AS_FALSE_POSITIVE;
  } else {
    const tmpResult = AgeVerificationSystemNotificationUtils;
    if (tmpResult.isAgeVerificationMessageWithRetryCta(channel_id, id)) {
      CONNECT_TO_TEEN = obj.AGE_VERIFICATION_RETRY;
    } else {
      const tmpResult2 = AgeVerificationSystemNotificationUtils;
      if (tmpResult2.isAgeVerificationMessageWithConnectToTeenCta(channel_id, id)) {
        CONNECT_TO_TEEN = obj.CONNECT_TO_TEEN;
      }
    }
  }
  return CONNECT_TO_TEEN;
}
export function useCtaButtonType(id, channel_id) {
  let CONNECT_TO_TEEN;
  let pendingConnection;
  const obj = useShouldRenderReportFalsePositiveButton;
  const shouldRenderReportFalsePositiveButton = obj.useShouldRenderReportFalsePositiveButton(id);
  const obj2 = AgeVerificationSystemNotificationUtils;
  const result = obj2.isAgeVerificationMessageWithRetryCta(channel_id, id);
  const items = [FamilyCenterPendingConnectionStore];
  const obj3 = get_initialized;
  let result1 = null != obj3.useStateFromStores(items, () => pendingConnection.getPendingConnection());
  if (result1) {
    const tmpResult = AgeVerificationSystemNotificationUtils;
    result1 = tmpResult.isAgeVerificationMessageWithConnectToTeenCta(channel_id, id);
  }
  if (shouldRenderReportFalsePositiveButton) {
    CONNECT_TO_TEEN = obj.MARK_AS_FALSE_POSITIVE;
  } else if (result) {
    CONNECT_TO_TEEN = obj.AGE_VERIFICATION_RETRY;
  } else if (result1) {
    CONNECT_TO_TEEN = obj.CONNECT_TO_TEEN;
  }
  return CONNECT_TO_TEEN;
}
